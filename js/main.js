(() => {
	// collect the buttons at the bottom of the page
	let gameBoard = document.querySelector(".puzzle-board"),
			puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),
			dropZone = document.querySelectorAll(".drop-zone");

	const puzzlePaths = ["topLeft", "topRight", "bottomLeft", "bottomRight"];


	function changeImgSet() {
		//gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
		// debugger;
		//loop through all of the small draggable images and change their src attributes with js
		puzzlePaths.forEach((img, index) => {
			puzzlePieces[index].src = `images/${img + this.dataset.bgref}.jpg`;
		});
	}
	function dragStarted(event) {
		console.log('started dragging a piece');
		//setDate method-storing a reference to the current element
		event.dataTransfer.setData('currentItem', event.target.id);
	}
	function allowDragOver(event) {
	//turn off default browser events(adding pic to new window)
		event.preventDefault();
		console.log('dragged over me');
	}
	function allowDrop(event) {
		event.preventDefault();
		console.log('dropped on me');
		//retrieve the dragged element using the dataTransfer object
		let droppedEl = event.dataTransfer.getData('currentItem');
		console.log(droppedEl);
//appendChildis a js function that adds an elemet to another child
		this.appendChild(document.querySelector(`#${droppedEl}`));
	}
	function turnAnchorOff(e) {
		e.preventDefault();
	}

	//listen for the drag event
	puzzlePieces.forEach(piece => piece.addEventListener("dragstart", dragStarted));

	dropZone.forEach(zone => {
		zone.addEventListener("dragover", allowDragOver);
		zone.addEventListener("drop", allowDrop);
	});

})();
