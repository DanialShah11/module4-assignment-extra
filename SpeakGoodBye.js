(function (window) {

var byeSpeaker = {}; // Create an object
var speakWord = "Good Bye"; // Define the speakWord

byeSpeaker.speak = function (name) { // Attach the speak method
  var greeting = speakWord + " " + name + "!";
  return greeting;
};

window.byeSpeaker = byeSpeaker; // Expose the byeSpeaker object

})(window);
