"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: 1,
    name: "Flappy D6",
    description: "When the Abelian groups scatter all of S3’s elements across Flappy Groupland, D6 vows to retrieve every last element. Featuring references and mechanics inspired by group theory, Flappy D6 aims to make group theory fun, for math enthusiasts and non-mathematicians alike.",
    imageUrl: "/assets/flappy-d6.png",
    link: "https://flappy-d6.vercel.app/",
  },
  {
    id: 2,
    name: "Problem Writing Leadership",
    description: "We are dedicated to creating an educational and memorable math competition experience, writing 113 unique problems across 12 exams for over 2,500 high school students every year. This fall, we expanded our team size by 150% and are poised to expand our reach to middle schools by 2025.",
    imageUrl: "/assets/smt.png",
    link: "https://www.stanfordmathtournament.com/",
  },
  {
    id: 3,
    name: "Prophet Inequality Simulation",
    description: "Online selection processes have applications in many areas, such as job candidacy or trading strategy. In this simulation, users slide into a hands-on playground for these connections, bridging the theoretical probabilistic concepts within my paper to more concrete, tangible applications.",
    imageUrl: "/assets/prophit.png",
    link: "https://prophit.vercel.app/",
  },
  {
    id: 4,
    name: "Can LLMs survive in the desert?",
    description: "What individual LLMs may struggle with, a group of LLMs might not. In this project, we explore whether LLMs possess the same collaborative capabilities that my team and I used to complete this project.",
    imageUrl: "/assets/desert.png",
    link: "https://github.com/yashn35/CS224N-Final-Project",
  },
  {
    id: 5,
    name: "This interactive resume!",
    description: "An expedition into the world of front-end providing an alternate to my resume.",
    imageUrl: "/assets/resume.png",
    link: "https://portfolio2024-puce-delta.vercel.app/",
  },
  {
    id: 6,
    name: "Math Contest Awards",
    description: "Relevant Awards: Top 200, William Lowell Putnam Mathematical Competition 2023; Qualifier, USA Mathematical Olympiad (USA(J)MO) 2019-2022; 5th Place, Stanford Math Tournament (Number Theory) 2021. At above: a humorous response by google’s AI when searching \“putnam 2023 top 200\”.",
    imageUrl: "/assets/putnam.png",
    link: "https://drive.google.com/file/d/1UWhDU9tVRIpAIQarwwmb8U9G8UpG1gnI/view?usp=drive_link",
  },
  {
    id: 7,
    name: "Problem Writing Leadership",
    description: "We are dedicated to creating an educational and memorable math competition experience, writing 113 unique problems across 12 exams for over 2,500 high school students every year. This fall, we expanded our team size by 150% and are poised to expand our reach to middle schools by 2025.",
    imageUrl: "/assets/smt.png",
    link: "https://www.stanfordmathtournament.com/",
  },
  {
    id: 8,
    name: "Math Contest Awards",
    description: "Relevant Awards: Top 200, William Lowell Putnam Mathematical Competition 2023; Qualifier, USA Mathematical Olympiad (USA(J)MO) 2019-2022; 5th Place, Stanford Math Tournament (Number Theory) 2021. At above: a humorous response by google’s AI when searching \“putnam 2023 top 200\”.",
    imageUrl: "/assets/putnam.png",
    link: "https://drive.google.com/file/d/1UWhDU9tVRIpAIQarwwmb8U9G8UpG1gnI/view?usp=drive_link",
  },
];

const Experience = () => {
  return (
    <>
      <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="work experience">Work Experience</TabsTrigger>
          <TabsTrigger value="Education">Education</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
    {projects.map((project) => (
      <div
        key={project.id}
        className="border-2 border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
        onClick={() => window.open(project.link, "_blank")}
      >
        <img
          src={project.imageUrl}
          alt={project.name}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <h3 className="mt-4 font-bold text-lg">{project.name}</h3>
        <p className="text-gray-600 mt-2">{project.description}</p>
      </div>
    ))}
  </div>
</TabsContent>
      </Tabs>
    </>
  );
};

export default Experience;
