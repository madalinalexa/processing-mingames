function Snake(){

  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  
  this.eat = function(pos){ //check if food is being eaten a ta position
  
  //find dist between food and snake
    let d = dist(this.x, this.y, pos.x, pos.y); //this is snake and pos is food
    
    if( d<0.5 ){
      this.total++;
      return true;
    }
    else{
      return false;
    }
  
  };
  
  this.update = function(){ 
  
  //add 1 element into array of the tail
  for( let i=0; i<this.tail.length-1; i++ ){
    
          this.tail[i] = this.tail[i+1];
      
      }
      
      //display complete lenght of the snake, if its more than 1, 
  
  };
  
  this.dir = function(x, y){ //diretion ofsnake
  
    this.xspeed = x;
    this.yspeed = y;
  
  };
  
  this.show = function(){ //create visuals for snake
  
    stroke (0, 0, 0);
    strokeWeight(1);
    fill(255);
    
    for( let i=0; i<this.tail.length; i++ ){ //want blocks/length of the array, we want those many blockso n the screen
    
          rect( this.tail[i].x, this.tail[i].y, scl, scl );
      
      }
      
      rect( this.x, this,y, scl, scl ); //display the rectangles one after the other, 
      //or else as lenght increases theyll appear random positions
      
   
  };
  
  

}
