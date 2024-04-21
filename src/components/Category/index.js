import React from "react";
import { Box, Cover, Spacer, Text, Title, Touchable } from "..";
import util from "../../util";
import {colors} from "../../styles/theme.json"

const Category = ({title, description}) =>{
    return(
        <Touchable 
            fluid
            width="100%" 
            height= "180px" 
            radius= "10px" 
            spacing="10px 0px">
                <Cover
                    fluid
                    width="100%"
                    height="100%"
                    image="https://dogagingproject.org/_next/image?url=https%3A%2F%2Fcontent.dogagingproject.org%2Fwp-content%2Fuploads%2F2023%2F09%2Fhome-thumb-min.jpg&w=3840&q=75">
                    <Box
                        width= "100%"
                        justify= "center"
                        align= "center"
                        hasPadding
                        background= {util.toAlpha(colors.black,50)}
                        >
                        <Title bold color="light">
                            {title}
                        </Title>
                        <Spacer />
                        <Text color="light" variant="small">
                            {description}
                        </Text>

                    </Box>
                </Cover>
                
        </Touchable>
    )
}

export default Category