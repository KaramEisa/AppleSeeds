// splash screen
alert('Welcome to Hangman Game');
// my code 
let city = 'haifa';
let temp = city.split('').map(l=>'*');

  function takeGuess(answer, maxWrong) { 
      const letter = prompt(`What is your guess?`);
          for (let i = 0; i < city.length; i++) { 
               if(city[i] === letter) { 
                   answer[i] = letter;
               }
          }
          if(!city.split('').includes(letter)){ 
            maxWrong--;  
          }
      return {a: answer, max: maxWrong};
  }  
  function askUser(maxWrong, answer) {
   
    if(maxWrong === 0) return;   
    if(answer.join('') === city) return alert('Good job!'); 

      alert(`You have ${maxWrong} guesses!`); 
      const {a, max} = takeGuess(answer, maxWrong); 
          alert(`answer is ${a.join('')}`);
          return askUser(max, a); 
  }

  askUser(10,temp);

 
 
  
