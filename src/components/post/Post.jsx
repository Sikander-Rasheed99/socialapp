import { ExpandMore, Favorite, FavoriteBorder } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
import { Users } from '../../dummyData'
import { red } from '@mui/material/colors';
import React, { useState } from 'react'

export default function Post({ post }) {

    const [like, setLike] = useState(post.like);
    const [isLiked, setIsliked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsliked(!isLiked)
    }

    return (
        <div>
            <Card sx={{ margin: "20px auto" }}>

                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="User Image" />
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={Users.filter(u => u.id === post.userId)[0].username}
                    subheader={post.date}
                />

                <Typography variant="body2" pl={2} pb={1} color="text.secondary">
                    {post?.desc}
                </Typography>
                <CardMedia
                    component="img"
                    height="20%"
                    image={post.photo}
                    alt="Paella dish"
                />
                <CardContent>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox onClick={likeHandler}
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite sx={{ color: "red" }} />}
                        />
                    </IconButton>
                    <Typography variant="body2" color="text.secondary">
                        {like} people like it
                    </Typography>
                </CardActions>
            </Card>
        </div>
    )
}
