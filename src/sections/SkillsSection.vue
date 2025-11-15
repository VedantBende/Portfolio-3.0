<template>
  <section id="page3" class="page3" data-scroll-section>
    <div class="skills-wrapper">
      <div id="title-text">
        <h3>TECHNICAL / EXPERTISE</h3>
        <h1>
          SKILLS &<br>
          TECHNOLOGIES
        </h1>
      </div>
      
      <div id="skills-list">
        <div v-for="(category, index) in skills" 
             :key="index" 
             class="skill-item"
             :class="{ 'align-right': index % 2 === 0, 'align-left': index % 2 !== 0 }">
          <v-icon :icon="category.icon" class="skill-icon" :color="category.color"></v-icon>
          <h2>{{ category.title }}</h2>
          <div class="skill-tags">
            <span v-for="(skill, idx) in category.items" :key="idx" class="skill-tag">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
  {
    icon: 'mdi-web',
    color: '#42A5F5',
    title: 'Web Dev',
    items: [
      'HTML', 'CSS', 'JavaScript', 'React.js', 'Vue.js',
      'MongoDB', 'SQL', 'Node.js', 'Flask',
      'GitHub'
    ]
  },
  {
    icon: 'mdi-brain',
    color: '#AB47BC',
    title: 'AI & ML',
    items: [
      'Artificial Intelligence (AI)', 'Machine Learning', 'Deep Learning',
      'Supervised Learning', 'Unsupervised Learning',
      'Computer Vision', 'NLP', 'Image Processing',
      'CNN', 'OpenCV',
      'PyTorch', 'TensorFlow', 'Keras',
      'Scikit-Learn', 'NumPy', 'Pandas', 'Matplotlib',
      'Feature Engineering'
    ]
  },
  {
    icon: 'mdi-robot',
    color: '#EF5350',
    title: 'AI Ops',
    items: [
      'Prompt Engineering', 'Chatbot Development',
      'Contextual Awareness', 'Iteration & Experimentation',
      'Evaluation & Feedback'
    ]
  },
  {
    icon: 'mdi-cloud-braces',
    color: '#26C6DA',
    title: 'Cloud & DevOps',
    items: [
      'Cloud Computing', 'DevOps', 'Automation',
      'Project Development', 'Technical Research'
    ]
  }
])
</script>

<style scoped>
/* Desktop-only styles (1024px+) */
.page3 {
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 1;
  padding: 6rem 10%;
  overflow: hidden;
}

.skills-wrapper {
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
  color: #999;
  font-size: 18px;
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
}

#title-text h1 {
  line-height: 1.5;
  font-size: 50px;
  font-weight: 700;
  color: #fff;
}

#skills-list {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.skill-item {
  margin-bottom: 3rem;
  max-width: 50%;
  width: 100%;
}

.skill-item:last-child {
  margin-bottom: 0;
}

.skill-item.align-right {
  text-align: end;
  margin-left: auto;
}

.skill-item.align-left {
  text-align: start;
  margin-right: auto;
}

.skill-icon {
  font-size: 48px !important;
  margin-bottom: 1rem;
  opacity: 0.9;
  transition: all 0.3s ease;
}

.skill-item:hover .skill-icon {
  opacity: 1;
  transform: scale(1.1);
}

.skill-item h2 {
  font-size: 32px;
  line-height: 1.4;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.skill-item.align-right .skill-tags {
  justify-content: flex-end;
}

.skill-item.align-left .skill-tags {
  justify-content: flex-start;
}

.skill-tag {
  display: inline-block;
  font-size: 13px;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.4rem 0.9rem;
  border-radius: 40px;
  letter-spacing: 0.05em;
  font-weight: 500;
  transition: all 0.3s;
}

.skill-tag:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}
</style>
