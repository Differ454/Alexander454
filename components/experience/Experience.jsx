import React from "react";
import "./Experience.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiCsswizardry } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiThreedotjs } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";
import { IoLogoPython } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";




function Experience() {
  return (
    <section id="experience">
      <h1>Experience</h1>
      <h2> Software ~ Firmware Development</h2>
      <div className="container experience__container">
        <div className="experience__fontend">
          <h3>Frontend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineHtml5 className="experience__details-icon" size={28}/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiCsswizardry className="experience__details-icon" size={28}/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiJavascript className="experience__details-icon" size={28}/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" size={28}/>
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <GrReactjs className="experience__details-icon" size={28}/>
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            
             <article className="experience__details">
              <SiThreedotjs className="experience__details-icon" size={28}/>
              <div>
                <h4>ThreeJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article> 
          </div>
        </div>
        {/*----------------> End of Frontend <-----------------*/}
        <div className="experience__backend">
          <h3>Backend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" size={28}/>
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiPhp className="experience__details-icon" size={28}/>
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiMongodb className="experience__details-icon" size={28}/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiMysql className="experience__details-icon" size={28}/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <CgCPlusPlus className="experience__details-icon" size={28}/>
              <div>
                <h4>C++ (Firmware ~ IoT)</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <SiCplusplus className="experience__details-icon" size={28}/>
              <div>
                <h4> C (Firmware ~ IoT)</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoPython className="experience__details-icon" size={70}/>
              <div>
                <h4>Python ~ Machine Learning - Artificial Intelligence </h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTypescript className="experience__details-icon" size={20}/>
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>

    
  );
}

export default Experience;
