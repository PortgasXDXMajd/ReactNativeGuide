const initialState = {
    FishList:[],
    Fish: null,
    isLoading:true
}


export function FishReducer(state=initialState, action){
    console.log(action)
    switch(action.type){
        case 'SET_FISH_LIST':
            console.log(action.type)
            console.log(action.payload)
            return {
                ...state,
                FishList: state.FishList.concat(action.payload),
                isLoading: false,
            }
        case 'GET_FISH_BY_INDEX':
            let isFound = false;
            let myFish;
            let oldFish = state.Fish;
            state.FishList.map((e, index)=>{
                if(action.payload === index+1){
                    isFound = true;
                    myFish = e;
                }
            });
            return {
                ...state,
                Fish:myFish??oldFish
            }
        default:
            return state;
    }
}