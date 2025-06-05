import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'mohammadmuzafar342@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Tajmirul, I am reaching out to you because...',

    oldPortfolio: 'https://muzafar-portfolio-eight.vercel.app/',
    upworkProfile: 'https://www.linkedin.com/in/mohammad-muzafar-707a61205/',
    otherProfile: 'https://muzafarsm.netlify.app/',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Muzafar-sm' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/mohammad-muzafar-707a61205/' },
    { name: 'instagram', url: 'https://www.instagram.com/yeah_its_muzu/' },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
    {name: 'Other', url: GENERAL_INFO.otherProfile},
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
        {
            name: 'Three.js',
            icon: '/logo/three.js.png',
        },
        
        {
            name: 'Java',
            icon: '/logo/java.png',
        }
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'Fast Api',
            icon: '/logo/FastAPI.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Postman',
            icon: '/logo/Postman.png',
        }
    ],
   "AI / ML":[
    {
        name: 'TensorFlow',
        icon: '/logo/tensor.png',
    },
    {
        name: 'Hugging Face',
        icon: '/logo/huggingface.png',
    },
    {
        name: 'Pytorch',
        icon: '/logo/PyTorch.png',
    }
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'CivicLens',
        slug: 'civiclens',
        video: '/projects/civic-video.mp4',
        liveUrl: 'https://civiclens-kct2ujqhh-trons-projects-6218f3d8.vercel.app/', // Backend hosting expired, so no live URL for now
        year: 2025,
        description: `
          CivicLens is an AI-powered platform that processes government PDFs to extract and summarize key information, making complex documents easy to understand.
          <br/><br/>
          ⚠️ **Note:** The backend is currently inactive due to the expiration of the free hosting trial. To test the complete functionality, clone the repository and run it locally by following the setup instructions below.<br /><br/>
          <b>Refer the video below for a quick demo of the project.</b><br /><br/>
          
          Key Features:<br/>
          <ul>
            <li>🤖 AI-driven document parsing using HuggingFace NLP models</li>
            <li>📄 Upload and analyze government PDFs efficiently</li>
            <li>⚡ Fast frontend UI built with React for smooth user experience</li>
            <li>🔗 Backend API powered by FastAPI to handle AI inference requests</li>
            <li>🛠️ Modular code structure for easy maintenance and updates</li>
          </ul><br/>
          
          Technical Highlights:<br/>
          <ul>
            <li>React.js frontend with environment variables for HuggingFace API integration</li>
            <li>FastAPI backend serving AI-powered endpoints (requires local deployment)</li>
            <li>REST API communication between frontend and backend</li>
            <li>Use of HuggingFace API for advanced NLP tasks</li>
          </ul>
        `,
        role: `
          Full-Stack Developer <br/>
          Responsible for:<br/>
          <ul>
            <li>⚙️ Building the React frontend and integrating HuggingFace API calls</li>
            <li>🔧 Developing FastAPI backend endpoints to support AI model inference</li>
            <li>📦 Managing API keys securely with environment variables</li>
            <li>📁 Structuring the project for scalability and easy collaboration</li>
            <li>🎥 Documenting project functionality through demo videos due to hosting limits</li>
          </ul>
        `,
        techStack: [
          'React.js',
          'FastAPI',
          'HuggingFace API',
          'REST API',
          'JavaScript',
          'Python',
          'Next',
        ],
        thumbnail: '/projects/long/civic-thumbnail.png',
        longThumbnail: '/projects/images/civic-thumbnail.png',
        images: [
          '/projects/images/civic-1.png',
          '/projects/images/civic-2.png',
          '/projects/images/civic-3.png',
          '/projects/images/civic-4.png',
          '/projects/images/civic-5.png',
          '/projects/images/civic-6.png', 
        ],
      },      
    {
        title: 'Expense Tracker',
        slug: 'expense-tracker',
        liveUrl: 'https://expense-tracker-kohl-one-59.vercel.app/',
        year: 2025,
        description: `
     A responsive web application that helps users track their daily income and expenses. 
     The app provides a clear breakdown of financial transactions and offers insights into spending habits through visual charts.<br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🛠️ Service Display System: Add, edit, and delete income and expense entries</li>
        <li>✍️ State Management: Display current balance, total income, and expenses</li>
        <li>🛒 Product Catalog: Categorize transactions with labels</li>
        <li>📱 Fully Responsive: Visual representation of financial data using charts</li>
        <li>⚡ Fast Performance: Responsive design suitable for mobile and desktop</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Used React hooks (useState, useEffect) for state and lifecycle management</li>
        <li>LocalStorage integration for persistent data storage</li>
        <li>Dynamic rendering of components based on data changes</li>
        <li>Modular and reusable component structure</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the development lifecycle:
      <ul>
        <li>✅ Backend: Configured Payload CMS with custom collections for services, blogs, and products</li>
        <li>🎨 Frontend: Built all UI components using Tailwind CSS and shadcn</li>
        <li>🔄 State Management: Implemented client-side data fetching and caching</li>
        <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
        <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
        <li>🧩 Visualization: Added Chart.js for better representation</li>
      </ul>
      `,
        techStack: [
            'Chart.js',
            'React.js',
            'Tailwind CSS',
            'shadcn',
            'Local Storage',
            'React Hook Form',
            'Vercel',
        ],
        thumbnail: '/projects/long/mock-exp.png',
        longThumbnail: '/projects/images/expense-long.png',
        images: [
            '/projects/images/expense-1.png',
            '/projects/images/expense-2.png',
        ],
    },
    {
        title: 'NomadStay',
        slug: 'nomadstay',
        techStack: [
            'React',
            'Redux',
            'Stripe Payment Integration',
            'Tailwind CSS',
            'Framer Motion',
            'debouncing',
            'Api Integration',
        ],
        thumbnail: '/projects/long/nom-long.png',
        longThumbnail: '/projects/thumbnail/nom-thumb.png',
        images: [
            '/projects/images/nomad-1.png',
            '/projects/images/nomad-2.png',
            '/projects/images/nomad-3.png',
            '/projects/images/nomad-4.png',
            '/projects/images/nomad-5.png',
        ],
        liveUrl: 'https://roombnb.vercel.app/',
        year: 2024,
        description: `A full-stack web application inspired by Airbnb, allowing users to browse, book, and list rental properties. 
        It mimics the core functionalities of a property rental platform with user authentication and property management.`,
        role: `As the Fullstack developer, I: <br/>
        - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
        - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        -Booking functionality with availability checks, Add, update, and delete property listings,User authentication and session management. <br/>
        - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
    },
    {
        title: 'Legislate AI',
        slug: 'legislate-ai',
        techStack: [
            'Hugging Face',
            'LangChain',
            'FastAPI',
            'Bert',
            'tesseract',
            'React.js',
            'Postgressql',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/legis.png',
        longThumbnail: '/projects/long/legis-1.png',
        images: [
            '/projects/images/legis-1.png',
            '/projects/images/legis-2.png',
            '/projects/images/legis-3.png',
            '/projects/images/legis-4.png',
            '/projects/images/legis-5.png',
        ],
        liveUrl: '/',
        year: 2025,
        description:
            'Legislate AI is an intelligent web-based tool designed to help users—lawyers, policymakers, startups, and citizens—interact with complex legal and policy documents. By leveraging advanced natural language processing, it enables effortless document uploads, contextual question answering, and critical clause analysis, bringing AI-powered legal insight to everyone.',
        role: `As the Founding Engineer and business owner, I:<br/>
        - Designed and developed the platform end-to-end using React.js, PostgreSQL, MongoDB, and Tailwind CSS.<br/>
        - Visualize clause similarity across laws or precedents<br/>
        - Ask natural-language questions and get accurate, clause-level answers, Voice-based legal notes (planned)
        <br/>
    Technical Highlights:
      <ul>
        <li>OCR integration (Tesseract/EasyOCR) for scanned document parsing</li>
        <li>Fine-tuned LLMs (Legal-BERT, Longformer) for deep legal context understanding</li>
        <li>Semantic vector search with FAISS/ChromaDB for document similarity</li>
        <li>LangChain for dynamic and chainable QA workflows</li>
        <li>Multi-model orchestration for tasks like QA, summarization, classification, and similarity</li>
      </ul>
        `,
    },
    {
        title: 'Job Board',
        slug: 'job-board',
        techStack: [
            'React.js',
            'Redux',
            'Tailwind CSS',
            'Local storage',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/job-board.png',
        longThumbnail: '/projects/long/job-board.png',
        images: [
            '/projects/images/job.png',
            '/projects/images/job-2.png',
            '/projects/images/job-3.png',
        ],
        liveUrl: 'https://job-board-eta-nine.vercel.app/',
        year: 2024,
        description:
            'A simple and responsive job board application where users can browse job listings, view detailed job descriptions, and filter opportunities based on company, role, or location. Built for practicing job listing management with modern UI and basic interactivity.',
        role: `As the frontend developer, I:<br/>
        - Built the frontend using React, Redux, React Data, and Tailwind CSS.<br/>
        - Display a list of job postings with role, company, and location<br/>
        - Responsive design optimized for mobile and desktop<br/>
        - Implemented real-time tag-based filtering with React state`,
    },
    {
        title: 'Condoco',
        slug: 'condoco',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        thumbnail: '/projects/thumbnail/condoco.png',
        longThumbnail: '/projects/long/condo.png',
        images: [
            '/projects/images/condo-1.png',
            '/projects/images/condo-2.png',
            '/projects/images/condo-3.png',
            '/projects/images/condo-4.png',
        ],
        liveUrl: 'https://condocore.netlify.app/',
        year: 2023,
        description:
            'CondoCore is a sleek and minimal personal portfolio website designed to showcase projects, skills, and professional background. It highlights full-stack development experience through well-organized sections including project showcases, tech stack, and contact options. The site also serves as a live demonstration of front-end UI/UX design capabilities.',
        role: `As a Frontend Developer, I:<br/>
        - Implemented Responsive design optimized for all screen sizes
        - Developed the frontend using HTML, CSS, and Javascript
        - Scroll-based navigation for smooth user experience
        - Implemented smooth animations and transitions using CSS`
    },
    {
        title: 'MoreProjects',
        slug: 'moreProjects',
        techStack: ['React', 'HTML', 'CSS', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/more.png',
        longThumbnail: '/projects/long/more.png',
        images: [
            '/projects/images/more-1.png',
            '/projects/images/more-2.png',
        ],
        liveUrl: 'https://muzafarsm.netlify.app/',
        year: 2023,
        description: `Explore more of my projects and contributions .<br/><br/>

            Dive into more projects that reflect my passion for building impactful web experiences.
            Browse additional projects showcasing my frontend, backend, and full-stack development skills.`,
        role: ``,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Engineer (Intern)',
        company: 'Springworks',
        duration: 'Jul 2023 - Apr 2024',
    },
    {
        title: 'Frontend Developer (Freelance)',
        company: 'Outlook',
        duration: 'Mar 2025 - Present',
    },
    {
        title: 'FRONTEND ENGINEER',
        company: 'Coverhunt',
        duration: 'Jun 2024 - Jan 2025',
    },
    {
        title: 'Founding Engineer',
        company: 'Legalize AI',
        duration: 'Apr 2025 - Present',
    },
];
