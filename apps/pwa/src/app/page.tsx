'use client';
import {AppRender} from 'pixel_ui';

import {Navbar} from './components/Navbar';
import { Box } from '@chakra-ui/react';

export default function App() {
  return (
    <Box className="min-h-screen w-full relative">
      <Navbar />
      {typeof window !== 'undefined' && (
        <AppRender
          artPeaceAddress={process.env.NEXT_PUBLIC_CANVAS_STARKNET_CONTRACT_ADDRESS}
          nftCanvasAddress={process.env.NEXT_PUBLIC_CANVAS_NFT_CONTRACT_ADDRESS}
          usernameAddress={process.env.NEXT_PUBLIC_USERNAME_STORE_CONTRACT_ADDRESS}
        ></AppRender>
      )}
      {/* <Footer /> */}
    </Box>
  );
}
