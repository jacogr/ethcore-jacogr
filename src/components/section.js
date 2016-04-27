const createRequirement = function(requirement, comment, key) {
  const spec = requirement.$$typeof ? requirement : <div className='spec'>{requirement}</div>;

  return (
    <div key={key} className='requirement'>
      {spec}
      <div className='match'>{comment}</div>
    </div>
  );
};

const ECSection = React.createClass({
  render: function() {
    const requirement = this.props.requirement;
    const comment = this.props.comment;
    const reqType = Object.prototype.toString.call(requirement);

    let detail = createRequirement(requirement, comment);

    if (reqType === '[object Array]') {
      detail = createRequirement(requirement.join(', '), comment);
    } else if (reqType === '[object Object]') {
      detail = Object.keys(requirement).map((subkey) => {
        const infoType = Object.prototype.toString.call(requirement[subkey]);
        let info = requirement[subkey];

        if (infoType === '[object Array]') {
          info = info.join(', ');
        } else if (infoType === '[object Boolean]') {
          info = info ? 'Yes' : 'No';
        } else if (infoType === '[object Object]') {
          info = Object.keys(info).map((loopkey) => {
            return (
              <div key={loopkey}>{loopkey} {info[loopkey]}</div>
            );
          });
        }

        return createRequirement((
          <div className='spec'>
            <div className='column light'>{subkey}</div>
            <div className='column'>{info}</div>
          </div>), comment && comment[subkey], subkey);
      });
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
