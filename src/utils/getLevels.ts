import levelFilePath from '../assets/txt/Intro.txt';
import { getLevelsFileData } from './getLevelsFileData';
import { getLevelsFromText } from './getLevelsFromText';

export const getLevels = async (): Promise<string[][][]> => {
    try {
        const res = await getLevelsFileData(levelFilePath);
        if (res) return getLevelsFromText(res);
        throw new Error('Unable to load levels');
    } catch (err) {
        throw err;
    }
};
