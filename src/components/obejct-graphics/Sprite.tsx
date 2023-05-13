import React, { useEffect, useRef } from 'react'
import { CELL_SIZE } from '../../helpers/constants';

type SpriteProps = {
    frameCoord: string,
    size: number,
    image: HTMLImageElement
}

const Sprite:React.FC<SpriteProps> = ({ frameCoord, size = 16, image }: SpriteProps) => {

    // creating a reference for canvas
    const canvasRef = useRef<HTMLCanvasElement>(null);
   
    useEffect(() => {
        const canvasEl = canvasRef.current;
        const context = canvasEl?.getContext('2d');

        // clear out anything that on CANVAS
        context!.clearRect(0, 0, canvasEl!.width, canvasEl!.height);

        // Draw a graphic to the canvas Tag
        const tileSheetX = Number(frameCoord.split('x')[0]);
        const tileSheetY = Number(frameCoord.split('x')[1]);

        // draw image here
        context!.drawImage(
            image,
            tileSheetX * CELL_SIZE,
            tileSheetY * CELL_SIZE,
            size,
            size,
            0,
            0,
            size,
            size
        );
    }, [frameCoord, size, image])

    return (
        <canvas width={size} height={size} ref={canvasRef} />
    )
}

export default Sprite;