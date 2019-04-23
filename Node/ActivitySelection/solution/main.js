/*
FileName: main.js
Author: Darshit Vora
Project: Logical Puzzle
Problem Statement:
You are given n activities with their start and finish times.
Select the maximum number of activities that can be performed by a single person,
 assuming that a person can only work on a single activity at a time.
Example:
Input:
activity = [{
id:1,
start:10,
end:20,
},{
id:2,
start:12,
end:25,
},{
id:3,
start:20,
end:30,
}];
MAX_HOURS_PERSON_CN_WORK=20
Output:
1,3
Explanation:
Greedy is an algorithmic paradigm that builds up a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit. Greedy algorithms are used for optimization problems. An optimization problem can be solved using Greedy if the problem has the following property: At every step, we can make a choice that looks best at the moment, and we get the optimal solution of the complete problem.
If a Greedy Algorithm can soThe greedy choice is to always pick the next activity whose finish time is least among the remaining activities and the start time is more than or equal to the finish time of previously selected activity. We can sort the activities according to their finishing time so that we always consider the next activity as minimum finishing time activity.

1) Sort the activities according to their finishing time
2) Select the first activity from the sorted array and print it.
3) Do following for remaining activities in the sorted array.
…….a) If the start time of this activity is greater than or equal to the finish time of previously selected activity then select this activity and print it.lve a problem, then it generally becomes the best method to solve that problem as the Greedy algorithms are in general more efficient than other techniques like Dynamic Programming. But Greedy algorithms cannot always be applied. For example, Fractional Knapsack problem (See this) can be solved using Greedy, but 0-1 Knapsack cannot be solved using Greedy.

The greedy choice is to always pick the next activity whose finish time is least among the remaining activities and the start time is more than or equal to the finish time of previously selected activity. We can sort the activities according to their finishing time so that we always consider the next activity as minimum finishing time activity.

1) Sort the activities according to their finishing time
2) Select the first activity from the sorted array and print it.
3) Do following for remaining activities in the sorted array.
…….a) If the start time of this activity is greater than or equal to the finish time of previously selected activity then select this activity and print it.
*/


function selectActivities(activities, m){
	activities.sort(function (a,b){return a.end-b.end});
	let finalArr = [];
	let prevActivity = activities.shift();
	finalArr.push(prevActivity.id);
	let itr =prevActivity.end-prevActivity.start;

	activities.map(function(a,i){
		if(itr<=m &&  a.start>=prevActivity.end){
			prevActivity=activities.splice(i,1);
			finalArr.push(prevActivity[0].id);
			itr+=(prevActivity.end-prevActivity.start);
		}
	});

	return finalArr;


}

(function main(){
	const activity = [{
		id:1,
		start:10,
		end:20,
	},{
		id:2,
		start:12,
		end:25,
	},{
		id:3,
		start:20,
		end:30,
	}];

	const MAX_HOURS_PERSON_CN_WORK=20;

	const result = selectActivities(activity,MAX_HOURS_PERSON_CN_WORK);
	console.log(result);

}());
