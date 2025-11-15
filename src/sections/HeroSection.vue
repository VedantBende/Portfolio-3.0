<template>
  <section id="page" class="page" data-scroll-section>
    <!-- Background Video -->
    <div class="video-background">
      <video autoplay muted loop playsinline>
        <source src="/videos/hero-background.mp4" type="video/mp4">
      </video>
      <div class="video-overlay"></div>
    </div>  
    <!-- Content -->
    <div id="loop">
      <h1 v-for="n in 3" :key="n">
        <span>VE<span class="special-letter">D</span>ANT</span> BENDE <span>AI & WEB</span> DEVELOPER.
      </h1>
    </div>
    
    <h3 class="page-subtitle">
      BUILDING INTELLIGENT DIGITAL SOLUTIONS AT THE<br>
      INTERSECTION OF ARTIFICIAL INTELLIGENCE AND<br>
      WEB DEVELOPMENT. MERGING CREATIVITY WITH LOGIC.
    </h3>
    
    <h4 class="scroll-hint">...SCROLL TO READ</h4>
  </section>
</template>

<style scoped>
/* Desktop-only styles (1024px+) */
.page {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  z-index: 1;
  overflow: hidden;
}

/* Video Background */
.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.video-background video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.special-letter {
  font-family: "Inter", sans-serif; /* example font */
  font-weight: 800;                      /* optional */
  -webkit-text-stroke: 1.5px #000;      /* optional outline */
}

/* Content */
#loop {
  display: flex;
  position: absolute;
  top: 30%;
  left: 0;
  height: 25%;
  width: 100%;
  font-size: 150px;
  white-space: nowrap;
  font-family: "Inter Tight", sans-serif;
  font-weight: 800;
  z-index: 2;
  overflow: visible;
}

#loop h1 {
  font-weight: 400;
  animation-name: anim;
  animation-duration: 15s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  margin: 0;
  padding-right: 50px;
  color: #000;
}

#loop h1 span {
  -webkit-text-stroke: 1.2px #000;
  color: transparent;
  font-weight: 500;
}

@keyframes anim {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}

.page-subtitle {
  position: absolute;
  top: 55%;
  left: 5%;
  font-weight: 400;
  color: #000;
  font-size: 18px;
  line-height: 1.6;
  z-index: 2;
  background: rgba(255, 255, 255, 0.95);
  padding: 1.5rem;
  max-width: 700px;
  border-left: 3px solid #000;
}

.scroll-hint {
  position: absolute;
  top: 78%;
  left: 29%;
  font-weight: 500;
  font-size: 20px;
  z-index: 2;
  color: #000;
}
</style>
