/* eslint-disable */

function random(low, high) {
  return Math.random() * (high - low) + low;
}

class Visual {
  constructor() {
    this.canvas = document.querySelector('#canvas');
    this.context = this.canvas.getContext('2d');
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.particleLength = 120;
    this.particles = [];
    this.particleMaxRadius = 8;

    this.handleResizeBind = this.handleResize.bind(this);

    this.initialize();
    this.render();
  }

  initialize() {
    this.resizeCanvas();
    for (let i = 0; i < this.particleLength; i++) {
      this.particles.push(this.createParticle(i));
    }
    this.bind();
  }

  bind() {
    window.addEventListener('resize', this.handleResizeBind, false);
  }

  unbind() {
    window.removeEventListener('resize', this.handleResizeBind, false);
  }

  handleResize() {
    this.resizeCanvas();
  }

  resizeCanvas() {
    this.canvasWidth = document.body.offsetWidth;
    this.canvasHeight = document.body.offsetHeight;
    this.canvas.width = this.canvasWidth * window.devicePixelRatio;
    this.canvas.height = this.canvasHeight * window.devicePixelRatio;
    this.context = this.canvas.getContext('2d');
    this.context.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  createParticle(id, isRecreate) {
    const radius = random(1, this.particleMaxRadius);
    const x = isRecreate
      ? -radius - random(this.particleMaxRadius * 2, this.canvasWidth)
      : random(0, this.canvasWidth);
    let y = random(this.canvasHeight / 2 - 150, this.canvasHeight / 2 + 150);
    y += random(-100, 100);
    const alpha = random(0.05, 1);

    return {
      id,
      x,
      y,
      startY: y,
      radius,
      defaultRadius: radius,
      startAngle: 0,
      endAngle: Math.PI * 2,
      alpha,
      color: { r: 255, g: random(75, 150), b: random(130, 200) },
      speed: alpha + 1,
      amplitude: random(50, 200),
      isBurst: false,
    };
  }

  drawParticles() {
    this.particles.forEach((particle) => {
      // 位置情報更新
      this.moveParticle(particle);

      // particle描画
      this.context.beginPath();
      this.context.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.alpha})`;
      this.context.arc(particle.x, particle.y, particle.radius, particle.startAngle, particle.endAngle);
      this.context.fill();
    });
  }

  moveParticle(particle) {
    particle.x += particle.speed;
    particle.y = particle.startY + particle.amplitude * Math.sin(((particle.x / 5) * Math.PI) / 180);
  }

  render() {
    // canvas初期化
    this.context.clearRect(0, 0, this.canvasWidth + this.particleMaxRadius * 2, this.canvasHeight);

    // particleを描画
    this.drawParticles();

    // 画面から消えたら新しいparticleに差し替え
    this.particles.forEach((particle) => {
      if (particle.x - particle.radius >= this.canvasWidth) {
        this.particles[particle.id] = this.createParticle(particle.id, true);
      }
    });

    requestAnimationFrame(this.render.bind(this));
  }
}

export default Visual;
