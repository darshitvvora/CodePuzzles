function sortLogs(logs){
	var digLogs = [];
	var letterLogs = [];

	for(var i =0; i<logs.length;i++){
		var temp = logs[i].split(" ");
		var patt = new RegExp(/\d/g);
		if(patt.test(temp[1])){
			digLogs.push(logs[i]);
		} else {
			letterLogs.push(logs[i]);
		}
	}

	letterLogs.sort(function(a,b){
		var tempA = a.slice(a.indexOf(" ")+1);
		var tempB = b.slice(b.indexOf(" ")+1);
		if(tempA ==  tempB){
			return a.localeCompare(b);
		} else {
			return tempA.localeCompare(tempB);
		}

	});

	return [...letterLogs, ...digLogs];
}


(function main(){
	var logs = ["dig1 8 1 5 1","let1 art zero","dig2 3 6","let2 own kit dig","let3 art can"];
	var sortedLogs = sortLogs(logs);
	console.log(sortedLogs)
})()