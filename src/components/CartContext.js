import React, { createContext, useState, useContext } from 'react';



const CartContext = createContext("remera");

export const CartContextProvider = ({items, children}) => {

    const [item, setItem] = useState(["test"])


    const addItem = (producto, quantity) => {
        const _item = item.concat({producto})
        setItem(_item)
        console.log("este es el item q se agrego " + producto)
        
        console.log(item)
        
      };
    
      const removeItem = (itemId) => {
        
        setItem(itemId);
      };
    
      const clear = (item) => {
        setItem(item);
      };
    

    
      return (
        <CartContext.Provider
          value={{
            //staticValue: 'staticValue',
            items,
            addItem,
            removeItem,
            clear,
          }}
        >
          {children}
        </CartContext.Provider>

      )


}



export { CartContext }