import React from "react";
import "./ResumePage.css";
import { motion } from "framer-motion";

const ResumePage = () => {
  return (
    <motion.div
      className="resume-container"
      initial={{ opacity: 0, transition: { duration: 3 } }}
      animate={{ opacity: 1, transition: { duration: 3 } }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <header className="resume-header">
        <h1>Ralph Constantin</h1>
      </header>

      <section className="resume-section">
        <h2>Profile</h2>
        <p>
          Emerging software developer with a strong academic background in
          software and web development. Proficient in several programming
          languages including C#, Java, and JavaScript. Excellent
          problem-solving skills and attention to detail while providing
          inventive solutions. Strong communication skills, taking initiative
          and working solo or as part of a team. Enthusiastic about continuous
          learning and contributing to team success.
        </p>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <ul>
          <li>
            <span>Backend Development:</span> Proficiency in Java and Spring
            Boot, C# and ASP.NET; experience with API development and
            integration.
          </li>
          <li>
            <span>Cloud Platforms:</span> Strong experience with Microsoft Azure
            and AWS technologies like EC2 and Elastic Beanstalk.
          </li>
          <li>
            <span>Android Mobile Development:</span> Java and Kotlin in Android
            Studio.
          </li>
          <li>
            <span>Database Management:</span> Proficient in relational
            databases, MongoDB, MySQL, Microsoft SQL Server, Firebase, Oracle,
            SQLite.
          </li>
          <li>
            <span>Web Development:</span> HTML, CSS, JavaScript, React.js, React
            Native, Vue, Angular.
          </li>

          <li>
            <span>Version Control:</span> Practical experience with Git.
          </li>
          <li>
            <span>Additional Technologies:</span> Spring JPA, Docker, GraphQL,
            Node.js, Swagger, Cypress.
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="job-info">
          <h3 className="job-title">
            Computer Programming & Analysis - Advanced Diploma
          </h3>
          <div className="job-time">Jan. 2021 - Dec. 2023</div>
        </div>
        <a
          href="https://www.fanshawec.ca/programs/cpa3-computer-programming-and-analysis/next"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fanshawe College, London, ON
        </a>
        <ul>
          <li>
            Completed final semester with a GPA of 4.2 (Cumulative GPA: 4.05)
          </li>
          <li>
            Dean's Honour Roll: Winter 2021, Summer 2022, Winter 2023, and Fall
            2023
          </li>
          <li>
            Well-rounded program focused on a variety of programming languages
            and development skills, including C/C++, C#, Java, Python, PHP, and
            COBOL
          </li>
          <li>
            Courses also included Networking Fundamentals, Machine Learning,
            Software Design Patterns, Database and Project Management
          </li>
          <li>
            Worked collaboratively in teams, learning team-work skills and
            repositories such as GitHub
          </li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        <div className="job">
          <div className="job-info">
            <h3 className="job-title">
              Technology and Employment Support Specialist
            </h3>
            <div className="job-time">May 2023 - Dec 2023</div>
          </div>
          <a
            href="https://www.atn.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            ATN, London, ON{" "}
          </a>
          <ul>
            <li>
              Co-op position extended into contract, providing helpdesk IT
              support to colleagues and training/employment support for clients
            </li>
            <li>
              Established Discord community server for ATN and helped improve
              community relations
            </li>
            <li>
              Improved existing workshops and streamlined teachings available to
              clients
            </li>
            <li>
              Instructed clients in group and one-on-one setting, in-house and
              in the community, on topics of technology skills and life skills
            </li>
            <li>
              Provided technology training to staff, in groups and one-on-one
              settings
            </li>
            <li>Supported clients in the community at their workplaces</li>
          </ul>
        </div>
        <div className="job">
          <div className="job-info">
            <h3 className="job-title">IT Support/Digital Marketing (Co-op)</h3>
            <div className="job-time">Sept. 2022 - Dec. 2022</div>
          </div>
          <a
            href="https://www.asign.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            Asign, Ottawa, ON (Remote){" "}
          </a>
          <ul>
            <li>
              Supported marketing team with database, SEO, and online media
              management
            </li>
            <li>
              Learned and worked on content management using HubSpot and
              WordPress
            </li>
            <li>
              Gained extensive experience in data entry, analytics, and
              reporting
            </li>
            <li>Obtained certificate training in Google Ads and SEO</li>
            <li>Created campaigns on Google Ads, as directed</li>
            <li>Provided helpdesk IT support and troubleshooting as needed</li>
          </ul>
        </div>
        <div className="job">
          <div className="job-info">
            <h3 className="job-title">IT Support/Tech Assistant (Co-op)</h3>
            <div className="job-time">Jan. 2022 - April 2022</div>
          </div>
          <a
            href="https://www.asign.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            Asign, Ottawa, ON (Remote){" "}
          </a>
          <ul>
            <li>
              Offered on-demand helpdesk support for team members, and solved IT
              issues
            </li>
            <li>
              Provided mini workshops to small groups, taught new software using
              original research and presentations
            </li>
            <li>
              Worked diligently, independently and collaboratively as a part of
              the team
            </li>
            <li>
              Developed and maintained courteous and effective working
              relationships
            </li>
            <li>
              Analyzed and supported the team by identifying bugs and design
              flaws on the current website
            </li>
            <li>
              Assisted the management team in transitioning to SharePoint,
              ensuring adherence to the provided structure and guidelines
            </li>
          </ul>
        </div>
        <div className="job">
          <div className="job-info">
            <h3 className="job-title">IT Intern/HR Support</h3>
            <div className="job-time">June 2019 - Dec. 2020</div>
          </div>
          <a
            href="https://www.proabled.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proabled Employment Experts, Jeita, Lebanon
          </a>
          <ul>
            <li>Developed and maintained ProAbled website</li>
            <li>
              Identified potential security issues and provided innovative
              options for data management
            </li>
            <li>Provided IT helpdesk support to the team and management</li>
            <li>Assisted over 100 people with disabilities find employment</li>
            <li>
              Facilitated communication between HR manager and customers as an
              Arabic/Sign Language translator
            </li>
          </ul>
        </div>
      </section>
      <footer className="resume-footer">
        References available upon request.
      </footer>
    </motion.div>
  );
};

export default ResumePage;
