const AUTUMN_2026_UPDATED = "2026-09-27 19:30 CT";

const autumn2026Sources = {
  registrar: { label: "UChicago public class search", url: "https://coursesearch92.ais.uchicago.edu/psc/prd92guest/EMPLOYEE/HRMS/c/UC_STUDENT_RECORDS_FL.UC_CLASS_SEARCH_FL.GBL", quality: "Current-quarter official", note: `Autumn 2026 sections, meetings, instructors, cross-lists and volatile enrollment captured ${AUTUMN_2026_UPDATED}.` },
  handbook: { label: "Graduate Program Guidebook 2025–26", url: "https://economics.uchicago.edu/sites/default/files/PDFs/Graduate%20Program%20Guidebook%202025-26.pdf", quality: "Recent prior offering", note: "Official handbook supplied in the project folder; one academic year behind the target quarter, so 2026–27 program-office changes remain possible." },
  catalog: { label: "Graduate Announcements — Economics", url: "https://graduateannouncements.uchicago.edu/graduate/departmentofeconomics/", quality: "Recent prior offering", note: "2025–26 graduate catalog used for course background and cross-checking, not for Autumn 2026 enrollment." },
  overview: { label: "Economics PhD program overview", url: "https://economics.uchicago.edu/phd-program/program-overview", quality: "Current official background", note: "Department overview of the doctoral program." },
  dates: { label: "Registrar registration dates & deadlines", url: "https://registrar.uchicago.edu/calendars/registration-dates-deadlines/", quality: "Current-quarter official", note: "2026–27 graduate registration publication/opening dates." },
  harris377: { label: "PPHA 48050 / ECON 37710 course page", url: "https://harris.uchicago.edu/academics/programs-degrees/courses/fall-2026/48050/1", quality: "Current-quarter official", note: "Fall 2026 official course page; its syllabus link points to Fall 2025." },
  syllabus377: { label: "Economics of Healthcare syllabus", url: "https://harris.uchicago.edu/sites/default/files/2025-09/PPHA%2048050_Economics%20of%20Healthcare_Gottlieb_2025.pdf", quality: "Recent prior offering", note: "Fall 2025 syllabus. Assignment design and topics are context only, not confirmed for Autumn 2026." },
  harris422: { label: "PPHA 41150 / ECON 42200 course page", url: "https://harris.uchicago.edu/academics/programs-degrees/courses/fall-2026/41150/1", quality: "Current-quarter official", note: "Fall 2026 page. Page and syllabus disagree slightly with the registrar on the start time." },
  syllabus422: { label: "Comparing Societies syllabus", url: "https://harris.uchicago.edu/sites/default/files/2026-09/PPHA_41150_Advanced_Topics_in_Political_Economy_2026_Robinson.pdf", quality: "Current-quarter official", note: "Dated July 6, 2026; assessment and reading sequence are current-quarter evidence." },
  brooks: { label: "Benjamin Brooks profile", url: "https://economics.uchicago.edu/directory/benjamin-brooks", quality: "Current official background", note: "Micro theory, incomplete-information games, auctions, mechanism design, repeated and computational game theory." },
  torg: { label: "Alexander Torgovitsky profile", url: "https://economics.uchicago.edu/directory/alexander-torgovitsky", quality: "Current official background", note: "Microeconometrics, applied econometrics and causal inference." },
  alvarez: { label: "Fernando Alvarez profile", url: "https://economics.uchicago.edu/directory/fernando-alvarez", quality: "Current official background", note: "Dynamic general equilibrium applied to asset pricing, search and insurance." },
  uhlig: { label: "Harald Uhlig profile", url: "https://economics.uchicago.edu/directory/harald-uhlig", quality: "Current official background", note: "Macroeconomics, monetary economics, financial markets and Bayesian time series." },
  ponomarev: { label: "Kirill Ponomarev profile", url: "https://socialsciences.uchicago.edu/directory/Kirill-Ponomarev", quality: "Current official background", note: "Econometrics, partial identification and efficient estimation." },
  research: { label: "Department research initiatives", url: "https://economics.uchicago.edu/research-initiatives", quality: "Current official background", note: "Field and workshop context for research connections." },
  adao: { label: "Rodrigo Adao profile", url: "https://www.chicagobooth.edu/faculty/directory/a/rodrigo-adao", quality: "Current official background", note: "International trade and globalization, including welfare and inequality." },
  diamond: { label: "Douglas Diamond profile", url: "https://www.chicagobooth.edu/faculty/directory/d/douglas-w-diamond", quality: "Current official background", note: "Financial intermediaries, crises and liquidity." },
  dean: { label: "Joshua Dean profile", url: "https://www.chicagobooth.edu/faculty/directory/d/joshua-dean", quality: "Current official background", note: "Behavioral and development economics." },
  pope: { label: "Devin Pope profile", url: "https://www.chicagobooth.edu/faculty/directory/p/devin-g-pope", quality: "Current official background", note: "Behavioral economics, psychology and observational data." },
  syverson: { label: "Chad Syverson profile", url: "https://www.chicagobooth.edu/faculty/directory/s/chad-syverson", quality: "Current official background", note: "Firm and market structure, productivity and industrial organization." },
  hansen: { label: "Lars Peter Hansen profile", url: "https://www.chicagobooth.edu/faculty/directory/h/lars-hansen", quality: "Current official background", note: "Asset pricing, macroeconomics and uncertainty." },
  heaton: { label: "John Heaton profile", url: "https://www.chicagobooth.edu/faculty/directory/h/john-c-heaton", quality: "Current official background", note: "Asset pricing, portfolio choice and time-series economics." }
};

const q = (theory, math, stats, code, reading, writing, research, workload) => ({ theory, math, stats, code, reading, writing, research, workload });
const meeting = (day, start, end, label = "Class") => ({ day, start, end, label });
const noSyllabus = "No public syllabus located. Topic, preparation and workload notes use the current registrar description plus clearly marked editorial inference.";

const autumn2026Courses = [
  {
    id:"ECON 30100-1", num:"30100", title:"Price Theory I", field:"First-year core", kind:"Credit course", instructor:"Benjamin Brooks", status:"Open · 44/75 seats filled", consent:"No special consent displayed", cross:"—", units:100,
    time:"Tue/Thu 9:30–10:50 · discussion Fri 1:00–1:50", location:"Saieh 146", meetings:[meeting("Tue","09:30","10:50"),meeting("Thu","09:30","10:50"),meeting("Fri","13:00","13:50","Discussion")],
    official:"Axiomatic decision theory, revealed preference, social choice, general and competitive equilibrium, cooperative games and the core, matching, noncooperative/Bayesian/extensive/repeated games, oligopoly, auctions and bargaining.",
    prep:"Required first-year Price Theory sequence opener. The official listing does not state a formal prerequisite; the PhD math camp is designed as preparation.",
    assessment:noSyllabus, resources:"No current public textbook, lecture-note set or assignment schedule located.", weekly:"No weekly calendar was public; the current official description is a topic outline, not a week-by-week promise.",
    instructorResearch:"Brooks works in microeconomic theory, incomplete-information games, auctions, mechanism design, repeated games and computational game theory.",
    choose:"you need the required micro core or want the language behind theory, IO and mechanism design.", avoid:"you are not ready for proof-heavy, fast-moving graduate theory; use camp and problem-group support early.",
    connections:"Gateway to the micro core exam, advanced theory, IO, information economics and theory-driven RA work.", scores:q(5,5,1,1,3,1,5,5), tags:["required","theory","micro"], sources:["registrar","handbook","brooks"]
  },
  {
    id:"ECON 30400-1", num:"30400", title:"Introduction to Mathematical Methods", field:"Preparatory camp", kind:"Pre-quarter intensive", instructor:"Joseph Root", status:"Open · 1/35 seats filled", consent:"PhD Economics only", cross:"—", units:0,
    time:"Mon–Fri 9:00–12:00, Aug 31–Sep 18 · discussion 1:00–1:50", location:"Saieh 021 (Aug 31–Sep 11); Stuart 102 (Sep 14–18)", meetings:[],
    official:"Four-week pre-quarter camp in core mathematical tools, abstract mathematical reasoning, problem solving and cooperative work.", prep:"Entering Economics PhD cohort. Officially optional but strongly encouraged by the handbook.", assessment:noSyllabus, resources:"No public notes or textbook located.", weekly:"Intensive pre-quarter structure; no public daily syllabus located.", instructorResearch:"Root is associated with economic theory and mathematical economics.", choose:"you are entering year one and want a common technical baseline before the core.", avoid:"you are not in the Economics PhD cohort or cannot sustain a three-week weekday intensive.", connections:"Preparation for all three first-year core sequences.", scores:q(3,5,1,1,2,1,3,4), tags:["math","camp","required-adjacent"], sources:["registrar","handbook","research"]
  },
  {
    id:"ECON 30450-1", num:"30450", title:"Computational Methods for Economists", field:"Preparatory camp", kind:"Pre-quarter intensive", instructor:"Thibaut Lamadon", status:"Open · 1/50 seats filled", consent:"PhD Economics only", cross:"—", units:100,
    time:"Mon–Fri 9:00–12:00, Sep 21–25", location:"Saieh 146", meetings:[],
    official:"Docker, VS Code, Git, defensive programming, computer memory, automatic differentiation, gradient descent, parallel work, Python/PyTorch moment estimation, Julia dynamic discrete choice and high-performance computing.", prep:"Entering Economics PhD cohort; basic coding familiarity helps but the description frames this as preparation.", assessment:noSyllabus, resources:"Named tools are confirmed by the current listing; no public assignments or notes located.", weekly:"One-week intensive; no public day-by-day schedule located.", instructorResearch:"Lamadon works in labor economics and empirical/computational methods.", choose:"you want a reproducible workflow and computational foundation for structural or quantitative research.", avoid:"you need a gentle, semester-length programming introduction; this is compressed into one week.", connections:"Useful for empirical core, structural work, RA coding and later quantitative fields.", scores:q(2,4,3,5,2,1,5,4), tags:["code","camp","data"], sources:["registrar","handbook","research"]
  },
  {
    id:"ECON 31000-1", num:"31000", title:"Empirical Analysis I", field:"First-year core", kind:"Credit course", instructor:"Alexander Torgovitsky", status:"Open · 45/50 seats filled", consent:"No special consent displayed", cross:"—", units:100,
    time:"Tue/Thu 3:30–4:50 · discussion Fri 10:30–11:20", location:"Saieh 203; discussion Saieh 146", meetings:[meeting("Tue","15:30","16:50"),meeting("Thu","15:30","16:50"),meeting("Fri","10:30","11:20","Discussion")],
    official:"Asymptotic theory, ordinary least squares, instrumental variables, maximum likelihood, limited dependent variables, and causal versus descriptive interpretation.", prep:"Required first-year quantitative sequence opener. Comfort with probability, linear algebra and calculus is the practical baseline; that preparation statement is editorial.", assessment:noSyllabus, resources:"No current public textbook, datasets, code repository or grading plan located.", weekly:"No public weekly calendar located.", instructorResearch:"Torgovitsky works in microeconometrics, applied econometrics and causal inference.", choose:"you need the required metrics core or want rigorous foundations for empirical identification.", avoid:"probability and matrix algebra are rusty; repair them before the problem-set cycle accelerates.", connections:"Gateway to the quantitative core exam, applied fields, causal inference and empirical RA work.", scores:q(3,5,5,3,2,1,5,5), tags:["required","econometrics","data"], sources:["registrar","handbook","torg"]
  },
  {
    id:"ECON 33000-1", num:"33000", title:"Theory of Income I", field:"First-year core", kind:"Credit course", instructor:"Fernando Alvarez", status:"Open · 35/50 seats filled", consent:"No special consent displayed", cross:"—", units:100,
    time:"Mon/Wed 9:30–10:50 · discussion Thu 5:30–6:20", location:"Saieh 146; discussion Saieh 203", meetings:[meeting("Mon","09:30","10:50"),meeting("Wed","09:30","10:50"),meeting("Thu","17:30","18:20","Discussion")],
    official:"Consumption and saving, human capital and investment, growth, labor and taxes, technology, asset pricing, frictional unemployment and uninsured risk; optimal control, dynamic programming, Bellman equations, Markov processes, recursive competitive equilibrium, incomplete markets and heterogeneous agents.", prep:"Required first-year macro sequence opener; strong multivariable calculus, optimization and comfort with dynamic models are useful.", assessment:noSyllabus, resources:"No current public textbook, lecture notes or problem-set calendar located.", weekly:"No public weekly calendar located.", instructorResearch:"Alvarez studies dynamic general equilibrium applied to asset pricing, search and insurance.", choose:"you need the macro core or want modern recursive macro and heterogeneous-agent foundations.", avoid:"dynamic optimization is unfamiliar and you cannot allocate substantial weekly problem-set time.", connections:"Gateway to the macro core exam, monetary, finance, growth and quantitative macro research.", scores:q(5,5,2,3,3,1,5,5), tags:["required","macro","theory"], sources:["registrar","handbook","alvarez"]
  },
  {
    id:"ECON 30680-50", num:"30680", title:"Topics in Information Economics", field:"Mathematical economics", kind:"Credit course", instructor:"Emir Kamenica", status:"Open · ECON 8/15; total 8/32", consent:"PhD students only; strict first-year PhD micro prerequisite", cross:"BUSN 33914", units:100,
    time:"Tue 8:30–11:30", location:"Harper 3A", meetings:[meeting("Tue","08:30","11:30")],
    official:"Formal models of information and recent developments in information economics.", prep:"Strict completion of first-year PhD microeconomics; PhD-only enrollment.", assessment:noSyllabus, resources:"No current public syllabus, problem sets or reading list located.", weekly:"No week-by-week sequence located.", instructorResearch:"Kamenica is a theorist known for information economics, persuasion and behavioral applications.", choose:"you want a theory field course in information design, persuasion or strategic communication.", avoid:"your first-year micro foundation is incomplete or you want an empirical/data-centered course.", connections:"Counts in the handbook's Mathematical Economics field menu; useful for theory, IO and mechanism-design research.", scores:q(5,5,1,1,4,2,5,4), tags:["theory","information","field"], sources:["registrar","handbook","catalog"]
  },
  {
    id:"ECON 31715-1", num:"31715", title:"Econometrics with Partial Identification", field:"Econometrics & statistics", kind:"Credit course", instructor:"Kirill Ponomarev", status:"Closed · 15/15", consent:"No special consent displayed", cross:"—", units:100,
    time:"Mon/Wed 1:30–2:50 · discussion Thu 6:30–7:20", location:"Saieh 103", meetings:[meeting("Mon","13:30","14:50"),meeting("Wed","13:30","14:50"),meeting("Thu","18:30","19:20","Discussion")],
    official:"Identification sets, estimation and confidence procedures, theoretical foundations, implementation and empirical papers; relevant to econometrics, applied micro and IO.", prep:"Graduate econometrics preparation is expected. The 2025–26 handbook lists ECON 31720—not 31715—as the Autumn Econometrics field option, so field credit requires confirmation from the chair.", assessment:noSyllabus, resources:"No current public code, dataset, textbook or assignments located.", weekly:"No public weekly calendar located.", instructorResearch:"Ponomarev works in econometrics, partial identification and efficient estimation.", choose:"you want frontier identification tools that bridge theory and applied empirical work.", avoid:"you need a guaranteed handbook field slot or cannot resolve the closed enrollment and field-credit mismatch.", connections:"High value for applied micro, IO and econometric theory; potential field credit is not assumed.", scores:q(5,5,5,4,4,2,5,5), tags:["econometrics","field","closed","code"], sources:["registrar","handbook","ponomarev"]
  },
  {
    id:"ECON 32000-1", num:"32000", title:"Topics in American Economic History", field:"Other / distribution", kind:"Credit course", instructor:"David Galenson", status:"Open · 0/25", consent:"No special consent displayed", cross:"—", units:100,
    time:"Mon/Wed/Fri 10:30–11:20", location:"Saieh 242", meetings:[meeting("Mon","10:30","11:20"),meeting("Wed","10:30","11:20"),meeting("Fri","10:30","11:20")],
    official:"Labor markets in U.S. growth: colonization, slavery, immigration, education, westward migration, mobility and discrimination.", prep:"No prerequisite displayed in the current listing.", assessment:noSyllabus, resources:"No public current reading list or grading structure located.", weekly:"The official description supplies themes but no weekly sequence.", instructorResearch:"Galenson studies economic history and the careers and life cycles of innovators.", choose:"you want historically grounded labor and growth questions with likely substantial reading.", avoid:"you need a technical field-course sequence or a confirmed quantitative methods focus.", connections:"Possible general-distribution option; useful context for labor, inequality and historical data research.", scores:q(2,2,2,1,5,4,3,3), tags:["history","labor","writing"], sources:["registrar","catalog"]
  },
  {
    id:"ECON 33502-1", num:"33502", title:"Monetary Economics I", field:"Macroeconomics", kind:"Credit course", instructor:"Harald Uhlig", status:"Open · 10/15", consent:"No special consent displayed", cross:"—", units:100,
    time:"Tue/Thu 11:00–12:20 · discussion TBA", location:"Saieh 242", meetings:[meeting("Tue","11:00","12:20"),meeting("Thu","11:00","12:20")],
    official:"Money models, New Keynesian analysis, banking and intermediation, digital currencies and CBDCs, monetary shocks in time series, and asset-pricing implications for stocks and bonds.", prep:"First-year macro and econometrics are the practical baseline; the current listing does not display a formal prerequisite.", assessment:noSyllabus, resources:"No current public syllabus, problem sets, code or reading list located.", weekly:"No public weekly sequence located.", instructorResearch:"Uhlig studies macroeconomics, monetary economics, financial markets and Bayesian time series.", choose:"you want the Autumn macro field course with a monetary-financial and time-series bridge.", avoid:"you want pure empirical policy evaluation without structural macro or asset-pricing theory.", connections:"Named Autumn course in the handbook's Macro field; complements asset pricing and macro workshops.", scores:q(4,4,4,3,4,2,5,4), tags:["macro","monetary","field","finance"], sources:["registrar","handbook","uhlig"]
  },
  {
    id:"ECON 34460-1", num:"34460", title:"Topics in Public and Labor Economics", field:"Labor / public", kind:"Credit course", instructor:"Evan Rose", status:"Open · 26/30", consent:"No special consent displayed", cross:"—", units:100,
    time:"Tue/Thu 12:30–1:50 · discussion Thu 5:30–6:20", location:"Saieh 247; discussion Saieh 103", meetings:[meeting("Tue","12:30","13:50"),meeting("Thu","12:30","13:50"),meeting("Thu","17:30","18:20","Discussion")],
    official:"Labor supply and demand, tax incidence, labor-market competition, training, search and information, minimum wages and discrimination.", prep:"Graduate micro and econometrics are useful; no formal prerequisite displayed.", assessment:noSyllabus, resources:"No current public syllabus, datasets or grading plan located.", weekly:"No public weekly sequence located.", instructorResearch:"Rose works on labor-market inequality, institutions and empirical labor/public questions.", choose:"you want modern labor/public topics with close links to empirical research questions.", avoid:"you need one of the three handbook-listed Labor field courses; this course is not on the supplied 2025–26 list.", connections:"Strong for applied micro RA work and policy; field substitution should be confirmed rather than assumed.", scores:q(3,3,4,3,4,3,5,4), tags:["labor","public","empirical"], sources:["registrar","handbook","catalog"]
  },
  {
    id:"ECON 35050-50", num:"35050", title:"Asset Pricing I", field:"Financial economics", kind:"Credit course", instructor:"Lars Peter Hansen · John Heaton", status:"Closed · ECON 5/15; total 35/35", consent:"Cross-listed enrollment; PhD-level", cross:"BUSN 34901", units:100,
    time:"Tue/Thu 8:30–9:50", location:"Harper 3B", meetings:[meeting("Tue","08:30","09:50"),meeting("Thu","08:30","09:50")],
    official:"Current registrar description is listed as TBD.", prep:"Graduate macro, probability/econometrics and first-year theory are prudent preparation; this is editorial inference.", assessment:noSyllabus, resources:"No current public syllabus, textbook or problem-set schedule located.", weekly:"No public topic calendar located.", instructorResearch:"Hansen works on asset pricing, macroeconomics and uncertainty; Heaton on asset pricing, portfolio choice and time series.", choose:"you want the asset-pricing branch of the Finance field and are comfortable with mathematical uncertainty and time-series ideas.", avoid:"you need an open seat or a confirmed current syllabus before committing.", connections:"One of the handbook's Finance core pairs; complements Monetary Economics I and Finance workshop exposure.", scores:q(5,5,4,3,4,2,5,5), tags:["finance","asset pricing","field","closed"], sources:["registrar","handbook","hansen","heaton"]
  },
  {
    id:"ECON 35070-50", num:"35070", title:"Corporate Finance I", field:"Financial economics", kind:"Credit course", instructor:"Douglas Diamond", status:"Open · ECON 7/15; total 18/35", consent:"Strict prerequisite displayed", cross:"BUSN 34903", units:100,
    time:"Mon 3:00–6:00", location:"Harper 3B", meetings:[meeting("Mon","15:00","18:00")],
    official:"Current registrar description is listed as TBD.", prep:"Strict prerequisite: ECON 30100, 30200 and 30300.", assessment:noSyllabus, resources:"No current public syllabus, textbook or grading plan located.", weekly:"No public topic calendar located.", instructorResearch:"Diamond studies financial intermediaries, crises and liquidity.", choose:"you want the corporate/intermediation branch of the Finance field after completing the full micro core.", avoid:"you have not completed all three stated Price Theory prerequisites or need detailed current assessment evidence.", connections:"One of the handbook's Finance core pairs; especially relevant to banking, intermediation and corporate-finance research.", scores:q(5,5,2,1,4,3,5,5), tags:["finance","corporate","field"], sources:["registrar","handbook","diamond"]
  },
  {
    id:"ECON 35101-50", num:"35101", title:"International Macroeconomics and Trade", field:"Trade & growth", kind:"Credit course", instructor:"Rodrigo Adao", status:"Closed · ECON 11/11; total 15/22", consent:"PhD course; undergraduate/master's students need faculty permission", cross:"BUSN 33946", units:100,
    time:"Fri 8:30–11:30", location:"Harper 3SW", meetings:[meeting("Fri","08:30","11:30")],
    official:"First course in the second-year Trade and Growth sequence; graduate trade tools and economic geography.", prep:"First-year PhD core is the expected baseline.", assessment:noSyllabus, resources:"No current public syllabus, reading list or code repository located.", weekly:"No public weekly sequence located.", instructorResearch:"Adao studies international trade and globalization, including welfare and inequality.", choose:"you want the required Autumn anchor for the Trade & Growth field.", avoid:"you need an open ECON seat or are not prepared for a second-year PhD trade course.", connections:"Named Autumn course in the handbook's Trade & Growth field; useful for spatial, trade and globalization research.", scores:q(5,5,3,3,4,2,5,5), tags:["trade","macro","field","closed"], sources:["registrar","handbook","adao"]
  },
  {
    id:"ECON 35600-1", num:"35600", title:"Development Economics", field:"Development", kind:"Cancelled course", instructor:"Staff", status:"Cancelled · 0/0", consent:"Cross-listed; not enrollable", cross:"PPHA 44401", units:100,
    time:"No main meeting · orphan discussion Mon 5:30–6:20 remains displayed", location:"Discussion Saieh 141", meetings:[],
    official:"Theory and empirical work on health, education, households, SME finance, technology adoption, corruption, behavioral development, experiments, natural experiments and structural methods.", prep:"Not applicable while cancelled.", assessment:"Cancelled for Autumn 2026. Do not treat the lingering discussion line as an available section.", resources:"No current syllabus needed for planning because the offering is cancelled.", weekly:"Unavailable.", instructorResearch:"Staff not assigned.", choose:"do not shortlist this cancelled section; use it only to understand the intended Development field slot.", avoid:"you need an actual Autumn 2026 course.", connections:"The supplied handbook names ECON 35600 as a Development field course, but no active Autumn 2026 seat exists.", scores:q(3,3,4,3,4,3,5,4), tags:["development","cancelled","field"], sources:["registrar","handbook"]
  },
  {
    id:"ECON 36200-1", num:"36200", title:"Public Sector Economics", field:"Public economics", kind:"Credit course", instructor:"Casey Mulligan", status:"Open · 5/15", consent:"No special consent displayed", cross:"—", units:100,
    time:"Thu 9:30–12:20 · discussion Mon 6:30–7:20", location:"Saieh 103; discussion Saieh 102", meetings:[meeting("Thu","09:30","12:20"),meeting("Mon","18:30","19:20","Discussion")],
    official:"Market-distortion framework for taxation, spending and regulation; cross-country evidence, microeconomic response, incidence and models of government decision-making.", prep:"Graduate micro is valuable; no formal prerequisite displayed.", assessment:noSyllabus, resources:"No current public syllabus, data, textbook or grading plan located.", weekly:"No public weekly sequence located.", instructorResearch:"Mulligan works in public economics, labor and the economics of policy and regulation.", choose:"you want theory-guided public finance and policy incidence.", avoid:"you want a primarily reduced-form empirical course or need a course explicitly listed in the supplied Public field trio.", connections:"Potential distribution/public complement; handbook field substitution is not assumed.", scores:q(4,3,2,1,4,3,4,3), tags:["public","policy","theory"], sources:["registrar","handbook","research"]
  },
  {
    id:"ECON 37710-1", num:"37710", title:"Economics of Healthcare (PhD)", field:"Public economics", kind:"Credit course", instructor:"Joshua Gottlieb", status:"Open · ECON 8/18; total 10/18", consent:"PhD or Harris MACRM; otherwise consent", cross:"PPHA 48050", units:100,
    time:"Tue 9:30–12:20", location:"Keller 2054", meetings:[meeting("Tue","09:30","12:20")],
    official:"Graduate health-economics research course; the official Fall 2026 course page is current, but its linked syllabus is from Fall 2025.", prep:"PhD or Harris MACRM standing, or instructor consent. Graduate microeconomics and econometrics are practical preparation.",
    assessment:"Recent prior offering only (Fall 2025): weekly six-slide paper summaries with randomized presentations; 3–5 page referee report; replicable code package with short write-up; CMS data-application research proposal; final presentation. Not confirmed for Autumn 2026.",
    resources:"The prior syllabus links the research literature and emphasizes reproducible code; no distinct current-quarter dataset or software list was public.",
    weekly:"Recent prior offering topics: selection and adverse selection; moral hazard, incidence and choice frictions; payment systems and provider behavior; hospitals; administration, billing, prior authorization, coding and fraud; agglomeration and regional variation; reproducibility; healthcare labor; insurance market structure and Medicare Advantage; student proposals.",
    instructorResearch:"Gottlieb studies health economics, public finance and physician/insurance markets.", choose:"you want a research-production course in empirical health economics and can handle papers, code and presentations.", avoid:"you need current-quarter confirmation of the demanding 2025 assignment structure before planning workload.", connections:"Named Autumn option in the handbook's Public field; strong preparation for empirical RA work and a health/public paper.", scores:q(3,3,5,5,5,5,5,5), tags:["public","health","empirical","code","writing","field"], sources:["registrar","handbook","harris377","syllabus377"]
  },
  {
    id:"ECON 40101-50", num:"40101", title:"Advanced Industrial Organization I", field:"Industrial organization", kind:"Credit course", instructor:"Chad Syverson", status:"Open · ECON 16/22; total 23/44", consent:"PhD only; strict micro and econometrics prerequisites", cross:"BUSN 33921", units:100,
    time:"Thu 8:30–11:30", location:"Harper C01", meetings:[meeting("Thu","08:30","11:30")],
    official:"First Autumn course in the advanced Industrial Organization field sequence.", prep:"BUSN 33001/33101/33002 or ECON 30000/30100/30200, plus PhD econometrics; PhD students only.", assessment:noSyllabus, resources:"No current public syllabus, data or reading list located.", weekly:"No public weekly sequence located.", instructorResearch:"Syverson studies firm and market structure, productivity and industrial organization.", choose:"you want the handbook's IO field sequence and a bridge from models to empirical market analysis.", avoid:"you lack the stated micro/econometrics prerequisites or cannot fit a three-hour Thursday block.", connections:"Required Autumn course for the IO field; high value for structural IO and competition-policy research.", scores:q(4,4,5,4,4,3,5,5), tags:["io","empirical","theory","field"], sources:["registrar","handbook","syverson"]
  },
  {
    id:"ECON 41175-50", num:"41175", title:"Behavioral Economics: Development & Observational Data", field:"Behavioral economics", kind:"Credit course", instructor:"Joshua Dean · Devin Pope", status:"Open · ECON 8/15; total 14/35", consent:"PhD only", cross:"BUSN 38916", units:100,
    time:"Tue 1:30–4:30", location:"Harper 3B", meetings:[meeting("Tue","13:30","16:30")],
    official:"Psychological insights in development and observational-data settings, taught through lectures, discussion and problem sets with the goal of generating original research.", prep:"PhD standing; graduate micro and empirical methods are useful.", assessment:noSyllabus, resources:"No current public reading list, dataset or grading weights located.", weekly:"No public weekly sequence located.", instructorResearch:"Dean works in behavioral and development economics; Pope in behavioral economics, psychology and observational data.", choose:"you want to turn behavioral mechanisms and observational data into an original research idea.", avoid:"you prefer a fully theory-only course or need a public current grading plan.", connections:"Named Autumn course in the Behavioral field; useful for development, labor and applied-micro research.", scores:q(3,3,4,3,4,3,5,4), tags:["behavioral","development","empirical","field"], sources:["registrar","handbook","dean","pope"]
  },
  {
    id:"ECON 42200-1", num:"42200", title:"Advanced Topics in Political Economy: Comparing Societies", field:"Development / political economy", kind:"Credit course", instructor:"James Robinson", status:"Open · ECON 3/18; total 4/18", consent:"Second-year+ PhD target; otherwise consent", cross:"PPHA 41150 · PLSC 41150", units:100,
    time:"Thu 3:00–5:50 by registrar", location:"Keller 0010", meetings:[meeting("Thu","15:00","17:50")],
    official:"Comparative political economy of how societies differ in technology, morality, religion, social structure and their resulting equilibria.", prep:"Designed for second-year and later PhD students; others need consent.",
    assessment:"Current Fall 2026 syllabus: reading summary for each class 25%; participation 25%; research project up to 10 pages 25%; 5–10 minute presentation 25%.",
    resources:"Current syllabus contains the reading list. No dataset or software requirement is stated.", weekly:"Current syllabus sequence begins with introduction/context, technology and innovation, morality/worldviews I–II, religion, social structure and nature, then comparative societal outcomes and student research.",
    instructorResearch:"Robinson works in political economy, institutions, development and comparative historical analysis.", choose:"you want a reading- and discussion-intensive route to a short political-economy research project.", avoid:"you dislike heavy weekly reading/writing or cannot tolerate an unresolved schedule discrepancy.", connections:"Named Development field option in the handbook; useful for institutions, development and political-economy research.",
    warning:"Schedule discrepancy: registrar says Thu 3:00–5:50; Harris page says 3:00–6:00; syllabus says 3:30–6:00. Calendar uses registrar. Verify before enrolling.", scores:q(2,1,2,1,5,5,5,5), tags:["development","political economy","writing","field","schedule warning"], sources:["registrar","handbook","harris422","syllabus422"]
  },
  {
    id:"ECON 42900-1", num:"42900", title:"Innovators", field:"Other / distribution", kind:"Credit course", instructor:"David Galenson", status:"Open · 0/25", consent:"No special consent displayed", cross:"—", units:100,
    time:"Tue/Thu 11:00–12:20", location:"Saieh 141", meetings:[meeting("Tue","11:00","12:20"),meeting("Thu","11:00","12:20")],
    official:"Long-run productivity and innovation, methods and life cycles of innovators across economists, scientists, entrepreneurs and artists.", prep:"No prerequisite displayed in the Autumn 2026 registrar. Older catalog material mentioned ECON 20100; treat that only as background and verify.", assessment:noSyllabus, resources:"No current public reading list or grading plan located.", weekly:"No public weekly sequence located.", instructorResearch:"Galenson studies economic history, innovation and creative careers.", choose:"you want a broad, qualitative view of innovation and creative careers.", avoid:"you need a mathematically or empirically intensive PhD field course; it also conflicts exactly with ECON 33502.", connections:"Possible general-distribution course, subject to program approval and fit.", scores:q(1,1,1,1,5,4,2,3), tags:["innovation","history","writing"], sources:["registrar","catalog"]
  },
  {
    id:"ECON 49700", num:"49700", title:"Required Research Seminar", field:"Third-year research", kind:"Credit course", instructor:"Deshpande/Hortaçsu · Adao/Rossi-Hansberg · Nagel/Noel/Zhang", status:"Open across sections · section-level counts vary", consent:"Third-year Economics PhD only", cross:"BUSN 35930 on one section", units:100,
    time:"Sec 01 Mon 9:30–10:50 · Sec 02 Mon 3:00–4:20 · Sec 50 Tue 10:00–11:30", location:"Saieh 419 · Harper 3B", meetings:[],
    official:"Required year-three research seminar supporting the Research Paper Requirement.", prep:"Third-year Economics PhD standing.", assessment:"The handbook requires a final research paper by the end of the summer after year three, graded P (A allowed for outstanding work). Section-level current assessment details were not public.", resources:"No public section syllabus or shared research template located.", weekly:"No public weekly sequence located.", instructorResearch:"Sections span applied micro/IO, trade/spatial and finance faculty.", choose:"you are in year three and need the required research-paper structure and faculty feedback.", avoid:"you are not yet in the third-year cohort.", connections:"Directly tied to the Research Paper Requirement and progress into dissertation work.", scores:q(3,3,3,3,4,5,5,5), tags:["required","research","writing","third year"], sources:["registrar","handbook"]
  }
];

const autumn2026Workshops = [
  ["ECON 50000","Workshop in Economic Theory","Brooks · McClellan · Root","Tue 3:30–4:50","Saieh 112","0/30","Economic theory","0"],
  ["ECON 50200","Economic Theory Discussion Group","Brooks","Wed 11:00–12:00","Saieh 419","0/20","Economic theory","0"],
  ["ECON 50300","Becker Applied Economics Workshop","Greenstone · Mogstad","Mon 3:00–5:00","Saieh 146","1/60","Applied micro","0"],
  ["ECON 51200","Econometrics Workshop","Torgovitsky","Tue 2:00–3:15","Saieh 112","3/30","Econometrics","0"],
  ["ECON 51400 / BUSN 41600","Economics & Statistics Colloquium","Deb · Munro","Thu 1:20–2:30","Harper 3B","ECON 1/15 · total 9/30","Econometrics","100"],
  ["ECON 51800","Applied Econometrics Reading Group","Mogstad","Fri 8:30–11:00","Saieh 101","1/10","Econometrics","0"],
  ["ECON 53000 / BUSN 33630","Money & Banking Workshop","Alvarez · Hansen · Kaplan · Rossi-Hansberg · Shimer","Wed 3:00–5:30","Saieh 146","5/60","Macro/finance","0"],
  ["ECON 54300 / BUSN 33610","Applied Economics Workshop","Bertrand · McClellan","Wed 1:30–2:50","Harper 3B","ECON 0/15 · total 10/32","Applied micro","100"],
  ["ECON 55600 / BUSN 35600","Finance Seminar","Sarkar · Zingales","Tue 1:20–2:50","Harper C03","ECON 0/15 · total 11/30","Finance","100"],
  ["ECON 56100 / PPHA 56100 / PLSC 55300","Political Economy Workshop","Staff","Thu 12:30–1:50","Keller 2112","0/40 · consent","Political economy","0"],
  ["ECON 57000 / BUSN 33650","Macro & International Workshop","Brinatti","Mon 12:00–1:15","Harper C10","ECON 3/15 · total 4/30","Macro/trade","100"],
  ["ECON 59000","Applications of Economics Workshop","Akcigit · Mulligan","Tue 3:30–4:50","Saieh 021","1/60","Applied economics","0"],
  ["ECON 59900","Thesis Preparation","Staff","TBA","TBA","0/10","Dissertation","100"],
  ["ECON 60200","Applied Microeconomics Working Group","Deshpande · Greenstone · Mogstad","Mon 12:00–1:20","Saieh 203","0/40 · consent","Applied micro","0"],
  ["ECON 60250","Student Applied Micro Working Group","Staff","Wed 12:30–1:20","Saieh 203","0/30 · consent","Applied micro","0"],
  ["ECON 60310","Economics Dynamics Working Group","Hansen","Wed 10:00–11:00","Saieh 247","0/30 · consent","Macro/dynamics","0"],
  ["ECON 60400","Economic Theory Working Group","Brooks","Thu 1:00–2:00","Saieh 419","0/20","Economic theory","0"],
  ["ECON 60600","Capital Theory Working Group","Alvarez · Golosov · Rossi-Hansberg · Shimer","Tue 12:30–1:50","Saieh 112","3/30","Macro theory","0"],
  ["ECON 60900","Applied Macro Theory Working Group","Alvarez","Wed 12:30–1:30","Saieh 419","3/20","Macro","0"],
  ["ECON 61100","Industrial Organization Working Group","Hortaçsu","Mon 12:00–1:00","Saieh 103","0/25","IO","0"],
  ["ECON 61300","EPIC Working Group","Greenstone","Tue 12:30–1:50","Saieh 146","0/60 · consent","Environmental/policy","0"],
  ["ECON 61400","Econometrics Working Group","Shaikh · Torgovitsky","Tue 12:30–1:50","Saieh 103","0/30 · consent","Econometrics","0"],
  ["ECON 61500","International Trade Working Group","Dingel · Rossi-Hansberg","Fri 12:00–1:00","Saieh 112","6/25","Trade","0"],
  ["ECON 61900","Development Economics Working Group","Karing","Fri 10:30–12:20","Saieh 103","0/16 · consent","Development","0"],
  ["ECON 63100","Macroeconomics Reading Group","Kaplan","Tue 5:30–7:00","Saieh 112","18/20","Macro","0"]
].map(([id,title,instructor,time,location,status,field,units])=>({id,title,instructor,time,location,status,field,units,source:"registrar"}));

const requirements = [
  {group:"First year", id:"camp-math", label:"Attend Mathematical Methods camp (strongly encouraged; optional)"},
  {group:"First year", id:"camp-code", label:"Attend Computational Methods camp (strongly encouraged; optional)"},
  {group:"First year", id:"core-price", label:"Complete Price Theory 30100–30300 for quality grades"},
  {group:"First year", id:"core-metrics", label:"Complete Quantitative Methods 31000–31200 for quality grades"},
  {group:"First year", id:"core-macro", label:"Complete Theory of Income 33000–33200 for quality grades"},
  {group:"First year", id:"core-exam", label:"Pass all three core-exam components within two attempts"},
  {group:"Second year", id:"field-1", label:"Declare and complete specialized field 1"},
  {group:"Second year", id:"field-2", label:"Declare and complete specialized field 2"},
  {group:"Second year", id:"field-declare", label:"Submit field declarations by end of Spring year 2"},
  {group:"Distribution", id:"dist-1", label:"Complete distribution course 1 outside both fields (C− or better)"},
  {group:"Distribution", id:"dist-2", label:"Complete distribution course 2 outside both fields (C− or better)"},
  {group:"Distribution", id:"dist-3", label:"Complete distribution course 3 outside both fields (C− or better)"},
  {group:"Research", id:"workshop", label:"Attend at least one workshop/working group regularly from year 2"},
  {group:"Research", id:"rpr", label:"Complete ECON 49700–49900 and final Research Paper by end of summer year 3"},
  {group:"Research", id:"advisor", label:"Secure thesis adviser before Autumn year 4"},
  {group:"Research", id:"committee", label:"Form 3+ member committee before Winter year 4 (≥1 Economics faculty)"},
  {group:"Research", id:"proposal", label:"Pass dissertation proposal by end of Spring year 4"},
  {group:"Teaching", id:"mte", label:"Earn 5 MTE teaching points during years 2–5"},
  {group:"Teaching", id:"training", label:"Complete year-2 teaching training"},
  {group:"Completion", id:"defense", label:"Publicly defend and submit dissertation by end of year 6"}
];

const fieldRules = [
  ["Behavioral","ECON 41175 (Autumn), 41120 (Spring), plus chair-approved third course."],
  ["Development","Choose 3: 35600 (Autumn), 42200 (Autumn), 35610 (Winter), 35570 (Spring). 35600 is cancelled in Autumn 2026."],
  ["Econometrics & Statistics","Choose 3: handbook lists 31720 (Autumn), 31703 (Winter), 31715 and 31730 (Spring). Autumn 2026 instead offers 31715; confirm current field credit."],
  ["Financial Economics","One field: 3 courses including Asset Pricing I–II or Corporate Finance I–II plus an elective. Two fields: all four plus two electives."],
  ["Industrial Organization","40101 (Autumn), 40201 (Winter), 40301 (Spring)."],
  ["Labor","34400 and 35003 (Autumn), 34701 (Winter)."],
  ["Macroeconomics","33502 (Autumn), 33540 (Winter), 38001 (Spring)."],
  ["Mathematical Economics","Choose 3: 30680 (Autumn), 30501 and 30540 (Winter), 40603 (Spring)."],
  ["Public Economics","Both departmental courses 36000 (Winter) and 36820 (Spring), plus one approved option such as 37710 (Autumn) or 36330 (Winter)."],
  ["Trade & Growth","Choose 3: 35101 (Autumn), 33530 and 33550 (Winter), 35310 (Spring)."],
  ["Other","Submit a DGS-approved plan by the end of Autumn quarter."]
];

const autumn2026Portfolios = [
  {name:"First-year core", goal:"Required foundation", courses:["ECON 30100-1","ECON 31000-1","ECON 33000-1"], note:"The canonical year-one load. Camps occur before quarter. High intensity, but no primary-time conflicts."},
  {name:"Macro + finance", goal:"PhD preparation", courses:["ECON 33502-1","ECON 35050-50","ECON 35101-50"], note:"Theory- and math-heavy; Monetary, Asset Pricing and Trade blocks do not overlap. Asset Pricing and Trade are closed."},
  {name:"Empirical applied micro", goal:"RA and dissertation pipeline", courses:["ECON 34460-1","ECON 37710-1","ECON 40101-50"], note:"Labor/public, health and IO. Coding/reading burden is likely very high even though times fit."},
  {name:"Policy", goal:"Public and health", courses:["ECON 34460-1","ECON 36200-1","ECON 37710-1"], note:"Broad policy menu. Thursday Public Sector ends ten minutes before Public/Labor; treat the transition as tight."},
  {name:"Theory frontier", goal:"Theory research", courses:["ECON 30680-50","ECON 31715-1","ECON 40101-50"], note:"Information, identification and IO. Extremely technical; 31715 is closed and its field-credit status needs confirmation."},
  {name:"Development + institutions", goal:"Broad research exploration", courses:["ECON 41175-50","ECON 42200-1"], note:"Behavioral development plus comparative political economy. Add the Development workshop if admitted; 35600 is cancelled."},
  {name:"Lighter exploration", goal:"Reading-led breadth", courses:["ECON 32000-1","ECON 42900-1"], note:"Economic history and innovation; lighter technically, but likely reading/writing intensive. Not a substitute for field cores."}
];

const autumn2026Dates = [
  ["Aug 24, 2026","Graduate Autumn schedule published"],
  ["Aug 31–Sep 18","ECON 30400 mathematical camp"],
  ["Sep 21, 8:30 a.m.","Graduate Autumn registration opens"],
  ["Sep 21–25","ECON 30450 computational camp"],
  ["Sep 28–Dec 12","Ordinary Autumn 2026 course window"],
  ["Nov 2","Winter 2027 graduate schedule published"],
  ["Nov 16","Winter 2027 graduate registration opens"],
  ["Nov 30–Dec 4","Winter graduate registration temporarily closed"],
  ["Dec 4, 5:00 p.m.","Winter graduate registration reopens"]
];

// Add future quarters here. The interface and calendar read only from this
// registry, so a new quarter does not require changes to app.js or index.html.
const courseTerms = {
  "autumn-2026": {
    id:"autumn-2026",
    label:"Autumn 2026",
    university:"University of Chicago",
    snapshot:"Sep 27, 2026 CT",
    updated:AUTUMN_2026_UPDATED,
    description:"The supplied handbook is for 2025–26, while course availability is from the live Autumn 2026 public registrar. Every claim below is tagged by freshness; prior syllabi and workload judgments are never presented as current fact.",
    planningFlags:[
      "<b>ECON 35600</b> is cancelled.",
      "<b>ECON 31715</b> is closed and does not match the handbook's Autumn econometrics field number.",
      "<b>ECON 42200</b> has conflicting official start times; the calendar uses the registrar."
    ],
    publishedPlan:{
      updated:null,
      note:"No shared plan has been published yet.",
      courseIds:[]
    },
    metrics:{screened:93,research:21,workshops:25,syllabi:2},
    courses:autumn2026Courses,
    workshops:autumn2026Workshops,
    portfolios:autumn2026Portfolios,
    dates:autumn2026Dates,
    sources:autumn2026Sources
  }
};

const courseTermOrder = ["autumn-2026"];
