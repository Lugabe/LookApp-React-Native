import React from 'react';
import { Box, Text, Title, ScrollView } from '../../components';
import Post from '.';

const PostList = ({posts}) => {
  return (
    <Box fluid 
      style={{
        minWidth: "100%"
      }}>
      {posts?.map((post) => (
        <Post post={post}/>
      ))}
    </Box>
  );
};

export default PostList;
