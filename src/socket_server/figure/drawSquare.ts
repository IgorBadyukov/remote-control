import {mouse, Button, left, right, down, up} from "@nut-tree/nut-js";

export async function square(side: number) {
    mouse.config.mouseSpeed = 300;
    await mouse.pressButton(Button.LEFT);
    await mouse.move(right(side));
    await mouse.move(down(side));
    await mouse.move(left(side));
    await mouse.move(up(side));
    await mouse.releaseButton(Button.LEFT);
}
