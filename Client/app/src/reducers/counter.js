const initialState = 0;
const changeCount = (state = initialState, action)=>{
    switch(action.type){
    case 'INCOUNT' : return state + 1;
    default: return state;
    }
}
export default changeCount;

