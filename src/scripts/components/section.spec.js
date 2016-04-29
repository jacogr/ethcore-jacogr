const utils = require('react-addons-test-utils');

const Section = require('./section');  // eslint-disable-line no-unused-vars

describe('components/section', () => {
  describe('rendering requirement sections (simple)', () => {
    let component;

    beforeEach(() => {
      component = utils.renderIntoDocument(
        <Section header='header' requirement='requirement' comment='comment' />
      );
    });

    it('renders into section', () => {
      expect(utils.findRenderedDOMComponentWithClass(component, 'section')).to.be.ok;
    });

    it('has the correct header', () => {
      expect(utils.findRenderedDOMComponentWithClass(component, 'header').textContent).to.equal('header');
    });

    it('has the correct requirement', () => {
      expect(utils.findRenderedDOMComponentWithClass(component, 'spec').textContent).to.equal('requirement');
    });

    it('has the correct comment', () => {
      expect(utils.findRenderedDOMComponentWithClass(component, 'comment').textContent).to.equal('comment');
    });
  });

  describe('rendering requirement sections (array)', () => {
    const values = ['abc', 'def', 'xyz'];
    let component;

    beforeEach(() => {
      component = utils.renderIntoDocument(
        <Section header='header' requirement={values} comment='comment' />
      );
    });

    it('has the correct requirement', () => {
      expect(utils.findRenderedDOMComponentWithClass(component, 'spec').textContent).to.equal(values.join(', '));
    });
  });

  describe('rendering requirement sections (object)', () => {
    describe('simple requirements', () => {
      const values = {
        test: 'requirement'
      };
      let component;

      beforeEach(() => {
        component = utils.renderIntoDocument(
          <Section header='header' requirement={values} comment='comment' />
        );
      });

      it('has the correct requirement', () => {
        expect(utils.findRenderedDOMComponentWithClass(component, 'spec').textContent).to.equal(`test${values.test}`);
      });
    });

    describe('array requirements', () => {
      const values = {
        test: ['abc', 'def', 'xyz']
      };
      let component;

      beforeEach(() => {
        component = utils.renderIntoDocument(
          <Section header='header' requirement={values} comment='comment' />
        );
      });

      it('has the correct requirement', () => {
        expect(utils.findRenderedDOMComponentWithClass(component, 'spec').textContent).to.equal(`test${values.test.join(', ')}`);
      });
    });

    describe('object requirements', () => {
      const values = {
        test: { test: 'abc' }
      };
      let component;

      beforeEach(() => {
        component = utils.renderIntoDocument(
          <Section header='header' requirement={values} comment='comment' />
        );
      });

      it('has the correct requirement', () => {
        expect(utils.findRenderedDOMComponentWithClass(component, 'spec').textContent).to.equal('testtest abc');
      });
    });
  });
});
