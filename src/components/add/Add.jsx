import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import React, { useState } from 'react';

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    margin: "10px 0"
})

export default function Add() {

    const [open, setOpen] = useState(false)

    return (
        <Box sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
            <Tooltip title="Delete">
                <Fab color="primary" aria-label="add" onClick={e => setOpen(true)}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} p={3} borderRadius={3} bgcolor={"background.default"} color={"text.primary"}>
                    <Typography variant="h6" fontWeight={500} textAlign="center" color="gray">
                        Create Post
                    </Typography>

                    <UserBox>
                        <Avatar sx={{ width: '30px', height: '30px' }} alt='User Image' src="https://media.licdn.com/dms/image/C5603AQGzkK7lKIEtBA/profile-displayphoto-shrink_100_100/0/1660839128045?e=1697068800&v=beta&t=enkVtleWLgmvljQplDlcB5PeeB9qLdu8wONkx1Ufjj4" />
                        <Typography variant="span" fontWeight={500} fontSize="17px" >
                            Sikander Rasheed
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%", marginTop: "10px" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on Your Mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={2} mt={2} mb={3}>
                        <EmojiEmotions color='primary' />
                        <Image color='secondary' />
                        <VideoCameraBack color='success' />
                        <PersonAdd color='error' />
                    </Stack>

                    <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </Box>
    )
}
