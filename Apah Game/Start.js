var answers = ["Ochre", "Charcoal", "Stone", "Landscape", "Animals", "Bulls", "Cave of Lascaux", "Twisted perspective", "Silhouette", "Linear lines", "Contours", "Asymmetrical", "Used for ritual", "Symbolic meaning", "Terra Cotta", "Pigment", "Animals", "Ibex", "Susa, Iran", "Repetition", "Geometric", "Panels", "Abstract", "Funerals", "Bone", "Animal", "Canine", "Tequixquiac, Mexico", "Smooth", "Rough", "Natural", "Textured", "Symbolic meaning", "Life and death", "Funerals", "Used for ritual", "Oil on canvas", "Leader", "Traditional clothes", "Varied influences", "Foreign artist", "Naturalistic", "Detailed", "Realistic", "Muted colors", "Represents person", "Preserves spirit", "Respects ancestors", "Wood", "Cloth", "Feathers", "Depicts God", "Head", "Phallus", "Continues tradition", "Partly destroyed", "Profile", "Geometric", "Abstract", "Textured", "Represents god", "Worship", "Used for ritual", "Stone", "Basalt", "City", "Canals", "Columns", "City", "Canals", "Columns", "Allegedly haunted", "Disputed ownership", "Mythical", "Massive", "Residences", "Political center", "Administrative center", "Religious center", "Funerals", "Wood", "Cloth", "Fiber", "Female features", "Fibers", "African mask", "Continues tradition", "Represents a spirit", "Role of women in society", "Idealized", "Light", "Rigid", "Used for ritual", "Coming of age", "Honors women", "Wood", "Fiber", "Pigment", "Metal", "Female features", "Hair", "Metal", "African mask", "Role of women in society", "Continues tradition", "Idealized", "Solid", "Honors women", "Used for ritual", "Coming of age", "Wood", "Pigment", "King", "Woman", "Chair", "Role of women in society", "Royal traits", "Elonogated", "Heirarchical structure", "Idealized", "Structural support", "Symbolic meaning", "Stone", "Granite", "Conical tower", "Large wall", "Mutapa Kingdom", "Geometric", "Massive", "Conical", "Political center", "Administrative center", "Worship", "Oil on canvas", "Landscape", "Night sky", "Village", "Varied influences", "Post-impressionist", "Turbulent", "Impasto", "Swirling", "Contours", "Contrast", "Expressionist", "Textured", "Inspires others", "Life and death", "Dreams and reality", "Conveys emotions of artist", "Oil on canvas", "Narrative", "Sleeping child", "Women", "Fruit picker", "Old woman", "Animals", "Varied influences", "Foreign artist", "Post-impressionist", "Contrast", "Vibrant", "Unproportional", "Conveys emotions of artist", "Life and death", "Raise questions", "Oil on canvas", "Landscape", "Mountain", "Expansive plain", "Post-impressionist", "Modeled after real place", "New art form", "Geometric", "Panoramic", "Juxtaposition", "Depth", "Textured", "Depict nature", "Inspires others", "Oil on canvas", "Nudity", "Women", "Brothel", "African mask", "Curtains", "Varied influences", "New art form", "Fractured", "Abstract", "Geometric", "Asymmetrical", "Panels", "Lopsided", "Conveys emotions of artist", "Inspires others", "Oil on canvas", "Nun", "Woman", "Guitarist", "Letters", "Ship", "Based on fiction", "New art form", "Varied influences", "Fractured", "Abstract", "Cubist", "Geometric", "Muted colors", "Textured", "Inspires others", "Depicts story", "Porcelain saucer, cup, and spoon", "Fur", "Cup", "Saucer", "Spoon", "Covered in fur", "Surrealist movement", "Simplistic", "Textured", "Small", "Unify realities", "Self-exploration", "Granite", "Triangle structure", "Engravings", "Reflective granite", "Controversial", "Triangular", "Massive", "Reflective", "Respects ancestors", "Ink on photograph", "Woman", "Rifle", "Poem", "Gaze", "Role of women in society", "Revolution", "Religious questions", "Intense", "Calm", "Symmetrical", "Measured", "Contrast", "Expresses power", "Raise questions", "Glazed porcelain", "Animal", "Woman", "Nudity", "Panther", "Part of exhibition", "Lighthearted", "Provocative", "Based on fiction", "Pastel", "Sexual", "Tacky", "Overly glossy", "Textured", "Life-sized", "Nostalgia", "Surprise viewer", "Raise questions", "Collage", "Mylar", "Female features", "Creature", "Camouflage skin", "Patterned blanket", "Tree", "Varied influences", "Multiple meanings", "Cyborg figures", "Geometric", "Abstract", "Enchanting", "Suggestive", "Sexual", "Symbolic meaning", "Surprise viewer", "Continues tradition"];
var materials;
var font;
var ans = new Array(4);
var phase = 0;
var players = [];
var turn = 0;
var qRound = 1;
var qActive = false;
var activeQ;
var rightAns;
var score = [0,0,0,0];

var ePiece, ePieces;
var lPiece, lPieces;

// Unit 1
var bullHall, bullImg;
var ibexBeak, ibexImg;
var camelSac, camelImg;

// Unit 2
var tamWaka, tamImg;
var staffGod, staffImg;
var nanMadol, nanImg;

// Unit 3
var bunduMask, bunduImg;
var pwoMask, pwoImg;
var verPost, verImg;
var greatZim, greatImg;

// Unit 28
var starNight, starImg;
var whereGo, whereImg;
var montSaint, montImg;

// Unit 31
var lesDems, lesImg;
var thePort, theImg;

// Unit 34
var objOpp, objImg;

// Unit 38
var vietVet, vietImg;
var rebSil, rebImg;
var pinkPanth, pinkImg;
var preyMant, preyImg;

function preload() {
	font = loadFont("Resources/Fonts/AnticSlab-Regular.ttf");
	bullImg = loadImage("Resources/Images/BullHall.jpg");
	ibexImg = loadImage("Resources/Images/IbexBeak.jpg");
	camelImg = loadImage("Resources/Images/CamelSac.jpg");
	tamImg = loadImage("Resources/Images/TamWaka.jpg");
	staffImg = loadImage("Resources/Images/StaffGod.jpg");
	nanImg = loadImage("Resources/Images/NanMadol.jpg");
	bunduImg = loadImage("Resources/Images/BunduMask.png");
	pwoImg = loadImage("Resources/Images/PwoMask.png");
	verImg = loadImage("Resources/Images/VerPost.jpg");
	greatImg = loadImage("Resources/Images/GreatZim.jpg");
	starImg = loadImage("Resources/Images/StarNight.jpg");
	whereImg = loadImage("Resources/Images/WhereGo.png");
	montImg = loadImage("Resources/Images/MontSaint.jpg");
	lesImg = loadImage("Resources/Images/LesDems.png");
	theImg = loadImage("Resources/Images/ThePort.png");
	objImg = loadImage("Resources/Images/ObjOpp.png");
	vietImg = loadImage("Resources/Images/VietVet.png");
	rebImg = loadImage("Resources/Images/RebSil.png");
	pinkImg = loadImage("Resources/Images/PinkPanth.png");
	preyImg = loadImage("Resources/Images/PreyMant.jpg");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(30);
	textFont(font);
	textAlign(CENTER);
	imageMode(CENTER);

	// Great Hall of the Bulls
	materials = ["Ochre", "Charcoal", "Stone"];
	bullHall = new Piece(1, "Great Hall of the Bulls Cave", "Unknown", "Paleolithic", materials);
	bullHall.SetImage(bullImg);
	bullHall.SetContent(["Landscape", "Animals", "Bulls"]);
	bullHall.SetContext(["Cave of Lascaux"]);
	bullHall.SetForm(["Twisted perspective", "Silhouette", "Linear lines", "Contours", "Asymmetrical"]);
	bullHall.SetFunction(["Used for ritual", "Symbolic meaning", "Depict nature"]);

	// Beaker with Ibex Motif
	materials = ["Terra Cotta", "Pigment"];
	ibexBeak = new Piece(1, "Beaker with the Ibex Motif", "Unknown", "Neolithic", materials);
	ibexBeak.SetImage(ibexImg);
	ibexBeak.SetContent(["Animals", "Ibex"]);
	ibexBeak.SetContext(["Susa, Iran"]);
	ibexBeak.SetForm(["Repetition", "Geometric", "Panels", "Abstract"]);
	ibexBeak.SetFunction(["Funerals", "Depict nature"]);

	// Camelid Sacrum
	materials = ["Bone"];
	camelSac = new Piece(1, "Camelid Sacrum", "Unknown", "Mesolithic", materials);
	camelSac.SetImage(camelImg);
	camelSac.SetContent(["Animal", "Canine"]);
	camelSac.SetContext(["Tequixquiac, Mexico"])
	camelSac.SetForm(["Smooth", "Rough", "Natural", "Textured"]);
	camelSac.SetFunction(["Symbolic meaning", "Represents life and death", "Funerals", "Used for ritual"]);

	// Tamati Waka Nene
	materials = ["Oil on canvas"];
	tamWaka = new Piece(2, "Tamati Waka Nene", "Gottfried Lindauer", "1890 CE", materials);
	tamWaka.SetImage(tamImg);
	tamWaka.SetContent(["Leader", "Traditional clothes"]);
	tamWaka.SetContext(["Varied influences", "Foreign artist"]);
	tamWaka.SetForm(["Naturalistic", "Detailed", "Realistic", "Muted colors"]);
	tamWaka.SetFunction(["Represents person", "Preserves spirit", "Respects ancestors"]);

	// Staff God
	materials = ["Wood", "Cloth", "Feathers"];
	staffGod = new Piece(2, "Staff God", "Unknown", "18th-19th century CE", materials);
	staffGod.SetImage(staffImg);
	staffGod.SetContent(["Depicts God", "Head", "Phallus"]);
	staffGod.SetContext(["Continues tradition", "Partly destroyed"]);
	staffGod.SetForm(["Profile", "Geometric", "Abstract", "Textured"]);
	staffGod.SetFunction(["Represents god", "Worship", "Used for ritual"]);

	// Nan Madol
	materials = ["Stone", "Basalt"];
	nanMadol = new Piece(2, "Nan Madol", "Saudeleur Dynasty", "C. 700-1600 CE", materials);
	nanMadol.SetImage(nanImg);
	nanMadol.SetContent(["City", "Canals", "Columns"]);
	nanMadol.SetContext(["Allegedly haunted", "Disputed ownership", "Mythical"]);
	nanMadol.SetForm(["Massive"]);
	nanMadol.SetFunction(["Residences", "Political center", "Administrative center", "Religious center", "Funerals"]);

	// Bundu Mask
	materials = ["Wood", "Cloth", "Fiber"];
	bunduMask = new Piece(3, "Bundu Mask", "Sande Society", "19th-20th century CE", materials);
	bunduMask.SetImage(bunduImg);
	bunduMask.SetContent(["Female features", "Fibers", "African mask"]);
	bunduMask.SetContext(["Continues tradition", "Represents a spirit", "Role of women in society"]);
	bunduMask.SetForm(["Idealized", "Light", "Rigid"]);
	bunduMask.SetFunction(["Used for ritual", "Coming of age", "Honors women"]);

	// Pwo Mask
	materials = ["Wood", "Fiber", "Pigment", "Metal"];
	pwoMask = new Piece(3, "Pwo Mask", "Chokwe People", "Early 20th century CE", materials);
	pwoMask.SetImage(pwoImg);
	pwoMask.SetContent(["Female features", "Hair", "Metal", "African mask"]);
	pwoMask.SetContext(["Role of women in society", "Continues tradition"]);
	pwoMask.SetForm(["Idealized", "Solid"]);
	pwoMask.SetFunction(["Honors women", "Used for ritual", "Coming of age"]);

	// Veranda Post
	materials = ["Wood", "Pigment"];
	verPost = new Piece(3, "Veranda Post", "Olowe of Ise", "C. 1910-1914 CE", materials);
	verPost.SetImage(verImg);
	verPost.SetContent(["King", "Woman", "Chair"]);
	verPost.SetContext(["Role of women in society", "Royal traits"]);
	verPost.SetForm(["Elonogated", "Heirarchical structure", "Idealized"]);
	verPost.SetFunction(["Structural support", "Symbolic meaning"]);

	// Great Zimbabwe
	materials = ["Stone", "Granite"];
	greatZim = new Piece(3, "The Great Zimbabwe (Conical Tower and Wall)", "Shona People", "11th-15th century CE", materials);
	greatZim.SetImage(greatImg);
	greatZim.SetContent(["Conical tower", "Large wall"]);
	greatZim.SetContext(["Mutapa Kingdom"]);
	greatZim.SetForm(["Geometric", "Massive", "Conical"]);
	greatZim.SetFunction(["Political center", "Administrative center", "Worship"]);

	// Starry Night
	materials = ["Oil on canvas"];
	starNight = new Piece(28, "The Starry Night", "Vincent Van Gogh", "1889 CE", materials);
	starNight.SetImage(starImg);
	starNight.SetContent(["Landscape", "Night sky", "Village"]);
	starNight.SetContext(["Varied influences", "Post-impressionist"]);
	starNight.SetForm(["Turbulent", "Impasto", "Swirling", "Contours", "Contrast", "Expressionist", "Textured"]);
	starNight.SetFunction(["Inspires others", "Represents life and death", "Represents dreams and reality", "Conveys emotions of artist"]);

	// Where do we come from...
	materials = ["Oil on canvas"];
	whereGo = new Piece(28, "Where do we come from? What are we? Where are we going?", "Paul Gauguin", "1897-1898 CE", materials);
	whereGo.SetImage(whereImg);
	whereGo.SetContent(["Narrative", "Sleeping child", "Women", "Fruit picker", "Old woman", "Animals"]);
	whereGo.SetContext(["Varied influences", "Foreign artist", "Post-impressionist"]);
	whereGo.SetForm(["Contrast", "Vibrant", "Unproportional"]);
	whereGo.SetFunction(["Conveys emotions of artist", "Life and death", "Raise questions"]);

	// Mont Sainte-Victoire
	materials = ["Oil on canvas"];
	montSaint = new Piece(28, "Mont Sainte-Victoire", "Paul Cezanne", "1902-1904 CE", materials);
	montSaint.SetImage(montImg);
	montSaint.SetContent(["Landscape", "Mountain", "Expansive plain"]);
	montSaint.SetContext(["Post-impressionist", "Modeled after real place", "New art form"]);
	montSaint.SetForm(["Geometric", "Panoramic", "Juxtaposition", "Depth", "Textured"]);
	montSaint.SetFunction(["Depict nature", "Inspires others"]);

	// Les Demoiselles d'Avignon
	materials = ["Oil on canvas"];
	lesDems = new Piece(31, "Les Demoiselles d'Avignon", "Pablo Picasso", "1907 CE", materials);
	lesDems.SetImage(lesImg);
	lesDems.SetContent(["Nudity", "Women", "Brothel", "African mask", "Curtains"]);
	lesDems.SetContext(["Varied influences", "New art form"]);
	lesDems.SetForm(["Fractured", "Abstract", "Geometric", "Asymmetrical", "Panels", "Lopsided"]);
	lesDems.SetFunction(["Conveys emotions of artist", "Inspires others"]);

	// The Portuguese
	materials = ["Oil on canvas"];
	thePort = new Piece(31, "The Portuguese", "Georges Braque", "1911 CE", materials);
	thePort.SetImage(theImg);
	thePort.SetContent("Nun", "Woman", "Guitarist", "Letters", "Ship");
	thePort.SetContext("Based on fiction", "New art form", "Varied influences");
	thePort.SetForm(["Fractured", "Abstract", "Cubist", "Geometric", "Muted colors", "Textured"]);
	thePort.SetFunction(["Inspires others", "Depicts story"]);

	// Object
	materials = ["Porcelain saucer, cup, and spoon", "Fur"];
	objOpp = new Piece(34, "The Object", "Meret Oppenheim", "1936 CE", materials);
	objOpp.SetImage(objImg);
	objOpp.SetContent(["Cup", "Saucer", "Spoon", "Covered in fur"]);
	objOpp.SetContext(["Surrealist movement"]);
	objOpp.SetForm(["Simplistic", "Textured", "Small"]);
	objOpp.SetFunction(["Unify realities", "Self-exploration"]);

	// Vietnam Veterans Memorial
	materials = ["Granite"];
	vietVet = new Piece(38, "Vietnam Veterans Memorial", "Maya Lin", "1982 CE", materials);
	vietVet.SetImage(vietImg);
	vietVet.SetContent(["Triangle structure", "Engravings", "Reflective granite"]);
	vietVet.SetContext(["Controversial"]);
	vietVet.SetForm(["Triangular", "Massive", "Reflective"]);
	vietVet.SetFunction(["Respects ancestors"]);

	// Rebellious Silence
	materials = ["Ink on photograph"];
	rebSil = new Piece(38, "Rebellious Silence", "Shirin Neshat", "1994 CE", materials);
	rebSil.SetImage(rebImg);
	rebSil.SetContent(["Woman", "Rifle", "Poem", "Gaze"]);
	rebSil.SetContext(["Role of women in society", "Revolution", "Religious questions"]);
	rebSil.SetForm(["Intense", "Calm", "Symmetrical", "Measured", "Contrast"]);
	rebSil.SetFunction(["Expresses power", "Raise questions"]);

	// Pink Panther
	materials = ["Glazed porcelain"];
	pinkPanth = new Piece(38, "Pink Panther", "Jeff Koons", "1988 CE", materials);
	pinkPanth.SetImage(pinkImg);
	pinkPanth.SetContent(["Animal", "Woman", "Nudity", "Panther"]);
	pinkPanth.SetContext(["Part of exhibition", "Lighthearted", "Provocative", "Based on fiction"]);
	pinkPanth.SetForm(["Pastel", "Sexual", "Tacky", "Overly glossy", "Textured", "Life-sized"]);
	pinkPanth.SetFunction(["Nostalgia", "Surprise viewer", "Raise questions"]);

	// Preying Mantra
	materials = ["Collage", "Mylar"];
	preyMant = new Piece(38, "Preying Mantra", "Wangechi Mutu", "2006 CE", materials);
	preyMant.SetImage(preyImg);
	preyMant.SetContent(["Female features", "Creature", "Camouflage skin", "Patterned blanket", "Tree"]);
	preyMant.SetContext(["Varied influences", "Multiple meanings", "Cyborg figures"]);
	preyMant.SetForm(["Geometric", "Abstract", "Enchanting", "Suggestive", "Sexual"]);
	preyMant.SetFunction(["Symbolic meaning", "Surprise viewer", "Continues tradition"]);

	ePieces = [bullHall, ibexBeak, camelSac, tamWaka, staffGod, nanMadol, bunduMask, pwoMask, verPost, greatZim];
	lPieces = [starNight, whereGo, montSaint, lesDems, thePort, objOpp, vietVet, rebSil, pinkPanth, preyMant];
}

function draw() {
	clear();
	switch (phase) {
		case 0:
			text("How many players are there? (1-4)", width/2, height/2);
			break;
		case 1:
			text("Question "+qRound, width/15, height-50);
			players.forEach(function(element, index) {
				text("Player "+element+": "+score[index], element*width/5, 50);
			});
			if (qActive === false) {
				ePiece = random(ePieces);
				lPiece = random(lPieces);
				activeQ = GenQuestion(ePiece, lPiece);
				qActive = true;
			} else {
				image(ePiece.image, width/3, height/2.7, width/4.5, height/2.6);
				image(lPiece.image, 2*width/3, height/2.7, width/4.5, height/2.6);
				text(activeQ, width/2, height/1.4);
				text("1. "+ans[0], width/3, 3.25*height/4);
				text("2. "+ans[1], width/3, 3.6*height/4);
				text("3. "+ans[2], 2*width/3, 3.25*height/4);
				text("4. "+ans[3], 2*width/3, 3.6*height/4);
			}
			break;
		default:
			break;
	}
}

function keyTyped() {
	if(phase === 0) {
		if(int(key) > 0 && int(key) < 5) {
			for(let i=1; i < int(key)+1; i++) {
				players.push(i);
			}
			phase++;
			clear();
		} else {
			text("Please input a correct choice.", width/2, height/1.3);
		}
	} else if (phase === 1) {
		if(int(key) > 0 && int(key) < 5) {
			if (ans[int(key)-1] === rightAns) score[turn]++;
			if (turn < players.length-1) turn++;
			else turn = 0;
			qActive = false;
			qRound++;
		} else {
			text("Please input a correct choice.", width/2, height/1.3);
		}
	}
}

function GenQuestion(piece1, piece2) {
	let i = 0;
	var qType, symDif, questionArr;
	do {
		qType = random(["content", "context", "form", "function", "materials"]);
		simDif = random(["similar", "different"]);

		questionArr = ["What part of the", qType, "is", simDif, "between these pieces?"];

		i++;
	} while (GenAnswers(piece1, piece2, qType, simDif) === false && i < 10);

	if (i === 10) return false;
	else return join(questionArr, " ");
}

function GenAnswers(piece1, piece2, qType, simDif) {
	let corAns = [false];
	let incorAns = [];
	if (simDif === "similar") {
		switch(qType) {
			case "content":
				piece1.content.forEach(function(element) {
					if (piece2.content.includes(element)) {
						corAns.push(element);
					} else incorAns.push(element);
				});
				break;
			case "context":
				piece1.context.forEach(function(element) {
					if (piece2.context.includes(element)) {
						corAns.push(element);
					} else incorAns.push(element);
				});
				break;
			case "form":
				piece1.form.forEach(function(element) {
					if (piece2.form.includes(element)) {
						corAns.push(element);
					} else incorAns.push(element);
				});
				break;
			case "function":
				piece1.function.forEach(function(element) {
					if (piece2.function.includes(element)) {
						corAns.push(element);
					} else incorAns.push(element);
				});
				break;
			case "materials":
				piece1.materials.forEach(function(element) {
					if (piece2.materials.includes(element)) {
						corAns.push(element);
					} else incorAns.push(element);
				});
				break;
			default:
				break;
		}
	} else if (simDif === "different") {
		switch(qType) {
			case "content":
				piece1.content.forEach(function(element) {
					if (!piece2.content.includes(element)) {
						corAns.push(element);
					}
				});
				piece2.content.forEach(function(element) {
					if (!piece1.content.includes(element)) {
						corAns.push(element);
					}
				});
				break;
			case "context":
				piece1.context.forEach(function(element) {
					if (!piece2.context.includes(element)) {
						corAns.push(element);
					}
				});
				piece2.context.forEach(function(element) {
					if (!piece1.context.includes(element)) {
						corAns.push(element);
					}
				});
				break;
			case "form":
				piece1.form.forEach(function(element) {
					if (!piece2.form.includes(element)) {
						corAns.push(element);
					}
				});
				piece2.form.forEach(function(element) {
					if (!piece1.form.includes(element)) {
						corAns.push(element);
					}
				});
				break;
			case "function":
				piece1.function.forEach(function(element) {
					if (!piece2.function.includes(element)) {
						corAns.push(element);
					}
				});
				piece2.function.forEach(function(element) {
					if (!piece1.function.includes(element)) {
						corAns.push(element);
					}
				});
				break;
			case "materials":
				piece1.materials.forEach(function(element) {
					if (!piece2.materials.includes(element)) {
						corAns.push(element);
					}
				});
				break;
			case "materials":
				piece2.materials.forEach(function(element) {
					if (!piece1.materials.includes(element)) {
						corAns.push(element);
					}
				});
				break;
			default:
				break;
		}
	}

	if (corAns.length > 1) {
		for (let i=0; i<4; i++) {
			ans[i] = random(answers);
		}
		rightAns = corAns[Math.floor(random(1, corAns.length-0.1))];
		ans[Math.floor(random(3.9))] = rightAns;
	} else return false;
}

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
		this.function = funct;
	}
}
