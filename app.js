/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

function newDomain() {

  let pronouns = ['the', 'your'];
  let adjs = ['bestest', 'ultimate'];
  let nouns = ['companion', 'sidekick'];
  let domains = ['.com', ".net", ".org"];


  for (let pronoun of pronouns) {
    console.log(pronoun);
  }
  for (let adj of adjs) {
    console.log(adj);
  }
  for (let noun of nouns) {
    console.log(noun);
  }
  for (let domain of domains) {
    console.log(domain);
  }
}

console.log (newDomain);

