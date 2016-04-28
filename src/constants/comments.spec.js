const expect = require('chai').expect;

const comments = require('./comments');
const ethcore = require('./ethcore');

describe('constants/comments', () => {
  it('contains the full list of section keys from the spec', () => {
    Object.keys(ethcore).forEach((key) => {
      expect(comments[key] ? 'ok' : `${key} not found`).to.equal('ok');
    });
  });

  it('contains no section keys that are not defined in the spec', () => {
    Object.keys(comments).forEach((key) => {
      expect(ethcore[key] ? 'ok' : `${key} not found`).to.equal('ok');
    });
  });
});
