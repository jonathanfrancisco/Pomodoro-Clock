
	
	//// GLOBAL VARIABLES ////
	var pomodoroStatus = document.querySelector('#status');

	var timeDuration = document.querySelector('#time');
	var workTime = document.querySelector('#workTime');
	var breakTime = document.querySelector('#breakTime');

	var timeSettings = document.querySelector('.time-settings');
	var timeSettingsButtons = timeSettings.querySelectorAll('button');
	var actionButton = document.querySelector('#action-button');

	var minutes = parseInt(workTime.textContent);
	var seconds = 0;
	var start; // for clearing interval purposes. - clearInterval(start);

	/////////////////////////// LOGIC STUFFS -- FUNCTIONS //////////////////////////

	// Start Pomodoro
	function startPomodoro() {

		if(seconds == 0 && minutes > 0) {
			minutes--;
			seconds = 60;
		}

		// change status
		else if(seconds == 0 && minutes == 0) {

			// change status to break and change time duration
			if(pomodoroStatus.textContent === 'Be Productive!') {
				minutes = parseInt(breakTime.textContent);
				pomodoroStatus.textContent = 'Take a break!';
			}
				// change status to work and change time duration
			else if(pomodoroStatus.textContent === 'Take a break!') {
				minutes = parseInt(workTime.textContent);
				pomodoroStatus.textContent = 'Be Productive!';
			}
				seconds = 1;
		}

		seconds--;

		// outputs :0x
		if(seconds < 10) {
			updateDuration(minutes+": 0"+seconds);
		}

		// outputs :xx
		else {
			updateDuration(minutes+": "+seconds);
		}

	}

	// update Pomodoro Duration
	function updateDuration(duration) {
		timeDuration.textContent = duration;
	}

	// Reset Pomodoro
	function resetPomodoro() {
		clearInterval(start);
		timeDuration.textContent = workTime.textContent+" :00";
		minutes = workTime.textContent;
		seconds = 0;
		pomodoroStatus.textContent = 'Be Productive!';
	}


/////////////// EVENT HANDLERS ///////////////////////////////////


	actionButton.addEventListener('click', function() {

		if(this.textContent === 'Start Timer') {
			 start = setInterval(function() {
				startPomodoro();
			},1000)

			 minutes = workTime.textContent;
			 this.textContent = 'Reset Timer'
		}

		else if(this.textContent === 'Reset Timer') {
			resetPomodoro();
			this.textContent = 'Start Timer';
		}

	});

	timeSettings.addEventListener('click', function(event) {

		var button = event.target;

		if(button.className === 'workTime') {

			var currentWorkTime = parseInt(workTime.textContent);

			if(button.textContent === '+' && currentWorkTime < 60) {
				currentWorkTime++;
			}

			else if(button.textContent === '-' && currentWorkTime > 1 ){
				currentWorkTime--;
			}

			updateDuration(currentWorkTime+" :00");
			workTime.textContent = currentWorkTime;
			minutes = curentWorkTime;

		}

		else if(button.className === 'breakTime') {

			var currentBreakTime = parseInt(breakTime.textContent);

			if(button.textContent === '+' && currentBreakTime < 60) {
				currentBreakTime++;
			}

			else if(button.textContent === '-' && currentBreakTime > 1 ){
				currentBreakTime--;
			}

			breakTime.textContent = currentBreakTime;
	
		}

	});