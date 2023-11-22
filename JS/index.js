// Capturing the value that the user inputs
let minutesInputStrVer = document.querySelector('[data-minutesInput]');
                        // NB: no point in using parseInt or parseFloat here, rather use it to at the fx
// variable for the results p tag
let convertedMinutes = document.getElementById('minutesResult');

// fx converting minutes into seconds
function convertToSecondsFx(a){
    let result = eval(a*60).toFixed(2);
    convertedMinutes.textContent =`${a} minutes is equal to ${result} seconds`;
}

// adding functionality to the convert button
let convertToSecondsBtn = document.getElementById('toSecondsBtn');
convertToSecondsBtn.addEventListener('click', () => convertToSecondsFx(minutesInputStrVer.value))


// PseudoCode:
// 1) create a fx that converts seconds into minutes
//      a) take in a value
//      b) divide it by 60
//      c) store the answer
//      d) the answer changes the p-tag's textContent
// 2) add an eventListener to the convertBtn
//      a) add eventListener and call fx w/ input.value as the argument

// Capturing the value that the user inputs
let secondsInputStrVer = document.querySelector('[data-secondsInput]');
                        // NB: no point in using parseInt or parseFloat here, rather use it to at the fx
// variable for the results p tag
let convertedSeconds = document.getElementById('secondsResult');

// fx converting seconds into minutes
function convertToMinutesFx(a){
    let result = eval(a/60).toFixed(2);
    convertedSeconds.textContent =`${a} seconds is equal to ${result} minutes`;
}

// adding functionality to the convert button
let convertToMinutesBtn = document.getElementById('toMinutesBtn');
convertToMinutesBtn.addEventListener('click', () => convertToMinutesFx(secondsInputStrVer.value))
