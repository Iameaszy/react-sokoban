export const getLevelString = async (path: string) => {
    try {
        const res = await fetch(path);
        const data = await res.text();

        return data;
    } catch (err) {
        console.log('fetching file failed:', err);
    }
};
