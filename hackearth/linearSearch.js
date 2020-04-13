
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function findlastOccurence(arr, num){
    var index = 1;
    for(var i=arr.length; i>=0; i--){
        if(+num == +arr[i]){
            index = i+1; return index; 
        }
    }
    return -1;
}

function main(input) {
    var pInputArr = input.split("\n");

    var InputArr = pInputArr[1].split(" ").map(Number);
    var val = pInputArr[0].split(" ")[1];

    var out = findlastOccurence(InputArr, val)
    process.stdout.write(out.toString());       // Writing output to STDOUT
}