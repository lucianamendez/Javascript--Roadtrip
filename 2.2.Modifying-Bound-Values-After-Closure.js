function warningMaker(obstacle) {
    var count = 0;
    var zones = [];
    return function(number, location) {
      count++;
      var list = "";      
      zones.push([location,number]);
      for (var i = 0; i < zones.length; i++) {
        list += zones[i][0] + " (" + zones[i][1] + ")" + "\n";
      }
      console.log("Beware! There have been " + obstacle +
            " sightings in the Cove today!\n" +
            number + " have been spotted at the " +
            location + "!\n" +
            "This is alert #" + count +
            " today for " + obstacle + " danger.\n" +
            "Current danger zones are:\n" +
            list);
    };
  }
  

  var killerPenguinAlert = warningMaker("killer penguin");
  var polarBearAlert = warningMaker("polar bear");
  var icebergAlert = warningMaker("iceberg");
  var flashBlizzardAlert = warningMaker("flash blizzard");
  var snowYetiAlert = warningMaker("snow yeti");

  
  killerPenguinAlert(6, "Ice Caves");