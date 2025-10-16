'use client'
import { useEffect, useRef } from "react"

const Hero = () => {
    const videoRef = useRef(null)

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2
    }, [])

    return (
        <section className="h-fit lg:h-[80vh] text-center col-center mt-40 lg:mt-20 2xl:mt-[7vh]">
            <div className="relative z-10 col-center lg:translate-y-16 text-center">
                <h1 className="font-semibold lg:text-3xl 2xl:text-5xl text-white">MacBook Pro</h1>
                <img src="/hero.png" alt="Hero Image" />
            </div>
            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

            <button className="relative z-10 bg-primary text-white py-2 px-6 mt-10 lg:mt-0 mb-5 rounded-full font-semibold text-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out">Buy</button>
        </section>
    )
}

export default Hero