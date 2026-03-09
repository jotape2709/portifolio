(() => {
  /* ── i18n dictionary ── */
  const T = {
    "pt-BR": {
      heroRole: "Engenheiro de Segurança",
      heroDesc:
        "Experiência prática em infraestrutura e operação com direção clara para engenharia de segurança.",
      footer: "signature://base-prática + disciplina-operacional + ambição-em-segurança",

      bootStages: [
        "Carregando núcleo do sistema...",
        "Verificando integridade dos módulos...",
        "Estabelecendo canal seguro...",
        "C2 pronto. Conexão estabelecida."
      ],

      welcome: [
        "[ok]  Sessão iniciada · canal seguro ativo",
        "[sys] Visitante identificado. Bem-vindo ao C2 terminal de JPML.",
        "[sys] Digite 'help' para ver os comandos disponíveis."
      ],

      help: [
        "Comandos disponíveis:",
        "  open <módulo>   — perfil, skills, experience, projects, contact",
        "  whoami          — resumo rápido do operador",
        "  ls              — listar módulos disponíveis",
        "  clear           — limpar terminal",
        "  help            — exibir esta mensagem"
      ],

      whoami: [
        "João Pedro De Moura Lima",
        "São Paulo, Brasil",
        "Engenheiro de Segurança em formação",
        "Base: infraestrutura · redes · Linux · operações de campo"
      ],

      ls: [
        "drw-  profile.sys",
        "drw-  skills.matrix",
        "drw-  experience.log",
        "drw-  projects.console",
        "drw-  contact.secure"
      ],

      unknown: (cmd) => `[warn] Comando '${cmd}' não reconhecido. Use 'help'.`,

      modules: {
        profile: {
          title: "profile.sys",
          lines: [
            "João Pedro De Moura Lima · São Paulo, Brasil",
            "Profissional com base prática em operações de infraestrutura",
            "e direção clara para engenharia de segurança.",
            "",
            "Combina experiência de campo com disciplina técnica",
            "e mentalidade orientada a sistemas robustos."
          ],
          bullets: []
        },
        skills: {
          title: "skills.matrix",
          lines: ["Capacidades centrais:"],
          bullets: [
            "Infraestrutura de redes",
            "Cabeamento estruturado",
            "Fibra óptica",
            "Suporte técnico",
            "Instalação e manutenção",
            "Linux (fundamentos)",
            "Mentalidade orientada à segurança",
            "Troubleshooting e diagnóstico"
          ]
        },
        experience: {
          title: "experience.log",
          lines: [
            "01 · Base de campo e infraestrutura física de rede.",
            "02 · Maturidade operacional em suporte e troubleshooting.",
            "03 · Evolução contínua para engenharia de segurança e",
            "     sistemas resilientes."
          ],
          bullets: []
        },
        projects: {
          title: "projects.console",
          lines: [
            "Foco em qualidade, não volume.",
            "",
            "» C2 Terminal Portfolio (este ambiente)",
            "  Stack: HTML · CSS · JavaScript",
            "  Arquitetura minimalista, auditável, secure-by-default."
          ],
          bullets: []
        },
        contact: {
          title: "contact.secure",
          lines: [
            "Email   : joaopedro7253@gmail.com",
            "GitHub  : github.com/jotape2709",
            "LinkedIn: linkedin.com/in/joao2709",
            "Local   : São Paulo, Brasil"
          ],
          bullets: []
        }
      }
    },

    en: {
      heroRole: "Security Engineer",
      heroDesc:
        "Hands-on infrastructure and operations background with a clear direction toward security engineering.",
      footer: "signature://practical-foundation + operational-discipline + security-ambition",

      bootStages: [
        "Loading system kernel...",
        "Validating module integrity...",
        "Establishing secure channel...",
        "C2 online. Connection established."
      ],

      welcome: [
        "[ok]  Session started · secure channel active",
        "[sys] Visitor identified. Welcome to JPML's C2 terminal.",
        "[sys] Type 'help' to list available commands."
      ],

      help: [
        "Available commands:",
        "  open <module>   — profile, skills, experience, projects, contact",
        "  whoami          — quick operator summary",
        "  ls              — list available modules",
        "  clear           — clear terminal",
        "  help            — show this message"
      ],

      whoami: [
        "João Pedro De Moura Lima",
        "São Paulo, Brasil",
        "Security Engineer in training",
        "Background: infrastructure · networking · Linux · field operations"
      ],

      ls: [
        "drw-  profile.sys",
        "drw-  skills.matrix",
        "drw-  experience.log",
        "drw-  projects.console",
        "drw-  contact.secure"
      ],

      unknown: (cmd) => `[warn] Command '${cmd}' not recognized. Use 'help'.`,

      modules: {
        profile: {
          title: "profile.sys",
          lines: [
            "João Pedro De Moura Lima · São Paulo, Brasil",
            "Professional with practical infrastructure operations background",
            "and a clear direction toward security engineering.",
            "",
            "Combines field experience with technical discipline",
            "and a security-oriented systems mindset."
          ],
          bullets: []
        },
        skills: {
          title: "skills.matrix",
          lines: ["Core capabilities:"],
          bullets: [
            "Network infrastructure",
            "Structured cabling",
            "Fiber optics",
            "Technical support",
            "Installation & maintenance",
            "Linux fundamentals",
            "Security-oriented mindset",
            "Troubleshooting & diagnostics"
          ]
        },
        experience: {
          title: "experience.log",
          lines: [
            "01 · Field and physical network infrastructure foundation.",
            "02 · Operational maturity through support and troubleshooting.",
            "03 · Ongoing growth toward security engineering and",
            "     resilient systems."
          ],
          bullets: []
        },
        projects: {
          title: "projects.console",
          lines: [
            "Quality first, not volume first.",
            "",
            "» C2 Terminal Portfolio (this environment)",
            "  Stack: HTML · CSS · JavaScript",
            "  Minimalist, auditable, secure-by-default architecture."
          ],
          bullets: []
        },
        contact: {
          title: "contact.secure",
          lines: [
            "Email   : joaopedro7253@gmail.com",
            "GitHub  : github.com/jotape2709",
            "LinkedIn: linkedin.com/in/joao2709",
            "Location: São Paulo, Brasil"
          ],
          bullets: []
        }
      }
    }
  };

  /* ── State ── */
  const state = { lang: "pt-BR", theme: "dark", activeModule: "profile" };

  /* ── DOM refs ── */
  const $ = (id) => document.getElementById(id);
  const stream     = $("stream");
  const promptForm = $("promptForm");
  const cmdInput   = $("cmdInput");
  const cardTitle  = $("cardTitle");
  const cardBody   = $("cardBody");
  const langToggle = $("langToggle");
  const themeToggle = $("themeToggle");
  const bootScreen = $("bootScreen");
  const bootLine   = $("bootLine");
  const bootProgress = $("bootProgress");

  /* Guard: abort if critical elements are missing (e.g. wrong HTML) */
  if (!stream || !promptForm || !cmdInput || !cardTitle || !cardBody || !langToggle || !themeToggle) {
    return;
  }

  /* ── Helpers ── */
  const line = (text, cls = "") => {
    const p = document.createElement("p");
    p.textContent = text;
    if (cls) p.className = cls;
    stream.appendChild(p);
    stream.scrollTop = stream.scrollHeight;
  };

  const clearStream = () => {
    stream.textContent = "";
  };

  const hasModule = (key) =>
    Object.prototype.hasOwnProperty.call(T[state.lang].modules, key);

  /* ── Module card renderer ── */
  const renderCard = (moduleKey) => {
    const mod = T[state.lang].modules[moduleKey];
    if (!mod) return;
    state.activeModule = moduleKey;

    cardTitle.textContent = mod.title;
    cardBody.textContent = "";

    mod.lines.forEach((txt) => {
      const p = document.createElement("p");
      p.textContent = txt;
      cardBody.appendChild(p);
    });

    if (mod.bullets.length > 0) {
      const ul = document.createElement("ul");
      mod.bullets.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      cardBody.appendChild(ul);
    }
  };

  /* ── Command processor ── */
  const runCommand = (raw) => {
    const input = raw.trim();
    const cmd = input.toLowerCase();
    if (!cmd) return;

    line(`visitor@jpml:~$ ${input}`, "cmd");

    if (cmd === "help") {
      T[state.lang].help.forEach((msg, i) =>
        line(msg, i === 0 ? "accent" : "muted indent")
      );
      return;
    }

    if (cmd === "clear") {
      clearStream();
      T[state.lang].welcome.forEach((msg, i) =>
        line(msg, i === 0 ? "ok" : "sys")
      );
      return;
    }

    if (cmd === "whoami") {
      T[state.lang].whoami.forEach((msg, i) =>
        line(msg, i === 0 ? "accent" : "sys")
      );
      return;
    }

    if (cmd === "ls" || cmd === "dir") {
      T[state.lang].ls.forEach((msg) => line(msg, "sys"));
      return;
    }

    if (cmd.startsWith("open ")) {
      const key = cmd.slice(5).trim();
      if (hasModule(key)) {
        renderCard(key);
        line(`[ok]  module '${key}' loaded.`, "ok");
      } else {
        line(T[state.lang].unknown(key), "warn");
      }
      return;
    }

    /* Easter eggs */
    if (cmd === "sudo" || cmd.startsWith("sudo ")) {
      line("[warn] Nice try. This terminal doesn't have sudo access.", "warn");
      return;
    }

    if (cmd === "exit" || cmd === "quit") {
      line("[sys]  You can check out any time you like, but you can never leave.", "sys");
      return;
    }

    if (cmd === "ping") {
      line("[ok]  PONG — secure channel confirmed.", "ok");
      return;
    }

    if (cmd === "uname" || cmd === "uname -a") {
      line("JPML_SECURE_OS v2.6 C2-BUILD #security-engineer", "sys");
      return;
    }

    line(T[state.lang].unknown(input), "warn");
  };

  /* ── i18n apply ── */
  const applyLanguage = () => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(T[state.lang], key)) {
        el.textContent = T[state.lang][key];
      }
    });

    document.documentElement.lang = state.lang === "pt-BR" ? "pt-BR" : "en";
    langToggle.textContent = state.lang === "pt-BR" ? "EN" : "PT-BR";

    clearStream();
    T[state.lang].welcome.forEach((msg, i) =>
      line(msg, i === 0 ? "ok" : "sys")
    );
    renderCard(state.activeModule);
  };

  /* ── Theme apply ── */
  const applyTheme = () => {
    document.documentElement.setAttribute("data-theme", state.theme);
    themeToggle.textContent = state.theme === "dark" ? "☾" : "☼";
  };

  /* ── Boot sequence ── */
  const hideBoot = () => {
    if (!bootScreen) return;
    bootScreen.classList.add("hidden");
    setTimeout(() => {
      if (bootScreen.parentNode) bootScreen.remove();
    }, 550);
  };

  const bootSequence = async () => {
    if (!bootLine || !bootProgress) {
      hideBoot();
      return;
    }
    const stages = T[state.lang].bootStages;
    for (let i = 0; i < stages.length; i += 1) {
      bootLine.textContent = stages[i];
      bootProgress.style.width = `${Math.round(((i + 1) / stages.length) * 100)}%`;
      await new Promise((resolve) => setTimeout(resolve, 420));
    }
    await new Promise((resolve) => setTimeout(resolve, 260));
    hideBoot();
  };

  /* ── Event listeners ── */
  promptForm.addEventListener("submit", (e) => {
    e.preventDefault();
    runCommand(cmdInput.value);
    cmdInput.value = "";
  });

  document.querySelectorAll(".cmd-btn").forEach((btn) => {
    btn.addEventListener("click", () => runCommand(btn.dataset.cmd || "help"));
  });

  langToggle.addEventListener("click", () => {
    state.lang = state.lang === "pt-BR" ? "en" : "pt-BR";
    applyLanguage();
  });

  themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme();
    line(`[sys] theme → ${state.theme}`, "sys");
  });

  /* ── Init ── */
  applyTheme();
  applyLanguage();
  bootSequence();
})();
