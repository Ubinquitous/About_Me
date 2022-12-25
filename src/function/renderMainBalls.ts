import Matter, { Constraint, Mouse, MouseConstraint } from "matter-js";
import { RefObject } from "react";

const renderMainBalls = (mainboxRef: RefObject<HTMLDivElement>, maincanvasRef: RefObject<HTMLDivElement>) => {
    const WIDTH = 600;
    const HEIGHT = 600;
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;

    let engine = Engine.create({});

    let render = Render.create({
        element: mainboxRef.current as HTMLElement,
        engine: engine,
        canvas: maincanvasRef.current as unknown as HTMLCanvasElement,
        options: {
            width: WIDTH,
            height: HEIGHT,
            background: 'transparent',
            wireframes: false
        },
    });

    const ball1 = Bodies.circle(300, 0, 72, {
        restitution: 0.9,
        render: {
            fillStyle: 'yellow',
            sprite: {
                texture: '/techball/sass.png',
                xScale: 0.7,
                yScale: 0.7
            }
        }
    });

    const ball2 = Bodies.circle(320, 0, 72, {
        restitution: 0.9,
        render: {
            fillStyle: 'yellow',
            sprite: {
                texture: '/techball/typescript.png',
                xScale: 0.7,
                yScale: 0.7
            }
        }
    });
    const ball3 = Bodies.circle(310, 0, 72, {
        restitution: 0.9,
        render: {
            fillStyle: 'yellow',
            sprite: {
                texture: '/techball/react.png',
                xScale: 0.7,
                yScale: 0.7
            }
        }
    });
    const ball4 = Bodies.circle(295, 0, 72, {
        restitution: 0.9,
        render: {
            fillStyle: 'yellow',
            sprite: {
                texture: '/techball/nextjs.png',
                xScale: 0.7,
                yScale: 0.7
            }
        }
    });

    const rope1 = Constraint.create({
        pointA: { x: WIDTH / 2, y: HEIGHT / 2 - 38 },
        bodyB: ball1,
        render: { strokeStyle: 'transparent', lineWidth: 0, }
    })
    const rope2 = Constraint.create({
        pointA: { x: WIDTH / 2, y: HEIGHT / 2 - 38 },
        bodyB: ball2,
        render: { strokeStyle: 'transparent', lineWidth: 0, }
    })
    const rope3 = Constraint.create({
        pointA: { x: WIDTH / 2, y: HEIGHT / 2 - 38 },
        bodyB: ball3,
        render: { strokeStyle: 'transparent', lineWidth: 0, }
    })
    const rope4 = Constraint.create({
        pointA: { x: WIDTH / 2, y: HEIGHT / 2 - 38 },
        bodyB: ball4,
        render: { strokeStyle: 'transparent', lineWidth: 0, }
    })

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            render: { visible: false }
        }
    });

    World.add(engine.world, [ball1, ball2, ball3, ball4, rope1, rope2, rope3, rope4, mouseConstraint]);

    Engine.run(engine);
    Render.run(render);
}

export default renderMainBalls;