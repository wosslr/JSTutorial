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
];


var gSelectedRow;

function createTable(message){
	
	var hRow = document.createElement("tr");
	hRow.style.width = "200%";
	
	appendCell(hRow, "th", "Order ID");
	appendCell(hRow, "th", "Customer");
	appendCell(hRow, "th", "Status");
	appendCell(hRow, "th", "Date");
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
		};
		
		appendCell(row, "td", salesOrders[i].ID);
		appendCell(row, "td", salesOrders[i].customer);
		appendCell(row, "td", salesOrders[i].status);
		
		var date = new Date(salesOrders[i].date);
		appendCell(row, "td", date.toDateString());
		document.getElementById("newbody").appendChild(row); //
	}
	
}

function appendCell(oRow, cellTag, text) {
	var oCell = document.createElement(cellTag);
	oCell.appendChild(document.createTextNode(text));
	oRow.appendChild(oCell);
}
