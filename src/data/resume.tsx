import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import Html5 from "@/components/ui/svgs/Html5";
import { Css3 } from "@/components/ui/svgs/Css3";
import { Javascript } from "@/components/ui/svgs/Javascript";
import { Tailwindcss } from "@/components/ui/svgs/Tailwindcss";
import { Git } from "@/components/ui/svgs/Git";
// import { Nodejs } from "@/components/ui/svgs/nodejs";
// import { Python } from "@/components/ui/svgs/python";
// import { Golang } from "@/components/ui/svgs/golang";
// import { Postgresql } from "@/components/ui/svgs/postgresql";
// import { Docker } from "@/components/ui/svgs/docker";
// import { Kubernetes } from "@/components/ui/svgs/kubernetes";
// import { Java } from "@/components/ui/svgs/java";
// import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Ahmad Fiaz",
  initials: "AF",
  url: "https://ahmadfiaz.com",
  location: "Multan, Punjab, Pakistan",
  locationLink: "https://www.google.com/maps/place/Multan,+Punjab,+Pakistan",
  description:
    "Front-End Developer passionate about creating visually appealing digital experiences. I design and implement user-friendly interfaces using React, Tailwind CSS, and TypeScript.",
  summary:
    "I am an experienced front-end developer passionate about creating visually appealing digital experiences. My comprehensive skill set includes HTML, CSS, JavaScript, React JS, Tailwind CSS, Sass, Git, and GitHub. With my expertise, I design and implement user-friendly interfaces. As a collaborative team player, I am eager to contribute my skills to a dynamic team where I can further my knowledge and make a significant impact on web development.",
  avatarUrl: "/me.png",
  skills: [
    { name: "HTML", icon: Html5 },
    { name: "CSS", icon: Css3 },
    { name: "JavaScript", icon: Javascript },
    { name: "React JS", icon: ReactLight },
    { name: "Next JS", icon: NextjsIconDark },
    // { name: "Node JS", icon: Nodejs },
    { name: "TypeScript", icon: Typescript },
    { name: "Tailwind CSS", icon: Tailwindcss },
    { name: "Git", icon: Git },
    { name: "GitHub", icon: Icons.github },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ahmadfiaz.9089@gmail.com",
    tel: "+923066495894",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ahmadfiaz12",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ahmad-fiaz-a37909302",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "ahmadfiaz.9089@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Lead Softwares",
      href: "https://www.leadsoftwares.com",
      badges: [],
      location: "Multan, Punjab",
      title: "React Developer",
      logoUrl: "/lead-softwares.png", // TODO: add company logo
      start: "April 2024",
      end: "Present",
      description:
        "Designing and implementing responsive web applications using React.js. Utilizing Mantine to build and manage reusable UI components efficiently. Working closely with cross-functional teams to identify and resolve technical challenges, improving overall project outcomes. Enhancing web application performance to ensure fast load times and smooth user experiences.",
    },
    {
      company: "Fiesta Consultants LLC",
      href: "#", // TODO: add company website if available
      badges: [],
      location: "Multan, Punjab",
      title: "Front End Developer",
      logoUrl: "/fiesta-consultants.png", // TODO: add company logo
      start: "January 2023",
      end: "May 2024",
      description:
        "Designed and developed front-end interfaces for websites. Executed tasks efficiently, resulting in reduced project delivery time. Maintained high-quality standards and exceeded client expectations. Gained proficiency in web development techniques and technologies while successfully implementing innovative solutions.",
    },
  ],
  education: [
    {
      school: "BS Computer Science",
      href: "#", // TODO: add university website
      degree: "Bachelor's Degree in Computer Science (BS)",
      logoUrl: "/university.png", // TODO: add school logo
      start: "2020",
      end: "2023",
    },
    {
      school: "Government Millat Graduate College",
      href: "#",
      degree: "FSc Pre-Engineering",
      logoUrl: "/millat-college.png",
      start: "2021",
      end: "2022",
    },
    {
      school: "Govt. Millat High School",
      href: "#",
      degree: "Matriculation",
      logoUrl: "/millat-school.png",
      start: "2020",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [],
} as const;
