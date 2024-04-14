import React from "react";
import { Touchable, Text, Cover, Box } from "..";
import {colors} from "../../styles/theme.json"


const Story = () =>{
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
                image = "https://media.licdn.com/dms/image/D4E03AQHP7KEaEKrrDw/profile-displayphoto-shrink_200_200/0/1685303481885?e=2147483647&v=beta&t=lIejEWSnr64gfIYBKzAaGw731nhEC3XpvM0tW6PJP9o">

                <Box fluid
                    hasPadding
                    background = {`${colors.dark}80`}
                    justify = "space-between">

                    <Cover 
                        border={`1px solid ${colors.light}`}
                        width="50px"
                        height= "50px"
                        circle 
                        image= "https://media.licdn.com/dms/image/D4E03AQHP7KEaEKrrDw/profile-displayphoto-shrink_200_200/0/1685303481885?e=2147483647&v=beta&t=lIejEWSnr64gfIYBKzAaGw731nhEC3XpvM0tW6PJP9o">
                    </Cover>
                   
                    <Box
                        height= "50px" 
                        justify = "flex-end">

                        <Text 
                            bold 
                            color="light" 
                            >Sara Bernardi</Text>
                    
                        <Text 
                            color="light"
                            variant = "small"
                            >2 mins ago</Text>
                    </Box>
                    
                </Box>
           
            </Cover>
        </Touchable>
    )
}

export default Story