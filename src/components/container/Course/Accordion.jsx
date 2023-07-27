import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
const Accordion = ({ id, title }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };
  return (
    <div className="pb-8">
      <div className="flex items-center justify-between">
        <div className="sm:text-xl text-base font-bold">{title}</div>
        <BsChevronDown
          className={`${
            id === activeIndex ? "rotate-180" : "rotate-0"
          } cursor-pointer transition-all duration-300`}
          onClick={() => handleClick(id)}
        />
      </div>
      <AnimatePresence>
        {id === activeIndex && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
            className="pt-4"
          >
            <p className="text-sm leading-7 text-gray">
            SkillX is an innovative e-learning platform that offers a wide range of courses and educational resources to help learners enhance their skills
            </p>
            <p className="text-sm leading-7 text-gray">
            From SkillX, you can learn a wide range of subjects and skills to enhance your knowledge and expertise. Some of the key learning opportunities available on SkillX include:

          Professional Development: Improve your career prospects and advance in your profession by taking courses in business, leadership, communication, project management, and more.

          Technology and Programming: Learn programming languages, web development, data science, artificial intelligence, and other tech-related skills to stay relevant in the digital age.
            </p>
            <p className="text-sm leading-7 text-gray">
            SkillX is an innovative e-learning platform that offers a wide range of courses and educational resources to help learners enhance their skills and knowledge. It provides a convenient and accessible way for individuals to learn new topics, develop expertise in various fields, and achieve their personal and professional goal
            </p>
            <p className="text-sm leading-7 text-gray">
            SkillX is an innovative e-learning platform that offers a wide range of courses and educational resources to help learners enhance their skills and knowledge. It provides a convenient and accessible way for individuals to learn new topics, develop expertise in various fields, and achieve their personal and professional goal
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
