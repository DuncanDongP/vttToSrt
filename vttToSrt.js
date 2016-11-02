 var file = require('file');
var fs = require('fs');

var rootPath = 'D:/Xunlei/Coursera'

file.walk(rootPath, function(err, folderPath) {
  var allFiles = fs.readdirSync(folderPath);
  for (var i=0; i < allFiles.length; i++){
    if (err) return console.log(err);
    if (allFiles[i].includes(".vtt")){
      var vttFile = allFiles[i];
      var data = fs.readFileSync(folderPath + "\\" + vttFile).toString()
      var result = data.replace('WEBVTT', '');
      fs.writeFileSync(folderPath + "\\" + vttFile, result);
      fs.renameSync(folderPath + "\\" + vttFile, folderPath + "\\" + vttFile.replace(".vtt", '.srt'), function(err) {
        if (err){console.log(err);}
      });
    }
  }
}); 
