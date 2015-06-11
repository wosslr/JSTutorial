/**
 * 
 */

function createTable(message){
	
	for(var i=0; i<10;i++){
		
		var row = document.createElement("tr");
		
		for(var j = 0; j < 10; j++){
			var cell = document.createElement("td");
			cell.appendChild(document.createTextNode("test"));
			row.appendChild(cell);
		}
		var oTable = document.getElementById("newbody");
		document.getElementById("newbody").appendChild(row);
	}
	
}
