const requirements = require('./ethcore.js');
const status = require('./status.js');

const ECSection = require('./section'); // eslint-disable-line no-unused-vars

const ECMatcher = React.createClass({
  render: function() {
    return (
      <div>
        {Object.keys(requirements).map((key) => {
          return (
            <ECSection key={key} header={key} requirement={requirements[key]} status={status[key]} />
          );
        })}
      </div>
    );
  }
});

module.exports = ECMatcher;
