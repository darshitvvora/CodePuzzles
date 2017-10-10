// Output require is as follows
/*
Below function traverses JSON tree and prints folder and files levels on console. This can be extended to create dynamic herirachical HTML

 > stuff
 > things
 - levelOneProp3
   > moreStuff
   > morethings
   > morestuff-n-things
*/
function traverseTree(jsonTree, i) {
    for (let key in jsonTree) {
        if (typeof jsonTree[key] == "object") {
			console.log("-".repeat(i), key);
			i++;
            traverseTree(jsonTree[key], i);
        } else {
            console.log(" ".repeat(i),">", jsonTree[key]);
        }
    }
};

// Sample JSON 
const directoryStructure = {
  levelOneProp1: 'stuff',
  levelOneProp2: 'things',
  levelOneProp3: {
     levelTwoProp1: 'moreStuff',
     levelTwoProp2: 'morethings',
     levelTwoProp3: 'morestuff-n-things'
  } 
};

traverseTree(directoryStructure, 1);