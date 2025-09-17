// Theme Management
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);

const updateButtonIcon = (theme) => {
    if (theme === 'light') {
        themeToggle.innerHTML = '🌙';
    } else {
        themeToggle.innerHTML = '🌞';
    }
}

updateButtonIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonIcon(newTheme);
});

// Typewriter Effect
const nameElement = document.querySelector('#intro h1 div');
const names = ["Hi there!", "I'm Nikhil Yeminedi"];
let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = names[currentIndex];

    if (!isDeleting) {
        nameElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1500);
        } else {
            setTimeout(typeWriter, 100);
        }
    } else {
        nameElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % names.length;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, 50);
        }
    }
}

typeWriter();

// Skills Data - Updated for Nikhil
const skills = [
    { name: "Python", icon: "fab fa-python" },
    { name: "Java", icon: "fab fa-java" },
    { name: "Scala", icon: "fas fa-code" },
    { name: "JavaScript", icon: "fab fa-js-square" },
    { name: "C++", icon: "fas fa-code" },
    { name: "SQL", icon: "fas fa-database" },
    { name: "HQL", icon: "fas fa-database" },
    { name: "Shell Scripting", icon: "fas fa-terminal" },
    { name: "Flask", icon: "fas fa-flask" },
    { name: "Django", icon: "fas fa-code" },
    { name: "Spring Boot", icon: "fas fa-leaf" },
    { name: "React.js", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "TensorFlow", icon: "fas fa-brain" },
    { name: "PyTorch", icon: "fas fa-fire" },
    { name: "BERT", icon: "fas fa-robot" },
    { name: "spaCy", icon: "fas fa-language" },
    { name: "Apache Spark", icon: "fas fa-fire" },
    { name: "Hadoop", icon: "fas fa-server" },
    { name: "Kafka", icon: "fas fa-stream" },
    { name: "MapReduce", icon: "fas fa-map" },
    { name: "Hive", icon: "fas fa-honeycomb" },
    { name: "AWS", icon: "fab fa-aws" },
    { name: "Azure", icon: "fab fa-microsoft" },
    { name: "Docker", icon: "fab fa-docker" },
    { name: "Jenkins", icon: "fas fa-cogs" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "PostgreSQL", icon: "fas fa-database" },
    { name: "MongoDB", icon: "fas fa-leaf" }
];

// Education Data - Updated for Nikhil
const education = [
    {
        institution: "Georgia State University",
        degree: "Master of Science in Computer Science",
        duration: "January 2025 - May 2027",
        location: "Atlanta, GA",
        gpa: "GPA: 4.0/4.0 (Current: 4.3/4.0)",
        image: "assets/gsu_logo.jpg"
    },
    {
        institution: "Jawaharlal Nehru Technological University",
        degree: "Bachelor of Technology in Computer Science",
        duration: "July 2018 - June 2022",
        location: "Kakinada, India",
        gpa: "GPA: 8.3/10 | First Class with Distinction",
        image: "assets/jntu_logo.jpg"
    }
];

// Experience Data - Updated for Nikhil
const experiences = [
    {
        title: "Software Development Engineer",
        company: "SCALES, Georgia State University",
        companyIcon: "assets/gsu_logo.jpg",
        location: "Atlanta, GA",
        duration: "May 2025 - Present",
        description: "Engineering scalable data processing systems for U.S. Federal Court records and developing sophisticated entity resolution pipelines.",
        achievements: [
            "Engineered scalable data processing systems handling millions of U.S. Federal Court (PACER) records with optimized performance and robust entity-resolution pipelines",
            "Built sophisticated entity resolution pipelines to generate unique IDs for judges, law firms, and legal parties",
            "Extracted key entities from federal docket text using spaCy NER models for judicial pattern analysis and recidivism tracing",
            "Developed RESTful APIs and microservices to serve structured legal datasets for research applications",
            "Provided foundational data infrastructure transforming raw federal case data into structured, analyzable datasets",
            "Presented poster on designing and implementing scalable data pipeline architecture to stakeholders"
        ]
    },
    {
        title: "Research Software Developer",
        company: "DICE Lab, Georgia State University",
        companyIcon: "assets/gsu_logo.jpg",
        location: "Atlanta, GA",
        duration: "January 2025 - May 2025",
        description: "Developed advanced NLP frameworks and published research on neuro-symbolic adverse event detection.",
        achievements: [
            "Co-authored and published research paper (NLPIR 2025) on neuro-symbolic adverse event detection framework",
            "Developed and fine-tuned BERT-based classifier with domain-specific preprocessing and semantic filtering",
            "Built and implemented symbolic validation layer with co-occurrence extraction and graph-based analysis",
            "Designed advanced NLP pipeline combining BERT and spaCy with automated PDF text processing",
            "Engineered robust data pipelines processing 50,000+ disaster-related tweets",
            "Enhanced signal detection capabilities from news articles and social media platforms"
        ]
    },
    {
        title: "Data Engineer & Software Development Engineer",
        company: "Tata Consultancy Services",
        companyIcon: "assets/tcs_logo.png",
        location: "Bengaluru, India",
        duration: "July 2022 - December 2024",
        description: "Developed large-scale distributed systems for financial transactions and built comprehensive ETL pipelines.",
        achievements: [
            "Developed and maintained large-scale distributed systems handling millions of financial transactions with high availability",
            "Created and automated comprehensive ETL pipelines analyzing SQL scripts and optimizing HQL workflows on Hadoop",
            "Built and optimized solutions using Hive, Sqoop, Oozie, Scala, Java, and MapReduce",
            "Designed RESTful APIs with Spring Boot and utilized Postman, Jetty, and Tomcat for API testing",
            "Streamlined data migration and transformation processes on Unix/Linux environments with cloud platforms",
            "Led Agile development teams and implemented CI/CD pipelines with Jenkins"
        ]
    },
    {
        title: "Full-Stack Web Developer",
        company: "Steed 26 Solutions Pvt Ltd",
        companyIcon: "assets/steed26_logo.png",
        location: "Bengaluru, India",
        duration: "March 2021 - June 2022",
        description: "Designed and implemented Hospital Records Management System serving 1000+ users.",
        achievements: [
            "Designed responsive, dynamic user interfaces using HTML5, CSS3, JavaScript, and modern frameworks",
            "Implemented backend services and database design for healthcare management system serving 1000+ users",
            "Integrated complex RESTful APIs with asynchronous data handling via AJAX",
            "Applied Agile software development methodologies including daily stand-ups and sprint planning",
            "Maintained code quality through collaborative Agile sprints and comprehensive testing strategies"
        ]
    },
    {
        title: "Machine Learning Intern",
        company: "Finland Labs",
        companyIcon: "assets/finland_labs_logo.png",
        location: "Bengaluru, India (Remote)",
        duration: "April 2021",
        description: "Comprehensive training on ML/AI and IoT using AWS cloud platform.",
        achievements: [
            "Completed comprehensive training on Machine Learning, Artificial Intelligence, and IoT using AWS",
            "Implemented Cat & Dog Classification using Convolutional Neural Networks (CNNs)",
            "Developed Home Automation system using AWS cloud infrastructure"
        ]
    }
];

// Projects Data - Updated for Nikhil
const projects = [
    {
        title: "Eviction Data Pipeline: Automated Court Case Processing",
        description: "Built comprehensive automated ETL pipeline processing 200,000+ eviction cases with advanced fuzzy matching algorithms for entity resolution and demographic analysis using Census API integration.",
        technologies: ["Python", "SQL", "Census API", "Fuzzy Matching", "ETL"],
        image: "assets/eviction-pipeline.jpg",
        link: "https://github.com/nikhilgoud003/EvictionDataHub.git"
    },
    {
        title: "Adverse-Event Detection for Disaster Tweets",
        description: "Developed scalable NLP pipeline using fine-tuned BERT model for real-time disaster event detection with co-occurrence pattern analysis across 50,000+ disaster-related tweets and interpretable knowledge graphs.",
        technologies: ["Python", "BERT", "spaCy", "Flask", "NLP", "Knowledge Graphs"],
        image: "assets/disaster-tweets.jpg",
        link: "https://github.com/nikhilgoud003/Co-occurence_Metrics.git
    },
    {
        title: "Hand Gesture Recognition for Sign Language",
        description: "Initiated end-to-end deep learning application translating sign language into text using CNN-based computer vision system for real-time hand gesture recognition with responsive Flask web interface.",
        technologies: ["Python", "TensorFlow", "OpenCV", "CNN", "Flask", "Computer Vision"],
        image: "assets/hand-gesture.jpg",
        link: "https://github.com/nikhilgoud003/SignLang-Translator.git"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    // Populate skills
    const skillsList = document.querySelector('.skills-list');
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.innerHTML = `
            <i class="${skill.icon} skill-icon"></i>
            ${skill.name}
        `;
        skillsList.appendChild(li);
    });

    // Populate education
    const educationContainer = document.querySelector('.education-container');
    education.forEach(edu => {
        const div = document.createElement('div');
        div.classList.add('education-item');
        div.innerHTML = `
            <img src="${edu.image}" alt="${edu.institution}" class="education-image">
            <div class="education-content">
                <h3 class="education-institution">${edu.institution}</h3>
                <p class="education-degree">${edu.degree}</p>
                <p class="education-duration">${edu.duration}</p>
                <p class="education-duration">${edu.location}</p>
                <p class="education-duration">${edu.gpa}</p>
            </div>
        `;
        educationContainer.appendChild(div);
    });

    // Populate experience
    const experienceContainer = document.querySelector('.experience-container');
    experiences.forEach(exp => {
        const div = document.createElement('div');
        div.classList.add('experience-item');

        const achievementsList = exp.achievements.map(achievement => 
            `<li>${achievement}</li>`
        ).join('');

        div.innerHTML = `
            <div class="company-details">
                <img src="${exp.companyIcon}" alt="${exp.company}" class="company-icon">
                <div>
                    <h3 class="company-title">${exp.title}</h3>
                    <p><strong>${exp.company}</strong> | ${exp.duration}</p>
                    <p class="location">${exp.location}</p>
                </div>
            </div>
            <p>${exp.description}</p>
            <ul class="achievements-list">
                ${achievementsList}
            </ul>
        `;
        experienceContainer.appendChild(div);
    });

    // Populate projects
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const div = document.createElement('div');
        div.classList.add('project-card');
        div.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" class="project-link" target="_blank">
                    <i class="fab fa-github"></i>
                    View on GitHub
                </a>
                <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
            </div>
        `;
        projectsGrid.appendChild(div);
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.children[0].value;
        const email = contactForm.children[1].value;
        const subject = contactForm.children[2].value;
        const message = contactForm.children[3].value;

        // Create mailto link
        const mailtoLink = `mailto:nikhilgoudyeminedi@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        // Open email client
        window.location.href = mailtoLink;

        // Reset form
        contactForm.reset();
        alert('Thank you for your message!');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll-based navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
