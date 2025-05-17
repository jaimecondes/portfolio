import { useEffect, useRef } from "react";

const Stars = () => {
  const canvasRef = useRef();
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    const numStars = 150;
    let width, height;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function initStars() {
      stars = Array.from({ length: numStars }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 1.0,
        vy: (Math.random() - 0.5) * 1.0,
      }));
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        // Mouse attraction
        if (mouse.current.x !== null && mouse.current.y !== null) {
          const dx = mouse.current.x - star.x;
          const dy = mouse.current.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const influenceRadius = 100;
          if (distance < influenceRadius) {
            const force = (influenceRadius - distance) / influenceRadius;
            const angle = Math.atan2(dy, dx);
            star.vx += Math.cos(angle) * force * 0.05;
            star.vy += Math.sin(angle) * force * 0.05;
          }
        }

        // Natural random drifting continues
        star.x += star.vx;
        star.y += star.vy;

        // Wrap edges
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Gentle velocity decay
        star.vx *= 0.99;
        star.vy *= 0.99;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    resize();
    initStars();
    animate();

    window.addEventListener("mousemove", (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    });

    window.addEventListener("mouseout", () => {
      mouse.current.x = null;
      mouse.current.y = null;
    });

    window.addEventListener("resize", () => {
      resize();
      initStars();
    });

    return () => {
      window.removeEventListener("mousemove", () => {});
      window.removeEventListener("mouseout", () => {});
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-0 w-full h-full"
    />
  );
};

export default Stars;
