export const projects = [
  {
    id: "1",
    name: "Share Insight Nepal",
    description:
      "Share Insight Nepal is a full-featured stock market management web application built specifically for Nepalese investors. The platform allows users to track their shareholdings in detail, monitor real-time profit and loss, and analyze overall portfolio performance with clarity. It integrates real-time market data to keep investors updated on price movements and market trends. In addition, the system provides risk assessment tools that help users understand exposure and make strategic investment decisions. By combining data accuracy, analytical insights, and a user-friendly interface, Share Insight Nepal aims to simplify stock portfolio management and empower investors to make confident, well-informed financial decisions in the Nepalese stock market.",
    images: [
      "/images/projects/shareinsightnepal/landingpage.jpg",
      "/images/projects/shareinsightnepal/Register.jpg",
      "/images/projects/shareinsightnepal/Login.jpg",
      "/images/projects/shareinsightnepal/profile.jpg",
      "/images/projects/shareinsightnepal/userHomePage.jpg",
      "/images/projects/shareinsightnepal/userServices.jpg",
      "/images/projects/shareinsightnepal/userPortfolio.jpg",
      "/images/projects/shareinsightnepal/userLiveMarket.jpg",
      "/images/projects/shareinsightnepal/userWatchlist.jpg",
      "/images/projects/shareinsightnepal/brokers.jpg",
      "/images/projects/shareinsightnepal/admins.PNG",
      "/images/projects/shareinsightnepal/users.jpg",
      "/images/projects/shareinsightnepal/adminDashboard.PNG",


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
    id: "2",
    name: "Daily Repo",
    description:
      "Daily Repo is a collaborative daily task and reporting system designed to improve transparency, accountability, and productivity within teams. The platform enables team members to log their daily tasks, share progress updates in real time, and generate structured reports effortlessly. Its clean and intuitive user interface ensures that users can focus on their work rather than managing complex tools. By centralizing daily reporting and progress tracking, Daily Repo helps teams stay aligned on goals, identify bottlenecks early, and maintain consistent communication across projects.",
    images: [
      "/images/projects/dailyrepo/dashboard.jpg",
      "/images/projects/dailyrepo/workspaces.jpg",
      "/images/projects/dailyrepo/modules.jpg",
      "/images/projects/dailyrepo/reports.jpg",
      "/images/projects/dailyrepo/teams.jpg",
      "/images/projects/dailyrepo/workspaces.jpg",
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
    id: "3",
    name: "Skill Karma",
    description:
      "Skill Karma is an innovative time-based skill exchange platform that connects individuals who want to offer, exchange, or monetize their skills. Users can create detailed profiles, showcase their expertise, and discover skill providers nearby through an interactive map-based discovery system. The platform also includes a Kanban-style task tracking board that helps users manage ongoing exchanges, collaborations, and commitments visually. By promoting skill sharing and community collaboration, Skill Karma creates opportunities for learning, networking, and mutual growth.",
    images: [
      "/images/projects/skillkarma/LandingPage.jpg",
      "/images/projects/skillkarma/signup.jpg",
      "/images/projects/skillkarma/login.jpg",
      "/images/projects/skillkarma/profile.jpg",
      "/images/projects/skillkarma/AppList.jpg",
      "/images/projects/skillkarma/DNDskills.jpg",
      "/images/projects/skillkarma/EditProfile.jpg",
      "/images/projects/skillkarma/SkillCards.jpg",
      "/images/projects/skillkarma/SkillDetails.jpg",
      "/images/projects/skillkarma/SkillMap.jpg",
      "/images/projects/skillkarma/AddSkill.jpg",
      "/images/projects/skillkarma/PageNotFound.jpg",
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
    id: "4",
    name: "Sanno Kaam",
    description:
      "Sanno Kaam is a Nepal-focused micro job platform designed to connect freelancers with clients looking to outsource small tasks and short-term gigs. Freelancers can create profiles, showcase their skills, and apply for jobs, while clients can post tasks, review applicants, and securely process payments. The platform also features a review and rating system that helps build trust within the community. By addressing local market needs and payment challenges, Sanno Kaam supports the growth of Nepal’s gig economy.",
    images: [
      "/images/projects/saanokaam/mainUI1.jpg",
      "/images/projects/saanokaam/MainUI.jpg",
      "/images/projects/saanokaam/mainUI2.jpg",
      "/images/projects/saanokaam/mainUI3.jpg",
      "/images/projects/saanokaam/Login.jpg",
      "/images/projects/saanokaam/Register.jpg",
      "/images/projects/saanokaam/EmployerDashboard.jpg",
      "/images/projects/saanokaam/FreelancerDashboard.jpg",
      "/images/projects/saanokaam/AddTask.jpg",
      "/images/projects/saanokaam/Tasklist.jpg",
      "/images/projects/saanokaam/TaskDetails.jpg",
      "/images/projects/saanokaam/TaskDetailUser.jpg",
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
    id: "5",
    name: "CC Hub",
    description:
      "CC Hub is a multivendor e-commerce platform built for selling computer components and accessories online. The system allows multiple vendors to manage their own storefronts, list products, and handle orders independently. Customers benefit from a smooth shopping experience with integrated payment gateways, order tracking, and product reviews. CC Hub bridges the gap between vendors and customers by providing a scalable, secure, and user-friendly online marketplace.",
    images: [
      "/images/projects/cchub/Landing.jpg",
      "/images/projects/cchub/login.jpg",
      "/images/projects/cchub/register.jpg",
      "/images/projects/cchub/products.png",
      "/images/projects/cchub/add_product.png",
      "/images/projects/cchub/cart.png",
      "/images/projects/cchub/orders.png",
      "/images/projects/cchub/order_list.png",
      "/images/projects/cchub/order_status.png",
      "/images/projects/cchub/order_checkout.png",
      "/images/projects/cchub/product_details.png",
      "/images/projects/cchub/product_desc.png",
      "/images/projects/cchub/seller_dashboard.png",
      "/images/projects/cchub/profile.png",
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
  {
    id: "6",
    name: "Pathshala TMS",
    description:
      "Pathshala TMS is a task management system designed to help organizations streamline project tracking, improve team collaboration, and manage deadlines effectively. Users can create tasks, assign responsibilities, set priorities, and track progress in real time. With a focus on simplicity and productivity, the platform ensures teams stay organized and projects move forward efficiently.",
    images: [
      "/images/projects/pathshalaTMS/dashboard.jpg",
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
    id: "7",
    name: "Pathshala BMS",
    description:
      "Pathshala BMS is a blog management system that simplifies the process of creating, editing, and publishing blog content. It includes role-based access control for collaborative writing, built-in SEO optimization tools to improve search visibility, post scheduling for content planning, and analytics for tracking performance. The system is designed to help bloggers and teams maintain a consistent and professional online presence.",
    images: [
      "/images/projects/pathshalaBMS/dashboard.jpg",
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
];
