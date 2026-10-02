const gate = document.getElementById("gate");
const gameContent = document.getElementById("gameContent");
document.getElementById("gateUnlock").addEventListener("click", unlockGate);
document.getElementById("gateCode").addEventListener("keydown", e => { if(e.key==="Enter") unlockGate(); });
function unlockGate(){
  const v=document.getElementById("gateCode").value.trim().toUpperCase();
  if(v==="V17-8F2"){
    gate.classList.add("hidden");
    gameContent.classList.remove("hidden");
    window.scrollTo({top:0,behavior:"smooth"});
  } else {
    document.getElementById("gateError").textContent="ACCESS DENIED // INVALID TERMINAL VERSION";
  }
}

const channels = {
  A: { title: "CHANNEL A", signal: "M _ X   8 _", status: "SIGNAL CORRUPTED" },
  B: { title: "CHANNEL B", signal: "_ O V A   _ 9", status: "SIGNAL CORRUPTED" },
  C: { title: "CHANNEL C", signal: "A = 8", status: "PARTIAL DATA FOUND" },
  D: { title: "CHANNEL D", signal: "N = 7", status: "PARTIAL DATA FOUND" }
};

const view = document.getElementById("channelView");
const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".channel");
const error = document.getElementById("error");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    const c = channels[button.dataset.channel];
    screen.classList.remove("glitch");
    void screen.offsetWidth;
    screen.classList.add("glitch");

    view.innerHTML = `
      <p class="terminal-label">VOTING TERMINAL V17</p>
      <p class="channel-title">${c.title}</p>
      <div class="signal">${c.signal}</div>
      <p class="status">${c.status}</p>
    `;
  });
});

document.getElementById("restore").addEventListener("click", () => {
  const max = document.getElementById("maxInput").value.trim();
  const nova = document.getElementById("novaInput").value.trim();

  if (max === "88" && nova === "79") {
    error.textContent = "";
    screen.classList.add("glitch");
    setTimeout(() => {
      document.getElementById("decoder").classList.add("hidden");
      document.getElementById("evidence").classList.remove("hidden");
      document.getElementById("evidence").scrollIntoView({behavior:"smooth", block:"center"});
    }, 700);
  } else {
    error.textContent = "✕ DATA MISMATCH — CHECK THE CHANNELS";
    screen.classList.remove("glitch");
    void screen.offsetWidth;
    screen.classList.add("glitch");
  }
});