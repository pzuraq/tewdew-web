import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  tabindex: 1,
  attributeBindings: ['tabindex']
});
