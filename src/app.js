/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //Math.random
  // Math.floor
  // Math.ceil

  function excuse() {
    let who = ["El perro", "Mi abuela", "La gata", "El trauko", "Un veneko"];
    let action = ["se comió", "meó", "destrozó", "quemó", "violó"];
    let what = ["mi tarea", "el auto", "la pc", "la casa", "tu hermana"];
    let when = [
      "antes de clases",
      "al final del trabajo",
      "cuando estaba terminando",
      "durante el almuerzo",
      "mientras cagaba"
    ];

    let excuseString =
      who[Math.floor(Math.random() * who.length)] +
      " " +
      action[Math.floor(Math.random() * action.length)] +
      " " +
      what[Math.floor(Math.random() * what.length)] +
      " " +
      when[Math.floor(Math.random() * when.length)];

    console.log(excuseString);

    document.getElementById("excuse").innerHTML = excuseString;
  }
  excuse();
};
