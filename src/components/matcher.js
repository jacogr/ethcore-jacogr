const requirements = require('./ethcore.js');
const comments = require('./comments.js');

const ECSection = require('./section'); // eslint-disable-line no-unused-vars

const ECMatcher = React.createClass({
  render: function() {
    return (
      <div className='container'>
        {Object.keys(requirements).map((key) => {
          return (
            <ECSection key={key} header={key} requirement={requirements[key]} comment={comments[key]} />
          );
        })}
      </div>
    );
  }
});

module.exports = ECMatcher;
