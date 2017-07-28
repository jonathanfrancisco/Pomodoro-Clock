

// UNCOMMENT THESE CODE TO USE SPEECH RECOGNITION
// say "work time *minutes*" to set work time, "break time *minutes*" for break
// say "start timer" to start
// say stop timer" to stop


// var setWorkTime = function(min) {
	
// 		workTime.textContent = min;
// 		updateDuration(min+" :00");
// 		console.log("Set!");
// }

// var setBreakTime = function(min) {
// 	breakTime.textContent = min;
// 	console.log("Set!");
// }

// if(annyang) {

// 	console.log("Annyang is running");

// 	var commands = { 
// 		// saying 'work' translates to 'what' that's why.
// 		// recognition is not 100% guaranteed.
// 		'what time :minutes minute*s': setWorkTime,
// 		'break time :minutes minute*s': setBreakTime,
// 		'start timer': function() {
// 			start = setInterval(function() {
// 				startPomodoro();
// 			},1000);
// 			minutes = workTime.textContent;
// 			actionButton.textContent = 'Reset Timer';
// 		},
// 		'reset timer': function() {
// 			resetPomodoro();
// 			actionButton.textContent = 'Start Timer';

// 		}
// 	};

// 	annyang.addCommands(commands);
// 	annyang.start();

// }

// else {
// 	console.log("Error has occured");
// }

