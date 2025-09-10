import React, { useEffect, useRef } from 'react';

const ShaderBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Brand colors
    const colors = [
      '#000000', // Black
      '#a98064', // Brown/Gold
      '#868ca2', // Blue-Gray
      '#6498a0', // Teal
      '#42a4bf'  // Bright Teal
    ];

    let animationId: number;
    let time = 0;

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
    };

    const createGradientMesh = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      // Create multiple radial gradients with brand colors
      const gradients = [];

      // Gradient 1: Teal center
      const grad1 = ctx.createRadialGradient(
        width * 0.2 + Math.sin(time * 0.001) * 100,
        height * 0.3 + Math.cos(time * 0.0008) * 80,
        0,
        width * 0.2 + Math.sin(time * 0.001) * 100,
        height * 0.3 + Math.cos(time * 0.0008) * 80,
        width * 0.4
      );
      grad1.addColorStop(0, colors[4] + '40'); // Bright Teal with opacity
      grad1.addColorStop(0.5, colors[3] + '20'); // Teal with opacity
      grad1.addColorStop(1, 'transparent');
      gradients.push(grad1);

      // Gradient 2: Gold/Brown
      const grad2 = ctx.createRadialGradient(
        width * 0.8 + Math.sin(time * 0.0012) * 120,
        height * 0.2 + Math.cos(time * 0.0015) * 90,
        0,
        width * 0.8 + Math.sin(time * 0.0012) * 120,
        height * 0.2 + Math.cos(time * 0.0015) * 90,
        width * 0.5
      );
      grad2.addColorStop(0, colors[1] + '30'); // Brown/Gold with opacity
      grad2.addColorStop(0.6, colors[1] + '10');
      grad2.addColorStop(1, 'transparent');
      gradients.push(grad2);

      // Gradient 3: Blue-Gray
      const grad3 = ctx.createRadialGradient(
        width * 0.6 + Math.sin(time * 0.0009) * 80,
        height * 0.7 + Math.cos(time * 0.0011) * 100,
        0,
        width * 0.6 + Math.sin(time * 0.0009) * 80,
        height * 0.7 + Math.cos(time * 0.0011) * 100,
        width * 0.6
      );
      grad3.addColorStop(0, colors[2] + '25'); // Blue-Gray with opacity
      grad3.addColorStop(0.4, colors[2] + '15');
      grad3.addColorStop(1, 'transparent');
      gradients.push(grad3);

      // Gradient 4: Dark accent
      const grad4 = ctx.createRadialGradient(
        width * 0.1 + Math.sin(time * 0.0007) * 60,
        height * 0.8 + Math.cos(time * 0.0013) * 70,
        0,
        width * 0.1 + Math.sin(time * 0.0007) * 60,
        height * 0.8 + Math.cos(time * 0.0013) * 70,
        width * 0.3
      );
      grad4.addColorStop(0, colors[0] + '20'); // Black with opacity
      grad4.addColorStop(0.5, colors[4] + '10'); // Bright Teal with opacity
      grad4.addColorStop(1, 'transparent');
      gradients.push(grad4);

      return gradients;
    };

    const animate = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      // Clear canvas with a very subtle base color
      ctx.fillStyle = '#fafafa';
      ctx.fillRect(0, 0, width, height);

      // Apply blend mode for better color mixing
      ctx.globalCompositeOperation = 'multiply';

      // Draw animated gradients
      const gradients = createGradientMesh();
      gradients.forEach((gradient) => {
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });

      // Add some flowing particles/dots
      ctx.globalCompositeOperation = 'normal';
      for (let i = 0; i < 20; i++) {
        const x = (width * 0.1) + ((width * 0.8) * ((i / 20) + Math.sin(time * 0.0005 + i) * 0.1));
        const y = (height * 0.2) + ((height * 0.6) * (Math.sin(time * 0.0003 + i * 0.5) * 0.5 + 0.5));
        const size = 2 + Math.sin(time * 0.001 + i) * 1;
        
        ctx.fillStyle = colors[i % colors.length] + '40';
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Add subtle noise/texture
      ctx.globalCompositeOperation = 'overlay';
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 10;
        data[i] += noise;     // R
        data[i + 1] += noise; // G
        data[i + 2] += noise; // B
      }
      
      ctx.putImageData(imageData, 0, 0);

      time += 16; // Roughly 60fps
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)',
      }}
    />
  );
};

export default ShaderBackground;