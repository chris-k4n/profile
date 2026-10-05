import React from "react";
import banana from "./assets/0001.png";
import parasite from "./assets/0035.png";
import ultimatrix from "./assets/Untitled.png";



export default function App() {
  return (
    <>
      <style>{`
        :root{
          --bg:            #1b011e;
          --panel:         #3e2054;
          --panel-2:       #3b2144;
          --border:        #2c3038;
          --text:          #e9e7e2;
          --muted:         #8b909c;
          --accent:        #e82cd8;
          --accent-dim:    #9d3487;
          --axis-x:        #e5555a;
          --axis-y:        #6fbf5e;
          --axis-z:        #4fa3e0;
        }

        *{ box-sizing:border-box; }

        html{ scroll-behavior:smooth; }

        body{
          background:var(--bg);
          color:var(--text);
          font-family:'Inter', sans-serif;
          font-size:16px;
          line-height:1.6;
        }

        h1,h2,h3{
          font-family:'Space Grotesk', sans-serif;
          letter-spacing:-0.01em;
        }

        .mono{ font-family: monospace; }

        a{ color:var(--accent); text-decoration:none; }
        a:hover{ color:#f5934f; }

        ::selection{ background:var(--accent); color:#16181c; }

        .topbar{
          background:var(--panel);
          border-bottom:1px solid var(--border);
          padding:.65rem 0;
          position:sticky;
          top:0;
          z-index:50;
        }
        .topbar .brand{
          font-family: monospace;
          font-size:.85rem;
          color:var(--muted);
          display:flex;
          align-items:center;
          gap:.5rem;
        }
        .topbar .brand .dot{
          width:8px; height:8px; border-radius:50%;
          background:var(--accent);
          box-shadow:0 0 8px var(--accent);
        }
        .nav-links{
          list-style:none;
          display:flex;
          gap:1.75rem;
          margin:0; padding:0;
        }
        .nav-links a{
          font-family: monospace;
          font-size:.8rem;
          text-transform:uppercase;
          letter-spacing:.08em;
          color:var(--muted);
          padding:.25rem 0;
          border-bottom:1px solid transparent;
          transition:color .15s, border-color .15s;
        }
        .nav-links a:hover{
          color:var(--text);
          border-color:var(--accent);
        }

        #hero{
          position:relative;
          min-height:78vh;
          display:flex;
          align-items:center;
          overflow:hidden;
          background:
            linear-gradient(var(--bg), var(--bg)),
            repeating-linear-gradient(0deg, rgba(255,255,255,.035) 0 1px, transparent 1px 48px),
            repeating-linear-gradient(90deg, rgba(255,255,255,.035) 0 1px, transparent 1px 48px);
        }
        .viewport-label{
          position:absolute;
          top:1rem; left:1rem;
          font-family: monospace;
          font-size:.72rem;
          color:var(--muted);
          line-height:1.5;
        }
        .viewport-label .accent{ color:var(--accent); }

        .axis-gizmo{
          position:absolute;
          top:1.25rem; right:1.5rem;
          width:70px; height:70px;
        }
        .axis-gizmo div{
          position:absolute;
          font-family:monospace;
          font-size:.7rem;
          width:20px; height:20px;
          border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          color:#16181c;
          font-weight:600;
        }
        .axis-x{ background:var(--axis-x); top:25px; left:0; }
        .axis-y{ background:var(--axis-y); top:0; left:25px; }
        .axis-z{ background:var(--axis-z); top:25px; left:50px; }

        .hero-scene{ perspective:900px; }
        .wire-cube{
          width:150px; height:150px;
          position:relative;
          transform-style:preserve-3d;
          margin:0 auto;
          animation:spin 16s linear infinite;
        }
        .wire-cube .face{
          position:absolute;
          width:150px; height:150px;
          border:1px solid var(--accent);
          background:rgba(232,121,44,.04);
        }
        .face.front { transform: translateZ(75px); }
        .face.back  { transform: translateZ(-75px) rotateY(180deg); }
        .face.right { transform: rotateY(90deg) translateZ(75px); }
        .face.left  { transform: rotateY(-90deg) translateZ(75px); }
        .face.top   { transform: rotateX(90deg) translateZ(75px); }
        .face.bottom{ transform: rotateX(-90deg) translateZ(75px); }

        @keyframes spin{
          from{ transform: rotateX(-18deg) rotateY(0deg); }
          to{ transform: rotateX(-18deg) rotateY(360deg); }
        }

        .eyebrow{
          font-family: monospace;
          font-size:.78rem;
          color:var(--accent);
          letter-spacing:.12em;
          text-transform:uppercase;
          margin-bottom:.75rem;
          display:block;
        }

        #hero h1{
          font-size:clamp(2.2rem, 5vw, 3.6rem);
          font-weight:700;
          margin-bottom:.75rem;
        }
        #hero p.lead{
          color:var(--muted);
          font-size:1.15rem;
          max-width:32rem;
        }

        .panel-section{
          padding:5rem 0;
          border-top:1px solid var(--border);
        }
        .panel-head{
          display:flex;
          align-items:baseline;
          gap:.75rem;
          margin-bottom:2.25rem;
        }
        .panel-head .tag{
          font-family: monospace;
          font-size:.75rem;
          color:var(--accent);
          border:1px solid var(--accent-dim);
          padding:.15rem .5rem;
          border-radius:3px;
        }
        .panel-head h2{
          font-size:1.6rem;
          font-weight:600;
          margin:0;
        }

        #about p{
          color:var(--muted);
          max-width:44rem;
          font-size:1.05rem;
        }

        .prop-list{
          list-style:none;
          padding:0; margin:0;
          border:1px solid var(--border);
          border-radius:6px;
          overflow:hidden;
        }
        .prop-list li{
          display:flex;
          align-items:center;
          gap:1rem;
          padding:.85rem 1.1rem;
          background:var(--panel);
          border-bottom:1px solid var(--border);
          font-family: monospace;
          font-size:.88rem;
        }
        .prop-list li:last-child{ border-bottom:none; }
        .prop-list li:nth-child(even){ background:var(--panel-2); }
        .prop-list .bullet{
          width:6px; height:6px;
          background:var(--accent);
          border-radius:1px;
          flex-shrink:0;
        }

        .project-card{
          background:var(--panel);
          border:1px solid var(--border);
          border-radius:8px;
          padding:1.5rem;
          height:100%;
          transition:border-color .15s, transform .15s;
        }
        .project-card:hover{
          border-color:var(--accent-dim);
          transform:translateY(-3px);
        }
        .project-card .thumb{
          height:110px;
          border-radius:5px;
          margin-bottom:1rem;
          background:
            repeating-linear-gradient(45deg, var(--panel-2) 0 10px, var(--panel) 10px 20px);
          border:1px solid var(--border);
          display:flex;
          align-items:center;
          justify-content:center;
          font-family: monospace;
          font-size:.7rem;
          color:var(--muted);
          letter-spacing:.08em;
        }
        .project-card h3{
          font-size:1.05rem;
          margin-bottom:.4rem;
        }
        .project-card p{
          color:var(--muted);
          font-size:.9rem;
          margin-bottom:0;
        }

        #contact .mono-line{
          font-family: monospace;
          font-size:1rem;
          color:var(--text);
          background:var(--panel);
          border:1px solid var(--border);
          border-radius:6px;
          padding:1rem 1.25rem;
          display:inline-block;
        }
        #contact .mono-line .k{ color:var(--muted); }

        footer{
          border-top:1px solid var(--border);
          padding:1.5rem 0;
          text-align:center;
          color:var(--muted);
          font-family:Mono', ;
          font-size:.75rem;
        }

        @media (prefers-reduced-motion: reduce){
          .wire-cube{ animation:none; }
        }
      `}</style>

      <header className="topbar">
        <nav className="container d-flex justify-content-between align-items-center">
          <div className="brand">glinden.rodrigues
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero">
          <div className="viewport-label">
            viewport &middot; <span className="accent">perspective</span>
            <br />
            x: 0.0 &nbsp; y: 0.0 &nbsp; z: 0.0
          </div>
          <div className="axis-gizmo">
            <div className="axis-y">Y</div>
            <div className="axis-x">X</div>
            <div className="axis-z">Z</div>
          </div>

          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <span className="eyebrow">// student · creator</span>
                <h1>Hi, I'm Glinden Chris Rodrigues</h1>
                <p className="lead">I make stuff.</p>
              </div>
              <div className="col-lg-5 d-none d-lg-block">
                <div className="hero-scene">
                  <div className="wire-cube">
                    <div className="face front"></div>
                    <div className="face back"></div>
                    <div className="face right"></div>
                    <div className="face left"></div>
                    <div className="face top"></div>
                    <div className="face bottom"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="panel-section">
          <div className="container">
            <div className="panel-head">
              <span className="tag">01</span>
              <h2>About Me</h2>
            </div>
            <p>
              I'm a student with an interest in 3D modeling, game dev, web
              dev and graphic design. Currently focused on Blender and
              Godot. I enjoy working on creative projects.
            </p>
          </div>
        </section>

        <section id="projects" className="panel-section">
          <div className="container">
            <div className="panel-head">
              <span className="tag">02</span>
              <h2>Projects</h2>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="project-card">
                  <div className="thumb"><img src={banana} alt="" /></div>
                  <h3>Banana guy Model</h3>
                  <p>Low poly banana guy model made in blender</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="project-card">
                  <div className="thumb"><img src={parasite} alt="" /></div>
                  <h3>ALien Parasite Model</h3>
                  <p>Low poly game asset</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="project-card">
                  <div className="thumb"><img src={ultimatrix} alt="" /></div>
                  <h3>Ultimatrix model</h3>
                  <p>Ultimatrix model with toon shader.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="panel-section">
          <div className="container">
            <div className="panel-head">
              <span className="tag">03</span>
              <h2>Skills</h2>
            </div>
            <ul className="prop-list">
              <li><span className="bullet"></span> Blender</li>
              <li><span className="bullet"></span> Java / Kotlin</li>
              <li><span className="bullet"></span> Laravel</li>
              <li><span className="bullet"></span> Node.js</li>
              <li><span className="bullet"></span> Graphic Design</li>
              <li><span className="bullet"> </span>Blockbench</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="panel-section">
          <div className="container">
            <div className="panel-head">
              <span className="tag">04</span>
              <h2>Contact</h2>
            </div>
            <div className="mono-line">
              <span className="k">email:</span>{" "}
              <a href="mailto:glinden000@gmail.com">glinden000@gmail.com</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        &copy; 2026 Glinden Chris Rodrigues.
      </footer>
    </>
  );
}