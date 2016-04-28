const Intro = require('./intro'); // eslint-disable-line no-unused-vars
const Sections = require('./sections'); // eslint-disable-line no-unused-vars

const Page = React.createClass({
  render: function() {
    const name = 'Jaco Greeff';
    const blurb = [
      'This one is too good to pass up and much too impactful to let slide.',
      'Probably overkill for intented position, but nothing ventured, nothing gained.'
    ];
    const url = {
      'Full CV': 'http://jacogr.github.io/cv',
      'Ethereum playground': 'http://theblock.github.io'
    };

    return (
      <div className='page'>
        <Intro name={name} blurb={blurb} url={url} />
        <Sections />
      </div>
    );
  }
});

module.exports = Page;
