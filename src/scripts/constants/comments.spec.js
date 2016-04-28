const comments = require('./comments');
const ethcore = require('./ethcore');

describe('constants/comments', () => {
  it('contains the full list of section keys from the spec', () => {
    Object.keys(ethcore).forEach((sectionKey) => {
      expect(comments[sectionKey] ? 'ok' : `${sectionKey} not found`).to.equal('ok');
    });
  });

  it('contains no section keys that are not defined in the spec', () => {
    Object.keys(comments).forEach((commentKey) => {
      expect(ethcore[commentKey] ? 'ok' : `${commentKey} not found`).to.equal('ok');
    });
  });

  it('has fully completed sections', () => {
    Object.keys(ethcore).forEach((sectionKey) => {
      const section = ethcore[sectionKey];

      if (Object.prototype.toString.call(section) === '[object Object]') {
        Object.keys(section).forEach((itemKey) => {
          expect(comments[sectionKey][itemKey] ? 'ok' : `${sectionKey}[${itemKey}] not found`).to.equal('ok');
        });
      }
    });
  });
});
