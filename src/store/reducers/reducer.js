import ReactGA from 'react-ga'
ReactGA.initialize('UA-152863378-1');
const initialState = {
    value: 0,
};
  
function reducer(state = initialState, action) {
    switch(action.type) {
        case 'Increase':
            ReactGA.event({
                category: 'Data',
                action: 'Increase Data'
            });
            return { ...state, value: state.value + 1 };
        case 'Decrease':
                ReactGA.event({
                    category: 'Data',
                    action: 'Decrease Data'
                });
            return { ...state, value: state.value - 1 };
        default:
            return state;
    }
}

export default reducer;  