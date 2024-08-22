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
                            <Link href={`https://www.mkpascal.net/Pascal-Muang-Khot-Resume.pdf`}>
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
                                    <li>Managed a high-volume custom CMS for Metacritic & TV Guide sites, serving 40 millions of monthly visitors.</li>
                                    <li>Engineered a robust transcoding framework using JWP, alongside content and commerce features.</li>
                                    <li>Played a key role in refining front-end usability through API optimization, which contributed to improved SEO scores by enhancing page speed rankings.</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Red Ventures - Software Engineer - Full-Stack Developer</h4>
                                <p>2020 - 2022</p>
                                <ul>
                                    <li>Maintained a high-traffic CMS in-house platform, supporting 75 millions of monthly users for CNET & ZDNET.</li>
                                    <li>Undertook responsibilities involving front door, articles, and ads features for both brands.</li>
                                    <li>Revamped the CMS UI/UX offering innovative functionalities and robust commerce integration.</li>
                                    <li>Architected seamless API solutions to bridge the gap between front-end and back-end systems.</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Paramount - Software Engineer - Back-End Developer</h4>
                                <p>2016 - 2020</p>
                                <ul>
                                    <li>Led development of the full back-end platform with Rails as a site engineer for Chowhound, reaching 3 million monthly users.</li>
                                    <li>Orchestrated a large-scale migration to GCP, updating legacy stack to Docker, ensuring seamless scalability and reliability. Elevated server performance by meticulously fine-tuning Apache and Redis for maximum efficiency.</li>
                                    <li>Engineered a robust user account system, managed Wordpress and Apple partnerships and streamlined mail and queue management.</li>
                                </ul>
                            </div>
                            <div>
                                <h4>Trulify - Software Engineer - Full-Stack Developer</h4>
                                <p>2013 - 2015</p>
                                <ul>
                                    <li>Developed and built internal apps using Rails, delivering scalable and robust solutions.</li>
                                    <li>Engineered API connections with payroll service bureaus, enabling automated data exchange.</li>
                                    <li>Implemented a payment infrastructure, efficient subscription management, SMS system and billing.</li>
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
                                <p>With a decade of experience in web development serving 100+ millions of users for Fortune 500 and startup companies, I specialize in backend operations and possess frontend development and devops expertise. 
<br/><br/>Skilled in <b>Ruby on Rails, Javascript, Node.js, Next.js, Hotwire Turbo, React, Electron, CSS/SASS/SCSS, Bootstrap, HTML, PHP, Docker, Cloudflare, AWS, GitHub Actions, PostgreSQL, MySQL, Redis, RSpec</b>.
    </p>
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


                        <div>
                            <h3>LANGUAGES</h3>
                            <div>
                                <p>English - Bilingual Proficiency</p>
                                <p>French - Native Language</p>
                            </div>
                        </div>
    
                        </div>
                    </div>


                </div>
            </section>
        </LayoutLarge>
    );
}
