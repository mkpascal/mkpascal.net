import Head from 'next/head';
import Link from 'next/link';
import LayoutLarge, { siteTitle } from '../components/layout-large';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/resume.module.css';

export default function Resume() {
    return (
        <LayoutLarge>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${styles.resumeContainer}`}>
                <div className={utilStyles.list}>
                    <div>
                        <p className={styles.topLink}>
                            <Link href={`https://www.mkpascal.net/se_resume.pdf`}>
                                <i className="fas fa-file-download"></i> Download PDF Resume
                            </Link>
                        </p>
                        <p className={styles.topLink}>
                            <Link href={`mailto:pmk@khot.us`}>
                                <i className="fas fa-envelope-open-text"></i> Contact me at pmk@khot.us
                            </Link>
                        </p>
                    </div>

                    <div className={styles.twoColumnContainer}>
                        <div className={styles.leftColumn}>
                            <h3>EXPERIENCE</h3>
                            <div>
                                <h4>Fandom - Software Engineer - Back-End Developer</h4>
                                <p>2022 - 2023</p>
                                <ul>
                                    <li>Managed a high-volume custom CMS for Metacritic & TV Guide sites, serving millions of users.</li>
                                    <li>Engineered a robust transcoding framework, alongside content and commerce features.</li>
                                    <li>Played a key role in refining front-end usability through API development contributions.</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Red Ventures - Software Engineer - Full-Stack Developer</h4>
                                <p>2020 - 2022</p>
                                <ul>
                                    <li>Maintained a high-traffic CMS in-house platform, supporting millions of users for CNET & ZDNET.</li>
                                    <li>Undertook responsibilities involving front door, articles, and ads features for both brands.</li>
                                    <li>Revamped the CMS UI/UX offering innovative functionalities and robust commerce integration.</li>
                                    <li>Demonstrated exceptional proficiency in debugging, data operations, and system integration.</li>
                                    <li>Architected seamless API solutions to bridge the gap between front-end and back-end systems.</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Paramount - Software Engineer - Back-End Developer</h4>
                                <p>2016 - 2020</p>
                                <ul>
                                    <li>Led development of the full back-end platform with Rails as a site engineer for Chowhound.</li>
                                    <li>Orchestrated a large-scale migration to GCP, ensuring seamless scalability and reliability.</li>
                                    <li>Engineered a robust user account system and streamlined mail and queue management.</li>
                                    <li>Expanding reach and accessibility through Wordpress and Apple News partnerships.</li>
                                    <li>Pioneered the implementation of a place system through strategic third-party collaborations.</li>
                                    <li>Revolutionized our legacy stack by dockerizing it and fine-tuning for maximum scalability.</li>
                                    <li>Elevated server performance by meticulously fine-tuning Apache and Redis for maximum efficiency.</li>
                                    <li>Implemented a sophisticated branching strategy, fostering a streamlined development process.</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Trulify - Software Engineer - Full-Stack Developer</h4>
                                <p>2013 - 2015</p>
                                <ul>
                                    <li>Developed and built Trulify and FairLoan apps using Rails, delivering scalable and robust solutions.</li>
                                    <li>Engineered API connections with payroll service bureaus, enabling automated data exchange.</li>
                                    <li>Implemented a payment infrastructure, efficient subscription management, and billing.</li>
                                    <li>Enhanced user engagement by integrating Twilio's SMS system, ensuring seamless communication.</li>
                                    <li>Migrated the frontend framework to Bootstrap, improving the user experience and responsiveness.</li>
                                    <li>Designed and implemented secure data exchange protocols, safeguarding sensitive PII.</li>
                                </ul>
                            </div>
                            <div className={styles.langResume}>
                            <h3>LANGUAGES</h3>
                                <div>
                                    <p>English - Bilingual Proficiency</p>
                                    <p>French - Native Language</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.rightColumn}>
                            <h3>SKILLS</h3>
                            <div>
                                <h4>Languages</h4>
                                <p>Ruby | Javascript | PHP | HTML | CSS | Sass | Dart | Shell scripting</p>
                            </div>
                            <div>
                                <h4>Frameworks</h4>
                                <p>Rails | Sinatra | Node.js | Bootstrap | Next.js | React | Electron | Flutter</p>
                            </div>
                            <div>
                                <h4>Libraries</h4>
                                <p>Sidekiq | Devise | Sendgrid | Postmark | ActiveAdmin | llama.cpp | Dart</p>
                            </div>
                            <div>
                                <h4>DevOps</h4>
                                <p>Docker | GCP | Cloudflare | Fastly | Heroku | AWS | OVH | Digitalocean | New Relic</p>
                            </div>
                            <div>
                                <h4>Integrations</h4>
                                <p>GitHub Actions | Jenkins | RSpec | Capybara | Rubocop | Selenium</p>
                            </div>
                            <div>
                                <h4>Databases</h4>
                                <p>PostgreSQL | Redis | MongoDB | MySQL | SQLite | Solr | Memcached</p>
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
                                <h4>Methodologies</h4>
                                <p>Pair programming | Code reviews | Facilitating processes | Directing engineers</p>
                            </div>
                            <div>
                                <h4>Miscellaneous</h4>
                                <p>Agile | Scrum | Gitflow | Extreme programming | Test-driven development | Gitflow</p>
                            </div> 
                            <div>
                                <h3>EDUCATION</h3>
                                <div>
                                    <h4>SUPINFO University (Paris, France) - Bachelor of Science with Honours (B.Sc. Hons.) in Computer Science</h4>
                                    <p>2008-2013</p>
                                </div>
                                <div>
                                    <h4>Internships</h4>
                                    <div>
                                        <p>iTLiGENT (Paris, France) - Software Engineer - Full-Stack Developer
                                        <br/>2011-2012</p>
                                    </div>
                                    <div>
                                        <p>Milky Interactive (Paris, France) - Software Engineer - Front-End Developer
                                        <br/>Summer 2010</p>
                                    </div>
                                    <div>
                                        <p>Vigilio (Paris, France) - Software Engineer - Front-End Developer
                                        <br/>Summer 2009</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.langResumeBottom}>
                        <h3>LANGUAGES</h3>
                        <div>
                            <p>English - Bilingual Proficiency</p>
                            <p>French - Native Language</p>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutLarge>
    );
}