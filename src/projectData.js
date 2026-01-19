import LearnifyImg from './assets/Banner 3.png'
import KreativaImg from './assets/kreativa Mockup.png'
import CaseLemnImg from './assets/CaseLemn Mockup.png'
import AzaleeImg from './assets/Azalee Mockup.png'
import AmiPizzaImg from './assets/Ami Mockup.png'
import NextImg from './assets/Next Training.png'
import KDSImg from './assets/kds.png'
import LMSImg from './assets/Learnify LMS.jpg'
import TimeflowImg from './assets/timeflow.jpg'
import learnifyUaic from './assets/learnifyUaic.jpg'
import AgentIMG from './assets/agent.jpg'

export const projects = [
    {
        title: "AI Agents Research",
        slug: "ai-agents",
        description: "A Python-based AI Agent framework.",
        tech: ["Python", "Pydantic"],
        image: AgentIMG,
        link: "https://github.com/robyk01/ai-agents",
        category: "Other"
    },
    // Apps
    {
        title: "Learnify UAIC",
        slug: "learnify-uaic",
        description: "Interactive DSA learning platform for UAIC students.",
        tech: ["React", "Tailwind", "Supabase"],
        image: learnifyUaic,
        link: "https://learnify-uaic.vercel.app",
        category: "Apps"
    },
    {
        title: "Kitchen Display System",
        slug: "kitchen-display-system",
        description: "Real-time restaurant order management system with RESTful API integration.",
        tech: ["Flask", "Python", "SQLite"],
        image: KDSImg,
        link: "https://github.com/robyk01/kitchen-display-system",
        category: "Apps"
    },
    {
        title: "Learnify",
        slug: "learnify",
        description: "Ed-Tech platform for national informatics exam preparation.",
        tech: ["Wordpress", "PHP", "JavaScript"],
        image: LearnifyImg,
        link: "https://learnify.ro/",
        category: "Websites"
    },
    // Other
    {
        title: "Learnify LMS",
        slug: "learnify-lms",
        description: "Custom PHP-based Learning Management System plugin for scalable curriculum.",
        tech: ["PHP"],
        image: LMSImg,
        link: "https://github.com/robyk01/learnify-lms",
        category: "Other"
    },
    {
        title: "Timeflow Date & Time",
        slug: "timeflow-delivery",
        description: "WooCommerce plugin for delivery slot scheduling and order logistics.",
        tech: ["PHP"],
        image: TimeflowImg,
        link: "https://github.com/robyk01/timeflow-delivery",
        category: "Other"
    },
    // Websites
    {
        title: "Azalee",
        slug: "azalee",
        description: "E-Commerce solution for a specialized floral business",
        tech: ["Wordpress", "WooCommerce", "PHP", "Javascript"],
        image: AzaleeImg,
        link: "https://florariaazalee.ro",
        category: "Websites"
    },
    {
        title: "Kreativa",
        slug: "kreativa",
        description: "E-Commerce shop for a luxury jewelry company.",
        tech: ["Wordpress", "WooCommerce", "PHP"],
        image: KreativaImg,
        link: "https://kreativa.ro",
        category: "Websites"
    },
    {
        title: "Case Lemn",
        slug: "case-lemn",
        description: "E-Commerce shop for a housing and construction firm.",
        tech: ["Wordpress", "PHP", "Javascript"],
        image: CaseLemnImg,
        link: "https://caselemn92.ro",
        category: "Websites"
    },
    {
        title: "Next Training",
        slug: "next-training",
        description: "Professional course management platform.",
        tech: ["Wordpress", "PHP"],
        image: NextImg,
        link: "https://next-training.ro",
        category: "Websites"
    },
    {
        title: "Ami Pizza",
        slug: "ami-pizza",
        description: "E-Commerce solution for a pizza restaurant.",
        tech: ["Wordpress", "WooCommerce", "PHP", "Javascript"],
        image: AmiPizzaImg,
        link: "https://amipizza.ro/",
        category: "Websites"
    },
];