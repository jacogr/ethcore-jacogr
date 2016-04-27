const ECSectionMixin = require('../mixins/section');

const ECSection = React.createClass({
  mixins: [ECSectionMixin],

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
