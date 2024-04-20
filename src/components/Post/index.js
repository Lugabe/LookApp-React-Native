import React from 'react';
import { Box, Cover, Spacer, Text, Touchable } from '..';
import Icon from "react-native-vector-icons/SimpleLineIcons"
import {colors} from '../../styles/theme.json'


const Post = () => {
  return (
    <Box hasPadding fluid>
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
      <Cover 
        height="190px"
        width="100%" 
        image= "https://inovaveterinaria.com.br/wp-content/uploads/2015/04/gato-sem-raca-INOVA-1024x683.jpg"
        spacing= "10px 0px"
        radius= "10px"
        />
        <Box row fluid align="center">
            <Box row fluid align="center">
              {Array.from(Array(3))?.map(item =>(
                <Cover 
                  circle
                  width="40px"
                  height="40px"
                  border ={`1px solid ${colors.muted}`}
                  image= "https://media.licdn.com/dms/image/D4D03AQHADPc87M7vDA/profile-displayphoto-shrink_200_200/0/1683892458829?e=1718841600&v=beta&t=UxBIhYrJxdkOuK-2im3zsEX0eQYa8cmwTgUEd8hzWtw"
                  spacing= "0px -15px 0px 0px"
                />
                ))}
              <Text spacing = "0px 0px 0px 25px" variant= "small" >
                Liked by 10,245
              </Text>
            </Box>
              <Box row justify= "flex-end">
                <Touchable width= "24px" spacing= "0px 17px 0px 0px">
                  <Icon name="heart" size={24} color={colors.danger} />
                </Touchable>
                <Touchable width= "24px" spacing= "0px 17px 0px 0px">
                  <Icon name="share" size={24} color={colors.secondary} />
                </Touchable>
                <Touchable width= "24px">
                  <Icon name="bubble" size={24} color={colors.muted} />
                </Touchable>
              </Box>
        </Box>
        <Spacer />
        <Text color = "dark" variant= "small">
          Interview: Shoe Designer John Fluevog On New Book, Spirituality And ‘Slow Fashion’
        </Text>
    </Box>
  );
};

export default Post;
