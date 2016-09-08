"use strict";

var test_console = document.getElementsByClassName("test-console")[0];

function tprint(message){
  test_console.innerHTML += message + "<br>";
  test_console.scrollTop = test_console.scrollHeight - test_console.clientHeight;
}
