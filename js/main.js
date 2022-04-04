(() => {
	let puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),
			dropZone = document.querySelectorAll(".drop-zone");
			audioEl = document.querySelectorAll(".audio *");

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

	function playAudio(e) {
		debugger;
		event.preventDefault();
		let currentTrack = `audio/${this.dataset.trackref}.mp3`;
    audioEL.src = currentTrack;
    playTrack();
	}
	function playTrack() {
		audioEL.play(); }

	puzzlePieces.forEach(piece => {
		piece.addEventListener("dragstart", dragStarted);
		piece.addEventListener("ondragend", playAudio);

	});

	dropZone.forEach(zone => {
		zone.addEventListener("dragover", allowDragOver);
		zone.addEventListener("drop", allowDrop);
	});


})();
