class mySet{
	constructor(collection = []){
		this.collection = collection;
	}


	has(item){
		return !!(this.collection.indexOf(item) != -1);
	}

	index(item){
		if(this.has(item)){
			return this.collection.indexOf(item);
		}
		return -1;
	}

	add(item){
		if(!this.has(item)){
			this.collection.push(item);
			return true;
		}
		return false;
	}

	remove(item){
		if(this.has(item)){
			this.collection.splice(this.index(item), 1);
			return true;
		}
		return false;
	}

	size(){
		return this.collection.length;
	}

	values(){
		return this.collection;
	}

	union(otherSet){
		var unionSet = new mySet();

		this.collection.forEach(e => {
			unionSet.add(e);
		});

		var secondSet = otherSet.values();

		secondSet.forEach(f=>{
			unionSet.add(f);
		})

		return unionSet;
	}

	intersection(otherSet){
		var interSet = new mySet();

		this.collection.forEach(e=>{
			if(otherSet.has(e)){
				interSet.add(e);
			}
		})

		return interSet;
	}

	difference(otherSet){
	var diffSet = new mySet();

		this.collection.forEach(e=>{
			if(!otherSet.has(e)){
				diffSet.add(e);
			}
		})

		return diffSet;
	}

	subset(otherSet){

		return this.collection.every(e=>{
			return otherSet.has(e)
		})
	}
}

(function main(){
	var a = new mySet();
	var b = new mySet();

	a.add("a");
	b.add("a");
	b.add("b");
	b.add("b");
	console.log(b.values());
	b.add("c");
	console.log(b.values());
	b.remove("c");
	console.log(b.values());
	console.log(a.union(b).values());
	console.log(a.intersection(b));
	console.log(b.difference(a));
	console.log(a.subset(b));

})();