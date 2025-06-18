import { assets, workData,filterWork } from '@/assets/assets'
import React,{useState} from 'react'
import Image from "next/image";
import { motion } from "motion/react"
import { AiFillEye, AiFillGithub } from "react-icons/ai";
const Work = () => {
 
    // const [works, setWorks] = useState([]);
//     const [filterWork, setFilterWork] = useState([]);
    const [activeFilter, setActiveFilter] = useState("All");
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

     const filteredWorks =
    activeFilter === "All"
      ? filterWork
      : filterWork.filter((work) => work.tags.includes(activeFilter));

    const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
    }, 500);
  };
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
       <motion.h4 
               initial={{y:-20,opacity:0}}
               whileInView={{y:0,opacity:1}}
               transition={{duration:0.5,delay:0.3}}
       className='text-center mb-2 text-lg font-Ovo'> My portfolio</motion.h4>
       <motion.h2 
               initial={{y:-20,opacity:0}}
               whileInView={{y:0,opacity:1}}
               transition={{duration:0.5,delay:0.5}}
       className='text-center text-5xl font-Ovo'>My latest work </motion.h2>

       <motion.p 
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.5,delay:0.7}}
       className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
           Welcome to my web development portfolio! Explore a collection of projects
            showcasing my expertise in front-end development. 
       </motion.p>

        {/* <div className="app__work-filter">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div> */}
 <div className="flex flex-wrap justify-start items-center gap-3 mb-10">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`px-4 py-2 rounded-md font-bold cursor-pointer transition-all ${
              activeFilter === item
                ? "bg-blue-600 text-white"
                : "bg-white text-black hover:bg-blue-600 hover:text-white"
            }`}
          >
            {item}
          </div>
        ))}
      </div>


      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex-wrap justify-center items-center"
      >
        {filteredWorks.map((work, index) => (
            // console.log(work),
          <div
            key={index}
            className="w-[270px] 2xl:w-[350px] m-4 p-4 bg-zinc-300 text-black rounded-md flex flex-col transition-shadow hover:shadow-xl"
          >
            <div className="relative w-full h-[230px] 2xl:h-[350px] overflow-hidden rounded-md">
              <Image
                src={work.imgUrl}
                alt={work.title}
                className="w-full h-full object-cover rounded-md"
              />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
                className="absolute inset-0 bg-white bg-opacity-50  flex justify-center items-center gap-4 opacity-0 transition-opacity hover:opacity-50"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="w-[50px] h-[50px] flex justify-center items-center bg-black bg-opacity-50 rounded-full text-white"
                  >
                    <AiFillEye size={24} />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="w-[50px] h-[50px] flex justify-center items-center bg-black bg-opacity-50  rounded-full text-white"
                  >
                    <AiFillGithub size={24} />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="relative flex flex-col px-2 pt-4">
              <h4 className="font-bold text-lg leading-snug 2xl:mt-12 mt-4">{work.title}</h4>
              <p className="mt-2 text-sm text-gray-700">{work.description}</p>

              <div className="absolute top-[-25px] bg-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium">
                {work.tags[0]}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

       {/* <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6,delay:0.9}}
       className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 my-10 h-80'>
        {workData.map((project,index)=>(
            
            <motion.div 
            whileHover={{scale:1.05}}  
            transition={{duration:0.3}}
            key={index} 
            className='aspect-squre bg-no-repeat bg-cover bg-center rounded-lg 
            relative
            cursor-pointer group '
            style={{
                backgroundImage: `url(${project.bgImage})`,
                
            }}>
                <div className='bg-white w-10/12 rounded-md 
                absolute 
                bottom-5 
                left-1/2 -translate-x-1/2 py-3 px-5 flex items-center jusity-between
                duration-500 group-hover:bottom-7'>
                   
                    <div>
                        <h2 className='font-semibold'>{project.title}</h2>
                        <p className='text-sm text-gray-700'>{project.description} </p>
                    </div>
                      <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center 
                            shadow-[2px_2px_0_#000 group-hover:bg-lime-300 transition'>
                            <Image src={assets.send_icon} alt="send icon" className='w-5'/>
                    </div>
                </div>                  

            </motion.div>
        ))}
       </motion.div> */}

       {/* <motion.a 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.1,delay:0.5}}
        href="" 
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20'>
        Show more <Image src={assets.right_arrow_bold} alt='' className='w-4'/>
       </motion.a> */}

    </motion.div>
  )
}

export default Work
