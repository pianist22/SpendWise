'use client'

import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { TypeAnimation } from "react-type-animation"

const HeroSection = () => {
    const imageRef = useRef();

    const str = " AI Click";
    useEffect(()=>{
        const imageElement = imageRef.current;
        const handleScroll = ()=>{
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;

            if(scrollPosition > scrollThreshold){
                imageElement.classList.add("scrolled");
            }
            else{
                imageElement.classList.remove("scrolled");
            }
        }

        window.addEventListener("scroll",handleScroll);
        
        return ()=> window.removeEventListener("scroll",handleScroll);
    },[])
  return (
    <div className="pb-20 px-4">
        <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-8xl lg:text-[100px] pb-6 gradient-title">Manage Your Finances <br/> with just an 
            <span>
                    {" "}
                    <TypeAnimation className="color font-italic"
                        sequence={[str,4000,""]}
                        repeat={Infinity}
                        cursor={true}
                        style={
                            {
                                whiteSpace:"pre-line",
                                display:"inline-block"
                            }
                        }
                    />
            </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.
            </p>
            <div className="flex justify-center gap-4">
                <Link href="/dashboard">
                            <Button size="lg" className="px-8">
                            Get Started
                            </Button>
                </Link>
                <Link href="https://drive.google.com/file/d/1SsikrwQV3KIEMLniCb1ACj8Bzl-NjkZM/view?usp=sharing">
                            <Button size="lg" variant="outline" className="px-8">
                            Watch Demo
                            </Button>
                </Link>
            </div>
            <div className="hero-image-wrapper">
                <div ref={imageRef} className="hero-image">
                    <Image
                        src="/hero.png"
                        width={1120}
                        height={720}
                        alt="Dashboard Preview"
                        className="rounded-lg shadow-2xl border mx-auto"
                        priority
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection

