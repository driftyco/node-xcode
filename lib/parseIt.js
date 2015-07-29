var proj = require('./pbxProject');

var pbxProj = new proj('/path/to/HelloCordova.xcodeproj/project.pbxproj');


// An example of how to use the new parsing method. Pass in pipe streams.
pbxProj.parse(function(err, hash) {
    console.log(hash.project);
  }, {stdio:'pipe'});
