/* ==========================================================================
   PART 7: VANILLA JAVASCRIPT ENGINE — COSMIC INTERACTIVE PARTICLES
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("space-particles");
    const ctx = canvas.getContext("2d");

    let particlesArray = [];
    const numberOfParticles = 80; // Performance aur premium look ka perfect balance

    // 1. Screen Resize Handler
    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // 2. Cosmic Particle Blueprint Blueprint
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5; // Sitare chote aur sharp honge
            this.speedX = (Math.random() * 0.4 - 0.2); // Smooth movement
            this.speedY = (Math.random() * 0.4 - 0.2);
            this.opacity = Math.random() * 0.7 + 0.3;
            this.pulseSpeed = Math.random() * 0.02 + 0.005;
        }

        // Particle Movement Logic
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Screen boundaries wrap around logic
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;

            // Gentle Twinkling/Breathing Effect
            this.opacity += this.pulseSpeed;
            if (this.opacity > 1 || this.opacity < 0.2) {
                this.pulseSpeed = -this.pulseSpeed;
            }
        }

        // Render Particle on Canvas
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            
            // Premium glow backing for brighter stars
            if (this.size > 1.8) {
                ctx.shadowBlur = 10;
                ctx.shadowColor = "#3a86ff";
            } else {
                ctx.shadowBlur = 0;
            }
            
            ctx.fill();
        }
    }

    // 3. Initializing Particle Database
    function init() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }
    init();

    // 4. Infinite Loop Animation Engine
    function animate() {
        // Clear canvas but keep background gradient
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.shadowColor = 'transparent'; // Reset default shadow blur performance ke liye
        
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
});

