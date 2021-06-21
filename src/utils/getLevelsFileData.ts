export const getLevelsFileData = async (path: string): Promise<string | undefined> => {
    try {
        const res = await fetch(path);
        const data = await res.text();

        return data;
    } catch (err) {
        console.log('fetching file failed:', err);
    }
};
