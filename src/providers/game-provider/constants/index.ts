export const directions = {
    arrowUp: 1,
    arrowDown: 2,
    arrowLeft: 3,
    arrowRight: 4,
};

export const gameCharacters = {
    player: '@',
    block: '#',
    checkpoint: '.',
    blackCheckpoint: 'c',
    redCheckpoint: 's',
    greenCheckpoint: 'h',
    orangeCheckpoint: 'p',
    yCheckpoint: 'z',
    xCheckpoint: 'w',
    box: '$',
    blackBox: 'b',
    greenBox: 'g',
    orangeBox: 'o',
    redBox: 'r',
    yBox: 'y',
    xBox: 'x',
    space: ' ',
    boxOnCheckpoint: '*', // when a box is placed on a checkpoint
    playerOnCheckpoint: '+', // When a player stand on a checkpoint
} as const;
export const equations = {
    1: [],
};
