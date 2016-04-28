const utils = require('react-addons-test-utils');

const Intro = require('./intro');  // eslint-disable-line no-unused-vars

describe('components/intro', () => {
  const name = 'me';
  const blurb = ['blurb'];
  const urls = { test: 'http://test.com' };

  let component;

  beforeEach(() => {
    component = utils.renderIntoDocument(
      <Intro name={name} blurb={blurb} url={urls} />
    );
  });

  it('has the correct name', () => {
    expect(utils.findRenderedDOMComponentWithClass(component, 'large').textContent).to.equal(name);
  });

  it('has the correct requirement', () => {
    expect(utils.findRenderedDOMComponentWithClass(component, 'normal').textContent).to.equal(blurb[0]);
  });

  it('has the correct comment', () => {
    expect(utils.findRenderedDOMComponentWithClass(component, 'url').textContent).to.equal(`${urls.test} (test)`);
  });
});
