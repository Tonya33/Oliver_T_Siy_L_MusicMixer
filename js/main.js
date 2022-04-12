(() => {
	let puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),
			dropZone = document.querySelectorAll(".drop-zone"),
			resetBtn = document.querySelector(".ResetButton"),
			dragArea = document.querySelector(".puzzle-pieces"),
			audioEl = document.querySelectorAll("audio");

	const puzzlePaths = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

//drag event Start
	function dragStarted(event) {
		console.log('started dragging a piece');
		event.dataTransfer.setData('currentItem', event.target.id);
		event.dataTransfer.setData('currentTrack', event.target.dataset.bgref);
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

		let targetTrack =  event.dataTransfer.getData('currentTrack');

		document.querySelector(`audio[data-bgref="${targetTrack}"]`).play();
	}

	function resetKitties() {
		dropZone.forEach(zone => {
			if (zone.children.length > 0) {
					dragArea.appendChild(zone.firstElementChild);
			}
		})
		audioEl.forEach(el => el.pause(););
	}

	puzzlePieces.forEach(piece => {
		piece.addEventListener("dragstart", dragStarted);

	});

	dropZone.forEach(zone => {
		zone.addEventListener("dragover", allowDragOver);
		zone.addEventListener("drop", allowDrop);
	});

	resetBtn.addEventListener("click", resetKitties);


})();
