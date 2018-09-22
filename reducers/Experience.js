const Experience = (
    state = {
        NbBackou7lib : 0
    } , action
) => {

    switch (action.type) {
        case "BECH_NECHRI":
            return {...state , NbBackou7lib : state.NbBackou7lib+1}
            break;
    
        default:
            return state
            break;
    }

}



// const Experience = ( state = {
//     number : 0
// } , action ) => {

//     switch (action.type) {
//         case 'CHANGE':
//             return {...state , number : action.experience}
//             break;
    
//         default:
//             return state 
//             break;
//     }
// }

export default Experience