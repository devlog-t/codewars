function alphabetPosition(text) {
    let arr = text.toLowerCase().replace(/[^a-z]/g, '').replace(/./g, ([c]) => ' ' + (c.charCodeAt(0) - 'a'.charCodeAt(0)+ 1)).substr(1);

    return arr;
}



console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));

///SOLUTIONS ///
function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
  }