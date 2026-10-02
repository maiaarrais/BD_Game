// =============================================
// QR 03 — MISSING MINUTES
//
// EXTERNAL CODE:
// 2043
//
// CORRECT TIMELINE:
// 20:41
// 20:42
// 20:43
// 20:44
//
// TOKEN:
// 4
// =============================================


// =============================================
// ELEMENTS
// =============================================

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


const viewerCamera =
  document.getElementById("viewerCamera");

const viewerTime =
  document.getElementById("viewerTime");

const viewerScene =
  document.getElementById("viewerScene");

const viewerCaption =
  document.getElementById("viewerCaption");


const timeline =
  document.getElementById("timeline");

const moveLeft =
  document.getElementById("moveLeft");

const moveRight =
  document.getElementById("moveRight");

const verifyTimeline =
  document.getElementById("verifyTimeline");

const timelineError =
  document.getElementById("timelineError");

const archiveStatus =
  document.getElementById("archiveStatus");

const reconstruction =
  document.getElementById("reconstruction");


// =============================================
// EXTERNAL LOCK
// =============================================

function unlockArchive() {

  /*
    Allows:
    2043
    20:43
    20 43
    20-43
  */

  const answer =
    gateCode.value.replace(/\D/g, "");


  if (answer === "2043") {

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
      "ACCESS DENIED // TIMESTAMP NOT RECOGNIZED";

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
// FOOTAGE DATA
// =============================================

const footage = {

  clip41: {

    id: "clip41",

    fragment: "FRAGMENT B",

    camera: "02",

    time: "20:41",

    order: 1,

    short:
      "Livestream begins",

    caption:
      "A phone begins broadcasting from the event floor. Cleo is visible beside it.",

    scene: `
      <div class="full-scene">

        <div class="room-floor"></div>

        <div
          class="scene-person"
          style="
            left: 38%;
            bottom: 23%;
          "
        ></div>

        <div
          class="scene-label"
          style="
            left: 34%;
            bottom: 17%;
          "
        >
          CLEO
        </div>

        <div
          class="scene-phone"
          style="
            left: 56%;
            top: 35%;
          "
        ></div>

        <div
          class="scene-label"
          style="
            left: 55%;
            top: 55%;
          "
        >
          LIVESTREAM
        </div>

      </div>
    `

  },


  clip42: {

    id: "clip42",

    fragment: "FRAGMENT D",

    camera: "04",

    time: "20:42",

    order: 2,

    short:
      "Camera changes position",

    caption:
      "Camera 04 rotates away from the hallway and toward the Prize Table.",

    scene: `
      <div class="full-scene">

        <div class="room-floor"></div>

        <div
          class="scene-camera"
          style="
            left: 16%;
            top: 25%;
          "
        ></div>

        <div
          class="turn-arrow"
          style="
            left: 43%;
            top: 24%;
          "
        >
          ↷
        </div>

        <div
          class="scene-table"
          style="
            left: 61%;
            bottom: 24%;
          "
        ></div>

        <div
          class="scene-label"
          style="
            left: 64%;
            bottom: 17%;
          "
        >
          PRIZE TABLE
        </div>

      </div>
    `

  },


  clip43: {

    id: "clip43",

    fragment: "FRAGMENT A",

    camera: "04",

    time: "20:43",

    order: 3,

    short:
      "Two figures at Prize Table",

    caption:
      "Two identified figures remain near the Prize Table. The envelope is no longer visible by the end of the fragment.",

    scene: `
      <div class="full-scene">

        <div class="room-floor"></div>

        <div
          class="scene-table"
          style="
            left: 39%;
            bottom: 24%;
          "
        ></div>

        <div
          class="scene-person"
          style="
            left: 25%;
            bottom: 22%;
          "
        ></div>

        <div
          class="scene-label"
          style="
            left: 22%;
            bottom: 16%;
          "
        >
          BEA
        </div>

        <div
          class="scene-person"
          style="
            right: 25%;
            bottom: 22%;
          "
        ></div>

        <div
          class="scene-label"
          style="
            right: 22%;
            bottom: 16%;
          "
        >
          REX
        </div>

        <div
          class="scene-label"
          style="
            left: 42%;
            bottom: 36%;
            background: #f04c3c;
          "
        >
          ENVELOPE?
        </div>

      </div>
    `

  },


  clip44: {

    id: "clip44",

    fragment: "FRAGMENT C",

    camera: "01",

    time: "20:44",

    order: 4,

    short:
      "Figure returns",

    caption:
      "Celeste re-enters the monitored area one minute after the critical Prize Table footage.",

    scene: `
      <div class="full-scene">

        <div class="room-floor"></div>

        <div
          class="scene-door"
          style="
            left: 17%;
            bottom: 20%;
          "
        ></div>

        <div
          class="scene-person"
          style="
            left: 51%;
            bottom: 22%;
          "
        ></div>

        <div
          class="scene-label"
          style="
            left: 47%;
            bottom: 16%;
          "
        >
          CELESTE
        </div>

        <div
          class="scene-label"
          style="
            left: 18%;
            bottom: 12%;
          "
        >
          EAST ENTRY
        </div>

      </div>
    `

  }

};


// =============================================
// INSPECT FOOTAGE
// =============================================

const fragmentButtons =
  document.querySelectorAll(".fragment");


fragmentButtons.forEach(
  function(button) {

    button.addEventListener(
      "click",
      function() {

        const id =
          button.dataset.id;

        const clip =
          footage[id];


        // Remove previous selection.

        fragmentButtons.forEach(
          function(fragment) {

            fragment.classList.remove(
              "active"
            );

          }
        );


        // Select this fragment.

        button.classList.add(
          "active"
        );


        viewerCamera.textContent =
          clip.camera;


        viewerTime.textContent =
          clip.time;


        viewerScene.innerHTML =
          clip.scene;


        viewerCaption.textContent =
          clip.caption;

      }
    );

  }
);


// =============================================
// TIMELINE
// =============================================

/*
  Intentionally scrambled starting order.

  Correct:
  clip41
  clip42
  clip43
  clip44
*/

let timelineOrder = [
  "clip43",
  "clip41",
  "clip44",
  "clip42"
];


let selectedTimelineIndex = null;


// =============================================
// DRAW TIMELINE
// =============================================

function renderTimeline() {

  timeline.innerHTML = "";


  timelineOrder.forEach(
    function(id, index) {

      const clip =
        footage[id];


      const card =
        document.createElement("button");


      card.className =
        "timeline-card";


      if (
        index === selectedTimelineIndex
      ) {

        card.classList.add(
          "selected"
        );

      }


      card.innerHTML = `

        <span class="number">
          POSITION ${index + 1}
        </span>

        <span class="camera">
          CAM ${clip.camera}
        </span>

        <span class="description">
          ${clip.short}
        </span>

      `;


      card.addEventListener(
        "click",
        function() {

          selectedTimelineIndex =
            index;


          renderTimeline();

        }
      );


      timeline.appendChild(
        card
      );

    }
  );

}


renderTimeline();


// =============================================
// MOVE SELECTED CARD EARLIER
// =============================================

moveLeft.addEventListener(
  "click",
  function() {

    if (
      selectedTimelineIndex === null
    ) {

      timelineError.textContent =
        "SELECT A FRAGMENT FIRST.";

      return;

    }


    if (
      selectedTimelineIndex === 0
    ) {

      timelineError.textContent =
        "THAT FRAGMENT IS ALREADY FIRST.";

      return;

    }


    timelineError.textContent = "";


    const current =
      selectedTimelineIndex;


    const previous =
      current - 1;


    [
      timelineOrder[current],
      timelineOrder[previous]
    ] = [
      timelineOrder[previous],
      timelineOrder[current]
    ];


    selectedTimelineIndex =
      previous;


    renderTimeline();

  }
);


// =============================================
// MOVE SELECTED CARD LATER
// =============================================

moveRight.addEventListener(
  "click",
  function() {

    if (
      selectedTimelineIndex === null
    ) {

      timelineError.textContent =
        "SELECT A FRAGMENT FIRST.";

      return;

    }


    if (
      selectedTimelineIndex ===
      timelineOrder.length - 1
    ) {

      timelineError.textContent =
        "THAT FRAGMENT IS ALREADY LAST.";

      return;

    }


    timelineError.textContent = "";


    const current =
      selectedTimelineIndex;


    const next =
      current + 1;


    [
      timelineOrder[current],
      timelineOrder[next]
    ] = [
      timelineOrder[next],
      timelineOrder[current]
    ];


    selectedTimelineIndex =
      next;


    renderTimeline();

  }
);


// =============================================
// VERIFY TIMELINE
// =============================================

const correctTimeline = [
  "clip41",
  "clip42",
  "clip43",
  "clip44"
];


verifyTimeline.addEventListener(
  "click",
  function() {

    const correct =
      timelineOrder.every(
        function(id, index) {

          return (
            id ===
            correctTimeline[index]
          );

        }
      );


    if (!correct) {

      timelineError.textContent =
        "SEQUENCE ERROR // EVENTS DO NOT ALIGN";

      timelinePanelShake();

      return;

    }


    // Correct!

    timelineError.textContent =
      "SEQUENCE ACCEPTED";


    archiveStatus.textContent =
      "TIMELINE RESTORED";


    verifyTimeline.disabled =
      true;


    moveLeft.disabled =
      true;


    moveRight.disabled =
      true;


    setTimeout(
      function() {

        reconstruction.classList.remove(
          "hidden"
        );


        reconstruction.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      },
      700
    );

  }
);


// =============================================
// WRONG ANSWER SHAKE
// =============================================

function timelinePanelShake() {

  const panel =
    document.getElementById(
      "timelinePanel"
    );


  panel.animate(

    [
      {
        transform:
          "translateX(0)"
      },

      {
        transform:
          "translateX(-8px)"
      },

      {
        transform:
          "translateX(8px)"
      },

      {
        transform:
          "translateX(-5px)"
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