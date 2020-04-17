class Hashtable{
	constructor(bucket=4,storage={}){
		this.storage = storage;
		this.bucket = bucket;
		this.initializeBuckets();
	}

	initializeBuckets(){
		for(var i=0;i<=this.bucket;i++){
			this.storage[i] = [];
		}
	}

	hash(key){
		var hashVal = 0;
		for(var i=0;i<key.length;i++){
			hashVal += key.charCodeAt(i);
		}
		return hashVal % this.bucket;
	}

	add(key,value){
		var index = this.hash(key);
		var val = this.storage[index];
	//	console.log(index);

		var added = false;

		for(var i=0;i<val.length;i++){
			if(val[i][0] == key){
				this.storage[index][i] =[key, value];
				added = true;
			}
		}

		if(!added){
			this.storage[index].push([key,value]);
		}

	}

	remove(key){
		var index = this.hash(key);
		var val = this.storage[index];

		for(var i=0;i<val.length;i++){
			if(val[i][0] == key){
				this.storage[index].splice(i,1);
				return true;
			}
		}
		return false;
	}

	lookup(key){
		var index = this.hash(key);

		var val = this.storage[index];

		return val.filter(e=>{
			return e[0] == key;
		})	
		return false;

	}

	show(){
		return this.storage;
	}

}

(function main(){
	var ht = new Hashtable(5);

	ht.add("John", "Doe");
	ht.add("Ron", "Neo");
	ht.add("Shawn", "Rio");
	ht.add("Leon", "Jio");
	ht.add("Nathan", "Sio");
	ht.add("Ram", "Suresh");

	console.log(ht.show());
	console.log(ht.lookup("John"));
	ht.remove("Ram");
	console.log(ht.show());
	console.log(ht.lookup("Clarke"));



})()