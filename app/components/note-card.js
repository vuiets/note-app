import Ember from 'ember';
import App from './../app.js';

export default Ember.Component.extend({
    data: null,

    priorities: App.NOTE_PRIORITY,

    isEdit: function(){
      return !this.get('data.title') && !this.get('data.description');
    }.property('data'),

    actions: {
      edit: function() {
        this.set('isEdit', true);
      },

      saveNote: function(note) {
        var self = this;
        note.save().then(function(success){
          self.set('isEdit', false);
        });
      },

      prevPriority: function(priority){
        var priorities = this.get('priorities'),
            l = priorities.length,
            i = priorities.indexOf(priority);

        if(i > 0){
          this.set('data.priority', priorities[i-1]);
        } else {
          this.set('data.priority', priorities[l-1]);
        }
      },

      nextPriority: function(priority){
        var priorities = this.get('priorities'),
          l = priorities.length,
          i = priorities.indexOf(priority);

        if(i < l-1){
          this.set('data.priority', priorities[i+1]);
        } else {
          this.set('data.priority', priorities[0]);
        }
      }
    }
});
