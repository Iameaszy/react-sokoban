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
    box: '$',
    space: ' ',
    boxOnCheckpoint: '*', // when a box is placed on a checkpoint
    playerOnCheckpoint: '+', // When a player stand on a checkpoint
} as const;
