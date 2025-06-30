const express = require("express");
const router = express.Router();

// Starting point
router.get("/", (req, res) => {
  res.render("index", {
    story:
      "You're Ben Tennyson. The Omnitrix begins blinking erratically, and a high-pitched signal pulses through your watch. Grandpa Max tries to contact you, but the signal is jammed. What do you do?",
    choices: [
      { text: "Investigate the signal", link: "/investigate" },
      { text: "Ignore it and enjoy your day off", link: "/ignore" },
    ],
  });
});

// Path 1 - Investigate
router.get("/investigate", (req, res) => {
  res.render("index", {
    story:
      "You trace the signal to an abandoned underground lab near Bellwood Forest. Inside, you find traces of alien tech and a blinking pod. Suddenly, Vilgax teleports in, claiming he hacked the Omnitrix! Do you prepare for battle or retreat to gather help?",
    choices: [
      {
        text: "Transform into XLR8 and prepare for battle",
        link: "/battle-xlr8",
      },
      { text: "Retreat and regroup with Gwen and Kevin", link: "/retreat" },
    ],
  });
});

// Path 2 - Ignore
router.get("/ignore", (req, res) => {
  res.render("index", {
    story:
      "You head to Mr. Smoothy’s and chill. Hours later, the city is under attack by a mysterious alien army led by Vilgax. You were too late to respond. The Omnitrix overloads trying to reboot. GAME OVER.",
    choices: [{ text: "Restart", link: "/" }],
  });
});

// Sub-paths
router.get("/battle-xlr8", (req, res) => {
  res.render("index", {
    story:
      "You speed around Vilgax using XLR8's incredible agility. You land a few hits, but he activates a disruptor field, freezing your movement. You're losing! A glowing capsule drops from the ceiling with a new alien form: Blitzshock. Do you unlock and transform?",
    choices: [
      { text: "Transform into Blitzshock", link: "/blitzshock" },
      {
        text: "Use Omnitrix override and turn into Humungousaur",
        link: "/humungousaur",
      },
    ],
  });
});

router.get("/retreat", (req, res) => {
  res.render("index", {
    story:
      "You call Gwen and Kevin. They meet you at the Rust Bucket and suggest infiltrating Vilgax's mother ship to disable the alien beacon. Do you sneak in quietly or go in guns blazing?",
    choices: [
      { text: "Sneak in quietly", link: "/sneak" },
      { text: "Go full attack mode", link: "/attack-mode" },
    ],
  });
});

// Final paths
router.get("/blitzshock", (req, res) => {
  res.render("index", {
    story:
      "You transform into Blitzshock! Your electric powers short-circuit Vilgax’s armor. He retreats, screaming vengeance. You've unlocked a secret alien and saved the day. YOU WIN!",
    choices: [{ text: "Restart", link: "/" }],
  });
});

router.get("/humungousaur", (req, res) => {
  res.render("index", {
    story:
      "Humungousaur smashes through Vilgax’s shield, but the lab collapses from the fight. You're buried under debris. Gwen and Kevin rescue you, but the Omnitrix is damaged. Mixed ending.",
    choices: [{ text: "Restart", link: "/" }],
  });
});

router.get("/sneak", (req, res) => {
  res.render("index", {
    story:
      "You successfully sneak in and disable the alien core. However, a security drone spots Kevin, and you're forced to fight your way out. The mission partially succeeds, but Vilgax escapes.",
    choices: [{ text: "Restart", link: "/" }],
  });
});

router.get("/attack-mode", (req, res) => {
  res.render("index", {
    story:
      "You and Kevin go full assault mode. Gwen creates a mana shield while you transform into Jetray. You destroy the beacon and escape, but Kevin is injured. You’ve won, but at a cost.",
    choices: [{ text: "Restart", link: "/" }],
  });
});

module.exports = router;
