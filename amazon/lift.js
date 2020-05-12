Design a Lift

1. 1 lift in 1 building
2. N floors in building

class Lift{
	constructor(floor=[], n=13, direction=0, currentFloor=0, maxFloorPressed=0, minLowerPressed=-1){
    	this.floor = floor;
      	this.n = n;
      	this.direction = direction;
      	this.currentFloor = currentFloor;
      	this.maxFloorPressed = maxFloorPressed;
      	this.minFloorPressed = minFLoorPressed;
      	this.initializeFloorArray
    }
  
  	function initializeFloorArray(){
    	for(var i=0; i<=this.n; i++){
        	this.floor[i] = 0;
        }
    }
  	
  	function press(floorNumber){
      if(floorNumber<=this.n && this.currentFloor != floorNumber){
    	this.floor[floorNumber] = 1;
       
        	if(this.direction == -1){
            	if(this.minFloorPressed == -1){
                	this.minFloorPressed = floorNumber;
                } else if(floorNumber<this.currentFloor && floorNumber<this.minFloorPressed){
                	this.minFloorPressed = floorNumber;
                } else if(floorNumber>this.currentFloor && this.maxFloorPressed<floorNumber){
                	this.maxFloorPressed = floorNumber;
                }
            } else if(this.direction == 1){
             	if(floorNumber>this.currentFLoor && this.maxFloorPressed<floorNumber){
                	this.maxFloorPressed = floorNumber;
                } else if(floorNumber<this.currentFloor && (this.minFloorPressed == -1 || this.minFloorPressed>floorNumber)){
                	thisminFloorPressed = floorNumber
                }
            	
            } else if(this.direction == 0){
            	if(this.currentFloor<floorNumber){
                	this.maxFloorPressed = floorNumber;
                } else {
                	this.minFloorPressed = floorNumber
                }
            }
        
        
  
        return 1;
      } else {
      	return -1
      }
         
    }
  
  	function move(){
    	if(((this.direction == 0) || (this.direction == 1)) && this.maxFloorPressed>0){
          	this.direction = 1;
        	for(var i=this.currentFloor;i<=this.n;i++){
              this.currentFloor = i;
            	if(this.floor[i] & 1){
                	console.log(`Reached Floor ${i}. Please Exit`);
                  	this.floor[i]=0;
                  	if(this.maxFloorPressed == i){
                    	this.direction=0;
                      	this.maxFloorPressed = 0;
                      break;     
                    }
                }
            }
        }
      	if(this.minFloor>=-1 && (((this.currentFloor > 0 && this.direction == 0) || (this.direction == -1)))){
        	for(var i = this.currentFloor; i>=0; i--){
            	this.currentFloor = i;
              	this.direction = -1;
              	if(this.floor[i] & 1){
                	console.log(`Reached Floor ${i}. Please Exit`);
                  this.floor[i]=0;
                  	if(this.minFloorPressed == i){
                    	this.direction=0;	
                      	this.minFloorPressed =-1;
                      break;     
                    }
            }
        }
    }
}
  
  (function main(){
  	var myLift = new Lift();
    myLift.press(1);
    myLift.press(2);
    myLift.move();
  })()