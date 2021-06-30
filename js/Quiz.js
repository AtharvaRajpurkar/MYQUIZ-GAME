class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide()
    background("yellow")
  Contestant.getPlayerInfo()
  if(allContestants!==undefined){
    var pos=230
    fill("blue")
    textSize(20)
    text("*NOTE : CONSTANT WHO HAVE ANSWERED CORRECTLY IS IN GREEN COLOR! *",70,240)
    for(var member in allContestants){
      var correct="2"
      if(correct===allContestants[member].answer)
      fill("green")
      else
      fill("red")
      pos+=50
      textSize(24)
      text(allContestants[member].name+ ":"+allContestants[member].answer,120,pos)

    }
  }
  }
}
//write code here to hide question elements

    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  