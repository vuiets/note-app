import Ember from 'ember';
import App from './../app.js';

export default Ember.Controller.extend({
    notePriorities: App.NOTE_PRIORITY,

    criticalNotes: function(){
        return this.get('model').filterBy('priority', 'critical');
    }.property('model@each'),

    importantNotes: function(){
        return this.get('model').filterBy('priority', 'important');
    }.property('model@each'),

    trivialNotes: function(){
        return this.get('model').filterBy('priority', 'trivial');
    }.property('model@each')
});
