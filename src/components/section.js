const createRequirement = function(requirement, status, key) {
  const spec = requirement.$$typeof ? requirement : <div className='spec'>{requirement}</div>;

  return (
    <div key={key} className='requirement'>
      {spec}
      <div className='match'>{status}</div>
    </div>
  );
};

const ECSection = React.createClass({
  render: function() {
    const requirement = this.props.requirement;
    const status = this.props.status;
    const reqType = Object.prototype.toString.call(requirement);

    let detail = createRequirement(requirement, status);

    if (reqType === '[object Array]') {
      detail = createRequirement(requirement.join(', '), status);
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
          </div>), status && status[subkey], subkey);
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
