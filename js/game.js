class Game{
constructor(){

}
getState(){
   var gamestateref=database.ref('gameState');
   gamestateref.on("value",function(data){
       gameState=data.val();
       
   })
}
update(state){
    database.ref('/').update({
        gameState:state
    })
}
async start(){
    if(gameState===0){
        player=new Player();
        var playerCountRef=await database.ref("playerCount").once("value")
        if(playerCountRef.exists()){
         playerCount=playerCountRef.val();
         player.getCount();
        }
        form=new Form();
        form.display();
    }
    
    car1=createSprite(100,200)
    car1.addImage("car1",car1img);

    car2=createSprite(300,200)
    car2.addImage("car2",car2img);

    car3=createSprite(500,200)
    car3.addImage("car3",car3img);

    car4=createSprite(700,200)
    car4.addImage("car4",car4img);

    cars=[car1,car2,car3,car4]

}
play(){
    form.hide();
    text("Game Start",100,100);
    Player.getplayerinfo();
    if(allPlayer!==undefined){
        background(groundimg);
        image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5);
       //var displayposition=130;
       var index=0;
       var x=230;
       var y;
        for(var plr in allPlayer){
            index=index+1;
            x=x+200;
            y=displayHeight-200-allPlayer[plr].distance;
            cars[index-1].x=x
            cars[index-1].y=y
            if(index===player.index){
                cars[index-1].shapeColor="red"
                camera.position.x=displayWidth/2
                camera.position.y=cars[index-1].y
            }
           
            //text(allPlayer[plr].name+":"+allPlayer[plr].distance,120,displayposition)
            //displayposition+=20;
        }

    
    }
    if(keyDown("up")&&player.index!==null){
      player.distance+=50;
      player.update();
    }
    if(player.distance<3950){
        gameState=2;
    }
    drawSprites();
}
end(){
    console.log("gameEnded")
}
}
