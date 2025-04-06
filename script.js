// --- 1. DATA DEFINITIONS (CRITICAL - REQUIRES YOUR INPUT) ---

// Example Ship Data (Expand significantly!)
const shipData = [
    { name: "Caracal", type: "Cruiser", role: "Missile DPS", bonuses: ["Missile Damage", "Missile Velocity"] },
    { name: "Vexor", type: "Cruiser", role: "Drone DPS", bonuses: ["Drone Damage", "Drone HP"] },
    { name: "Drake", type: "Battlecruiser", role: "Missile Tank", bonuses: ["Shield Resist", "Missile Damage"] },
    { name: "Rifter", type: "Frigate", role: "Speed/Tackle", bonuses: ["Turret Damage", "Speed"] },
    { name: "Dragoon", type: "Destroyer", role: "Energy Turret/Drone", bonuses: ["Energy Turret Dmg", "Drone Tracking"] }, // Example role/bonus
    { name: "Griffin", type: "Frigate", role: "EWAR", bonuses: ["ECM Strength", "ECM Range"] },
    { name: "Tristan", type: "Frigate", role: "Drone DPS", bonuses: ["Drone Damage", "Drone Tracking"] },
    { name: "Corax", type: "Destroyer", role: "Missile DPS", bonuses: ["Missile Damage", "Missile Velocity"] },
    { name: "Apocalypse", type: "Battleship", role: "Energy Turret DPS", bonuses: ["Energy Turret Dmg", "Energy Turret Range"] },
    { name: "Dramiel", type: "Frigate", role: "Speed/Turret DPS", bonuses: ["Turret Damage", "Speed"] },
    { name: "Scythe", type: "Cruiser", role: "Logistics (Armor)", bonuses: ["Remote Armor Repair", "Capacitor"] },
    { name: "Maelstrom", type: "Battleship", role: "Turret DPS/Tank", bonuses: ["Turret Damage", "Shield Boost"] },
    { name: "Breacher", type: "Frigate", role: "Missile DPS/Tank", bonuses: ["Missile Damage", "Shield Boost"] },
    // Ships added from your list
    { name: "Thunderchild", type: "Battleship", role: "Unknown Role", bonuses: [] }, // Add actual role/bonuses
    { name: "Hyperion", type: "Battleship", role: "Turret DPS/Tank", bonuses: ["Turret Damage", "Armor Repair"] },
    { name: "Inquisitor", type: "Frigate", role: "Logistics (Armor)", bonuses: ["Remote Armor Repair", "Nosferatu Drain"] },
    { name: "Oracle", type: "Battlecruiser", role: "Energy Turret DPS", bonuses: ["Energy Turret Dmg", "Energy Turret Range"] },
    // Add any other missing ships
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