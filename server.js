Meteor.publish("sauceCMS", function () {
  return SauceCMS.find({});
});
Meteor.startup(function () {
  let superAdminEmail = '';
  if (Meteor.settings.public.sauceCMS) {
    superAdminEmail = Meteor.settings.public.sauceCMS.superAdmin;
  }
  Roles.addUsersToRoles(Meteor.users.find({'emails.address': superAdminEmail}, {"_id": 1}).map(function (user) {
    return user._id;
  }), ["superAdmin"]);
});

Meteor.publish('all-users', function() {
  if (Roles.userIsInRole(this.userId, ['superAdmin'])){
    return Meteor.users.find({});
  } else {
    this.stop();
    return;
  }
});
Meteor.methods({
  userRolesSave: function (user, role) {
    check(user, Object);
    check(role, String);
    if (Roles.userIsInRole(this.userId, ['superAdmin'])) {
      Roles.addUsersToRoles(user, [role]);
    }
  }
})
