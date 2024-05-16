import React from "react";
import {useNavigation} from "@react-navigation/native"
import { Box, Cover, Spacer, Text, Title, Touchable } from "..";
import util from "../../util";
import {colors} from "../../styles/theme.json"


const Category = ({category}) =>{

    const {navigate} = useNavigation()
    
    return(
        <Touchable 
        onPress={() => navigate('Category', {category})}
            fluid
            width="100%" 
            height= "180px" 
            radius= "10px" 
            spacing="10px 0px">
                <Cover
                    fluid
                    width="100%"
                    height="100%"
                    image= {category.cover}>
                    <Box
                        width= "100%"
                        justify= "center"
                        align= "center"
                        hasPadding
                        background= {util.toAlpha(colors.black,50)}
                        >
                        <Title bold color="light">
                            {category.title}
                        </Title>
                        <Spacer />
                        <Text color="light" variant="small">
                            {category.items}
                        </Text>

                    </Box>
                </Cover>
                
        </Touchable>
    )
}

export default Category