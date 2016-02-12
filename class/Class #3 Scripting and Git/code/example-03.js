function beerverse (bottleCount){
	while (bottleCount > 0) {
	
	twoless= bottleCount-2;
	
	  var verse = bottleCount + " bottles of beer on the wall<br>"
	    	+ bottleCount + " bottles of beer!<br>"
	    	+ "Take one down, pass it around<br>"  
	    	+ twoless + " bottles of beer on the wall!";
	    	bottleCount=bottleCount-2;
	  console.log('bottlecount: ' + bottleCount);
	 document.writeln('<p>' + verse + '</p>');
	}
}

