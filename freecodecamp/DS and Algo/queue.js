class Queue{
	constructor(collection = []){
		this.collection = collection;
	}

	enqueue(item){
		return this.collection.push(item);
	}

	dequeue(){
	if(this.collection.length)
		return this.collection.shift();
	return -1;
	}

	size(){
		return this.collection.length;
	}

	peek(){
	if(this.collection.length>0)
		return this.collection[0];
	return false;
	}

	isEmpty(){
		if(this.collection.length>0)
			return false;
		return true;
	}
	priorityEnqueue(item, priority){
		var element = [item, priority];

		if(this.isEmpty()){
			this.collection.push(element);

		}
		else{
	
		var added = false;
		for(var i=0; i<this.collection.length; i++){
			if(priority <this.collection[i][1]){
				added = true;
				this.collection.splice(i, 0, element);
				break;
			}
		}
				
		
	

		if(!added)
			this.collection.push(element);
	}

	}
}

(function main(){
	var q = new Queue();
	q.enqueue(1);
	q.enqueue(2);
	q.enqueue(3);
	q.enqueue(4);
	q.enqueue(5);
	console.log(q.peek());
	console.log(q.size());
	console.log(q.isEmpty());
	console.log(q.dequeue());
	console.log(q.size());

	var pq = new Queue();
	pq.priorityEnqueue(1, 200);
	pq.priorityEnqueue(2, 600);
	pq.priorityEnqueue(3, 100);
	pq.priorityEnqueue(4, 500);
	pq.priorityEnqueue(5, 700);
	
	console.log(pq.collection);
})();