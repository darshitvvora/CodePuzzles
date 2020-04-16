function findCriticalNodes(n, edges){
	const criticalNode = [];
	var graph = {};

	for(var i =0;i < n; i++ ){
		graph = createGraph(n, edges);	 
		 delete graph[i];
		 for(var index in graph){
             var x = graph[index].indexOf(i);
             if(x != -1){
                 graph[index].splice(x,1);
             }
         }
		if(!isGraphConnected(graph)){
            criticalNode.push(i);
		}
	}
    return criticalNode;
}

function createGraph(n,edges){
    var graph ={};
	for(var i=0; i<n; i++) {
		graph[i] = [];
	}
		edges.forEach(edge => {
			graph[edge[0]].push(edge[1]);
			graph[edge[1]].push(edge[0]); 
		})
return graph;	
}

function isGraphConnected(graph){
	var visited = [];
    
    var start = +Object.keys(graph).shift();
    
    function dfs(node){
        visited.push(node);
        let edges = graph[node];
        edges.forEach(e => {
            if(visited.indexOf(e) == -1){
                dfs(e);
            }
        })
    }
    dfs(start);
    
    return visited.length == Object.keys(graph).length;
}

(function main(){
	
	const edges = [[0,1],[0,2],[1,2],[1,3],[2,4],[4,5]]
	const numNodes = 6;
	const node = findCriticalNodes(numNodes, edges);
	console.log(node);
})()





