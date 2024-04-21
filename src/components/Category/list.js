import React from "react";
import {ScrollView, Text} from "../../components/index"
import Category from ".";

const CategoryList = () =>{
    return(
        <ScrollView 
            fluid
            style={{
              paddingTop: 20,
              paddingLeft: 20,
              paddingRight: 20
            }}>
           {Array.from(Array(10))?.map(item =>(
                    <Category title={'Dogs'} description={'123 ITEMS'} />
                    ))}
        </ScrollView>
    )
}

export default CategoryList;