
(function (window) {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++/* fill in parts of the 'for' loop to loop over names array */) {

    var name = names[i];
    var firstLetter = name.charAt(0).toLowerCase();

    if (firstLetter == 'j') {
      window.byeSpeaker.speak(name);
    } else {
      window.helloSpeaker.speak(name);
    }
  }

})(window);




