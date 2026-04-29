import { useRef, useState } from "react"

const Projects =()=>{

    const videoRef = useRef(null)
    const [isplaying, setIsplaying] = useState(false)
    
    const handleEnter=()=>{
        videoRef.current.play()
        
    }
    const handleLeave=()=>{
        videoRef.current.pause()
    }


    return(
        <div className="min-h-[200vh] w-full bg-[#EFEAE3] text-black p-[2vw]">
            <h4 className="text-[4vw] ml-[25vw] tracking-wider">A curated selection of work</h4>


            <section className="flex gap-[5vw] mt-[4vw]">
                <div className="h-[75vh] w-[30vw] flex flex-col">
                    <div className="h-[65vh] w-[30vw] ">
                        <video  ref={videoRef} onMouseEnter={handleEnter} onMouseLeave={handleLeave} className={`cursor-pointer h-[65vh] w-[30vw] object-cover `} src="https://www.pexels.com/download/video/6975526/"></video>
                        {/* <video className="h-[65vh] w-[30vw] object-cover " src=""></video> */}
                    </div>
                </div>
                <div className="h-[75vh] w-[65vw] flex flex-col justify-between">
                    <div className="w-full h-[20vh] flex justify-between ">
                        {/* <p className="w-[30vw] text-[0.95vw] font-medium text-black/60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam dolore odio quia placeat in nulla quidem dignissimos recusandae perspiciatis molestiae, ipsum, asperiores porro. Delectus!</p> */}
                        <p className="w-[30vw] text-[0.95vw] font-medium text-black/60">A short, relatable storytelling based UGC video created for Swiggy, focussing on real-life hunger moments and instant food cravings. The video builds an emotional narrative and transitions into Swiggy as the quick, convenient solution.</p>
                        {/* <h4 className="text-[2vw]">Hover on <br /> Container</h4> */}
                    </div>
                    <div className="w-full h-[50vh] flex justify-end ">
                        <div className="flex flex-col">
                            {/* <h5 className="text-[1.2vw]">Swiggy</h5> */}
                        <div className="w-[40vw] h-[51vh]  flex flex-col gap-[1vw]">
                        <video className="w-[40vw] h-[48vh] object-cover " src="https://www.pexels.com/download/video/13929660/"></video>
                        <p className="text-[0.9vw] font-medium text-black/60">Lorem ipsum dolor sit amet consectetur, adipisicing elit somewhre <br /> Maxime eaque quam suscipit error recusandae adipisci. <br /></p>
                        {/* <p className="text-[0.9vw] font-medium text-black/60">A short, relatable storytelling based UGC video created for <br /> <span className="text-black">Swiggy</span>, focussing on real-life hunger moments and instant food cravings. </p> */}
                
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-[2vw] flex gap-[7vw]">
                <div className="h-[80vh] w-[30vw] flex flex-col justify-between">
                    <div className="flex justify-between font-medium text-[0.9vw] text-black/60">
                        <h4>Impact</h4>
                        <h4>Driven</h4>
                    </div>
                    <div className="h-[76vh] w-full flex flex-col gap-[3vw]">
                
                        <video className="h-[74vh] w-full object-cover " src="https://www.pexels.com/download/video/6324572/"></video>
                        <p className="text-[0.9vw] font-medium text-black/60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Autem odit ducimus nemo eius sapiente, corrupti maxime!</p>
                    </div>

                </div>

                <div className="h-[75vh] w-[60vw] flex items-end justify-between">
                <div className="w-full h-[62vh] flex justify-end ">
                        <div className="flex flex-col">
                            {/* <h5 className="text-[1.2vw]">Healofy</h5> */}
                        <div className="w-[40vw] h-[62vh] flex flex-col gap-[3vw]">
                        <video className="w-[40vw] h-[60vh] object-cover " src="https://www.pexels.com/download/video/6557768/"></video>
                        <p className="text-[0.9vw] font-medium text-black/60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Autem odit ducimus nemo eius sapiente, corrupti maxime!</p>
                
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects