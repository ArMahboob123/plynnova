registerPaint('roughBorder', class {
  paint(ctx, size) {
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    const jitter = 3;
    let lastX = 0;
    let lastY = 0;

    for (let i = 0; i <= size.width; i += 10) {
      const x = i + (Math.random() * jitter - jitter/2);
      const y = (Math.random() * jitter - jitter/2);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
      lastX = x;
      lastY = y;
    }

    ctx.stroke();
  }
});