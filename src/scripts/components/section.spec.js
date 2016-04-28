const expect = require('chai').expect;
const utils = require('react-addons-test-utils');

const ECSection = require('./section');  // eslint-disable-line no-unused-vars

describe('components/section', () => {
  describe('redendering requirement sections', () => {
    let renderedComponent;

    beforeEach(() => {
      renderedComponent = utils.renderIntoDocument(
        <ECSection header='header' requirement='requirement' comment='comment' />
      );

      console.error(renderedComponent);
    });

    it('renders', () => {
      expect(renderedComponent).to.be.ok;
    });
  });
});
