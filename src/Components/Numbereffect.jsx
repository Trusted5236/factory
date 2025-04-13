import {useSpring, animated} from "react-spring"
export default function Effect({n, bol}){

    const numberAnim = useSpring({
        from:{number:0},
        number:n,
        delay:200,
        config:{mass:1, tension:20, friction: 10, duration:3000},
    });

    return <animated.div>
        {numberAnim.number.to(val=> `${Math.floor(val)}${bol}`)}
    </animated.div>
}