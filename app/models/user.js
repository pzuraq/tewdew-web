import DS from 'ember-data';

const {
  attr,
  hasMany
} = DS;

export default DS.Model.extend({
  email: attr('string'),

  taskBoards: hasMany('task-board', { async: false })
});
