//each item should look like this 
//<li>
function updatestatus() {
	var cbId = this.id.replace("cb_","");
	var itemText= document.getElementById("item_"+ cbId);
	if (this.checked) {
		itemText.className="checked";
	} 
	else {
		itemText.className="";
	}

}
function renameItem(){
	var newText = prompt("input new name");
	if (!newText||newText==""||newText==" ") {
		return false;
		}
	this.innerText=newText;
}
function removeItem() {
	var spanId = this.id.replace("item_","");
	document.getElementById("li_"+ spanId).style.display = ""; 
}

function addItem(list, itemText){
	noItems++;
	var listItem = document.createElement("li");
	listItem.ondblclick= removeItem;

	var checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	checkBox.id = "cb_"+ noItems;
	checkBox.onclick = updatestatus;
	
	var span = document.createElement("span");
	span.id= "item_"+ noItems;
	span.innerText = itemText;
	span.onclick = renameItem;
	span.ondblclick = removeItem;

	listItem.appendChild(checkBox);
	listItem.appendChild(span);

	list.appendChild(listItem);
}

	var noItems=0;
	var y= document.getElementById("inputst");
	y.focus();
	y.onkeyup = function(event){
		// 13- enter...32-space
		if(event.which==13){
			var	x=y.value;
				if (x==""||x==" ") {
					return false;
				}
			addItem(document.getElementById("todolist"), x);
			y.focus();
			y.select();

	}
}
