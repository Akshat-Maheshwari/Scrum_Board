var close1 = document.querySelector('#close-btn1');
var add1 = document.querySelector('#add-btn1');
close1.onclick=function(event){
	document.querySelector('#adding-things1').style.display='none';
}
add1.onclick=function(event){
	document.querySelector('#adding-things1').style.display='block';
}

var close2 = document.querySelector('#close-btn2');
var add2 = document.querySelector('#add-btn2');
close2.onclick=function(event){
	document.querySelector('#adding-things2').style.display='none';
}
add2.onclick=function(event){
	document.querySelector('#adding-things2').style.display='block';
}

var close3 = document.querySelector('#close-btn3');
var add3 = document.querySelector('#add-btn3');
close3.onclick=function(event){
	document.querySelector('#adding-things3').style.display='none';
}
add3.onclick=function(event){
	document.querySelector('#adding-things3').style.display='block';
}

var close4 = document.querySelector('#close-btn4');
var add4 = document.querySelector('#add-btn4');
close4.onclick=function(event){
	document.querySelector('#adding-things4').style.display='none';
}
add4.onclick=function(event){
	document.querySelector('#adding-things4').style.display='block';
}




showStory();
let save1 = document.getElementById("save-btn1");

save1.addEventListener("click", function(e){

	let textbox1 =document.getElementById("txt-box1");
	let story = localStorage.getItem("story");
	if(story == null){
		storyObj=[];
	}
	else{
		storyObj = JSON.parse(story);
	}
	storyObj.push(textbox1.value);
	localStorage.setItem("story", JSON.stringify(storyObj));
	textbox1.value = "";
	console.log(storyObj);

	showStory();
})

function showStory() {

	let story = localStorage.getItem("story");
	if(story == null){
		storyObj=[];
	}
	else{
		storyObj = JSON.parse(story);
	}

	let data = "";
	storyObj.forEach(function(element, index){

		data += `

			<li class="list-group-item"><div class="story">${element}</div>
		
							<button id="${index}" onclick="deleteBtn(this.id)" type="button" class="btn btn-danger btn-sm delete-btn">Delete</button>
						</li>

		`;

	});

	let stories = document.getElementById("story");
	if (storyObj.length != 0){
		stories.innerHTML = data;
	}
	else{
		stories.innerHTML = `No Stories, Use "Add".`;
	}
}


function deleteBtn(index){
	console.log('Delete');

	let textbox1 =document.getElementById("txt-box1");
	let story = localStorage.getItem("story");
	if(story == null){
		storyObj=[];
	}
	else{
		storyObj = JSON.parse(story);

	storyObj.splice(index, 1);
	localStorage.setItem("story", JSON.stringify(storyObj));
	showStory();
	}
}


showtodo();
let save2 = document.getElementById("save-btn2");

save2.addEventListener("click", function(e){

	let textbox2 =document.getElementById("txt-box2");
	let todo = localStorage.getItem("todo");
	if(todo == null){
		todoObj=[];
	}
	else{
		todoObj = JSON.parse(todo);
	}
	todoObj.push(textbox2.value);
	localStorage.setItem("todo", JSON.stringify(todoObj));
	textbox2.value = "";
	console.log(todoObj);

	showtodo();
})

function showtodo() {

	let todo = localStorage.getItem("todo");
	if(todo == null){
		todoObj=[];
	}
	else{
		todoObj = JSON.parse(todo);
	}

	let data = "";
	todoObj.forEach(function(element, index){

		data += `

			<li class="list-group-item"><div class="todo">${element}</div>
							<button id="${index}" onclick="deleteBtn2(this.id)" type="button" class="btn btn-danger btn-sm delete-btn">Delete</button>
						</li>

		`;

	});

	let todoL = document.getElementById("todo");
	if (todoObj.length != 0){
		todoL.innerHTML = data;
	}
	else{
		todoL.innerHTML = `No Tasks, Use "Add".`;
	}
}

function deleteBtn2(index){
	console.log('Delete');

	let textbox2 =document.getElementById("txt-box2");
	let todo = localStorage.getItem("todo");
	if(todo == null){
		todoObj=[];
	}
	else{
		todoObj = JSON.parse(todo);

	todoObj.splice(index, 1);
	localStorage.setItem("todo", JSON.stringify(todoObj));
	showtodo();
	}
}

showinp();
let save3 = document.getElementById("save-btn3");

save3.addEventListener("click", function(e){

	let textbox3 =document.getElementById("txt-box3");
	let inp = localStorage.getItem("inp");
	if(inp == null){
		inpObj=[];
	}
	else{
		inpObj = JSON.parse(inp);
	}
	inpObj.push(textbox3.value);
	localStorage.setItem("inp", JSON.stringify(inpObj));
	textbox3.value = "";
	console.log(inpObj);

	showinp();
})

function showinp() {

	let inp = localStorage.getItem("inp");
	if(inp == null){
		inpObj=[];
	}
	else{
		inpObj = JSON.parse(inp);
	}

	let data = "";
	inpObj.forEach(function(element, index){

		data += `

			<li class="list-group-item"><div class="inp">${element}</div>
	
							<button id="${index}" onclick="deleteBtn3(this.id)" type="button" class="btn btn-danger btn-sm delete-btn">Delete</button>
						</li>

		`;

	});

	let inpL = document.getElementById("inp");
	if (inpObj.length != 0){
		inpL.innerHTML = data;
	}
	else{
		inpL.innerHTML = `Nothing in progress, Use "Add".`;
	}
}


function deleteBtn3(index){
	console.log('Delete');

	let textbox3 =document.getElementById("txt-box3");
	let inp = localStorage.getItem("inp");
	if(inp == null){
		inpObj=[];
	}
	else{
		inpObj = JSON.parse(inp);

	inpObj.splice(index, 1);
	localStorage.setItem("inp", JSON.stringify(inpObj));
	showinp();
	}
}




showdone();
let save4 = document.getElementById("save-btn4");

save4.addEventListener("click", function(e){

	let textbox4 =document.getElementById("txt-box4");
	let done = localStorage.getItem("done");
	if(done == null){
		doneObj=[];
	}
	else{
		doneObj = JSON.parse(done);
	}
	doneObj.push(textbox4.value);
	localStorage.setItem("done", JSON.stringify(doneObj));
	textbox4.value = "";
	console.log(doneObj);

	showdone();
})

function showdone() {

	let done = localStorage.getItem("done");
	if(done == null){
		doneObj=[];
	}
	else{
		doneObj = JSON.parse(done);
	}

	let data = "";
	doneObj.forEach(function(element, index){

		data += `

			<li class="list-group-item"><div class="done">${element}</div>
		
							<button id="${index}" onclick="deleteBtn4(this.id)" type="button" class="btn btn-danger btn-sm delete-btn">Delete</button>
						</li>

		`;

	});

	let doneL = document.getElementById("done");
	if (doneObj.length != 0){
		doneL.innerHTML = data;
	}
	else{
		doneL.innerHTML = `Nothing here, Use "Add".`;
	}
}


function deleteBtn4(index){
	console.log(index);

	let textbox4 =document.getElementById("txt-box4");
	let done = localStorage.getItem("done");
	if(done == null){
		doneObj=[];
	}
	else{
		doneObj = JSON.parse(done);

	doneObj.splice(index, 1);
	localStorage.setItem("done", JSON.stringify(doneObj));
	showdone();
	}
}
