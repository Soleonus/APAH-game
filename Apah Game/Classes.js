class Piece {
	constructor(unit, title, artist, year, materials) {
		this.unit = unit;
		this.title = title;
		this.artist = artist;
		this.year = year;
		this.materials = materials;
	}

	SetImage(image) {
		this.image = image;
	}

	SetContent(content) {
		this.content = content;
	}

	SetContext(context) {
		this.context = context;
	}

	SetForm(form) {
		this.form = form;
	}

	SetFunction(funct) {
		this.funct = funct
	}

	DrawImage(x,y) {
		image(this.image, x, y);
	}
}
