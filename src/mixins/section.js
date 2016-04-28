const ECSectionMixin = {
  formatBoolean: function(boolean) {
    return boolean ? 'yes' : 'no';
  },

  formatDate: function(date) {
    return moment(date).format('Do MMMM YYYY').toLowerCase();
  },

  formatHours: function(seconds) {
    return `${seconds / (60 * 60)}h`;
  },

  formatNumber: function(number) {
    return `${number}`.replace(/(\d)(?=(\d{3})+\b)/g, '$1,');
  },

  formatTime: function(time) {
    return `${time}`.replace(/(\d)(?=(\d{2})+\b)/g, '$1h');
  },

  formatEntry: function(key, _entry) {
    let entry = _entry;
    const type = Object.prototype.toString.call(entry);

    // specific key formatting
    if (key === 'startdate') {
      return this.formatDate(entry);
    } else if (key === 'amount') {
      return this.formatNumber(entry);
    } else if (key === 'currency') {
      return entry.toLowerCase();
    } else if (key === 'from' || key === 'to') {
      return this.formatTime(entry);
    } else if (key === 'workweek') {
      return this.formatHours(entry);
    }

    // type formatting
    if (type === '[object Boolean]') {
      return this.formatBoolean(entry);
    } else if (type === '[object Number]') {
      return entry;
    }

    // special case for mid-capital strings
    if (/^GitHub/.test(entry)) {
      entry = entry.replace('GitHub', 'Github');
    } else if (/^MacOSX/.test(entry)) {
      entry = entry.replace('MacOSX', 'MacOsX');
    }

    return entry.split(/(?=[A-Z])/).join(' ').toLowerCase();
  },

  formatEntries: function(type, entries) {
    return entries.map((entry) => {
      return this.formatEntry(type, entry);
    });
  },

  createRequirement: function(requirement, comment, key) {
    const spec = requirement.$$typeof ? requirement : <div className='spec'>{requirement}</div>;

    return (
      <div key={key} className='requirement'>
        {spec}
        <div className='match'>{comment}</div>
      </div>
    );
  },

  createArrayRequirement: function(requirement, comment) {
    return this.createRequirement(this.formatEntries(null, requirement).join(', '), comment);
  },

  createObjectRequirement: function(requirement, comment) {
    return Object.keys(requirement).map((subkey) => {
      const infoType = Object.prototype.toString.call(requirement[subkey]);
      let info = requirement[subkey];

      if (infoType === '[object Array]') {
        info = this.formatEntries(subkey, requirement[subkey]).join(', ');
      } else if (infoType === '[object Object]') {
        info = Object.keys(requirement[subkey]).map((loopkey) => {
          return (
            <div key={loopkey}>{loopkey} {this.formatEntry(loopkey, info[loopkey])}</div>
          );
        });
      } else {
        info = this.formatEntry(subkey, requirement[subkey]);
      }

      return this.createRequirement((
        <div className='spec'>
          <div className='column light'>{subkey}</div>
          <div className='column'>{info}</div>
        </div>), comment && comment[subkey], subkey);
    });
  }
};

module.exports = ECSectionMixin;
