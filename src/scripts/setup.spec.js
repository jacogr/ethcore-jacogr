const jsdom = require('jsdom');

global.React = require('react');
global.expect = require('chai').expect;
global.moment = require('moment');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
