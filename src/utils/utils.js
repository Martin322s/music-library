export const changeHandler = (ev, setData) => {
    setData(state => ({
        ...state,
        [ev.target.name]: ev.target.value
    }));
}