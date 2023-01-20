import { mouse, up, down, left, right } from "@nut-tree/nut-js";

export const middleware = async (data: string[]) => {
    try {
        switch (data[0]) {
            case 'mouse_up':
                await mouse.move(up(+data[1]));
                break;
            case 'mouse_down':
                await mouse.move(down(+data[1]));
                break;
            case 'mouse_left':
                await mouse.move(left(+data[1]));
                break;
            case 'mouse_right':
                await mouse.move(right(+data[1]));
                break;
            case 'mouse_position':
                break;
        }
    } catch {
        console.error('Error input')
    }
}
