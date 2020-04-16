
function calculateFrequency(num, sentences, stopwords){
	var hashMap = {};
	const logArr = sentences
					.replace(/[\W_]+/g," ")
					.split(" ")
					.map(e => e.toLowerCase())
					.filter(e => (stopwords.indexOf(e) == -1))

	logArr.forEach(e=>{
		if(hashMap[e] != undefined){
			hashMap[e]+=1;
		} else {
			hashMap[e] = 1;
		}
	});

	const frequency = Object.keys(hashMap).sort(function(a,b){
		if(hashMap[a] == hashMap[b]){
			return a.localeCompare(b);
		} else {
			return hashMap[b]-hashMap[a]
		}
	});
		//console.log(frequency);

	return frequency.slice(0,num);
}



(function main(){
	var k = 2
	var logs = `Anacell provides the best services in the city
  betacellular has awesome services
  Best services provided by anacell, everyone should use anacell`;

  var stopwords = ['the', 'has', 'in', 'by', 'should', 'use'];

  var words = calculateFrequency(k,logs,stopwords);
  console.log(words);

})()