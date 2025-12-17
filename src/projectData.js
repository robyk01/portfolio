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

export const projects = [
    // Apps
    {
        title: "Learnify UAIC",
        slug: "learnify-uaic",
        description: "A full-Stack app helping UAIC students learn and pass DSA exams.",
        tech: ["React", "Tailwind", "Supabase"],
        image: learnifyUaic,
        link: "https://learnify-uaic.vercel.app",
        category: "Apps"
    },
    {
        title: "Kitchen Display System",
        slug: "kitchen-display-system",
        description: "A full-Stack Flask app for managing kitchen order displays",
        tech: ["Flask", "Python", "SQLite"],
        image: KDSImg,
        link: "https://github.com/robyk01/kitchen-display-system",
        category: "Apps"
    },
    // Websites
    {
        title: "Learnify",
        slug: "learnify",
        description: "Educational website for romanian highschool students preparing for the informatics exam.",
        tech: ["Wordpress", "PHP", "JavaScript", "HTML", "CSS"],
        image: LearnifyImg,
        link: "https://learnify.ro/",
        category: "Websites"
    },
    {
        title: "Azalee",
        slug: "azalee",
        description: "E-Commerce shop for a flower company",
        tech: ["Wordpress", "WooCommerce", "PHP", "Javascript", "HTML", "CSS"],
        image: AzaleeImg,
        link: "https://florariaazalee.ro",
        category: "Websites"
    },
    {
        title: "Kreativa",
        slug: "kreativa",
        description: "E-Commerce shop for a jewelry company",
        tech: ["Wordpress", "WooCommerce", "PHP"],
        image: KreativaImg,
        link: "https://kreativa.ro",
        category: "Websites"
    },
    {
        title: "Case Lemn",
        slug: "case-lemn",
        description: "E-Commerce shop for a housing company",
        tech: ["Wordpress", "PHP", "Javascript", "HTML", "CSS"],
        image: CaseLemnImg,
        link: "https://caselemn92.ro",
        category: "Websites"
    },
    {
        title: "Next Training",
        slug: "next-training",
        description: "Courses website",
        tech: ["Wordpress", "PHP"],
        image: NextImg,
        link: "https://next-training.ro",
        category: "Websites"
    },
    {
        title: "Ami Pizza",
        slug: "ami-pizza",
        description: "Pizza e-commerce website",
        tech: ["Wordpress", "WooCommerce", "PHP", "Javascript", "HTML", "CSS"],
        image: AmiPizzaImg,
        link: "https://amipizza.ro/",
        category: "Websites"
    },
    // Plugins
    {
        title: "Learnify LMS",
        slug: "learnify-lms",
        description: "A Wordpress plugin that adds a Learning Management System to your website.",
        tech: ["PHP"],
        image: LMSImg,
        link: "https://github.com/robyk01/learnify-lms",
        category: "Plugins"
    },
    {
        title: "Timeflow Date & Time",
        slug: "timeflow-delivery",
        description: "A WooCommerce plugin that adds date and time functionality for orders",
        tech: ["PHP"],
        image: TimeflowImg,
        link: "https://github.com/robyk01/timeflow-delivery",
        category: "Plugins"
    }
];