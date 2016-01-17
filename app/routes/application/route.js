import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  session: inject.service(),

  model() {
    return this.store.findRecord('user', '656efe7a-27c3-49b6-a654-a793e19327c6');
  },

  afterModel(user) {
    this.get('session').set('data', { user });
  }
});
