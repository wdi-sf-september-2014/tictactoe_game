var cells = document.getElementsByTagName("td");
var counter = 0;

//Check that cell is "off" and that it hasn't been clicked yet
var clickhandler = function() {
    	if (counter % 2 === 0 && this.innerHTML === "") {
	    	this.innerHTML = "X";
	    	this.setAttribute("style", "background-color:blue;");
	    	counter++;
	    }
	    else if (this.innerHTML === "") {
	  		this.innerHTML = "O";
	  		this.setAttribute("style", "background-color:red;");
	  		counter++;
	    }
}

//Assigns clickhandler function to each td cell
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", clickhandler);
};

//Reset game board
document.getElementsByTagName("button")[0].addEventListener("click", function() {
	for (i = 0; i < cells.length; i++) {
		cells[i].innerHTML = "";
		cells[i].setAttribute("style", "background-color:#262626;");
		counter = 0;
	}
});