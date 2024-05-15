import React from "react";
import moment from "moment";
import { Touchable, Text, Cover, Box } from "..";
import {colors} from "../../styles/theme.json"



const Story = ({story}) =>{
    return(
        <Touchable
            onPress={()=> alert("Funcionou")}
            background = "black"
            radius = "10px"
            height = "190px"
            spacing = "0px 10px 0px"
            width = "150px"
        >
            <Cover 
                width="100%"
                height= "100%" 
                image ={story?.cover} >

                <Box fluid
                    hasPadding
                    background = {`${colors.dark}80`}
                    justify = "space-between">

                    <Cover 
                        border={`1px solid ${colors.light}`}
                        width="50px"
                        height= "50px"
                        circle 
                        image= {story?.owner.photo}
                    >
                    </Cover>
                   
                    <Box
                        height= "50px" 
                        justify = "flex-end">

                        <Text 
                            bold 
                            color="light" 
                            >{story?.owner.username}</Text>
                    
                        <Text 
                            color="light"
                            variant = "small"
                            >{moment(story.createdAt).fromNow(true)}</Text>
                    </Box>
                    
                </Box>
           
            </Cover>
        </Touchable>
    )
}

export default Story