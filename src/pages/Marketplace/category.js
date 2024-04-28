import React from "react";
import Header from "../../components/Header";
import {Box, Text, Title, Touchable} from "../../components/index"
import Icon from "react-native-vector-icons/SimpleLineIcons"
import ProductList from "../../components/Product/list";

const Category = () =>{
    return(
        <>
            <Header 
                title="Category" 
                goBack = {true}
                right={() => 
                    <Touchable 
                        hasPadding 
                        width="70px" 
                        onPress={() => 
                            (alert("funcionou"))}>
                        <Icon name="bag" size={20} />
                    </Touchable>}>
            </Header>
            <ProductList />
        </>
    )
}

export default Category