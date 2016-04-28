const requirements = require('../constants/ethcore.js');
const comments = require('../constants/comments.js');

const ECSection = require('./section'); // eslint-disable-line no-unused-vars

const ECMatcher = React.createClass({
  render: function() {
    return (
      <div className='page'>
        <div className='intro'>
          <div className='large'>Jaco Greeff</div>
          <div className='normal'>This one is too good to pass up and much too impactful to let slide.</div>
          <div className='normal spaced'>Probably overkill for intented position, but nothing ventured, nothing gained.</div>
          <div className='normal'><a href='http://jacogr.github.io/cv'>http://jacogr.github.io/cv</a> (Full CV)</div>
          <div className='normal'><a href='http://theblock.github.io/'>http://theblock.github.io</a> (Ethereum playground)</div>
        </div>
        <div className='container'>
          {Object.keys(requirements).map((key) => {
            return (
              <ECSection key={key} header={key} requirement={requirements[key]} comment={comments[key]} />
            );
          })}
        </div>
      </div>
    );
  }
});

module.exports = ECMatcher;
