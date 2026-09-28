const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const store = {
  get(key, fallback){ try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
  set(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
};
const defaultTermId = courseTermOrder.find(id=>courseTerms[id]) || Object.keys(courseTerms)[0];
let activeTermId = courseTerms[store.get("econ-course-lab-active-term",defaultTermId)] ? store.get("econ-course-lab-active-term",defaultTermId) : defaultTermId;
let activeTerm = courseTerms[activeTermId];
let courses = activeTerm.courses;
let workshops = activeTerm.workshops;
let portfolios = activeTerm.portfolios;
let dates = activeTerm.dates;
let sources = activeTerm.sources;
const shortlistStorageKey = termId => `econ-course-lab-shortlist:${termId}`;
const loadShortlist = termId => {
  const saved=store.get(shortlistStorageKey(termId),null);
  if(saved) return saved;
  const legacy=termId==="autumn-2026" ? store.get("econ26-shortlist",null) : null;
  if(legacy) return legacy;
  return courseTerms[termId].publishedPlan?.courseIds || [];
};
let shortlist = new Set(loadShortlist(activeTermId));
let checkedRequirements = new Set(store.get("econ26-requirements", []));
let showAllWorkshops = false;
let fontScale = Number(store.get("econ26-font-scale", 1));

const qualityClass = quality => quality.includes("Current-quarter") ? "current" : quality.includes("prior") || quality.includes("Prior") ? "prior" : "background";
const statusClass = status => status.toLowerCase().includes("cancelled") ? "cancelled" : status.toLowerCase().includes("closed") ? "closed" : "open";
const cleanId = value => value.replace(/[^a-z0-9]+/gi,"-").toLowerCase();
const formatScore = (label, value) => `<div class="score"><span>${label}</span><b>${"●".repeat(value)}${"○".repeat(5-value)}</b></div>`;
const toast = message => { const el=$("#toast"); el.textContent=message; el.classList.add("show"); clearTimeout(toast.timer); toast.timer=setTimeout(()=>el.classList.remove("show"),1800); };

function persistShortlist(){ store.set(shortlistStorageKey(activeTermId), [...shortlist]); $("#shortlist-count").textContent=shortlist.size; renderCalendar(); }

function publishedCourseIds(){ return (activeTerm.publishedPlan?.courseIds||[]).filter(id=>courses.some(course=>course.id===id)); }
function draftMatchesPublished(){
  const draft=[...shortlist].sort(),published=publishedCourseIds().sort();
  return draft.length===published.length&&draft.every((id,index)=>id===published[index]);
}
function renderPlanState(){
  const plan=activeTerm.publishedPlan||{updated:null,note:"No shared plan has been published yet.",courseIds:[]};
  const matches=draftMatchesPublished();
  const publishedLabel=plan.updated?`Published plan updated ${plan.updated}.`:plan.note;
  $("#plan-state").className=`plan-state ${matches?"matches":"has-local-changes"}`;
  $("#plan-state").innerHTML=`<div><strong>${matches?"Viewing published plan":"Local draft"}</strong><span>${publishedLabel}</span></div><span class="plan-state-badge">${matches?"Up to date":"Unpublished local changes"}</span>`;
}

function restorePublishedPlan(){
  shortlist=new Set(publishedCourseIds());
  persistShortlist(); renderCourses();
  toast("Published plan loaded");
}

function renderTermSelector(){
  $("#term-select").innerHTML=courseTermOrder.filter(id=>courseTerms[id]).map(id=>`<option value="${id}" ${id===activeTermId?"selected":""}>${courseTerms[id].label}</option>`).join("");
}

function renderTermChrome(){
  const flagCount=activeTerm.planningFlags.length;
  document.title=`UChicago Economics PhD · ${activeTerm.label} Course Lab`;
  $("#brand-term").textContent=`${activeTerm.label} · ${activeTerm.university}`;
  $("#snapshot-label").textContent=`Decision brief · enrollment snapshot captured ${activeTerm.snapshot}`;
  $("#term-description").textContent=activeTerm.description;
  $("#planning-flags").innerHTML=`<strong>${flagCount} planning flag${flagCount===1?"":"s"}</strong>`+activeTerm.planningFlags.map(flag=>`<span>${flag}</span>`).join("");
  $("#screened-count").textContent=activeTerm.metrics.screened;
  $("#research-count").textContent=activeTerm.metrics.research;
  $("#workshop-count").textContent=activeTerm.metrics.workshops;
  $("#syllabus-count").textContent=activeTerm.metrics.syllabi;
  $("#courses-title").textContent=`${activeTerm.label} courses`;
  $("#footer-freshness").textContent=`Shortlists save separately for each quarter in this browser. Registrar data captured ${activeTerm.snapshot}.`;
}

function switchTerm(termId){
  if(!courseTerms[termId]||termId===activeTermId) return;
  activeTermId=termId; activeTerm=courseTerms[termId];
  courses=activeTerm.courses; workshops=activeTerm.workshops; portfolios=activeTerm.portfolios; dates=activeTerm.dates; sources=activeTerm.sources;
  shortlist=new Set(loadShortlist(activeTermId)); showAllWorkshops=false;
  store.set("econ-course-lab-active-term",activeTermId);
  renderTermChrome(); renderFieldFilters(); renderCourses(); renderCalendar(); renderPortfolios(); renderStaticTables();
  toast(`${activeTerm.label} loaded`);
}

function applyFontScale(value){
  const allowed=[0.9,1,1.15,1.3]; fontScale=allowed.includes(Number(value))?Number(value):1;
  document.documentElement.style.setProperty("--font-scale",String(fontScale));
  store.set("econ26-font-scale",fontScale);
  $$('[data-font-scale]').forEach(button=>button.setAttribute("aria-pressed",String(Number(button.dataset.fontScale)===fontScale)));
}

function renderFieldFilters(){
  const fields=[...new Set(courses.map(c=>c.field))].sort();
  $("#field-filters").innerHTML=fields.map((f,i)=>`<label><input type="checkbox" name="field" value="${f}" id="field-${i}"> ${f}</label>`).join("");
}

function currentFilters(){
  return {
    search:$("#search").value.trim().toLowerCase(),
    fields:new Set($$('input[name="field"]:checked').map(x=>x.value)),
    statuses:new Set($$('input[name="status"]:checked').map(x=>x.value)),
    math:+$("#math-filter").value, code:+$("#code-filter").value, workload:+$("#workload-filter").value,
    shortlistOnly:$("#shortlist-only").checked, sort:$("#sort").value
  };
}

function courseMatches(c,f){
  const hay=[c.id,c.title,c.instructor,c.field,c.official,c.tags.join(" ")].join(" ").toLowerCase();
  if(f.search && !hay.includes(f.search)) return false;
  if(f.fields.size && !f.fields.has(c.field)) return false;
  if(f.statuses.size && !f.statuses.has(statusClass(c.status))) return false;
  if(c.scores.math>f.math || c.scores.code>f.code || c.scores.workload>f.workload) return false;
  if(f.shortlistOnly && !shortlist.has(c.id)) return false;
  return true;
}

function renderCourses(){
  const f=currentFilters();
  const ranked=courses.filter(c=>courseMatches(c,f)).sort((a,b)=>{
    if(f.sort==="research") return b.scores.research-a.scores.research || a.num.localeCompare(b.num);
    if(f.sort==="workload") return a.scores.workload-b.scores.workload || a.num.localeCompare(b.num);
    if(f.sort==="availability") return ({open:0,closed:1,cancelled:2}[statusClass(a.status)]-({open:0,closed:1,cancelled:2}[statusClass(b.status)]));
    return a.num.localeCompare(b.num);
  });
  $("#result-count").textContent=`${ranked.length} of ${courses.length} briefs`;
  $("#course-results").innerHTML=ranked.length ? ranked.map(courseCard).join("") : `<div class="empty-state"><strong>No course matches this filter set.</strong><br>Reset filters or raise an intensity ceiling.</div>`;
  $$(".shortlist-btn").forEach(btn=>btn.addEventListener("click",()=>toggleCourse(btn.dataset.id)));
  $$(".expand-btn").forEach(btn=>btn.addEventListener("click",()=>{
    const brief=$(`#brief-${cleanId(btn.dataset.id)}`); const open=brief.classList.toggle("open"); btn.textContent=open?"Collapse brief":"Expand research brief"; btn.setAttribute("aria-expanded",String(open));
  }));
}

function courseCard(c){
  const status=statusClass(c.status); const selected=shortlist.has(c.id);
  const sourceLinks=c.sources.map(key=>`<a href="${sources[key].url}" target="_blank" rel="noreferrer">${sources[key].quality}: ${sources[key].label}</a>`).join("");
  const missing=!c.sources.some(k=>k.startsWith("syllabus"));
  return `<article class="course-card ${status}">
    <div class="course-top"><div><span class="course-code">${c.id} · ${c.field}</span><h3>${c.title}</h3><p class="instructor">${c.instructor}</p></div><button class="shortlist-btn ${selected?"selected":""}" data-id="${c.id}" type="button" aria-label="${selected?"Remove from":"Add to"} shortlist" aria-pressed="${selected}">${selected?"✓":"+"}</button></div>
    <div class="pills"><span class="pill status-${status}">${c.status}</span><span class="pill">${c.kind}</span>${c.cross!=="—"?`<span class="pill">${c.cross}</span>`:""}</div>
    <div class="course-meta"><div><span>When</span><strong>${c.time}</strong></div><div><span>Where</span><strong>${c.location}</strong></div><div><span>Consent / access</span><strong>${c.consent}</strong></div><div><span>Units</span><strong>${c.units}</strong></div></div>
    <p class="official-blurb">${c.official}</p>
    <div class="score-row">${formatScore("Theory",c.scores.theory)}${formatScore("Math",c.scores.math)}${formatScore("Stats",c.scores.stats)}${formatScore("Code",c.scores.code)}</div>
    <div class="course-actions"><button class="expand-btn" data-id="${c.id}" type="button" aria-expanded="false">Expand research brief</button><a class="source-link" href="${sources.registrar.url}" target="_blank" rel="noreferrer">Official listing ↗</a></div>
    <div class="brief" id="brief-${cleanId(c.id)}">
      ${c.warning?`<div class="warning-box"><strong>Verify:</strong> ${c.warning}</div>`:""}
      <h4>Preparation</h4><p>${c.prep}</p><h4>Assignments & grading</h4><p>${c.assessment}</p><h4>Topics / weekly evidence</h4><p>${c.weekly}</p><h4>Materials, data & software</h4><p>${c.resources}</p><h4>Instructor research</h4><p>${c.instructorResearch}</p><h4>Research pathway</h4><p>${c.connections}</p>
      <div class="guidance"><div><strong>Choose this if…</strong><p>${c.choose}</p></div><div><strong>Think twice if…</strong><p>${c.avoid}</p></div></div>
      <h4>Editorial intensity</h4><div class="score-row">${formatScore("Reading",c.scores.reading)}${formatScore("Writing",c.scores.writing)}${formatScore("Research",c.scores.research)}${formatScore("Load",c.scores.workload)}</div>
      <div class="source-chips"><span class="badge inference">Intensity + guidance: editorial inference</span>${missing?`<span class="badge missing">No public syllabus located</span>`:""}${sourceLinks}</div>
    </div>
  </article>`;
}

function toggleCourse(id, force){
  const course=courses.find(c=>c.id===id); if(!course) return false;
  if(course.status.toLowerCase().includes("cancelled")){ toast("Cancelled sections cannot be shortlisted."); return false; }
  const add=force===undefined?!shortlist.has(id):force;
  add?shortlist.add(id):shortlist.delete(id); persistShortlist(); renderCourses(); toast(add?`${id} added to shortlist`:`${id} removed`); return true;
}

const dayIndex={Mon:0,Tue:1,Wed:2,Thu:3,Fri:4};
const minutes = text => { const [h,m]=text.split(":").map(Number); return h*60+m; };
function getConflicts(selected){
  const events=selected.flatMap(c=>c.meetings.map(m=>({...m,course:c.id,title:c.title,instructor:c.instructor,location:eventLocation(c,m)})));
  const conflicts=[];
  for(let i=0;i<events.length;i++) for(let j=i+1;j<events.length;j++){
    const a=events[i],b=events[j]; if(a.course!==b.course && a.day===b.day && minutes(a.start)<minutes(b.end) && minutes(b.start)<minutes(a.end)) conflicts.push([a,b]);
  }
  return {events,conflicts};
}

function eventLocation(course,meeting){
  if(meeting.location) return meeting.location;
  const parts=course.location.split(";").map(part=>part.trim());
  if(meeting.label!=="Class"){
    const discussion=parts.find(part=>/^discussion\s/i.test(part));
    if(discussion) return discussion.replace(/^discussion\s*/i,"");
  }
  return parts[0].replace(/^discussion\s*/i,"");
}

function assignCalendarLanes(events){
  const laidOut=events.map(event=>({...event,lane:0,laneCount:1}));
  Object.keys(dayIndex).forEach(day=>{
    const dayEvents=laidOut.filter(event=>event.day===day).sort((a,b)=>minutes(a.start)-minutes(b.start)||minutes(a.end)-minutes(b.end));
    let component=[]; let componentEnd=-1;
    const finishComponent=()=>{
      if(!component.length) return;
      const laneEnds=[];
      component.forEach(event=>{
        let lane=laneEnds.findIndex(end=>end<=minutes(event.start));
        if(lane<0) lane=laneEnds.length;
        event.lane=lane; laneEnds[lane]=minutes(event.end);
      });
      component.forEach(event=>event.laneCount=laneEnds.length);
      component=[]; componentEnd=-1;
    };
    dayEvents.forEach(event=>{
      if(component.length && minutes(event.start)>=componentEnd) finishComponent();
      component.push(event); componentEnd=Math.max(componentEnd,minutes(event.end));
    });
    finishComponent();
  });
  return laidOut;
}

function renderCalendar(){
  const selected=courses.filter(c=>shortlist.has(c.id)); const {events,conflicts}=getConflicts(selected);
  const calendarEvents=assignCalendarLanes(events);
  const conflictKeys=new Set(conflicts.flatMap(pair=>pair.map(e=>`${e.course}|${e.day}|${e.start}`)));
  let html=`<div class="cal-head" style="grid-column:1;grid-row:1">CT</div>`;
  ["Monday","Tuesday","Wednesday","Thursday","Friday"].forEach((d,i)=>html+=`<div class="cal-head" style="grid-column:${i+2};grid-row:1">${d}</div>`);
  for(let slot=0;slot<24;slot++){
    const total=8*60+slot*30, h=Math.floor(total/60), m=total%60, label=m?"":`${h>12?h-12:h}:00`;
    html+=`<div class="cal-time" style="grid-column:1;grid-row:${slot+2}">${label}</div>`;
    for(let d=0;d<5;d++) html+=`<div class="cal-cell" style="grid-column:${d+2};grid-row:${slot+2}"></div>`;
  }
  Object.keys(dayIndex).forEach(day=>{
    const dayEvents=calendarEvents.filter(e=>e.day===day&&minutes(e.start)>=480&&minutes(e.end)<=1200);
    html+=`<div class="cal-day-events" style="grid-column:${dayIndex[day]+2};grid-row:2/26">`;
    dayEvents.forEach(e=>{ const start=minutes(e.start),end=minutes(e.end); const key=`${e.course}|${e.day}|${e.start}`; const kind=e.label!=="Class"?` · ${e.label}`:""; const description=`${e.course} ${e.title}; ${e.instructor}; ${e.location}; ${e.start}–${e.end}${kind}`; const laneWidth=100/e.laneCount; const top=(start-480)/30*38; const height=Math.max(34,(end-start)/30*38); const laneStyle=`top:${top+2}px;height:${height-4}px;left:calc(${laneWidth*e.lane}% + 4px);width:calc(${laneWidth}% - 8px)`; html+=`<div class="cal-event ${conflictKeys.has(key)?"conflict":""}" style="${laneStyle}" title="${description}" aria-label="${description}"><strong class="cal-course">${e.course} · ${e.title}</strong><span class="cal-detail">${e.location}</span><span class="cal-detail">${e.start}–${e.end}${kind}</span></div>`; });
    html+=`</div>`;
  });
  $("#calendar-grid").innerHTML=html;
  const summary=$("#conflict-summary");
  if(!selected.length){ summary.className="conflict-summary"; summary.textContent="Shortlist courses to build the week and test conflicts."; }
  else if(!conflicts.length){ summary.className="conflict-summary"; summary.textContent=`No exact meeting conflicts detected across ${selected.length} shortlisted course${selected.length===1?"":"s"}. Check travel time and TBA discussions separately.`; }
  else { summary.className="conflict-summary has-conflict"; summary.innerHTML=`<strong>${conflicts.length} conflict${conflicts.length===1?"":"s"}:</strong> `+conflicts.map(([a,b])=>`${a.day} ${a.course} overlaps ${b.course}`).join(" · "); }
  $("#shortlist-count").textContent=shortlist.size;
  renderPlanState();
}

function renderPortfolios(){
  $("#portfolio-grid").innerHTML=portfolios.map((p,i)=>`<article class="portfolio"><span class="goal">${p.goal}</span><h3>${p.name}</h3><ul>${p.courses.map(id=>`<li>${id.replace(/-\d+$/,"")}: ${courses.find(c=>c.id===id)?.title||"Course"}</li>`).join("")}</ul><p>${p.note}</p><button type="button" data-portfolio="${i}">Add bundle to shortlist</button></article>`).join("");
  $$('[data-portfolio]').forEach(btn=>btn.addEventListener("click",()=>applyPortfolio(+btn.dataset.portfolio)));
}
function applyPortfolio(index){ const p=portfolios[index]; p.courses.forEach(id=>{ const c=courses.find(x=>x.id===id); if(c&&!c.status.toLowerCase().includes("cancelled")) shortlist.add(id); }); persistShortlist(); renderCourses(); toast(`${p.name} added`); }

function renderRequirements(){
  const groups=Object.groupBy?Object.groupBy(requirements,r=>r.group):requirements.reduce((o,r)=>((o[r.group]??=[]).push(r),o),{});
  $("#requirement-list").innerHTML=Object.entries(groups).map(([group,items])=>`<section class="requirement-group"><h3>${group}</h3>${items.map(r=>`<label><input type="checkbox" data-req="${r.id}" ${checkedRequirements.has(r.id)?"checked":""}> <span>${r.label}</span></label>`).join("")}</section>`).join("");
  $$('[data-req]').forEach(input=>input.addEventListener("change",()=>setRequirement(input.dataset.req,input.checked)));
  updateRequirementProgress();
}
function setRequirement(id,checked){ checked?checkedRequirements.add(id):checkedRequirements.delete(id); store.set("econ26-requirements",[...checkedRequirements]); updateRequirementProgress(); return true; }
function updateRequirementProgress(){ const n=checkedRequirements.size,total=requirements.length; $("#requirement-progress").textContent=`${n} of ${total}`; $("#progress-bar").style.width=`${100*n/total}%`; }

function renderStaticTables(){
  $("#field-map-grid").innerHTML=fieldRules.map(([name,rule])=>`<div class="field-rule"><strong>${name}</strong>${rule}</div>`).join("");
  $("#date-list").innerHTML=dates.map(([date,event])=>`<div class="date-row"><strong>${date}</strong><span>${event}</span></div>`).join("");
  renderWorkshops();
  $("#source-body").innerHTML=Object.values(sources).map(s=>`<tr><td><a href="${s.url}" target="_blank" rel="noreferrer">${s.label} ↗</a></td><td><span class="badge ${qualityClass(s.quality)}">${s.quality}</span></td><td>${s.note}</td></tr>`).join("");
}
function renderWorkshops(){ const rows=(showAllWorkshops?workshops:workshops.slice(0,8)); $("#workshop-body").innerHTML=rows.map(w=>`<tr><td><strong>${w.id} · ${w.title}</strong><span>${w.instructor} · ${w.field}</span></td><td>${w.time}<br><span>${w.location}</span></td><td>${w.status}</td></tr>`).join(""); $("#workshop-toggle").textContent=showAllWorkshops?"Show fewer":"Show all"; }

function bindControls(){
  $("#term-select").addEventListener("change",event=>switchTerm(event.target.value));
  ["#search","#sort","#math-filter","#code-filter","#workload-filter","#shortlist-only"].forEach(sel=>$(sel).addEventListener("input",()=>{ ["math","code","workload"].forEach(k=>$(`#${k}-out`).textContent=$(`#${k}-filter`).value); renderCourses(); }));
  document.addEventListener("change",e=>{ if(e.target.matches('input[name="field"],input[name="status"]')) renderCourses(); });
  $("#reset-filters").addEventListener("click",()=>{ $("#search").value=""; $$('input[name="field"],input[name="status"]').forEach(x=>x.checked=false); ["math","code","workload"].forEach(k=>{ $(`#${k}-filter`).value=5; $(`#${k}-out`).textContent=5; }); $("#shortlist-only").checked=false; $("#sort").value="number"; renderCourses(); });
  $("#clear-shortlist").addEventListener("click",()=>{ shortlist.clear(); persistShortlist(); renderCourses(); toast("Shortlist cleared"); });
  $("#restore-published").addEventListener("click",restorePublishedPlan);
  $("#workshop-toggle").addEventListener("click",()=>{ showAllWorkshops=!showAllWorkshops; renderWorkshops(); });
  $$('[data-font-scale]').forEach(button=>button.addEventListener("click",()=>{ applyFontScale(button.dataset.fontScale); toast(`Text size: ${button.getAttribute("aria-label").replace("Use ","")}`); }));
  $("#copy-calendar-link").addEventListener("click",async()=>{ const link=`${location.origin}${location.pathname}#calendar`; try{ await navigator.clipboard.writeText(link); toast("Calendar link copied"); }catch{ location.hash="calendar"; toast("Calendar link is in the address bar"); } });
  $("#print-btn").addEventListener("click",()=>window.print());
}

function registerWebMCP(){
  const context=document.modelContext; if(!context?.registerTool) return;
  const safeId=id=>{ if(typeof id!=="string"||!courses.some(c=>c.id===id)) throw new Error("Unknown course id"); return id; };
  const tools=[
    {name:"get_course_shortlist",title:"Read course shortlist",description:"Read the course IDs currently shortlisted in the visible Economics planning hub.",inputSchema:{type:"object",properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute:()=>({courseIds:[...shortlist],count:shortlist.size})},
    {name:"set_course_shortlist",title:"Update course shortlist",description:"Add or remove one valid course ID from the visible shortlist and calendar.",inputSchema:{type:"object",properties:{courseId:{type:"string"},selected:{type:"boolean"}},required:["courseId","selected"],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute:({courseId,selected})=>{ const id=safeId(courseId); const changed=toggleCourse(id,selected); return {courseId:id,selected:shortlist.has(id),changed}; }},
    {name:"apply_course_portfolio",title:"Apply suggested portfolio",description:"Add all available courses from one named suggested portfolio to the visible shortlist.",inputSchema:{type:"object",properties:{name:{type:"string"}},required:["name"],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute:({name})=>{ const index=portfolios.findIndex(p=>p.name===name); if(index<0) throw new Error("Unknown portfolio"); applyPortfolio(index); return {name,courseIds:portfolios[index].courses.filter(id=>shortlist.has(id))}; }},
    {name:"set_degree_requirement",title:"Update degree checklist",description:"Mark one visible degree requirement complete or incomplete using its stable requirement ID.",inputSchema:{type:"object",properties:{requirementId:{type:"string",enum:requirements.map(r=>r.id)},completed:{type:"boolean"}},required:["requirementId","completed"],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute:({requirementId,completed})=>{ if(!requirements.some(r=>r.id===requirementId)) throw new Error("Unknown requirement"); setRequirement(requirementId,completed); const input=$(`[data-req="${requirementId}"]`); if(input) input.checked=completed; return {requirementId,completed}; }}
  ];
  tools.forEach(tool=>Promise.resolve(context.registerTool(tool)).catch(()=>{}));
}

applyFontScale(fontScale); renderTermSelector(); renderTermChrome(); renderFieldFilters(); renderCourses(); renderCalendar(); renderPortfolios(); renderRequirements(); renderStaticTables(); bindControls(); registerWebMCP();
