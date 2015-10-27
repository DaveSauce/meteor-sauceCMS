Template.sauceCMS.onCreated(function() {
  this.isEditing = new ReactiveVar(false);
});

Template.sauceCMS.onRendered(function(){
  this.subscribe('sauceCMS');
});

Template.sauceCMS.helpers({
  sauceCMS: function(elementName){
    if (Template.instance().subscriptionsReady()) {
      var existingElement = SauceCMS.findOne({_id: elementName });
      if( existingElement !== undefined ){
        return existingElement.text;
      } else {
        SauceCMS.insert({
          _id: elementName,
          text: "This text is editable, if you're an admin."
        });
      }
    }
  },
  isEditing: function(){
    return Template.instance().isEditing.get();
  },
  canEdit: function(){
    if (Roles.userIsInRole(Meteor.userId(), ["superAdmin","admin"])){
      return "true";
    } else {
      return "false";
    }
  },
  canEditStyle: function(){
    if (Roles.userIsInRole(Meteor.userId(), ["superAdmin","admin"])){
      return "canEdit";
    }
  }
});

Template.sauceCMS.events({
  'click .sauceCMS__edit': function( event, template ){
    if (Roles.userIsInRole(Meteor.userId(), ["superAdmin","admin"])){
      template.isEditing.set(true);
    } else {
      return;
    }
  },
  'click .sauceCMS__edit__button-submit': function( event, template){
    event.stopPropagation();
    template.isEditing.set(false);
    var $event = $(event.currentTarget);
    var elementName = template.data.elementName;
    var text = $event.closest('.sauceCMS__edit__button-box').prev('.sauceCMS__edit').text();
    var existingElement = SauceCMS.findOne({_id: elementName});
    SauceCMS.update(existingElement._id, {$set: {text: text}});
  },

  'click .sauceCMS__edit__button-cancel': function( event, template ){
    event.stopPropagation();
    template.isEditing.set(false);
  },
});
