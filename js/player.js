class Player{
    constructor(){
     this.index=null;
     this.distance=0;
     this.name=null;
    }
    update(){
        var playerindex="players/player"+this.index;
        database.ref(playerindex).update({
            name:this.name,
            distance:this.distance
        })
    }
    updateCount(count){
       database.ref('/').update({
           playerCount:count
       })
    }
    getCount(){
        var playerCountRef=database.ref("playerCount")
        playerCountRef.on("value",function(data){
            playerCount=data.val();
        })
    }
  static  getplayerinfo(){
        var playerinfoRef=database.ref("players")
        playerinfoRef.on("value",(data)=>{
            allPlayer=data.val();
        })
        
    }
}
