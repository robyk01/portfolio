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
import OrionBG from './assets/orion_bg.jpg'
import FiicodeIMG from './assets/fiicodelogo.png'
import CassiniIMG from './assets/cassinilogo.png'
import RospinIMG from './assets/rospin.png'
import SynapseImg from './assets/synapse.jpg'
import UnibotImg from './assets/unibot.jpg'

export const projects = [
    {
        title: "Spacecraft Neuromorphic Architecture",
        slug: "spacecraft-neuromorphic-architecture",
        description: "Onboard satellite image processing and EuroSAT land cover classification using BrainChip Akida neuromorphic hardware (SNN) and Quantization-Aware Training (QAT).",
        tech: ["Python", "TensorFlow", "BrainChip Akida", "SNN", "QAT"],
        image: SynapseImg,
        link: "https://github.com/robyk01/spacecraft-neuromorphic-architecture",
        categories: ["AI & ML", "Space", "Research"]
    },
    {
        title: "UniBot - Humanoid Robotics Lab",
        slug: "unibot",
        description: "R&D for the UniBot World Challenge: dynamics, kinematics, and control theory from first-principles simulation to whole-body humanoid manipulation on Unitree G1.",
        tech: ["Python", "MuJoCo", "Dynamics & Control", "Unitree G1", "Robotics"],
        image: UnibotImg,
        link: "https://github.com/robyk01/unibot",
        categories: ["Robotics", "AI & ML"]
    },
    {
        title: "ROSPIN Academy Mars Satellite Constellation",
        slug: "cassini",
        description: "Aerospace engineering report optimizing dual-shell Martian orbits using orbital mechanics and spherical geometry models.",
        tech: ["Python"],
        image: RospinIMG,
        link: "https://github.com/robyk01/rospin-mars-satellite-constellation/",
        categories: ["Space"]
    },
    {
        title: "Cassini Space for Water Hackathon",
        slug: "cassini",
        description: "Satellite data AI risk assessment heatmap.",
        tech: ["Python", "Numpy", "Scikit-Learn"],
        image: CassiniIMG,
        link: "https://github.com/comshiro/WaterCore",
        categories: ["Space", "AI & ML"]
    },
    {
        title: "FiiCode AI&ML Hackathon",
        slug: "fiicode",
        description: "Predictive Modeling & Demand Forecasting - FIICode Finals",
        tech: ["Python", "Numpy", "Scikit-Learn"],
        image: FiicodeIMG,
        link: "https://github.com/robyk01/FiiCode-AI-2026",
        categories: ["AI & ML"]
    },
    {
        title: "Orion",
        slug: "orion",
        description: "Full-stack app and research environment for AI-assisted system diagnostics in deep-space environments.",
        tech: ["FastAPI", "React", "Scikit-Learn"],
        image: OrionBG,
        link: "https://github.com/robyk01/orion",
        categories: ["AI & ML", "Space", "Research"]
    },
    {
        title: "AI Agents Research",
        slug: "ai-agents",
        description: "A Python-based AI Agent framework.",
        tech: ["Python", "Pydantic"],
        image: AgentIMG,
        link: "https://github.com/robyk01/ai-agents",
        categories: ["AI & ML"]
    },
    {
        title: "Learnify UAIC",
        slug: "learnify-uaic",
        description: "Interactive DSA learning platform for UAIC students.",
        tech: ["React", "Tailwind", "Supabase"],
        image: learnifyUaic,
        link: "https://learnify-uaic.vercel.app",
        categories: ["Other"]
    },
    {
        title: "Kitchen Display System",
        slug: "kitchen-display-system",
        description: "Real-time restaurant order management system with RESTful API integration.",
        tech: ["Flask", "Python", "SQLite"],
        image: KDSImg,
        link: "https://github.com/robyk01/kitchen-display-system",
        categories: ["Other"]
    },
    {
        title: "Learnify",
        slug: "learnify",
        description: "Ed-Tech platform for national informatics exam preparation.",
        tech: ["Wordpress", "PHP", "JavaScript"],
        image: LearnifyImg,
        link: "https://learnify.ro/",
        categories: ["Other"]
    },
    {
        title: "Learnify LMS",
        slug: "learnify-lms",
        description: "Custom PHP-based Learning Management System plugin for scalable curriculum.",
        tech: ["PHP"],
        image: LMSImg,
        link: "https://github.com/robyk01/learnify-lms",
        categories: ["Other"]
    },
    {
        title: "Timeflow Date & Time",
        slug: "timeflow-delivery",
        description: "WooCommerce plugin for delivery slot scheduling and order logistics.",
        tech: ["PHP"],
        image: TimeflowImg,
        link: "https://github.com/robyk01/timeflow-delivery",
        categories: ["Other"]
    },
    {
        title: "Azalee",
        slug: "azalee",
        description: "E-Commerce solution for a specialized floral business",
        tech: ["Wordpress", "WooCommerce", "PHP", "Javascript"],
        image: AzaleeImg,
        link: "https://florariaazalee.ro",
        categories: ["Other"]
    },
    {
        title: "Kreativa",
        slug: "kreativa",
        description: "E-Commerce shop for a luxury jewelry company.",
        tech: ["Wordpress", "WooCommerce", "PHP"],
        image: KreativaImg,
        link: "https://kreativa.ro",
        categories: ["Other"]
    },
    {
        title: "Case Lemn",
        slug: "case-lemn",
        description: "E-Commerce shop for a housing and construction firm.",
        tech: ["Wordpress", "PHP", "Javascript"],
        image: CaseLemnImg,
        link: "https://caselemn92.ro",
        categories: ["Other"]
    },
    {
        title: "Next Training",
        slug: "next-training",
        description: "Professional course management platform.",
        tech: ["Wordpress", "PHP"],
        image: NextImg,
        link: "https://next-training.ro",
        categories: ["Other"]
    },
    {
        title: "Ami Pizza",
        slug: "ami-pizza",
        description: "E-Commerce solution for a pizza restaurant.",
        tech: ["Wordpress", "WooCommerce", "PHP", "Javascript"],
        image: AmiPizzaImg,
        link: "https://amipizza.ro/",
        categories: ["Other"]
    },
];