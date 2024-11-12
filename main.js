const skills = [
    new Skill({
        name: "Python", experience: ExpLevels.high, icon: "./assets/logos/python.png",
        description: "Proficient in Python programming language with extensive experience in developing scalable and efficient applications.",
    }),
    new Skill({
        name: "Docker", experience: ExpLevels.high, icon: "./assets/logos/docker.png",
        description: "Skilled in containerization using Docker, with experience in creating and managing containerized applications.",
    }),
    new Skill({
        name: "C++", experience: ExpLevels.med, icon: "./assets/logos/cpp.png",
        description: "Familiar with C++ programming language, with experience in developing applications that require performance and efficiency.",
    }),
    new Skill({
        name: "Git", experience: ExpLevels.high, icon: "./assets/logos/git.png",
        description: "Proficient in version control using Git, with experience in managing code repositories and collaborating with teams.",
    }),
    new Skill({
        name: "Agile", experience: ExpLevels.med, icon: "./assets/logos/agile.png",
        description: "Knowledgeable about Agile development methodologies, with experience in working on projects that follow Agile principles.",
    }),
    new Skill({
        name: "Scrum", experience: ExpLevels.med, icon: "./assets/logos/scrum.svg",
        description: "Familiar with Scrum framework, with experience in working on projects that follow Scrum principles.",
    }),
    new Skill({
        name: "Algorithms", experience: ExpLevels.high, icon: "./assets/logos/algorithms.png",
        description: "Skilled in designing and implementing efficient algorithms, with experience in solving complex problems.",
    }),
    new Skill({
        name: "Data Structures", experience: ExpLevels.high, icon: "./assets/logos/data-structures.png",
        description: "Proficient in working with various data structures, including arrays, linked lists, trees, and graphs.",
    }),
    new Skill({
        name: "Cloud Computing", experience: ExpLevels.med, icon: "./assets/logos/cloud-computing.png",
        description: "Familiar with cloud computing concepts, including cloud native, infrastructure, platform, and software as a service.",
    }),
    new Skill({
        name: "REST", experience: ExpLevels.med, icon: "./assets/logos/rest.png",
        description: "Knowledgeable about RESTful API design, with experience in developing and consuming RESTful APIs.",
    }),
    new Skill({
        name: "AWS", experience: ExpLevels.med, icon: "./assets/logos/aws.png",
        description: "Familiar with Amazon Web Services, including EC2, S3, and Lambda.",
    }),
    new Skill({
        name: "Azure", experience: ExpLevels.low, icon: "./assets/logos/azure.png",
        description: "Basic knowledge of Microsoft Azure, including Azure Compute and Azure Storage.",
    }),
    new Skill({
        name: "GCP", experience: ExpLevels.low, icon: "./assets/logos/gcp.png",
        description: "Basic knowledge of Google Cloud Platform, including Compute Engine and Cloud Storage.",
    }),
    new Skill({
        name: "Terraform", experience: ExpLevels.low, icon: "./assets/logos/terraform.png",
        description: "Basic knowledge of Terraform, including infrastructure as code and configuration management.",
    }),
    new Skill({
        name: "Firebase", experience: ExpLevels.med, icon: "./assets/logos/firebase.png",
        description: "Familiar with Firebase, including Realtime Database, Firestore, and Authentication.",
    })
];

const timelineSections = [
    new TimelineSection({
        startDate: new Date(2020, 7), endDate: new Date(2024, 5),
        color: '#8E6F3E', tooltip: 'Purdue University', icon: './assets/logos/purdue.png',
        title: 'B.S. in Computer Engineering at Purdue University',
        description: "Earned a comprehensive degree in Computer Engineering, building a strong foundation in computer systems, software development, and digital electronics. Developed a solid understanding of computer architecture, algorithms, and data structures, preparing for a career in technology and innovation."
    }),
    new TimelineSection({
        startDate: new Date(2021, 4), endDate: new Date(2021, 7),
        color: '#239b5d', tooltip: 'Aurora Circuits', icon: './assets/logos/aurora_circuits.png',
        title: 'Computer Engineer Intern at Aurora Circuits',
        description: "Developed a self-configurable application that streamlines the PCB quoting process, eliminating the need for manual Excel sheets and increasing efficiency."
    }),
    new TimelineSection({
        startDate: new Date(2023, 4), endDate: new Date(2023, 7),
        color: '#2D95E5', tooltip: 'Progressive Insurance', icon: './assets/logos/progressive.png',
        title: 'Software Developer Intern at Progressive Insurance',
        description: "Developed scalable solutions with Python, and expanded skills in Docker, Terraform, and OpenStack. Contributed to a dynamic team, driving innovation and business growth through cutting-edge technologies."
    }),
    new TimelineSection({
        startDate: new Date(2024, 5), endDate: null,
        color: '#2D95E5', tooltip: 'Progressive Insurance', icon: './assets/logos/progressive.png',
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
const all_projects = [
    new Project("Internal Package Registry", "project-1.png", "https://github.com/svparekh/Package-Registry-ECE461-Project-ACMEIR",
        [t_aws, t_agile, t_scrum, t_rest_api, t_cli], [[l_rust, 37.0], [l_dart, 32.7], [l_python, 26.6], [l_shell, 2.4], [l_other, 1.3]],
        "Built an internal package registry using Rust, Dart, and Python, leveraging AWS and Agile methodologies, to create a scalable and efficient package management system."),
    new Project("Procedural Terrain", "project-2.png", "https://github.com/svparekh/ProceduralPlanet",
        [t_opengl, t_freeglut, t_raymarching, t_sdf, t_perlin, t_phong], [[l_cpp, 84.6], [l_c, 13.6], [l_glsl, 1.7], [l_other, 0.1]],
        "Created a procedural terrain generator using C++, OpenGL, and GLSL, incorporating techniques such as raymarching, SDF, Perlin noise, and Phong shading. This project demonstrated my understanding of computer graphics and procedural generation techniques."),
    new Project("Cloud-Enabled Fingerprint Scanner", "project-3.png", "https://github.com/Senior-Design-ECE-477/ESP32",
        [t_aws, t_esp32, t_espidf, t_rest_api, t_pcb, t_embedded, t_spi, t_uart, t_wifi], [[l_c, 99.9], [l_other, 0.1]],
        "Developed a cloud-enabled fingerprint scanner using ESP32, AWS, and REST API, showcasing my ability to create secure and efficient biometric authentication systems with microcontrollers and cloud-based technologies."),
    new Project("Cloud-Enabled TaskApp", "project-4.png", "https://github.com/svparekh/TaskApp",
        [t_firebase, t_firestore, t_flutter, t_gcpstorage], [[l_dart, 80.0], [l_cpp, 9.8], [l_cmake, 8.0], [l_c, 0.6]],
        "Developed a cloud-enabled task management application using Flutter, Firebase, and Firestore, with a focus on scalable and efficient data storage and retrieval. This project demonstrated my ability to work with cloud-based technologies and mobile app development frameworks."),
    new Project("This Website", "project-5.png", "https://github.com/svparekh/svparekh.github.io",
        [t_html, t_css, t_js], [[l_css, 44.9], [l_js, 34.1], [l_hmtl, 21.0]],
        "Designed and developed this personal website using HTML, CSS, and JavaScript, with a focus on responsive design and user experience. This project showcased my ability to work with front-end web development technologies and create a visually appealing and functional website."),
    new Project("Flutter Package: SMenus", "project-6.png", "https://github.com/svparekh/FlutterMenus",
        [t_flutter, t_package], [[l_dart, 100.0]],
        "Created a Flutter package for customizable menus, using Dart programming language. This project demonstrated my ability to work with Flutter and create reusable UI components."),
    new Project("Client Quote Generator", "project-7.png", "https://github.com",
        [t_python, t_pyqt, t_regex], [[l_python, 80.0], [l_cpp, 20.0]],
        "Developed a client quote generator using Python, PyQt, and regular expressions, with a focus on automating tasks and improving efficiency. This project showcased my ability to work with Python and create desktop applications."),
    new Project("Trackify: An Issue Tracker", "trackify/trackify.png", "./projects/trackify.html",
        [t_docker, t_docker_compose, t_containerized, t_api, t_secure, t_postgresql, t_angular], [[l_python, 70.0], [l_typescript, 24.5], [l_dockerfile, 4.2], [l_other, 1.3]],
        "Built an issue tracking system with Docker, Docker Compose, and Angular, focusing on containerization, security, and scalability, showcasing my expertise in secure and scalable app development."),
];

const projects = [
    all_projects[1],
    all_projects[0],
    all_projects[7],
    all_projects[2],
    all_projects[3],
    all_projects[4],
    all_projects[5],
    all_projects[6],
];


createPopupSideMenuLinks();
createSideMenuBars();
runTextMorphScript();
generateSkills(skills);
generateTimeline(timelineSections);
generateProjects();


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


const skill_swiper = new Swiper('.skill-swiper', {
    loop: true,
    loopAdditionalSlides: skills.length,
    freeMode: {
        enabled: true,
        momentumVelocityRatio: 0.25,
    },
    freeModeMomentum: true,
    grabCursor: true,
    centeredSlides: true,
    navigation: false,
    spaceBetween: 0,

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
        },
        640: {
            slidesPerView: 3,
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
        2000: {
            slidesPerView: 4,
        }
    },
});