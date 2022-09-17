import React,{createContext,useState} from 'react';
import  fig1 from '../images/fig1.jpg';
import  fig2 from '../images/fig2.jpg';
import  fig3 from '../images/fig3.jpg';
import  fig4 from '../images/fig4.jpg';
import  fig5 from '../images/fig5.jpg';
import  fig6 from '../images/fig6.jpg';
import  fig7 from '../images/fig7.jpg';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const[products] = useState([
        {
        id:1,name:'House 1',price: 2000 ,image:fig1,status:'New'
        },
        {
        id:2,name:'House 2',price: 1500,image:fig2,status:'hot'
        },
        {
        id:3,name:'House 3',price: 1000,image:fig3,status:'New'
        },
        {
        id:4,name:'House 4',price: 500,image:fig4,status:'hot'
        },
        {
        id:5,name:'House 5',price: 300,image:fig5,status:'New'
        },
        {
        id:6,name:'House 6',price: 100,image:fig6,status:'hot'
        },
        {
        id:7,name:'House 7',price: 600,image:fig7,status:'New'
        }
    
    ]);
  return (
    <div>
        <ProductsContext.Provider value={{products: [...products]}}>
        {props.children}
        </ProductsContext.Provider>
    </div>
  )
}

export default ProductsContextProvider;