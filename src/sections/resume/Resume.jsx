import { SectionHeader } from '../../components/section-header/SectionHeader'
import './resume.css'
import { FaBrain, FaGraduationCap } from 'react-icons/fa'

const Resume = ({ title, subtitle, note }) => {
    return (
        <section id="resume" className="resume-section bg-gradient-close">
            <SectionHeader title={title} subtitle={subtitle} note={note} />

            <h3 className="container-title">work experience <FaBrain className="icon" /></h3>
            <div className="resume-container">
                <div className="line-divider"></div>

                <div className="resume-item">
                    
                    <div className="item-content">
                        <h3 className="item-title">Lagos State Employment Trust Fund (LSETF)</h3>
                        <p className="item-date">September 2022 - October 2023 </p>
                        <ol className="item-text">
                        <li>Completed a 12-month intensive training program focused on essential fashion design and production skills.</li>
<li>Designed and created a collection of ready-to-wear pieces, incorporating modern design trends and advanced sewing techniques.</li>
<li>Collaborated on a team project to develop and present a fashion portfolio, showcasing pattern drafting, fabric selection, and garment construction skills.</li>
<li>Contributed to the design and execution of a group fashion showcase, focusing on styling and presentation to enhance audience engagement.</li>
                        </ol>
                        
                    </div>
                </div>
                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title">One Stop Celebration (OSC Fashion School)</h3>
                        <p className="item-date">01/December 2023 - 31/December 2024 </p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">Fashion Instructor</h3>
                        <ul className="item-text">
                        <li>Participated in outreach programs to empower individuals in insurgency-affected states, such as Maiduguri, by providing hands-on training in fashion design and production.</li>
<li>Delivered comprehensive workshops on pattern making, fabric cutting, garment construction, and other key areas of the fashion industry.</li>
<li>Mentored trainees in developing practical fashion skills, enabling them to create marketable designs and establish self-sustaining businesses.</li>
<li>Collaborated with local communities to identify needs and tailor training sessions, fostering creativity and entrepreneurship in the fashion sector.</li>
                        </ul>
                        
                    </div>
                </div>
                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title">Yaba College of Technology</h3>
                        <p className="item-date">Presently</p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">Industrial Fashion/Tech</h3>
                        <ul className="item-text">
                        <li>Collaborated on designing and creating a fashion portfolio during my studies at Yaba College of Technology, highlighting technical skills in garment construction and fashion illustration.</li>
<li>Focused on developing creative and innovative designs, enhancing visual appeal and functionality in clothing collections.</li>
<li>Implemented advanced pattern-making techniques to ensure precision and quality in garment production.</li>
<li>Worked on group projects to create ready-to-wear collections, emphasizing user-friendly designs and trend-focused aesthetics.</li>
<li>Utilized fashion-specific software and tools to develop responsive and visually appealing designs for both physical and digital presentations.</li>
                        </ul>
                        
                    </div>
                </div>

            </div>

            <h3 className="container-title">PROFESSIONAL TRAINING AND CERTIFICATIONS<FaGraduationCap className="icon" /></h3>
            <div className="resume-container">
                {/* the education section  */}
                <div className="line-divider"></div>

                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title">BSC in Fashion Technology | Yaba College of Technology</h3>
                        <p className="item-date">In view </p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">Front-end developer | Women in Tech</h3>
                 
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">Software Engineer (Certified) | ALX</h3>
                 
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">UIX Designer | Digi girls</h3>
                 
                    </div>
                </div>
               
                 
            </div>


        </section>
    )
}

Resume.defaultProps = {
    title: 'resume',
    subtitle: 'More of my Credentials.',
    note: 'A quick look at my education and work experience.',

}

export default Resume
