(() => {
	let theThumbnails = document.querySelectorAll("#buttonHolder img"),
			gameBoard = document.querySelector(".puzzle-board"),
			puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),
			dropZones = document.querySelectorAll(".drop-zone");
 			zone = document.querySelector ["drop-zone tl","drop-zone tr","drop-zone bl","drop-zone br"];

	const puzzlePaths = ["topLeft", "topRight", "bottomLeft", "bottomRight"]

	function changeImgSet() {
resetpuz()
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;

		puzzlePaths.forEach((img, index) => {
			puzzlePieces[index].src =`images/${img + this.dataset.bgref}.jpg`;
		});
	}

	function dragStarted(event) {
		console.log('started draggin a piece');
		event.dataTransfer.setData('currentItem', event.target.id);
	}

	function allowDragOver(event) {
		event.preventDefault();
		console.log('dragged over me');
	}

	function allowDrop(event) {
		event.preventDefault();

	if (this.childElementCount == 1) {return; }
		console.log('space filled');


		let droppedEl = event.dataTransfer.getData('currentItem');
				console.log(droppedEl);

				this.appendChild(document.querySelector(`#${droppedEl}`));
	}
//this function removes the puzzle pieces from the drop zone area
	function resetpuz() {
		//tests are put in to see where my function breaks during the trial and error process
		console.log('test 1');
		dropZones.forEach(zone =>{
		zone.remove('puzzlePieces');
	console.log('test 2');
})
/* trying to figure out how to reset the puzzle pieces
	document.getElementsByClassName('.puzzle-board').reset();
*/
	}


	theThumbnails.forEach(item => item.addEventListener("click", changeImgSet));


	puzzlePieces.forEach(piece => piece.addEventListener("dragstart", dragStarted));

	dropZones.forEach(zone => {
		zone.addEventListener("dragover", allowDragOver);
		zone.addEventListener("drop", allowDrop);
	});
})();
