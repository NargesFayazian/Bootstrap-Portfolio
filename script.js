var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
    
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
 
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
        cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
        nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
 setInterval(changeWord, 4000);
 

// -------------------------------------------------------------------------------------------------------
var words1 = document.getElementsByClassName('word1');
var wordArray1 = [];
var currentWord1 = 0;

words1[currentWord1].style.opacity = 1;
for (var i = 0; i < words1.length; i++) {
  splitLetters1(words1[i]);
}

function changeWord1() {
  var cw = wordArray1[currentWord1];
  var nw = currentWord1 == words1.length-1 ? wordArray1[0] : wordArray1[currentWord1+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut1(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind1';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn1(nw, i);
  }
  
  currentWord1 = (currentWord1 == wordArray1.length-1) ? 0 : currentWord1+1;
}

function animateLetterOut1(cw, i) {
  setTimeout(function() {
        cw[i].className = 'letter out1';
  }, i*80);
}

function animateLetterIn1(nw, i) {
  setTimeout(function() {
        nw[i].className = 'letter in1';
  }, 340+(i*80));
}

function splitLetters1(word1) {
  var content = word1.innerHTML;
  word1.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter1';
    letter.innerHTML = content.charAt(i);
    word1.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray1.push(letters);
}

changeWord1();

setInterval(changeWord1, 16000);

// ====================================================================

