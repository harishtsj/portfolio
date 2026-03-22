// import React from 'react';
import styles from './SkillsStyles.module.css'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';
import { useThemeContext } from '../../common/ThemeContext';

function Skills() {

    const { theme } = useThemeContext();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark
    const frontEnd = ["HTML", "CSS", "JavaScript", "React", "Redux-Toolkit"];
    const backEnd = ["Basic Core Java", "Node.js", "Express.js", "Mongo DB"]
    const perfTest = ["Apache Jmeter", "IBM Thread Analyzer", "GC Analysis"]
    const otherTools = ["GC Viewer", "GitHub", "GitLab"]

  return (
    <section id='skills' className={styles.container}>
            <h1 className='sectionTitle'>Skills</h1>
            <h3>Front-end Skills</h3>
            <div className={styles.skillList}>
                {
                    frontEnd.map((skill, i) => {
                        return (
                            <SkillList key={i} src={checkMarkIcon} skill={skill} />
                        )
                    })
                }
            </div>
            <hr />
            <h3>Back-End Skills</h3>
            <div className={styles.skillList}>
                {
                    backEnd.map((skill, i) => {
                        return (
                            <SkillList key={i} src={checkMarkIcon} skill={skill} />
                        )
                    })
                }
                
            </div>
            <hr />
            <h3>Performance Testing Skills</h3>
            <div className={styles.skillList}>
                {
                    perfTest.map((skill, i) => {
                        return (
                            <SkillList key={i} src={checkMarkIcon} skill={skill} />
                        )
                    })
                }
            </div>
            <hr />
            <h3>Other Tools</h3>
            <div className={styles.skillList}>
                {
                    otherTools.map((skill, i) => {
                        return (
                            <SkillList key={i} src={checkMarkIcon} skill={skill} />
                        )
                    })
                }
                
            </div>
            <hr />
    </section>
  )
}

export default Skills;

// import React from 'react';
// import styles from './SkillsStyles.module.css'
// import checkMarkIconLight from '../../assets/checkmark-light.svg'
// import checkMarkIconDark from '../../assets/checkmark-dark.svg'
// import SkillList from '../../common/SkillList';
// import { useThemeContext } from '../../common/ThemeContext';

// function Skills() {

//     const { theme } = useThemeContext();
//     const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark

//     const primarySkills = ["HTML", "CSS", "JavaScript", "React", "Redux-Toolkit", "GitHub", "GitLab"];
//     const secondarySkills = ["GC Analysis", "IBM Thread Analyzer", "Apache Jmeter", "GC Viewer", "Core Java", "Oracle 10G SQL"];
//     // const otherSkills = ["Basic Core Java", "Oracle 10G SQL"];

//   return (
//     <section id='skills' className={styles.container}>
//             <h1 className='sectionTitle'>Skills</h1>
//             <h3>Primary Skills</h3>
//             <div className={styles.skillList}>
//                 {
//                     primarySkills.map((skill, i) => {
//                         return (
//                             <SkillList key={i} src={checkMarkIcon} skill={skill} />
//                         )
//                     })
//                 }
//             </div>
//             <hr />
//
//             <h3>Secondary Skills</h3>
//             <div className={styles.skillList}>
//                 {
//                     secondarySkills.map((skill, i) => {
//                         return (
//                             <SkillList key={i} src={checkMarkIcon} skill={skill} />
//                         )
//                     })
//                 }
//             </div>
//             <hr />
//             {/* <h3>Other Tools</h3>
//             <div className={styles.skillList}>
//                 {
//                     otherTools.map((skill, i) => {
//                         return (
//                             <SkillList key={i} src={checkMarkIcon} skill={skill} />
//                         )
//                     })
//                 }
                
//             </div>
//             <hr /> */}
//     </section>
//   )
// }

// export default Skills