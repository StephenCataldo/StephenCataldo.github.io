function beerverse (bottleCount){
	while (bottleCount > 0) {
	  var verse = bottleCount + " bottles of beer on the wall<br>"
	    	+ bottleCount + " bottles of beer!<br>"
	    	+ "Take one down, pass it around<br>"  
	    	+ --bottleCount + " bottles of beer on the wall!";
	  console.log('bottlecount: ' + bottleCount);
	 document.writeln('<p>' + verse + '</p>');
	}
}

