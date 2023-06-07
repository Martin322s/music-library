export function passwordsMatch(passwordOne, passwordTwo, type, setter) {
    if (passwordOne !== passwordTwo && passwordTwo !== "") {
        setter(state => ({
            ...state,
            [type]: true
        }));
    } else {
        setter(state => ({
            ...state,
            [type]: false
        }));
    }
}

export function regexValidator(regex, text, type, setter) {
    const regexStr = new RegExp(regex, 'g');
    if (!regexStr.test(text) && text !== "") {
        setter(state => ({
            ...state,
            [type]: true
        }));
    } else {
        setter(state => ({
            ...state,
            [type]: false
        }));
    }
}