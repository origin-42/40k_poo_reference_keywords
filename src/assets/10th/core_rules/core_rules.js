const rules = [
    {
        name: "Determining Visibility",
        keywords: ["visible", "visibility", "determining visibility"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167659/40k/core_rules/10th_ed/visibility_rnckkv.png"
    },
    {
        name: "Unit Coherency",
        keywords: ["coherency", "unit coherency", "coherent"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167659/40k/core_rules/10th_ed/unit_coherency_vb2t53.png"
    },
    {
        name: "Strategic Reserves",
        keywords: ["strategic", "reserves", "reserve", "strategic reserves"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167659/40k/core_rules/10th_ed/strategic_reserves_osdnrz.png"
    },
    {
        name: "Reinforcements",
        keywords: ["reinforcements", "reinforcement", "reserves", "reserve"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167659/40k/core_rules/10th_ed/strategic_reserves_osdnrz.png"
    },
    {
        name: "Muster Your Army",
        keywords: ["muster your army", "game", "how to play"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167658/40k/core_rules/10th_ed/muster_your_army_rvnfwq.png"
    },
    {
        name: "Muster Your Army",
        keywords: ["muster your army", "game", "how to play"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167659/40k/core_rules/10th_ed/muster_your_army_cont_dx4l1o.png"
    },
    {
        name: "Only War",
        keywords: ["only war", "how to play"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167659/40k/core_rules/10th_ed/muster_your_army_cont_dx4l1o.png"
    },
    {
        name: "Only War",
        keywords: ["only war", "how to play"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167658/40k/core_rules/10th_ed/missions_cont_3_vzmhr9.png"
    },
    {
        name: "Objective Markers",
        keywords: ["only war", "how to play", "mission map", "mission"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167658/40k/core_rules/10th_ed/missions_cont_ugyekb.png"
    },
    {
        name: "Objective Markers",
        keywords: ["only war", "how to play", "missions", "mission"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167658/40k/core_rules/10th_ed/missions_pngopa.png"
    },
    {
        name: "Engagement Range",
        keywords: ["engagement", "engagement range", "in range", "range", "distance", "within distance", "measuring distance", "terrain distance"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167658/40k/core_rules/10th_ed/engagement_range_cbmdcw.png"
    },
    {
        name: "The Battle Round",
        keywords: ["battle round", "battle"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167658/40k/core_rules/10th_ed/battle_round_uwdd9n.png"
    },
    {
        name: "Deployment Abilities",
        keywords: ["deployment abilities", "deployment", "abilities", "deep", "deep strike", "scouts", "infiltrators", "leader"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167657/40k/core_rules/10th_ed/deployment_abilities_sxp44o.png"
    },
    {
        name: "Example Battlefield",
        keywords: ["maps", "example battlefield", "battlefield"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167657/40k/core_rules/10th_ed/example_battlefield_cont_4_cnknkh.png"
    },
    {
        name: "Datasheets",
        keywords: ["datasheet", "datasheet information", "profiles", "abilities", "weapons", "keywords", "unit composition and other rules", "composition", "unit composition", "wargear option", "wargear", "leadership", "test", "tests", "characteristic", "characteristics", "aura", "auras", "aura abilities", "abilities", "psychic", "psychic weapons", "psychic weapon", "psychic weapons and abilities"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167657/40k/core_rules/10th_ed/datasheet_azg8x4.png"
    },
    {
        name: "Dice",
        keywords: ["dice", "re-rolls", "reroll", "rerolls", "re rolls", "re roll", "roll off", "roll-off", "roll-offs", "roll off", "sequence", "sequencing", "dice rolling", "dice roll", "roll"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167657/40k/core_rules/10th_ed/dice_eoepfu.png"
    },
    {
        name: "Example Battlefield",
        keywords: ["maps", "example battlefield", "battlefield"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167657/40k/core_rules/10th_ed/example_battlefield_cont_3_mpisrv.png"
    },
    {
        name: "Aircraft",
        keywords: ["aircraft", "deploying aircraft", "hover", "deploying", "deploy"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167657/40k/core_rules/10th_ed/aircraft_nuzv9r.png"
    },
    {
        name: "Aircraft",
        keywords: ["aircraft", "deploying aircraft", "hover", "deploying", "deploy"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167656/40k/core_rules/10th_ed/aircraft_2_mrkohi.png"
    },
    {
        name: "Example Battlefield",
        keywords: ["maps", "example battlefield", "battlefield"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167656/40k/core_rules/10th_ed/example_battlefield_cont_2_upebnv.png"
    },
    {
        name: "Example Battlefield",
        keywords: ["maps", "example battlefield", "battlefield"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167656/40k/core_rules/10th_ed/example_battlefield_daov8g.png"
    },
    {
        name: "Command Phase",
        keywords: ["command phase", "command", "phase", "battle shock", "shock", "battleshock", "battle", "points", "command points", "leader", "leadership"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167660/40k/core_rules/10th_ed/command_phase/command_phase_nphwi5.png"
    },
    {
        name: "Command Phase",
        keywords: ["strength", "starting strength", "phase", "battle shock", "shock", "battleshock", "battle", "points", "command points", "destroyed", "attached unit", "attached units", "character", "characters", "leader", "leadership"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167660/40k/core_rules/10th_ed/command_phase/command_phase_cont_ew7ksh.png"
    },
    {
        name: "Movement Phase",
        keywords: ["movement phase", "movement", "move unit", "move", "remain stationary", "stationary", "normal moves"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167665/40k/core_rules/10th_ed/movement_phase/movement_phase_gvs1ya.png"
    },
    {
        name: "Movement Phase",
        keywords: ["movement phase", "movement", "move unit", "move", "remain stationary", "stationary", "normal moves", "advance", "advance moves", "fall back", "fall-back", "fall back moves", "desperate", "desperate escape", "desperate escape test", "desperate escape tests"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167665/40k/core_rules/10th_ed/movement_phase/movement_phase_cont_c0b4ak.png"
    },
    {
        name: "Movement Phase",
        keywords: ["movement phase", "movement", "move unit", "move", "remain stationary", "stationary", "normal moves", "terrain", "moving over terrain", "over terrain", "fly", "flying", "flight", "phase"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167666/40k/core_rules/10th_ed/movement_phase/movement_phase_cont_2_gz0ds8.png"
    },
    {
        name: "Shooting Phase",
        keywords: ["phase", "shooting phase", "shoot", "target", "targets", "select targets", "lone operative", "operative"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167666/40k/core_rules/10th_ed/shooting_phase/shooting_phase_v20snh.png"
    },
    {
        name: "Shooting Phase",
        keywords: ["phase", "shooting phase", "shoot", "target", "targets", "select targets", "lone operative", "operative", "make ranged attacks", "ranged attack", "ranged attacks", "combat locked", "locked", "big guns", "big gun", "big guns never tire", "big guns never", "stealth"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167666/40k/core_rules/10th_ed/shooting_phase/shooting_phase_cont_wlbua3.png"
    },
    {
        name: "Charge Phase",
        keywords: ["phase", "charge phase", "charging"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167659/40k/core_rules/10th_ed/charge_phase/charge_phase_c919m8.png"
    },
    {
        name: "Charge Phase",
        keywords: ["phase", "charge phase", "charging", "charging over terrain", "charging with flying models"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167660/40k/core_rules/10th_ed/charge_phase/charge_phas_cont_l8sep0.png"
    },
    {
        name: "Fight Phase",
        keywords: ["phase", "fight phase", "fights first", "fight first", "remaining combat", "remaining combats"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167660/40k/core_rules/10th_ed/fight_phase/fight_phase_lwcryn.png"
    },
    {
        name: "Fight Phase",
        keywords: ["phase", "fight phase", "fights first", "fight first", "pile", "pile in", "pile-in", "melee", "melee attack", "melee attacks", "select weapon", "select targets", "select target"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167660/40k/core_rules/10th_ed/fight_phase/fight_phase_cont_n7gtze.png"
    },
    {
        name: "Fight Phase",
        keywords: ["phase", "fight phase", "fights first", "fight first", "select weapon", "select targets", "select target", "attack", "make attacks", "make attack"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167660/40k/core_rules/10th_ed/fight_phase/fight_phase_cont_2_n7oe0u.png"
    },
    {
        name: "Fight Phase",
        keywords: ["phase", "fight phase", "fights first", "fight first", "select weapon", "select targets", "select target", "attack", "consolidate", "consolidating"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167661/40k/core_rules/10th_ed/fight_phase/fight_phase_cont_3_kwqf6m.png"
    },
    {
        name: "Fight Phase",
        keywords: ["phase", "fight phase", "fights first", "fight first", "select weapon", "select targets", "select target", "attack", "consolidate", "consolidating"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167660/40k/core_rules/10th_ed/fight_phase/fight_phase_cont_4_vj608f.png"
    },
    {
        name: "Making Attacks",
        keywords: ["making attacks", "make attacks"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167661/40k/core_rules/10th_ed/making_attacks/making_attacks_gyh5gn.png"
    },
    {
        name: "Making Attacks",
        keywords: ["making attacks", "make attacks", "allocate", "allocate attacks", "save", "saving", "saving throws", "saving throw", "invulnerable", "invulnerable saves", "invulnerable save"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167661/40k/core_rules/10th_ed/making_attacks/making_attacks_cont_ygptnv.png"
    },
    {
        name: "Making Attacks",
        keywords: ["making attacks", "make attacks", "inflict damage", "damage", "feel no pain", "feel no", "deadly demise", "mortal wound", "mortal wounds"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167661/40k/core_rules/10th_ed/making_attacks/making_attacks_cont_2_gttkjt.png"
    },
    {
        name: "Making Attacks",
        keywords: ["making attacks", "make attacks", ""],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167661/40k/core_rules/10th_ed/making_attacks/making_attacks_cont_3_nykujo.png"
    },
    {
        name: "Stratagems",
        keywords: ["stratagem", "stratagems", "stratagems key", "stratagem category", "stratagem categories", "command reroll", "command re-roll", "counter-offensive", "counter offensive", "epic challenge", ],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167666/40k/core_rules/10th_ed/stratagems/stratagems_ur6iqx.png"
    },
    {
        name: "Stratagems",
        keywords: ["stratagem", "stratagems", "insane bravery", "grenade", "tank shock", "tank-shock", "rapid", "rapid ingress", "rapid-ingress", "fire overwatch", "overwatch", "go to ground", "smokescreen", "smoke screen", "smoke", "smoke-screen", "heroic intervention", "intervention"],
        img: "https://res.cloudinary.com/dbdei97mo/image/upload/v1706167666/40k/core_rules/10th_ed/stratagems/stratagems_2_u2ecfv.png"
    },

]

export const core_rules = {
    rules
};
