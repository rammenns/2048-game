const box = document.getElementById("box");
const gamover = document.getElementById("gamover");
gamover.addEventListener("click", newgame);

newgame();
document.addEventListener("keydown", function(event){
	let moved = false;
	switch (event.key){
		case "ArrowUp":
			moved = mvu();
			break;
			
		case "ArrowDown":
			moved = mvd();
			break;
			
		case "ArrowLeft":
			moved = mvl();
			break;
			
		case "ArrowRight":
			moved = mvr();
			break;
	}
	if (moved)
		newnum();
});

function newgame(){
	for (let i=0; i<4 ;i++)
		for (let j=0 ; j<4; j++){
			box.rows[i].cells[j].textContent = "";
			box.rows[i].cells[j].style.backgroundColor = "white";
		}
	let x = 0;
	while(x < 2)
		for (let i=0; i<4 ;i++){
			if (x === 2) break;
			for (let j=0 ; j<4; j++){
				if (Math.random() < 1 / 8){
					if (Math.random() < 0.9) {box.rows[i].cells[j].textContent = 2;box.rows[i].cells[j].style.backgroundColor = "#eee4da";}
					else {box.rows[i].cells[j].textContent = 4;box.rows[i].cells[j].style.backgroundColor = "#ede0c8";}
					x++;
				}
				if (x === 2) break;
			}
		}
}

function mvu(){
	let m = false;
	for (let j = 0; j < 4; j++)
		for (let i = 0; i < 3; i++)
			for (let z = i+1; z < 4; z++)
				if (box.rows[i].cells[j].textContent == ""){
					if (box.rows[z].cells[j].textContent != ""){
						box.rows[i].cells[j].textContent = box.rows[z].cells[j].textContent;
						box.rows[z].cells[j].textContent = "";
						z--; m = true;
					}
				}
				else if (box.rows[z].cells[j].textContent != ""){
					if (box.rows[i].cells[j].textContent == box.rows[z].cells[j].textContent){
						box.rows[i].cells[j].textContent = Number(box.rows[i].cells[j].textContent) * 2;
						box.rows[z].cells[j].textContent = "";
						m = true; break;
					}
					else break;
				}
	return m;
}
function mvd(){
	let m = false;
	for (let j = 0; j < 4; j++)
		for (let i = 3; i > 0; i--)
			for (let z = i-1; z >= 0; z--)
				if (box.rows[i].cells[j].textContent == ""){
					if (box.rows[z].cells[j].textContent != ""){
						box.rows[i].cells[j].textContent = box.rows[z].cells[j].textContent;
						box.rows[z].cells[j].textContent = "";
						z++; m = true;
					}
				}
				else if (box.rows[z].cells[j].textContent != ""){
					if (box.rows[i].cells[j].textContent == box.rows[z].cells[j].textContent){
						box.rows[i].cells[j].textContent = Number(box.rows[i].cells[j].textContent) * 2;
						box.rows[z].cells[j].textContent = "";
						m = true; break;
					}
					else break;
				}
	return m;
}
function mvl(){
	let m = false;
	for (let i = 0; i < 4; i++)
		for (let j = 0; j < 3; j++)
			for (let z = j+1; z < 4; z++)
				if (box.rows[i].cells[j].textContent == ""){
					if (box.rows[i].cells[z].textContent != ""){
						box.rows[i].cells[j].textContent = box.rows[i].cells[z].textContent;
						box.rows[i].cells[z].textContent = "";
						z--; m = true;
					}
				}
				else if (box.rows[i].cells[z].textContent != ""){
					if (box.rows[i].cells[j].textContent == box.rows[i].cells[z].textContent){
						box.rows[i].cells[j].textContent = Number(box.rows[i].cells[j].textContent) * 2;
						box.rows[i].cells[z].textContent = "";
						m = true; break;
					}
					else break;
				}
	return m;
}
function mvr(){
	let m = false;
	for (let i = 0; i < 4; i++)
		for (let j = 3; j > 0; j--)
			for (let z = j-1; z >= 0; z--)
				if (box.rows[i].cells[j].textContent == ""){
					if (box.rows[i].cells[z].textContent != ""){
						box.rows[i].cells[j].textContent = box.rows[i].cells[z].textContent;
						box.rows[i].cells[z].textContent = "";
						z++; m = true;
					}
				}
				else if (box.rows[i].cells[z].textContent != ""){
					if (box.rows[i].cells[j].textContent == box.rows[i].cells[z].textContent){
						box.rows[i].cells[j].textContent = Number(box.rows[i].cells[j].textContent) * 2;
						box.rows[i].cells[z].textContent = "";
						m = true; break;
					}
					else break;
				}
	return m;
}

function newnum(moved){
	let empt = 0;
	for(let i = 0; i < 4; i++)
		for(let j = 0; j < 4; j++){
			if(box.rows[i].cells[j].textContent == "") empt++;
			switch(box.rows[i].cells[j].textContent){
				case "":
					box.rows[i].cells[j].style.backgroundColor = "white";
					break;
				case "2":
					box.rows[i].cells[j].style.backgroundColor = "#eee4da";
					break;
				case "4":
					box.rows[i].cells[j].style.backgroundColor = "#ede0c8";
					break;
				case "8":
					box.rows[i].cells[j].style.backgroundColor = "#f2b179";
					break;
				case "16":
					box.rows[i].cells[j].style.backgroundColor = "#f59563";
					break;
				case "32":
					box.rows[i].cells[j].style.backgroundColor = "#f67c5f";
					break;
				case "64":
					box.rows[i].cells[j].style.backgroundColor = "#f65e3b";
					break;
				case "128":
					box.rows[i].cells[j].style.backgroundColor = "#edcf72";
					break;
				case "256":
					box.rows[i].cells[j].style.backgroundColor = "#edcc61";
					break;
				case "512":
					box.rows[i].cells[j].style.backgroundColor = "#edc850";
					break;
				case "1024":
					box.rows[i].cells[j].style.backgroundColor = "#edc53f";
					break;
				case "2048":
					box.rows[i].cells[j].style.backgroundColor = "#eec22e";
					break;
				default:
					box.rows[i].cells[j].style.backgroundColor = "#3c3a32";
					break;
			}
		}
	if(empt > 0){
		let stop = false;
		while(true){
			for(let i = 0; i < 4; i++){
				for(let j = 0; j < 4; j++){
					if(box.rows[i].cells[j].textContent == "" && Math.random() < 1/empt)
						if(Math.random() < 0.9){box.rows[i].cells[j].textContent = 2;box.rows[i].cells[j].style.backgroundColor = "#eee4da";empt--;stop=true;}
						else{box.rows[i].cells[j].textContent = 4;box.rows[i].cells[j].style.backgroundColor = "#ede0c8";empt--;stop=true;}
					if (stop) break;
				}
				if (stop) break;
			}
		if (stop) break;
		}
	}
	/*if (empt == 0){
		let stopping = true;
		for(let i = 0; i < 4; i++)
			for(let j = 0; j < 4; j++){
				if(i > 0 && box.rows[i].cells[j].textContent == box.rows[i-1].cells[j].textContent)stopping = false;
				if(i < 3 && box.rows[i].cells[j].textContent == box.rows[i+1].cells[j].textContent)stopping = false;
				if(j > 0 && box.rows[i].cells[j].textContent == box.rows[i].cells[j-1].textContent)stopping = false;
				if(j < 3 && box.rows[i].cells[j].textContent == box.rows[i].cells[j+1].textContent)stopping = false;
			}
	}*/
}