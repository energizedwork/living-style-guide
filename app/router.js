import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('typography');
  this.route('grid');
  this.route('colours');
  this.route('forms');
  this.route('navigation');
  this.route('button');
  this.route('link');
  this.route('layout');
  this.route('primitive-components', function() {
    this.route('box');
    this.route('text');
  });
  this.route('composite-components', function() {
    this.route('forms');
    this.route('buttons');
    this.route('links');
    this.route('navigation');
  });
});

export default Router;
