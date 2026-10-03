import React,{useState}from'react';
import{motion,useReducedMotion}from'framer-motion';
import{ArrowUpRight,Check,ChevronRight,Mail,Code2,Cloud,TestTube2,Wrench,Database,Network,Menu,X,ExternalLink}from'lucide-react';

const projects=[
{eyebrow:'IT SUPPORT PRODUCT',title:'SupportQ',text:'An interactive IT troubleshooting application that guides users from symptom intake through triage, diagnosis, corrective action, verification and escalation while preserving a clear incident history.',chips:['React','Vite','Diagnostic Logic','GitHub Actions'],metric:'Guided troubleshooting from issue to resolution',liveUrl:'https://joshuanoc.github.io/SupportQ/',codeUrl:'https://github.com/Joshuanoc/SupportQ'},
{eyebrow:'AUTOMATION FRAMEWORK',title:'E-Commerce QA Automation',text:'A reusable UI automation framework covering end-to-end shopping journeys with Page Object Model, Cucumber BDD, Maven and Jenkins.',chips:['Selenium','Java','Cucumber','Jenkins'],metric:'Reusable test architecture'},
{eyebrow:'BUSINESS SYSTEM QA',title:'Insurance Policy Management',text:'Functional and regression testing across registration, quotes, policy issuance, premium calculations, claims and settlement workflows.',chips:['Functional QA','Jira','Regression'],metric:'Business-critical workflows'},
{eyebrow:'FINTECH QA',title:'Crypto Trading Platform',text:'Exploratory and functional testing across authentication, wallets, trading, transaction history and validation scenarios.',chips:['UI Testing','Negative Testing','Defect Tracking'],metric:'Risk-focused test coverage'}
];

const skillGroups=[
{icon:TestTube2,title:'Quality Engineering',items:['Selenium WebDriver','TestNG','JUnit','Cucumber','Functional Testing','Regression Testing']},
{icon:Code2,title:'Programming',items:['Java','Python','JavaScript','HTML','CSS','Shell Script']},
{icon:Database,title:'API & Data',items:['Postman','Swagger','REST APIs','SQL','Validation','Negative Testing']},
{icon:Cloud,title:'Cloud & DevOps',items:['AWS','Azure','Git','Jenkins','Maven','CI/CD']},
{icon:Wrench,title:'IT Support',items:['ServiceNow','Zendesk','Jira','Windows','Linux','macOS']},
{icon:Network,title:'Networking',items:['TCP/IP','DNS','DHCP','VPN','Subnetting','Troubleshooting']}
];

function App(){
const[open,setOpen]=useState(0);const[menuOpen,setMenuOpen]=useState(false);const reduceMotion=useReducedMotion();const year=new Date().getFullYear();const closeMenu=()=>setMenuOpen(false);
return <div className="site">
<header className="nav"><a href="#home" className="logo" onClick={closeMenu}>JOSHUA DANIEL</a><nav aria-label="Primary navigation"><a href="#about">About</a><a href="#projects">Work</a><a href="#skills">Skills</a><a href="#contact">Contact</a></nav><div className="navActions"><a className="navCta" href="mailto:Joshuadaniel944@gmail.com">Let's talk <ArrowUpRight size={15}/></a><button className="menuButton" type="button" aria-label={menuOpen?'Close navigation menu':'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={()=>setMenuOpen(v=>!v)}>{menuOpen?<X size={20}/>:<Menu size={20}/>}</button></div>{menuOpen&&<nav id="mobile-menu" className="mobileMenu" aria-label="Mobile navigation"><a href="#about" onClick={closeMenu}>About</a><a href="#projects" onClick={closeMenu}>Work</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#contact" onClick={closeMenu}>Contact</a></nav>}</header>

<main>
<section id="home" className="hero">
<div className="heroGlow one"/><div className="heroGlow two"/>
<motion.div className="heroCopy" initial={reduceMotion?false:{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:reduceMotion?0:.7}}>
<p className="tag">QA AUTOMATION · IT SUPPORT · ANALYSIS</p>
<h1>Building quality<br/>into every <span>experience.</span></h1>
<p className="heroText">I'm Joshua Daniel, a technology professional focused on software quality, automation, support and reliable user experiences.</p>
<div className="heroActions"><a className="btn dark" href="#projects">View my work <ChevronRight size={16}/></a><a className="btn light" href="mailto:Joshuadaniel944@gmail.com">Contact me</a></div>
</motion.div>
<motion.div className="heroVisual" initial={reduceMotion?false:{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{delay:reduceMotion?0:.18,duration:reduceMotion?0:.7}}>
<div className="visualCard mainCard"><div className="miniLabel">CURRENT FOCUS</div><h3>Quality Engineering</h3><p>Automation · APIs · CI/CD · Support</p><div className="statRow"><div><strong>QA</strong><span>Automation</span></div><div><strong>API</strong><span>Testing</span></div><div><strong>IT</strong><span>Support</span></div></div></div>
<div className="floatCard topCard"><Check size={17}/><span>Reliable systems</span></div>
<div className="floatCard bottomCard"><span className="dot"/> Open to opportunities</div>
</motion.div>
</section>

<section className="strip"><span>Selenium</span><span>Java</span><span>Python</span><span>Postman</span><span>Jenkins</span><span>AWS</span><span>Azure</span><span>Jira</span></section>

<section id="about" className="section about">
<div><p className="sectionTag">ABOUT ME</p><h2>I combine technical testing with a practical understanding of how systems should work.</h2></div>
<div className="aboutText"><p>My background spans quality assurance, operational support, business analysis and IT troubleshooting. I enjoy finding problems early, understanding why they happen and helping teams deliver dependable software.</p><p>I work comfortably across testing tools, cloud platforms, support environments and cross-functional teams.</p><div className="facts"><div><strong>5+ yrs</strong><span>Technology & operations</span></div><div><strong>4</strong><span>Hands-on technology projects</span></div><div><strong>2</strong><span>Cloud platforms</span></div></div></div>
</section>

<section id="projects" className="section work">
<div className="sectionHead"><div><p className="sectionTag">SELECTED WORK</p><h2>Projects built around real testing and support problems.</h2></div><p>Focused case studies that show how I think about coverage, troubleshooting, risk and quality.</p></div>
<div className="projectGrid">
<div className="projectMenu">{projects.map((p,i)=><button key={p.title} className={open===i?'projectTab active':'projectTab'} onClick={()=>setOpen(i)} aria-pressed={open===i}><span>0{i+1}</span><div><small>{p.eyebrow}</small><strong>{p.title}</strong></div><ChevronRight size={18}/></button>)}</div>
<motion.article key={open} className="projectPanel" initial={reduceMotion?false:{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:reduceMotion?0:.25}}>
<div className="projectNumber">0{open+1}</div><p className="sectionTag">{projects[open].eyebrow}</p><h3>{projects[open].title}</h3><p>{projects[open].text}</p><div className="chips">{projects[open].chips.map(x=><span key={x}>{x}</span>)}</div><div className="projectMetric"><Check size={16}/>{projects[open].metric}</div>{projects[open].liveUrl&&<div className="heroActions"><a className="btn dark" href={projects[open].liveUrl} target="_blank" rel="noreferrer">Live project <ExternalLink size={15}/></a><a className="btn light" href={projects[open].codeUrl} target="_blank" rel="noreferrer">View code <Code2 size={15}/></a></div>}
</motion.article>
</div>
</section>

<section id="skills" className="section skills">
<div className="sectionHead"><div><p className="sectionTag">CAPABILITIES</p><h2>Tools I use to test, troubleshoot and deliver.</h2></div></div>
<div className="skillGrid">{skillGroups.map(({icon:Icon,title,items})=><article className="skillCard" key={title}><div className="iconWrap"><Icon size={19}/></div><h3>{title}</h3><ul>{items.map(i=><li key={i}>{i}</li>)}</ul></article>)}</div>
</section>

<section className="section journey">
<div className="sectionHead"><div><p className="sectionTag">EXPERIENCE</p><h2>A foundation across technology, business and operations.</h2></div></div>
<div className="timeline">
<div className="lineItem"><span>2017</span><div><h3>B.Sc. Computer Science</h3><p>Built a technical foundation in programming, systems and problem solving.</p></div></div>
<div className="lineItem"><span>2023</span><div><h3>Postgraduate Business Studies · Cape Breton University</h3><p>Expanded business, analytics and operational thinking.</p></div></div>
<div className="lineItem"><span>IT</span><div><h3>Junior IT Analyst · NPower Canada</h3><p>Windows, Linux, networking, directory services, user support and troubleshooting.</p></div></div>
<div className="lineItem"><span>NOW</span><div><h3>QA Automation & Technology</h3><p>Automation, API testing, CI/CD, cloud and quality engineering.</p></div></div>
</div>
</section>

<section id="contact" className="contact">
<div><p className="sectionTag">LET'S CONNECT</p><h2>Looking for someone who cares about quality from the start?</h2><p>I'm open to QA Automation, Quality Engineering, IT Support and Analyst opportunities.</p></div>
<div className="contactActions"><a className="btn white" href="mailto:Joshuadaniel944@gmail.com"><Mail size={16}/> Email me</a><a className="btn outline" href="https://github.com/Joshuanoc" target="_blank" rel="noreferrer"><Code2 size={16}/> GitHub</a></div>
</section>
</main>

<footer><strong>Joshua Daniel</strong><span>QA Automation · IT Support · Technology</span><span>© {year}</span></footer>
</div>
}
export default App;