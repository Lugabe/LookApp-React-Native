import React from 'react';
import { Box, Text, Title, ScrollView } from '../../components';
import Post from '.';

const PostList = () => {
  return (
    <Box fluid>
      {Array.from(Array(30))?.map((item) => (
        <Post />
      ))}
    </Box>
  );
};

export default PostList;
