import styles from './ProjectsStyles.module.css';
import mechatron from '../../assets/mechatron.png'
import faceNet from '../../assets/faceNet.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
    const linkArray = [
        {
            id: 1,
            link: 'https://harishtsj.github.io/mechatron-ui/',
            src: mechatron,
            alt: 'mechatron_logo',
            h3: 'Mechatron UI',
            p: 'Simple Searchable UI'
        },
        {
            id: 2,
            link: 'https://harishtsj.github.io/faceNet/',
            src: faceNet,
            alt: 'facenet_logo',
            h3: 'Face Net',
            p: 'Detect Face'
        }
    ]
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            {
                linkArray.map(details => {
                    return (
                        <ProjectCard key={details.id} link={details.link} src={details.src} alt={details.alt} h3={details.h3} p={details.p} />
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