// entry object business logic

function Entry(title, entry){
  this.title = title;
  this.entry = entry;
}

Entry.prototype.wordCount = function(){
  let entryArray = this.entry.split(" ");
  let wordCount = entryArray.length;
  this.wordCount = wordCount;
  return wordCount;
};

Entry.prototype.countCharacters = function (){
  let vowelsCount = 0;
  let consonantCount = 0;
  let charCount = 0;
  for (let position = 0; position < this.entry.length; position++) {
    if ( this.entry.charAt(position).toUpperCase() != this.entry.charAt(position).toLowerCase() ){
      charCount += 1
      if(this.entry.charAt(position).toLowerCase() === "a" || this.entry.charAt(position).toLowerCase() === "e" || this.entry.charAt(position).toLowerCase() === "e" || this.entry.charAt(position).toLowerCase() === "i" || this.entry.charAt(position).toLowerCase === "o" || this.entry.charAt(position).toLowerCase === "u"){
      vowelsCount += 1;
      } else
    consonantCount += 1;
    }
  }
  this.consonants = consonantCount;
  this.vowels = vowelsCount;
  this.characters = charCount;
};