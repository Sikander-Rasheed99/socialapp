import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

export default function Rightbar() {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box>
        <Typography variant='h6' fontWeight={100} marginBottom={1}>Online Friends</Typography>
        <AvatarGroup max={6}>
          <Avatar alt="Remy Sharp" src="https://media.licdn.com/dms/image/D4D03AQHwtag3tzQkeA/profile-displayphoto-shrink_100_100/0/1677880238450?e=1697068800&v=beta&t=hRD9700rVAZGTWAoMjgckNlthRgT84hBqgrqnpkAtJk" />
          <Avatar alt="Travis Howard" src="https://media.licdn.com/dms/image/D4D03AQFO3VlVyOFkuQ/profile-displayphoto-shrink_100_100/0/1691472260472?e=1697068800&v=beta&t=LrGraGoVQBjP3hHYxluGLg1EBeTIKCycO6AQXeLOUjk" />
          <Avatar alt="Travis Howard" src="" />
          <Avatar alt="Cindy Baker" src="https://media.licdn.com/dms/image/D4D03AQGY5PJKF3r2tQ/profile-displayphoto-shrink_100_100/0/1683964738268?e=1697068800&v=beta&t=lgrQJPsQFGYmDRPhNRZc_scsN8I-1lfbKAwwNKKv7Ew" />
          <Avatar alt="Agnes Walker" src="https://media.licdn.com/dms/image/D4D03AQFpKkAmcolfhA/profile-displayphoto-shrink_100_100/0/1672473761796?e=1697068800&v=beta&t=p3eW2NLkdSFcPtX-SzgFXM0Wb7yGkXL87mXoX31IzAA" />
          <Avatar alt="Trevor Henderson" src="https://media.licdn.com/dms/image/C4D03AQERAsGlZKdEcQ/profile-displayphoto-shrink_100_100/0/1610696580772?e=1697068800&v=beta&t=J7OFE1aUSIyNPMm3hcy1_gYsM50tP1IZOAPDbaT8mQo" />
          <Avatar alt="Trevor Henderson" src="https://media.licdn.com/dms/image/C4D03AQERAsGlZKdEcQ/profile-displayphoto-shrink_100_100/0/1610696580772?e=1697068800&v=beta&t=J7OFE1aUSIyNPMm3hcy1_gYsM50tP1IZOAPDbaT8mQo" />
          <Avatar alt="Trevor Henderson" src="https://media.licdn.com/dms/image/C4D03AQERAsGlZKdEcQ/profile-displayphoto-shrink_100_100/0/1610696580772?e=1697068800&v=beta&t=J7OFE1aUSIyNPMm3hcy1_gYsM50tP1IZOAPDbaT8mQo" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} marginTop={1} marginBottom={1}>New Post</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format"
              alt="Image"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format"
              alt="Image"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format"
              alt="Image"
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>

        <Typography variant='h6' fontWeight={100} marginTop={1} >Latest Conversations</Typography>

        <List sx={{ width: '100%', maxWidth: 320, bgcolor: 'backgrund.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box >
  )
}
