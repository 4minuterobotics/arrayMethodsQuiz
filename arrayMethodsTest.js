function generateTest() {
	const firstName = document.getElementById('firstName').value;
	const lastName = document.getElementById('lastName').value;
	const testQuestions = document.getElementById('testQuestions');

	//1. set test version based on first name
	let arrayVersion;
	if (/^[a-m]/i.test(firstName)) {
		arrayVersion = 'A'; // Array for names A-M
	} else if (/^[n-z]/i.test(firstName)) {
		arrayVersion = 'B'; // Array for names N-Z
	}

	//2. determine the questions used based on the version
	let baseQuestions;
	if (arrayVersion == 'A') {
		baseQuestions = [
			'Given the array, use the forEach method to double the value of speed for the item in the array with a name value equal to "idle".',
			"Given the array, use the some method to determine if the array has an eventKey value equal to 'a'",
			"You need the yPos value of your 'walk' sprite so you can crop to that image. Create a public variable named subY. Then, given the array, use the find method to find a sprite that has a name value equal to 'walk'. Then set 'subY' equal to the yPos value of the found sprite.",
		];
	} else if (arrayVersion == 'B') {
		baseQuestions = [
			'Given the array, use the forEach method to tripple the value of speed for the item in the array with a name value equal to "idle"  ',
			"Given the array, use the some method to determine if the array has an eventKey value equal to 'b'",
			"You need the yPos value of your 'attack2' sprite so you can crop to that image. Create a public variable named subY. Then, given the array, use the find method to find a sprite that has a name value equal to 'attack2'. Then set 'subY' equal to the yPos value of the found sprite.",
		];
	}

	//3. determine which data will be used
	let spriteAnimations;
	if (arrayVersion == 'A') {
		spriteAnimations = [
			{
				name: 'idle',
				frames: 6,
				yPos: 0,
				buttonPressed: null,
				eventKey: [null],
				mustFinish: false,
				speed: 2,
				canRepeat: true,
			},
			{
				name: 'walk',
				frames: 5,
				yPos: 20,
				buttonPressed: false,
				eventKey: ['ArrowLeft', 'ArrowRight'],
				mustFinish: false,
				speed: 4,
				canRepeat: true,
			},
			{
				name: 'attack1',
				frames: 7,
				yPos: 40,
				buttonPressed: false,
				eventKey: ['b'],
				mustFinish: true,
				speed: 6,
				canRepeat: false,
			},
		];
	} else if (arrayVersion == 'B') {
		spriteAnimations = [
			{
				name: 'idle',
				frames: 8,
				yPos: 80,
				buttonPressed: null,
				eventKey: [null],
				mustFinish: false,
				speed: 4,
				canRepeat: true,
			},
			{
				name: 'walk',
				frames: 5,
				yPos: 100,
				buttonPressed: false,
				eventKey: ['ArrowLeft', 'ArrowRight'],
				mustFinish: false,
				speed: 6,
				canRepeat: true,
			},
			{
				name: 'attack2',
				frames: 14,
				yPos: 120,
				buttonPressed: false,
				eventKey: ['a'],
				mustFinish: true,
				speed: 2,
				canRepeat: true,
			},
		];
	}
	//2. generate test questions based on version
	// const questions = generateQuestions2(arrayVersion);

	//3. Display the right test based on the version
	testQuestions.innerHTML = `
          <h2>Test for ${firstName} ${lastName}</h2>
          <h3>Instructions: 
          <br>1. Create a new JavaScript file named arrayMethodsTest.js
          <br>2. Copy all the code below including Question 1, Question 2, and Question 3.
          <br>4. Paste it into arrayMethodsTest.js
          <br>5. Complete questions 1-3 to complete the quiz
          <br>6. Submit your JavaScript file in canvas to be graded.   
          <br>   
          <br>   
          <br>   
          <br>   
          </h3>
                  ${baseQuestions.map((q, index) => `<p><strong>//Question ${index + 1}</strong>: ${q}</p>`).join('')}
  
          let spriteAnimations= ${JSON.stringify(spriteAnimations)}</p>
      `;
	testQuestions.style.display = 'block';
	// document.getElementById("fileInput").style.display = "block";
	// document.getElementById("uploadFile").style.display = "block";
}

// function generateQuestions(version) {
//   const baseQuestions = [
//     'Given the array, use the forEach method to double the value of speed for the item in the array having a name value equal to "player3".',
//     "Given the array, use the some method to determine if the value of health in any of the objects is less than 20 and store the result in a variable named hasHealthBelow20.",
//   ];
//   const arrays = {
//     A: [
//       { name: "player1", speed: 10 },
//       { name: "player2", speed: 20 },
//       { name: "player3", speed: 30 },
//     ],
//     B: [
//       { name: "player1", health: 15 },
//       { name: "player2", health: 25 },
//       { name: "player3", health: 35 },
//     ],
//   };
//   const arraysA = {
//     A: [
//       { name: "player1", speed: 10 },
//       { name: "player2", speed: 20 },
//       { name: "player3", speed: 30 },
//     ],
//     B: [
//       { name: "player1", health: 15 },
//       { name: "player2", health: 25 },
//       { name: "player3", health: 35 },
//     ],
//   };

//   return baseQuestions.map((question) => `${question} Array used: ${JSON.stringify(arrays[version])}`);
// }

function generateQuestions2(version) {
	if (version == 'A') {
		spriteAnimations = [
			{
				name: 'idle',
				frames: 6,
				yPos: 0,
				buttonPressed: null,
				eventKey: [null],
				mustFinish: false,
				speed: 2,
				canRepeat: true,
			},
			{
				name: 'walk',
				frames: 5,
				yPos: 20,
				buttonPressed: false,
				eventKey: ['ArrowLeft', 'ArrowRight'],
				mustFinish: false,
				speed: 4,
				canRepeat: true,
			},
			{
				name: 'attack1',
				frames: 7,
				yPos: 40,
				buttonPressed: false,
				eventKey: ['b'],
				mustFinish: true,
				speed: 6,
				canRepeat: false,
			},
		];
	} else if (version == 'B') {
		spriteAnimations = [
			{
				name: 'idle',
				frames: 8,
				yPos: 80,
				buttonPressed: null,
				eventKey: [null],
				mustFinish: false,
				speed: 4,
				canRepeat: true,
			},
			{
				name: 'walk',
				frames: 5,
				yPos: 100,
				buttonPressed: false,
				eventKey: ['ArrowLeft', 'ArrowRight'],
				mustFinish: false,
				speed: 6,
				canRepeat: true,
			},
			{
				name: 'attack2',
				frames: 14,
				yPos: 120,
				buttonPressed: false,
				eventKey: ['a'],
				mustFinish: true,
				speed: 2,
				canRepeat: true,
			},
		];
	}
	return baseQuestions.map((question) => `${question}`);
}

function uploadFile() {
	const fileInput = document.getElementById('fileInput');
	fileInput.click();
}

function submitTest() {
	// Simulate test submission and grading
	alert('Test submitted. Grades will be displayed shortly.');
	// Implement actual grading logic based on uploaded file
}

// document.getElementById("fileInput").addEventListener("change", (event) => {
//   const file = event.target.files[0];
//   const reader = new FileReader();
//   reader.onload = function (e) {
//     const content = e.target.result;
//     // Process and grade the content
//   };
//   reader.readAsText(file);
// });
