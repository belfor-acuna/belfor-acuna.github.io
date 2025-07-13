export const translations = {
  en: {
    // Navigation & General
    nav: {
      home: "Home",
      about: "About me",
      contact: "Contact me",
      expertise: "My Expertise",
      experience: "Work Experience",
      achievements: "Achievements",
      welcome: "Welcome",
      welcomeSubtitle: "Explore my portfolio and get to know more about my work",
      close: "Close menu"
    },
    
    // Hero Section
    hero: {
      greeting: "Hi, I'm",
      name: "Belfor",
      title: "DevOps & SRE Engineer",
      subtitle: "Passionate about Kubernetes, CI/CD automation, and building reliable infrastructure. Linux Foundation certified with hands-on experience in production environments. Let's build something amazing together!",
      cta: {
        projects: "View Projects",
        contact: "Contact me"
      }
    },

    // Expertise Section
    expertise: {
      title: "Areas of Expertise",
      subtitle: "Specialized skills in modern DevOps practices and full-stack development",
      items: {
        containers: {
          name: "Container Orchestration",
          description: "Proficient in Kubernetes (k3s) cluster management, Helm chart development, and container orchestration. Skilled in Docker containerization, persistent volumes, ConfigMaps, and Kubeseal for secure secret management across multiple environments. Currently exploring entry-level GKE and EKS managed services."
        },
        cicd: {
          name: "CI/CD & GitOps",
          description: "Proficient in GitOps workflows using ArgoCD for continuous deployment and environment synchronization. Skilled in building secure CI/CD pipelines with GitLab CI/CD and GitHub Actions, featuring automated code analysis, coverage reporting, and security scanning. Implementing container image vulnerability scanning with Trivy. Specialized in environment-based versioning with semantic release workflows that generate proper tags per branch/environment, ensuring full traceability and automated Docker image publication. Strong Bash scripting skills for automation."
        },
        monitoring: {
          name: "Monitoring & Observability",
          description: "Experience in cluster status monitoring through ArgoCD and establishing observability practices for production environments. Currently studying Prometheus for metrics collection and Grafana for visualization to implement comprehensive monitoring solutions."
        },
        cloud: {
          name: "Cloud & Infrastructure",
          description: "Hands-on experience with Google Cloud Platform (GCP) Compute Engine and AWS services including S3, EC2, DynamoDB, and IAM through homelab experiments. Proficient in VPS-based infrastructure management, DNS configuration, and CDN optimization."
        },
        networking: {
          name: "Networking & Security",
          description: "Skilled in Traefik load balancing, reverse proxy configuration, and TLS/SSL certificate management. Proficient in DNS management across Cloudflare and GoDaddy, UFW firewall configuration, and self-hosted mail server setup with Mailcow."
        },
        fullstack: {
          name: "Full Stack Development",
          description: "Proficient in modern web development with Vue.js and React for frontend applications. Backend expertise in NestJS, Express, Spring Boot, and Flask. Database management with PostgreSQL, MySQL, and MongoDB. Supporting DevOps workflows with comprehensive full-stack solutions."
        }
      }
    },

    // Certifications Section
    certifications: {
      title: "Certifications & Key Achievements",
      subtitle: "Professional certifications and notable accomplishments in DevOps and infrastructure",
      cert: {
        title: "Introduction to Kubernetes",
        issuer: "The Linux Foundation",
        year: "2025",
        description: "Official certified and evaluated course by The Linux Foundation demonstrating comprehensive understanding of Kubernetes fundamentals, container orchestration, and cloud-native technologies.",
        topics: {
          fundamentals: "Kubernetes Fundamentals",
          orchestration: "Container Orchestration", 
          cloudNative: "Cloud-Native Technologies",
          podManagement: "Pod Management",
          networking: "Services & Networking"
        },
        buttons: {
          certificate: "View Certificate",
          badge: "View Badge"
        }
      },
      achievements: {
        title: "Key Achievements",
        items: {
          k8sMigration: {
            name: "Multi-Environment Kubernetes Migration",
            description: "Successfully migrated deployments from Docker Compose + Nginx to Kubernetes (k3s) across three environments (dev, preprod, prod) using Helm charts, ConfigMaps, and Kubeseal for secure secret management.",
            category: "Infrastructure"
          },
          secureCI: {
            name: "Secure CI/CD Pipeline Implementation", 
            description: "Developed security-focused CI/CD pipelines with automated code analysis, coverage reporting, and upcoming Trivy container image vulnerability scanning. Implemented semantic release workflows for branch/environment-based tagging, ensuring complete traceability from code to production deployment.",
            category: "DevSecOps"
          },
          incidentResolution: {
            name: "Critical Production Incident Resolution",
            description: "Led identification and resolution of critical production incidents including PostgreSQL data corruption and service failures, establishing recovery procedures and DevOps-Development communication workflows.",
            category: "SRE"
          },
          gitops: {
            name: "GitOps Implementation with ArgoCD",
            description: "Developed comprehensive CI/CD pipelines with GitHub Actions and GitLab CI featuring environment-based versioning, automatic Docker image publication, and continuous deployment using ArgoCD for synchronized environments.",
            category: "DevOps"
          }
        }
      }
    },

    // Experience Section
    experience: {
      title: "Professional Experience",
      subtitle: "A journey through DevOps transformation, full-stack development, and infrastructure modernization",
      items: {
        etransparencia: {
          company: "e-transparencia (Fondef)",
          role: "DevOps / SRE",
          period: "Mar 2025 - Present",
          location: "Chile",
          type: "Project",
          description: "Managing three-environment infrastructure (dev, preprod, prod) on VPS-based Kubernetes (k3s bare-metal) with Traefik load balancing. Leading critical production incident resolution and establishing DevOps-Development communication workflows.",
          achievements: [
            "Migrated deployments from Docker Compose + Nginx to Kubernetes using Helm charts, ConfigMaps, and Kubeseal",
            "Managed DNS on Cloudflare/GoDaddy for etransparencia.cl with self-signed TLS certificates",
            "Developed CI/CD pipelines in GitHub Actions with environment-based versioning and ArgoCD deployment",
            "Led resolution of critical production incidents including PostgreSQL data corruption and service failures",
            "Documented recovery procedures and established effective DevOps-Development communication workflows"
          ]
        },
        tendify: {
          company: "Tendify (Fondef)",
          role: "Full-Stack Developer & DevOps",
          period: "Mar 2024 - Present",
          location: "Chile",
          type: "Project",
          description: "Designed and developed a comprehensive platform for AI-assisted tender generation using OpenAI integration. Built full-stack solution with modern technologies and migrated infrastructure to Kubernetes.",
          achievements: [
            "Designed architecture for AI-assisted tender generation platform with OpenAI integration",
            "Built backend APIs with NestJS, Flask, and Express for SRS document management and prompt tuning",
            "Developed Vue 3 frontend with WYSIWYG editor, contextual chat, and dynamic document preview",
            "Migrated infrastructure from Docker Compose + Nginx to Kubernetes (k3s) with Traefik and Helm",
            "Configured GitLab CI/CD for automated Docker image builds and deployments across distributed repositories",
            "Managed DNS/CDN on Cloudflare R2 for asset storage ensuring low latency and high availability"
          ]
        }
      },
      labels: {
        achievements: "Key Achievements",
        technologies: "Technologies Used"
      }
    },

    // About Section
    about: {
      title: "About Me",
      content: {
        intro: "Hi! I'm really glad you're here. I'm a Software Engineering student at Universidad de La Frontera, graduating in December 2025, with a strong focus on DevOps and Site Reliability Engineering. Currently working as a DevOps/SRE engineer at e-transparencia and Tendify (Fondef projects), where I manage production Kubernetes environments and build robust CI/CD pipelines. Oh, and I love cats!",
        expertise: "My expertise spans Kubernetes cluster management (k3s bare-metal), GitOps workflows with ArgoCD, and comprehensive CI/CD automation using GitLab CI and GitHub Actions. I'm Linux Foundation certified and have hands-on experience with production incident management, including PostgreSQL data corruption recovery and system reliability improvements.",
        personal: "When I'm not optimizing deployment pipelines or troubleshooting production issues, I enjoy playing video games, tabletop games, and reading books. I'm also working on a role-playing tabletop game, which has been a fantastic creative challenge. I love experimenting with new DevOps tools and contributing to infrastructure automation projects."
      },
      cta: "Read more about me"
    },

    // Projects Section
    projects: {
      title: "My projects",
      items: {
        picbox: {
          name: "Picbox",
          description: "A Pinterest like app where you can upload and share your images. Created using Springboot, MySQL and Thymeleaf"
        },
        stochastics: {
          name: "Stochastics processes Calculator",
          description: "A full calculator for stochastics processes, it shows formulas, graphics and images. Created using VueJS, docker and google cloud."
        },
        uxdesign: {
          name: "UX/UI Design for a web app",
          description: "I made the full design for a web app that helps organizations to evaluate their transparency statutes. Created using Figma."
        },
        t2r2: {
          name: "T2R2: Public tenders creator",
          description: "A web application that helps you to create public tenders. It manages PDF docs using templates. Created using Express, MongoDB, VueJS and Flask."
        },
        playground: {
          name: "Playground",
          description: "A space where I showcase small functionalities and experiments I develop while learning new technologies."
        }
      }
    },

    // CTA Section
    cta: {
      title: "Let's make something amazing together",
      description: "Ready to bring your infrastructure to the next level? I'm always interested in discussing new opportunities, challenging DevOps projects, and innovative solutions in cloud-native technologies.",
      button: "Contact me"
    }
  },

  es: {
    // Navigation & General
    nav: {
      home: "Inicio",
      about: "Acerca de mí",
      contact: "Contáctame",
      expertise: "Mi Experiencia",
      experience: "Experiencia Laboral",
      achievements: "Logros",
      welcome: "Bienvenido",
      welcomeSubtitle: "Explora mi portafolio y conoce más sobre mi trabajo",
      close: "Cerrar menú"
    },
    
    // Hero Section
    hero: {
      greeting: "Hola, soy",
      name: "Belfor",
      title: "Ingeniero DevOps y SRE",
      subtitle: "Apasionado por Kubernetes, automatización CI/CD y construcción de infraestructura confiable. Certificado por Linux Foundation con experiencia práctica en entornos de producción. ¡Construyamos algo increíble juntos!",
      cta: {
        projects: "Ver Proyectos",
        contact: "Contáctame"
      }
    },

    // Expertise Section
    expertise: {
      title: "Áreas de Especialización",
      subtitle: "Habilidades especializadas en prácticas DevOps modernas y desarrollo full-stack",
      items: {
        containers: {
          name: "Orquestación de Contenedores",
          description: "Competente en gestión de clusters Kubernetes (k3s), desarrollo de Helm charts y orquestación de contenedores. Hábil en containerización Docker, volúmenes persistentes, ConfigMaps y Kubeseal para gestión segura de secretos en múltiples entornos. Actualmente explorando servicios administrados GKE y EKS a nivel inicial."
        },
        cicd: {
          name: "CI/CD y GitOps",
          description: "Competente en flujos GitOps usando ArgoCD para despliegue continuo y sincronización de entornos. Hábil en construcción de pipelines CI/CD seguros con GitLab CI/CD y GitHub Actions, con análisis automatizado de código, reportes de cobertura y escaneo de seguridad. Implementando escaneo de vulnerabilidades de imágenes con Trivy. Especializado en versionado basado en entornos con flujos de semantic release que generan tags apropiados por rama/entorno, asegurando trazabilidad completa y publicación automatizada de imágenes Docker. Sólidas habilidades en scripting Bash para automatización."
        },
        monitoring: {
          name: "Monitoreo y Observabilidad",
          description: "Experiencia en monitoreo de estado de clusters a través de ArgoCD y establecimiento de prácticas de observabilidad para entornos de producción. Actualmente estudiando Prometheus para recolección de métricas y Grafana para visualización para implementar soluciones de monitoreo integrales."
        },
        cloud: {
          name: "Nube e Infraestructura",
          description: "Experiencia práctica con Google Cloud Platform (GCP) Compute Engine y servicios AWS incluyendo S3, EC2, DynamoDB e IAM a través de experimentos en homelab. Competente en gestión de infraestructura basada en VPS, configuración DNS y optimización CDN."
        },
        networking: {
          name: "Redes y Seguridad",
          description: "Hábil en balanceador de carga Traefik, configuración de reverse proxy y gestión de certificados TLS/SSL. Competente en gestión DNS en Cloudflare y GoDaddy, configuración de firewall UFW y configuración de servidor de correo auto-hospedado con Mailcow."
        },
        fullstack: {
          name: "Desarrollo Full Stack",
          description: "Competente en desarrollo web moderno con Vue.js y React para aplicaciones frontend. Experiencia backend en NestJS, Express, Spring Boot y Flask. Gestión de bases de datos con PostgreSQL, MySQL y MongoDB. Apoyando flujos DevOps con soluciones full-stack integrales."
        }
      }
    },

    // Certifications Section
    certifications: {
      title: "Certificaciones y Logros Clave",
      subtitle: "Certificaciones profesionales y logros notables en DevOps e infraestructura",
      cert: {
        title: "Introducción a Kubernetes",
        issuer: "The Linux Foundation",
        year: "2025",
        description: "Curso oficial certificado y evaluado por The Linux Foundation que demuestra comprensión integral de fundamentos de Kubernetes, orquestación de contenedores y tecnologías cloud-native.",
        topics: {
          fundamentals: "Fundamentos de Kubernetes",
          orchestration: "Orquestación de Contenedores",
          cloudNative: "Tecnologías Cloud-Native", 
          podManagement: "Gestión de Pods",
          networking: "Servicios y Redes"
        },
        buttons: {
          certificate: "Ver Certificado",
          badge: "Ver Insignia"
        }
      },
      achievements: {
        title: "Logros Clave",
        items: {
          k8sMigration: {
            name: "Migración Multi-Entorno a Kubernetes",
            description: "Migré exitosamente despliegues de Docker Compose + Nginx a Kubernetes (k3s) en tres entornos (dev, preprod, prod) usando Helm charts, ConfigMaps y Kubeseal para gestión segura de secretos.",
            category: "Infraestructura"
          },
          secureCI: {
            name: "Implementación de Pipeline CI/CD Seguro",
            description: "Desarrollé pipelines CI/CD enfocados en seguridad con análisis automatizado de código, reportes de cobertura y próximo escaneo de vulnerabilidades de imágenes con Trivy. Implementé flujos de semantic release para etiquetado basado en rama/entorno, asegurando trazabilidad completa desde código hasta despliegue en producción.",
            category: "DevSecOps"
          },
          incidentResolution: {
            name: "Resolución de Incidentes Críticos de Producción",
            description: "Lideré la identificación y resolución de incidentes críticos de producción incluyendo corrupción de datos PostgreSQL y fallas de servicios, estableciendo procedimientos de recuperación y flujos de comunicación DevOps-Desarrollo.",
            category: "SRE"
          },
          gitops: {
            name: "Implementación GitOps con ArgoCD",
            description: "Desarrollé pipelines CI/CD integrales con GitHub Actions y GitLab CI con versionado basado en entornos, publicación automática de imágenes Docker y despliegue continuo usando ArgoCD para entornos sincronizados.",
            category: "DevOps"
          }
        }
      }
    },

    // Experience Section
    experience: {
      title: "Experiencia Profesional",
      subtitle: "Un recorrido por la transformación DevOps, desarrollo full-stack y modernización de infraestructura",
      items: {
        etransparencia: {
          company: "e-transparencia (Fondef)",
          role: "DevOps / SRE",
          period: "Mar 2025 - Presente",
          location: "Chile",
          type: "Proyecto",
          description: "Gestionando infraestructura de tres entornos (dev, preprod, prod) en Kubernetes (k3s bare-metal) basado en VPS con balanceador de carga Traefik. Liderando resolución de incidentes críticos de producción y estableciendo flujos de comunicación DevOps-Desarrollo.",
          achievements: [
            "Migré despliegues de Docker Compose + Nginx a Kubernetes usando Helm charts, ConfigMaps y Kubeseal",
            "Gestioné DNS en Cloudflare/GoDaddy para etransparencia.cl con certificados TLS auto-firmados",
            "Desarrollé pipelines CI/CD en GitHub Actions con versionado basado en entornos y despliegue ArgoCD",
            "Lideré resolución de incidentes críticos de producción incluyendo corrupción de datos PostgreSQL y fallas de servicios",
            "Documenté procedimientos de recuperación y establecí flujos efectivos de comunicación DevOps-Desarrollo"
          ]
        },
        tendify: {
          company: "Tendify (Fondef)",
          role: "Desarrollador Full-Stack y DevOps",
          period: "Mar 2024 - Presente",
          location: "Chile",
          type: "Proyecto",
          description: "Diseñé y desarrollé una plataforma integral para generación de licitaciones asistida por IA usando integración OpenAI. Construí solución full-stack con tecnologías modernas y migré infraestructura a Kubernetes.",
          achievements: [
            "Diseñé arquitectura para plataforma de generación de licitaciones asistida por IA con integración OpenAI",
            "Construí APIs backend con NestJS, Flask y Express para gestión de documentos SRS y ajuste de prompts",
            "Desarrollé frontend Vue 3 con editor WYSIWYG, chat contextual y vista previa dinámica de documentos",
            "Migré infraestructura de Docker Compose + Nginx a Kubernetes (k3s) con Traefik y Helm",
            "Configuré GitLab CI/CD para construcción automatizada de imágenes Docker y despliegues en repositorios distribuidos",
            "Gestioné DNS/CDN en Cloudflare R2 para almacenamiento de assets asegurando baja latencia y alta disponibilidad"
          ]
        }
      },
      labels: {
        achievements: "Logros Clave",
        technologies: "Tecnologías Utilizadas"
      }
    },

    // About Section
    about: {
      title: "Acerca de Mí",
      content: {
        intro: "¡Hola! Me alegra mucho que estés aquí. Soy estudiante de Ingeniería en Software en la Universidad de La Frontera, graduándome en diciembre de 2025, con un fuerte enfoque en DevOps e Ingeniería de Confiabilidad de Sitios. Actualmente trabajo como ingeniero DevOps/SRE en e-transparencia y Tendify (proyectos Fondef), donde gestiono entornos Kubernetes de producción y construyo pipelines CI/CD robustos. ¡Ah, y amo los gatos!",
        expertise: "Mi experiencia abarca gestión de clusters Kubernetes (k3s bare-metal), flujos GitOps con ArgoCD y automatización integral de CI/CD usando GitLab CI y GitHub Actions. Estoy certificado por Linux Foundation y tengo experiencia práctica en gestión de incidentes de producción, incluyendo recuperación de corrupción de datos PostgreSQL y mejoras de confiabilidad del sistema.",
        personal: "Cuando no estoy optimizando pipelines de despliegue o solucionando problemas de producción, disfruto jugando videojuegos, juegos de mesa y leyendo libros. También estoy trabajando en un juego de mesa de rol, lo cual ha sido un desafío creativo fantástico. Me encanta experimentar con nuevas herramientas DevOps y contribuir a proyectos de automatización de infraestructura."
      },
      cta: "Leer más sobre mí"
    },

    // Projects Section
    projects: {
      title: "Mis proyectos",
      items: {
        picbox: {
          name: "Picbox",
          description: "Una aplicación similar a Pinterest donde puedes subir y compartir tus imágenes. Creada usando Springboot, MySQL y Thymeleaf"
        },
        stochastics: {
          name: "Calculadora de procesos estocásticos",
          description: "Una calculadora completa para procesos estocásticos, muestra fórmulas, gráficos e imágenes. Creada usando VueJS, docker y google cloud."
        },
        uxdesign: {
          name: "Diseño UX/UI para una aplicación web",
          description: "Hice el diseño completo para una aplicación web que ayuda a las organizaciones a evaluar sus estatutos de transparencia. Creado usando Figma."
        },
        t2r2: {
          name: "T2R2: Creador de licitaciones públicas",
          description: "Una aplicación web que te ayuda a crear licitaciones públicas. Gestiona documentos PDF usando plantillas. Creada usando Express, MongoDB, VueJS y Flask."
        },
        playground: {
          name: "Playground",
          description: "Un espacio donde muestro pequeñas funcionalidades y experimentos que desarrollo mientras aprendo nuevas tecnologías."
        }
      }
    },

    // CTA Section
    cta: {
      title: "Hagamos algo increíble juntos",
      description: "¿Listo para llevar tu infraestructura al siguiente nivel? Siempre estoy interesado en discutir nuevas oportunidades, proyectos desafiantes de DevOps y soluciones innovadoras en tecnologías cloud-native.",
      button: "Contáctame"
    }
  }
};
