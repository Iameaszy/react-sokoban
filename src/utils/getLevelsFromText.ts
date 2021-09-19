export const getLevelsFromText = (levelTexts: string): string[][][] => {
    const levelStrings = levelTexts
        .split(';')
        .map((levelString) =>
            levelString
                .replace(/[^#.$bgrychszop*xw@\s1]/g, '')
                .split('\n')
                .filter((level) => !!level.trim())
                .map((level) => level.split('')),
        )
        .filter((levelString) => !!levelString.length);
    return levelStrings;
};
