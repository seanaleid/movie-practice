// STORE --> GLOBALIZED STATE


// ACTION --> INCREMENT
// const increment = () => {
//     return {
//         type: 'INCREMENT'
//     }
// }

// const decrement = () => {
//     return {
//         type: 'DECREMENT'
//     }
// }

// REDUCER
// const counter = (state = 0, action) => {
//     switch(action.type){
//         case "INCREMENT":
//             return state + 1;
//         case "DECREMENT":
//             return state - 1;
//         default:
//             return state;
//     }
// }

// let store = createStore(counter);

// CONSOLE.LOG
// store.subscribe(() => console.log(store.getState()));

// DISPATCH
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(increment());
// store.dispatch(increment());