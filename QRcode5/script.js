// =============================================
// QR 05 — FINAL ARCHIVE
//
// MASTER CODE:
// 8241
//
// IMPORTANT:
// This QR does NOT reveal the physical envelope.
// Players must report their four tokens to the host.
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

const archive =
  document.getElementById("archive");


const memoFile =
  document.getElementById("memoFile");

const memoPanel =
  document.getElementById("memoPanel");

const playMemo =
  document.getElementById("playMemo");

const audioProgress =
  document.getElementById("audioProgress");

const audioTime =
  document.getElementById("audioTime");

const transcript =
  document.getElementById("transcript");

const beginReconstruction =
  document.getElementById("beginReconstruction");


const reconstruction =
  document.getElementById("reconstruction");

const statements =
  document.querySelectorAll(".statement");

const selectedCount =
  document.getElementById("selectedCount");

const verifyEvidence =
  document.getElementById("verifyEvidence");

const reconstructionError =
  document.getElementById("reconstructionError");

const archiveComplete =
  document.getElementById("archiveComplete");

const recoveryStatus =
  document.getElementById("recoveryStatus");


// =============================================
// MASTER LOCK
// =============================================

function unlockArchive() {

  // Accepts:
  // 8241
  // 8 2 4 1
  // 8-2-4-1

  const answer =
    gateCode.value.replace(/\D/g, "");


  if (answer === "8241") {

    gateError.textContent = "";

    gate.classList.add("hidden");

    archive.classList.remove("hidden");


    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }

  else {

    gateError.textContent =
      "DECRYPTION FAILED // CHECK FILE TOKENS";

  }

}


gateUnlock.addEventListener(
  "click",
  unlockArchive
);


gateCode.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Enter") {
      unlockArchive();
    }

  }
);


// =============================================
// OPEN DELETED MEMO
// =============================================

memoFile.addEventListener(
  "click",
  function() {

    memoPanel.classList.remove(
      "hidden"
    );


    memoPanel.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }
);


// =============================================
// SIMULATED AUDIO
// =============================================

let memoStarted = false;


playMemo.addEventListener(
  "click",
  function() {

    if (memoStarted) {
      return;
    }


    memoStarted = true;


    playMemo.textContent =
      "▶ PLAYING...";


    recoveryStatus.textContent =
      "RECOVERING AUDIO";


    const duration = 18;

    let elapsed = 0;


    const timer =
      setInterval(
        function() {

          elapsed += 0.1;


          const percentage =
            Math.min(
              (elapsed / duration) * 100,
              100
            );


          audioProgress.style.width =
            percentage + "%";


          const seconds =
            Math.floor(elapsed);


          audioTime.textContent =
            "00:" +
            String(seconds).padStart(2, "0");


          if (elapsed >= duration) {

            clearInterval(timer);


            audioProgress.style.width =
              "100%";


            audioTime.textContent =
              "00:18";


            playMemo.textContent =
              "✓ RECOVERED";


            recoveryStatus.textContent =
              "AUDIO RECOVERED";


            transcript.classList.remove(
              "hidden"
            );


            transcript.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });

          }

        },
        100
      );

  }
);


// =============================================
// OPEN FINAL RECONSTRUCTION
// =============================================

beginReconstruction.addEventListener(
  "click",
  function() {

    reconstruction.classList.remove(
      "hidden"
    );


    reconstruction.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }
);


// =============================================
// STATEMENT SELECTION
// =============================================

const selectedStatements =
  new Set();


statements.forEach(
  function(statement) {

    statement.addEventListener(
      "click",
      function() {

        const id =
          statement.dataset.id;


        // Deselect

        if (
          selectedStatements.has(id)
        ) {

          selectedStatements.delete(id);

          statement.classList.remove(
            "selected"
          );

        }

        // Select

        else {

          selectedStatements.add(id);

          statement.classList.add(
            "selected"
          );

        }


        selectedCount.textContent =
          `${selectedStatements.size} / 4`;


        reconstructionError.textContent =
          "";

      }
    );

  }
);


// =============================================
// VERIFY FINAL RECONSTRUCTION
// =============================================

const correctStatements = [
  "vote",
  "pressure",
  "paper",
  "envelope"
];


verifyEvidence.addEventListener(
  "click",
  function() {

    // Must choose exactly four.

    if (
      selectedStatements.size !== 4
    ) {

      reconstructionError.textContent =
        "SELECT EXACTLY FOUR STATEMENTS.";

      shakeReconstruction();

      return;

    }


    const correct =
      correctStatements.every(
        function(id) {

          return selectedStatements.has(id);

        }
      );


    if (!correct) {

      reconstructionError.textContent =
        "RECONSTRUCTION REJECTED // CHECK THE EVIDENCE FILES.";

      shakeReconstruction();

      return;

    }


    // Correct reconstruction.

    reconstructionError.textContent =
      "RECONSTRUCTION VERIFIED";


    statements.forEach(
      function(statement) {

        statement.disabled = true;

      }
    );


    verifyEvidence.disabled =
      true;


    setTimeout(
      function() {

        archiveComplete.classList.remove(
          "hidden"
        );


        archiveComplete.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      },
      700
    );

  }
);


// =============================================
// SHAKE WRONG ANSWER
// =============================================

function shakeReconstruction() {

  reconstruction.animate(

    [
      {
        transform:
          "translateX(0)"
      },

      {
        transform:
          "translateX(-7px)"
      },

      {
        transform:
          "translateX(7px)"
      },

      {
        transform:
          "translateX(-4px)"
      },

      {
        transform:
          "translateX(0)"
      }
    ],

    {
      duration: 280
    }

  );

}