function exclamations(strings){
  return (strings.map(el => el.toUpperCase() + '!'));
}

function squareAll(numbers){
  return(numbers.map(el => el**2));
}

function firstLetters(words){
  return(words.map(el => el[0]));
}
