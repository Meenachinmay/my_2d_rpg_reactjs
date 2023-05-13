import React, { useEffect, useState } from 'react';
import './App.css';
import Sprite from './components/obejct-graphics/Sprite';
import { SPRITE_SHEET_SRC } from './helpers/constants';
import RenderLevel from './components/level-layouts/RenderLevel';

function App() {
  const [spriteSheetImage, setSpriteSheetImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const image = new Image();
    image.src = SPRITE_SHEET_SRC;

    image.onload = () => {
      setSpriteSheetImage(image);
    }

  }, [])

  if (!spriteSheetImage) {
    return null;
  }

  return (
   <RenderLevel spriteSheetImage={spriteSheetImage} /> 
  );
}

export default App;
