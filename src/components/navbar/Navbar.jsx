
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from React Router
import "./navbar.css";
import { Mail, Notifications } from '@mui/icons-material';

export default function Navbar() {

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"
    })

    const Search = styled("div")(({ theme }) => ({
        backgroundColor: 'white',
        padding: '0 20px',
        borderRadius: '20px',
        width: '38%',
        height: '20px',
        [theme.breakpoints.up("sm")]: {
            height: '40px',
        }
    }))

    const Icons = styled("div")(({ theme }) => ({
        display: 'none',
        alignItems: 'center',
        gap: '20px',
        [theme.breakpoints.up("sm")]: {
            display: "flex"
        }
    }))

    const UserBox = styled("div")(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    }))

    const [open, setOpen] = useState(false)

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h6' className='Logo'>
                    SocialApp
                </Typography>
                <Search>
                    <InputBase placeholder='Search for Friends, Post and videos'></InputBase>
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={10} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: '30px', height: '30px' }} alt='User Image' src="https://media.licdn.com/dms/image/C5603AQGzkK7lKIEtBA/profile-displayphoto-shrink_100_100/0/1660839128045?e=1697068800&v=beta&t=enkVtleWLgmvljQplDlcB5PeeB9qLdu8wONkx1Ufjj4" onClick={e => setOpen(true)}
                    />
                </Icons>
                <UserBox>
                    <Avatar sx={{ width: '30px', height: '30px' }} alt='User Image' src="https://media.licdn.com/dms/image/C5603AQGzkK7lKIEtBA/profile-displayphoto-shrink_100_100/0/1660839128045?e=1697068800&v=beta&t=enkVtleWLgmvljQplDlcB5PeeB9qLdu8wONkx1Ufjj4" onClick={e => setOpen(true)} />
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem>
                    <Link to="/profile">
                        Profile
                    </Link>
                </MenuItem>
                <Link to="/login">
                    <MenuItem>
                        Logout
                    </MenuItem>
                </Link>
            </Menu>
        </AppBar>
    )
}
