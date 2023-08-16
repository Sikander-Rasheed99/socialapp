import React, { useState } from 'react';
import Topbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';
import "./profile.css"
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import Add from '../../components/add/Add';

export default function Profile() {
    // const isProfilePage = true;
    const [mode, setMode] = useState("light")

    const darkTheme = createTheme({
        palette: {
            mode: mode,
        }
    })

    return (
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor={"background.default"} color={"text.primary"}>
                <Topbar />
                <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Sidebar setMode={setMode} mode={mode} />
        
                    <div className="">
                        <div className="profileRightTop">
                            <div className="profileCover">
                                <img className='profileCoverImg' src="/assets/images/post/3.jpeg" alt="Profile" />
                                <img className='profileImg' src="/assets/images/person/sikander-imamge-2.jpeg" alt="Profile" />
                            </div>

                            <div className="profileInfo">
                                <h4 className="profileInfoName">Sikander Rasheed</h4>
                                <span className="profileInfoDesc">Hllww My Friend!</span>
                            </div>
                        </div>
                        <div className="profileRightBottom">
                            <Feed />
                        </div>
                    </div>
                </Stack>
                <Add />
            </Box>
        </ThemeProvider>
    )
}
