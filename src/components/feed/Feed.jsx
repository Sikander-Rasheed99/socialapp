import React from 'react'
import Post from '../post/Post'
import { Box } from '@mui/material'
import { Posts } from '../../dummyData'

export default function Feed() {
  return (
    <Box flex={2} p={2}>
      {Posts.map((p) => (
        <Post key={p.id} post={p}/>
      ))}
    </Box>
  )
}
