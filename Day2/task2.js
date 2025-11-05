
const script1 = (char1, char2, char3) => {
    const heading = `Scene 1: The Birth of a Legend - ${char1}`;
    const scene1 = `${char1}'s mother makes him promise to die as a rich man, not a poor slave. Years later, ${char1} grows up in Mumbai's underworld and catches the eye of ${char2}, a powerful don who sends him to Bangalore to infiltrate the KGF gold mines controlled by the ruthless ${char3}.`;

    return `${heading}\n${scene1} A boy's promise becomes a man's destiny in the world of gold and blood.`;
};

const script2 = (char1, char2, char3) => {
    const heading = "Scene 2: The Ghost Returns";
    const scene2 = `${char1}, presumed dead, operates from the shadows as a ghost. ${char2}, a determined police officer, discovers ${char1}'s secret identity while investigating mysterious vigilante killings. They're hunted by ${char3}, the cold-blooded enforcer of the drug cartel.`;

    return `${heading}\n${scene2} The hunter becomes the hunted in Chennai's dark underworld.`;
};

const script3 = (char1, char2, char3, char4, char5) => {
    const heading = "Scene 3: The Trap is Set";
    const scene3 = `${char1} and ${char2} set an elaborate trap at ${char3}'s abandoned warehouse.
${char4}, the mastermind, reveals his true identity as ${char5}'s protector.
In a shocking twist, ${char2} is revealed to be working with ${char1} all along, turning the tables on the corrupt system.`;

    return `${heading}\n${scene3}`;
};


const script4 = (char1, char2) => {
    const heading = "Scene 4: The Final Confrontation";
    const scene4 = `In the epic climax, ${char1} confronts ${char2} at the clock tower.
The brutal hand-to-hand combat ends with ${char1} defeating ${char2} but sparing his life for justice.
As police sirens approach, ${char1} disappears into the night, becoming a legend.`;

    return `${heading}\n${scene4} A ghost wins the war but remains in the shadows, watching over the city.`;
};

export { script1, script2, script3, script4 };