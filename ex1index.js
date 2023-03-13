let count = 0;
let saveCount = 0;
let countStr = "";
const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");

function increment(){
	count++;
	countEl.innerText = count;
	console.log("increment-btn clicked");
	console.log(count);
}

function save(){
	if(saveCount==0){
		countStr = count;
	}
	else{
		countStr = " - " + count;
	}
	saveEl.textContent += countStr;
	saveCount++;
	count = 0;
	countEl.innerText = count;
	console.log("save-btn clicked");
	console.log(countStr);
}

function clearall(){
	count = 0;
	saveCount = 0;
	countStr = "";
	countEl.innerText = count;
	saveEl.textContent = "Previous Entries: ";
	console.log("save-btn clicked");
	console.log("Reset ALL");
}