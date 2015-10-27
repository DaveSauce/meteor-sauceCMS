Package.describe({
  name: "davesauce:saucecms",
  summary: "Super simple CMS package using contentEditable",
  version: "0.1.0",
  git: "https://github.com/DaveSauce/meteor-sauceCMS"
});

Package.onUse(function(api) {
  api.versionsFrom("1.2.0.2");
  api.use([
    'templating',
    'ecmascript',
    'mongo',
    'check',
    'jquery',
    'nicolaslopezj:router-layer@0.0.11',
    'reactive-var',
    'accounts-password',
    'alanning:roles@1.2.14'
  ]);

  api.addFiles([
    'sauceCMS.html',
    'sauceCMS.css',
    'sauceCMS.js',
    'admin/admin.html',
    'admin/admin.js'
  ], 'client');

  api.addFiles('server.js', 'server');
  api.addFiles('shared.js', ['client', 'server']);
});
