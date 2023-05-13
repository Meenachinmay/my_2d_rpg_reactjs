import React from "react";
import styles from "./RenderLevel.module.css";
import Sprite from "../obejct-graphics/Sprite";

type RenderLevelProps = {
  spriteSheetImage: HTMLImageElement;
};

const RenderLevel: React.FC<RenderLevelProps> = ({
  spriteSheetImage,
}: RenderLevelProps) => {
  return (
    <div className={styles.fullScreenContainer}>
      <div className={styles.gameScreen}>
        <Sprite frameCoord={"1x0"} image={spriteSheetImage} size={16} />
        <Sprite frameCoord={"0x2"} image={spriteSheetImage} size={16} />
        <Sprite frameCoord={"1x4"} image={spriteSheetImage} size={16} />
      </div>
    </div>
  );
};

export default RenderLevel;
