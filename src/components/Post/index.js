import React from 'react';
import { Box, Cover, Text, Touchable } from '..';
import Icon from "react-native-vector-icons/SimpleLineIcons"


const Post = () => {
  return (
    <Box hasPadding>
      <Box 
        row
        align = "center"
        >
        <Cover 
            width= "40px" 
            height= "40px" 
            circle
            image = "https://media.licdn.com/dms/image/D4E03AQHP7KEaEKrrDw/profile-displayphoto-shrink_200_200/0/1685303481885?e=2147483647&v=beta&t=lIejEWSnr64gfIYBKzAaGw731nhEC3XpvM0tW6PJP9o"
            />
        <Box 
            spacing = "0px 0px 0px 10px"
        >
          <Text 
            bold
            color = "dark" 
            >Sarinha</Text>
          <Text variant = "small">2 min ago</Text>
        </Box>
        <Touchable 
            align= "flex-end"
            height= "30px"
            width= "50px"
            >
            <Icon name= "options" size= {15}/>
        </Touchable>
      </Box>
    </Box>
  );
};

export default Post;
