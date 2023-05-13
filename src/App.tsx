import React, { useEffect, useState } from 'react';
import './App.css';
import Sprite from './components/obejct-graphics/Sprite';
import { SPRITE_SHEET_SRC } from './helpers/constants';

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
    <div className="App">
      <Sprite frameCoord={"1x0"} image={spriteSheetImage} size={16} /> 
      <Sprite frameCoord={"0x2"} image={spriteSheetImage} size={16} /> 
      <Sprite frameCoord={"1x4"} image={spriteSheetImage} size={16} /> 
    </div>
  );
}

export default App;
