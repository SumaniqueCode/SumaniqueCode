import { goretoxLogo } from "@/assets/images/companies";
import {
  goretoxLanding, goretoxMentors, goretoxExplore, goretoxContact, goretoxAbout, goretoxWhyGoretox,
  goretoxMentorsOverview, goretoxWhy, goretoxLandingOverview, goretoxBlogs,
  shareinsightnepalLanding, shareinsightnepalRegister, shareinsightnepalLogin, shareinsightnepalProfile,
  shareinsightnepalUserHomePage, shareinsightnepalUserServices, shareinsightnepalUserPortfolio,
  shareinsightnepalUserLiveMarket, shareinsightnepalUserWatchlist, shareinsightnepalBrokers,
  shareinsightnepalAdmins, shareinsightnepalUsers, shareinsightnepalAdminDashboard,
  dailyrepoDashboard, dailyrepoWorkspaces, dailyrepoModules, dailyrepoReports, dailyrepoTeams,
  skillkarmaLandingPage, skillkarmaSignup, skillkarmaLogin, skillkarmaProfile, skillkarmaAppList,
  skillkarmaDNDskills, skillkarmaEditProfile, skillkarmaSkillCards, skillkarmaSkillDetails,
  skillkarmaSkillMap, skillkarmaAddSkill, skillkarmaPageNotFound,
  saanokaamMainUI1, saanokaamMainUI, saanokaamMainUI2, saanokaamMainUI3, saanokaamLogin,
  saanokaamRegister, saanokaamEmployerDashboard, saanokaamFreelancerDashboard,
  saanokaamAddTask, saanokaamTasklist, saanokaamTaskDetails, saanokaamTaskDetailUser,
  cchubLanding, cchubLogin, cchubRegister, cchubProducts, cchubAddProduct, cchubCart,
  cchubOrders, cchubOrderList, cchubOrderStatus, cchubOrderCheckout, cchubProductDetails,
  cchubProductDesc, cchubSellerDashboard, cchubProfile,
  pathshalaTmsLanding, pathshalaTmsDashboard, pathshalaTmsProjectList, pathshalaTmsProjectDetails,
  pathshalaTmsTaskDetails, pathshalaTmsEditTask, pathshalaTmsProfile, pathshalaTmsLogin, pathshalaTmsAbout,
  pathshalaTmsContact, pathshalaTmsServices, pathshalaTmsFooter,
  pathshalaBmsLanding, pathshalaBmsAdminDashboard, pathshalaBmsWriterDashboard, pathshalaBmsBlogList,
  pathshalaBmsBlogDetail, pathshalaBmsBlogs, pathshalaBmsProfile, pathshalaBmsLogin, pathshalaBmsAbout,
  pathshalaBmsFooter,
  workhubLanding, workhubLogin, workhubJoblist, workhubApplyForJob, workhubCompanyPage,
  workhubProfile1, workhubProfile2, workhubResume, workhubOtpVerification,
  workhubAdminPanel, workhubFooter
} from "@/assets/images/projects";

export const projects = [
  {
    id: 1,
    name: "GoretoX",
    description:
      "GoretoX is a microservice-based web application developed for an EdTech company, featuring a modern, responsive design with focus on performance and SEO optimization. The platform provides a seamless user experience with intuitive navigation, real-time data updates, and secure payment integrations. Built with a focus on scalability, it uses a modular architecture that allows for easy expansion and maintenance.",
    images: [
      goretoxLanding, goretoxMentors, goretoxExplore, goretoxContact, goretoxAbout, goretoxWhyGoretox,
      goretoxMentorsOverview, goretoxWhy, goretoxLandingOverview, goretoxBlogs
    ],
    features: [
      "Microservice Architecture",
      "Responsive Design",
      "SEO Optimization",
      "Secure Payments",
      "Real-time Updates",
    ],
    challenges:
      "Designing and implementing a scalable microservice architecture while ensuring smooth integration between services was a major challenge. Implementing secure payment processing with Stripe and optimizing for performance required careful planning and execution.",
    outcome:
      "The platform successfully provided a performant and scalable solution that improved user engagement and streamlined business operations.",
    techs: ["React", "Django", "Tailwind CSS", "PostgreSQL", "Redis", "Stripe"],
    codelink: "#",
    livelink: "https://goretox.com/",
  },
  {
    id: 2,
    name: "Workhub",
    description:
      "Workhub is a comprehensive job portal platform developed for Nepal, connecting job seekers with employers through an intelligent matching system. The platform features AI-driven job recommendations that analyze user profiles and preferences to suggest relevant opportunities. Job seekers can generate professional CVs automatically, while companies can manage job postings and applications with ease. The system implements modern role-based access control to ensure proper management for different user types.",
    images: [
      workhubLanding, workhubLogin, workhubJoblist, workhubApplyForJob, workhubCompanyPage,
      workhubProfile1, workhubProfile2, workhubResume, workhubOtpVerification,
      workhubAdminPanel, workhubFooter
    ],
    features: [
      "AI Job Recommendations",
      "Auto CV Generation",
      "Role-based Access Control",
      "Company Dashboard",
      "Application Tracking",
    ],
    challenges:
      "Building an effective AI recommendation system that accurately matches job seekers with suitable positions required extensive algorithm development. Implementing a user-friendly CV generation system that produces professional resumes was another key challenge.",
    outcome:
      "Workhub has successfully connected numerous job seekers with relevant opportunities, streamlining the recruitment process in Nepal.",
    techs: ["Django", "React", "PostgreSQL", "AI/ML"],
    codelink: "https://github.com/SumaniqueCode/WorkHub",
    livelink: "#",
  },
  {
    id: 3,
    name: "Share Insight Nepal",
    description:
      "Share Insight Nepal is a full-featured stock market management web application built specifically for Nepalese investors. The platform allows users to track their shareholdings in detail, monitor real-time profit and loss, and analyze overall portfolio performance with clarity. It integrates real-time market data to keep investors updated on price movements and market trends. In addition, the system provides risk assessment tools that help users understand exposure and make strategic investment decisions. By combining data accuracy, analytical insights, and a user-friendly interface, Share Insight Nepal aims to simplify stock portfolio management and empower investors to make confident, well-informed financial decisions in the Nepalese stock market.",
    images: [
      shareinsightnepalLanding, shareinsightnepalRegister, shareinsightnepalLogin, shareinsightnepalProfile,
      shareinsightnepalUserHomePage, shareinsightnepalUserServices, shareinsightnepalUserPortfolio,
      shareinsightnepalUserLiveMarket, shareinsightnepalUserWatchlist, shareinsightnepalBrokers,
      shareinsightnepalAdmins, shareinsightnepalUsers, shareinsightnepalAdminDashboard
    ],
    features: [
      "Portfolio Management: Track your shareholdings and monitor performance over time.",
      "Profit and Loss Analysis: Analyze your investment returns with detailed reports.",
      "Risk Assessment: Evaluate the risk associated with your portfolio.",
      "Real-time Market Data: Stay updated with live stock prices and market trends.",
      "User-friendly Interface: Intuitive design for easy navigation and management.",
    ],
    challenges:
      "Integrating reliable real-time market data from multiple sources while maintaining accuracy and performance was a major challenge. Another key challenge was designing an interface that could serve both beginner investors and experienced traders without overwhelming either group.",
    outcome:
      "The application successfully provided investors with a powerful and easy-to-use portfolio management tool. Users reported improved decision-making, better visibility into their investments, and increased confidence in managing their stock portfolios.",
    techs: ["Laravel", "PHP", "Tailwind", "MySQL"],
    codelink: "https://github.com/SumaniqueCode/shareInsightNepal",
    livelink: "https://shareinsightnepal.up.railway.app",
  },
  {
    id: 4,
    name: "Daily Repo",
    description:
      "Daily Repo is a collaborative daily task and reporting system designed to improve transparency, accountability, and productivity within teams. The platform enables team members to log their daily tasks, share progress updates in real time, and generate structured reports effortlessly. Its clean and intuitive user interface ensures that users can focus on their work rather than managing complex tools. By centralizing daily reporting and progress tracking, Daily Repo helps teams stay aligned on goals, identify bottlenecks early, and maintain consistent communication across projects.",
    images: [
      dailyrepoDashboard, dailyrepoWorkspaces, dailyrepoModules, dailyrepoReports, dailyrepoTeams, dailyrepoWorkspaces
    ],
    features: [
      "Daily Task Logging",
      "Real-time Updates",
      "Collaborative Reporting",
      "Clean UI",
      "Team Management",
    ],
    challenges:
      "Handling real-time data synchronization across multiple users without conflicts required careful backend design and performance optimization. Creating a simple yet powerful reporting flow also involved multiple iterations based on user feedback.",
    outcome:
      "Daily Repo streamlined the daily reporting process, reduced manual follow-ups, and significantly improved team coordination and productivity.",
    techs: ["React", "TypeScript", "Redux", "Axios", "MUI", "Laravel"],
    codelink: "https://github.com/SumaniqueCode/Daily-report-react-laravel",
    livelink: "#",
  },
  {
    id: 6,
    name: "Skill Karma",
    description:
      "Skill Karma is an innovative time-based skill exchange platform that connects individuals who want to offer, exchange, or monetize their skills. Users can create detailed profiles, showcase their expertise, and discover skill providers nearby through an interactive map-based discovery system. The platform also includes a Kanban-style task tracking board that helps users manage ongoing exchanges, collaborations, and commitments visually. By promoting skill sharing and community collaboration, Skill Karma creates opportunities for learning, networking, and mutual growth.",
    images: [
      skillkarmaLandingPage, skillkarmaSignup, skillkarmaLogin, skillkarmaProfile, skillkarmaAppList,
      skillkarmaDNDskills, skillkarmaEditProfile, skillkarmaSkillCards, skillkarmaSkillDetails,
      skillkarmaSkillMap, skillkarmaAddSkill, skillkarmaPageNotFound
    ],
    features: [
      "Skill Exchange",
      "Map-based Discovery",
      "Kanban Task Tracking",
      "User Profiles",
      "Secure Transactions",
    ],
    challenges:
      "Implementing accurate geolocation services and building a smooth drag-and-drop Kanban interface required careful handling of performance and user experience.",
    outcome:
      "The platform successfully fostered a collaborative community where users could easily find, exchange, and manage skills with confidence.",
    techs: ["MongoDB", "Express", "React", "Node", "MUI", "Redux", "TypeScript"],
    codelink: "https://github.com/SumaniqueCode/skill-karma",
    livelink: "#",
  },
  {
    id: 7,
    name: "Sanno Kaam",
    description:
      "Sanno Kaam is a Nepal-focused micro job platform designed to connect freelancers with clients looking to outsource small tasks and short-term gigs. Freelancers can create profiles, showcase their skills, and apply for jobs, while clients can post tasks, review applicants, and securely process payments. The platform also features a review and rating system that helps build trust within the community. By addressing local market needs and payment challenges, Sanno Kaam supports the growth of Nepal's gig economy.",
    images: [
      saanokaamMainUI1, saanokaamMainUI, saanokaamMainUI2, saanokaamMainUI3, saanokaamLogin,
      saanokaamRegister, saanokaamEmployerDashboard, saanokaamFreelancerDashboard, saanokaamAddTask,
      saanokaamTasklist, saanokaamTaskDetails, saanokaamTaskDetailUser
    ],
    features: [
      "Freelancer Profiles",
      "Job Posting",
      "Secure Payments",
      "User Reviews",
      "Intuitive UI",
    ],
    challenges:
      "Integrating secure and reliable local payment solutions while ensuring compliance with regulations was a major challenge.",
    outcome:
      "Sanno Kaam established itself as a reliable micro-job marketplace, enabling successful collaborations and increasing freelance opportunities.",
    techs: ["Django", "React", "MUI", "Redux", "TypeScript", "Axios"],
    codelink: "https://github.com/SumaniqueCode/saanokaam",
    livelink: "#",
  },
  {
    id: 8,
    name: "Pathshala BMS",
    description:
      "Pathshala BMS is a blog management system that simplifies the process of creating, editing, and publishing blog content. It includes role-based access control for collaborative writing, built-in SEO optimization tools to improve search visibility, post scheduling for content planning, and analytics for tracking performance. The system is designed to help bloggers and teams maintain a consistent and professional online presence.",
    images: [
      pathshalaBmsLanding, pathshalaBmsAdminDashboard, pathshalaBmsWriterDashboard, pathshalaBmsBlogList,
      pathshalaBmsBlogDetail, pathshalaBmsBlogs, pathshalaBmsProfile, pathshalaBmsLogin, pathshalaBmsAbout,
      pathshalaBmsFooter
    ],
    features: [
      "Content Editor",
      "User Roles",
      "SEO Optimization",
      "Scheduling",
      "Analytics",
    ],
    challenges:
      "Creating a powerful yet user-friendly editor and keeping SEO features aligned with best practices required continuous refinement.",
    outcome:
      "The platform enabled bloggers to manage content more efficiently and grow audience engagement.",
    techs: ["Django", "HTML", "Tailwind", "JavaScript", "PostgreSQL"],
    codelink: "https://github.com/SumaniqueCode/pathshalaTMS",
    livelink: "#",
  },
  {
    id: 9,
    name: "Pathshala TMS",
    description:
      "Pathshala TMS is a task management system designed to help organizations streamline project tracking, improve team collaboration, and manage deadlines effectively. Users can create tasks, assign responsibilities, set priorities, and track progress in real time. With a focus on simplicity and productivity, the platform ensures teams stay organized and projects move forward efficiently.",
    images: [
      pathshalaTmsLanding, pathshalaTmsDashboard, pathshalaTmsProjectList, pathshalaTmsProjectDetails,
      pathshalaTmsTaskDetails, pathshalaTmsEditTask, pathshalaTmsProfile, pathshalaTmsLogin, pathshalaTmsAbout,
      pathshalaTmsContact, pathshalaTmsServices, pathshalaTmsFooter
    ],
    features: [
      "Task Assignment",
      "Deadline Management",
      "Progress Tracking",
      "Team Collaboration",
      "Reporting",
    ],
    challenges:
      "Balancing advanced features with ease of use required multiple design and usability iterations.",
    outcome:
      "Teams experienced improved coordination, accountability, and overall project efficiency.",
    techs: ["Django", "HTML", "Tailwind"],
    codelink: "https://github.com/SumaniqueCode/pathshalaTMS",
    livelink: "#",
  },
  {
    id: 10,
    name: "CC Hub",
    description:
      "CC Hub is a multivendor e-commerce platform built for selling computer components and accessories online. The system allows multiple vendors to manage their own storefronts, list products, and handle orders independently. Customers benefit from a smooth shopping experience with integrated payment gateways, order tracking, and product reviews. CC Hub bridges the gap between vendors and customers by providing a scalable, secure, and user-friendly online marketplace.",
    images: [
      cchubLanding, cchubLogin, cchubRegister, cchubProducts, cchubAddProduct, cchubCart,
      cchubOrders, cchubOrderList, cchubOrderStatus, cchubOrderCheckout, cchubProductDetails,
      cchubProductDesc, cchubSellerDashboard, cchubProfile
    ],
    features: [
      "Multivendor Storefronts",
      "Product Management",
      "Integrated Payments",
      "Delivery Tracking",
      "Customer Reviews",
    ],
    challenges:
      "Designing a scalable multivendor architecture with proper data isolation and secure transactions required careful planning.",
    outcome:
      "The platform helped vendors expand their reach and improve sales while offering customers a reliable shopping experience.",
    techs: ["Laravel", "PHP", "Tailwind", "MySQL", "JavaScript"],
    codelink: "https://github.com/SumaniqueCode/skill-karma",
    livelink: "#",
  },
];