import { mouse, Button, Point } from "@nut-tree/nut-js";

export async function circle(radius: number) {
    mouse.config.mouseSpeed = 300
    await mouse.pressButton(Button.LEFT);
    const {x, y} = await mouse.getPosition();
    for (let i = 1; i <= 360; i += 1) {
        const radians = i * Math.PI / 180;
        const point = new Point(radius * Math.cos(radians) + x - radius, radius * Math.sin(radians) + y);
        await mouse.move([point]);
    }
    await mouse.releaseButton(Button.LEFT);
}
