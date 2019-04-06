
Package.describe({
  name    : 'semantic:ui-dropdown',
  summary : 'Semantic UI - Dropdown: Single component release',
  version : '2.2.10',
  git     : 'git://github.com/Semantic-Org/UI-Dropdown.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'dropdown.css',
    'dropdown.js'
  ], 'client');
});
