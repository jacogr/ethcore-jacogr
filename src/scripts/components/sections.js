const requirements = require('../constants/ethcore.js');
const comments = require('../constants/comments.js');

const Section = require('./section'); // eslint-disable-line no-unused-vars

const Sections = React.createClass({
  render: function() {
    const sections = Object.keys(requirements).map((key) => {
      return <Section key={key} header={key} requirement={requirements[key]} comment={comments[key]} />;
    });

    return (
      <div className='sections'>{sections}</div>
    );
  }
});

module.exports = Sections;
