import DS from 'ember-data';

const {
  attr,
  belongsTo,
  hasMany
} = DS;

export default DS.Model.extend({
  name: attr('string'),

  taskBoard: belongsTo('task-board'),

  tasks: hasMany('task', { async: false })
});
