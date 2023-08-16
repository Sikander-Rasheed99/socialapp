import React, { useState } from 'react'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import Sidebar from '../../components/sidebar/Sidebar'
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import Navbar from '../../components/navbar/Navbar'
import Add from '../../components/add/Add'


export default function Home() {

    const [mode, setMode] = useState("light")

    const darkTheme = createTheme({
        palette: {
            mode: mode,
        }
    })

    return (
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor={"background.default"} color={"text.primary"}>
                <Navbar />
                <Stack direction="row" spacing={2} justifyContent="space-between">
                    <Sidebar setMode={setMode} mode={mode} />
                    <Feed />    
                    <Rightbar />
                </Stack>
                <Add />
            </Box>
        </ThemeProvider>
    )
}
