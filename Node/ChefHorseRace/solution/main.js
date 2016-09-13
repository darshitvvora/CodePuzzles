/*
FileName: main.js
Author: Darshit Vora
Project: Logical Puzzle Webaroo
Problem Statement:
Chef is very fond of horses. He enjoys watching them race. As expected, he has a stable full of horses.
He, along with his friends, goes to his stable during the weekends to watch a few of these horses race.
Chef wants his friends to enjoy the race and so he wants the race to be close. This can happen only if the
horses are comparable on their skill i.e. the difference in their skills is less.
There are N horses in the stable. The skill of the horse i is represented by an integer S[i]. The Chef needs
to pick 2 horses for the race such that the difference in their skills is minimum. This way, he would be
able to host a very interesting race. Your task is to help him do this and report the minimum difference
that is possible between 2 horses in the race.
Input:
First line of the input file contains a single integer T, the number of test cases.
Every test case starts with a line containing the integer N.
The next line contains N space separated integers where the i-th integer is S[i].
Output:
For each test case, output a single line containing the minimum difference that is possible.
Constraints:
1 ≤ T ≤ 10
2 ≤ N ≤ 5000
1 ≤ S[i] ≤ 1000000000
Example:
Input:
1
5
4 9 1 32 13
Output:
3
Explanation: The minimum difference can be achieved if we pick horses with skills 1 and 4 for the race	
*/

const fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   const sData= data.toString();
//console.log(sData.split("\r\n"));
   const arrInputArr = sData.split("\r\n");
   const iNoOfTestCases = parseInt(arrInputArr[0],10);
   //console.log(arrInputArr.length);
   if(iNoOfTestCases>=1 && iNoOfTestCases<=10){
   		for(let iFirstIter=1;iFirstIter<=iNoOfTestCases*2;iFirstIter+=2){
   			const ans =	oFindMinimumDiffFromArr(arrInputArr[iFirstIter+1],arrInputArr[iFirstIter]);
   			if(ans === -1){
   				console.log("ERR NOT PROCESSED. SEE THE ABOVE REASON FOR MORE DETAILS\n");
   			} else {
   				console.log("Output",ans);console.log("-----------------------\n");
   			}
   		}

   } else{
   	console.log("INVALID | As per the requirements only 1 to 10 number is valid for number of test cases. Kindly, reduce number of test cases and rerun\n");
   }
});

function sortNumber(a,b) {
    return a - b;
}

function oFindMinimumDiffFromArr(strArray,n){
	const arrTemp = strArray.split(" ").map(function(item) {
    return parseInt(item, 10);
});
	const iNoOfElems = parseInt(n,10);	
	console.log("Input:",arrTemp,"\n");
	arrTemp.sort(sortNumber);	
	if(iNoOfElems<2 || iNoOfElems>5000){
		console.log("INVALID | As per the requirements number of horses should be greater then 2 and less then 5000. So this set will not be processed\n");
		return -1;		
	} 
	const iSmallestArrElem = parseInt(arrTemp[0],10);
	const iLargestArrElem = parseInt(arrTemp[arrTemp.length-1],10);
	if(iSmallestArrElem<1 || iNoOfElems>1000000000){
		console.log("INVALID | As per the requirements skillid should be greater then 1 and less then 1000000000. So this set will not be processed\n");
		return -1;		
	} 
	let diff = 1000000001;	
	for (let inIter=0; inIter<iNoOfElems; inIter++){
		const iFirstVal = parseInt(arrTemp[inIter],10);
		const iSecondVal = parseInt(arrTemp[inIter+1],10);
		const iActualDiff = iSecondVal - iFirstVal;
		if (iActualDiff < diff){
			diff = iActualDiff;
		}
	}	
	return diff;
}