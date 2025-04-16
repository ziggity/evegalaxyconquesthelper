# evegalaxyconquesthelper
I. Future roadmap: Data & Detail Enhancements:

Complete Commander Skill Data: This is probably the most impactful addition. Manually input the specific details for each commander's Command, Active, and Passive talents (skills) - what they do, how they scale, triggers, etc. This would make the core "Analyze Synergy" function much more accurate and useful.
Implant Integration: Allow users to select implants (perhaps basic set bonuses or key individual implants) for commanders within the "Star Rating" section or a dedicated interface. The analysis/suggestion tools could then factor these potent modifiers in. (Requires implant data).
Detailed Ship Roles & Bonuses: Ensure the role and bonuses properties in shipData are accurate and comprehensive, as these are crucial for synergy calculations (e.g., matching commander missile skills to ships with missile bonuses).
II. Advanced Analysis & Suggestions:

Refined Synergy Logic: Improve the analyzeSynergy function significantly. Consider:
Lead vs. Deputy: Allow users to specify which commander is Lead/Deputy and apply the Offense/Tactics buffs accordingly (as explained in the text you provided).
Specific Skill Interactions: Program rules for known good/bad skill interactions (e.g., two skills boosting the same stat with diminishing returns, or skills that complement specific EWAR types).
Context (PvE/PvP): Add an option or toggle for the user to specify if they are looking for PvE or PvP synergy, as the "best" combos differ greatly. Filter known combos or adjust scoring based on this.
Enemy Counter Suggestion Tool: Implement the original idea:
User inputs an enemy ship type or key commanders.
The tool suggests the best counters from the user's owned/rated ships and commanders. (Requires building a "counter" dataset - which ship/commander counters what).
Role-Based Fleet Builder: Allow users to select a desired fleet objective (e.g., "Max Shield Tank", "Max Missile DPS", "Fast Tackle Wing", "Armor Logistics") and have the tool suggest ship/commander combinations from their owned items that best fulfill that role, possibly using star ratings to prioritize.
III. User Experience & Utilities:

Profile Management: Enhance the Profile system:
Allow users to name their profiles (instead of just "Profile 1/2/3").
Add options to create new profiles and delete unused ones.
Data Library Filtering/Searching: Add input fields above the Ship and Commander tables in the Data Library to allow filtering by Name, Faction, Type, or Role. This makes finding specific items much easier as the lists grow.
Import/Export Star Ratings: Allow users to export their current profile's star ratings (the ownedItemRatings object) to a text file (JSON) and import it back later. This is a great way to back up data or transfer it between browsers without needing a server.
Visual Fleet Display: Instead of just text lists for suggestions (like the Stamina Fleet), create a more graphical layout showing ship icons with the assigned commander icons arranged underneath.
"Shopping List" Generator: After suggesting a Stamina Fleet or High-Star Combo, identify which required ships/commanders the user doesn't own (rated 0 stars) and present this as a helpful list of items they might want to acquire in-game.
IV. (More Complex - Future Ideas)

Basic Ship Fitting Integration: Allow selecting core modules (weapons, tank) for a ship alongside commanders to give a rough estimate of DPS/Tank, showing how commanders impact it. (Very complex, requires module data & formulas).
Link External Resources: Make ship/commander names in the Data Library links to relevant EVE University, Zkillboard, or game wiki pages.
I'd recommend focusing first on enhancing the data (especially commander skills - #1) and improving the synergy logic (#4) as these directly increase the accuracy of the tool's core purpose. Adding Data Library filtering (#8) and Import/Export (#9) are great usability improvements. The Counter Suggestion (#5) and Role-Based Builder (#6) would be powerful new advisory features.