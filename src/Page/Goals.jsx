import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Goals() {
  return (
    <div>
       <h1 className="text-white font-bold text-3xl my-10 text-center">
          Goals
          <hr className="w-10 h-1 mx-auto my-4 border-0 rounded md:my-3 bg-blue-500"/>
        </h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What I bring to the table?</AccordionTrigger>
          <AccordionContent>
            I bring a strong blend of technical expertise, problem-solving
            skills, and a passion for continuous learning to the table. My
            proficiency in Data Structures and Algorithms, backed by solving
            400+ problems on platforms like LeetCode and GeeksforGeeks,
            showcases my ability to tackle complex problems efficiently. As a
            full-stack web developer, I possess hands-on experience with modern
            technologies, including React, Node.js, Express.js, MongoDB, and
            Socket.io, enabling me to build scalable and dynamic applications.
            Moreover, my academic foundation in Computer Science equips me with
            a solid understanding of core concepts like OOP, DBMS, and Operating
            Systems. I also excel at adapting to new challenges, whether it's
            mastering advanced frameworks, optimizing solutions, or contributing
            effectively to team-based projects. My dedication, combined with a
            growth-oriented mindset, ensures that I consistently deliver value
            to every opportunity I take on.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Where do I see myself in next 5 years?
          </AccordionTrigger>
          <AccordionContent>
            In the next five years, I see myself leading impactful projects,
            solving complex challenges, and embracing opportunities to innovate.
            I aim to build diverse, scalable solutions, mentor aspiring
            developers, and take on leadership roles. With every challenge, I’ll
            grow stronger, becoming a versatile professional driven by
            creativity, passion, and excellence.
          </AccordionContent>
        </AccordionItem>
        
      </Accordion>
    </div>
  );
}
