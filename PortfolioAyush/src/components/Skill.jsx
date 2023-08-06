// import React, { useEffect, useState } from 'react'
// import { skills } from '../data'
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import { CountUp } from 'react-countup';
// const Skills = () => {
//     const [percentage, setPercentage] = useState(0);
//     useEffect(() => {
//       setTimeout(() => {
//         if (percentage < 100) {
//           setPercentage(percentage + 1);
//         }
//       }, 50);
//     }, [percentage]);

//     return (
//         <>
//             {
//                 skills.map(({ logo, title, percentage }, id) => {
//                     return (
//                         <div className="progress_box" key={id}>
//                             <div className="progress_circle">
//                                 <CircularProgressbar 
//                                 strokeWidth={3}
//                                 text={`${percentage}%`}
//                                 value={percentage}
//                                 />
//                             </div>
//                             <h3 className="skills_title">{title}</h3>
//                         </div>
//                     )
//                 })
//             }
//         </>
//     )
// }

// export default Skills


import React, { useEffect, useState } from 'react';
import { skills } from '../data';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import { CountUp } from 'react-countup';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Skills = () => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (percentage < 100) {
                setPercentage(percentage + 1);
            }
        }, 50);
    }, [percentage]);

    return (
        <>
            {skills.map(({ logo, title, percentage }, id) => {
                 const animationDuration = id * 1000+500;
                return (
                    <div className="progress_box" key={id}>
                        <div data-aos='zoom-out-up' data-aos-duration={animationDuration} className="progress_circle">
                            <div className="progress_inner">
                                <div className="progress_logo" >{logo}</div>
                                <CircularProgressbar
                                    strokeWidth={3}
                                    text={`${percentage}%`}
                                    value={percentage}
                                />
                            </div>
                        </div>
                        <h3 className="skills_title">{title}</h3>
                    </div>
                );
            })}
        </>
    );
};

export default Skills;
