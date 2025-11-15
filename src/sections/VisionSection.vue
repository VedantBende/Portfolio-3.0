<template>
  <section id="page1" class="page1" data-scroll-section>
    <div class="parallax-layer layer-1" data-scroll data-scroll-speed="1"></div>
    <div class="parallax-layer layer-2" data-scroll data-scroll-speed="2"></div>
    <div id="right-text">
      <h3>VEDANT BENDE / EXPERTISE</h3>
      <h1>
        AI DEVELOPER<br>
        WEB ENGINEER<br>
        CREATIVE THINKER
      </h1>
    </div>
    
    <div id="left-text">
      <h1>
        BUILD & CREATE<br>
        INNOVATE & DEVELOP<br>
        DELIVER EXCELLENCE
      </h1>
      <h3>..AND MAINTAIN GOOD QUALITY</h3>
    </div>
  </section>
</template>

<style scoped>
/* Desktop-only styles (1024px+) */
.page1 {
  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: 1;
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

#right-text {
  position: absolute;
  top: 30%;
  left: 10%;
  max-width: 45%;
}

#right-text h3 {
  font-weight: 400;
  color: #7c7c7c;
  font-size: 18px;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

#right-text h1 {
  line-height: 1.5;
  font-size: 50px;
  font-weight: 700;
  color: #000;
}

#left-text {
  position: absolute;
  top: 50%;
  right: 10%;
  text-align: end;
  max-width: 45%;
}

#left-text h1 {
  font-size: 50px;
  line-height: 1.5;
  font-weight: 700;
  color: #000;
}

#left-text h3 {
  color: #7c7c7c;
  font-weight: 400;
  font-size: 18px;
  margin-top: 1rem;
  letter-spacing: 0.05em;
}
</style>
