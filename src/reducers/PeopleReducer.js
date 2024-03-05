
const initialState = {
    people: [],
    detailView: false,
    personSelected: null,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    project: '',
    notes: '',
    _id: '',
    toUpdate: false,
}
export default (state = initialState, action) => {
    switch(action.type){
        // case 'ADD_PERSON':
        //     return {
        //      ...state,
        //         people: [...state.people, action.payload]
        //     }
        // case 'UPDATE_PERSON':
        //     return {
        //      ...state,
        //         people: state.people.map(person => person._id === action.payload._id? action.payload : person)
        //     }
        // case 'DELETE_PERSON':
        //     return {
        //      ...state,
        //         people: state.people.filter(person => person._id!== action.payload._id)
        //     }
        // case 'TOGGLE_DETAIL_VIEW':
        //     return {
        //      ...state,
        //         detailView:!state.detailView
        //     }
        // case 'SET_PERSON_SELECTED':
        //     return {
        //      ...state,
        //         personSelected: action.payload
        //     }
        case 'INITIAL_FETCH':
            return {
             ...state,
                people: action.payload
            }
        default:
            return state;
        
    }
}