const readlineSync = require('readline-sync');
const chalk = require("chalk");

const highScoreArray = [
    { name : "player013" , score : 12 },
    { name : "juno" , score : 4 },
    { name : "Riri" , score : 2 },
]

const quesArray = [
  { question : "What was the old name of India ?" , 
  answer : "aryavarta" },
  { question : "In which year was first war of independence fought ?" , 
  answer : "1857" },
  { question : "In which year India became a republic ?" ,
  answer : "1950" },
  { question : "Which year did the 'Quit India Movement' began ?" , 
  answer : "1942" },
  { question : "Which year did the Jalianwala Bagh massacre took place ?" , 
  answer : "1919" },
  { question : "What was the name of the Army under leadership of Subhash Chandra Bose ?" , 
  answer : "indian national army" },
  { question : "In which city is the Gateway of India ?" ,
  answer : "mumbai" },
  { question : "Which is largest state in India by land mass ?" , 
  answer : "rajasthan" },
  { question : "Which famous diamond was stolen from India that now sits on the throne of Queen of England ?" , 
  answer : "kohinoor" },
  { question : "What is the name of our national flag ?" , 
  answer : "tricolor" },
  { question : "In which year did India got independence ?" , 
  answer : "1947" },
  { question : "What is the name of India's national organisation for research in space (write short form only) ?" ,
  answer : "isro" },
  { question : "At which venue the Prime Minister hoists the national flag every year on our Independence Day ?" , 
  answer : "red fort" },
  { question : "In which year did India won their second ICC cricket world Cup ?" , 
  answer : "2011" },
  { question : "Which country got independence after the 1971 war between India and Pakistan ?" , 
  answer : "bangladesh" },
  { question : "The Konark Sun Temple is in which state in India ?" , 
  answer : "odisha" },
  { question : "Which north state is famous for its vast tulip gardens ?" ,
  answer : "jammu and kashmir" },
  { question : "Martyr's day is celebrated on which date of every january ?" , 
  answer : "30" },
  { question : "Which state name means 'the land of five rivers' ?" , 
  answer : "punjab" },
  { question : "Highest mountain peak of India ?" , 
  answer : "k2" },
  { question : "Which Indian state has the highest population out of all ?" , 
  answer : "uttar pradesh" },
  { question : "How many individual gold medals has India won at the Olympics ?" ,
  answer : "2" },
  { question : "Which state is also known as God's Own Country ?" , 
  answer : "kerala" },
  { question : "In which state the famous Manas Wildlife SAnctuary is located ?" , 
  answer : "madhya pradesh" }
]

var score = 0 ;
var username = '';
function quesfunc(questionsArray) {
  username = readlineSync.question("\nPlease enter your name , user : \n");
  for(let i = 0 ; i < questionsArray.length ; i++) {
    var ans = readlineSync.question(questionsArray[i].question + "\n");
    if (ans.trim().toLowerCase() === 'q' || ans.trim().toLowerCase() === 'quit') {
    break;
    } else {
      if (ans.trim().toLowerCase().toString() === questionsArray[i].answer) {

        if (score < 6 ) { 
        score++;
        console.log((chalk.bold.green)(`Correct Answer \nCurrent Score is ${score}`));
        console.log((chalk.bold.blue)("--------------------------------------")); }
        else if (score >= 6 && score < 18) { score += 2;
        console.log((chalk.bold.green)(`Correct Answer \nCurrent Score is ${score}`));
        console.log((chalk.bold.blue)("--------------------------------------")); }
        else if (score >= 18 && score < 36 ) { score += 3;
        console.log((chalk.bold.green)(`Correct Answer \nCurrent Score is ${score}`));
        console.log((chalk.bold.blue)("--------------------------------------")); }
        else if (score >= 36 && score < 60 ) { score += 4;
        console.log((chalk.bold.green)(`Correct Answer \nCurrent Score is ${score}`));
        console.log((chalk.bold.blue)("--------------------------------------")); }
       
      } else {

        console.log((chalk.bold.red)(`Wrong Answer`));  
        console.log((chalk.bold.green)(`Current Score is ${score}`));
        console.log((chalk.bold.blue)("--------------------------------------")); 
      }
    } 
  }
  console.log(`Hey ${username} Your score was ${score} , press Enter to continue \n`);  
  for(let i = 0; i< highScoreArray.length ; i++) {
     if(score > highScoreArray[i].score) {
        highScoreArray.splice(i, 1 , {name : username , score: score});
        console.log((chalk.bold.yellowBright)("LeaderBoard \n "));
          for(let i = 0; i < highScoreArray.length ; i++) {
            console.log((chalk.bold.yellowBright)("Rank "+ [i+1] + " name : "+highScoreArray[i].name+" score : "+ highScoreArray[i].score));  
          }
        console.log((chalk.bold.yellowBright)(`\nHey ${username} , you got a highscore, do message me me with a screenshot of this so you can be placed on the leader board`));
        break;    
      }
    }
  }


while(1) {
  score = 0;
  console.log((chalk.bold.yellowBright)(`Welcome to the Know India Quiz!!
  \nRules of the Game are as follows
  \nNo negative marks , first 6 questions you get right you reach level 2
  \nAt level 2 , where each question is of 2 points , another 6 questions right will get you to level 3 
  \nAt level 3 right answer has 3 points , and 6 more correct answers will get you to level 4 
  \nAt level 4 , you get 4 points for each correct answer   
  \nPress Enter to start the game 
  \nPress 'q' or type 'quit' any time instead of an answer to exit`)); 
  quesfunc(quesArray);
  var endGame = readlineSync.question(`--------------------------- \nYou wish to end the game ${username} ? ,\nPress y or yes to end \nPress any other key to restart the game from beginning\n`);
  if(endGame.trim().toLowerCase() === 'yes' || endGame.trim().toLowerCase() === 'y') {
    break;
  }
}

console.log("---------------------- \nthe game has ended ! Thanks for playing :D ");