import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.find('user', '656efe7a-27c3-49b6-a654-a793e19327c6');
  },

  afterModel(model) {
    return model.get('taskLists.firstObject.tasks');
  }
});
