import Ember from 'ember';

const {
  inject,
  RSVP: { hash }
} = Ember;

export default Ember.Route.extend({
  session: inject.service(),

  model() {
    const { user } = this.get('session.data');
    const boards = user.get('taskBoards');

    return hash({ boards });
  }
});
