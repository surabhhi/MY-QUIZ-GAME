class Quiz{
    constructor(){}
        


   getState(){
      var gameStateRef= database.ref('gameState');
      gameStateRef.on("value",function(data){
          gameState=data.val();

      })
    
   }
   update(state){
        database.ref('/').update({
      gameState:state        
        });
    }
async start (){
    if(gameState===0){

        Contestant= new Contestant ();
        var contestantCountRef = await database.ref('contestantCount').once("value");
if(contestantCountRef.exists()){
    contestantCount=contestantCountRef.val();
    contestantCountRef.getCount();
}
question = new Question
questions.display();
}
}

play(){

    question.hide();
    background  ("cyan");
    fill (0);
    textSize (30);
    Text ("result of the quiz" , 340,50);
    Contestant .getPlayerInfo();
    If (allContestants !==  undefined) {
    debugger;
    var display_Answers =230;
    fill("blue");
    textSize (20);
    text ("*NOTE: contestant who answered correctly are highlighted in green colour !",130,230);
    
    for(var plr in allContestants){
    debugger;
    var correctAns="2";
    if(correctAns===allContestants[plr]. answer)
    fill("green");
    else
    fill("red");
    
    display_Answers+=30;
    textSize (20);
    text(allContestants[plr].name+":"+allContestants[plr].answer,250, display_Answers)
    }
}
    }



}





