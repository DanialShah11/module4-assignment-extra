(function () {
  var names = []; // Initialize an empty array to store names

  var submitButton = document.getElementById("submitButton");
  var nameInput = document.getElementById("nameInput");
  var greetingContainer = document.getElementById("greetingContainer");

  submitButton.addEventListener("click", function () {
    var name = nameInput.value;
    names.push(name); // Add the entered name to the names array
    
    var paragraph = document.createElement("p");
    var firstLetter = name.charAt(0).toLowerCase();
    var greeting = "";
    
    if (firstLetter === 'j') {
      greeting = byeSpeaker.speak(name); // Use byeSpeaker's 'speak' method
    } else {
      greeting = helloSpeaker.speak(name); // Use helloSpeaker's 'speak' method
    }
    
    paragraph.textContent = greeting;
    greetingContainer.appendChild(paragraph);
    nameInput.value = ""; // Clear the input field
  });

})();
