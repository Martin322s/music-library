export const changeHandler = (ev, setter) => {
    setter(state => ({
        ...state,
        [ev.target.name]: ev.target.value
    }));
}