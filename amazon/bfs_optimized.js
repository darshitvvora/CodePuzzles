

function traverse(matrix){
	
	const rows = matrix.length;
	const columns = matrix[0].length;
	let numIter = 0;
	const dir = [[0,1],[1,0],[-1,0],[0,-1]];
	const queue = [];
	let total = rows*columns;

	// push indices of all starting points in queue

	matrix.forEach((row,i)=>{
		row.forEach((val,j)=>{
			if(val==1){
				queue.push([i,j]);
			}
		});
	});

	let totalZero = total - (queue.length);


while(queue.length){
	if(totalZero == 0) return numIter;

	 ++numIter;

	for(var idx = queue.length; idx>0 ; idx--){
		 var qVal = queue.shift();

		 

			dir.forEach((d,k)=>{
			 var irow = d[0]+qVal[0];
			 var icol = d[1]+qVal[1];

				if(
				(irow>=0 && irow<rows) &&
				(icol>=0 && icol<columns) &&
				matrix[irow][icol] == 0
				) {
					matrix[irow][icol] =1;
					queue.push([irow,icol]);
					totalZero--;

				}

			})
		}
	}


}


(function main(){
	const matrix = [
					[0,1,0,1],
					[1,0,1,1],
					[0,0,1,1],
					[0,0,0,1]
				];

	var numIterations = traverse(matrix);
	console.log(numIterations);

})();