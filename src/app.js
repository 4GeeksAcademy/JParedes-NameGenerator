/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = generateNameRandom();

  function generateNameRandom() {
    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
    let aux = "";

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          aux += pronoun[i] + adj[j] + noun[k] + ".com" + "<br />";
        }
      }
    }
    return aux;
  }
};
