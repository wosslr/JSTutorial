/**
 * 
 */

var salesOrders = [
      {
    	  ID: "1527",
    	  customer: "101",
    	  date: "2015-06-10",
    	  status: "Released",
    	  items: [
    	          {
    	        	  itemID: "10",
    	        	  product: "MCF-0001",
    	        	  quantity: 100,
    	        	  unit: "EA"
    	          },
    	          {
    	        	  itemID: "20",
    	        	  product: "MCF-0001",
    	        	  quantity: 150,
    	        	  unit: "EA"
    	          }
    	  ]
      },
      {
    	  ID: "1528",
    	  customer: "101",
    	  date: "2015-06-11",
    	  status: "In Process",
    	  items: [
    	          {
    	        	  itemID: "10",
    	        	  product: "MCF-0001",
    	        	  quantity: 20,
    	        	  unit: "EA"
    	          },
    	          {
    	        	  itemID: "20",
    	        	  product: "MCF-0001",
    	        	  quantity: 50,
    	        	  unit: "EA"
    	          }
    	  ]
      },
      {
    	  ID: "1529",
    	  customer: "102",
    	  date: "2015-06-12",
    	  status: "New",
    	  items: [
    	          {
    	        	  itemID: "10",
    	        	  product: "MCF-0001",
    	        	  quantity: 23,
    	        	  unit: "EA"
    	          },
    	          {
    	        	  itemID: "20",
    	        	  product: "MCF-0001",
    	        	  quantity: 45,
    	        	  unit: "EA"
    	          }
    	  ]
      },
      {
    	  ID: "1530",
    	  customer: "102",
    	  date: "2015-06-13",
    	  status: "New",
    	  items: [
    	          {
    	        	  itemID: "10",
    	        	  product: "MCF-0001",
    	        	  quantity: 23,
    	        	  unit: "EA"
    	          },
    	          {
    	        	  itemID: "20",
    	        	  product: "MCF-0001",
    	        	  quantity: 45,
    	        	  unit: "EA"
    	          }
    	  ]
      },
];

var gSOStatus = {
	NEW: "New",	
	IN_PROCESS: "In Process",
	RELEASED: "Released",
	CANCELLED: "Cancelled",
};

var gSelectedRow;

function createTable(message){
	
	var hRow = document.createElement("tr");
	hRow.style.width = "200%";
	
	appendCell(hRow, "owlCell", "th", "Order ID");
	appendCell(hRow, "owlCell", "th", "Customer");
	appendCell(hRow, "owlCell", "th", "Status");
	appendCell(hRow, "owlCell", "th", "Date");
	document.getElementById("newtitle").appendChild(hRow);
	
	for(var i=0; i<salesOrders.length;i++){
		
		var row = document.createElement("tr");
		row.onclick = function (){
			
			if (gSelectedRow === this) {
				gSelectedRow = null;
				this.className = "";
			} else if (gSelectedRow == null) {
				gSelectedRow = this;
				this.className = "selectedRow";
			} else {
				gSelectedRow.className = "";
				gSelectedRow = this;
				gSelectedRow.className = "selectedRow";
			}
			resetActButtonStatus();
		};
		
		appendCell(row, "owlCell", "td", salesOrders[i].ID);
		appendCell(row, "owlCell", "td", salesOrders[i].customer);
		appendCell(row, "owlCell", "td", salesOrders[i].status);
		
		var date = new Date(salesOrders[i].date);
		appendCell(row, "owlCell", "td", date.toDateString());
		document.getElementById("newbody").appendChild(row); //
	}
	
	resetActButtonStatus();
}

function appendCell(oRow, className, cellTag, text) {
	var oCell = document.createElement(cellTag);
	oCell.className = className;
	oCell.appendChild(document.createTextNode(text));
	oRow.appendChild(oCell);
}

function showNewSOpup(w,h){   
    var popUnder = document.getElementById("newSOPopUnder");
    popUnder.style.top = "0px";
    popUnder.style.left = "0px";
    popUnder.style.width = "100%";
    popUnder.style.height = "100%";
    popUnder.style.visibility = "visible";
    popUnder.style.display = "block";
    
    var popup = document.getElementById("newSOPop");
    popup.style.visibility = "visible";
    popup.style.left = "40%";
    popup.style.top = "30%";    
    //document.body.style.margin = 0;
}

function hidepopup(){   
    var popup = document.getElementById("newSOPopUnder");   
    popup.style.visibility = "hidden";
}

function deleteRow(){
	if(gSelectedRow != null){
		document.getElementById("newbody").deleteRow(gSelectedRow.rowIndex - 1);
		gSelectedRow = null;
	}
	resetActButtonStatus();
}

function setActButtonEnable( sProcess, sRelease, sCancel ) {
	document.getElementById("btnProcess").enable = sProcess;
	document.getElementById("btnProcess").disabled = !sProcess;
	document.getElementById("btnRelease").enable = sRelease;
	document.getElementById("btnRelease").disabled = !sRelease;
	document.getElementById("btnCancel").enable = sCancel;
	document.getElementById("btnCancel").disabled = !sCancel;
}

function resetActButtonStatus() {
	if (gSelectedRow == null) {
		setActButtonEnable(false, false, false);
	}else if (gSelectedRow.childNodes[2].innerText == gSOStatus.NEW) {
		setActButtonEnable(true, false, true);
	}else if (gSelectedRow.childNodes[2].innerText == gSOStatus.IN_PROCESS) {
		setActButtonEnable(false, true, true);
	}else{
		setActButtonEnable(false, false, false);
	}
}

function setSOtoInProcess() {
	gSelectedRow.childNodes[2].innerText = gSOStatus.IN_PROCESS;
	resetActButtonStatus();
}

function setSOtoReleased() {
	gSelectedRow.childNodes[2].innerText = gSOStatus.RELEASED;
	resetActButtonStatus();
}

function setSOtoCancelled() {
	gSelectedRow.childNodes[2].innerText = gSOStatus.CANCELLED;
	resetActButtonStatus();
}
