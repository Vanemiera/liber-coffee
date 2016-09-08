"use strict";

function createConsole() {
  var d = document.createElement('div');
  d.id = 'test-console';
  d.className = 'test-console';
  document.body.appendChild(d);
}
createConsole();

var test_console = document.getElementById("test-console");

function tprint(message){
  test_console.innerHTML += message + "<br>";
  test_console.scrollTop = test_console.scrollHeight - test_console.clientHeight;
}
