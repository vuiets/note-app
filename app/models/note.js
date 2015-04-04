import DS from 'ember-data';

var Note = DS.Model.extend({
    title: DS.attr('string'),
    description: DS.attr('string'),
    priority: DS.attr('string', {
      defaultValue: function() { return "trivial" }
    })
});

Note.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Oscar Says',
      description: "\“Be yourself; everyone else is already taken.\”",
      priority: 'trivial'
    },
    {
      id: 2,
      title: 'Dr. Seuss Says',
      description: "\“Don\'t cry because it\'s over, smile because it happened.\”",
      priority: 'important'
    }
  ]
});

export default Note;
