import { mouse, up, down, left, right } from "@nut-tree/nut-js";
import { circle } from './figure/drawCircle';
import {rectangle} from "./figure/drawRectnagle";
import {square} from "./figure/drawSquare";
import {printScreen} from "./figure/printScreen";

export const middleware = async (data: string[]) => {
    try {
        switch (data[0]) {
            case 'mouse_up':
                await mouse.move(up(+data[1]));
                return `${data[0]} {${data[1]} px}`;
            case 'mouse_down':
                await mouse.move(down(+data[1]));
                return `${data[0]} {${data[1]} px}`;
            case 'mouse_left':
                await mouse.move(left(+data[1]));
                return `${data[0]} {${data[1]} px}`;
            case 'mouse_right':
                await mouse.move(right(+data[1]));
                return `${data[0]} {${data[1]} px}`;
            case 'mouse_position':
                let {x, y} = await mouse.getPosition();
                return `mouse_position {${x} px},{${y} px}`;
            case 'draw_circle':
                await circle(+data[1]);
                return `${data[0]} {${data[1]} px}`;
            case 'draw_rectangle':
                await rectangle(+data[1], +data[2])
                return `${data[0]} {${data[1]} px}`;
            case 'draw_square':
                await square(+data[1]);
                return `${data[0]} {${data[1]} px}`;
            case 'prnt_scrn':
                return await printScreen();
        }
    } catch {
        console.error('Error input')
    }
}
