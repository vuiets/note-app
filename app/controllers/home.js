import Ember from 'ember';
import App from './../app.js';

export default Ember.Controller.extend({
    notePriorities: App.NOTE_PRIORITY,

    criticalNotes: function(){
      console.log('criticalNotes');
        return this.get('model').filterBy('priority', 'critical');
    }.property('model.[]'),

    importantNotes: function(){
        return this.get('model').filterBy('priority', 'important');
    }.property('model.[]'),

    trivialNotes: function(){
        return this.get('model').filterBy('priority', 'trivial');
    }.property('model.[]'),

    actions: {
        addNote: function() {
            this.store.createRecord('note');
        }
    }
});
