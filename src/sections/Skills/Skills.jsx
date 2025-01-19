// import React from 'react';
import styles from './SkillsStyles.module.css'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {

    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark
    const frontEnd = ["HTML", "CSS", "JavaScript", "React", "Redux-Toolkit"];
    // const backEnd = ["Basic Core Java", "Oracle 10G SQL"]
    const perfTest = ["GC Analysis", "IBM Thread Analyzer", "Apache Jmeter"]
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
            {/* <h3>Back-End Skills</h3>
            <div className={styles.skillList}>
                {
                    backEnd.map((skill, i) => {
                        return (
                            <SkillList key={i} src={checkMarkIcon} skill={skill} />
                        )
                    })
                }
                
            </div>
            <hr /> */}
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

export default Skills