// eslint-disable-next-line react/prop-types
function ProjectCard({link, src, alt, h3, p}) {
  return (
            <a href={link} target="_blank">
                <img className="hover" src={src} alt={alt} />
                <h3>{h3}</h3>
                <p>{p}</p>
            </a>
  );
}

export default ProjectCard;


// import mechatron from '../assets/mechatron.png'
// import faceNet from '../assets/faceNet.png'

// const linkArray = [
//     {
//         id: 1,
//         link: 'https://harishtsj.github.io/mechatron-ui/',
//         src: mechatron,
//         alt: 'mechatron_logo',
//         h3: 'Mechatron UI',
//         p: 'Simple Searchable UI'
//     },
//     {
//         id: 2,
//         link: 'https://harishtsj.github.io/faceNet/',
//         src: faceNet,
//         alt: 'facenet_logo',
//         h3: 'Face Net',
//         p: 'Detect Face'
//     }
// ]

// function ProjectCard() {
//   return (
//     <div>
//         {
//             linkArray.map(details => {
//                 return (
//                     <div key={details.id}>
//                         <a href={details.link} target="_blank">
//                             <img className="hover" src={details.src} alt={details.alt} />
//                             <h3>{details.h3}</h3>
//                             <p>{details.p}</p>
//                         </a>
//                     </div>
//                 )
//             })
//         }
//     </div>
//   );
// }

// export default ProjectCard;
