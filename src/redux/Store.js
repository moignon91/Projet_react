import { configureStore, createSlice } from '@reduxjs/toolkit'


const PanierSlice = createSlice({
    name: 'panier',
    initialState : {
      value:[],
    },
    reducers: {
      ajouterAuPanier: (state, action) => {
        const ajouterAuPanierIndex = state.value.findIndex((item) => {
          return item.id === action.payload.id;
        });
        if(ajouterAuPanierIndex != -1){
          state.value[ajouterAuPanierIndex].quantity++;
        }else{
        state.value.push({...action.payload, quantity: 1});
        } 

      },
      RemovePanier: (state, action) => {
        const RemovePanierIndex = state.value.findIndex((item) => {
          return item.id === action.payload.id;
        });

        if(state.value[RemovePanierIndex].quantity === 1){
          state.value.splice(RemovePanierIndex, 1);
        }else{
          state.value[RemovePanierIndex].quantity--;
        }
      },
      RajoutPanier: (state, action) => {
        const RajoutPanierIndex = state.value.findIndex((item) => {
          return item.id === action.payload.id;
        });

        state.value[RajoutPanierIndex].quantity++;
      },
      ResetPanier: (state) => {
        state.value = []
      }
    }
})
export const {ajouterAuPanier, ResetPanier, RemovePanier, RajoutPanier} = PanierSlice.actions

export default configureStore({
  reducer: {
    panier: PanierSlice.reducer,
  },
})