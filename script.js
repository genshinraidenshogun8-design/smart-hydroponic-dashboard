const firebaseURL = "https://smarthydroponicsystem-47b76-default-rtdb.asia-southeast1.firebasedatabase.app/";

function getData() {
  fetch(firebaseURL + "/sensors.json")
    .then(res => res.json())
    .then(data => {
      document.getElementById("temp").innerText = data.temperature;
      document.getElementById("hum").innerText = data.humidity;
      document.getElementById("ppm").innerText = data.ppm;
      document.getElementById("ph").innerText = data.ph;
      document.getElementById("uv-uptime").innerText = data.uv_uptime;
      document.getElementById("pump-uptime").innerText = data.pump_uptime;
    });

  fetch(firebaseURL + "/irrigation.json")
    .then(res => res.json())
    .then(data => {
      document.getElementById("pump").innerText = data.pump;
    });
  fetch(firebaseURL + "/lights.json")
    .then(res => res.json())
    .then(data => {
      document.getElementById("uv-light").innerText = data;
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
function uvOn() {
  fetch(firebaseURL + "/uv_light.json", {
    method: "PUT",
    body: JSON.stringify("ON")
  });
} 
function uvOff() {
  fetch(firebaseURL + "/uv_light.json", {
    method: "PUT",
    body: JSON.stringify("OFF")
  });
}

// refresh every 2 seconds
setInterval(getData, 2000);
