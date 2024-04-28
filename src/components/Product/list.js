import React from "react";
import {ScrollView, Text} from "../../components/index"
import Product from ".";

const ProductList = () =>{
    return(
        <ScrollView 
            fluid
        >
           {Array.from(Array(10))?.map(item =>(
                    <Product brand="Zara" title={'Wide jeans'} price="$435" cover="https://ecommercenapratica.com/wp-content/uploads/2020/12/mix-de-produtos-capa-1.png"/>

                    ))}
        </ScrollView>
    )
}

export default ProductList;