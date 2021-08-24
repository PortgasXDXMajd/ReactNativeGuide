const initialState = {
    FishList:[],
    MyFavFishList:[],
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
        case 'ADD_NEW_FISH':
            console.log(action.payload)
            return{
                ...state,
                FishList: [...state.FishList, action.payload]
            }
        case 'ADD_FISH_TO_FAV':
            console.log('hererererere')
            return {
                ...state,
                MyFavFishList: [...state.MyFavFishList, action.payload]
            }

        default:
            return state;
    }
}