import React, { useEffect, useRef } from 'react';

const PrismBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl', {
            antialias: false,
            powerPreference: 'high-performance',
            preserveDrawingBuffer: false,
        }) as WebGLRenderingContext | null || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;

        if (!gl) {
            console.error('WebGL not supported');
            return;
        }

        // ── Adaptive performance mode ────────────────────────────────────────────
        const nav = navigator as any;
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const coarse = window.matchMedia('(pointer: coarse)').matches;
        const smallScreen = window.matchMedia('(max-width: 820px)').matches;
        const lowMemory = typeof nav.deviceMemory === 'number' && nav.deviceMemory <= 4;
        // Static (single frame) on mobile / low-power / reduced-motion: keeps the
        // visual but removes all ongoing GPU cost — also lets backdrop-blur stop
        // recompositing every frame.
        const STATIC = prefersReduced || (coarse && smallScreen) || lowMemory;

        // Internal render scale (fragment cost scales with pixel count).
        const RES_SCALE = STATIC ? 0.85 : 0.6;
        const DPR = Math.min(window.devicePixelRatio || 1, STATIC ? 1.5 : 1) * RES_SCALE;
        const FPS_CAP = 30;
        const FRAME_MS = 1000 / FPS_CAP;
        const STATIC_TIME = 7.5; // pleasing frozen composition

        const vertexShaderSource = `
      attribute vec2 position;
      void main() { gl_Position = vec4(position, 0.0, 1.0); }
    `;

        const fragmentShaderSource = `
      precision mediump float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      #define PI  3.14159265359
      #define TAU 6.28318530718
      #define MAX_STEPS 36
      #define MAX_DIST  50.0
      #define SURF_DIST 0.002
      float hash(float n){ return fract(sin(n)*43758.5453123); }
      mat2 rot(float a){ float s=sin(a),c=cos(a); return mat2(c,-s,s,c); }
      float sdOctahedron(vec3 p,float s){ p=abs(p); float m=p.x+p.y+p.z-s; vec3 q;
          if(3.0*p.x<m) q=p.xyz; else if(3.0*p.y<m) q=p.yzx; else if(3.0*p.z<m) q=p.zxy; else return m*0.57735027;
          float k=clamp(0.5*(q.z-q.y+s),0.0,s); return length(vec3(q.x,q.y-s+k,q.z-k)); }
      float sdTriPrism(vec3 p,vec2 h){ vec3 q=abs(p); return max(q.z-h.y, max(q.x*0.866025+p.y*0.5,-p.y)-h.x*0.5); }
      float smin(float a,float b,float k){ float h=clamp(0.5+0.5*(b-a)/k,0.0,1.0); return mix(b,a,h)-k*h*(1.0-h); }
      float smax(float a,float b,float k){ return -smin(-a,-b,k); }
      float map(vec3 p){
          vec2 m=(uMouse-0.5)*2.5; p.xy+=m*0.4;
          p.xz*=rot(uTime*0.12); p.xy*=rot(uTime*0.08);
          vec3 p1=p; p1.yz*=rot(uTime*0.15);
          float cd=sin(p1.x*3.0+uTime)*sin(p1.y*3.0+uTime)*sin(p1.z*3.0+uTime)*0.1;
          float core=sdOctahedron(p1,1.6)+cd;
          vec3 p2=p1; p2.xy*=rot(PI*0.25+uTime*0.2);
          float prism=sdTriPrism(p2,vec2(1.4,2.0));
          core=smax(core,-prism,0.2);
          float d=core; float kb=0.2+0.15*(0.5+0.5*sin(uTime*1.5));
          for(int i=0;i<3;i++){ float fi=float(i); float angle=fi*TAU/3.0+uTime*0.3; float radius=3.0+0.3*sin(uTime*0.4+fi);
              vec3 pos=vec3(cos(angle)*radius,sin(angle*0.7)*1.0,sin(angle)*radius);
              vec3 po=p-pos; po.xy*=rot(uTime*0.5+fi);
              float sd=sin(po.x*5.0+fi)*sin(po.y*5.0+fi)*sin(po.z*5.0+fi)*0.05;
              float sat=sdOctahedron(po,0.4)+sd; d=smin(d,sat,kb); }
          return d;
      }
      vec3 getNormal(vec3 p){ const vec2 k=vec2(1.0,-1.0)*0.001;
          return normalize(k.xyy*map(p+k.xyy)+k.yyx*map(p+k.yyx)+k.yxy*map(p+k.yxy)+k.xxx*map(p+k.xxx)); }
      float raymarch(vec3 ro,vec3 rd){ float t=0.0;
          for(int i=0;i<MAX_STEPS;i++){ vec3 p=ro+rd*t; float d=map(p); if(abs(d)<SURF_DIST||t>MAX_DIST) break; t+=d*0.85; } return t; }
      vec3 getBackground(vec3 rd){
          float h=hash(dot(floor(rd*100.0),vec3(12.9898,78.233,54.53)));
          float stars=h>0.98?pow(h-0.98,10.0)*20.0:0.0;
          vec3 nebula=vec3(0.3,0.15,0.5)*pow(max(0.0,sin(rd.x*2.0+uTime*0.1)),3.0)*0.2
                    +vec3(0.15,0.3,0.6)*pow(max(0.0,sin(rd.y*2.5+uTime*0.05)),3.0)*0.2;
          return vec3(stars)+nebula; }
      void main(){
          vec2 uv=(gl_FragCoord.xy-0.5*uResolution)/min(uResolution.x,uResolution.y);
          vec2 m=(uMouse-0.5)*0.5; vec3 ro=vec3(m.x*2.0,m.y*2.0,5.5); vec3 rd=normalize(vec3(uv,-1.0));
          rd.xy*=rot(m.x*0.2); rd.yz*=rot(m.y*0.2);
          float t=raymarch(ro,rd); vec3 color=vec3(0.0);
          if(t<MAX_DIST){ vec3 p=ro+rd*t; vec3 normal=getNormal(p); vec3 viewDir=normalize(ro-p);
              float fresnel=pow(1.0-max(dot(viewDir,normal),0.0),3.0);
              float ior=1.5; vec3 refractDir=refract(rd,normal,1.0/ior);
              if(length(refractDir)>0.0){ float t2=raymarch(p-normal*0.01,refractDir);
                  if(t2<MAX_DIST){ vec3 p2=p-normal*0.01+refractDir*t2; vec3 n2=getNormal(p2);
                      vec3 r=refract(refractDir,-n2,ior-0.2); vec3 g=refract(refractDir,-n2,ior); vec3 b=refract(refractDir,-n2,ior+0.2);
                      vec3 bgR=getBackground(r)*vec3(1.4,0.7,0.7); vec3 bgG=getBackground(g)*vec3(0.7,1.4,0.8); vec3 bgB=getBackground(b)*vec3(0.7,0.8,1.4);
                      color=vec3(bgR.x,bgG.y,bgB.z); color=pow(color,vec3(0.7))*5.0;
                  } else { color=getBackground(refractDir)*2.0; } }
              vec3 lightDir=normalize(vec3(1.0,1.0,-1.0)); vec3 halfDir=normalize(lightDir+viewDir);
              float spec=pow(max(dot(normal,halfDir),0.0),150.0); color+=spec*vec3(1.0)*3.5;
              vec3 fc=vec3(0.5+0.5*sin(fresnel*TAU+uTime),0.5+0.5*sin(fresnel*TAU+uTime+TAU/3.0),0.5+0.5*sin(fresnel*TAU+uTime+TAU*2.0/3.0));
              color+=fresnel*fc*1.2;
              float edge=pow(1.0-abs(dot(viewDir,normal)),4.0); color+=edge*vec3(0.6,0.7,1.0)*0.7;
              float sss=pow(max(dot(-normal,lightDir),0.0),2.0); color+=sss*vec3(1.0,0.6,0.8)*0.5;
          } else { color=getBackground(rd); }
          float vignette=smoothstep(0.3,1.0,1.0-length(uv)*0.4); color*=vignette;
          color*=vec3(0.96,0.99,1.06); color=pow(color,vec3(0.88))*1.12;
          gl_FragColor=vec4(color,1.0);
      }
    `;

        const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
            const shader = gl.createShader(type);
            if (!shader) return null;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error('Shader compile error:', gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };
        const createProgram = (gl: WebGLRenderingContext, vs: WebGLShader, fs: WebGLShader) => {
            const program = gl.createProgram();
            if (!program) return null;
            gl.attachShader(program, vs);
            gl.attachShader(program, fs);
            gl.linkProgram(program);
            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                console.error('Program link error:', gl.getProgramInfoLog(program));
                gl.deleteProgram(program);
                return null;
            }
            return program;
        };

        const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
        if (!vertexShader || !fragmentShader) return;
        const program = createProgram(gl, vertexShader, fragmentShader);
        if (!program) return;

        const uTime = gl.getUniformLocation(program, 'uTime');
        const uResolution = gl.getUniformLocation(program, 'uResolution');
        const uMouse = gl.getUniformLocation(program, 'uMouse');
        const positionLocation = gl.getAttribLocation(program, 'position');

        const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

        const mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };

        const drawFrame = (timeSeconds: number) => {
            gl.useProgram(program);
            gl.uniform1f(uTime, timeSeconds);
            gl.uniform2f(uResolution, canvas.width, canvas.height);
            gl.uniform2f(uMouse, mouse.x, mouse.y);
            gl.enableVertexAttribArray(positionLocation);
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        };

        const resizeCanvas = () => {
            const w = Math.max(1, Math.floor(canvas.clientWidth * DPR));
            const h = Math.max(1, Math.floor(canvas.clientHeight * DPR));
            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w;
                canvas.height = h;
                gl.viewport(0, 0, w, h);
                if (STATIC) drawFrame(STATIC_TIME); // re-render the still frame on resize/rotate
            }
        };
        resizeCanvas();

        const ro = new ResizeObserver(resizeCanvas);
        ro.observe(canvas);

        // ── STATIC MODE: render once, then stop. Zero ongoing cost. ──────────────
        if (STATIC) {
            drawFrame(STATIC_TIME);
            return () => {
                ro.disconnect();
                gl.deleteProgram(program);
                gl.deleteShader(vertexShader);
                gl.deleteShader(fragmentShader);
                gl.deleteBuffer(positionBuffer);
            };
        }

        // ── ANIMATED MODE (desktop): 30fps cap, pause when tab hidden ────────────
        const handleMouseMove = (e: MouseEvent) => {
            mouse.targetX = e.clientX / window.innerWidth;
            mouse.targetY = 1.0 - e.clientY / window.innerHeight;
        };
        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        let animationId = 0;
        let startTime: number | null = null;
        let lastDraw = 0;

        const render = (timestamp: number) => {
            animationId = requestAnimationFrame(render);
            if (startTime === null) startTime = timestamp;
            if (timestamp - lastDraw < FRAME_MS) return; // throttle to FPS_CAP
            lastDraw = timestamp;
            mouse.x += (mouse.targetX - mouse.x) * 0.08;
            mouse.y += (mouse.targetY - mouse.y) * 0.08;
            drawFrame((timestamp - startTime) * 0.001);
        };

        const start = () => { if (!animationId) animationId = requestAnimationFrame(render); };
        const stop = () => { if (animationId) { cancelAnimationFrame(animationId); animationId = 0; } };
        const onVisibility = () => { if (document.hidden) stop(); else { lastDraw = 0; start(); } };
        document.addEventListener('visibilitychange', onVisibility);
        start();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('visibilitychange', onVisibility);
            stop();
            ro.disconnect();
            gl.deleteProgram(program);
            gl.deleteShader(vertexShader);
            gl.deleteShader(fragmentShader);
            gl.deleteBuffer(positionBuffer);
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ background: '#000', imageRendering: 'auto' }}
            />
            <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        </>
    );
};

export default PrismBackground;
