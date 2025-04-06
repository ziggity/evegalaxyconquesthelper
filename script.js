// --- 1. DATA DEFINITIONS (CRITICAL - REQUIRES YOUR INPUT) ---

// Example Ship Data (Expand significantly!)
const shipData = [
     // Ships updated/added with stats from your list:
     { name: "Catalyst", type: "Destroyer", role: "Hybrid Turret DPS", bonuses: ["Hybrid Turret Damage", "Hybrid Turret Tracking"], hp: 4800, firepower: 2552, energy: 1648, dataRate: 88, armor: 9 },
     { name: "Rifter", type: "Frigate", role: "Speed/Tackle/Turret", bonuses: ["Turret Damage", "Speed", "Armor HP"], hp: 4900, firepower: 2630, energy: 1665, dataRate: 90, armor: 10 },
     { name: "Omen", type: "Cruiser", role: "Energy Turret DPS", bonuses: ["Energy Turret Damage", "Energy Turret Cap Use"], hp: 5700, firepower: 2643, energy: 1839, dataRate: 60, armor: 17 }, // Added Omen
     { name: "Caracal", type: "Cruiser", role: "Missile DPS", bonuses: ["Missile Damage", "Missile Velocity"], hp: 4899, firepower: 2610, energy: 1686, dataRate: 81, armor: 12 },
     { name: "Vexor", type: "Cruiser", role: "Drone DPS", bonuses: ["Drone Damage", "Drone HP"], hp: 4800, firepower: 1869, energy: 2022, dataRate: 55, armor: 18 },
     { name: "Stormbringer", type: "Cruiser", role: "Triglavian DPS", bonuses: ["Entropic Disintegrator Damage", "Energy Neut Range"], hp: 5100, firepower: 2667, energy: 1725, dataRate: 78, armor: 12 }, // Added Stormbringer
     { name: "Scythe", type: "Cruiser", role: "Logistics (Shield)", bonuses: ["Shield Transfer Amount", "Shield Transfer Range"], hp: 3399, firepower: 2661, energy: 2616, dataRate: 63, armor: 9 }, // Corrected role to Shield Logistics usually
     { name: "Dragoon", type: "Destroyer", role: "Energy Turret/Drone", bonuses: ["Energy Turret Dmg", "Drone Tracking"], hp: 4200, firepower: 2376, energy: 1716, dataRate: 53, armor: 7 },
     { name: "Griffin", type: "Frigate", role: "EWAR (ECM)", bonuses: ["ECM Strength", "ECM Range"], hp: 5400, firepower: 2065, energy: 2090, dataRate: 100, armor: 11 },
     { name: "Dramiel", type: "Frigate", role: "Speed/Turret DPS", bonuses: ["Turret Damage", "Speed"], hp: 4800, firepower: 2530, energy: 1670, dataRate: 91, armor: 9 },
     { name: "Gila", type: "Cruiser", role: "Drone/Missile DPS", bonuses: ["Drone Damage/HP", "Missile Damage"], hp: 4200, firepower: 2376, energy: 1716, dataRate: 47, armor: 9 }, // Added Gila
     { name: "Oracle", type: "Battlecruiser", role: "Energy Turret DPS", bonuses: ["Energy Turret Dmg", "Energy Turret Range"], hp: 4600, firepower: 2860, energy: 1978, dataRate: 60, armor: 15 },
     { name: "Drake", type: "Battlecruiser", role: "Missile Tank", bonuses: ["Shield Resist", "Missile Damage"], hp: 7200, firepower: 1914, energy: 1826, dataRate: 48, armor: 15 },
     { name: "Tristan", type: "Frigate", role: "Drone DPS", bonuses: ["Drone Damage", "Drone Tracking"], hp: 3300, firepower: 2570, energy: 1625, dataRate: 88, armor: 9 },
     { name: "Orthrus", type: "Cruiser", role: "Missile DPS/EWAR", bonuses: ["Missile Damage", "Warp Scramble Range"], hp: 4800, firepower: 2631, energy: 1686, dataRate: 81, armor: 12 }, // Added Orthrus
     { name: "Apocalypse", type: "Battleship", role: "Energy Turret DPS", bonuses: ["Energy Turret Dmg", "Energy Turret Range"], hp: 5800, firepower: 2244, energy: 2244, dataRate: 47, armor: 17 },
     { name: "Maelstrom", type: "Battleship", role: "Turret DPS/Tank", bonuses: ["Turret Damage", "Shield Boost"], hp: 5400, firepower: 2156, energy: 2024, dataRate: 64, armor: 17 },
     { name: "Thunderchild", type: "Battleship", role: "Triglavian DPS/Tank", bonuses: ["Entropic Disintegrator Damage", "Armor HP"], hp: 7200, firepower: 1890, energy: 2047, dataRate: 17, armor: 35 },
     { name: "Magnate", type: "Frigate", role: "Exploration/Combat", bonuses: ["Scan Probe Strength", "Relic/Data Bonus"], hp: 4600, firepower: 2495, energy: 1510, dataRate: 84, armor: 9 }, // Added Magnate
     { name: "Heron", type: "Frigate", role: "Exploration", bonuses: ["Scan Probe Strength", "Relic/Data Bonus"], hp: 5100, firepower: 2055, energy: 1930, dataRate: 94, armor: 10 }, // Added Heron
     { name: "Corax", type: "Destroyer", role: "Missile DPS", bonuses: ["Missile Damage", "Missile Velocity"], hp: 4400, firepower: 2792, energy: 1824, dataRate: 72, armor: 10 },
     { name: "Incursus", type: "Frigate", role: "Combat/Armor Tank", bonuses: ["Hybrid Turret Damage", "Armor Repair Bonus"], hp: 5100, firepower: 2120, energy: 1865, dataRate: 94, armor: 10 }, // Added Incursus
     { name: "Algos", type: "Destroyer", role: "Drone DPS", bonuses: ["Drone Damage", "Drone Optimal Range"], hp: 4600, firepower: 2436, energy: 1572, dataRate: 84, armor: 9 }, // Added Algos
     { name: "Breacher", type: "Frigate", role: "Missile DPS/Tank", bonuses: ["Missile Damage", "Shield Boost"], hp: 5200, firepower: 2415, energy: 1675, dataRate: 61, armor: 13 },
     { name: "Bellicose", type: "Cruiser", role: "EWAR/Missile", bonuses: ["Target Painter Effect", "Missile Velocity"], hp: 5898, firepower: 2268, energy: 1635, dataRate: 45, armor: 8 }, // Added Bellicose
     { name: "Worm", type: "Frigate", role: "Drone/Missile DPS", bonuses: ["Drone Damage/HP", "Missile Damage"], hp: 4600, firepower: 1760, energy: 1910, dataRate: 57, armor: 14 }, // Added Worm
     { name: "Inquisitor", type: "Frigate", role: "Logistics (Armor)/Combat", bonuses: ["Remote Armor Repair", "Nosferatu Drain"], hp: 4700, firepower: 2520, energy: 2520, dataRate: 72, armor: 7 },
     { name: "Stratios", type: "Cruiser", role: "Exploration/Combat/Drone", bonuses: ["Scan Probe Strength", "Drone Damage/HP"], hp: 3000, firepower: 1827, energy: 2793, dataRate: 65, armor: 12 }, // Added Stratios
     { name: "Navitas", type: "Frigate", role: "Logistics (Armor)/Mining", bonuses: ["Remote Armor Repair", "Mining Laser Range"], hp: 5900, firepower: 1530, energy: 1530, dataRate: 49, armor: 9 }, // Added Navitas
     { name: "Condor", type: "Frigate", role: "Missile DPS/Tackle", bonuses: ["Missile Damage", "Missile Velocity"], hp: 3900, firepower: 2085, energy: 1350, dataRate: 72, armor: 8 }, // Added Condor
     { name: "Tormentor", type: "Frigate", role: "Energy Turret/Combat", bonuses: ["Energy Turret Damage", "Energy Turret Cap Use"], hp: 4700, firepower: 1800, energy: 1800, dataRate: 62, armor: 9 }, // Added Tormentor
     { name: "Cruor", type: "Frigate", role: "Energy Vampire/Web", bonuses: ["Nosferatu Drain", "Stasis Web Range"], hp: 4000, firepower: 2160, energy: 2160, dataRate: 62, armor: 6 }, // Added Cruor
     { name: "Impairor", type: "Frigate", role: "Rookie Ship", bonuses: [], hp: 3400, firepower: 1330, energy: 1330, dataRate: 62, armor: 7 }, // Added Impairor
     { name: "Hyperion", type: "Battleship", role: "Turret DPS/Tank", bonuses: ["Turret Damage", "Armor Repair"], hp: 0, firepower: 0, energy: 0, dataRate: 0, armor: 0 }, // Placeholder stats
 ];

// Example Commander Data Structure (Expand SIGNIFICANTLY with ALL commanders, skills, factions)
const commanderData = [
     // Existing commanders from image (use image names primarily)...
     { name: "Falek", tier: "S", faction: "Caldari?", skills: [/* Add skills */] },
     { name: "Kezti", tier: "S", faction: "Gallente?", skills: [/* Add skills */] },
     { name: "Victar", tier: "S", faction: "Minmatar?", skills: [/* Add skills */] },
     { name: "Ponk", tier: "S", faction: "Gallente?", skills: [/* Add skills */] },
     { name: "Anle", tier: "S", faction: "Amarr?", skills: [/* Add skills */] },
     { name: "Ameine", tier: "S", faction: "Amarr?", skills: [/* Add skills */] }, // Use this for Ameline, Amile, Mens?
     { name: "Cancu", tier: "S", faction: "Caldari?", skills: [/* Add skills */] },
     { name: "Saminona", tier: "S", faction: "Amarr?", skills: [/* Add skills */] }, // Use this for Santimona
     { name: "Mia", tier: "S", faction: "Minmatar?", skills: [/* Add skills */] },   // Use this for Mila
     { name: "Drae", tier: "A", faction: "Minmatar?", skills: [/* Add skills */] },
     { name: "Kasora", tier: "A", faction: "Caldari?", skills: [/* Add skills */] },
     { name: "Yun", tier: "A", faction: "Amarr?", skills: [/* Add skills */] },
     { name: "Blague", tier: "A", faction: "Minmatar?", skills: [/* Add skills */] },
     { name: "Brokara", tier: "A", faction: "Gallente?", skills: [/* Add skills */] },
     { name: "Gear", tier: "B", faction: "Gallente?", skills: [/* Add skills */] },
     { name: "Cerb", tier: "B", faction: "Unknown", skills: [/* Add skills */] }, // Placeholder name?
     { name: "Bishop", tier: "B", faction: "Amarr?", skills: [/* Add skills */] }, // Placeholder name?
     { name: "Carasten", tier: "B", faction: "Unknown", skills: [/* Add skills */] }, // Placeholder name?
     { name: "Flafferty", tier: "B", faction: "Unknown", skills: [/* Add skills */] }, // Use this for Flaherty
     { name: "Fass", tier: "B", faction: "Unknown", skills: [/* Add skills */] }, // Use this for Faus
     { name: "Concord Overseer", tier: "B", faction: "CONCORD", skills: [/* Add skills */] }, // Example faction
     { name: "Duvalle Researcher", tier: "B", faction: "Unknown", skills: [/* Add skills */] },
     { name: "Kroger", tier: "B", faction: "Unknown", skills: [/* Add skills */] },
     { name: "Thakker Analyst", tier: "B", faction: "Unknown", skills: [/* Add skills */] },
     { name: "Karvin", tier: "C", faction: "Minmatar?", skills: [/* Add skills */] }, // Use this for Korvin
     { name: "Morde Yorlas", tier: "C", faction: "Guristas?", skills: [/* Add skills */] }, // Use this for Morda
     { name: "Otro", tier: "C", faction: "Guristas?", skills: [/* Add skills */] },
     { name: "Viola", tier: "C", faction: "Unknown", skills: [/* Add skills */] },
     { name: "Karth", tier: "C", faction: "Unknown", skills: [/* Add skills */] },
     { name: "DRE Explorer", tier: "C", faction: "Unknown", skills: [/* Add skills */] },
     { name: "Baer", tier: "C", faction: "Unknown", skills: [/* Add skills */] },
     { name: "Bland Rader Marsac", tier: "C", faction: "Unknown", skills: [/* Add skills */] },
     // D Tier from image... Janus, Lai Dai Engineer, etc.
     { name: "Yorlas", tier: "C", faction: "Guristas?", skills: [/* Add skills */] }, // If separate from Morde Yorlas? Usually paired name. Assume Morde Yorlas covers this.
     // Commanders added from your list (placeholders)
     { name: "Chelm", tier: "Unknown", faction: "Unknown", skills: [/* Add skills */] },
     { name: "Thumbar", tier: "Unknown", faction: "Unknown", skills: [/* Add skills */] },
     { name: "Yana", tier: "Unknown", faction: "Unknown", skills: [/* Add skills */] },
     { name: "Kaylyn", tier: "Unknown", faction: "Unknown", skills: [/* Add skills */] },
     { name: "Jamyl I", tier: "Unknown", faction: "Amarr", skills: [/* Add skills */] }, // Example faction
     // !!! ADD ALL OTHERS + FILL IN SKILLS/FACTIONS/TIERS !!!
];
const knownCombinations = [
    { ship: "Thunderchild", cmdr1: "Baer", cmdr2: "Saminona", note: "User reported: Pulled alt account through all of Season." },
    { ship: "Vexor", cmdr1: "Victar", cmdr2: "Ponk", note: "Popular Vexor pairing." }, // Assumed Victor=Victar, Pomik=Ponk
    { ship: "Rifter", cmdr1: "Karth", cmdr2: "Yun", note: "User reported: Solid mid-game potential after Decoding Error changes. Ship and Karth need at least 2 stars." },
    { ship: "Hyperion", cmdr1: "Flafferty", cmdr2: "Blague", note: "User reported: Combo of early turn healing (Flaherty) and late-turn recovery (Hyperion ship ability?)." }, // Assumed Flaherty
    { ship: "Inquisitor", cmdr1: "Fass", cmdr2: "Kezti", note: "Common Inquisitor setup." }, // Assumed Faus=Fass
    { ship: "Dramiel", cmdr1: "Karth", cmdr2: "Ameine", note: "Effective Dramiel DPS combo." }, // Assumed Mens=Ameine
    { ship: "Scythe", cmdr1: "Bishop", cmdr2: "Ameine", note: "Strong Scythe logistics pair." }, // Assumed Ameline=Ameine
    { ship: "Maelstrom", cmdr1: "Karth", cmdr2: "Ameine", note: "Solid Maelstrom setup." }, // Assumed Mens=Ameine
    { ship: "Rifter", cmdr1: "Karth", cmdr2: "Morde Yorlas", note: "Alternative Rifter DPS/Control." }, // Assumed Yorlas is part of Morde Yorlas
    { ship: "Oracle", cmdr1: "Saminona", cmdr2: "Flafferty", note: "Known Oracle pairing." }, // Assumed Santimona & Flaherty
    { ship: "Thunderchild", cmdr1: "Saminona", cmdr2: "Chelm", note: "Alternative Thunderchild setup." }, // Assumed Santimona
    { ship: "Breacher", cmdr1: "Bishop", cmdr2: "Thumbar", note: "Effective Breacher combo." },
    { ship: "Dragoon", cmdr1: "Kezti", cmdr2: "Ponk", note: "Strong Dragoon pair." }, // Assumed Pomik=Ponk
    { ship: "Caracal", cmdr1: "Otro", cmdr2: "Morde Yorlas", note: "User suggested Caracal combo." }, // Assumed Morda=Morde Yorlas
    { ship: "Vexor", cmdr1: "Saminona", cmdr2: "Gear", note: "User suggested Vexor combo." }, // Assumed Santimona
    { ship: "Tristan", cmdr1: "Karvin", cmdr2: "Yana", note: "User suggested Tristan combo." }, // Assumed Korvin=Karvin
    { ship: "Griffin", cmdr1: "Kezti", cmdr2: "Ameine", note: "User suggested Griffin EWAR/Drone combo." }, // Assumed Amile=Ameine
    { ship: "Drake", cmdr1: "Saminona", cmdr2: "Falek", note: "User suggested Drake combo." }, // Assumed Santimona
    { ship: "Griffin", cmdr1: "Otro", cmdr2: "Mia", note: "User suggested Griffin EWAR combo." }, // Assumed Mila=Mia
    { ship: "Tristan", cmdr1: "Karth", cmdr2: "Morde Yorlas", note: "User suggested Tristan combo." }, // Assumed Yorlas = Morde Yorlas
    { ship: "Corax", cmdr1: "Kaylyn", cmdr2: "Ameine", note: "User suggested Corax combo." }, // Assumed Amile=Ameine
    { ship: "Apocalypse", cmdr1: "Jamyl I", cmdr2: "Falek", note: "User suggested Apocalypse combo." },
    // Add more known combinations as needed
];

// --- 2. DOM Elements ---
const shipSelect = document.getElementById('ship-select');
const commander1Select = document.getElementById('commander1-select');
const commander2Select = document.getElementById('commander2-select');
const analyzeButton = document.getElementById('analyze-button');
const resultsDiv = document.getElementById('synergy-results');

// --- 3. Populate Dropdowns ---
function populateDropdown(selectElement, data, valueField, textField) {
    // Clear existing options (except the default placeholder)
    selectElement.length = 1;
    // Sort data alphabetically by the text field for easier selection
    data.sort((a, b) => a[textField].localeCompare(b[textField]));
    // Add options
    data.forEach(item => {
        const option = document.createElement('option');
        option.value = item[valueField];
        option.textContent = item[textField];
        selectElement.appendChild(option);
    });
}

// Populate on load
document.addEventListener('DOMContentLoaded', () => {
    populateDropdown(shipSelect, shipData, 'name', 'name');
    populateDropdown(commander1Select, commanderData, 'name', 'name');
    populateDropdown(commander2Select, commanderData, 'name', 'name');
    resultsDiv.innerHTML = '<p>Select a ship and two commanders to analyze.</p>'; // Initial message
});


// --- 4. Event Listener ---
analyzeButton.addEventListener('click', analyzeSynergy);

// --- 5. Synergy Analysis Logic (NEEDS YOUR CUSTOM RULES) ---
function analyzeSynergy() {
    const selectedShipName = shipSelect.value;
    const commander1Name = commander1Select.value;
    const commander2Name = commander2Select.value;

    // --- Input Validation ---
    if (!selectedShipName || !commander1Name || !commander2Name) {
        resultsDiv.innerHTML = '<p style="color: red;">Please select a Ship, Commander 1, and Commander 2.</p>';
        return;
    }
    if (commander1Name === commander2Name) {
        resultsDiv.innerHTML = '<p style="color: red;">Please select two different commanders.</p>';
        return;
    }

    // --- Find Data Objects ---
    const ship = shipData.find(s => s.name === selectedShipName);
    const cmdr1 = commanderData.find(c => c.name === commander1Name);
    const cmdr2 = commanderData.find(c => c.name === commander2Name);

    if (!ship || !cmdr1 || !cmdr2) {
        resultsDiv.innerHTML = '<p style="color: red;">Error: Could not find data for selected items.</p>'; // Should not happen if dropdowns are populated correctly
        return;
    }

    // --- *** SYNERGY CALCULATION (Placeholder - Needs heavy customization) *** ---
    let synergyScore = 0;
    let pros = [];
    let cons = [];
    let analysisText = "";

    // Combine all skills from both commanders
    const allSkills = [...cmdr1.skills, ...cmdr2.skills];

    // Example Rule 1: Complementary Roles (Offense + Defense)
    const hasOffense = allSkills.some(skill => skill.type === 'Weapon' || skill.type === 'Drone');
    const hasDefense = allSkills.some(skill => skill.type === 'Defense');
    if (hasOffense && hasDefense) {
        synergyScore += 2;
        pros.push("Covers both Offensive and Defensive aspects.");
    } else if (hasOffense && !hasDefense) {
        cons.push("Lacks dedicated defensive skills.");
    } else if (!hasOffense && hasDefense) {
        cons.push("Lacks dedicated offensive skills.");
    }

    // Example Rule 2: Stacking Skills relevant to Ship Role/Bonus
    let relevantStacks = 0;
    const skillCounts = {}; // Count occurrences of skill *categories*

    allSkills.forEach(skill => {
        const category = skill.category; // e.g., Missile, Drone, Shield, Armor, Energy Turret
        if (category) { // Ensure category exists
             skillCounts[category] = (skillCounts[category] || 0) + 1;

             // Check if skill category aligns with ship bonus/role
             if (ship.role.toLowerCase().includes(category.toLowerCase()) ||
                 (ship.bonuses && ship.bonuses.some(bonus => bonus.toLowerCase().includes(category.toLowerCase()))))
             {
                 // Bonus points if the skill matches the ship's specialty
                 synergyScore += 0.5;
                 if (skillCounts[category] > 1) { // More points if they *stack* in a relevant area
                      synergyScore += 1;
                      relevantStacks++;
                 }
             }
        }
    });

     if (relevantStacks > 0) {
        pros.push(`Good stacking in key areas relevant to ${ship.name} (${relevantStacks} stack(s)).`);
     }
     // Identify highly stacked areas (you might want specific text)
     Object.entries(skillCounts).forEach(([category, count]) => {
         if (count > 1) {
            pros.push(`Both commanders enhance ${category} skills.`);
         }
     });


    // Example Rule 3: Faction (Simple Check - adjust logic as needed)
    if (cmdr1.faction && cmdr2.faction && cmdr1.faction === cmdr2.faction) {
       // synergyScore += 1; // Optional bonus? Or maybe it doesn't matter?
       // pros.push("Commanders share the same faction background.");
    }

    // --- Generate Output HTML ---
    let outputHTML = `<div class="synergy-score">Overall Synergy: ${calculateSynergyLevel(synergyScore)} (${synergyScore.toFixed(1)})</div>`;
    outputHTML += `<p>Analysis for <strong>${cmdr1.name}</strong> + <strong>${cmdr2.name}</strong> on a <strong>${ship.name}</strong>:</p>`;

    if (pros.length > 0) {
        outputHTML += '<div class="pros"><h4>Pros:</h4><ul>';
        pros.forEach(pro => outputHTML += `<li>${pro}</li>`);
        outputHTML += '</ul></div>';
    }

    if (cons.length > 0) {
        outputHTML += '<div class="cons"><h4>Cons/Considerations:</h4><ul>';
        cons.forEach(con => outputHTML += `<li>${con}</li>`);
        outputHTML += '</ul></div>';
    }

     if (pros.length === 0 && cons.length === 0) {
        outputHTML += "<p>Basic analysis complete. Refine synergy rules for more details.</p>"
     }

    outputHTML += `<p><small>Note: Synergy score is based on preliminary rules and defined data. Requires detailed skill information and refined logic for full accuracy.</small></p>`;


    resultsDiv.innerHTML = outputHTML;
}

// Helper function to convert score to a descriptive level (adjust thresholds)
function calculateSynergyLevel(score, isKnown) {
    // Known combos get "Excellent" more easily
    if (isKnown && score >= 5) return "Excellent (Known Combo)";
    if (score >= 6) return "Excellent"; // High threshold if not known
    if (score >= 4) return "Good";
    if (score >= 2) return "Fair";
    return "Potential Conflicts / Low";
}

// --- 6. Synergy Analysis Logic (Updated to show ship stats) ---
function analyzeSynergy() {
    const selectedShipName = shipSelect.value;
    const commander1Name = commander1Select.value;
    const commander2Name = commander2Select.value;

    // --- Input Validation ---
    if (!selectedShipName || !commander1Name || !commander2Name) {
        resultsDiv.innerHTML = '<p style="color: red;">Please select a Ship, Commander 1, and Commander 2.</p>';
        return;
    }
    if (commander1Name === commander2Name) {
        resultsDiv.innerHTML = '<p style="color: red;">Please select two different commanders.</p>';
        return;
    }

    // --- Find Data Objects ---
    const ship = shipData.find(s => s.name === selectedShipName);
    const cmdr1 = commanderData.find(c => c.name === commander1Name);
    const cmdr2 = commanderData.find(c => c.name === commander2Name);

    if (!ship || !cmdr1 || !cmdr2) {
        resultsDiv.innerHTML = '<p style="color: red;">Error: Could not find data for selected items. Please ensure commander/ship data is complete.</p>';
        return;
    }

    // --- Initialize Output HTML ---
    let outputHTML = ''; // Start fresh

    // --- *** Add Ship Stats Section *** ---
    outputHTML += `<div class="ship-stats">`;
    outputHTML += `<h4>Selected Ship: ${ship.name} (Stats)</h4>`;
    outputHTML += `<ul>`;
    // Check if stats exist before displaying, show 'N/A' otherwise
    outputHTML += `<li>HP: <strong>${ship.hp !== undefined ? ship.hp.toLocaleString() : 'N/A'}</strong></li>`;
    outputHTML += `<li>Firepower: <strong>${ship.firepower !== undefined ? ship.firepower.toLocaleString() : 'N/A'}</strong></li>`;
    outputHTML += `<li>Energy: <strong>${ship.energy !== undefined ? ship.energy.toLocaleString() : 'N/A'}</strong></li>`;
    outputHTML += `<li>Data Rate: <strong>${ship.dataRate !== undefined ? ship.dataRate : 'N/A'}</strong></li>`;
    outputHTML += `<li>Armor: <strong>${ship.armor !== undefined ? ship.armor : 'N/A'}</strong></li>`;
    outputHTML += `</ul>`;
     // Add Role and Bonuses if they exist
    if(ship.role) outputHTML += `<p>Role: <em>${ship.role}</em></p>`;
    if(ship.bonuses && ship.bonuses.length > 0) outputHTML += `<p>Bonuses: <em>${ship.bonuses.join(', ')}</em></p>`;
    outputHTML += `</div><hr>`; // Add a horizontal line after stats

    // --- *** Check against Known Combinations *** ---
    let isKnownCombo = false;
    let knownComboNote = "";
    let knownComboObj = knownCombinations.find(combo =>
        combo.ship === selectedShipName &&
        ((combo.cmdr1 === commander1Name && combo.cmdr2 === commander2Name) ||
         (combo.cmdr1 === commander2Name && combo.cmdr2 === commander1Name))
    );

    if (knownComboObj) {
        isKnownCombo = true;
        knownComboNote = knownComboObj.note || "This is a recognized effective combination.";
    }

    // --- *** SYNERGY CALCULATION *** ---
    let synergyScore = 0;
    let pros = [];
    let cons = [];
    let analysisText = "";

    if (isKnownCombo) {
        synergyScore = 5;
        // Add note to pros list instead of directly to outputHTML here
        pros.push(`<strong>🏆 Recognized Combo:</strong> ${knownComboNote}`);
    }

    const allSkills = [...(cmdr1.skills || []), ...(cmdr2.skills || [])];

    if (allSkills.length === 0 && !isKnownCombo) {
         analysisText = "<p><i>Note: Detailed skill data is missing for one or both commanders. Analysis is limited.</i></p>";
     } else if (allSkills.length > 0) {
        // Example Rule 1: Complementary Roles
        const hasOffense = allSkills.some(skill => skill.type === 'Weapon' || skill.type === 'Drone');
        const hasDefense = allSkills.some(skill => skill.type === 'Defense');
        if (hasOffense && hasDefense) {
            synergyScore += isKnownCombo ? 1 : 2;
            pros.push("Covers both Offensive and Defensive aspects.");
        } else if (hasOffense && !hasDefense) {
             if (!isKnownCombo) cons.push("Potentially lacks dedicated defensive skills.");
        } else if (!hasOffense && hasDefense) {
              if (!isKnownCombo) cons.push("Potentially lacks dedicated offensive skills.");
        }

        // Example Rule 2: Stacking Skills relevant to Ship Role/Bonus
        let relevantStacks = 0;
        const skillCounts = {};
        allSkills.forEach(skill => {
             const category = skill.category;
            if (category) {
                skillCounts[category] = (skillCounts[category] || 0) + 1;
                // Check alignment with ship stats/role/bonuses (Example check - refine!)
                 if (
                    (category.toLowerCase().includes('missile') && ship.role?.toLowerCase().includes('missile')) ||
                    (category.toLowerCase().includes('drone') && ship.role?.toLowerCase().includes('drone')) ||
                    (category.toLowerCase().includes('turret') && ship.role?.toLowerCase().includes('turret')) ||
                    (category.toLowerCase().includes('shield') && (ship.role?.toLowerCase().includes('shield') || ship.bonuses?.some(b => b.toLowerCase().includes('shield')))) ||
                    (category.toLowerCase().includes('armor') && (ship.role?.toLowerCase().includes('armor') || ship.bonuses?.some(b => b.toLowerCase().includes('armor')))) ||
                    (ship.bonuses && ship.bonuses.some(bonus => bonus.toLowerCase().includes(category.toLowerCase())))
                 )
                 {
                    synergyScore += isKnownCombo ? 0.2 : 0.5;
                    if (skillCounts[category] > 1) {
                        synergyScore += isKnownCombo ? 0.5 : 1;
                        relevantStacks++;
                    }
                }
            }
        });

        if (relevantStacks > 0) {
            pros.push(`Good skill stacking (${relevantStacks} stack(s)) in areas relevant to the ${ship.name}.`);
        }
        Object.entries(skillCounts).forEach(([category, count]) => {
             if (count > 1) {
                pros.push(`Both commanders enhance ${category} skills.`);
             }
        });
        // --- Add more rules here ---
    }

    // --- *** Generate Final Output HTML *** ---
    let synergyLevel = calculateSynergyLevel(synergyScore, isKnownCombo);

     // Add Synergy Score and Intro Text AFTER the ship stats section
    outputHTML += `<div class="synergy-score">Overall Synergy: ${synergyLevel} (${synergyScore.toFixed(1)})</div>`;
    outputHTML += `<p>Synergy analysis for <strong>${cmdr1.name}</strong> + <strong>${cmdr2.name}</strong> on a <strong>${ship.name}</strong>:</p>`;
    outputHTML += analysisText; // Add note about missing skill data if applicable

    // Add Pros list
    if (pros.length > 0) {
        outputHTML += '<div class="pros"><h4>Pros / Observations:</h4><ul>';
        pros.forEach(pro => outputHTML += `<li>${pro}</li>`);
        outputHTML += '</ul></div>';
    }

    // Add Cons list (usually suppressed for known combos)
    if (cons.length > 0 && !isKnownCombo) {
        outputHTML += '<div class="cons"><h4>Cons / Considerations:</h4><ul>';
        cons.forEach(con => outputHTML += `<li>${con}</li>`);
        outputHTML += '</ul></div>';
    }

     // Add message if no pros/cons found and not a known combo
     if (pros.length === 0 && cons.length === 0 && !isKnownCombo) {
        outputHTML += "<p>Basic analysis complete. Add detailed skill data and refine synergy rules for more specific insights.</p>"
     }

    outputHTML += `<p><small>Note: Synergy score is based on known combinations and preliminary rules. Fill in detailed skill data for full accuracy.</small></p>`;


    // --- Update the results div ---
    resultsDiv.innerHTML = outputHTML;
}