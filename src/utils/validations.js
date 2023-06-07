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