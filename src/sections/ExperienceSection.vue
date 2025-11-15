<template>
  <section id="experience" class="experience-section" data-scroll-section>
    <div class="parallax-layer layer-1" data-scroll data-scroll-speed="1"></div>
    <div class="parallax-layer layer-2" data-scroll data-scroll-speed="2"></div>
    <div class="experience-wrapper">
      <div id="title-text">
        <h3>PROFESSIONAL JOURNEY</h3>
        <h1>
          EXPERIENCE &<br>
          CERTIFICATIONS
        </h1>
      </div>
      
      <div id="items-list">
        <div v-for="(item, index) in allItems" 
             :key="index" 
             class="exp-item"
             :class="{ 'align-right': index % 2 === 0, 'align-left': index % 2 !== 0 }">
          <v-icon :icon="item.icon" class="exp-icon" :color="item.iconColor"></v-icon>
          <span class="exp-type">{{ item.type }}</span>
          <h2>{{ item.title }}</h2>
          <h3>{{ item.organization }} - {{ item.period }}</h3>
          <p v-if="item.description" class="exp-description">{{ item.description }}</p>
          <div v-if="item.skills" class="exp-skills">
            <span v-for="(skill, idx) in item.skills" :key="idx" class="skill-badge">
              {{ skill }}
            </span>
          </div>
          <a v-if="item.certificate" :href="item.certificate" target="_blank" class="certificate-link">
            View Certificate →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const allItems = ref([
  // Experiences
  {
  type: 'EXPERIENCE',
  icon: 'mdi-briefcase',
  iconColor: '#FF7043',
  title: 'AICTE & VOIS Conversational Data Analysis with LLMs - Internship',
  organization: 'Vodafone Idea Foundation (VOIS) & Edunet Foundation',
  period: 'September 2025 - October 2025',
  description: 'Completed a virtual internship focused on Conversational Data Analysis using Large Language Models, including data preprocessing, prompt engineering, conversational AI workflows, and real-world LLM application development through the AICTE-VOIS University Engagement Program.',
  skills: ['Conversational AI','Large Language Models (LLMs)','Prompt Engineering','Data Analysis','AI Project Workflows'],
  certificate: 'https://drive.google.com/file/d/1Ne-9xlU9tSWy4aW_JU31Gh504-fSHkY4/view?usp=drive_link'
  },
  {
    type: 'EXPERIENCE',
    icon: 'mdi-web',
    iconColor: '#00ACC1',
    title: 'Front-End Web Development Intern',
    organization: 'AICTE & Edunet Foundation (IBM SkillsBuild)',
    period: 'Aug 2025 - Sep 2025',
    description: 'Completed a 6-week Front-End Web Development Internship. Developed the Weather Dashboard PWA with Vue 3 + Vite, Pinia state management, and Tailwind CSS. Integrated Workbox for PWA features and deployed on Vercel with performance optimization.',
    skills: ['Vue.js 3', 'Vite', 'Pinia', 'Tailwind CSS', 'PWA', 'Vuetify', 'API Integration'],
    certificate: 'https://drive.google.com/file/d/1pIKELiyFYxYjItHQca_N5L2kXp2445e0/view?usp=drive_link'
  },
  {
    type: 'EXPERIENCE',
    icon: 'mdi-brain',
    iconColor: '#AB47BC',
    title: 'AI Intern',
    organization: 'TechSaksham (Microsoft & SAP)',
    period: 'Jan 2025 - Feb 2025',
    description: 'Gained hands-on experience in AI technologies, working on an independent project with structured mentorship. Participated in technical sessions, knowledge-sharing events, and an industry showcase to demonstrate AI applications.',
    skills: ['AI/ML', 'Python', 'Machine Learning'],
    certificate: 'https://drive.google.com/file/d/1iid24vDAjezCkWMGb5JIX-NCbZe0fF2i/view?usp=drive_link'
  },
  {
    type: 'EXPERIENCE',
    icon: 'mdi-robot',
    iconColor: '#66BB6A',
    title: 'AI & Prompt Engineering Trainee',
    organization: 'IBM SkillsBuild',
    period: 'Dec 2024',
    description: 'Gained practical experience in Prompt Engineering, focusing on optimizing AI interactions and responses. Engaged in hands-on exercises to develop AI-driven applications and improve machine learning model outputs.',
    skills: ['Prompt Engineering', 'AI Optimization', 'LLMs', 'Machine Learning'],
    certificate: 'https://drive.google.com/file/d/1bYDIsHBgSPjY6QFaDyM4oDBZIFjmycUD/view?usp=drive_link'
  },
  
  // Certifications
  {
  type: 'CERTIFICATION',
  icon: 'mdi-robot',
  iconColor: '#AB47BC',
  title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
  organization: 'Oracle',
  period: 'October 2025',
  description: 'Completed professional-level certification demonstrating advanced knowledge of Generative AI, LLM optimization, fine-tuning, embeddings, vector databases, and applied prompt engineering within OCI.',
  skills: ['Generative AI','LLM Optimization','Fine-Tuning','Embeddings & Vector Databases','Advanced Prompt Engineering'],
  certificate: 'https://drive.google.com/file/d/1DZoYVUfhdsvHAWqkxZD1bSNMftaApFpo/view?usp=drive_link'
  },
  {
  type: 'CERTIFICATION',
  icon: 'mdi-certificate',
  iconColor: '#42A5F5',
  title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
  organization: 'Oracle',
  period: 'September 2025',
  description: 'Demonstrated foundational knowledge of Artificial Intelligence, Machine Learning, cloud-based AI services, prompt engineering fundamentals, and responsible AI principles within Oracle Cloud Infrastructure.',
  skills: ['Artificial Intelligence','Machine Learning Fundamentals','Prompt Engineering','Responsible AI','Cloud AI Services'],
  certificate: 'https://drive.google.com/file/d/11oHhKfzNJqpXLVD8iKHbU-m9GPKzjBTG/view?usp=drive_link'
  },
  {
    type: 'CERTIFICATION',
    icon: 'mdi-robot-industrial',
    iconColor: '#26C6DA',
    title: 'Artificial Intelligence Fundamentals',
    organization: 'IBM SkillsBuild',
    period: 'Dec 2024',
    description: 'Completed IBM SkillsBuild\'s "Artificial Intelligence Fundamentals," gaining a solid foundation in AI concepts. Covered machine learning basics, neural networks, real-world applications, and ethical considerations in AI.',
    skills: ['Artificial Intelligence', 'Machine Learning Fundamentals', 'Neural Networks', 'AI Ethics & Applications'],
    certificate: 'https://drive.google.com/file/d/1rojTkMVl3EKFFqnEk7KWgrapwIAaDetr/view?usp=drive_link'
  },
  {
    type: 'CERTIFICATION',
    icon: 'mdi-creation',
    iconColor: '#EC407A',
    title: 'Generative AI in Action',
    organization: 'IBM SkillsBuild',
    period: 'Dec 2024',
    description: 'Completed IBM SkillsBuild\'s "Generative AI in Action," exploring the principles and use cases of generative models. Gained insights into large language models (LLMs), prompt engineering, and real-world AI content generation.',
    skills: ['Generative AI', 'Large Language Models (LLMs)', 'Prompt Engineering', 'AI Content Generation'],
    certificate: 'https://drive.google.com/file/d/14YSH30RwwMr9mScNp_0BP3Rm27pgWazf/view?usp=drive_link'
  },
  {
    type: 'CERTIFICATION',
    icon: 'mdi-responsive',
    iconColor: '#00D084',
    title: 'Responsive Web Design',
    organization: 'freeCodeCamp',
    period: 'Dec 2024',
    description: 'Completed the freeCodeCamp "Responsive Web Design" certification with 300+ hours of hands-on practice. Built responsive, mobile-friendly web pages using HTML5, CSS3, Flexbox, and Grid.',
    skills: ['Responsive Web Design', 'HTML5 & CSS3', 'Flexbox & CSS Grid', 'Web Accessibility'],
    certificate: 'https://drive.google.com/file/d/1V4HIujLK7ntaxou6p0DCrbVJ_2WZ_uqA/view?usp=drive_link'
  },
  {
    type: 'CERTIFICATION',
    icon: 'mdi-code-braces',
    iconColor: '#42A5F5',
    title: 'Software Engineer (Job Simulation)',
    organization: 'J.P. Morgan Chase & Co.',
    period: 'June 2024',
    description: 'Developed and tested code in a simulated corporate setting. Solved practical software challenges using industry-standard tools and AI problem-solving techniques.',
    skills: ['Software Development', 'Problem Solving', 'Testing'],
    certificate: 'https://drive.google.com/file/d/1UOaZcBZU1cJJG-wSfU-tntxqLWt_irq7/view?usp=drive_link'
  },
  {
    type: 'CERTIFICATION',
    icon: 'mdi-server-network',
    iconColor: '#78909C',
    title: 'Computer Networks and Internet Protocol',
    organization: 'IIT Kharagpur',
    period: 'April 2024',
    description: 'Completed NPTEL\'s Computer Networks and Internet Protocol course (12 weeks) with Elite certification from IIT Kharagpur. Gained core skills in network architecture, IP addressing, and routing protocols.',
    skills: ['Computer Networks', 'Internet Protocols', 'IP Addressing', 'Routing Techniques'],
    certificate: 'https://drive.google.com/file/d/1-cA5PQz2tIGia90XL6Mv9fc2xm9Qdfjf/view?usp=drive_link'
  },
  {
    type: 'CERTIFICATION',
    icon: 'mdi-cloud',
    iconColor: '#4285F4',
    title: 'Generative AI with Google Cloud',
    organization: 'Google Cloud',
    period: 'Nov 2023',
    description: 'Foundation-level certification in Google Cloud Platform services, deployment, cloud architecture, and cloud computing concepts.',
    skills: ['Google Cloud', 'Cloud Architecture', 'DevOps', 'Cloud Computing'],
    certificate: 'https://drive.google.com/file/d/17Xvk7F1u8qLla9Np_DDuBriLb_IzBUtm/view?usp=drive_link'
  }
])
</script>

<style scoped>
/* Desktop-only styles (1024px+) */
.experience-section {
  width: 100vw;
  z-index: 1;
  padding: 6rem 10%;
  overflow: hidden;
  background: 
    radial-gradient(at 0% 0%, rgba(255, 140, 107, 0.15) 0px, transparent 50%),
    radial-gradient(at 80% 0%, rgba(138, 180, 248, 0.15) 0px, transparent 50%),
    radial-gradient(at 40% 100%, rgba(165, 142, 251, 0.15) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(253, 186, 116, 0.15) 0px, transparent 50%),
    #f1f1f1;
}

.parallax-layer {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.3;
}

.layer-1 {
  top: 10%;
  left: 10%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.layer-2 {
  bottom: 10%;
  right: 10%;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.experience-wrapper {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
}

#title-text {
  width: 100%;
}

#title-text h3 {
  font-weight: 400;
  color: #7c7c7c;
  font-size: 18px;
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
}

#title-text h1 {
  line-height: 1.5;
  font-size: 50px;
  font-weight: 700;
  color: #000;
}

#items-list {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.exp-item {
  margin-bottom: 3rem;
  max-width: 50%;
  width: 100%;
}

.exp-item:last-child {
  margin-bottom: 0;
}

.exp-item.align-right {
  text-align: end;
  margin-left: auto;
}

.exp-item.align-left {
  text-align: start;
  margin-right: auto;
}

.exp-icon {
  font-size: 48px !important;
  margin-bottom: 1rem;
  opacity: 0.9;
  transition: all 0.3s ease;
}

.exp-item:hover .exp-icon {
  opacity: 1;
  transform: scale(1.1);
}

.exp-type {
  display: inline-block;
  font-size: 13px;
  color: #666;
  background: rgba(0, 0, 0, 0.08);
  padding: 0.4rem 0.9rem;
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 600;
  border-radius: 40px;
}

.exp-item h2 {
  font-size: 32px;
  line-height: 1.4;
  font-weight: 700;
  color: #000;
  margin-bottom: 0.75rem;
}

.exp-item h3 {
  color: #7c7c7c;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 1rem;
}

.exp-description {
  color: #555;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.exp-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.25rem;
}

.exp-item.align-right .exp-skills {
  justify-content: flex-end;
}

.exp-item.align-left .exp-skills {
  justify-content: flex-start;
}

.skill-badge {
  display: inline-block;
  font-size: 13px;
  color: #000;
  background: rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0.4rem 0.85rem;
  border-radius: 40px;
  letter-spacing: 0.03em;
  font-weight: 500;
  transition: all 0.3s;
}

.skill-badge:hover {
  background: rgba(0, 0, 0, 0.15);
  border-color: rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

.certificate-link {
  display: inline-block;
  color: #1976D2;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s;
}

.certificate-link:hover {
  color: #1565C0;
  text-decoration: underline;
}
</style>
