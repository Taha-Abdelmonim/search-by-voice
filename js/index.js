let input = document.querySelector(".inputBx input"),
  btn = document.querySelector(".inputBx .icon"),
  icon = document.querySelector(".inputBx .icon i"),
  SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

if (SpeechRecognition) {
  // console.log("supported");
  let recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  // console.log(recognition);
  btn.addEventListener("click", () => {
    if (icon.classList.contains("fa-microphone")) {
      recognition.start();
    } else {
      recognition.stop();
    }
  });
  recognition.addEventListener("start", () => {
    icon.classList.replace("fa-microphone", "fa-microphone-slash");
  });
  recognition.addEventListener("end", () => {
    icon.classList.replace("fa-microphone-slash", "fa-microphone");
  });
  recognition.addEventListener("result", (event) => {
    // console.log(event);
    let transcript = event.results[0][0].transcript;
    input.value = transcript;
    setTimeout(() => {
      routing(transcript);
    }, 3000);
  });
} else {
  console.log("Not supported");
}
function routing(searchValue) {
  window.location.href = `https://www.google.com/search?q=${searchValue}`;
}   
