const express = require("express");
const router = express.Router();

// Starting Point
router.get("/", (req, res) => {
  res.render("index", {
    title: "Spider-Man: Venom Strikes",
    story:
      "You're Peter Parker. While fixing your web shooters in your apartment, a sudden alert pops up on your phone — MJ is in trouble near Times Square. At the same time, your Spider-Sense tingles as if something massive is coming. Reports suggest the symbiote activity is spiking again, and Oscorp might be involved. What do you do?",
    bgMusic: "/audio/spiderman.mp3",
    choices: [
      { text: "Swing to MJ's location", link: "/spiderman/swing" },
      { text: "Investigate Oscorp first", link: "/spiderman/oscorp" },
    ],
  });
});

// MJ Path
router.get("/swing", (req, res) => {
  res.render("index", {
    title: "Spider-Man: Rooftop Rush",
    story:
      "You swing through the city, heart pounding. On a rooftop, MJ is cornered by Venom, who’s clearly stronger than ever. You land with a thud. Venom snarls, 'We missed you, Parker.' You know direct combat is risky — what do you do?",
    bgMusic: "/audio/spiderman.mp3",
    choices: [
      { text: "Web-sling Venom", link: "/spiderman/web" },
      {
        text: "Create a loud sound blast using a nearby antenna",
        link: "/spiderman/sound",
      },
    ],
  });
});

router.get("/web", (req, res) => {
  res.render("index", {
    title: "Spider-Man: Tangled Fury",
    story:
      "You fire webs quickly, tangling Venom momentarily. MJ runs for cover. But Venom breaks free and charges. You're pushed off the rooftop but catch yourself with a webline. You need backup!",
    bgMusic: "/audio/spiderman.mp3",
    choices: [
      { text: "Call Miles Morales", link: "/spiderman/miles" },
      { text: "Distract Venom and flee", link: "/spiderman/flee" },
    ],
  });
});

router.get("/sound", (req, res) => {
  res.render("index", {
    title: "Spider-Man: Sonic Strike",
    story:
      "You reroute power to an antenna and trigger a high-frequency pulse. Venom shrieks and weakens, stumbling. But it enrages him! Now he’s targeting you with full fury.",
    bgMusic: "/audio/spiderman.mp3",
    choices: [
      { text: "Lure him into a trap", link: "/spiderman/trap" },
      {
        text: "Try reasoning with Eddie Brock inside",
        link: "/spiderman/reason",
      },
    ],
  });
});

// Oscorp Path
router.get("/oscorp", (req, res) => {
  res.render("index", {
    title: "Spider-Man: Oscorp Secrets",
    story:
      "You stealth into Oscorp through the east vent. You overhear Norman Osborn speaking: 'We need more symbiote samples!' In the lab, you discover two prototypes: a powerful blaster and a stealthy sonic suit. Time to choose.",
    bgMusic: "/audio/spiderman.mp3",
    choices: [
      { text: "Take the Blaster", link: "/spiderman/blaster" },
      { text: "Take the Sonic Suit", link: "/spiderman/suit" },
    ],
  });
});

router.get("/blaster", (req, res) => {
  res.render("index", {
    title: "Spider-Man: Power Play",
    story:
      "You grab the blaster and blast through the Oscorp exit. Outside, you encounter Venom. The blaster weakens him with focused sonic bursts, but it has limited energy.",
    bgMusic: "/audio/spiderman.mp3",
    choices: [
      { text: "Finish Venom quickly", link: "/spiderman/finish" },
      { text: "Buy time and wait for Miles", link: "/spiderman/miles" },
    ],
  });
});

router.get("/suit", (req, res) => {
  res.render("index", {
    title: "Spider-Man: Shadow Tech",
    story:
      "You wear the stealth sonic suit. Your movements become silent, and you're resistant to the symbiote's influence. As you approach Venom, he struggles to sense you. Advantage: yours.",
    bgMusic: "/audio/spiderman.mp3",
    choices: [
      { text: "Ambush Venom silently", link: "/spiderman/ambush" },
      { text: "Use the suit to extract Brock", link: "/spiderman/extract" },
    ],
  });
});

// Final Paths
router.get("/trap", (req, res) => {
  res.render("index", {
    title: "Spider-Man: Caged Beast",
    story:
      "You lure Venom into a power chamber and activate a containment field. The symbiote writhes and detaches from Eddie. You’ve separated them successfully. The city is safe—for now.",
    bgMusic: "/audio/spiderman.mp3",
    choices: [{ text: "Restart", link: "/spiderman" }],
  });
});

router.get("/reason", (req, res) => {
  res.render("index", {
    title: "Spider-Man: Eddie's Redemption",
    story:
      "You reach out to Eddie, reminding him of MJ, his humanity, and the people he once protected. Eddie fights the symbiote's control and weakens its hold. He begs you to end it. It’s emotional, but you’ve won the mental battle.",
    bgMusic: "/audio/spiderman.mp3",
    choices: [{ text: "Restart", link: "/spiderman" }],
  });
});

router.get("/flee", (req, res) => {
  res.render("index", {
    title: "Spider-Man: Retreat and Regret",
    story:
      "You escape barely, but Venom disappears into the city with MJ. You failed to save her in time. The guilt is crushing. Maybe next time, you’ll choose differently.",
    bgMusic: "/audio/spiderman.mp3",
    choices: [{ text: "Restart", link: "/spiderman" }],
  });
});

router.get("/miles", (req, res) => {
  res.render("index", {
    title: "Spider-Man: Web Warriors",
    story:
      "Miles Morales arrives just in time. Together, you overpower Venom in a stunning tag-team. The symbiote is weakened, and you encase it in a stasis pod. New York is safe, thanks to teamwork!",
    bgMusic: "/audio/spiderman.mp3",
    choices: [{ text: "Restart", link: "/spiderman" }],
  });
});

router.get("/finish", (req, res) => {
  res.render("index", {
    title: "Spider-Man: Final Shot",
    story:
      "You fire a final charged blast. Venom explodes into black goo, disintegrating the symbiote completely. You stand over Eddie, unconscious but safe. You’ve ended the threat—for now.",
    bgMusic: "/audio/spiderman.mp3",
    choices: [{ text: "Restart", link: "/spiderman" }],
  });
});

router.get("/ambush", (req, res) => {
  res.render("index", {
    title: "Spider-Man: Silent Takedown",
    story:
      "Using your new stealth suit, you ambush Venom from behind, trapping him with reinforced sonic cuffs. S.H.I.E.L.D. arrives moments later and takes custody of the creature. Job well done, Spidey!",
    bgMusic: "/audio/spiderman.mp3",
    choices: [{ text: "Restart", link: "/spiderman" }],
  });
});

router.get("/extract", (req, res) => {
  res.render("index", {
    title: "Spider-Man: Symbiote Extraction",
    story:
      "Using the suit’s harmonic pulse, you carefully extract the symbiote from Brock without harming him. He collapses, free at last. The symbiote is stored securely at Oscorp under your watch.",
    bgMusic: "/audio/spiderman.mp3",
    choices: [{ text: "Restart", link: "/spiderman" }],
  });
});

module.exports = router;
