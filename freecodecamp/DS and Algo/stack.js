class Stack{
	constructor(storage = {}, count = -1){
		this.count = count;
		this.storage = storage;
	}

	push(item){
		this.count++;
		this.storage[this.count] = item;
	}

	pop(){
		if(this.count === -1){
			return undefined;
		}

		const item = this.peek();
		delete this.storage[this.count];
		this.count--;
		return item;
	}

	size(){
		return this.count+1;
	}

	peek(){
		return this.storage[this.count];
	}

	show(){
		return this.storage;
	}
}


(function main(){
	var myStack = new Stack();
	myStack.push("A");
	myStack.push("B");
	myStack.push("C");

	console.log(myStack.show());

	console.log(myStack.peek());
	console.log(myStack.pop());
	console.log(myStack.size());
	console.log(myStack.peek());
	console.log(myStack.pop());
	console.log(myStack.peek());
	console.log(myStack.pop());
})();
