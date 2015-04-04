import Ember from 'ember';

export default Ember.Component.extend({
    data: null,

    isEdit: function(){
      return !this.get('data.title') && !this.get('data.description') && !this.get('data.priority');
    }.property('data'),

    actions: {
      saveNote: function(note) {
        var self = this;
        note.save().then(function(success){
          self.set('isEdit', false);
        });
      }
    }
});
