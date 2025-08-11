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
    name: "SocialParrot",
    description: "Full-stack/ML project integrating OpenAI's CLIP, Word2Vec, and Elena Barry's Emojional Embeddings into a cost-optimized, time-efficient application that classifies user-provided images with emoji labels. A highly relevant project with applications in social media, accessibility technology, and video game AI.",
    imageUrl: "/assets/sp.png",
    link: "https://social-parrot.vercel.app/",
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
    description: "A Next.js expedition into the world of front-end providing an alternate to my resume.",
    imageUrl: "/assets/resume.png",
    link: "https://portfolio2024-puce-delta.vercel.app/",
  },
  {
    id: 6,
    name: "COMPOSE Leaderboard Prototype",
    description: "Built using the Next.js framework and a JavaScript webscraper to create a prototype for the leaderboard now currently being used by the entire 70-person Stanford Math Tournament organization.",
    imageUrl: "/assets/ldr.png",
    link: "https://github.com/coderwizz/compose-ldr",
  },
  {
    id: 7,
    name: "Math Outreach Leadership",
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
  {
    id: 9,
    name: "Deep RL Research for CS224R",
    description: "Built staged data pipeline tokenizing step-by-step reasoning chains into reverse curriculum difficulty stages for final project implementing novel R3 modifications (FastWarm, StartHard, FinalVanilla, GradMix); trained Qwen2.5-Math-1.5B with GRPO on Orca-Math data, achieving 70.8% accuracy post-SFT (+4.2%), yielding insights transferable to market data parsing in quant trading.",
    imageUrl: "/assets/acm.png",
    link: "https://github.com/jackellishsieh/LLM-R4/tree/master/data%20scripts",
  },
];


const workExperiences = [
  {
    id: 1,
    title: "Research Intern, CURIS",
    description: "Improved the performance of state-of-the-art LLM routers by 1.37% through the application of novel machine learning and cascading algorithms to optimize decision-making. Additionally, enhanced the RouterBench codebase by integrating four cutting-edge routers and refining the AIQ analysis algorithm for more accurate performance assessments.",
    imageUrl: "/assets/curis.png",
    link: "https://drive.google.com/file/d/1C96xcRiaKa-RLNgOat6vaumOCeIK0CiG/view",
  },
  {
    id: 2,
    title: "Undergraduate Researcher, SURIM",
    description: "Improved the known adversarial performance of fair, sample-based online selection algorithms by 50% through the application of theoretical probability. Collaboratively authored a 40-page group paper that conceptualized and promoted the topic under the guidance of a mentor.",
    imageUrl: "/assets/surim.png",
    link: "https://drive.google.com/file/d/1I-cfriVrOFyMCmJFaVVYS5jgbN4hH-Zj/view?usp=drive_link",
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
        <TabsContent value="work experience">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {workExperiences.map((exp) => (
              <div
                key={exp.id}
                className="border-2 border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => window.open(exp.link, "_blank")}
              >
                <img
                  src={exp.imageUrl}
                  alt={exp.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <h3 className="mt-4 font-bold text-lg">{exp.title}</h3>
                <p className="text-gray-600 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="Education">
          <ul className="p1-10">
            <div className="text-2xl font-bold">Stanford University, B.S Math, M.S Computer Science</div>
            <li className="list-disc">Intro to Statistical Inference</li>
            <li className="list-disc">Probability and Stochastic Differential Equations for Applications</li>
            <li className="list-disc">Intro Probability Theory</li>
            <li className="list-disc">Deep Reinforcement Learning (PyTorch, NumPy)</li>
            <li className="list-disc">Machine Learning (boosted trees, NN, feature engineering)</li>
            <li className="list-disc">Computer Architecture/Systems</li>
            <li className="list-disc">Programming Abstractions (C++, algorithms)</li>
            <li className="list-disc">Intro to Financial Decision-Making</li>
            <li className="list-disc">Continuous Methods (honors math intro to real anal. lin alg)</li>
            <li className="list-disc">Polya Problem Solving Seminar</li>
            <li className="list-disc">NLP with Deep Learning (Python, Pandas, NumPy)</li>
            <li className="list-disc">Differential Equations w. Lin Alg/Fourier</li>
            <li className="list-disc">Information Science and Engineering</li>
            <li className="list-disc">Independent Study (with Professor Nima Anari)</li>
          </ul>
        </TabsContent>
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
