let animateSentence = function(sentence, time){
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time += 50)  
  }
  setTimeout(()=>{
    process.stdout.write('\n');
  }, time + 50)
}


const sentence = "hello there from lighthouse labs";
let time = 0;
animateSentence(sentence, time)