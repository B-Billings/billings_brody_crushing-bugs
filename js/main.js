(() => {
	let theThumbnails = document.querySelectorAll("#buttonHolder img"),
			gameBoard = document.querySelector(".puzzle-board"),
			puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),
			dropZones = document.querySelectorAll(".drop-zone");

	const puzzlePaths = ["topLeft", "topRight", "bottomLeft", "bottomRight"]

	function changeImgSet() {

		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;

		puzzlePaths.forEach((img, index) => {
			puzzlePieces[index].src = `images/${img + this.dataset.bgref}.jpg)`;
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
		if (this.childElementCount > 0) {return; }
		console.log('dropped');

		let droppedEl = event.dataTransfer.getData('currentItem');
				console.log(droppedEl);

				this.appendChild(document.querySelector(`#${droppedEl}`));
	}


	theThumbnails.forEach(item => item.addEventListener("click", changeImgSet));


	puzzlePieces.forEach(piece => piece.addEventListener("dragstart", dragStarted));

	dropZones.forEach(zone => {
		zone.addEventListener("dragover", allowDragOver);
		zone.addEventListener("drop", allowDrop);
	});
})();