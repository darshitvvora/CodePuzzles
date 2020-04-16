
var partitionLabels = function(S) {
    let map = {}, answer = []
    // record the last index it occurs
    for(let i =0; i< S.length; i++) {
        map[S[i]] = i
    }
    console.log(map);
    let j = 0, anchor = 0
    // in a chunk of string, if the last character occurrence of that chunk
    // is same as the index means we are at the end of that partition.
    for(let i =0; i< S.length; i++) {
        j = Math.max(j, map[S[i]])
        if(i === j) {
            answer.push(i - anchor + 1)
            anchor = i+1
        }
    }
    
    return answer
};

(function main(){
   var S = "ababcbacadefegdehijhklij";
   console.log(partitionLables(S));
})()