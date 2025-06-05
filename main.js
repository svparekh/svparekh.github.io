import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
import { PTag, PLanguage, Project, generateProjects } from "./src/scripts/gen_projects.js";
import { TimelineSection, generateTimeline } from "./src/scripts/gen_timeline.js";
import { ExpLevels, Skill, generateSkills } from "./src/scripts/gen_skills.js";
import { createSideMenuBarsForPortfolio, createPopupSideMenuLinksForPortfolio, runTextMorphScript, toggleMenu } from "./src/scripts/script_index.js";


// Set toggle menu as global
window.toggleMenu = toggleMenu;

// Skills
const skills = [
    new Skill({
        name: "Python", experience: ExpLevels.high, icon: new URL('./src/assets/logos/python.png?as=webp', import.meta.url),
        description: "Proficient in Python programming language with extensive experience in developing scalable and efficient applications.",
    }),
    new Skill({
        name: "Docker", experience: ExpLevels.high, icon: new URL('./src/assets/logos/docker.png?as=webp', import.meta.url),
        description: "Skilled in containerization using Docker, with experience in creating and managing containerized applications.",
    }),
    new Skill({
        name: "C++", experience: ExpLevels.med, icon: new URL('./src/assets/logos/cpp.png?as=webp', import.meta.url),
        description: "Familiar with C++ programming language, with experience in developing applications that require performance and efficiency.",
    }),
    new Skill({
        name: "Git", experience: ExpLevels.high, icon: new URL('./src/assets/logos/git.png?as=webp', import.meta.url),
        description: "Proficient in version control using Git, with experience in managing code repositories and collaborating with teams.",
    }),
    new Skill({
        name: "Agile", experience: ExpLevels.med, icon: new URL('./src/assets/logos/agile.png?as=webp', import.meta.url),
        description: "Knowledgeable about Agile development methodologies, with experience in working on projects that follow Agile principles.",
    }),
    new Skill({
        name: "Scrum", experience: ExpLevels.med, icon: new URL('./src/assets/logos/scrum.svg?as=webp', import.meta.url),
        description: "Familiar with Scrum framework, with experience in working on projects that follow Scrum principles.",
    }),
    new Skill({
        name: "Algorithms", experience: ExpLevels.high, icon: new URL('./src/assets/logos/algorithms.png?as=webp', import.meta.url),
        description: "Skilled in designing and implementing efficient algorithms, with experience in solving complex problems.",
    }),
    new Skill({
        name: "Data Structures", experience: ExpLevels.high, icon: new URL('./src/assets/logos/data-structures.png?as=webp', import.meta.url),
        description: "Proficient in working with various data structures, including arrays, linked lists, trees, and graphs.",
    }),
    new Skill({
        name: "Cloud Computing", experience: ExpLevels.med, icon: new URL('./src/assets/logos/cloud-computing.png?as=webp', import.meta.url),
        description: "Familiar with cloud computing concepts, including cloud native, infrastructure, platform, and software as a service.",
    }),
    new Skill({
        name: "REST", experience: ExpLevels.med, icon: new URL('./src/assets/logos/rest.png?as=webp', import.meta.url),
        description: "Knowledgeable about RESTful API design, with experience in developing and consuming RESTful APIs.",
    }),
    new Skill({
        name: "AWS", experience: ExpLevels.med, icon: new URL('./src/assets/logos/aws.png?as=webp', import.meta.url),
        description: "Familiar with Amazon Web Services, including EC2, S3, and Lambda.",
    }),
    new Skill({
        name: "Azure", experience: ExpLevels.low, icon: new URL('./src/assets/logos/azure.png?as=webp', import.meta.url),
        description: "Basic knowledge of Microsoft Azure, including Azure Compute and Azure Storage.",
    }),
    new Skill({
        name: "GCP", experience: ExpLevels.low, icon: new URL('./src/assets/logos/gcp.png?as=webp', import.meta.url),
        description: "Basic knowledge of Google Cloud Platform, including Compute Engine and Cloud Storage.",
    }),
    new Skill({
        name: "Terraform", experience: ExpLevels.low, icon: new URL('./src/assets/logos/terraform.png?as=webp', import.meta.url),
        description: "Basic knowledge of Terraform, including infrastructure as code and configuration management.",
    }),
    new Skill({
        name: "Firebase", experience: ExpLevels.med, icon: new URL('./src/assets/logos/firebase.png?as=webp', import.meta.url),
        description: "Familiar with Firebase, including Realtime Database, Firestore, and Authentication.",
    })
];

// Timeline
const progIcon = new URL('./src/assets/logos/progressive.png?as=webp', import.meta.url);
const timelineSections = [
    new TimelineSection({
        startDate: new Date(2020, 7), endDate: new Date(2024, 5),
        color: '#8E6F3E', tooltip: 'Purdue University', icon: new URL('./src/assets/logos/purdue.png?as=webp', import.meta.url),
        title: 'B.S. in Computer Engineering at Purdue University',
        description: "Earned a comprehensive degree in Computer Engineering, building a strong foundation in computer systems, software development, and digital electronics. Developed a solid understanding of computer architecture, algorithms, and data structures, preparing for a career in technology and innovation."
    }),
    new TimelineSection({
        startDate: new Date(2021, 4), endDate: new Date(2021, 7),
        color: '#239b5d', tooltip: 'Aurora Circuits', icon: new URL('./src/assets/logos/aurora_circuits.png?as=webp', import.meta.url),
        title: 'Computer Engineer Intern at Aurora Circuits',
        description: "Developed a self-configurable application that streamlines the PCB quoting process, eliminating the need for manual Excel sheets and increasing efficiency."
    }),
    new TimelineSection({
        startDate: new Date(2023, 4), endDate: new Date(2023, 7),
        color: '#2D95E5', tooltip: 'Progressive Insurance', icon: progIcon,
        title: 'Software Developer Intern at Progressive Insurance',
        description: "Developed scalable solutions with Python, and expanded skills in Docker, Terraform, and OpenStack. Contributed to a dynamic team, driving innovation and business growth through cutting-edge technologies."
    }),
    new TimelineSection({
        startDate: new Date(2024, 5), endDate: null,
        color: '#2D95E5', tooltip: 'Progressive Insurance', icon: progIcon,
        title: 'Apps Programmer Associate at Progressive Insurance',
        description: "Enhanced OpenShift cluster operations with Python scripting, driving automation and efficiency to elevate customer experience. Expanded skills in Docker, Kubernetes, and Terraform to optimize cloud-native infrastructure and deliver innovative solutions."
    }),
];


// Tags
const t_aws = new PTag("AWS", "tag-style2");
const t_rest_api = new PTag("REST API", "tag-style1");
const t_cli = new PTag("CLI", "tag-style1");
const t_opengl = new PTag("OpenGL", "tag-style2");
const t_flutter = new PTag("Flutter", "tag-style2");
const t_freeglut = new PTag("FreeGLUT", "tag-style2");
const t_raymarching = new PTag("Ray Marching", "tag-style3");
const t_sdf = new PTag("Signed Distance Fields", "tag-style3");
const t_perlin = new PTag("Perlin Noise", "tag-style3");
const t_phong = new PTag("Phong Shading", "tag-style3");
const t_esp32 = new PTag("ESP32", "tag-style2");
const t_espidf = new PTag("ESP IDF", "tag-style2");
const t_pcb = new PTag("PCB", "tag-style1");
const t_modular = new PTag("Software Modularization", "tag-style1");
const t_firebase = new PTag("Firebase", "tag-style2");
const t_firestore = new PTag("Firestore", "tag-style2");
const t_gcpstorage = new PTag("GCP Cloud Storage", "tag-style2");
const t_html = new PTag("HTML", "tag-style2");
const t_css = new PTag("CSS", "tag-style2");
const t_js = new PTag("JavaScript", "tag-style2");
const t_python = new PTag("Python", "tag-style2");
const t_pyqt = new PTag("PyQt", "tag-style2");
const t_regex = new PTag("RegEx", "tag-style3");
const t_agile = new PTag("Agile", "tag-style1");
const t_scrum = new PTag("Scrum", "tag-style1");
const t_embedded = new PTag("Embedded Systems", "tag-style1");
const t_spi = new PTag("SPI", "tag-style3");
const t_uart = new PTag("UART", "tag-style3");
const t_wifi = new PTag("Wifi", "tag-style3");
const t_package = new PTag("Package", "tag-style1");
const t_docker = new PTag("Docker", "tag-style1");
const t_docker_compose = new PTag("Docker Compose", "tag-style1");
const t_containerized = new PTag("Containerized", "tag-style1");
const t_api = new PTag("API", "tag-style2");
const t_secure = new PTag("Secure", "tag-style2");
const t_postgresql = new PTag("PostgreSQL", "tag-style3");
const t_angular = new PTag("Angular", "tag-style3");

// Programming Languages 
const l_rust = new PLanguage("Rust", "#dea584");
const l_hmtl = new PLanguage("HTML", "#e34c26");
const l_css = new PLanguage("CSS", "#563d7c");
const l_js = new PLanguage("JavaScript", "#f1e05a");
const l_makefile = new PLanguage("Makefile", "#427819");
const l_cpp = new PLanguage("C++", "#f34b7d");
const l_c = new PLanguage("C", "#555555");
const l_python = new PLanguage("Python", "#3572A5");
const l_glsl = new PLanguage("GLSL", "#5686a5");
const l_dart = new PLanguage("Dart", "#00B4AB");
const l_shell = new PLanguage("Shell", "#89e051");
const l_cmake = new PLanguage("CMake", "#DA3434");
const l_swift = new PLanguage("Swift", "#F05138");
const l_other = new PLanguage("Other", "#b1b1b1");
const l_typescript = new PLanguage("TypeScript", "#3178c6");
const l_dockerfile = new PLanguage("Dockerfile", "#384d54");

// Projects
const all_projects = {
    "registry": new Project(
        "Internal Package Registry",
        {
            img: new URL('./src/assets/projects/package-registry.png?as=webp', import.meta.url),
            // url: new URL('./src/projects/package-registry.html?as=html', import.meta.url),
            url: "./projects/package-registry",
            tags: [t_aws, t_agile, t_scrum, t_rest_api, t_cli],
            languages: [[l_rust, 37.0], [l_dart, 32.7], [l_python, 26.6], [l_shell, 2.4], [l_other, 1.3]],
            description: "Built an internal package registry using Rust, Dart, and Python, leveraging AWS and Agile methodologies, to create a scalable and efficient package management system."
        }
    ),
    "terrain": new Project(
        "Procedural Terrain",
        {
            img: new URL('./src/assets/projects/procedural-planet.png?as=webp', import.meta.url),
            url: "./projects/procedural-planet",
            tags: [t_opengl, t_freeglut, t_raymarching, t_sdf, t_perlin, t_phong],
            languages: [[l_cpp, 84.6], [l_c, 13.6], [l_glsl, 1.7], [l_other, 0.1]],
            description: "Created a procedural terrain generator using C++, OpenGL, and GLSL, incorporating techniques such as raymarching, SDF, Perlin noise, and Phong shading. This project demonstrated my understanding of computer graphics and procedural generation techniques."
        }
    ),
    "scanner": new Project(
        "Cloud-Enabled Fingerprint Scanner",
        {
            img: new URL('./src/assets/projects/fingerprint-scanner.png?as=webp', import.meta.url),
            url: "./projects/fingerprint-scanner",
            tags: [t_aws, t_esp32, t_espidf, t_rest_api, t_pcb, t_embedded, t_spi, t_uart, t_wifi],
            languages: [[l_c, 99.9], [l_other, 0.1]],
            description: "Developed a cloud-enabled fingerprint scanner using ESP32, AWS, and REST API, showcasing my ability to create secure and efficient biometric authentication systems with microcontrollers and cloud-based technologies."
        }
    ),
    "taskapp": new Project(
        "Cloud-Enabled TaskApp",
        {
            img: new URL('./src/assets/projects/task-app.png?as=webp', import.meta.url),
            url: "https://github.com/svparekh/TaskApp",
            tags: [t_firebase, t_firestore, t_flutter, t_gcpstorage],
            languages: [[l_dart, 80.0], [l_cpp, 9.8], [l_cmake, 8.0], [l_c, 0.6]],
            description: "Developed a cloud-enabled task management application using Flutter, Firebase, and Firestore, with a focus on scalable and efficient data storage and retrieval. This project demonstrated my ability to work with cloud-based technologies and mobile app development frameworks."
        }
    ),
    "portfolio": new Project(
        "This Website",
        {
            img: new URL('./src/assets/projects/my-portfolio.png?as=webp', import.meta.url),
            url: "https://github.com/svparekh/svparekh.github.io",
            tags: [t_html, t_css, t_js],
            languages: [[l_css, 44.9], [l_js, 34.1], [l_hmtl, 21.0]],
            description: "Designed and developed this personal website using HTML, CSS, and JavaScript, with a focus on responsive design and user experience. This project showcased my ability to work with front-end web development technologies and create a visually appealing and functional website."
        }
    ),
    "smenus": new Project(
        "Flutter Package: SMenus",
        {
            img: new URL('./src/assets/projects/flutter-smenus.png?as=webp', import.meta.url),
            url: "https://pub.dev/packages/flutter_smenus",
            tags: [t_flutter, t_package],
            languages: [[l_dart, 100.0]],
            description: "Created a Flutter package for customizable menus, using Dart programming language. This project demonstrated my ability to work with Flutter and create reusable UI components."
        }
    ),
    "quotegen": new Project(
        "Client Quote Generator",
        {
            img: new URL('./src/assets/projects/quote-generator.png?as=webp', import.meta.url),
            url: "./projects/quote-generator",
            tags: [t_python, t_pyqt, t_regex],
            languages: [[l_python, 80.0], [l_cpp, 20.0]],
            description: "Developed a client quote generator using Python, PyQt, and regular expressions, with a focus on automating tasks and improving efficiency. This project showcased my ability to work with Python and create desktop applications."
        }
    ),
    "trackify": new Project(
        "Trackify: An Issue Tracker",
        {
            img: new URL('./src/assets/projects/trackify.png?as=webp', import.meta.url),
            url: "./projects/trackify",
            tags: [t_docker, t_docker_compose, t_containerized, t_api, t_secure, t_postgresql, t_angular],
            languages: [[l_python, 70.0], [l_typescript, 24.5], [l_dockerfile, 4.2], [l_other, 1.3]],
            description: "Built an issue tracking system with Docker, Docker Compose, and Angular, focusing on containerization, security, and scalability, showcasing my expertise in secure and scalable app development."
        }
    ),
    "shorturl": new Project(
        "shortUrl",
        {
            img: new URL('./src/assets/projects/shorturl.png?as=webp', import.meta.url),
            url: "./projects/shorturl",
            tags: [t_docker, t_docker_compose, t_containerized, t_api, t_secure, t_postgresql, t_angular],
            languages: [[l_js, 80.0], [l_css, 19.8], [l_hmtl, 0.2]],
            description: "A ground-up implementation of a URL shortener and QR code generator with customizable features, expiration dates, and login functionality."
        }
    ),
};

const projects = [
    all_projects['terrain'],
    all_projects['shorturl'],
    all_projects['trackify'],
    all_projects['registry'],
    all_projects['scanner'],
    // all_projects['taskapp'],
    // all_projects['portfolio'],
    all_projects['smenus'],
    all_projects['quotegen'],
];


// Setup
createPopupSideMenuLinksForPortfolio();
createSideMenuBarsForPortfolio();
runTextMorphScript();
generateSkills(skills);
generateTimeline(timelineSections);
generateProjects(projects);


// Event Listeners
const skillPopup = document.getElementById('skill-popup');
skillPopup.addEventListener('click', () => {
    const skillPopupCard = document.getElementById('skill-popup-card');
    skillPopupCard.style.transform = '';
    setTimeout(() => {
        skillPopup.style.opacity = '0';
        skillPopup.style.pointerEvents = 'none';
        skillPopup.style.zIndex = '-1';
        skillPopup.style.webkitUserSelect = 'none';
        skillPopup.style.userSelect = 'none';
    }, 100);
});

// Swiper
const skill_swiper = new Swiper('.skill-swiper', {
    modules: [Pagination, Autoplay, FreeMode],
    loop: true,
    loopAdditionalSlides: skills.length,
    freeMode: {
        enabled: true,
        momentumVelocityRatio: 0.25,
    },
    freeModeMomentum: true,
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: -10,
    autoplay: {
        enabled: true,
        delay: -1,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    speed: 1000,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: -55,
            freeMode: {
                enabled: true,
                momentumVelocityRatio: 1,
            },
        },
        640: {
            slidesPerView: 3,
            freeMode: {
                enabled: true,
                momentumVelocityRatio: 0.5,
            },
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
        1600: {
            slidesPerView: 8,
        }
    },
});

const project_swiper = new Swiper('.project-swiper', {
    modules: [Navigation, Pagination],
    loop: false,
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 2,
    spaceBetween: 25,
    slidesPerView: 3,
    pagination: {
        el: ".swiper-project-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 'auto',
        },
        640: {
            slidesPerView: 'auto',
        },
        940: {
            slidesPerView: 2,
        },
        1600: {
            slidesPerView: 3,
        },
        2100: {
            slidesPerView: 4,
        }
    },
});