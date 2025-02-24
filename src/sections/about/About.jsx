// import Button from '../../components/button/Button'
import { SectionHeader } from '../../components/section-header/SectionHeader'
import Skill from '../../components/skill/Skill'
import './about.css'
import '../../fontawesome/css/all.min.css'
import { FcBusinessman, FcCalendar, FcBriefcase, FcWebcam, FcDownload, FcManager } from 'react-icons/fc'
import { MdMail } from 'react-icons/md'
import { FaHandshake, FaScrewdriver } from 'react-icons/fa'
import cv from '../../cv/ChinazaSunday.pdf'




const About = ({ title, subtitle, note, profile, skills }) => {
    // const profileImage = <div className="profile-image "></div>
    const downloadIcon = <FcDownload className="button-icon" />
    const hireMeIcon = <FaHandshake className="button-icon" />

    const onDownloadClick = () => {
     
        // using Java Script method to get PDF file
        fetch("../../cv/Resume-Nathaniel-Eje.pdf").then((response) => {
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Resume-Nathaniel-Eje.pdf";
                alink.click();
            });
        });
    };

    return (
        <section className="about-section " id="about">

            {/* <SectionHeader title={title} subtitle={subtitle} note={note} profileImage={profileImage} /> */}
            <SectionHeader title={title} subtitle={subtitle} note={note} />
            <div className="about-row tilt-in-fwd-tr">
                {/* the profile  */}
                <div className="profile">
                    <h3 className="title-1">profile <FcManager className="fa-male" /></h3>
                    <p className="text">{profile}</p>
                    <div className="profile-content">
                        <div className="profile-item">
                            <h4><FcBusinessman /> full name</h4>
                            <p>Chinaza Sunday Goodness</p>
                        </div>
                        {/* <div className="profile-item">
                            <h4> <FcCalendar /> date of birth</h4>
                            <p>march 24, 1993</p>
                        </div> */}
                        <div className="profile-item">
                            <h4> <FcBriefcase /> job description</h4>
                            <p>Fashion Designer</p>
                        </div>
                        <div className="profile-item web">
                            <h4><MdMail /> email</h4>
                            <p>chinazasundaygoodness@22222gmail.com</p>
                        </div>
                        <div className="profile-item web">
                            <h4><FcWebcam /> website</h4>
                            <p><a href='http://my-fashion-portfolio.vercel.app' rel="noreferrer">http://my-fashion-portfolio.vercel.app</a></p>

                        </div>


                    </div>
                </div>

                <div className="seperator"></div>

                {/* the skills */}
                <div className="skills tilt-in-fwd-tr">
                    <h3 className="title-1">skills <FaScrewdriver className="Fa-screwdriver" /></h3>
                    <p className="text">{skills}</p>
                    <div className="skills-content">
                        <Skill />
                        {/* <Skill skillName={'HTML'} skillPercentage={79} /> 
                        <Skill skillName={'CSS'} skillPercentage={87} />
                        <Skill skillName={'SCSS'} skillPercentage={64} />
                        <Skill skillName={'JavaScript'} skillPercentage={72} />
                        <Skill skillName={'Bootstrap'} skillPercentage={70} />
                        <Skill skillName={'ReatJs'} skillPercentage={75} />
                        <Skill skillName={'Reat Native'} skillPercentage={51} /> */}

                    </div>
                </div>

            </div>

            <div className="about-buttons">
                <a href={cv} className="button float" download="Resume-Chinaza-Sunday">Curiculum Vitae {downloadIcon}</a>
                             
                <a href="#contact" className="button float">Hire me {hireMeIcon}</a>
            </div>
        </section>
    )
}

About.defaultProps = {
    title: 'about',
    subtitle: 'Let me introduce myself',
    note: 'I am a fashion designer passionate about creativity, style, and innovation. With extensive experience in designing elegant, trendsetting collections, I am skilled in transforming ideas into stunning, wearable art',
    profile: 'An accomplished fashion design graduate with a strong background in textile design, garment construction, fashion illustration, and trend analysis. My academic journey is marked by high honors and recognition for excellence. I possess excellent communication and time management skills, enabling me to manage multiple projects efficiently and effectively.',
    skills: 'Fashion Designer, Textile Designer, Pattern Making, CAD Designer, Fashion Illustrator,Digital Fashion Design, Mood Board Designer, Sewing and Garment Construction, Trend Forecasting, draping, Fashion Styling and Photo Shoots and Runway Show Planning and Execution are all skills I have.',

}

export default About
