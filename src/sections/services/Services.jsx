import { SectionHeader } from '../../components/section-header/SectionHeader'
import './services.css'
// import {FaCode} from 'react-icons/fa'

const Services = ({ title, subtitle, note }) => {
    return (
        <div id="services" className="services-section bg-gradient-open">
            <SectionHeader title={title} subtitle={subtitle} note={note} />
            <div className="services-container">
                <div className="service">
                    <i className="fas fa-palette service-icon" aria-hidden="true"></i>
                    <h3 className="service-name">Custom Designs</h3>
                    <p className="service-text">
                        Unique fashion pieces crafted from initial concept to final stitch, tailored to your vision.
                    </p>
                </div>
                <div className="service">
                    <i className="fas fa-chalkboard-teacher service-icon" aria-hidden="true"></i>
                    <h3 className="service-name">Fashion Workshops</h3>
                    <p className="service-text">
                        Enhance your fashion skills with our complimentary workshops, designed for all levels.
                    </p>
                </div>
                <div className="service">
                    <i className="fas fa-building service-icon" aria-hidden="true"></i>
                    <h3 className="service-name">Fashion Consulting</h3>
                    <p className="service-text">
                        Comprehensive fashion consulting to help define and elevate your brand’s style and identity.
                    </p>
                </div>
                <div className="service">
                    <i className="fas fa-hands-helping service-icon" aria-hidden="true"></i>
                    <h3 className="service-name">Client Support</h3>
                    <p className="service-text">
                        Continuous support and guidance for your fashion projects, ensuring optimal results.
                    </p>
                </div>
                <div className="service">
                    <i className="fas fa-file-archive service-icon" aria-hidden="true"></i>
                    <h3 className="service-name">Trend Analysis</h3>
                    <p className="service-text">
                        In-depth analysis of fashion trends, helping you stay ahead in the industry.
                    </p>
                </div>
                <div className="service">
                    <i className="fas fa-dollar-sign service-icon" aria-hidden="true"></i>
                    <h3 className="service-name">Market Strategy</h3>
                    <p className="service-text">
                        Strategic marketing to showcase your fashion creations, turning concepts into profitable ventures.
                    </p>
                </div>
            </div>
        </div>
    )
}

Services.defaultProps = {
    title: 'Services',
    subtitle: 'What Can I Create for You?',
    note: 'A comprehensive overview of the fashion services I offer.',
}

export default Services