export const minEightOneNumOneLetter = (string) => {
    const Regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return Regex.test(string);
};

export const validEmail = (value) => {
    const Regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return Regex.test(value);
}