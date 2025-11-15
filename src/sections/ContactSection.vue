<template>
  <section id="contact" class="contact-section" data-scroll-section>
    <div class="parallax-layer layer-1" data-scroll data-scroll-speed="1"></div>
    <div class="parallax-layer layer-2" data-scroll data-scroll-speed="2"></div>
    <div class="contact-wrapper">
      <div id="right-text">
        <h3>GET IN TOUCH</h3>
        <h1>
          LET'S<br>
          CONNECT
        </h1>
      </div>
      
      <div id="left-text">
        <div class="contact-item">
          <h3>EMAIL</h3>
          <a href="mailto:vedantbende2121@gmail.com">vedantbende2121@gmail.com</a>
        </div>
        
        <div class="contact-item">
          <h3>SOCIAL LINKS</h3>
          <a href="https://github.com/VedantBende" target="_blank" rel="noopener noreferrer">GITHUB →</a>
          <a href="https://www.linkedin.com/in/vedant-bende-3aa28b2a8/" target="_blank" rel="noopener noreferrer">LINKEDIN →</a>
        </div>
        
        <div class="contact-item">
          <h3>RESUME</h3>
          <a href="/public/resume/Vedant_Bende_Resume.pdf" download>DOWNLOAD RESUME →</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Desktop-only styles (1024px+) */
.contact-section {
  position: relative;
  width: 100vw;
  z-index: 1;
  padding: 6rem 10%;
  overflow: hidden;
  background: 
    radial-gradient(at 0% 100%, rgba(255, 140, 107, 0.15), transparent 50%),
    radial-gradient(at 80% 100%, rgba(138, 180, 248, 0.15), transparent 50%),
    radial-gradient(at 40% 0%, rgba(165, 142, 251, 0.15), transparent 50%),
    radial-gradient(at 100% 0%, rgba(253, 186, 116, 0.15), transparent 50%),
    #f1f1f1;
}

.parallax-layer {
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(80px);
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

.contact-wrapper {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  position: relative;
  z-index: 100000;
}

#right-text {
  width: 100%;
  position: relative;
  z-index: 100001;
}

#right-text h3 {
  font-weight: 400;
  color: #7c7c7c;
  font-size: 18px;
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
}

#right-text h1 {
  line-height: 1.5;
  font-size: 50px;
  font-weight: 700;
  color: #000;
}

#left-text {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  z-index: 100001;
}

.contact-item {
  margin-bottom: 2.5rem;
  text-align: end;
  max-width: 50%;
  width: 100%;
  position: relative;
  z-index: 100002;
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-item h3 {
  color: #7c7c7c;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
}

.contact-item a {
  display: block;
  color: #000;
  text-decoration: none;
  font-size: 22px;
  font-weight: 500;
  transition: opacity 0.3s;
  margin-bottom: 0.65rem;
  line-height: 1.5;
  cursor: pointer;
  pointer-events: auto;
  position: relative;
  z-index: 100003;
}

.contact-item a:hover {
  opacity: 0.6;
}
</style>
