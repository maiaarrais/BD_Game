// =============================================
// QR 04 — THE PAPER TRAIL
//
// EXTERNAL PASSWORD:
// CAM04
//
// REQUIRED DISCREPANCIES:
// winner
// ranking
// timing
//
// TOKEN:
// 1
// =============================================


// =============================================
// ELEMENTS
// =============================================

const gate =
  document.getElementById("gate");

const gateCode =
  document.getElementById("gateCode");

const gateUnlock =
  document.getElementById("gateUnlock");

const gateError =
  document.getElementById("gateError");

const gameContent =
  document.getElementById("gameContent");

const foundCount =
  document.getElementById("foundCount");

const toast =
  document.getElementById("toast");

const analysisPanel =
  document.getElementById("analysisPanel");

const overlayButton =
  document.getElementById("overlayButton");

const overlayScene =
  document.getElementById("overlayScene");

const confirmEvidence =
  document.getElementById("confirmEvidence");

const evidence =
  document.getElementById("evidence");


// =============================================
// EXTERNAL LOCK
// =============================================

function unlockGate() {

  const value =
    gateCode.value
      .trim()
      .toUpperCase();


  if (value === "CAM04") {

    gateError.textContent = "";

    gate.classList.add("hidden");

    gameContent.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }

  else {

    gateError.textContent =
      "ACCESS DENIED // INVALID FILE AUTHORIZATION";

  }

}


gateUnlock.addEventListener(
  "click",
  unlockGate
);


gateCode.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Enter") {
      unlockGate();
    }

  }
);


// =============================================
// DISCREPANCY SYSTEM
// =============================================

const foundClues =
  new Set();


const clueMessages = {

  winner:
    "DISCREPANCY // RAW RESULTS SHOW MAX METRICS: 88.",

  ranking:
    "DISCREPANCY // FINAL BROADCAST COPY LISTS NOVA LUX AS WINNER.",

  timing:
    "DISCREPANCY // VERIFIED WINNER WAS DUE BEFORE THE STAGE ANNOUNCEMENT."

};


const clues =
  document.querySelectorAll(
    ".clue"
  );


clues.forEach(
  function(button) {

    button.addEventListener(
      "click",
      function() {

        const clue =
          button.dataset.clue;


        // Don't count same clue twice.

        if (
          foundClues.has(clue)
        ) {

          toast.textContent =
            "ALREADY LOGGED.";

          return;

        }


        foundClues.add(clue);

        button.classList.add(
          "found"
        );


        foundCount.textContent =
          `${foundClues.size} / 3`;


        toast.textContent =
          clueMessages[clue];


        if (
          foundClues.size === 3
        ) {

          completeSearch();

        }

      }
    );

  }
);


// =============================================
// RED HERRINGS
// =============================================

const decoys =
  document.querySelectorAll(
    ".decoy"
  );


const decoyMessages = {

  sponsor:
    "NO DISCREPANCY // SPONSOR LOGISTICS MATCH THE EVENT FILE.",

  receipt:
    "NO DISCREPANCY // JUST CATERING. SOMEONE BOUGHT A LOT OF COFFEE.",

  call:
    "NO DISCREPANCY // CREW ARRIVAL TIMES MATCH THE PRODUCTION SCHEDULE."

};


decoys.forEach(
  function(button) {

    button.addEventListener(
      "click",
      function() {

        const type =
          button.dataset.decoy;


        toast.textContent =
          decoyMessages[type];


        button.animate(

          [
            {
              transform:
                "rotate(0deg)"
            },

            {
              transform:
                "rotate(-7deg)"
            },

            {
              transform:
                "rotate(7deg)"
            },

            {
              transform:
                "rotate(0deg)"
            }
          ],

          {
            duration: 250
          }

        );

      }
    );

  }
);


// =============================================
// SEARCH COMPLETE
// =============================================

function completeSearch() {

  toast.textContent =
    "3 / 3 FOUND // DOCUMENT COMPARISON AVAILABLE";


  setTimeout(
    function() {

      analysisPanel.classList.remove(
        "hidden"
      );


      analysisPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    },
    600
  );

}


// =============================================
// DOCUMENT OVERLAY
// =============================================

overlayButton.addEventListener(
  "click",
  function() {

    overlayScene.classList.remove(
      "hidden"
    );


    overlayScene.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

  }
);


// =============================================
// FINAL EVIDENCE
// =============================================

confirmEvidence.addEventListener(
  "click",
  function() {

    evidence.classList.remove(
      "hidden"
    );


    evidence.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }
);