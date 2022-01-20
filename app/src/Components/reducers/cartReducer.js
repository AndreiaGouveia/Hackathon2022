import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    cartItems:[],
    total_items:0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          //check if the action id exists in the cartItems
        let addedItem = {id: action.id , quantity: 0}
         let existed_item= state.cartItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            existed_item.quantity += 1
            state.total_items+= 1 
             return{
                ...state
                  }
        }
         else{
            addedItem.quantity = 1
            state.total_items+=1
            
            return{
                ...state,
                cartItems: [...state.cartItems, addedItem]
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let new_items = state.cartItems.filter(item=> action.id !== item.id)
        
        state.total_items-=1

        return{
            ...state,
            cartItems: new_items,
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let existed_item= state.cartItems.find(item=> action.id === item.id)
        existed_item.quantity += 1 
        
        state.total_items+=1
          return{
              ...state
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.cartItems.filter(item=>item.id !== action.id)
            
            state.total_items-=1
            return{
                ...state,
                cartItems: new_items,
            }
        }
        else {
            
            state.total_items-=1
            addedItem.quantity -= 1
            return{
                ...state,
            }
        }
        
    }
    
  else{
    return state
    }
    
}

export default cartReducer 