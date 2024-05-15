import React from 'react';
import moment from 'moment';
import { Box, Cover, Spacer, Text, Touchable } from '..';
import Icon from "react-native-vector-icons/SimpleLineIcons"
import {colors} from '../../styles/theme.json'


const Post = ({post}) => {
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
            image = {post?.owner.photo}
            />
        <Box 
            spacing = "0px 0px 0px 10px"
        >
          <Text 
            bold
            color = "dark" 
            >{post?.owner.username}</Text>
          <Text variant = "small">{moment(post?.createdAt).fromNow(true)}</Text>
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
        image= {post?.cover}
        spacing= "10px 0px"
        radius= "10px"
        />
        <Box row fluid align="center">
            <Box row fluid align="center">
              {post?.likeInfos?.photos?.map(photo =>(
                <Cover 
                  circle
                  width="40px"
                  height="40px"
                  border ={`1px solid ${colors.muted}`}
                  image= {photo}
                  spacing= "0px -15px 0px 0px"
                />
                ))}
              <Text spacing = "0px 0px 0px 25px" variant= "small" >
                {post?.likeInfos.description}
              </Text>
            </Box>
              <Box row justify= "flex-end">
                <Touchable width= "24px" spacing= "0px 17px 0px 0px">
                  <Icon name="heart" size={24} color={colors[post?.isLiked ? "danger" : "muted"]} />
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
          {post?.description}
        </Text>
    </Box>
  );
};

export default Post;
