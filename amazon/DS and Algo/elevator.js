class Elevator{
	constructor( maxFloors, ascqueue= [], descqueue=[], direction=0 , currentFloor=0){
		this.ascqueue = ascqueue;
		this.descqueue = descqueue;
		this.maxFloors=maxFloors;
		this.direction = direction;
		this.currentFloor = currentFloor;
	}

	add(value){
		if(value> this.maxFloor){
			return false;
		}
		if(this.direction == 0 && this.currentFloor<value){
			this.direction=1;
			this.ascqueue.unshift(value);
			return true;	
		} else if(this.direction == 0 && this.currentFloor>value){
			this.direction = -1;
			this.descqueue.push(value);
			return true;
		} else if(this.direction = 1 && this.currentFloor<value){
			let inserted = false;
			for(var i=0; i<this.ascqueue.length; i++){
				if(value<this.ascqueue[i]){
					this.ascqueue.splice(i,0,value);
					inserted = true;
					break;
				}
			}
			if(!inserted){
				this.ascqueue.push(value);
			}
			return true;
		} else if(this.direction = 1 && this.currentFloor>value){	
			let inserted = false;
			for(var i=0; i<this.descqueue.length; i++){
				if(value>this.descqueue[i]){
					this.descqueue.splice(i,0,value);
					inserted = true;
					break;
				}
			}
			if(!inserted){
				this.ascqueue.push(value);
			}
			return true;
		}
	}

	print(){
		console.log(this.ascqueue);
		console.log(this.descqueue);

	}

	move(){
		if((this.direction == 0 || this.direction== 1) && this.ascqueue.length>0 ){
			for(let i=this.currentFloor; i<=this.maxFloors; i++){
				if(i == this.ascqueue[0]){
					let temp = this.ascqueue.shift();
					console.log(`Reached ${temp} floor. Door will be closing in 10 secs`);
					this.currentFloor = temp;
					if(this.ascqueue.length == 0){
						this.direction =0;
						break;
					}
				}
			}
		} else if((this.direction == 0 || this.direction== 1) && this.descqueue.length>0 ){
			for(let i=this.currentFloor; i>=0; i--){
				if(i == this.descqueue[0]){
					let temp = this.descqueue.shift();
					this.currentFloor = temp;
					console.log(`Reached ${temp} floor. Door will be closing in 10 secs`);
					if(this.descqueue.length == 0){
						this.direction =0;
						break;
					}
				}
			}
		}
		return true;
	}

}

(function main(){
	var lift = new Elevator(13);
	lift.add(2);
	lift.add(3);
	console.log(lift.move());
	lift.add(1);
	lift.add(5);
	lift.add(6);
	console.log(lift.move());
	console.log(lift.move());
})();