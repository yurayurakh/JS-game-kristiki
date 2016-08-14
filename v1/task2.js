var doc = document;

var table = function (){
	var k=0;
	var rows = doc.getElementById("rows").value,
		cols = doc.getElementById("cols").value,
		tb = doc.getElementById("field");
		for (var i = 1; i <= rows; i++){
			elTr = doc.createElement("tr");
			elTr.id = "tr"+i;
			tb.appendChild(elTr);
			for (var j = 1; j <= cols; j++){
				elTd = doc.createElement("td");
				elTd.className = "td"+j;
				elTr.appendChild(elTd);
			}
		}
			tabl = doc.getElementById("field");
			tabl.onclick = function(event) {
			  var target = event.target;
			  if (target.tagName == 'TD') {
			  		k++;
			  		if (k%2 ==0){
			  			zero = doc.createElement("div");
			  			target.appendChild(zero);
			  			target.style.backgroundColor="yellow";

			  			var table = doc.body.children[0];
			  			for (var i=0; i < rows; i++){
			  				if (table.rows[i].cells[0].style.backgroundColor == 'yellow' && table.rows[i].cells[1].style.backgroundColor == 'yellow' && table.rows[i].cells[2].style.backgroundColor == 'yellow'){
			  					alert("win O");
			  					news();
			  				} 
			  				if (table.rows[0].cells[0].style.backgroundColor == 'yellow' && table.rows[1].cells[1].style.backgroundColor == 'yellow' && table.rows[2].cells[2].style.backgroundColor == 'yellow'){
			  					alert("win O");
			  					news();
			  				}
			  				if (table.rows[2].cells[0].style.backgroundColor == 'yellow' && table.rows[1].cells[1].style.backgroundColor == 'yellow' && table.rows[0].cells[2].style.backgroundColor == 'yellow'){
			  					alert("win O");
			  					news();
			  				}
			  				if (table.rows[0].cells[0].style.backgroundColor == 'yellow' && table.rows[1].cells[0].style.backgroundColor == 'yellow' && table.rows[2].cells[0].style.backgroundColor == 'yellow'){
			  					alert("win O");
			  					news();
			  				}
			  				if (table.rows[0].cells[1].style.backgroundColor == 'yellow' && table.rows[1].cells[1].style.backgroundColor == 'yellow' && table.rows[2].cells[1].style.backgroundColor == 'yellow'){
			  					alert("win O");
			  					news();
			  				}
			  				if (table.rows[0].cells[2].style.backgroundColor == 'yellow' && table.rows[1].cells[2].style.backgroundColor == 'yellow' && table.rows[2].cells[2].style.backgroundColor == 'yellow'){
			  					alert("win O");
			  					news();
			  				}
			  			}
			  		}
			  		else {
			  			cross = doc.createElement("span");
			  			cross.style.backgroundColor="green";
			  			content = doc.createTextNode("x");
			  			cross.appendChild(content);
			  			target.appendChild(cross);
			  			target.style.backgroundColor="green";

			  			var table = doc.body.children[0];
			  			for (var i=0; i < rows; i++){
			  				if (table.rows[i].cells[0].style.backgroundColor == 'green' && table.rows[i].cells[1].style.backgroundColor == 'green' && table.rows[i].cells[2].style.backgroundColor == 'green'){
			  					alert("win X");
			  					news();
			  				} 
			  				if (table.rows[0].cells[0].style.backgroundColor == 'green' && table.rows[1].cells[1].style.backgroundColor == 'green' && table.rows[2].cells[2].style.backgroundColor == 'green'){
			  					alert("win X");
			  					news();
			  				}
			  				if (table.rows[2].cells[0].style.backgroundColor == 'green' && table.rows[1].cells[1].style.backgroundColor == 'green' && table.rows[0].cells[2].style.backgroundColor == 'green'){
			  					alert("win X");
			  					news();
			  				}
			  				if (table.rows[0].cells[0].style.backgroundColor == 'green' && table.rows[1].cells[0].style.backgroundColor == 'green' && table.rows[2].cells[0].style.backgroundColor == 'green'){
			  					alert("win X");
			  					news();
			  				}
			  				if (table.rows[0].cells[1].style.backgroundColor == 'green' && table.rows[1].cells[1].style.backgroundColor == 'green' && table.rows[2].cells[1].style.backgroundColor == 'green'){
			  					alert("win X");
			  					news();
			  				}
			  				if (table.rows[0].cells[2].style.backgroundColor == 'green' && table.rows[1].cells[2].style.backgroundColor == 'green' && table.rows[2].cells[2].style.backgroundColor == 'green'){
			  					alert("win X");
			  					news();
			  				}
			  			}

    				}
    				if (k==rows*cols){
				  			alert("нічия");
				  			news();
				  		}
			  	}
		  	}  			
}

var news = function(){
	var k=0;
	field = doc.body.children[0];
	doc.body.removeChild(field);
	field1 = doc.createElement("table");
	field1.id = "field";
	parentElem = doc.body;
	doc.body.insertBefore(field1, doc.body.firstChild);
	var rows = doc.getElementById("rows").value,
		cols = doc.getElementById("cols").value,
		tb = doc.getElementById("field");
		for (var i = 1; i <= rows; i++){
			elTr = doc.createElement("tr");
			elTr.id = "tr"+i;
			tb.appendChild(elTr);
			for (var j = 1; j <= cols; j++){
				elTd = doc.createElement("td");
				elTd.className = "td"+j;
				elTr.appendChild(elTd);
			}
		}
		tabl = doc.getElementById("field");
			tabl.onclick = function(event) {
			  var target = event.target;
			  if (target.tagName == 'TD') {
			  		k++;
			  		if (k%2 ==0){
			  			zero = doc.createElement("div");
			  			target.appendChild(zero);
			  			target.style.backgroundColor="yellow";

			  			var table = doc.body.children[0];
			  			for (var i=0; i < rows; i++){
			  				if (table.rows[i].cells[0].style.backgroundColor == 'yellow' && table.rows[i].cells[1].style.backgroundColor == 'yellow' && table.rows[i].cells[2].style.backgroundColor == 'yellow'){
			  					alert("win O");
			  					news();
			  				} 
			  				if (table.rows[0].cells[0].style.backgroundColor == 'yellow' && table.rows[1].cells[1].style.backgroundColor == 'yellow' && table.rows[2].cells[2].style.backgroundColor == 'yellow'){
			  					alert("win O");
			  					news();
			  				}
			  				if (table.rows[2].cells[0].style.backgroundColor == 'yellow' && table.rows[1].cells[1].style.backgroundColor == 'yellow' && table.rows[0].cells[2].style.backgroundColor == 'yellow'){
			  					alert("win O");
			  					news();
			  				}
			  				if (table.rows[0].cells[0].style.backgroundColor == 'yellow' && table.rows[1].cells[0].style.backgroundColor == 'yellow' && table.rows[2].cells[0].style.backgroundColor == 'yellow'){
			  					alert("win O");
			  					news();
			  				}
			  				if (table.rows[0].cells[1].style.backgroundColor == 'yellow' && table.rows[1].cells[1].style.backgroundColor == 'yellow' && table.rows[2].cells[1].style.backgroundColor == 'yellow'){
			  					alert("win O");
			  					news();
			  				}
			  				if (table.rows[0].cells[2].style.backgroundColor == 'yellow' && table.rows[1].cells[2].style.backgroundColor == 'yellow' && table.rows[2].cells[2].style.backgroundColor == 'yellow'){
			  					alert("win O");
			  					news();
			  				}
			  			}
			  		}
			  		else {
			  			cross = doc.createElement("span");
			  			cross.style.backgroundColor="green";
			  			content = doc.createTextNode("x");
			  			cross.appendChild(content);
			  			target.appendChild(cross);
			  			target.style.backgroundColor="green";

			  			var table = doc.body.children[0];
			  			for (var i=0; i < rows; i++){
			  				if (table.rows[i].cells[0].style.backgroundColor == 'green' && table.rows[i].cells[1].style.backgroundColor == 'green' && table.rows[i].cells[2].style.backgroundColor == 'green'){
			  					alert("win X");
			  					news();
			  				} 
			  				if (table.rows[0].cells[0].style.backgroundColor == 'green' && table.rows[1].cells[1].style.backgroundColor == 'green' && table.rows[2].cells[2].style.backgroundColor == 'green'){
			  					alert("win X");
			  					news();
			  				}
			  				if (table.rows[2].cells[0].style.backgroundColor == 'green' && table.rows[1].cells[1].style.backgroundColor == 'green' && table.rows[0].cells[2].style.backgroundColor == 'green'){
			  					alert("win X");
			  					news();
			  				}
			  				if (table.rows[0].cells[0].style.backgroundColor == 'green' && table.rows[1].cells[0].style.backgroundColor == 'green' && table.rows[2].cells[0].style.backgroundColor == 'green'){
			  					alert("win X");
			  					news();
			  				}
			  				if (table.rows[0].cells[1].style.backgroundColor == 'green' && table.rows[1].cells[1].style.backgroundColor == 'green' && table.rows[2].cells[1].style.backgroundColor == 'green'){
			  					alert("win X");
			  					news();
			  				}
			  				if (table.rows[0].cells[2].style.backgroundColor == 'green' && table.rows[1].cells[2].style.backgroundColor == 'green' && table.rows[2].cells[2].style.backgroundColor == 'green'){
			  					alert("win X");
			  					news();
			  				}
			  			}
    				}
    				if (k==rows*cols){
				  			alert("нічия");
				  			news();
				  		}
			  	}
		  	}
}
var creat = doc.getElementById("creat").onclick = table;
var clear = doc.getElementById("clear").onclick = news;
