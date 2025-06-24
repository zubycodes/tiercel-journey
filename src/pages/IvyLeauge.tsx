import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

import {
  Book,
  Speaker,
  Pen,
  Headphones,
  Target,
  Star,
  Clock,
  Globe,
  Menu
} from 'lucide-react';
const IvyLeague = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = sectionRef.current?.querySelectorAll(".reveal");
          elements?.forEach((el) => {
            el.classList.add("active");
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (

    <div className="overflow-x-hidden">
      <Navbar />
      <section
        ref={sectionRef}
        className="min-h-screen">
        <div className="container mx-auto px-4 mt-16 py-16">
          {/* Page Header */}
          <div>
            <h6 className="text-tiercel-red font-semibold mb-2 text-center md:text-left">
              NAVIGATING THE IVY LEAGUE
            </h6>
            <h2 className="section-heading reveal-delay-100 text-center md:text-left">
              Your Guide to the Common App & Ivy League Universities in the USA
            </h2>
            <p className="text-lg text-tiercel-dark/80 mt-4 reveal-delay-200 text-center md:text-left">
              Applying to Ivy League universities is a significant step, and the Common Application is your primary gateway. This guide provides an overview of the Common App, insights into each Ivy League institution, and tips to help you craft a compelling application.
            </p>
          </div>

          {/* What is the Common Application? */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-2xl font-semibold text-tiercel-blue mb-6 reveal-delay-300">
              Understanding the Common Application
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md reveal-delay-400">
                <div className="flex items-start gap-3">
                  {/* Placeholder Icon: CheckCircle or similar */}
                  <svg className="text-tiercel-red shrink-0 mt-1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-tiercel-blue mb-1">Purpose & Simplicity</h4>
                    <p className="text-sm text-tiercel-dark/70">
                      The Common App streamlines the application process, allowing you to apply to multiple colleges using one core application, saving time and effort.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md reveal-delay-500">
                <div className="flex items-start gap-3">
                  {/* Placeholder Icon: CheckCircle or similar */}
                  <svg className="text-tiercel-red shrink-0 mt-1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-tiercel-blue mb-1">How It Works</h4>
                    <p className="text-sm text-tiercel-dark/70">
                      You'll complete general sections (profile, family, education, activities, personal essay) once, and then submit college-specific supplements and questions for each institution.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md reveal-delay-600">
                <div className="flex items-start gap-3">
                  {/* Placeholder Icon: CheckCircle or similar */}
                  <svg className="text-tiercel-red shrink-0 mt-1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-tiercel-blue mb-1">Key Benefits</h4>
                    <p className="text-sm text-tiercel-dark/70">
                      Provides comprehensive resources, guidance, essay prompts, and access initiatives, making college applications more accessible and equitable for students.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Ivy League Universities */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-2xl font-semibold text-tiercel-blue mb-3 reveal">
              Meet the Ivy League
            </h3>
            <p className="text-md text-tiercel-dark/80 mb-8 reveal-delay-100">
              The Ivy League is a group of eight highly selective private research universities in the Northeastern United States, renowned for their academic excellence, historic campuses, and significant contributions to research and global leadership.
            </p>

            <div className="space-y-10">
              {/* Brown University */}
              <div className="bg-white p-6 rounded-lg shadow-md reveal-delay-200">
                <h4 className="text-xl font-semibold text-tiercel-red mb-3">Brown University</h4>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Location:</strong> Providence, Rhode Island<br />
                  <strong>Founded:</strong> 1764, known for admitting students regardless of religious affiliation early in its history.
                </p>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Academic Focus:</strong> Famous for its student-centric Open Curriculum, allowing undergraduates to design their own course of study from over 80 concentrations. Emphasizes independent thought and intellectual exploration.
                </p>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Campus Vibe:</strong> A supportive, collaborative, and intellectually vibrant community with numerous student-run identity and cultural centers. Offers unique programs like the Brown-RISD Dual Degree. Strong focus on undergraduate research and social impact.
                </p>
                <p className="text-sm text-tiercel-dark/70">
                  <strong>Applying:</strong> Primarily uses the Common Application for traditional first-year students. Requires supplemental essays (typically 3 essays of 200-250 words and a few short answers) focusing on the Open Curriculum, community contributions, and personal interests.
                </p>
              </div>

              {/* Columbia University */}
              <div className="bg-white p-6 rounded-lg shadow-md reveal-delay-300">
                <h4 className="text-xl font-semibold text-tiercel-red mb-3">Columbia University</h4>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Location:</strong> New York City, New York<br />
                  <strong>Founded:</strong> 1754 as King's College. A leading research university with a rich history of innovation.
                </p>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Academic Focus:</strong> Comprises Columbia College (liberal arts), Fu Foundation School of Engineering and Applied Science, and the School of General Studies. Renowned for its Core Curriculum, exposing all undergraduates to a wide range of foundational texts and disciplines.
                </p>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Campus Vibe:</strong> Dynamic and diverse, deeply integrated with the energy and resources of NYC. Offers a global perspective through various international programs, a diverse student body, and over 500 student groups.
                </p>
                <p className="text-sm text-tiercel-dark/70">
                  <strong>Applying:</strong> Accepts the Common Application, Coalition Application, and QuestBridge Application. Features distinctive supplemental essays (usually list questions and several short essays around 150 words) that probe intellectual curiosity, fit with Columbia's urban setting, and academic interests.
                </p>
              </div>

              {/* Cornell University */}
              <div className="bg-white p-6 rounded-lg shadow-md reveal-delay-400">
                <h4 className="text-xl font-semibold text-tiercel-red mb-3">Cornell University</h4>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Location:</strong> Ithaca, New York<br />
                  <strong>Founded:</strong> 1865 with the vision "any person can find instruction in any study." A unique private university with a public land-grant mission.
                </p>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Academic Focus:</strong> Offers a vast range of programs across its seven undergraduate colleges and schools, from arts and sciences to engineering, agriculture, and hotel administration. Emphasizes research, public engagement, and hands-on learning.
                </p>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Campus Vibe:</strong> A large, diverse campus with over 1,000 student organizations, rich traditions (like Dragon Day & Slope Day), and a strong sense of community within its residential colleges. Set in a beautiful natural landscape.
                </p>
                <p className="text-sm text-tiercel-dark/70">
                  <strong>Applying:</strong> Uses the Common Application. Requires a Cornell-specific Writing Supplement with prompts (essay length varies, typically one main essay up to 650 words depending on the college) tailored to the undergraduate college/school to which the student is applying.
                </p>
              </div>

              {/* Dartmouth College */}
              <div className="bg-white p-6 rounded-lg shadow-md reveal-delay-500">
                <h4 className="text-xl font-semibold text-tiercel-red mb-3">Dartmouth College</h4>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Location:</strong> Hanover, New Hampshire<br />
                  <strong>Founded:</strong> 1769. A liberal arts college with a strong focus on undergraduate education.
                </p>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Academic Focus:</strong> Renowned for its commitment to undergraduate teaching, close student-faculty interaction, and the Dartmouth Plan (D-Plan), which offers year-round, flexible academic scheduling. Encourages research and global experiences.
                </p>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Campus Vibe:</strong> Strong sense of community, fostered by its rural setting, house communities, and traditions like the Dartmouth Outing Club and vibrant Greek life. Offers a blend of intellectual rigor and outdoor adventure.
                </p>
                <p className="text-sm text-tiercel-dark/70">
                  <strong>Applying:</strong> Accepts the Common Application and QuestBridge Application. Requires the Dartmouth Writing Supplement (usually 1 short essay up to 100 words and 2 essays up to 250 words each) which includes prompts about personal fit and intellectual curiosity. A peer recommendation is also an option.
                </p>
              </div>

              {/* Harvard University */}
              <div className="bg-white p-6 rounded-lg shadow-md reveal-delay-600">
                <h4 className="text-xl font-semibold text-tiercel-red mb-3">Harvard University</h4>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Location:</strong> Cambridge, Massachusetts<br />
                  <strong>Founded:</strong> 1636, the oldest institution of higher learning in the United States.
                </p>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Academic Focus:</strong> Offers a rich liberal arts and sciences curriculum through Harvard College. Known for its unparalleled academic resources, groundbreaking research opportunities, and distinguished faculty.
                </p>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Campus Vibe:</strong> A historic and vibrant campus with a strong residential House system that fosters community. Offers extensive extracurriculars (over 450 student organizations), from arts and athletics to numerous student organizations, all with a global reach.
                </p>
                <p className="text-sm text-tiercel-dark/70">
                  <strong>Applying:</strong> Accepts the Common Application or the Coalition Application. Requires several short-answer supplemental questions (typically 5 questions, 150 words each) designed to an applicant's personality, intellectual interests, and potential contributions.
                </p>
              </div>

              {/* University of Pennsylvania */}
              <div className="bg-white p-6 rounded-lg shadow-md reveal-delay-700">
                <h4 className="text-xl font-semibold text-tiercel-red mb-3">University of Pennsylvania (UPenn)</h4>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Location:</strong> Philadelphia, Pennsylvania<br />
                  <strong>Founded:</strong> By Benjamin Franklin in the 1740s, emphasizing practical knowledge and public service.
                </p>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Academic Focus:</strong> Unique "One University" policy allows students to take courses across its four undergraduate schools: College of Arts & Sciences, School of Engineering and Applied Science, School of Nursing, and The Wharton School. Strong emphasis on interdisciplinary study, research, and real-world impact.
                </p>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Campus Vibe:</strong> A dynamic urban campus fostering innovation and collaboration. Offers a rich student life with hundreds of clubs, cultural organizations, extensive arts and athletics programs, and a strong sense of community within a bustling city.
                </p>
                <p className="text-sm text-tiercel-dark/70">
                  <strong>Applying:</strong> Accepts the Common Application, Coalition Application, and QuestBridge Application. Requires specific supplemental essays (usually 2-3 essays of 150-200 words) tailored to the chosen undergraduate school and general prompts exploring community and intellectual curiosity.
                </p>
              </div>

              {/* Princeton University */}
              <div className="bg-white p-6 rounded-lg shadow-md reveal-delay-800">
                <h4 className="text-xl font-semibold text-tiercel-red mb-3">Princeton University</h4>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Location:</strong> Princeton, New Jersey<br />
                  <strong>Founded:</strong> 1746 as the College of New Jersey. A world-renowned research university with a strong commitment to undergraduate teaching.
                </p>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Academic Focus:</strong> Grounded in the liberal arts, with a strong emphasis on independent research, culminating in the senior thesis. Encourages close student-faculty interaction and exploration across disciplines.
                </p>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Campus Vibe:</strong> A picturesque campus with a strong sense of tradition and community, including its unique eating clubs and over 500 student organizations. Offers a vibrant intellectual and social environment with cultural centers and civic engagement opportunities.
                </p>
                <p className="text-sm text-tiercel-dark/70">
                  <strong>Applying:</strong> Accepts the Common Application or Coalition Application, as well as QuestBridge. Features Princeton-specific questions (A.B./B.S.E. essays around 250 words; "Your Voice" essays of 500 and 250 words; "More About You" short answers around 50 words). A graded written paper is also required.
                </p>
              </div>

              {/* Yale University */}
              <div className="bg-white p-6 rounded-lg shadow-md reveal-delay-900">
                <h4 className="text-xl font-semibold text-tiercel-red mb-3">Yale University</h4>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Location:</strong> New Haven, Connecticut<br />
                  <strong>Founded:</strong> 1701 as the Collegiate School. One of the oldest and most prestigious universities in the U.S.
                </p>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Academic Focus:</strong> Offers a comprehensive liberal arts education through Yale College. Known for its residential college system, which fosters tight-knit communities. Strong programs across humanities, arts, sciences, and social sciences, with extensive research opportunities.
                </p>
                <p className="text-sm text-tiercel-dark/70 mb-2">
                  <strong>Campus Vibe:</strong> A rich tapestry of academic rigor, artistic expression, and community engagement, deeply rooted in its historic residential college system. Offers a vibrant cultural scene (museums, theater, music) and hundreds of student groups in New Haven.
                </p>
                <p className="text-sm text-tiercel-dark/70">
                  <strong>Applying:</strong> Accepts the Common Application, Coalition Application, and QuestBridge Application. Requires Yale-specific short answer questions (typically several around 35 words each) and essays (one 200-word essay on an academic topic and one 125-word essay on "Why Yale?"). Applicants also choose one of three prompts for a 400-word essay.
                </p>
              </div>
            </div>
          </div>

          {/* Ivy League Admissions Overview */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-2xl font-semibold text-tiercel-blue mb-3 reveal">
              Why So Selective? Understanding Ivy League Admissions
            </h3>
            <p className="text-md text-tiercel-dark/80 mb-6 reveal-delay-100">
              Ivy League schools are among the most selective globally due to their high academic standards, vast applicant pools, limited spots, and a holistic review process that seeks students who will make a significant impact. Below are the approximate overall acceptance rates for the Class of 2028, highlighting the competitive landscape. Early Decision/Action plans often have higher acceptance rates but come with binding or restrictive commitments.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 reveal-delay-200">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h5 className="font-semibold text-tiercel-red text-lg">Brown</h5>
                <p className="text-2xl font-bold text-tiercel-dark">~5.2%</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h5 className="font-semibold text-tiercel-red text-lg">Columbia</h5>
                <p className="text-2xl font-bold text-tiercel-dark">~3.9%</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h5 className="font-semibold text-tiercel-red text-lg">Cornell</h5>
                <p className="text-2xl font-bold text-tiercel-dark">~8.4%</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h5 className="font-semibold text-tiercel-red text-lg">Dartmouth</h5>
                <p className="text-2xl font-bold text-tiercel-dark">~5.4%</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h5 className="font-semibold text-tiercel-red text-lg">Harvard</h5>
                <p className="text-2xl font-bold text-tiercel-dark">~3.6%</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h5 className="font-semibold text-tiercel-red text-lg">UPenn</h5>
                <p className="text-2xl font-bold text-tiercel-dark">~5.4%</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h5 className="font-semibold text-tiercel-red text-lg">Princeton</h5>
                <p className="text-2xl font-bold text-tiercel-dark">~4.6%</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h5 className="font-semibold text-tiercel-red text-lg">Yale</h5>
                <p className="text-2xl font-bold text-tiercel-dark">~3.7%</p>
              </div>
            </div>
            <p className="text-xs text-tiercel-dark/60 mt-3 text-center reveal-delay-300">
              Note: Acceptance rates are approximate for the Class of 2028 and can vary slightly based on reporting sources. Specific data for Common App applicants vs. other methods is generally not publicly detailed. Always check official university announcements for the most current information.
            </p>
          </div>

          {/* Crafting Your Ivy League Application */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-2xl font-semibold text-tiercel-blue mb-6 reveal">
              Crafting Your Ivy League Application via Common App
            </h3>
            <div className="space-y-8">
              {/* Tip 1: Personal Statement */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md reveal-delay-100">
                {/* Placeholder Icon: ShieldCheck or similar for "Ace" */}
                <svg className="text-tiercel-red shrink-0 mt-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path> <path d="m9 12 2 2 4-4"></path>
                </svg>
                <div>
                  <h4 className="font-semibold text-tiercel-blue text-lg mb-1">Ace the Personal Statement</h4>
                  <p className="text-sm text-tiercel-dark/70">This is your chance to share your unique story, voice, and personality. Focus on authenticity, reflection, and a narrative that reveals who you are beyond grades and scores. Show, don't just tell. Choose a topic that is meaningful to you and allows for insight into your character.</p>
                </div>
              </div>

              {/* Tip 2: Supplemental Essays */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md reveal-delay-200">
                {/* Placeholder Icon */}
                <svg className="text-tiercel-red shrink-0 mt-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path> <path d="m9 12 2 2 4-4"></path>
                </svg>
                <div>
                  <h4 className="font-semibold text-tiercel-blue text-lg mb-1">Master the Supplemental Essays</h4>
                  <p className="text-sm text-tiercel-dark/70">Each Ivy League school has specific supplemental essays. Tailor these meticulously. Research each school's unique programs, specific academic offerings, faculty, culture, and values to genuinely answer "Why this school?" and how you'll contribute to their specific community.</p>
                </div>
              </div>

              {/* Tip 3: Extracurricular Activities */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md reveal-delay-300">
                {/* Placeholder Icon */}
                <svg className="text-tiercel-red shrink-0 mt-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path> <path d="m9 12 2 2 4-4"></path>
                </svg>
                <div>
                  <h4 className="font-semibold text-tiercel-blue text-lg mb-1">Showcase Impactful Extracurriculars</h4>
                  <p className="text-sm text-tiercel-dark/70">Focus on depth, leadership, initiative, and genuine passion in a few activities rather than a long list of superficial involvement. Use the Common App Activities section strategically: use strong action verbs, quantify achievements, and detail your contributions and growth. Show impact over mere participation.</p>
                </div>
              </div>

              {/* Tip 4: Letters of Recommendation */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md reveal-delay-400">
                {/* Placeholder Icon */}
                <svg className="text-tiercel-red shrink-0 mt-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path> <path d="m9 12 2 2 4-4"></path>
                </svg>
                <div>
                  <h4 className="font-semibold text-tiercel-blue text-lg mb-1">Secure Strong Letters of Recommendation</h4>
                  <p className="text-sm text-tiercel-dark/70">Choose teachers (typically from 11th grade, in core academic subjects) who know you well as a student and person, and can speak to your intellectual curiosity, growth, work ethic, and character with specific anecdotes. Provide them with a "brag sheet" (resume, key achievements, goals) and give them ample time (at least 4-6 weeks).</p>
                </div>
              </div>

              {/* Tip 5: Additional Information Section */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md reveal-delay-500">
                {/* Placeholder Icon */}
                <svg className="text-tiercel-red shrink-0 mt-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path> <path d="m9 12 2 2 4-4"></path>
                </svg>
                <div>
                  <h4 className="font-semibold text-tiercel-blue text-lg mb-1">Utilize the "Additional Information" Section Wisely</h4>
                  <p className="text-sm text-tiercel-dark/70">This optional section (650-word limit) can be used for crucial context that doesn't fit elsewhere (e.g., explaining a dip in grades due to significant personal circumstances, detailing a major research project, expanding on a key activity if space was limited, or noting any COVID-19 impacts). Be concise, factual, and purposeful. Do not use it as a spillover for another essay.</p>
                </div>
              </div>

              {/* Tip 6: Start Early & Research */}
              <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md reveal-delay-600">
                {/* Placeholder Icon */}
                <svg className="text-tiercel-red shrink-0 mt-1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path> <path d="m9 12 2 2 4-4"></path>
                </svg>
                <div>
                  <h4 className="font-semibold text-tiercel-blue text-lg mb-1">Start Early and Research Thoroughly</h4>
                  <p className="text-sm text-tiercel-dark/70">Give yourself ample time (months, not weeks) for self-reflection, essay writing, revisions, and gathering materials. Deeply research each Ivy League school to understand its distinct identity, academic programs, and campus culture to genuinely articulate your specific "fit" and interest.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Common Mistakes to Avoid */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-2xl font-semibold text-tiercel-blue mb-6 reveal">
              Common Mistakes to Avoid
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Mistake 1 */}
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md reveal-delay-100">
                {/* Placeholder Icon: AlertCircle or similar for "Mistake" */}
                <svg className="text-tiercel-red shrink-0 mt-1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div>
                  <h4 className="font-semibold text-tiercel-blue">Generic Applications</h4>
                  <p className="text-sm text-tiercel-dark/70">Failing to tailor essays and responses to each specific university and its unique qualities. Recycling essays without significant adaptation is a major red flag.</p>
                </div>
              </div>
              {/* Mistake 2 */}
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md reveal-delay-200">
                {/* Placeholder Icon */}
                <svg className="text-tiercel-red shrink-0 mt-1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div>
                  <h4 className="font-semibold text-tiercel-blue">Neglecting Supplementals</h4>
                  <p className="text-sm text-tiercel-dark/70">Giving the Common App personal statement all your attention and rushing or underdeveloping the crucial school-specific supplemental essays.</p>
                </div>
              </div>
              {/* Mistake 3 */}
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md reveal-delay-300">
                {/* Placeholder Icon */}
                <svg className="text-tiercel-red shrink-0 mt-1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div>
                  <h4 className="font-semibold text-tiercel-blue">Superficial Extracurriculars</h4>
                  <p className="text-sm text-tiercel-dark/70">Listing many activities without demonstrating significant, long-term involvement, leadership, initiative, or tangible impact.</p>
                </div>
              </div>
              {/* Mistake 4 */}
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md reveal-delay-400">
                {/* Placeholder Icon */}
                <svg className="text-tiercel-red shrink-0 mt-1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div>
                  <h4 className="font-semibold text-tiercel-blue">Not Demonstrating "Fit"</h4>
                  <p className="text-sm text-tiercel-dark/70">Failing to show genuine, specific interest and articulate clearly why you are a good match for that particular institution's programs, culture, and values.</p>
                </div>
              </div>
              {/* Mistake 5 */}
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md reveal-delay-500">
                {/* Placeholder Icon */}
                <svg className="text-tiercel-red shrink-0 mt-1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div>
                  <h4 className="font-semibold text-tiercel-blue">Typos and Errors</h4>
                  <p className="text-sm text-tiercel-dark/70">Submitting applications with grammatical errors, typos, incorrect information, or careless mistakes. Proofread meticulously multiple times!</p>
                </div>
              </div>
              {/* Mistake 6 */}
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-md reveal-delay-600">
                {/* Placeholder Icon */}
                <svg className="text-tiercel-red shrink-0 mt-1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <div>
                  <h4 className="font-semibold text-tiercel-blue">Last-Minute Rush</h4>
                  <p className="text-sm text-tiercel-dark/70">Waiting until the deadline to complete and submit, leading to increased stress, lower quality work, and potential technical issues or missed deadlines.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Official Resources */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-2xl font-semibold text-tiercel-blue mb-6 reveal">
              Official Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <div className="reveal-delay-100">
                <a href="https://www.commonapp.org/" target="_blank" rel="noopener noreferrer" className="text-tiercel-red hover:text-tiercel-dark font-semibold">
                  The Common Application Official Website
                </a>
                <p className="text-sm text-tiercel-dark/70">The primary source for all Common App related information, deadlines, and support.</p>
              </div>
              <div className="reveal-delay-200">
                <h5 className="font-semibold text-tiercel-blue mb-2">Ivy League Admissions Pages:</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><a href="https://admission.brown.edu/" target="_blank" rel="noopener noreferrer" className="text-tiercel-red hover:text-tiercel-dark">Brown University Admissions</a></li>
                  <li><a href="https://undergrad.admissions.columbia.edu/" target="_blank" rel="noopener noreferrer" className="text-tiercel-red hover:text-tiercel-dark">Columbia University Admissions</a></li>
                  <li><a href="https://admissions.cornell.edu/" target="_blank" rel="noopener noreferrer" className="text-tiercel-red hover:text-tiercel-dark">Cornell University Admissions</a></li>
                  <li><a href="https://admissions.dartmouth.edu/" target="_blank" rel="noopener noreferrer" className="text-tiercel-red hover:text-tiercel-dark">Dartmouth College Admissions</a></li>
                  <li><a href="https://college.harvard.edu/admissions" target="_blank" rel="noopener noreferrer" className="text-tiercel-red hover:text-tiercel-dark">Harvard University Admissions</a></li>
                  <li><a href="https://admissions.upenn.edu/" target="_blank" rel="noopener noreferrer" className="text-tiercel-red hover:text-tiercel-dark">University of Pennsylvania Admissions</a></li>
                  <li><a href="https://admission.princeton.edu/" target="_blank" rel="noopener noreferrer" className="text-tiercel-red hover:text-tiercel-dark">Princeton University Admissions</a></li>
                  <li><a href="https://admissions.yale.edu/" target="_blank" rel="noopener noreferrer" className="text-tiercel-red hover:text-tiercel-dark">Yale University Admissions</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Concluding Message */}
          <div className="mt-12 md:mt-20 text-center reveal-delay-500">
            <p className="text-lg text-tiercel-dark/80">
              Navigating the Ivy League application process can be challenging, but with thorough preparation, genuine self-reflection, and careful attention to detail, you can present your strongest self.
            </p>
            {/* Optional: Add a subtle CTA or link to your services/contact page if desired.
           Make sure the link path (e.g., "/contact") is correct for your website.
       */}
            <p className="mt-4 text-md text-tiercel-blue">
              Need personalized guidance for your Ivy League journey? <a href="/#services" className="font-semibold text-tiercel-red hover:underline">Learn how Tiercel Consulting can empower your application</a>.
            </p>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default IvyLeague;