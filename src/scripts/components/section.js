const FormatterMixin = require('../mixins/formatter');

const ECSection = React.createClass({
  mixins: [FormatterMixin],

  createRequirement: function(requirement, comment, key) {
    const spec = requirement.$$typeof ? requirement : <div className='spec'>{requirement}</div>;

    return (
      <div key={key} className='requirement'>
        {spec}
        <div className='comment'>{comment}</div>
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
  },

  render: function() {
    const requirement = this.props.requirement;
    const comment = this.props.comment;
    const reqType = Object.prototype.toString.call(requirement);

    let detail;

    if (reqType === '[object Array]') {
      detail = this.createArrayRequirement(requirement, comment);
    } else if (reqType === '[object Object]') {
      detail = this.createObjectRequirement(requirement, comment);
    } else {
      detail = this.createRequirement(requirement, comment);
    }

    return (
      <div className='section'>
        <div className='header'>{this.props.header}</div>
        <div className='content'>{detail}</div>
      </div>
    );
  }
});

module.exports = ECSection;
