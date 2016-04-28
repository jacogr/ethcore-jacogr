const utils = require('react-addons-test-utils');

const Page = require('./page');  // eslint-disable-line no-unused-vars

describe('components/page', () => {
  let component;

  beforeEach(() => {
    component = utils.renderIntoDocument(
      <Page />
    );
  });

  it('renders the page intro', () => {
    expect(utils.findRenderedDOMComponentWithClass(component, 'intro')).to.be.ok;
  });

  it('renders the page sections', () => {
    expect(utils.findRenderedDOMComponentWithClass(component, 'sections')).to.be.ok;
  });
});
