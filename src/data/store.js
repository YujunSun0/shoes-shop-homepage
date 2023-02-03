import { configureStore, createSlice} from '@reduxjs/toolkit';




let cartData = createSlice({  //TODO: reducers 수정하기 (count가 증감해야함)
  name: "cartData",
  initialState: [
    
  ],
  reducers: {
    changeCountPlus(state, action) {
     let id =  state.findIndex((obj)=>{return obj.id === action.payload })
      state[id].count++
    },
    changeCountMinus(state, action) {
       let id =  state.findIndex((obj)=>{return obj.id === action.payload })
      state[id].count--
    },
    addItem(state,action) {
      state.push(action.payload)
    }
  },
});




export let {changeCountPlus, changeCountMinus, addItem} = cartData.actions

export default configureStore({
    reducer: {
        cartData: cartData.reducer
    }
})