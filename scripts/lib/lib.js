const skills = {
    'acrobatics': 'Acrobatics',
    'athletics': 'Athletics',
    'deception': 'Deception',
    'intimidation': 'Intimidation',
    'nature': 'Nature',
    'performance': 'Performance',
    'society': 'Society',
    'survival': 'Survival',
    'arcana': 'Arcana',
    'crafting': 'Crafting',
    'diplomacy': 'Diplomacy',
    'medicine': 'Medicine',
    'occultism': 'Occultism',
    'religion': 'Religion',
    'stealth': 'Stealth',
    'thievery': 'Thievery',
    'perception': 'Perception',
};

const saves = {
    'fortitude': 'Fortitude',
    'reflex': 'Reflex',
    'will': 'Will'
};

export function prompt(skill, dc, flavour) {
    const prompt = check(skill, dc, flavour);

    ChatMessage.create({
        user: game.user_id,
        speaker: ChatMessage.getSpeaker({}),
        content: prompt,
    });
}

export function check(skill, dc, flavour) {
    if (flavour === undefined) {
        flavour = (skills[skill] === undefined) ? `${saves[skill]} Save` : `${skills[skill]} Check`;
    }

    return `@Check[type:${skills[skill] || saves[skill] || skill}|dc:${dc}]{${flavour}}`;
}