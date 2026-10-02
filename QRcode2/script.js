// ============================================
// QR 02 — THE SPONSOR'S DESK
//
// EXTERNAL ACCESS CODE:
// LUCENT
//
// INTERNAL PUZZLE ANSWER:
// THREAD
//
// FINAL TOKEN:
// 2
// ============================================



// ============================================
// EXTERNAL LOCK
// ============================================

const gate =
  document.getElementById("gate");

const gameContent =
  document.getElementById("gameContent");

const gateCode =
  document.getElementById("gateCode");

const gateUnlock =
  document.getElementById("gateUnlock");

const gateError =
  document.getElementById("gateError");



function unlockGate() {

  const value =
    gateCode.value
      .trim()
      .toUpperCase();


  if (value === "LUCENT") {

    gateError.textContent = "";


    gate.classList.add(
      "hidden"
    );


    gameContent.classList.remove(
      "hidden"
    );


    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }

  else {

    gateError.textContent =
      "ACCESS DENIED // INVALID SPONSOR ID";

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



// ============================================
// DESK PUZZLE
// ============================================

const foundLetters = [];


const letterSlots =
  document.querySelectorAll(
    "#letterTray span"
  );


const foundCount =
  document.getElementById(
    "foundCount"
  );


const toast =
  document.getElementById(
    "toast"
  );



function updateLetterTray() {

  foundCount.textContent =
    foundLetters.length;


  letterSlots.forEach(
    function(slot, index) {

      if (foundLetters[index]) {

        slot.textContent =
          foundLetters[index];

      }

      else {

        slot.textContent =
          "?";

      }

    }
  );

}



// ============================================
// CLUE OBJECTS
// ============================================

const clueObjects =
  document.querySelectorAll(
    ".clue"
  );



clueObjects.forEach(
  function(object) {

    object.addEventListener(
      "click",
      function() {

        const letter =
          object.dataset.letter;


        // Trigger physical animation/state.
        object.classList.add(
          "solved"
        );


        // Only count each letter once.
        if (
          !foundLetters.includes(letter)
        ) {

          foundLetters.push(
            letter
          );


          updateLetterTray();

        }


        // Display object's message.
        toast.textContent =
          object.dataset.msg;


        // All six have been recovered.
        if (
          foundLetters.length === 6
        ) {

          setTimeout(
            function() {

              toast.textContent =
                "6/6 LETTERS RECOVERED. Rearrange them to unlock the archive.";

            },
            500
          );

        }

      }

    );

  }
);



// ============================================
// PHONE
// ============================================

const deskPhone =
  document.getElementById(
    "deskPhone"
  );


const phoneText =
  document.getElementById(
    "phoneText"
  );



deskPhone.addEventListener(
  "click",
  function() {

    // Restart ring animation.
    deskPhone.classList.remove(
      "ringing"
    );


    void deskPhone.offsetWidth;


    deskPhone.classList.add(
      "ringing"
    );


    // Change screen.
    phoneText.innerHTML =
      "...FIND THE<br>THREAD.";


    toast.textContent =
      "Recovered voicemail fragment.";

  }
);



// ============================================
// RED HERRINGS
// ============================================

const dudObjects =
  document.querySelectorAll(
    ".dud"
  );



dudObjects.forEach(
  function(object) {

    object.addEventListener(
      "click",
      function() {

        if (object.dataset.msg) {

          toast.textContent =
            object.dataset.msg;

        }

      }

    );

  }
);



// ============================================
// LITTLE RED-HERRING ANIMATIONS
// ============================================


// Keys

const keys =
  document.querySelector(
    ".keys"
  );


keys.addEventListener(
  "click",
  function() {

    keys.style.transform =
      "rotate(-10deg) translateX(20px)";

  }
);



// Pen

const pen =
  document.querySelector(
    ".pen"
  );


pen.addEventListener(
  "click",
  function() {

    pen.style.transform =
      "rotate(-12deg) translateX(-35px)";

  }
);



// Glasses

const glasses =
  document.querySelector(
    ".glasses"
  );


glasses.addEventListener(
  "click",
  function() {

    glasses.style.transform =
      "rotate(12deg) translateY(-8px)";

  }
);



// Envelope

const envelope =
  document.querySelector(
    ".envelope"
  );


envelope.addEventListener(
  "click",
  function() {

    envelope.style.transform =
      "rotate(-3deg) translateY(-8px)";

  }
);



// Floppy disk

const disk =
  document.querySelector(
    ".disk"
  );


disk.addEventListener(
  "click",
  function() {

    disk.style.transform =
      "rotate(-5deg) translateY(-8px)";

  }
);



// ============================================
// INTERNAL ARCHIVE PASSWORD
// ============================================

const password =
  document.getElementById(
    "password"
  );


const access =
  document.getElementById(
    "access"
  );


const error =
  document.getElementById(
    "error"
  );


const lockbox =
  document.getElementById(
    "lockbox"
  );


const archive =
  document.getElementById(
    "archive"
  );



function checkThreadAnswer() {

  /*
    Normalize what the player typed.

    These all become THREAD:

    THREAD
    thread
    Thread
    T H R E A D
    T-H-R-E-A-D
  */

  const answer =
    password.value
      .replace(
        /[^a-zA-Z]/g,
        ""
      )
      .toUpperCase();



  // Must actually investigate first.

  if (
    foundLetters.length < 6
  ) {

    error.textContent =
      "SEARCH INCOMPLETE — " +
      foundLetters.length +
      "/6 LETTERS FOUND";


    return;

  }



  // Correct answer.

  if (
    answer === "THREAD"
  ) {

    error.textContent = "";


    lockbox.classList.add(
      "hidden"
    );


    archive.classList.remove(
      "hidden"
    );


    archive.scrollIntoView({

      behavior:
        "smooth",

      block:
        "start"

    });

  }


  // Wrong answer.

  else {

    error.textContent =
      "ACCESS DENIED — REARRANGE THE RECOVERED LETTERS";

  }

}



// Click button.

access.addEventListener(
  "click",
  checkThreadAnswer
);



// Press Enter.

password.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key === "Enter"
    ) {

      checkThreadAnswer();

    }

  }
);