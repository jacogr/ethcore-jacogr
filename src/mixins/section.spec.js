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
});
