class Contestants{
    constructor(){
        this.index=null;
        this.answer=0;
        this.name=null;
    }

getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",(data)=>{
        contestantCount=data.val();
    })
}

updateCount(count){
    database.ref('/').update({
        contestantCount:count  
        })
}

update(){
  var contestantIndex = "contestants/contestant"+this.index
  database.ref(ConstantIndex).set({
      name:this.name,
      answer:this.answer
  })
}

static getPlayerInfo(){
    var contestantInfoRef= database.ref('contestants');
    contestantCountRef.on("value",(data)=>{
        allContestants= data.val();
    })
}


}