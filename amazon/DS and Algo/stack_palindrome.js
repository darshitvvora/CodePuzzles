// Palindrome using stack

function reverseWord(word){
	let stack = [];
	const length = word.length;
	let rword = "";

	for(let i=0;i<length;i++){
		stack.push(word[i]);
	}

	for(let j=0;j<length;j++){
		rword += stack.pop();
	}

	return rword;
}

(function main(){
	
	const input = "racecar";
	let output = "";

	output = reverseWord(input);

	output === input ? console.log("Palindrome") :
	console.log("Not a Palindrome")

})();