let voices = [];
let audioContext;
let recorder;
let customVoiceBlob;
const apiKey = "API_KEY"; // Google Cloud API anahtarınızı buraya ekleyin

function populateVoiceList() {
  voices = window.speechSynthesis.getVoices();
  const voiceSelect = document.getElementById("voice-select");
  voiceSelect.innerHTML = "";
  voices.forEach((voice, index) => {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;
    option.value = index;
    voiceSelect.appendChild(option);
  });

  // Google Cloud TTS seçeneğini ekleyin
  const googleOption = document.createElement("option");
  googleOption.textContent = "Google Cloud TTS";
  googleOption.value = "google";
  voiceSelect.appendChild(googleOption);
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

document.getElementById("speak-button").addEventListener("click", function () {
  const text = document.getElementById("text-input").value;
  const voiceIndex = document.getElementById("voice-select").value;
  const rate = document.getElementById("rate").value;

  if (voiceIndex === "google") {
    // Google Cloud TTS kullanarak metni oynatın
    fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: { text: text },
          voice: { languageCode: "tr-TR", name: "tr-TR-Wavenet-A" },
          audioConfig: { audioEncoding: "MP3", speakingRate: rate },
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const audio = new Audio("data:audio/mp3;base64," + data.audioContent);
        audio.play();
      })
      .catch((error) => console.error("Error:", error));
  } else {
    const speech = new SpeechSynthesisUtterance(text);
    speech.voice = voices[voiceIndex];
    speech.rate = rate;
    speech.lang = "tr-TR";
    window.speechSynthesis.speak(speech);
  }
});

document.getElementById("record-button").addEventListener("click", function () {
  const text = document.getElementById("text-input").value;
  const voiceIndex = document.getElementById("voice-select").value;
  const rate = document.getElementById("rate").value;
  const speech = new SpeechSynthesisUtterance(text);
  speech.voice = voices[voiceIndex];
  speech.rate = rate;
  speech.lang = "tr-TR";

  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const mediaStreamDestination = audioContext.createMediaStreamDestination();
  const mediaRecorder = new MediaRecorder(mediaStreamDestination.stream);

  mediaRecorder.ondataavailable = function (event) {
    const blob = new Blob([event.data], { type: "audio/mp3" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "metin.mp3";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const source = audioContext.createMediaElementSource(new Audio());
  source.connect(mediaStreamDestination);
  mediaRecorder.start();

  window.speechSynthesis.speak(speech);

  speech.onend = function () {
    mediaRecorder.stop();
  };
});
