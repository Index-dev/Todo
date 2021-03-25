'use strict';

let itemList = [];
let checkL = [];
let uncheckL = [];
let lineL = [];
let inputButton = document.querySelector(".input__button");
inputButton.addEventListener("click", addItem);
let check = "none"; //체크있는 박스
let uncheck = "visible"; //빈 박스
let temp = "";

function enterkey() {
	if (window.event.keyCode == 13) {
		 addItem();
	}
}

function addItem() {
    let item = document.querySelector(".item").value;
    if (item.length > 0) {
        itemList.push(item);
        document.querySelector(".item").value = "";
        document.querySelector(".item").focus();
		checkL.push("none");
		uncheckL.push("visible");
		lineL.push("");
    }
	else {
		alert("할 일을 입력하세요!");
	}
	
    showList();
}


function showList() {
    let list = "<ul>"
    for (let i=0; i<itemList.length; i++) {
        list += "<div>"+ "<li>" + "<span style='display:" + checkL[i] +"' class='check' id=" + i + ">" + "\uD83D\uDDF9" + "</span>" 
		+ "<span style='display:" + uncheckL[i] + "' class='uncheck' id=" + i + ">" + "\u20DE" + "</span>" 
		+ "<span class='items'" + lineL[i] + ">" + (i+1) + ". " + itemList[i] + "</span>"
		+ "<span class='close' id=" + i + ">" + "\u00D7" + "</span>"
		+ "</li>"
		+ "</div>";
    }
    list += "</ul>";
    document.querySelector(".item__list").innerHTML = list;

    let deleteButtons = document.querySelectorAll(".close");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteItem);
    }
	
	let checkButtons = document.querySelectorAll(".check");
	for (let i = 0; i < itemList.length; i++) {
        checkButtons[i].addEventListener("click", uncheckItem);		
    }
	
	let uncheckButtons = document.querySelectorAll(".uncheck");
	for (let i = 0; i < itemList.length; i++) {
        uncheckButtons[i].addEventListener("click", checkItem);		
    }

}

function deleteItem() {
    let id = this.getAttribute("id");
	console.log(id + " " + "id");
    itemList.splice(id, 1);
    checkL.splice(id, 1);
    uncheckL.splice(id, 1);
    lineL.splice(id, 1);
    showList();
}

function checkItem() {
    let id = this.getAttribute("id");
	temp = checkL[id];
    checkL[id] = uncheckL[id];
	uncheckL[id]=temp;
	console.log(lineL[id].length);
	if(lineL[id].length === 0){
		lineL[id] = " style='text-decoration: line-through;'";
	}else{
		lineL[id] = "";
	}
    showList();
}

function uncheckItem() {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('checked');
	}
    let id = this.getAttribute("id");
	temp = uncheckL[id];
	uncheckL[id] = checkL[id];
	checkL[id]=temp;
	if(lineL[id].length === 0){
		lineL[id] = " style='text-decoration: line-through;'";
	}else{
		lineL[id] = "";
	}
    showList();
}