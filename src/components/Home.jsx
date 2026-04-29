import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export const Home = () => {

  const videoRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline()

  

    tl.to(".homeHeading",{
      y: "-15vw",
      opacity: 100,
      duration:1,
      delay: 0.5

    }),

    

    gsap.to('.homePage', {
      scrollTrigger: {
        trigger: '.homePage',
        start: "top -10%",
        end: "top -60%",
        pin: true,
        scrub: 3
      }
    })

    gsap.from(videoRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 10%",
        end: "top -10%",
        scrub: 3,
      }
    })

    // gsap.to(".homePara, .mainDiv", {
    //   opacity: 0.4,
    //   scrollTrigger: {
    //     trigger: videoRef.current,
    //     start:"top 10%",
    //     end: "top -10%",
    //     scrub: 3
    //   }
    // })





  }, [])

  return (
    <div className='homePage h-[120vh] w-full bg-[#EFEAE3] text-black flex flex-col relative '>

      <section className='h-[50vh] w-full p-[2vw] pt-[10vw] flex justify-between'>
        <div className='flex flex-col gap-[1vw]'>
          <h3 className='homeHeading text-[7vw] leading-[6vw] translate-y-[15vw] opacity-0'>ANIMATRIX.</h3>

          <div className='flex items-center gap-2 '>
            <div className='h-[0.1vw] w-[5vw] bg-black'></div>
            <p className='text-[1.3vw] '>High-Impact Video Editing and Motion Graphix</p>
          </div>

        </div>
        <div className='absolute right-[-0.2vw] top-[25%] bg-black text-white flex flex-col gap-[2vw] p-[0.5vw] rounded-xl'>
          <div className='text-[1.1vw]'><i class="ri-instagram-fill"></i></div>
          <div className='text-[1.1vw]'><i class="ri-youtube-fill"></i></div>
        </div>


      </section>


      <section className='h-[45vh] w-full p-[2vw]'>
        <div className='flex items-center justify-between text-[1.2vw] text-black/60'>
          <h4 className=''>Scroll- Stopping</h4>
          <h4 className=''>Story-Driven</h4>
          <h4 className=''>Fast turnaround</h4>
          <h4 className=''>Time-saving</h4>
        </div>
        <div className='flex items-end justify-between p-[4vw] py-[8vw]'>

          <div className='flex flex-col gap-[0.7vw]'>
            <p className='feature w-[26vw] text-[1.1vw] font-medium'>Helping brands and creators turn unstructured footage into scroll-stopping content that boost retention and deliver result</p>
            <button className='text-[1vw] w-[9.5vw] flex gap-[0.6vw] font-medium  rounded-2xl'>Explore my work <i class="ri-arrow-right-line"></i></button>
          </div>
          <div className='brandss mr-[8vw]'>

            <h4 className='text-[2.1vw]'>Worked with</h4>
            <div className='flex  items-center gap-1 ml-[1vw]'>
              <h5 className='text-[1vw] font-medium'>brands</h5>
              <div className='h-[1.5vw] w-[1.5vw] bg-black/50 rounded-full'>
                <img className='h-[1.5vw] w-[1.5vw] object-cover rounded-full' src="https://i.pinimg.com/1200x/d6/1e/84/d61e847019cb5be3f074b170f24af627.jpg" alt="brand1" />
              </div>

              <div className='h-[1.5vw] w-[1.5vw] bg-black rounded-full'>
                <img className='h-[1.5vw] w-[1.5vw] object-cover rounded-full' src="https://i.pinimg.com/736x/90/ff/e1/90ffe1401b7ade28bd11f0437b6fd53a.jpg" alt="brand1" />
              </div>

              <div className='h-[1.5vw] w-[1.5vw] bg-black rounded-full'>
                <img className='h-[1.5vw] w-[1.5vw] object-cover rounded-full' src="https://i.pinimg.com/736x/24/86/76/248676f7d4a0818afa0dcf573e0c8b43.jpg" alt="brand1" />
              </div>

              {/* <h5 className='text-[1vw] font-medium'>+</h5> */}

            </div>
            
          </div>

        </div>
      </section>










      <div ref={videoRef} className='z-99 absolute rounded-2xl top-[20%] left-[10%] h-[40vw] w-[80vw]'>
        <video autoPlay muted loop className=' rounded-2xl h-[40vw] w-[80vw] object-cover' src='https://www.pexels.com/download/video/32150707/' alt='home-page_video_broken' />
      </div>

      {/* Glow Effect  */}

      {/* <div className=' absolute right-[-19vw] top-[-20vw] h-[45vw] w-[45vw] rotate-180 rounded-full opacity-[0.4] blur-[190px] bg-[#A78BFA]'> </div> */}
      <div className=' right-[-19vw] top-[30vw] pointer-events-none absolute bg-[#A78BFA] rotate-180 h-75 w-150 rounded-full opacity-40 blur-[250px]
         bg-[radial-gradient(circle_at_30%_40%,rgba(122, 28, 172, 0.5),transparent_70%)]'> </div>


      {/* Glow Effect  */}

      <div className='z-999 absolute left-[-13vw] bottom-[-10vw] h-[45vw] w-[45vw] rotate-135 rounded-full opacity-[0.4] blur-[190px] bg-[#A78BFA]'> </div>
      {/* <div className=' left-[-13vw] bottom-[40vw] pointer-events-none absolute bg-[#A78BFA] rotate-135 h-[300px] w-[600px] rounded-full opacity-40 blur-[250px]
         bg-[radial-gradient(circle_at_30%_40%,rgba(122, 28, 172, 0.5),transparent_70%)]'> </div> */}


      {/* bg-[#A78BFA] */}


    </div>
  )
}

export default Home