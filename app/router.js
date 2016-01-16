import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('boards', function() {
    this.route('board', { path: '/:boardId' });
  });
});

export default Router;
