export type PortfolioItem = {
  id: number;
  category: "web" | "it" | "installation";
  title: string;
  description: string;
  images: string[];
  link?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: "web",
    title: "My Peronal Portfolio",
    description: "Thid is my personal portfolio website built with Next.js and Tailwind CSS.",
    images: [
        "/portfolio/personal/img1.png", 
        "/portfolio/personal/img2.png",
        "/portfolio/personal/img3.png",
    ],
    link: "https://eranda-portfolio.vercel.app/",
  },
  {
    id: 2,
    category: "installation",
    title: "Dashcam Installation & Setup (Front + Rear)",
    description: "2017 Honda HR-V dashcam installation and setup. Includes front and rear dashcams, wiring, and configuration.",
    images: [
        "/portfolio/dashcam-install-1/img1.png",
        "/portfolio/dashcam-install-1/img2.png",
        "/portfolio/dashcam-install-1/img3.png",

        "/portfolio/dashcam-install-1/img5.png",
        "/portfolio/dashcam-install-1/img6.png",
        "/portfolio/dashcam-install-1/img7.png",
    ],
  },
  // {
  //   id: 3,
  //   category: "it",
  //   title: "Job Title",
  //   description: "Short one-line description of what you fixed or set up.",
  //   images: [
  //       "/portfolio/job1.png"
  //   ],
  // },


];