import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/resume.module.css';

export default function Resume() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${styles.resumeContainer}`}>
                {/* Resume Content */}
                <div className={utilStyles.list}>
                    {/* Download and Contact */}
                    <div>
                        <p className={styles.topLink}>
                            <Link href={`https://www.mkpascal.net/resume.pdf`}>
                                <i className="fas fa-file-download"></i> Download PDF Resume
                            </Link>
                        </p>
                        <p className={styles.topLink}>
                            <Link href={`mailto:pmk@khot.us`}>
                                <i className="fas fa-envelope-open-text"></i> pmk@khot.us
                            </Link>
                        </p>
                    </div>

                    {/* Two-column layout for Experience and Skills */}
                    <div className={styles.twoColumnContainer}>
                        {/* Experience */}
                        <div className={styles.leftColumn}>
                            <h3>EXPERIENCE</h3>
                            <div>
                                <h4>Fandom (Metacritic / TV Guide) - Software Engineer - Back-End Developer</h4>
                                <p>2022 - 2023</p>
                                <ul>
                                    <li>Managed the high-volume CMS powering Metacritic and TV Guide sites.</li>
                                    <li>Implemented a transcoding system and CMS and commerce features.</li>
                                    <li>Contributed to API development for improved front-end usability.</li>
                                </ul>
                                <p><strong>Methods:</strong> Code reviews (PR), Pair programming, Agile & Waterfall methods.</p>
                                <p><strong>Technologies:</strong> PHP, Symfony, GCP, MongoDB, MySQL, Solr, Memcached, VueJS, jQuery, Docker.</p>
                            </div>
                            <div>
                                <h4>Red Ventures (CNET / ZDNET) - Software Engineer - Full-Stack Developer</h4>
                                <p>2020 - 2022</p>
                                <ul>
                                    <li>Maintained and optimized a high-traffic content management platform serving millions of users for CNET and ZDNET.</li>
                                    <li>Oversaw front door, articles, and ads features for both brands.</li>
                                    <li>Enhanced CMS with new features and commerce functionalities.</li>
                                </ul>
                                <p><strong>Methods:</strong> Code reviews (PR), Agile & Waterfall methods.</p>
                                <p><strong>Technologies:</strong> Ruby on Rails, PHP, Symfony, MongoDB, MySQL, Solr, Memcached, VueJS, jQuery, Docker.</p>
                            </div>
                            <div>
                                <h4>Paramount ViacomCBS (Chowhound) - Software Engineer - Back-End Developer</h4>
                                <p>2016 - 2020</p>
                                <ul>
                                    <li>Led development of internal CMS/API with Rails as a site engineer.</li>
                                    <li>Successfully migrated the entire stack from the datacenter to GCP.</li>
                                    <li>Implemented Place System with 3rd party integration. Dockerized our legacy stack and optimized it for scalability.</li>
                                </ul>
                                <p><strong>Methods:</strong> Pair programming, Code reviews (PR), Full-on scrum methodology.</p>
                                <p><strong>Technologies:</strong> Ruby on Rails, Resque, MySQL, Redis, Memcached, Bootstrap, Docker, Heroku, React, AWS, jQuery.</p>
                            </div>
                            <div>
                                <h4>Trulify - Software Engineer - Full-Stack Developer</h4>
                                <p>2013 - 2015</p>
                                <ul>
                                    <li>Collaborated on Trulify and FairLoan app development using Rails.</li>
                                    <li>Integrated custom APIs with payroll service bureaus and implemented Chargify for subscription billing.</li>
                                    <li>Designed secure server/client solution for uniform data exchange with payroll bureaus, handling sensitive PII.</li>
                                </ul>
                                <p><strong>Methods:</strong> Code reviews (PR), Strict git flow, Agile (IPM/Stand-up).</p>
                                <p><strong>Technologies:</strong> Ruby on Rails, Sidekiq, Bootstrap, Heroku, AWS, jQuery.</p>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className={styles.rightColumn}>
                            <h3>SKILLS</h3>
                            <div>
                                <h4>Languages</h4>
                                <p>Ruby, Javascript, PHP, HTML/CSS, SCSS, Dart</p>
                            </div>
                            <div>
                                <h4>Frameworks / Environments</h4>
                                <p>Rails, Node.js, Express, Sinatra, Bootstrap, Symfony, jQuery, VueJS, React, Electron, Flutter</p>
                            </div>
                            <div>
                                <h4>Libraries / Services</h4>
                                <p>Sidekiq, ActiveAdmin, Devise, Twilio, Sendgrid, Postmark</p>
                            </div>
                            <div>
                                <h4>AI / ML</h4>
                                <p>OpenAI, LocalAI, Stable Diffusion</p>
                            </div>
                            <div>
                                <h4>QA & CI/CD</h4>
                                <p>RSpec, Capybara, Selenium, GitHub Actions, Jenkins</p>
                            </div>
                            <div>
                                <h4>DevOps</h4>
                                <p>Docker, GCP, Cloudflare, Fastly, Heroku, AWS, OVH, DO, New Relic</p>
                            </div>
                            <div>
                                <h4>System Administration</h4>
                                <p>Debian, Ubuntu, OS X Server, Windows Server, Bash, Powershell</p>
                            </div>
                            <div>
                                <h4>Databases</h4>
                                <p>Postgres, Redis, MongoDB, MySQL, SQLite, Solr</p>
                            </div>
                            <div>
                                <h4>Media Tech / Miscellaneous</h4>
                                <p>Icecast, liquidsoap, ffmpeg, OBS, Blackmagic, Photoshop, Premiere Pro, Logic Pro</p>
                            </div>
                            <div>
                                <h4>Project / Tech Management</h4>
                                <p>Gitflow, Agile, Scrum, Jira, Pivotal Tracker</p>
                            </div>
                        </div>
                    </div>

                    {/* Education and Languages */}
                    <div>
                        <h3>EDUCATION</h3>
                        <div>
                            <h4>SUPINFO University (Paris, France) - Bachelor of Science (B.Sc.) with honors in Computer Science</h4>
                            <p>2008-2013</p>
                            <p>Throughout my education in computer science, I pursued many internships.</p>
                        </div>
                        <div>
                            <h4>Previous Internships</h4>
                            <div>
                                <p>iTLiGENT (Paris, France) - Software Engineer - Full-Stack Developer</p>
                                <p>2011-2012</p>
                            </div>
                            <div>
                                <p>Milky Interactive (Paris, France) - Software Engineer - Front-End Developer</p>
                                <p>Summer 2010</p>
                            </div>
                            <div>
                                <p>Vigilio (Paris, France) - Software Engineer - Front-End Developer</p>
                                <p>Summer 2009</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3>LANGUAGES</h3>
                        <div>
                            <p>English - Bilingual Proficiency</p>
                            <p>French - Native Language</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
