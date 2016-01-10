import DS from 'ember-data';

const {
  attr,
  belongsTo,
  hasMany
} = DS;

export default DS.Model.extend({
  name: attr('string'),

  user: belongsTo('user'),

  tasks: hasMany('tasks')
});
