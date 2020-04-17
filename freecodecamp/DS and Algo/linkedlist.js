class Node{
	constructor(value, next = null){
		this.value = value;
		this.next = next;
	}
}


class LinkedList{
	constructor(head=null, length=0){
		this.head = head;
		this.length = length;
	}

	add(item){
		var node = new Node(item);
		if(this.head == null){
			this.head = node;
			this.length++;
			return this.head;
		} else {
			var currentNode = this.head;
			while(currentNode.next != null){
				currentNode = currentNode.next;
			}
			currentNode.next = node;
			this.length++;

			return this.head;
		}
	}

	print(){
		var currentNode = this.head;
		var llStr = "";
		while(currentNode.next != null){
			llStr += `${currentNode.value} -> `;
			currentNode = currentNode.next;
		}
		llStr += currentNode.value;
		console.log(llStr);
	}

	remove(item){
		var currentNode = this.head;
		var previousNode;
		var cnt = -1;
		if(currentNode && currentNode.value == item){
			this.head = currentNode.next;
			this.length--;
			// delete currentNode;
			return ++cnt;
		}

		if(this.length>0){
			while(currentNode.value != item){
				previousNode = currentNode;
				currentNode = currentNode.next;
				cnt++;
			}
			if(cnt<this.length-1){
				this.length--;
				previousNode.next = currentNode.next;
				// delete currentNode;
				return cnt;
			}
		}
		return -1;

	}

	findIndex(item){
		var currentNode = this.head;
		var cnt=0;

		while(currentNode && currentNode.value != item){
			currentNode = currentNode.next;
			cnt++;
		}

		if(cnt<=this.length-1) {
			return cnt;
		}
		return -1;


	}

	addAt(item, index){
		var node = new Node(item); 
		var currentNode = this.head;
		var previousNode;
		var cnt =0;
		if(index<this.length-1){
			while(cnt<index){
				previousNode = currentNode;
				currentNode = currentNode.next;
				cnt++;
			}
			previousNode.next = node;
			node.next = currentNode;
			this.length++;
		}
		return cnt;
	}

	removeAt(index){
		var cnt=0;
		var currentNode = this.head;
		var previousNode;

		if(index == 0){
			this.head = currentNode.next;
			this.length--;
			return 0;
		}

		if(index<this.length-1){
			while(cnt<index){
				cnt++;
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			if(cnt<=length-1){
				previousNode.next = currentNode.next;
				this.length--;
				return cnt;
			}
		}
		return -1;
	}

	findAt(index){
	var currentNode = this.head;

		if(index == 0){
			
			return currentNode.value;
		}

		if(index<this.length-1){
			while(cnt<index){
				cnt++;
				currentNode = currentNode.next;
			}
			if(cnt<=length-1){
		
				return currentNode.value;
			}
		}
		return -1;
	}

	reverse(){
		var currentNode = this.head;
		var previousNode = null;

		while(currentNode != null){
			let nextNode = currentNode.next;

			currentNode.next = previousNode;
			previousNode = currentNode;
			currentNode = nextNode;
		}
		this.head = previousNode;
		return this.head;
	}

	middle(){
		var currentNode = this.head;
		var fastPtr = currentNode;

		while(fastPtr && fastPtr.next != null){
			currentNode = currentNode.next;
			fastPtr = fastPtr.next.next;
		}
		return currentNode.value;

	}

}

(function main(){
	var ll = new LinkedList();
	console.log(ll.add("5"));
	console.log(ll.add("4"));
	console.log(ll.add("3"));
	console.log(ll.add("7"));
	console.log(ll.add("6"));

	console.log(ll.add("3"));

	console.log(ll.print());
	console.log(ll.findIndex("4"));
	console.log(ll.remove("3"));
	console.log(ll.remove("3"));
		console.log(ll.add("16"));

		console.log(ll.add("17"));

	console.log(ll.print());
//	console.log(ll.addAt("3",3));


	console.log(ll.length);
	console.log(ll.reverse());
	console.log(ll.print());
	console.log(ll.middle())


})();