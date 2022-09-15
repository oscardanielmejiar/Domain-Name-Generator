/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector(".name").innerHTML = newDomain();
};

function newDomain() {
  let pronouns = ["the", "your"];
  let adjs = ["bestest", "ultimate"];
  let nouns = ["companion", "sidekick"];
  let domains = [".com", ".net", ".org"];

 let key = ""

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let domain of domains) {
          key += pronoun + adj + noun + domain + "<br>";
        }
      }
    }
  }

  return key;
}
