const firebaseURL = "https://smarthydroponicsystem-47b76-default-rtdb.asia-southeast1.firebasedatabase.app";

function getData() {
  fetch(firebaseURL + "/sensors.json")
    .then(res => res.json())
    .then(data => {
      document.getElementById("temp").innerText = data.temperature;
      document.getElementById("hum").innerText = data.humidity;
      document.getElementById("PPM").innerText = data.ppm;
      document.getElementById("PH").innerText = data.ph;
    });

  fetch(firebaseURL + "/irrigation.json")
    .then(res => res.json())
    .then(data => {
      document.getElementById("pump").innerText = data.pump;
    });
}

function pumpOn() {
  fetch(firebaseURL + "/irrigation/pump.json", {
    method: "PUT",
    body: JSON.stringify("ON")
  });
}

function pumpOff() {
  fetch(firebaseURL + "/irrigation/pump.json", {
    method: "PUT",
    body: JSON.stringify("OFF")
  });
}

// refresh every 2 seconds
setInterval(getData, 2000);
