// EXTRACT VALUE FOR HTML HEADER. 
// ('Book ID', 'Book Name', 'Category' and 'Price')
var col = [];
for (var i = 0; i < myBooks.length; i++) {
	for (var key in myBooks[i]) {
		if (col.indexOf(key) === -1) {
			col.push(key);
		}
	}
}

// CREATE DYNAMIC TABLE.
var table = document.createElement("table");

// CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

var tr = table.insertRow(-1);                   // TABLE ROW.

for (var i = 0; i < col.length; i++) {
	var th = document.createElement("th");      // TABLE HEADER.
	th.innerHTML = col[i];
	tr.appendChild(th);
}

// ADD JSON DATA TO THE TABLE AS ROWS.
for (var i = 0; i < myBooks.length; i++) {

	tr = table.insertRow(-1);

	for (var j = 0; j < col.length; j++) {
		var tabCell = tr.insertCell(-1);
		if (myBooks[i][col[j]].includes("http")) {
			tabCell.innerHTML = "<a href=\"" + myBooks[i][col[j]] + "\">Link</a>";
		}
		else {
			tabCell.innerHTML = myBooks[i][col[j]];
		}
	}
}

table.setAttribute("class", "center");

// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
var divContainer = document.getElementById("showData");
divContainer.innerHTML = "";
divContainer.appendChild(table);