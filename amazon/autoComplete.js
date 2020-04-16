function autoComplete(products, word){
	
	products.sort();
	var subsequences = [];

	for(var i=0;i<word.length;i++)
	{
		var letter = word.slice(0,i+1);
		subsequences.push(letter);

	}

	var searches = [];
	subsequences.forEach(e=>{
	 var fProducts =	products.filter(f=>{
		return	e == f.slice(0, e.length);
		});
		searches.push(fProducts.splice(0,3));
	});
	return searches;
}	


(function(){
var products = ['mouse', 'mousepad', 'monitor', 'mirror'];
var word = "mouse";
var searches = autoComplete(products, word);
console.log(searches);
})();