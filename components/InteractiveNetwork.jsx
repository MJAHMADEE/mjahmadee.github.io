'use client';

import { useEffect, useRef, useState } from 'react';

export default function InteractiveNetwork() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const nodesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize nodes - fewer, larger nodes for cleaner look
    const nodeCount = 30;
    nodesRef.current = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 1.5,
      energy: 0,
      distance: 0,
    }));

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const drawGradientCircle = (x, y, radius, intensity) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 2);
      gradient.addColorStop(0, `rgba(147, 51, 234, ${intensity * 0.8})`);
      gradient.addColorStop(0.5, `rgba(99, 102, 241, ${intensity * 0.4})`);
      gradient.addColorStop(1, `rgba(59, 130, 246, ${intensity * 0.1})`);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius * 2, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      // Fade effect instead of clear for motion trails
      ctx.fillStyle = 'rgba(15, 23, 42, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update nodes
      nodesRef.current.forEach((node) => {
        const dx = mousePos.x - node.x;
        const dy = mousePos.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        node.distance = distance;
        const interactionRadius = 250;

        if (distance < interactionRadius) {
          // Attract to mouse
          const angle = Math.atan2(dy, dx);
          node.vx += Math.cos(angle) * 0.15;
          node.vy += Math.sin(angle) * 0.15;
          node.energy = Math.min(1, (1 - distance / interactionRadius));
        } else {
          node.energy = Math.max(0, node.energy - 0.02);
        }

        // Apply velocity damping
        node.vx *= 0.92;
        node.vy *= 0.92;

        // Slight drift
        node.vx += (Math.random() - 0.5) * 0.05;
        node.vy += (Math.random() - 0.5) * 0.05;

        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce with damping
        if (node.x - node.radius < 0 || node.x + node.radius > canvas.width) {
          node.vx *= -0.8;
          node.x = Math.max(node.radius, Math.min(canvas.width - node.radius, node.x));
        }
        if (node.y - node.radius < 0 || node.y + node.radius > canvas.height) {
          node.vy *= -0.8;
          node.y = Math.max(node.radius, Math.min(canvas.height - node.radius, node.y));
        }
      });

      // Draw connections first (background layer)
      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const node1 = nodesRef.current[i];
          const node2 = nodesRef.current[j];
          const dx = node1.x - node2.x;
          const dy = node1.y - node2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const connectionRange = 200;

          if (distance < connectionRange) {
            const opacity = (1 - distance / connectionRange) * 0.25;
            const blendedEnergy = (node1.energy + node2.energy) / 2;
            
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity + blendedEnergy * 0.2})`;
            ctx.lineWidth = 1 + blendedEnergy * 0.5;
            ctx.beginPath();
            ctx.moveTo(node1.x, node1.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.stroke();
          }
        }
      }

      // Draw glow halos and nodes
      nodesRef.current.forEach((node) => {
        if (node.energy > 0.1) {
          const glowRadius = node.radius * (2 + node.energy * 3);
          drawGradientCircle(node.x, node.y, glowRadius, node.energy);
        }

        // Draw main node
        const nodeOpacity = 0.4 + node.energy * 0.6;
        const nodeRadius = node.radius * (1 + node.energy * 0.3);
        
        const gradient = ctx.createRadialGradient(node.x - 1, node.y - 1, 0, node.x, node.y, nodeRadius);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${nodeOpacity * 0.8})`);
        gradient.addColorStop(1, `rgba(147, 51, 234, ${nodeOpacity * 0.3})`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
        ctx.fill();

        // Add subtle border
        ctx.strokeStyle = `rgba(147, 51, 234, ${nodeOpacity * 0.5})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // Draw interactive cursor connection ring
      ctx.strokeStyle = `rgba(147, 51, 234, 0.15)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(mousePos.x, mousePos.y, 100, 0, Math.PI * 2);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
}
