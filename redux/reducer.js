const initialState = {
    count:0,
}


export function FishReducer(state=initialState, action){
    console.log(action)
    switch(action.type){
        case 'ADD':
            return({
                ...state,
                count: state.count+1
            })
    }
    
    return state;
}