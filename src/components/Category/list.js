import React from "react";
import {ScrollView, Text} from "../../components/index"
import Category from ".";

const CategoryList = ({categories}) =>{
    return(
        <ScrollView 
            fluid
            style={{
              paddingTop: 20,
              paddingLeft: 20,
              paddingRight: 20
            }}>
           {categories?.map(category =>(
                    <Category category={category} title={'Dogs'} description={'123 ITEMS'} />
                    ))}
        </ScrollView>
    )
}

export default CategoryList;