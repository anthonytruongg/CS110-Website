/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import apple from "../assets/apple.jpg";
import me from "../assets/profile.jpeg";
import library from "../assets/library.jpg";
import engineering from "../assets/project.jpeg";
import engineering2 from "../assets/engineering.jpg";

import links from "../assets/links.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-scroll";
const Content = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-4">
        <div id="hero" className="">
          <ScrollContent
            imgUrl={me}
            subheading="Portfolio"
            heading="Anthony Truong"
          >
            <HeroSection />
          </ScrollContent>
        </div>
        <div id="about">
          <ScrollContent
            imgUrl={apple}
            subheading="Career,"
            heading="Aspirations, and Dreams"
          >
            <AboutSection />
          </ScrollContent>
        </div>
        <div id="education">
          <ScrollContent
            imgUrl={library}
            subheading="Credibility,"
            heading="Education, and Skills"
          >
            <EducationSection />
          </ScrollContent>
        </div>
        <div id="projects">
          <ScrollContent
            imgUrl={engineering}
            subheading="Noteworthy"
            heading="Projects and Achievements"
          >
            <ProjectSection />
          </ScrollContent>
        </div>
        <div id="extras">
          <ScrollContent
            imgUrl={engineering2}
            subheading="Insightful"
            heading="Hobbies and Interests"
          >
            <Interests />
          </ScrollContent>
        </div>
        <div id="contact">
          <ScrollContent
            imgUrl={links}
            subheading="Contact me!"
            heading="Professional Links"
            linkedIn={FaLinkedin}
          ></ScrollContent>
        </div>
      </div>
    </div>
  );
};

export default Content;

const IMG_PADDING = 12;

const ScrollContent = ({ imgUrl, subheading, heading, children, linkedIn }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy
          heading={heading}
          subheading={subheading}
          linkedIn={linkedIn}
        />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading, linkedIn }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);

  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>

      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
      {linkedIn ? (
        <p className="text-center text-4xl font-bold md:text-7xl mt-4">
          <div className="flex flex-row gap-4">
            <a
              href="https://www.linkedin.com/in/anthony-truongg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/anthonytruongg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare />
            </a>
          </div>
        </p>
      ) : null}
    </motion.div>
  );
};

const HeroSection = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">Who I am</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-slate-300 md:text-2xl">
        I am currently a Computer Engineering student with a passion for
        embedded systems. I enjoy interfacing with various embedded system
        components. Upon graduating, I will be actively searching for Embedded
        Engineering roles!
      </p>
      <p className="mb-8 text-xl text-slate-300 md:text-2xl">
        I consider myself to be hard working and detail oriented. When I work on
        projects, I always ensure that everything flows from one to the next. I
        like to have a high overview of all the tasks I need to get done.
      </p>
    </div>
  </div>
);

const AboutSection = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Career Goals
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-slate-300 md:text-2xl">
        I love apple products. I want to work for Apple as an embedded engineer
        sometime after graduating, or after I gain more working experience.
      </p>
      <p className="mb-8 text-xl text-slate-300 md:text-2xl"></p>
    </div>
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">Aspirations</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-slate-300 md:text-2xl">
        I am always trying to push myself. One of my biggest aspirations is to
        push my body to its limits. I will train for a marathon, and win my
        first gold in a BJJ tournament sometime post grad!
      </p>
      <p className="mb-8 text-xl text-slate-300 md:text-2xl"></p>
    </div>
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">Dreams</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-slate-300 md:text-2xl">
        Living in Tokyo is pretty cool dream of mine. Or any big city for that
        matter. I want to be in a walkable space where I can meet others.
      </p>
      <p className="mb-8 text-xl text-slate-300 md:text-2xl"></p>
    </div>
  </div>
);

const EducationSection = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">Education</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-slate-300 md:text-2xl">
        Bachelor of Science in Computer Engineering with graduation in Winter
        2025.
      </p>
      <p className="mb-8 text-xl text-slate-300 md:text-2xl">
        Associate’s of Arts in Liberal Arts: Math & Sciences
      </p>
    </div>
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">Skills</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-slate-300 md:text-2xl">
        C/C++/C#, Circuit Analysis and Design for Embedded Systems work.
      </p>
      <p className="mb-8 text-xl text-slate-300 md:text-2xl">
        React/TailwindCSS for Web Development and Software related work.
      </p>
    </div>
  </div>
);

const Interests = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">Interests</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-slate-300 md:text-2xl">
        I have numerous active hobbies, such as running, working on my car,
        snowboarding, etc.
      </p>
      <p className="mb-8 text-xl text-slate-300 md:text-2xl">
        Non active hobbies are video games and photography/videography!
      </p>
    </div>
  </div>
);

const ProjectSection = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">Projects</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-slate-300 md:text-2xl">
        Developed testing Software for an embedded system using the .NET
        framework at my Engineering internship.
      </p>
      <p className="mb-8 text-xl text-slate-300 md:text-2xl">
        Developed an algorithm for an embedded system to optimize testing
        process at my Engineering internship.
      </p>
    </div>
  </div>
);

const Navbar = () => {
  return (
    <div className="">
      <div id="nav" className="navbar bg-base-100">
        <div className="navbar-start"></div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <Link to="hero" smooth={true} duration={500}>
                Hero
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About me
              </Link>
            </li>
            <li>
              <Link to="education" smooth={true} duration={500}>
                Education and Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="extras" smooth={true} duration={500}>
                Hobbies
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
};
