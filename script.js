const skills={
automation:{title:"Automation Engineering",desc:"Designing maintainable, reusable automated test suites for web applications.",items:["Selenium WebDriver","TestNG","JUnit","Cucumber BDD","Page Object Model","Maven","Jenkins"]},
api:{title:"API Testing",desc:"Validating endpoints, authentication, payloads, responses and error handling.",items:["Postman","Swagger","REST APIs","Positive Testing","Negative Testing","Response Validation"]},
programming:{title:"Programming & Scripting",desc:"Using programming and scripting for automation, troubleshooting and web projects.",items:["Java","Python","JavaScript","HTML","CSS","Shell Script"]},
support:{title:"IT & Application Support",desc:"Troubleshooting applications, operating systems, user access and technical incidents.",items:["ServiceNow","Zendesk","Jira","Windows","Linux","macOS","Active Directory","OpenLDAP"]},
cloud:{title:"Cloud & DevOps",desc:"Working with cloud platforms, source control and continuous integration workflows.",items:["AWS","Azure","Git","SVN","Jenkins","Maven"]},
networking:{title:"Networking",desc:"Core networking knowledge used to diagnose connectivity and infrastructure issues.",items:["TCP/IP","DNS","DHCP","VPN","Subnetting"]}
};
const panel=document.querySelector("#skillPanel");
function showSkill(key){const s=skills[key];panel.innerHTML=`<div><h3>${s.title}</h3><p>${s.desc}</p></div><div class="skill-items">${s.items.map(x=>`<span>${x}</span>`).join("")}</div>`}
showSkill("automation");
document.querySelectorAll(".skill-tab").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".skill-tab").forEach(x=>x.classList.remove("active"));btn.classList.add("active");showSkill(btn.dataset.skill)}));

const projects={
ecommerce:{title:"E-Commerce Automation Framework",text:"Designed a scalable test automation framework integrating Selenium WebDriver, Cucumber BDD and TestNG/JUnit. Applied Page Object Model for maintainability, Maven for dependency management and Jenkins for automated execution.",flow:"Gherkin Feature → Step Definitions → Page Objects → Selenium WebDriver → Browser → Report"},
insurance:{title:"Insurance Policy Management System",text:"Analyzed requirements and created test coverage for customer registration, quotes, policy issuance, premium calculations, claims and settlement. Defects were documented and tracked through Jira and fixes were validated through regression testing.",flow:"Requirements → Test Scenarios → Test Execution → Jira Defects → Retest → Regression"},
crypto:{title:"Crypto Trading Platform Testing",text:"Created functional, UI, positive, negative and exploratory scenarios covering registration, authentication, wallet management, cryptocurrency trading, deposits, withdrawals and transaction history.",flow:"User Journey → Risk Analysis → Test Cases → Execution → Defects → Regression"}
};
function openProject(key){const p=projects[key], box=document.querySelector("#caseStudy");box.classList.remove("hidden");box.innerHTML=`<span class="section-index">CASE STUDY</span><h3>${p.title}</h3><p>${p.text}</p><div class="flow">${p.flow}</div>`;box.scrollIntoView({behavior:"smooth",block:"nearest"})}
document.querySelectorAll(".project-card").forEach(card=>{card.addEventListener("click",()=>openProject(card.dataset.project));card.addEventListener("keydown",e=>{if(e.key==="Enter")openProject(card.dataset.project)})});

const runBtn=document.querySelector("#runTests"), output=document.querySelector("#testOutput"), status=document.querySelector("#testStatus"), progress=document.querySelector("#progressBar");
let testTimer;
runBtn.addEventListener("click",()=>{
clearInterval(testTimer);runBtn.disabled=true;status.textContent="RUNNING";output.innerHTML="";progress.style.width="0";
const tests=["Initializing Selenium WebDriver...","✓ Login authentication test","✓ Product search validation","✓ Add-to-cart workflow","✓ Checkout validation","✓ API response validation","✓ Error handling test","","6 tests · 6 passed · 0 failed","","BUILD SUCCESS"];
let i=0;
const add=()=>{if(i>=tests.length){clearInterval(testTimer);status.textContent="PASSED";runBtn.disabled=false;progress.style.width="100%";return}const d=document.createElement("div");d.textContent=tests[i];if(tests[i].includes("✓")||tests[i].includes("SUCCESS"))d.className="pass";output.appendChild(d);i++;progress.style.width=`${Math.min(100,(i/tests.length)*100)}%`};
if(matchMedia("(prefers-reduced-motion: reduce)").matches){while(i<tests.length)add();status.textContent="PASSED";runBtn.disabled=false}else{add();testTimer=setInterval(add,280)}
});
document.querySelector("#recruiterMode").addEventListener("change",e=>document.body.classList.toggle("recruiter",e.target.checked));
document.querySelector("#menuBtn").addEventListener("click",()=>document.querySelector("#nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>document.querySelector("#nav").classList.remove("open")));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));