// Example Ship Data 
const shipData = [
  // Ships updated/added with stats from your list:
  {
    name: "Catalyst",
    type: "Destroyer",
    rank: "B",
    role: "Hybrid Turret DPS",
    tier: "B",
    bonuses: ["Hybrid Turret Damage", "Hybrid Turret Tracking"],
    hp: 4800,
    firepower: 2552,
    energy: 1648,
    dataRate: 88,
    armor: 9,
    imageUrl: "img/catalyst.png",
    // modules: [
    //   Primary,"125MM Railgun II", "35%", "Deals kinetic damage to all enemy wings (DMG Rate: 117.5%) Inflicts Repair Disabled on target for 2 turns",
    //   Secondary,"Light Ion Blaster II", "40%", "Deals Kinetic damage to all enemy wings (DMG Rate: 52.5%) Inflicts Corrosion on target to deal overtime damage each turn (DMG Rate: 15%)for 2 turns",
    //   Tertiary, "Warp Scrambler II", "100%", "While active modules are activated, reduce a random enemy's Firepower by 5% and Data Rate by 5 for 2 turns, stackable",
    //   Fourth, "Magnetic Field Stabilizer II", "100%", "Increases chance of initiating all active modules and talents by 2.5% and damage by 5%"
    // ],
  },
  {
    name: "Rifter",
    type: "Frigate",
    rank: "A",
    role: "Speed/Tackle/Turret",
    bonuses: ["Turret Damage", "Speed", "Armor HP"],
    hp: 4900,
    firepower: 2630,
    energy: 1665,
    dataRate: 90,
    armor: 10,
    imageUrl: "img/rifter.png",
  },
  {
    name: "Omen",
    type: "Cruiser",
    rank: "A",
    role: "Energy Turret DPS",
    bonuses: ["Energy Turret Damage", "Energy Turret Cap Use"],
    hp: 5700,
    firepower: 2643,
    energy: 1839,
    dataRate: 60,
    armor: 17,
    imageUrl: "img/omen.png",
  }, // Added Omen
  {
    name: "Caracal",
    type: "Cruiser",
    rank: "C",
    role: "Missile DPS",
    bonuses: ["Missile Damage", "Missile Velocity"],
    hp: 4899,
    firepower: 2610,
    energy: 1686,
    dataRate: 81,
    armor: 12,
    imageUrl: "img/caracal.png",
  },
  {
    name: "Vexor",
    type: "Cruiser",
    rank: "S",
    role: "Drone DPS",
    bonuses: ["Drone Damage", "Drone HP"],
    hp: 4800,
    firepower: 1869,
    energy: 2022,
    dataRate: 55,
    armor: 18,
    imageUrl: "img/vexor.png",
  },
  {
    name: "Stormbringer",
    type: "Cruiser",
    rank: "A",
    role: "Triglavian DPS",
    bonuses: ["Entropic Disintegrator Damage", "Energy Neut Range"],
    hp: 5100,
    firepower: 2667,
    energy: 1725,
    dataRate: 78,
    armor: 12,
    imageUrl: "img/stormbringer.png",
  }, // Added Stormbringer
  {
    name: "Scythe",
    type: "Cruiser",
    rank: "A",
    role: "Logistics (Shield)",
    bonuses: ["Shield Transfer Amount", "Shield Transfer Range"],
    hp: 3399,
    firepower: 2661,
    energy: 2616,
    dataRate: 63,
    armor: 9,
    imageUrl: "img/scythe.png",
  }, // Corrected role to Shield Logistics usually
  {
    name: "Dragoon",
    type: "Destroyer",
    rank: "S",
    role: "Energy Turret/Drone",
    bonuses: ["Energy Turret Dmg", "Drone Tracking"],
    hp: 4200,
    firepower: 2376,
    energy: 1716,
    dataRate: 53,
    armor: 7,
    imageUrl: "img/dragoon.png",
  },
  {
    name: "Griffin",
    type: "Frigate",
    rank: "S",
    role: "EWAR (ECM)",
    bonuses: ["ECM Strength", "ECM Range"],
    hp: 5400,
    firepower: 2065,
    energy: 2090,
    dataRate: 100,
    armor: 11,
    imageUrl: "img/griffin.png",
  },
  {
    name: "Dramiel",
    type: "Frigate",
    rank: "S",
    role: "Speed/Turret DPS",
    bonuses: ["Turret Damage", "Speed"],
    hp: 4800,
    firepower: 2530,
    energy: 1670,
    dataRate: 91,
    armor: 9,
    imageUrl: "img/dramiel.png",
  },
  {
    name: "Gila",
    type: "Cruiser",
    rank: "C",
    role: "Drone/Missile DPS",
    bonuses: ["Drone Damage/HP", "Missile Damage"],
    hp: 4200,
    firepower: 2376,
    energy: 1716,
    dataRate: 47,
    armor: 9,
    imageUrl: "img/gila.png",
  }, // Added Gila
  {
    name: "Oracle",
    type: "Battlecruiser",
    rank: "S",
    role: "Energy Turret DPS",
    bonuses: ["Energy Turret Dmg", "Energy Turret Range"],
    hp: 4600,
    firepower: 2860,
    energy: 1978,
    dataRate: 60,
    armor: 15,
    imageUrl: "img/oracle.png",
  },
  {
    name: "Drake",
    type: "Battlecruiser",
    rank: "A",
    role: "Missile Tank",
    bonuses: ["Shield Resist", "Missile Damage"],
    hp: 7200,
    firepower: 1914,
    energy: 1826,
    dataRate: 48,
    armor: 15,
    imageUrl: "img/drake.png",
  },
  {
    name: "Tristan",
    type: "Frigate",
    rank: "S",
    role: "Drone DPS",
    bonuses: ["Drone Damage", "Drone Tracking"],
    hp: 3300,
    firepower: 2570,
    energy: 1625,
    dataRate: 88,
    armor: 9,
    imageUrl: "img/tristan.png",
  },
  {
    name: "Orthrus",
    type: "Cruiser",
    rank: "A",
    role: "Missile DPS/EWAR",
    bonuses: ["Missile Damage", "Warp Scramble Range"],
    hp: 4800,
    firepower: 2631,
    energy: 1686,
    dataRate: 81,
    armor: 12,
    imageUrl: "img/orthrus.png",
  }, // Added Orthrus
  {
    name: "Apocalypse",
    type: "Battleship",
    rank: "S",
    role: "Energy Turret DPS",
    bonuses: ["Energy Turret Dmg", "Energy Turret Range"],
    hp: 5800,
    firepower: 2244,
    energy: 2244,
    dataRate: 47,
    armor: 17,
    imageUrl: "img/apocalypse.png",
  },
  {
    name: "Maelstrom",
    type: "Battleship",
    rank: "C",
    role: "Turret DPS/Tank",
    bonuses: ["Turret Damage", "Shield Boost"],
    hp: 5400,
    firepower: 2156,
    energy: 2024,
    dataRate: 64,
    armor: 17,
    imageUrl: "img/maelstrom.png",
  },
  {
    name: "Thunderchild",
    type: "Battleship",
    rank: "A",
    role: "Triglavian DPS/Tank",
    bonuses: ["Entropic Disintegrator Damage", "Armor HP"],
    hp: 7200,
    firepower: 1890,
    energy: 2047,
    dataRate: 17,
    armor: 35,
    imageUrl: "img/thunderchild.png",
  },
  {
    name: "Magnate",
    type: "Frigate",
    rank: "C",
    role: "Exploration/Combat",
    bonuses: ["Scan Probe Strength", "Relic/Data Bonus"],
    hp: 4600,
    firepower: 2495,
    energy: 1510,
    dataRate: 84,
    armor: 9,
    imageUrl: "img/magnate.png",
  }, // Added Magnate
  {
    name: "Heron",
    type: "Frigate",
    rank: "B",
    role: "Exploration",
    bonuses: ["Scan Probe Strength", "Relic/Data Bonus"],
    hp: 5100,
    firepower: 2055,
    energy: 1930,
    dataRate: 94,
    armor: 10,
    imageUrl: "img/heron.png",
  }, // Added Heron
  {
    name: "Corax",
    type: "Destroyer",
    rank: "A",
    role: "Missile DPS",
    bonuses: ["Missile Damage", "Missile Velocity"],
    hp: 4400,
    firepower: 2792,
    energy: 1824,
    dataRate: 72,
    armor: 10,
    imageUrl: "img/corax.png",
  },
  {
    name: "Incursus",
    type: "Frigate",
    rank: "C",
    role: "Combat/Armor Tank",
    bonuses: ["Hybrid Turret Damage", "Armor Repair Bonus"],
    hp: 5100,
    firepower: 2120,
    energy: 1865,
    dataRate: 94,
    armor: 10,
    imageUrl: "img/incursus.png",
  }, // Added Incursus
  {
    name: "Algos",
    type: "Destroyer",
    rank: "B",
    role: "Drone DPS",
    bonuses: ["Drone Damage", "Drone Optimal Range"],
    hp: 4600,
    firepower: 2436,
    energy: 1572,
    dataRate: 84,
    armor: 9,
    imageUrl: "img/algos.png",
  }, 
  {
    name: "Breacher",
    type: "Frigate",
    rank: "A",
    role: "Missile DPS/Tank",
    bonuses: ["Missile Damage", "Shield Boost"],
    hp: 5200,
    firepower: 2415,
    energy: 1675,
    dataRate: 61,
    armor: 13,
    imageUrl: "img/breacher.png",
  },
  {
    name: "Bellicose",
    type: "Cruiser",
    rank: "C",
    role: "EWAR/Missile",
    bonuses: ["Target Painter Effect", "Missile Velocity"],
    hp: 5898,
    firepower: 2268,
    energy: 1635,
    dataRate: 45,
    armor: 8,
    imageUrl: "img/bellicose.png",
  }, // Added Bellicose
  {
    name: "Worm",
    type: "Frigate",
    rank: "C",
    role: "Drone/Missile DPS",
    bonuses: ["Drone Damage/HP", "Missile Damage"],
    hp: 4600,
    firepower: 1760,
    energy: 1910,
    dataRate: 57,
    armor: 14,
    imageUrl: "img/worm.png",
  }, // Added Worm
  {
    name: "Inquisitor",
    type: "Frigate",
    rank: "S",
    role: "Logistics (Armor)/Combat",
    bonuses: ["Remote Armor Repair", "Nosferatu Drain"],
    hp: 4700,
    firepower: 2520,
    energy: 2520,
    dataRate: 72,
    armor: 7,
    imageUrl: "img/inquisitor.png",
  },
  {
    name: "Stratios",
    type: "Cruiser",
    rank: "C",
    role: "Exploration/Combat/Drone",
    bonuses: ["Scan Probe Strength", "Drone Damage/HP"],
    hp: 3000,
    firepower: 1827,
    energy: 2793,
    dataRate: 65,
    armor: 12,
    imageUrl: "img/stratios.png",
  }, // Added Stratios
  {
    name: "Navitas",
    type: "Frigate",
    rank: "D",
    role: "Logistics (Armor)/Mining",
    bonuses: ["Remote Armor Repair", "Mining Laser Range"],
    hp: 5900,
    firepower: 1530,
    energy: 1530,
    dataRate: 49,
    armor: 9,
    imageUrl: "img/navitas.png",
  }, // Added Navitas
  {
    name: "Condor",
    type: "Frigate",
    rank: "D",
    role: "Missile DPS/Tackle",
    bonuses: ["Missile Damage", "Missile Velocity"],
    hp: 3900,
    firepower: 2085,
    energy: 1350,
    dataRate: 72,
    armor: 8,
    imageUrl: "img/condor.png",
  }, // Added Condor
  {
    name: "Tormentor",
    type: "Frigate",
    rank: "C",
    role: "Energy Turret/Combat",
    bonuses: ["Energy Turret Damage", "Energy Turret Cap Use"],
    hp: 4700,
    firepower: 1800,
    energy: 1800,
    dataRate: 62,
    armor: 9,
    imageUrl: "img/tormentor.png",
  }, // Added Tormentor
  {
    name: "Cruor",
    type: "Frigate",
    rank: "C",
    role: "Energy Vampire/Web",
    bonuses: ["Nosferatu Drain", "Stasis Web Range"],
    hp: 4000,
    firepower: 2160,
    energy: 2160,
    dataRate: 62,
    armor: 6,
    imageUrl: "img/cruor.png",
  }, // Added Cruor
  {
    name: "Impairor",
    type: "Frigate",
    rank: "C",
    role: "Rookie Ship",
    bonuses: [],
    hp: 3400,
    firepower: 1330,
    energy: 1330,
    dataRate: 62,
    armor: 7,
    imageUrl: "img/impairor.png",
  }, // Added Impairor
  {
    name: "Hyperion",
    type: "Battleship",
    rank: "A",
    role: "Turret DPS/Tank",
    bonuses: ["Turret Damage", "Armor Repair"],
    hp: 4124,
    firepower: 2420,
    energy: 2290,
    dataRate: 56,
    armor: 13,
    imageUrl: "img/hyperion.png",
    skills: [
      /* Drone skills suggest Offense or Hybrid */
    ],
  }, // Placeholder stats
];

const commanderData = [
  // Add 'faction' and 'type' (Offense, Tactics, Hybrid) - REQUIRES VERIFICATION/INPUT
  {
    name: "Falek",
    tier: "S",
    faction: "Amarr",
    type: "Offense?", // Example Type
    imageUrl: "img/falek.png",
    skills: [
      /* Add skills */
    ],
  },
  {
    name: "Kezti",
    tier: "S",
    faction: "Amarr",
    type: "Offense", // Example Type
    imageUrl: "img/kezti.png",
    skills: [
      /* Drone skills suggest Offense or Hybrid */
    ],
  },
  {
    name: "Victor",
    tier: "S",
    faction: "Minmatar?",
    type: "Unknown",
    imageUrl: "img/victor.png",
    skills: [
      /* Add skills */
    ],
  },
  {
    name: "Pomik",
    tier: "S",
    faction: "Gallente?",
    type: "Hybrid?", // Example Type
    imageUrl: "img/pomik.png",
    skills: [
      /* Add skills */
    ],
  },
  {
    name: "Amile",
    tier: "S",
    faction: "Caldari",
    type: "Tactics", // Example Type
    imageUrl: "img/amile.png",
    skills: [
      /* Add skills */
    ],
  },
  {
    name: "Ameline",
    tier: "S",
    faction: "Minmatar",
    type: "Tactics", // Often logistics/healing -> Tactics
    imageUrl: "img/ameline.png",
    skills: [
      /* Add skills */
    ],
  },
  {
    name: "Santimona",
    tier: "S",
    faction: "Amarr?",
    type: "Tactics?", // Often logistics/healing -> Tactics
    imageUrl: "img/santimona.png",
    skills: [
      /* Add skills */
    ],
  },
  {
    name: "Mila",
    tier: "S",
    faction: "Minmatar?",
    type: "Unknown",
    imageUrl: "img/mila.png",
    skills: [
      /* Add skills */
    ],
  },
  {
    name: "Drae",
    tier: "A",
    faction: "Minmatar?",
    type: "Unknown",
    imageUrl: "img/drae.png",
    skills: [
      /* Add skills */
    ],
  },
  {
    name: "Kasora",
    tier: "A",
    faction: "Caldari?",
    type: "Unknown",
    imageUrl: "img/kasora.png",
    skills: [
      /* Add skills */
    ],
  },
  {
    name: "Yun",
    tier: "A",
    faction: "Amarr?",
    type: "Hybrid?", // Has offense and defense skill examples
    imageUrl: "img/yun.png",
    skills: [
      {
        id: "yun_energy_dmg",
        name: "Energy Turret Dmg+",
        type: "Weapon",
        category: "Energy Turret",
        effect: "Increases Energy Turret Damage",
        value: "+5%",
      },
      {
        id: "yun_armor_res",
        name: "Armor Resist+",
        type: "Defense",
        category: "Armor",
        effect: "Improves Armor Resistances",
        value: "+3%",
      },
    ],
  },
  {
    name: "Blaque",
    tier: "A",
    faction: "Minmatar",
    type: "Unknown",
    imageUrl: "img/blaque.png",
    skills: [
      /* Add skills */
    ],
  },
  {
    name: "Brokara",
    tier: "A",
    faction: "Gallente",
    type: "Unknown",
    imageUrl: "img/brokara.png",
    skills: [
      /* Add skills */
    ],
  },
  {
    name: "Gear",
    tier: "B",
    faction: "Gallente",
    type: "Unknown",
    imageUrl: "img/gear.png",
    skills: [
      /* Add skills */
    ],
  },
  {
    name: "Bishop",
    tier: "B",
    faction: "Amarr",
    type: "Tactics",
    imageUrl: "img/bishop.png",
    skills: [
      /* Add skills - often logistics */
    ],
  },
  {
    name: "Flaherty",
    tier: "B",
    faction: "Galente",
    type: "Tactics",
    imageUrl: "img/flaherty.png",
    skills: [
      /* Healing mentioned -> Tactics */
    ],
  },
  {
    name: "Faus",
    tier: "B",
    faction: "Unknown",
    type: "Unknown",
    imageUrl: "img/faus.png",
    skills: [
      /* Add skills */
    ],
  },
  {
    name: "Korvin",
    tier: "C",
    faction: "Minmatar",
    type: "Unknown",
    imageUrl: "img/korvin.png",
    skills: [
      /* Add skills */
    ],
  },
  {
    name: "Yorlas",
    tier: "B",
    faction: "Guristas",
    type: "Offense",
    imageUrl: "img/yorlas.png",
    skills: [
      /* Add skills */
    ],
  },
  {
    name: "Otro",
    tier: "C",
    faction: "Guristas",
    type: "Unknown",
    imageUrl: "img/otro.png",
    skills: [
      /* Add skills */
    ],
  },
  {
    name: "Karth",
    tier: "A",
    faction: "Minmatar",
    type: "Offense",
    imageUrl: "img/karth.png",
    skills: [
      /* Often paired for damage -> Offense */
    ],
  },
  {
    name: "Baer",
    tier: "C",
    faction: "Unknown",
    type: "Unknown",
    imageUrl: "img/baer.png",
    skills: [
      /* Add skills */
    ],
  },
  
  {
    name: "Cerb",
    tier: "A",
    faction: "Amarr",
    type: "Offense",
    imageUrl: "img/cerb.png",
    skills: [
      /* Add skills */
    ],
  }, // Added previously
  // ... Add faction and type to ALL other commanders ...
];
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img-content");
const modalCaption = document.getElementById("modal-caption");
const closeModalButton = document.getElementById("modal-close-button");

// --- Function to Open Modal ---
function openImageModal(imgElement) {
    if (!modal || !modalImg || !imgElement) return; // Exit if elements don't exist
    modal.style.display = "block";
    modalImg.src = imgElement.src;
    // Use alt text as caption if available
    modalCaption.innerHTML = imgElement.alt || '';
}

// --- Function to Close Modal ---
function closeImageModal() {
     if (!modal) return;
     modal.style.display = "none";
}

// Listener for all images designated as clickable tier list images
document.querySelectorAll('.tier-list-image').forEach(img => {
    img.addEventListener('click', function() {
        openImageModal(this); // 'this' refers to the clicked image
    });
});

// Listener for the close button
if (closeModalButton) {
    closeModalButton.addEventListener('click', closeImageModal);
}

// Listener to close modal if user clicks on the background (outside the image)
if (modal) {
    modal.addEventListener('click', function(event) {
        // Close if the target IS the modal background itself, not its children
        if (event.target === modal) {
            closeImageModal();
        }
    });
}

// --- Add near the top with other DOM Elements ---
const knownCombosList = document.getElementById('known-combos-list'); // Reference to the new UL

// --- New Function to display Known Combos ---
function displayKnownCombinationsPanel() {
  if (!knownCombosList) return; // Exit if the element doesn't exist

  // Sort combinations (optional, e.g., alphabetically by ship name)
  const sortedCombos = [...knownCombinations].sort((a, b) => (a.ship || '').localeCompare(b.ship || ''));

  let combosHTML = '';
  if (sortedCombos.length === 0) {
      combosHTML = '<li>No known combinations loaded.</li>';
  } else {
      sortedCombos.forEach(combo => {
          // Find the corresponding ship and commander objects to get image URLs
          const shipInfo = shipData.find(s => s.name === combo.ship);
          const cmdr1Info = commanderData.find(c => c.name === combo.cmdr1);
          const cmdr2Info = commanderData.find(c => c.name === combo.cmdr2);

          // Get image URLs (or use null if not found)
          const shipImgUrl = shipInfo?.imageUrl; // Optional chaining ?.
          const cmdr1ImgUrl = cmdr1Info?.imageUrl;
          const cmdr2ImgUrl = cmdr2Info?.imageUrl;

          combosHTML += `<li class="combo-item">`; // Add class for styling

          // --- Ship Line ---
          combosHTML += `<div class="combo-line ship-line">`;
          // Ship Image
          combosHTML += `<div class="combo-image-container">`;
          if (shipImgUrl) {
              combosHTML += `<img src="${shipImgUrl}" alt="${combo.ship || 'Ship'}" class="combo-thumbnail ship-thumb" loading="lazy" onerror="this.style.visibility='hidden'">`;
          } else {
              combosHTML += `<div class="combo-no-image ship-no-image">S</div>`; // Placeholder letter S
          }
          combosHTML += `</div>`;
          // Ship Name
          combosHTML += `<strong class="combo-ship-name">${combo.ship || 'Unknown Ship'}</strong>`;
          combosHTML += `</div>`; // End ship-line

          // --- Commanders Line ---
          combosHTML += `<div class="combo-line commanders-line">`;
          // Commander 1 Image & Name
          combosHTML += `<div class="combo-commander">`;
          combosHTML += `<div class="combo-image-container">`;
          if (cmdr1ImgUrl) {
              combosHTML += `<img src="${cmdr1ImgUrl}" alt="${combo.cmdr1 || 'Cmdr1'}" class="combo-thumbnail cmdr-thumb" loading="lazy" onerror="this.style.visibility='hidden'">`;
          } else {
              combosHTML += `<div class="combo-no-image cmdr-no-image">C</div>`; // Placeholder C
          }
          combosHTML += `</div>`;
          combosHTML += `<span class="combo-commander-name">${combo.cmdr1 || '?'}</span>`;
          combosHTML += `</div>`; // End combo-commander

          // Plus Sign Separator
           combosHTML += `<span class="plus-separator">+</span>`;

           // Commander 2 Image & Name
          combosHTML += `<div class="combo-commander">`;
          combosHTML += `<div class="combo-image-container">`;
          if (cmdr2ImgUrl) {
              combosHTML += `<img src="${cmdr2ImgUrl}" alt="${combo.cmdr2 || 'Cmdr2'}" class="combo-thumbnail cmdr-thumb" loading="lazy" onerror="this.style.visibility='hidden'">`;
          } else {
              combosHTML += `<div class="combo-no-image cmdr-no-image">C</div>`; // Placeholder C
          }
           combosHTML += `</div>`;
          combosHTML += `<span class="combo-commander-name">${combo.cmdr2 || '?'}</span>`;
          combosHTML += `</div>`; // End combo-commander
          combosHTML += `</div>`; // End commanders-line


          // --- Note and Bond Line ---
          if (combo.note || combo.bond) {
               combosHTML += `<div class="combo-line note-line">`;
               // Display note if it exists
              if (combo.note) {
                  combosHTML += `<p class="combo-note">${combo.note}</p>`;
              }
              // Display bond bonus if it exists
              if (combo.bond) {
                  combosHTML += `<p class="combo-bond">✨ Bond Bonus: ${combo.bondName || 'Active'}</p>`;
              }
               combosHTML += `</div>`; // End note-line
          }

          combosHTML += `</li>`;
      });
  }

  knownCombosList.innerHTML = combosHTML;
}

const knownCombinations = [
  {
    ship: "Thunderchild",
    cmdr1: "Baer",
    cmdr2: "Santimona",
    note: "User reported: Pulled alt account through all of Season.",
  },
  {
    ship: "Vexor",
    cmdr1: "Victor",
    cmdr2: "Pomik",
    note: "Ship: Vexor (HP % rigs for PvP, Grid Damage % for PvE) Lead Commander: Victor (Kinetic Damage %, Grid Damage % for PvE, Build: A-A-A)Deputy Commander: Pomik (Repair Amount % implants, Build: A-B-A)",
  }, // Assumed Victor=Victar, Pomik=Ponk
  {
    ship: "Rifter",
    cmdr1: "Karth",
    cmdr2: "Yun",
    note: "User reported: Solid mid-game potential after Decoding Error changes. Ship and Karth need at least 2 stars.",
  },
  {
    ship: "Hyperion",
    cmdr1: "Flaherty",
    cmdr2: "Blaque",
    note: "User reported: Combo of early turn healing (Flaherty) and late-turn recovery (Hyperion ship ability?).",
  }, // Assumed Flaherty
  {
    ship: "Inquisitor",
    cmdr1: "Faus",
    cmdr2: "Kezti",
    note: "Ship: InquisitorLead Commander: Faus (Kinetic Damage %, Grid Damage % for PvE, Build: A-A-A)Deputy Commander: Ketzi (Kinetic Damage %, Grid Damage % for PvE, Build: A-A-A)",
  }, // Assumed Faus=Fass
  {
    ship: "Dramiel",
    cmdr1: "Karth",
    cmdr2: "Mens",
    note: "Ship: Dramiel (Data Rigs) Lead Commander: Karth (Any implants with max raw Offense, Build: A-B-A, or Data set if Karth 3 – A-B-B)* Deputy Commander: Mens (Kinetic Damage %, Grid Damage % for PvE, Build: A-A-A)",
  }, // Assumed Mens=Ameine
  {
    ship: "Scythe",
    cmdr1: "Bishop",
    cmdr2: "Ameline",
    note: "Ship: Scythe (Energy % or Firepower % rigs, depending on commander skills) Lead Commander: Bishop (Energy Damage % implants, Build: A-B-A) Deputy Commander: Ameline (Data Rate implants, Build: A-B-A)",
  }, // Assumed Ameline=Ameine
  {
    ship: "Maelstrom",
    cmdr1: "Karth",
    cmdr2: "Mens",
    note: "Ship: Maelstrom (Firepower % rigs, or Data Rate if you found getting countered by another Karth-builds) Lead Commander: Karth (Any implants with max raw Offense, Build: A-B-A, or Data set if Karth 3* – A-B-B) Deputy Commander: Mens (Kinetic Damage % implants, Grid Damage % for PvE, Build: A-A-A).",
  }, // Assumed Mens=Ameine
  {
    ship: "Rifter",
    cmdr1: "Karth",
    cmdr2: "Morde Yorlas",
    note: "Ship: Rifter (Data Rigs)Lead Commander: Karth (Any implants with max raw Offense, Build: A-B-A, or Data set if Karth 3* – A-B-B)Deputy Commander: Yorlas (Kinetic Damage % implants, Build: A-B-B)",
  }, // Assumed Yorlas is part of Morde Yorlas
  {
    ship: "Oracle",
    cmdr1: "Santimona",
    cmdr2: "Flaherty",
    note: "Ship: Oracle (Firepower Rigs) Lead Commander: Santimona (Repair Amount % implants, Build: A-A-A) Deputy Commander: Flaherty (Repair Amount % implants, Build: A-A-B)",
  }, // Assumed Santimona & Flaherty
  {
    ship: "Thunderchild",
    cmdr1: "Santimona",
    cmdr2: "Chelm",
    note: "Ship: Thunderchild (HP or Energy Rigs) Lead Commander: Santimona (Repair Amount % implants, Build: A-A-A) Deputy Commander: Chelm (Tactics or Energy Damage implants, Build: A-A-A)",
  }, // Assumed Santimona
  {
    ship: "Breacher",
    cmdr1: "Bishop",
    cmdr2: "Thumgar",
    note: "Ship: Breacher (HP Rigs)Lead Commander: Bishop (Energy Damage % implants, Build: A-B-A) Deputy Commander: Thumbar (Kinetic Damage %, Build: A-A-A)",
  },
  {
    ship: "Dragoon",
    cmdr1: "Kezti",
    cmdr2: "Pomik",
    note: "Ship: Dragoon (Kinetic Damage % rigs)Lead Commander Kezti (Kinetic Damage % implants, build: A-A-A) Deputy Commander Pomik (Repair Amount % implants, build: A-B-A)",
  }, // Assumed Pomik=Ponk
  {
    ship: "Caracal",
    cmdr1: "Otro",
    cmdr2: "Yorlas",
    note: "Ship: Caracal (Kinetic Damage % rigs) Lead Commander: Otro (Kinetic Damage % implants, build: A-A-A) Deputy Commander: Morda (Data Rate implants, build: A-A-A).",
  }, 
  {
    ship: "Vexor",
    cmdr1: "Santimona",
    cmdr2: "Paladin",
    note: "Ship: Vexor (HP Rigs, Encirclement formation)Lead Commander: Pomik (Repair Amount % implants, Build: A-B-A)Deputy Commander: Paladin Crusader (Repair Amount % implants, Build: A-A-A)",
  }, 
  {
    ship: "Vexor",
    cmdr1: "Santimona",
    cmdr2: "Gear",
    note: "Ship: Vexor (Repair Amount % rigs) Lead Commander: Santimona (Repair Amount % implants, build: A-A-A) Deputy Commander: Gear (Data Rate implants, build: A-A-A)",
  }, 
  {
    ship: "Tristan",
    cmdr1: "Korvin",
    cmdr2: "Yana",
    note: "Ship: Tristan (Firepower % rigs) Lead Commander: Korvin (Offense % or Domination set implants, build: A-A-A) Deputy Commander: Yana (Data Rate implants, build: A-A-A).",
  }, 
  {
    ship: "Griffin",
    cmdr1: "Kezti",
    cmdr2: "Amile",
    note: "Ship: Griffin (Kinetic Damage % rigs) Lead Commander: Ketzi (Kinetic Damage % implants, build: A-A-A) Deputy Commander: Amile (Offense % implants, build: A-A-A).",
  }, 
  {
    ship: "Drake",
    cmdr1: "Santimona",
    cmdr2: "Falek",
    note: "Ship: Drake (HP %, Tenacity, or Evasion rigs) Lead Commander: Falek (Tactic % implants, build: A-A-A) Deputy Commander: Santimona (Repair Amount % or Shielded Repair set implants, build: A-A-A)",
  }, // Assumed Santimona
  {
    ship: "Drake",
    cmdr1: "Otro",
    cmdr2: "Mila",
    note: "User suggested Drake combo.",
  },
  {
    ship: "Griffin",
    cmdr1: "Ketzi",
    cmdr2: "Brokara",
    note: "User suggested Griffin EWAR combo.",
  }, 
  {
    ship: "Griffin",
    cmdr1: "Otro",
    cmdr2: "Mila",
    note: "Ship: Griffin (Kinetic Damage % rigs)Lead Commander: Otro (Kinetic Damage % implants, build: A-A-A)Deputy Commander: Mila (Data Rate implants, build: A-A-A)",
  }, 
  {
    ship: "Tristan",
    cmdr1: "Karth",
    cmdr2: "Yorlas",
    note: "User suggested Tristan combo.",
  }, // Assumed Yorlas = Morde Yorlas
  {
    ship: "Corax",
    cmdr1: "Kaylyn",
    cmdr2: "Ameline",
    note: "User suggested Corax combo. Deals with Vexors easyly",
  }, // Assumed Amile=Ameine
  {
    ship: "Apocalypse",
    cmdr1: "Jamyl",
    cmdr2: "Falek",
    note: "User suggested Apocalypse combo.",
  },
  {
    ship: "Tristan",
    cmdr1: "Korvin",
    cmdr2: "Yana",
    note: "User suggested Tristan combo.",
  },
  {
    ship: "Dragoon",
    cmdr1: "Yorlas",
    cmdr2: "Santimona",
    note: "User suggested Dragoon combo.",
  },
  // Add more known combinations as needed
];

// --- 2. DOM Elements ---
const shipSelect = document.getElementById("ship-select");
const commander1Select = document.getElementById("commander1-select");
const commander2Select = document.getElementById("commander2-select");
const analyzeButton = document.getElementById("analyze-button");
const resultsDiv = document.getElementById("synergy-results");

// --- 3. Populate Dropdowns ---
function populateDropdown(selectElement, data, valueField, textField) {
  // Clear existing options (except the default placeholder)
  selectElement.length = 1;
  // Sort data alphabetically by the text field for easier selection
  data.sort((a, b) => a[textField].localeCompare(b[textField]));
  // Add options
  data.forEach((item) => {
    const option = document.createElement("option");
    option.value = item[valueField];
    option.textContent = item[textField];
    selectElement.appendChild(option);
  });
}

// Populate on load
document.addEventListener("DOMContentLoaded", () => {
  populateDropdown(shipSelect, shipData, "name", "name");
  populateDropdown(commander1Select, commanderData, "name", "name");
  populateDropdown(commander2Select, commanderData, "name", "name");

  displayKnownCombinationsPanel(); // <<< CALL THE NEW FUNCTION HERE

  resultsDiv.innerHTML = "<p>Select a ship and two commanders to analyze.</p>"; // Initial message
});

// --- 4. Event Listener ---
analyzeButton.addEventListener("click", analyzeSynergy);

// --- 5. Synergy Analysis Logic (NEEDS YOUR CUSTOM RULES) ---
// --- 6. Synergy Analysis Logic (Incorporating Commander Types, Faction, Bonds) ---
function analyzeSynergy() {
  const selectedShipName = shipSelect.value;
  const commander1Name = commander1Select.value;
  const commander2Name = commander2Select.value;

  // --- Input Validation ---
  if (!selectedShipName || !commander1Name || !commander2Name) {
    resultsDiv.innerHTML =
      '<p style="color: red;">Please select a Ship, Commander 1, and Commander 2.</p>';
    return;
  }
  if (commander1Name === commander2Name) {
    resultsDiv.innerHTML =
      '<p style="color: red;">Please select two different commanders.</p>';
    return;
  }

  // --- Find Data Objects ---
  const ship = shipData.find((s) => s.name === selectedShipName);
  const cmdr1 = commanderData.find((c) => c.name === commander1Name);
  const cmdr2 = commanderData.find((c) => c.name === commander2Name);

  if (!ship || !cmdr1 || !cmdr2) {
    resultsDiv.innerHTML =
      '<p style="color: red;">Error: Could not find data for selected items. Please ensure commander/ship data is complete.</p>';
    return;
  }

  // --- Initialize Output HTML ---
  let outputHTML = "";

  // --- Add Ship Stats Section ---
  outputHTML += `<div class="ship-stats">`;
  outputHTML += `<h4>Selected Ship: ${ship.name} ${
    ship.faction ? "(" + ship.faction + ")" : ""
  }</h4>`; // Add faction if available
  outputHTML += `<ul>`;
  outputHTML += `<li>HP: <strong>${
    ship.hp !== undefined ? ship.hp.toLocaleString() : "N/A"
  }</strong></li>`;
  outputHTML += `<li>Firepower: <strong>${
    ship.firepower !== undefined ? ship.firepower.toLocaleString() : "N/A"
  }</strong></li>`;
  outputHTML += `<li>Energy: <strong>${
    ship.energy !== undefined ? ship.energy.toLocaleString() : "N/A"
  }</strong></li>`;
  outputHTML += `<li>Data Rate: <strong>${
    ship.dataRate !== undefined ? ship.dataRate : "N/A"
  }</strong></li>`;
  outputHTML += `<li>Armor: <strong>${
    ship.armor !== undefined ? ship.armor : "N/A"
  }</strong></li>`;
  outputHTML += `<h4>${ship.name} PVE Rank: ${ship.rank} tier ${
    ship.faction ? "(" + ship.faction + ")" : ""
  }</h4>`;
  outputHTML += `</ul>`;
  if (ship.role) outputHTML += `<p>Role: <em>${ship.role} </em></p>`;
  if (ship.bonuses && ship.bonuses.length > 0)
    outputHTML += `<p>Bonuses: <em>${ship.bonuses.join(", ")}</em></p>`;
  outputHTML += `</div><hr>`;

  // --- Add Commander Info Section ---
  outputHTML += `<div class="commander-info">`;
  outputHTML += `<h4>Commanders:</h4>`;
  outputHTML += `<p><strong>${cmdr1.name}</strong> ${
    cmdr1.faction ? "(" + cmdr1.faction + ")" : ""
  } - Type: <em>${cmdr1.type || "Unknown"}</em></p>`;
  outputHTML += `<p><strong>${cmdr2.name}</strong> ${
    cmdr2.faction ? "(" + cmdr2.faction + ")" : ""
  } - Type: <em>${cmdr2.type || "Unknown"}</em></p>`;
  outputHTML += `</div><hr>`;

  // --- *** Check against Known Combinations *** ---
  let isKnownCombo = false;
  let knownComboNote = "";
  let hasBondBonus = false;
  let bondName = "";
  let knownComboObj = knownCombinations.find(
    (combo) =>
      combo.ship === selectedShipName &&
      ((combo.cmdr1 === commander1Name && combo.cmdr2 === commander2Name) ||
        (combo.cmdr1 === commander2Name && combo.cmdr2 === commander1Name))
  );

  if (knownComboObj) {
    isKnownCombo = true;
    knownComboNote =
      knownComboObj.note || "This is a recognized effective combination.";
    if (knownComboObj.bond) {
      // Check for bond flag
      hasBondBonus = true;
      bondName = knownComboObj.bondName || "Special Bond";
    }
  }

  // --- *** SYNERGY CALCULATION *** ---
  let synergyScore = 0;
  let pros = [];
  let cons = [];
  let analysisText = "";

  if (isKnownCombo) {
    synergyScore = 5;
    pros.push(`<strong>🏆 Recognized Combo:</strong> ${knownComboNote}`);
    if (hasBondBonus) {
      synergyScore += 1; // Extra score for bond
      pros.push(`✨ Active Bond Bonus: ${bondName}!`);
    }
  }

  // --- Check Faction Affinity ---
  let factionMatch = false;
  if (
    ship.faction &&
    cmdr1.faction &&
    cmdr2.faction &&
    ship.faction === cmdr1.faction &&
    ship.faction === cmdr2.faction
  ) {
    factionMatch = true;
    synergyScore += 0.5; // Small bonus for potential
    pros.push(
      `🌍 Full Faction Affinity (${ship.faction}): Potential +5% Damage & +5% Damage Reduction (Requires Faction Embassy).`
    );
  }

  // --- Check Commander Types ---
  const type1 = cmdr1.type || "Unknown";
  const type2 = cmdr2.type || "Unknown";
  if (type1 !== "Unknown" && type2 !== "Unknown") {
    if (
      (type1 === "Offense" && type2 === "Tactics") ||
      (type1 === "Tactics" && type2 === "Offense")
    ) {
      synergyScore += 1.5;
      pros.push("Good role coverage (Offense + Tactics).");
    } else if (type1 === "Offense" && type2 === "Offense") {
      synergyScore += 0.5; // Can be good but risky
      pros.push("Strong offensive focus (Double Offense).");
      if (!isKnownCombo) cons.push("May lack sustain/defensive capabilities.");
    } else if (type1 === "Tactics" && type2 === "Tactics") {
      synergyScore += 0.5; // Can be good but slow
      pros.push("Strong defensive/sustain focus (Double Tactics).");
      if (!isKnownCombo) cons.push("May lack offensive output.");
    } else if (type1 === "Hybrid" || type2 === "Hybrid") {
      synergyScore += 1;
      pros.push("Includes a flexible Hybrid commander.");
    }
  } else {
    if (!isKnownCombo)
      pros.push("Commander type analysis limited due to missing data.");
  }

  // --- Skill Analysis (Keep previous logic, maybe adjust scores) ---
  const allSkills = [...(cmdr1.skills || []), ...(cmdr2.skills || [])];
  if (allSkills.length === 0 && !isKnownCombo) {
    analysisText =
      "<p><i>Note: Detailed skill data is missing for one or both commanders. Skill analysis is limited.</i></p>";
  } else if (allSkills.length > 0) {
    // Rule 1: Complementary (already partially covered by Type check) - maybe remove direct check here?

    // Rule 2: Stacking Skills relevant to Ship Role/Bonus
    let relevantStacks = 0;
    const skillCounts = {};
    allSkills.forEach((skill) => {
      const category = skill.category;
      if (category) {
        skillCounts[category] = (skillCounts[category] || 0) + 1;
        if (
          (category.toLowerCase().includes("missile") &&
            ship.role?.toLowerCase().includes("missile")) ||
          (category.toLowerCase().includes("drone") &&
            ship.role?.toLowerCase().includes("drone")) ||
          // ... (rest of the alignment check logic from previous version) ...
          (ship.bonuses &&
            ship.bonuses.some((bonus) =>
              bonus.toLowerCase().includes(category.toLowerCase())
            ))
        ) {
          // Reduced score impact slightly as Type/Faction checks add score now
          synergyScore += isKnownCombo ? 0.1 : 0.3;
          if (skillCounts[category] > 1) {
            synergyScore += isKnownCombo ? 0.3 : 0.7;
            relevantStacks++;
          }
        }
      }
    });

    if (relevantStacks > 0) {
      pros.push(
        `Good skill stacking (${relevantStacks} stack(s)) in areas relevant to the ${ship.name}.`
      );
    }
    Object.entries(skillCounts).forEach(([category, count]) => {
      if (count > 1) {
        pros.push(`Both commanders enhance ${category} skills.`);
      }
    });
    // --- Add more specific skill interaction rules here later ---
  }

  // --- *** Generate Final Output HTML *** ---
  let synergyLevel = calculateSynergyLevel(synergyScore, isKnownCombo);

  // Add Synergy Score and Intro Text AFTER the ship/commander info sections
  outputHTML += `<div class="synergy-score">Overall Synergy: ${synergyLevel} (${synergyScore.toFixed(
    1
  )})</div>`;
  outputHTML += `<p>Synergy analysis for <strong>${cmdr1.name}</strong> + <strong>${cmdr2.name}</strong> on a <strong>${ship.name}</strong>:</p>`;
  outputHTML += analysisText; // Add note about missing skill data if applicable

  // Add Pros list
  if (pros.length > 0) {
    outputHTML += '<div class="pros"><h4>Pros / Observations:</h4><ul>';
    pros.forEach((pro) => (outputHTML += `<li>${pro}</li>`));
    outputHTML += "</ul></div>";
  }

  // Add Cons list (usually suppressed for known combos)
  if (cons.length > 0 && !isKnownCombo) {
    outputHTML += '<div class="cons"><h4>Cons / Considerations:</h4><ul>';
    cons.forEach((con) => (outputHTML += `<li>${con}</li>`));
    outputHTML += "</ul></div>";
  }

  // Add message if no pros/cons found and not a known combo
  if (pros.length === 0 && cons.length === 0 && !isKnownCombo) {
    outputHTML +=
      "<p>Basic analysis complete. Add detailed data (Types, Factions, Skills) and refine synergy rules for more specific insights.</p>";
  }

  outputHTML += `<p><small>Note: Synergy score is based on known combinations, types, factions, and preliminary rules. Fill in detailed skill data for full accuracy.</small></p>`;

  // --- Update the results div ---
  resultsDiv.innerHTML = outputHTML;
}

// Helper function to convert score to a descriptive level (Adjust thresholds based on new scoring)
function calculateSynergyLevel(score, isKnown) {
  // Adjust thresholds as scoring logic evolves
  if (isKnown && score >= 6) return "Excellent (Known Combo)"; // Higher bar if bond/faction added score
  if (score >= 7) return "Excellent";
  if (score >= 5) return "Good";
  if (score >= 3) return "Fair";
  return "Potential Conflicts / Low";
}

// --- Add near the top with other DOM Elements ---
const toggleLibraryButton = document.getElementById("toggle-library-button");
const libraryOutputDiv = document.getElementById("data-library-output");
const libraryContentDiv = document.getElementById("library-content");

// --- Add near the other Event Listeners ---
toggleLibraryButton.addEventListener("click", toggleDataLibrary);


// --- Helper function to generate table body rows ---
// (Moved row generation logic here to reuse it after sorting)
function generateTableRows(dataArray, type) {
    let rowsHTML = '';
    dataArray.forEach(item => {
        rowsHTML += '<tr>';
        if (type === 'ship') {
            const ship = item;
            rowsHTML += `<td>${ship.name || 'N/A'}</td>`;
            rowsHTML += `<td class="col-image">`;
            if (ship.imageUrl) { // Check if imageUrl exists and is not empty
                 // Added loading="lazy" for performance if many images
                 // Added simple onerror to hide broken image links visually
                rowsHTML += `<img src="${ship.imageUrl}" alt="${ship.name || 'Ship'} thumbnail" class="ship-thumbnail" loading="lazy" onerror="this.style.visibility='hidden'">`;
            } else {
                rowsHTML += `<div class="no-image"></div>`; // Placeholder square if no image
            }
            rowsHTML += `<td>${ship.type || 'N/A'}</td>`;
            rowsHTML += `<td>${ship.faction || 'N/A'}</td>`;
            rowsHTML += `<td>${ship.role || 'N/A'}</td>`;
            rowsHTML += `<td class="col-number">${ship.hp !== undefined ? ship.hp.toLocaleString() : 'N/A'}</td>`;
            rowsHTML += `<td class="col-number">${ship.firepower !== undefined ? ship.firepower.toLocaleString() : 'N/A'}</td>`;
            rowsHTML += `<td class="col-number">${ship.energy !== undefined ? ship.energy.toLocaleString() : 'N/A'}</td>`;
            rowsHTML += `<td class="col-number">${ship.dataRate !== undefined ? ship.dataRate : 'N/A'}</td>`;
            rowsHTML += `<td class="col-number">${ship.armor !== undefined ? ship.armor : 'N/A'}</td>`;
            rowsHTML += `<td class="col-bonuses">${ship.bonuses && ship.bonuses.length > 0 ? ship.bonuses.join(', ') : 'N/A'}</td>`;
            rowsHTML += `<td>${ship.rank || 'N/A'}</td>`;
          } else if (type === 'commander') {
            const cmdr = item;
            // Modify the Name cell to include the image
            rowsHTML += `<td class="col-name-with-image">`; // Add a class for specific styling
            // Image part
            if (cmdr.imageUrl) {
                rowsHTML += `${cmdr.name || 'N/A'}<img src="${cmdr.imageUrl}" alt="${cmdr.name || 'Cmdr'} thumbnail" class="commander-thumbnail" loading="lazy" onerror="this.style.visibility='hidden'">`;
            } else {
                rowsHTML += `<div class="no-image commander-no-image"></div>`; // Placeholder square
            }
            rowsHTML += `<td>${cmdr.tier || 'N/A'}</td>`;
            rowsHTML += `<td>${cmdr.faction || 'N/A'}</td>`;
            rowsHTML += `<td>${cmdr.type || 'N/A'}</td>`;
            let skillsHTML = 'N/A';
            if (cmdr.skills && cmdr.skills.length > 0) {
                 skillsHTML = '<ul>';
                 cmdr.skills.forEach(skill => {
                    skillsHTML += `<li>${skill.name || skill.id || 'Unnamed Skill'}</li>`;
                 });
                 skillsHTML += '</ul>';
            }
            rowsHTML += `<td class="col-skills">${skillsHTML}</td>`;
        }
        rowsHTML += '</tr>';
    });
    return rowsHTML;
}

// --- Modified Function to Display Data with Sortable Headers ---
function displayDataLibrary() {
    libraryContentDiv.innerHTML = '';
    let libraryHTML = '';

    // --- Generate Ship Table ---
    libraryHTML += '<h3>Ships</h3>';
    libraryHTML += '<div class="table-container">';
    // Added id="ship-table"
    libraryHTML += '<table id="ship-table"><thead><tr>';
    // Added class="sortable-header", data-key, data-type
    libraryHTML += '<th class="sortable-header" data-key="name" data-type="string">Name</th>';
    libraryHTML += '<th>Img</th>'; // Add header for Image column (not sortable)
    libraryHTML += '<th class="sortable-header" data-key="type" data-type="string">Type</th>';
    libraryHTML += '<th class="sortable-header" data-key="faction" data-type="string">Faction</th>';
    libraryHTML += '<th class="sortable-header" data-key="role" data-type="string">Role</th>';
    libraryHTML += '<th class="col-number sortable-header" data-key="hp" data-type="number">HP</th>';
    libraryHTML += '<th class="col-number sortable-header" data-key="firepower" data-type="number">Firepower</th>';
    libraryHTML += '<th class="col-number sortable-header" data-key="energy" data-type="number">Energy</th>';
    libraryHTML += '<th class="col-number sortable-header" data-key="dataRate" data-type="number">Data Rate</th>';
    libraryHTML += '<th class="col-number sortable-header" data-key="armor" data-type="number">Armor</th>';
    libraryHTML += '<th class="col-bonuses">Bonuses</th>'; // Not sortable
    libraryHTML += '<th class=" sortable-header" data-key="rank"  data-type="string">Tier</th>'; 
    libraryHTML += '</tr></thead><tbody>';

    // Initial sort by name
    const sortedShips = [...shipData].sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    libraryHTML += generateTableRows(sortedShips, 'ship'); // Use helper function

    libraryHTML += '</tbody></table>';
    libraryHTML += '</div>';

    // --- Generate Commander Table ---
    libraryHTML += '<h3>Commanders</h3>';
    libraryHTML += '<div class="table-container">';
    // Added id="commander-table"
    libraryHTML += '<table id="commander-table"><thead><tr>';
     // Added class="sortable-header", data-key, data-type
    libraryHTML += '<th class="sortable-header" data-key="name" data-type="string">Name</th>';
    libraryHTML += '<th class="sortable-header" data-key="tier" data-type="string">Tier</th>'; // Sort tier as string (S > A > B...) might need custom logic for correct order
    libraryHTML += '<th class="sortable-header" data-key="faction" data-type="string">Faction</th>';
    libraryHTML += '<th class="sortable-header" data-key="type" data-type="string">Type</th>';
    libraryHTML += '<th class="col-skills">Skills (Names)</th>'; // Not sortable
    libraryHTML += '</tr></thead><tbody>';

    // Initial sort by name
    const sortedCommanders = [...commanderData].sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    libraryHTML += generateTableRows(sortedCommanders, 'commander'); // Use helper function

    libraryHTML += '</tbody></table>';
    libraryHTML += '</div>';

    libraryContentDiv.innerHTML = libraryHTML;

     // Add event listeners AFTER table HTML is added to the DOM
    addTableSortingListeners();
}

// --- Function to Add Sorting Listeners (using event delegation) ---
function addTableSortingListeners() {
    libraryContentDiv.querySelectorAll('th.sortable-header').forEach(header => {
        header.addEventListener('click', handleSortClick);
    });
}

// --- Function to Handle Header Click for Sorting ---
function handleSortClick(event) {
    const header = event.currentTarget; // Use currentTarget to ensure it's the TH
    const table = header.closest('table');
    const tbody = table.querySelector('tbody');
    const key = header.dataset.key;
    const type = header.dataset.type;
    const isShipTable = table.id === 'ship-table';
    const dataArray = isShipTable ? [...shipData] : [...commanderData]; // Use a copy

    // Sort the data array
    dataArray.sort((a, b) => {
        // Handle potentially missing values
        const valA = a[key] === undefined ? null : a[key];
        const valB = b[key] === undefined ? null : b[key];

        // Place null/undefined values at the end for ascending sort
        if (valA === null && valB === null) return 0;
        if (valA === null) return 1; // a is null, comes after b
        if (valB === null) return -1; // b is null, comes after a

        if (type === 'number') {
            return valA - valB; // Ascending numeric sort
        } else if (type === 'string') {
            // Special case for Tier sorting (S > A > B > C > D > Unknown/N/A)
             if (key === 'tier' || key === 'rank') {
                 const tierOrder = { 'S': 1, 'A': 2, 'B': 3, 'C': 4, 'D': 5 };
                 const tierA = tierOrder[valA] || 99; // Assign high number to unknowns
                 const tierB = tierOrder[valB] || 99;
                 return tierA - tierB;
             }
             // Default string sort
            return String(valA).localeCompare(String(valB)); // Ascending string sort
        } else {
            return 0; // Default no sort for other types
        }
    });

    // Re-render the table body with sorted data
    tbody.innerHTML = generateTableRows(dataArray, isShipTable ? 'ship' : 'commander');

    // Optional: Visual indicator for sorted column
    table.querySelectorAll('th.sortable-header').forEach(th => th.classList.remove('sorted-asc'));
    header.classList.add('sorted-asc');
}


// --- Function to Toggle Library Visibility (remains the same) ---
function toggleDataLibrary() {
    const isVisible = libraryOutputDiv.style.display !== 'none';
    if (isVisible) {
        libraryOutputDiv.style.display = 'none';
        toggleLibraryButton.textContent = 'Show Data Library';
    } else {
        displayDataLibrary(); // This now generates tables AND adds listeners
        libraryOutputDiv.style.display = 'block';
        toggleLibraryButton.textContent = 'Hide Data Library';
        libraryOutputDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// --- New Function to Toggle Library Visibility ---
function toggleDataLibrary() {
  const isVisible = libraryOutputDiv.style.display !== "none";
  if (isVisible) {
    // Hide it
    libraryOutputDiv.style.display = "none";
    toggleLibraryButton.textContent = "Show Data Library"; // Change button text
  } else {
    // Generate content and show it
    displayDataLibrary(); // Generate tables
    libraryOutputDiv.style.display = "block"; // Make section visible
    toggleLibraryButton.textContent = "Hide Data Library"; // Change button text
    // Optional: Scroll to the library
    libraryOutputDiv.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
