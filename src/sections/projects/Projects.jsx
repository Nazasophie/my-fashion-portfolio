import Button from '../../components/button/Button'
import { SectionHeader } from '../../components/section-header/SectionHeader'
import './projects.css'

import studentTaxHelpImage from '../../assets/images/studenttaxhelp.png';
import rulebornImage from '../../assets/images/ruleborn.png';
import isoxImage from '../../assets/images/isox.png';
import emcaImage from '../../assets/images/emca.png';
import magnumopusImage from '../../assets/images/magnumopus.png';
import baynetfuseImage from '../../assets/images/baynetfuse.png';
import onomeImage from '../../assets/images/onome.png';
import edublokImage from '../../assets/images/Edublok.png';
import dbmnImage from '../../assets/images/dbmn.jpg';
import praiseImage from '../../assets/images/praise.png';
import zionbarsImage from '../../assets/images/zionbars.jpg';
import brandleepImage from '../../assets/images/brandleep.jpg';
import zecnetImage from '../../assets/images/zecnet.jpg';
import helpinghandsImage from '../../assets/images/helpinghands.jpg';
import koinwaImage from '../../assets/images/koinwa.jpg';

import animatedIconsImage from '../../assets/images/animated-icons.png';
import easyRecipeImage from '../../assets/images/easyrecipe.png';
import ejeImage from '../../assets/images/eje.png';
import kryptolandImage from '../../assets/images/kryptoland.png';
import translatorImage from '../../assets/images/translator.png';
import moodboardImage from '../../assets/images/moodboard.jpg';

const Projects = ({ title, subtitle, note }) => {
    return (
        <div id="portfolio" className="projects-section">

            {/* WordPress projects  */}
            <SectionHeader title={title} subtitle={subtitle} paddingValue={'10px'} note={`Okay, let's have a look at some of the websites I've recently built with WordPress.`} />
            <div className="project-container">
                <div className="project">
                    <img src={helpinghandsImage} className="project-image" alt="helpinghands consultancy banner" />
                    <a href='https://drive.google.com/file/d/1J_9jBd4AFZvHoTm8pbAwHbWLZSjPJdgt/view?usp=drivesdk' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={zecnetImage} className="project-image" alt="zecnet tech image" />
                    <a href='https://drive.google.com/file/d/1Jmk1hdYugms6cX-U2v23poinGKOkAvw-/view?usp=drivesdk' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={brandleepImage} className="project-image" alt="brandleep image" />
                    <a href='https://drive.google.com/file/d/1Jpw6ys7kqVo0r1GS-pS80JHZ63aXM3qE/view?usp=drivesdk' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={praiseImage} className="project-image" alt="praise child care" />
                    <a href='https://drive.google.com/file/d/1JtcWvbhzKvrP62slsOWFKuhi-Ps676Fm/view?usp=drivesdk' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={baynetfuseImage} className="project-image" alt="student tax help" />
                    <a href='https://drive.google.com/file/d/1JgSJLJcv82rsmkKlY4GmhqZr8JmgNtdP/view?usp=drivesdk' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={zionbarsImage} className="project-image" alt="zionbars banner" />
                    <a href='https://drive.google.com/file/d/1J_9jBd4AFZvHoTm8pbAwHbWLZSjPJdgt/view?usp=drivesdk' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={koinwaImage} className="project-image" alt="koinwa image" />
                    <a href='https://drive.google.com/file/d/1Jf47lo_e4Wm5FSPRjZhhZH-nThoj6TGo/view?usp=drivesdk' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={magnumopusImage} className="project-image" alt="student tax help" />
                    <a href='https://drive.google.com/file/d/1K7tlF0t_AxBu_tdyTYV6H0vwxw26AyUc/view?usp=drivesdk' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={onomeImage} className="project-image" alt="student tax help" />
                    <a href='https://drive.google.com/file/d/1KJTFD437MIQFKZoEoDT9Eijwh0uWsamf/view?usp=drivesdk' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={studentTaxHelpImage} className="project-image" alt="student tax help" />
                    <a href='https://drive.google.com/file/d/1LN0ykpvNO4adscW3LYSBFKCk0ptTBmHf/view?usp=drivesdk' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                <div className="project">
                    <img src={rulebornImage} className="project-image" alt="student tax help" />
                    <a href='https://drive.google.com/file/d/1L3MlWGdxSg1Yrn5PNzPkiseywKxR8d7i/view?usp=drivesdk' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
               
                <div className="project">
                    <img src={moodboardImage} className="project-image" alt="student tax help" />
                   
                </div>
               

            </div>

            {/* ReactJs and Javascript projects */}
            <h3 className='category-title'>Color blending idea</h3>
            <div className="project-container">

               
                

              
              
              

            </div>


        </div>
    )
}

Projects.defaultProps = {
    title: 'projects',
    subtitle: 'Check Out Some Of My Works',
    note: 'A series of projects ranging from web devlopment and design to graphics design',
}

export default Projects
