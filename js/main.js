(() => {
	let //puzzleBoard = document.querySelector(".puzzle-board"),
			puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),
			dropZone = document.querySelectorAll(".drop-zone");
			//audioElement = document.querySelector ("audio");

	const puzzlePaths = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

//drag event Start
	function dragStarted(event) {
		console.log('started dragging a piece');
		event.dataTransfer.setData('currentItem', event.target.id);
	}

	function allowDragOver(event) {
		event.preventDefault();
		console.log('dragged over me');
	}
	function allowDrop(event) {
		event.preventDefault();
		console.log('dropped on me');

		let droppedEl = event.dataTransfer.getData('currentItem');
		console.log("droppedEl");

		this.appendChild(document.querySelector(`#${droppedEl}`));
	}
	function turnAnchorOff(e) {
		e.preventDefault();
	}
	//drag event ended

	//This is my best attempt trying to get the music to play on dropped
	function playAudio(event) {
		debugger;
		event.preventDefault();
    let audioElement = event.dataTransfer.getData(`audio[data-key="${event.keyCode}"]`);
		if (!audioElement) { return; }
		let activeElement = document.querySelector(`img[data-key="${event.keyCode}"`);
    puzzlePieces.classList.add('playing');
    audioElement.play();
  }
//this is another attempt-I was planning on changing data-key to data track ref and trying to work with those.
	/*function playAudio (event) {
		event.preventDefault();
		console.log("audio played");
		audioElement.src = `audio/${this.dataset.trackref}.mp3`)
		audioElement.play();
	}*/

	puzzlePieces.forEach(piece => {
		piece.addEventListener("dragstart", dragStarted);
	});

	/*I'm not sure if I am suppose to listen for the drop in the dropZone OR listen for the drop of the puzzle pieces*/

	dropZone.forEach(zone => {
		zone.addEventListener("dragover", allowDragOver);
		zone.addEventListener("drop", allowDrop);
		zone.addEventListener("drop", playAudio);
	});


})();
