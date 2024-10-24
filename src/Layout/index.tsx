import { Box } from "@mui/material";
import { ReactNode } from "react";
import Sidebar from "../components/sidebar";
import { styled } from "@mui/system";

interface LayoutProps {
    children: ReactNode
}

const ScrollBox = styled(Box)({
    width: "100%",
    overflowY: "scroll",
    '&::-webkit-scrollbar': {
        width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#888',
        borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: '#555',
    },
});

function Layout({ children }: LayoutProps) {
    return (
        <Box
            sx={{
                backgroundColor: '#000000',
                display: "flex",
                flexDirection: {
                    xs: 'column',
                    lg: 'row'
                },
                color: '#fff',
                padding: 3,
                gap: 3,
                overflowY: "hidden",
                height: '100vh'
            }}
        >
            <Sidebar />
            <ScrollBox>
                {children}
            </ScrollBox>
        </Box>
    )
}

export default Layout