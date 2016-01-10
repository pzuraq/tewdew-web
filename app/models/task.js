import DS from 'ember-data';

const {
  attr,
  belongsTo
} = DS;

export default DS.Model.extend({
  name: attr('string'),
  isComplete: attr('boolean'),
  ordinal: attr('number'),

  taskList: belongsTo('task-list')
});
