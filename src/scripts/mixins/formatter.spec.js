const formatter = require('./formatter');

describe('mixins/formatter', () => {
  describe('formatBoolean', () => {
    it('formats true into yes', () => {
      expect(formatter.formatBoolean(true)).to.equal('yes');
    });

    it('formats false into no', () => {
      expect(formatter.formatBoolean(false)).to.equal('no');
    });
  });

  describe('formatDate', () => {
    it('formats timestamps into human-readable', () => {
      expect(formatter.formatDate(1461827495755)).to.equal('28th april 2016');
    });
  });

  describe('formatHours', () => {
    it('formats seconds into hours', () => {
      expect(formatter.formatHours(28 * 60 * 60)).to.equal('28h');
    });
  });

  describe('formatNumber', () => {
    it('formats numbers into decimal grouping', () => {
      expect(formatter.formatNumber(12345678)).to.equal('12,345,678');
    });
  });

  describe('formatTime', () => {
    it('formats HHmm into HHhmm', () => {
      expect(formatter.formatTime(1234)).to.equal('12h34');
    });
  });

  describe('formatEntry', () => {
    describe('key overrides', () => {
      it('formats startdate', () => {
        expect(formatter.formatEntry('startdate', 1461827495755)).to.equal('28th april 2016');
      });

      it('formats currency', () => {
        expect(formatter.formatEntry('currency', 'EUR')).to.equal('eur');
      });

      it('formats from and to', () => {
        expect(formatter.formatEntry('from', '0800')).to.equal('08h00');
        expect(formatter.formatEntry('to', '1800')).to.equal('18h00');
      });

      it('formats the workweek', () => {
        expect(formatter.formatEntry('workweek', 40 * 60 * 60)).to.equal('40h');
      });
    });

    describe('object types', () => {
      it('formats booleans into yes/no', () => {
        expect(formatter.formatEntry('bool', true)).to.equal('yes');
        expect(formatter.formatEntry('bool', false)).to.equal('no');
      });

      it('formats number groupings', () => {
        expect(formatter.formatEntry('number', 123)).to.equal('123');
        expect(formatter.formatEntry('number', 12345678)).to.equal('12,345,678');
      });
    });

    describe('special-case strings', () => {
      it('formats GitHubWiki correctly', () => {
        expect(formatter.formatEntry('github', 'GitHubWiki')).to.equal('github wiki');
      });

      it('formats MacOSX correctly', () => {
        expect(formatter.formatEntry('mac', 'MacOSX')).to.equal('mac os x');
      });
    });

    it('splits titlecase strings', () => {
      expect(formatter.formatEntry('case', 'TwoToTwenty')).to.equal('two to twenty');
    });

    it('converts everything to lowercase', () => {
      expect(formatter.formatEntry('case', 'something Something')).to.equal('something  something');
    });
  });

  describe('formatEntries', () => {
    it('formats multiples', () => {
      expect(formatter.formatEntries('case', ['abc', 'def'])).to.deep.equal(['abc', 'def']);
    });
  });
});
