const utils = require('react-addons-test-utils');

const Sections = require('./sections');  // eslint-disable-line no-unused-vars

describe('components/sections', () => {
  let component;

  beforeEach(() => {
    component = utils.renderIntoDocument(
      <Sections />
    );
  });

  it('renders the page sections', () => {
    expect(utils.findRenderedDOMComponentWithClass(component, 'sections')).to.be.ok;
  });
});
