const express = require("express");
const router = express.Router();

// Starting point
router.get("/", (req, res) => {
  res.render("index", {
    title: "Ben 10: Omnitrix Unleashed",
    story:
      "You're Ben Tennyson. The Omnitrix begins blinking erratically, and a high-pitched signal pulses through your watch. Grandpa Max tries to contact you, but the signal is jammed. What do you do?",
    bgMusic: "/audio/ben10.mp3",
    choices: [
      { text: "Investigate the signal", link: "/ben10/investigate" },
      { text: "Ignore it and enjoy your day off", link: "/ben10/ignore" },
    ],
  });
});

// Path 1 - Investigate
router.get("/investigate", (req, res) => {
  res.render("index", {
    title: "Ben 10: The Lab Discovery",
    story:
      "You trace the signal to an abandoned underground lab near Bellwood Forest. Inside, you find traces of alien tech and a blinking pod. Suddenly, Vilgax teleports in, claiming he hacked the Omnitrix! Do you prepare for battle or retreat to gather help?",
    bgMusic: "/audio/ben10.mp3",
    choices: [
      {
        text: "Transform into XLR8 and prepare for battle",
        link: "/ben10/battle-xlr8",
      },
      {
        text: "Retreat and regroup with Gwen and Kevin",
        link: "/ben10/retreat",
      },
    ],
  });
});

// Path 2 - Ignore
router.get("/ignore", (req, res) => {
  res.render("index", {
    title: "Ben 10: Missed the Signal",
    story:
      "You head to Mr. Smoothy’s and chill. Hours later, the city is under attack by a mysterious alien army led by Vilgax. You were too late to respond. The Omnitrix overloads trying to reboot. GAME OVER.",
    bgMusic: "/audio/ben10.mp3",
    choices: [{ text: "Restart", link: "/ben10" }],
  });
});

// Sub-paths
router.get("/battle-xlr8", (req, res) => {
  res.render("index", {
    title: "Ben 10: XLR8 vs Vilgax",
    story:
      "You speed around Vilgax using XLR8's incredible agility. You land a few hits, but he activates a disruptor field, freezing your movement. You're losing! A glowing capsule drops from the ceiling with a new alien form: Blitzshock. Do you unlock and transform?",
    bgMusic: "/audio/ben10.mp3",
    choices: [
      { text: "Transform into Blitzshock", link: "/ben10/blitzshock" },
      {
        text: "Use Omnitrix override and turn into Humungousaur",
        link: "/ben10/humungousaur",
      },
    ],
  });
});

router.get("/retreat", (req, res) => {
  res.render("index", {
    title: "Ben 10: Regroup",
    story:
      "You call Gwen and Kevin. They meet you at the Rust Bucket and suggest infiltrating Vilgax's mother ship to disable the alien beacon. Do you sneak in quietly or go in guns blazing?",
    bgMusic: "/audio/ben10.mp3",
    choices: [
      { text: "Sneak in quietly", link: "/ben10/sneak" },
      { text: "Go full attack mode", link: "/ben10/attack-mode" },
    ],
  });
});

// Final paths
router.get("/blitzshock", (req, res) => {
  res.render("index", {
    title: "Ben 10: Victory",
    story:
      "You transform into Blitzshock! Your electric powers short-circuit Vilgax’s armor. He retreats, screaming vengeance. You've unlocked a secret alien and saved the day. YOU WIN!",
    bgMusic: "/audio/ben10.mp3",
    choices: [{ text: "Restart", link: "/ben10" }],
  });
});

router.get("/humungousaur", (req, res) => {
  res.render("index", {
    title: "Ben 10: Aftershock",
    story:
      "Humungousaur smashes through Vilgax’s shield, but the lab collapses from the fight. You're buried under debris. Gwen and Kevin rescue you, but the Omnitrix is damaged. Mixed ending.",
    bgMusic: "/audio/ben10.mp3",
    choices: [{ text: "Restart", link: "/ben10" }],
  });
});

router.get("/sneak", (req, res) => {
  res.render("index", {
    title: "Ben 10: Stealth Operation",
    story:
      "You successfully sneak in and disable the alien core. However, a security drone spots Kevin, and you're forced to fight your way out. The mission partially succeeds, but Vilgax escapes.",
    bgMusic: "/audio/ben10.mp3",
    choices: [{ text: "Restart", link: "/ben10" }],
  });
});

router.get("/attack-mode", (req, res) => {
  res.render("index", {
    title: "Ben 10: Full Assault",
    story:
      "You and Kevin go full assault mode. Gwen creates a mana shield while you transform into Jetray. You destroy the beacon and escape, but Kevin is injured. You’ve won, but at a cost.",
    bgMusic: "/audio/ben10.mp3",
    choices: [{ text: "Restart", link: "/ben10" }],
  });
});

module.exports = router;
