const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s your name? Nicknames are also acceptable :', (answer1) => {
  
  rl.question('What\'s an activity that you like doing?:', (answer2) => {
  
    rl.question('What do you listen to while doing that?:', (answer3) => {
    
      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.):', (answer4) => {
      
        rl.question('What\'s your favourite thing to eat for that meal?:', (answer5) => {
        
          rl.question('Which sport is your absolute favourite?:', (answer6) => {
          
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer7) => {
            
              console.log(`Thank you for your valuable feedback, your profile is: 
                           Your nickname: ${answer1}, 
                           your activity: ${answer2}, 
                           your music you listen to: ${answer3}, 
                           your favourite meal: ${answer4}, 
                           your favourite thing to eat at that meal: ${answer5}, 
                           your favourite sport: ${answer6}, 
                           and your superpower is: ${answer7}`)
          

  rl.close();
  })
    })
      })
        })
          })
            })
              });