import Matter, { Constraint } from "matter-js";

const renderSubBalls = (subboxRef: any, subcanvasRef: any) => {
    const WIDTH = 450;
    const HEIGHT = 450;
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;

    let engine = Engine.create({});

    let render = Render.create({
        element: subboxRef.current as any,
        engine: engine,
        canvas: subcanvasRef.current as any,
        options: {
            width: WIDTH,
            height: HEIGHT,
            background: 'black',
            wireframes: false
        },
    });

    const ball1 = Bodies.circle(300, 0, 56, {
        restitution: 0.9,
        render: {
            fillStyle: 'yellow',
            sprite: {
                texture: '/techball/nodejs.png',
                xScale: 0.55,
                yScale: 0.55
            }
        }
    });

    const ball2 = Bodies.circle(320, 0, 56, {
        restitution: 0.9,
        render: {
            fillStyle: 'yellow',
            sprite: {
                texture: '/techball/vuejs.png',
                xScale: 0.55,
                yScale: 0.55
            }
        }
    });
    const ball3 = Bodies.circle(310, 0, 56, {
        restitution: 0.9,
        render: {
            fillStyle: 'yellow',
            sprite: {
                texture: '/techball/mysql.png',
                xScale: 0.55,
                yScale: 0.55
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

    World.add(engine.world, [ball1, ball2, ball3, rope1, rope2, rope3]);

    Engine.run(engine);
    Render.run(render);
}

export default renderSubBalls;