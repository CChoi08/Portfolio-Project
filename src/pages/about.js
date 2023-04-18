import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/ai_portrait.png"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration:3000});
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView) {
            motionValue.set(value);
        }
    },[isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    },[springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>ChristopherChoi | About Page</title>
            <meta name='description' content='any description' />
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-3 flex flex-col  items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me</h2>
                        <p className='font-medium'>
                            Hello, my name is Christopher Choi, and I&apos;m a full-stack web developer with a strong passion 
                            for creating exceptional digital experiences that are both visually appealing and highly 
                            functional. I recently graduated from Coding Dojo and am constantly seeking new opportunities 
                            to learn and enhance my skills.
                        </p>
                        <p className='font-medium my-4'>
                            In my view, good design isn&apos;t just about aesthetics, but also involves solving problems and 
                            providing intuitive, user-friendly experiences.
                        </p>
                        <p className='font-medium'>
                            My approach to web development emphasizes design excellence and user-centered thinking, 
                            ensuring that every project I work on meets the highest standards of quality. I would love 
                            to bring my skills and passion to your next project and help create a website or application 
                            that truly stands out.
                        </p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
                    '>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                        <Image src={profilePic} alt="ChristopherChoi" className="w-full h-auto rounded-2xl"
                            priority
                            sizes="(max-width:768px) 100vw,
                                    (max-width:1200px) 50vw,
                                    33vw"
                        />
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-around xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-3xl font-bold text-end sm:text-2xl xs:text-xl'>
                                San Francisco, Bay Area
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-end md:text-lg sm:text-base '>location</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-3xl font-bold xs:text-2xl'>
                                <AnimatedNumbers value={5} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-end md:text-lg sm:text-base'>projects completed</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-3xl font-bold xs:text-2xl'>
                                <AnimatedNumbers value={1} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 text-end md:text-lg sm:text-base'>years of experience</h2>
                        </div>
                    </div>
                </div>
                <Skills />
                <Experience />
                <Education />
            </Layout>
        </main>
    </>
  )
}

export default about