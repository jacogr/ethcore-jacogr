const FormatterMixin = {
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
      return this.formatNumber(entry);
    } else if (type === '[object String]') {
      // special case for mid-capital strings
      if (/^GitHub/.test(entry)) {
        entry = entry.replace('GitHub', 'Github');
      } else if (/^MacOSX/.test(entry)) {
        entry = entry.replace('MacOSX', 'MacOsX');
      }
    }

    return entry.split(/(?=[A-Z])/).join(' ').toLowerCase();
  },

  formatEntries: function(type, entries) {
    return entries.map((entry) => {
      return this.formatEntry(type, entry);
    });
  }
};

module.exports = FormatterMixin;
