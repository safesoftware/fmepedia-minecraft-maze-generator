$(document).ready(function(){
 // $.getJSON("http://demos.fmeserver.com.s3.amazonaws.com/server-demo-config.json", function(config) {
    //fullForm.host = config.initObject.server;
    fullForm.host = 'https://bluesky-safe-software.fmecloud.com';
    //fullForm.token = config.initObject.token;
    fullForm.token = '7c25c9aede02dee55ee97bfcf3b25ad4a93426ad'


  FMEServer.init({
    server : fullForm.host,
    token : fullForm.token
  });
    
    //FMEServer.init(config.initObject);

  //});
});


var fullForm = {
  repository : 'MazeGenerator',
  workspace : 'Maze.fmw',

submit : function() {
    var mazeSize = $('#size').val();

    var params = 'MAZE_SIZE=' + mazeSize;

    FMEServer.runDataDownload(fullForm.repository, fullForm.workspace, params, fullForm.getResults);

  },

getResults : function(results){
  var url = results.serviceResponse.url;

  var download = $('#changeable');

  download.replaceWith('<h2 class="text-center"><a href="' + url + '">Download your Minecraft maze here</a></h2>');

}


};