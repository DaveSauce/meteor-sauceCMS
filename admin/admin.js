Template.sauceCMSAdmin.onCreated(function(){
  this.subscribe('all-users');
});

Template.sauceCMSAdmin.helpers({
  users: function() {
    return Meteor.users.find({});
  }
});

Template.sauceCMSAdmin.events({
  'click .makeAdminBtn': function(e) {
    e.preventDefault();
    Meteor.call('userRolesSave', this, "admin", function (err, results) {
      if (err) {console.log(err);}
      else {console.log("success");}
    });
  },
  'click .makeSuperAdminBtn': function(e) {
    e.preventDefault();
    Meteor.call('userRolesSave', this, "superAdmin", function (err, results) {
      if (err) {console.log(err);}
      else {console.log("success");}
    });
  }
})
