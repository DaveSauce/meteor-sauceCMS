let layoutName = '';
if (Meteor.settings.public.sauceCMS) {
  layoutName = Meteor.settings.public.sauceCMS.layoutName;
}
RouterLayer.route('/sauceCMS-admin', {
  name: 'sauceCMS-admin',
  template: 'sauceCMSAdmin',
  layout: layoutName || 'layout'
});
SauceCMS = new Mongo.Collection('SauceCMS');
SauceCMS.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return true;
  },
  remove: function(){
    return false;
  }
});
