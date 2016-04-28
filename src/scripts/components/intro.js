const Intro = React.createClass({
  render: function() {
    let idx = 0;

    const blurb = this.props.blurb.map((text) => {
      return <div className='normal' key={++idx}>{text}</div>;
    });

    const urls = Object.keys(this.props.url).map((text) => {
      const url = this.props.url[text];

      return <div className='url' key={++idx}><a href={url}>{url}</a> ({text})</div>;
    });

    return (
      <div className='intro'>
        <div className='large'>{this.props.name}</div>
        {blurb}
        {urls}
      </div>
    );
  }
});

module.exports = Intro;
