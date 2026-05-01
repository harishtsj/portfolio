import styles from './ProjectsStyles.module.css';
import mechatron from '../../assets/mechatron.png'
import faceNet from '../../assets/faceNet.png'
import ProjectCard from './ProjectCard';
import whatsup from '../../assets/logo_icon.svg'

function Projects() {
    const projectsArray = [
        {
            id: 1,
            link: 'https://harishtsj.github.io/mechatron-ui/',
            src: mechatron,
            alt: 'mechatron_logo',
            h3: 'Mechatron UI',
            p: 'A React-based UI project that represents the starting point of my web development journey, focusing on responsive design and modern frontend practices. This project marks my transition from frontend development to building full-stack applications'
        },
        {
            id: 2,
            link: 'https://taskpilot-uk4z.onrender.com',
            src: faceNet,
            alt: 'taskpilot_logo',
            h3: 'TaskPilot',
            p: 'Developed a full-stack Todo application with authentication, CRUD operations, and paginated task management. Built RESTful APIs and implemented efficient data handling for smooth performance. Focused on clean UI/UX and maintainable, scalable code structure.Tech Stack: React, Node.js, Express, MongoDB, Docker'
        },
        {
            id: 3,
            link: 'https://whatsup-7ch4.onrender.com',
            src: whatsup,
            alt: 'whatsup',
            h3: 'Whatsup',
            p: 'Built a real-time chat application with user authentication, live messaging, and online/offline status tracking. Implemented WebSocket communication using Socket.IO for instant message delivery and Redux Toolkit for efficient state management. Designed a responsive UI with Tailwind CSS and handled backend APIs with Node.js, Express, and MongoDB. Containerized the application using Docker for consistent deployment across environments.'
        }
    ]
    return (
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
                {
                    projectsArray.map(details => {
                        return (
                            <ProjectCard list={projectsArray} key={details.id} id={details.id} link={details.link} src={details.src} alt={details.alt} h3={details.h3} p={details.p} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects

// import styles from './ProjectsStyles.module.css';

// import ProjectCard from '../../common/ProjectCard';

// function Projects() {
//   return (
//     <section id='projects' className={styles.container}>
//         <h1 className='sectionTitle'>Projects</h1>
//         <div className={styles.projectsContainer}>
//             <ProjectCard />
//         </div>
//     </section>
//   )
// }

// export default Projects