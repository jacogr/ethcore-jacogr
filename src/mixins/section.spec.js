const expect = require('chai').expect;
global.moment = require('moment');

const section = require('./section');

describe('mixins/section', () => {
  describe('formatBoolean', () => {
    it('formats true into yes', () => {
      expect(section.formatBoolean(true)).to.equal('yes');
    });

    it('formats false into no', () => {
      expect(section.formatBoolean(false)).to.equal('no');
    });
  });

  describe('formatDate', () => {
    it('formats timestamps into human-readable', () => {
      expect(section.formatDate(1461827495755)).to.equal('28th april 2016');
    });
  });

  describe('formatHours', () => {
    it('formats seconds into hours', () => {
      expect(section.formatHours(28 * 60 * 60)).to.equal('28h');
    });
  });

  describe('formatNumber', () => {
    it('formats numbers into decimal grouping', () => {
      expect(section.formatNumber(12345678)).to.equal('12,345,678');
    });
  });

  describe('formatTime', () => {
    it('formats HHmm into HHhmm', () => {
      expect(section.formatTime(1234)).to.equal('12h34');
    });
  });

  describe('formatEntry', () => {
    describe('key overrides', () => {
      it('formats startdate', () => {
        expect(section.formatEntry('startdate', 1461827495755)).to.equal('28th april 2016');
      });

      it('formats currency', () => {
        expect(section.formatEntry('currency', 'EUR')).to.equal('eur');
      });

      it('formats from and to', () => {
        expect(section.formatEntry('from', '0800')).to.equal('08h00');
        expect(section.formatEntry('to', '1800')).to.equal('18h00');
      });

      it('formats the workweek', () => {
        expect(section.formatEntry('workweek', 40 * 60 * 60)).to.equal('40h');
      });
    });

    describe('object types', () => {
      it('formats booleans into yes/no', () => {
        expect(section.formatEntry('bool', true)).to.equal('yes');
        expect(section.formatEntry('bool', false)).to.equal('no');
      });

      it('formats number groupings', () => {
        expect(section.formatEntry('number', 123)).to.equal('123');
        expect(section.formatEntry('number', 12345678)).to.equal('12,345,678');
      });
    });

    describe('special-case strings', () => {
      it('formats GitHubWiki correctly', () => {
        expect(section.formatEntry('github', 'GitHubWiki')).to.equal('github wiki');
      });

      it('formats MacOSX correctly', () => {
        expect(section.formatEntry('mac', 'MacOSX')).to.equal('mac os x');
      });
    });
  });
});
