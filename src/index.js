import Entry from './entries.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


function handleEntries(event) {
  event.preventDefault();
  console.log(Entry);
  let title = document.getElementById("input-title").value;
  let entry = document.getElementById("journal-entry").value;
  let body = document.querySelector("body");
  const newEntry = new Entry(title, entry);
  newEntry.wordCount;
  newEntry.countCharacters;
  let h2 = document.createElement("h1");
  let p1 = document.createElement("p");
  p1.append(entry);
  h2.append(title);
  body.append(h2);
  body.append(p1);
}

window.addEventListener("load", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", handleEntries);
})