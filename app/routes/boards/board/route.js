import Ember from 'ember';

const {
  RSVP: { hash }
} = Ember;

export default Ember.Route.extend({
  model({ boardId }) {
    const board = this.store.peekRecord('task-board', boardId);

    return hash({ board });
  },

  afterModel({ board }) {
    return board.get('taskLists');
  }
});
