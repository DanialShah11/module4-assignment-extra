(function (window) {

var helloSpeaker = {}; // Create an object
var speakWord = "Hello"; // Define the speakWord

helloSpeaker.speak = function (name) { // Attach the speak method
  var greeting = speakWord + " " + name + "!";
  return greeting;
};

window.helloSpeaker = helloSpeaker; // Expose the helloSpeaker object

})(window);
