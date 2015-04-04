import Ember from 'ember';
import App from './../app.js';

export default Ember.Controller.extend({
    notePriorities: App.NOTE_PRIORITY,

    criticalNotes: function(){
      console.log('criticalNotes');
        return this.get('model').filterBy('priority', 'critical');
    }.property('model.@each.priority'),

    importantNotes: function(){
        return this.get('model').filterBy('priority', 'important');
    }.property('model.@each.priority'),

    trivialNotes: function(){
        return this.get('model').filterBy('priority', 'trivial');
    }.property('model.@each.priority'),

    actions: {
        addNote: function() {
            this.store.createRecord('note');
        }
    }
});
