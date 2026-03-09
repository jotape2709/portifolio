(() => {
<<<<<<< HEAD
  const t = {
    "pt-BR": {
      heroRole: "Engenheiro de Segurança",
      heroDesc:
        "Experiência prática em infraestrutura e operação com direção clara para engenharia de segurança.",
      footer: "signature://base-prática + disciplina-operacional + ambição-em-segurança",
      bootStages: [
        "Carregando núcleo do sistema...",
        "Verificando integridade dos módulos...",
        "Ativando interface de comando...",
        "Canal seguro estabelecido."
      ],
      welcome: [
        "[ok] Sessão iniciada para visitantes.",
        "[sys] Digite 'help' para ver os comandos disponíveis.",
        "[sys] Este ambiente representa a identidade profissional de João Pedro De Moura Lima."
      ],
      help: [
        "Comandos disponíveis:",
        "- help",
        "- open profile",
        "- open skills",
        "- open experience",
        "- open projects",
        "- open contact",
        "- clear"
      ],
      unknown: "Comando não reconhecido. Use 'help'.",
      modules: {
        profile: {
          title: "profile.sys",
          lines: [
            "João Pedro De Moura Lima · São Paulo, Brasil",
            "Profissional com base prática em operações de infraestrutura e foco em evolução para segurança.",
            "Combina vivência de campo com disciplina técnica e direcionamento moderno."
          ],
          bullets: []
        },
        skills: {
          title: "skills.matrix",
          lines: ["Capacidades centrais:"],
          bullets: [
            "Infraestrutura",
            "Cabeamento estruturado",
            "Fibra óptica",
            "Suporte técnico",
            "Instalação e manutenção",
            "Linux (familiaridade)",
            "Mentalidade orientada à segurança"
          ]
        },
        experience: {
          title: "experience.log",
          lines: [
            "1) Fundação de campo e infraestrutura física de rede.",
            "2) Maturidade operacional em suporte e troubleshooting.",
            "3) Evolução contínua para engenharia de segurança e sistemas robustos."
          ],
          bullets: []
        },
        projects: {
          title: "projects.console",
          lines: [
            "Foco em qualidade acima de volume.",
            "Projeto em destaque: Command Portfolio System (este ambiente).",
            "Stack: HTML, CSS, JavaScript · arquitetura simples, auditável e segura por padrão."
          ],
          bullets: []
        },
        contact: {
          title: "contact.secure",
          lines: [
            "Email: joaopedro7253@gmail.com",
            "GitHub: https://github.com/jotape2709",
            "LinkedIn: https://www.linkedin.com/in/joao2709/"
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
        "Activating command interface...",
        "Secure channel established."
      ],
      welcome: [
        "[ok] Visitor session started.",
        "[sys] Type 'help' to list available commands.",
        "[sys] This environment represents João Pedro De Moura Lima's professional identity."
      ],
      help: [
        "Available commands:",
        "- help",
        "- open profile",
        "- open skills",
        "- open experience",
        "- open projects",
        "- open contact",
        "- clear"
      ],
      unknown: "Unknown command. Use 'help'.",
      modules: {
        profile: {
          title: "profile.sys",
          lines: [
            "João Pedro De Moura Lima · São Paulo, Brasil",
            "Professional with practical infrastructure operations foundations and a strong security trajectory.",
            "Combines field reality with technical discipline and modern systems direction."
          ],
          bullets: []
        },
        skills: {
          title: "skills.matrix",
          lines: ["Core capabilities:"],
          bullets: [
            "Infrastructure",
            "Structured cabling",
            "Fiber optics",
            "Technical support",
            "Installation & maintenance",
            "Linux familiarity",
            "Security-oriented mindset"
          ]
        },
        experience: {
          title: "experience.log",
          lines: [
            "1) Field and physical network infrastructure foundation.",
            "2) Operational maturity through support and troubleshooting.",
            "3) Ongoing growth toward security engineering and resilient systems."
          ],
          bullets: []
        },
        projects: {
          title: "projects.console",
          lines: [
            "Quality-first, not volume-first.",
            "Featured build: Command Portfolio System (this experience).",
            "Stack: HTML, CSS, JavaScript · simple, auditable, secure-by-default architecture."
          ],
          bullets: []
        },
        contact: {
          title: "contact.secure",
          lines: [
            "Email: joaopedro7253@gmail.com",
            "GitHub: https://github.com/jotape2709",
            "LinkedIn: https://www.linkedin.com/in/joao2709/"
          ],
          bullets: []
        }
      }
    }
  };

  const state = { lang: "pt-BR", theme: "dark", activeModule: "profile" };

  const stream = document.getElementById("stream");
  const promptForm = document.getElementById("promptForm");
  const cmdInput = document.getElementById("cmdInput");
  const cardTitle = document.getElementById("cardTitle");
  const cardBody = document.getElementById("cardBody");
  const langToggle = document.getElementById("langToggle");
  const themeToggle = document.getElementById("themeToggle");
  const boot = document.getElementById("bootScreen");
  const bootLine = document.getElementById("bootLine");
  const bootProgress = document.getElementById("bootProgress");

  const line = (text, cls = "") => {
    const p = document.createElement("p");
    p.textContent = text;
    if (cls) p.className = cls;
    stream.appendChild(p);
    stream.scrollTop = stream.scrollHeight;
  };

  const renderCard = (moduleKey) => {
    const module = t[state.lang].modules[moduleKey];
    if (!module) return;

    state.activeModule = moduleKey;
    cardTitle.textContent = module.title;

    cardBody.replaceChildren();

    module.lines.forEach((txt) => {
      const p = document.createElement("p");
      p.textContent = txt;
      cardBody.appendChild(p);
    });

    if (module.bullets.length) {
      const ul = document.createElement("ul");
      module.bullets.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      cardBody.appendChild(ul);
    }

    line(`[sys] module '${moduleKey}' loaded.`, "sys");
  };

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    line(`visitor@jpml:~$ ${cmd}`, "cmd");

    if (cmd === "help") {
      t[state.lang].help.forEach((msg, i) => line(msg, i === 0 ? "ok" : "sys"));
      return;
    }

    if (cmd === "clear") {
      stream.replaceChildren();
      t[state.lang].welcome.forEach((msg, i) => line(msg, i === 0 ? "ok" : "sys"));
      return;
    }

    if (cmd.startsWith("open ")) {
      const moduleKey = cmd.replace("open ", "").trim();
      if (Object.hasOwn(t[state.lang].modules, moduleKey)) {
        renderCard(moduleKey);
      } else {
        line(t[state.lang].unknown, "warn");
      }
      return;
    }

    line(t[state.lang].unknown, "warn");
  };

  const applyLanguage = () => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      el.textContent = t[state.lang][key];
    });
    document.documentElement.lang = state.lang === "pt-BR" ? "pt-BR" : "en";
    langToggle.textContent = state.lang === "pt-BR" ? "EN" : "PT-BR";

    stream.replaceChildren();
    t[state.lang].welcome.forEach((msg, i) => line(msg, i === 0 ? "ok" : "sys"));
    renderCard(state.activeModule);
=======
  const dict = {
    "pt-BR": {
      boot: "inicialização concluída · canal seguro estabelecido",
      heroTitle: "Engenheiro de Segurança",
      heroSummary:
        "Portfólio profissional guiado por terminal, com base prática em infraestrutura, maturidade operacional e mentalidade orientada à segurança.",
      aboutHeading: "Módulo de Perfil",
      aboutBody:
        "Baseado em São Paulo, Brasil, João combina experiência técnica de campo com curiosidade por sistemas modernos. Sua trajetória inclui rotinas de infraestrutura, cabeamento estruturado, operações com fibra óptica, instalação e manutenção, suporte técnico, familiaridade com Linux e uma direção clara para engenharia de segurança e ambientes digitais robustos.",
      skillsHeading: "Matriz de Capacidades",
      expHeading: "Log de Trajetória",
      exp1Title: "Base de Campo e Infraestrutura",
      exp1Body:
        "Atuação prática conectada à execução de infraestrutura, ambiente físico de rede e operação técnica confiável.",
      exp2Title: "Suporte e Maturidade Operacional",
      exp2Body:
        "Suporte técnico voltado ao usuário, disciplina de troubleshooting e foco em continuidade de serviço sob rotinas reais.",
      exp3Title: "Direção para Engenharia de Segurança",
      exp3Body:
        "Evolução contínua em pensamento secure-by-default, mentalidade de hardening e modernização tecnológica com fundamentos sólidos.",
      projHeading: "Console de Projetos",
      projBody:
        "Este módulo prioriza qualidade acima de volume. O foco atual é fortalecer fundamentos, entregar soluções confiáveis e construir sistemas com consciência de segurança.",
      projCardTitle: "Sistema de Portfólio em Comando",
      projCardBody:
        "Uma interface bilíngue, com suporte a temas e linguagem de terminal, desenhada como um centro profissional de identidade, trajetória e posicionamento técnico.",
      contactHeading: "Canal Seguro de Contato",
      locationLabel: "Localização",
      footer: "Assinatura do sistema: base prática · ambição em segurança · direção moderna."
    },
    en: {
      boot: "system init complete · secure channel established",
      heroTitle: "Security Engineer",
      heroSummary:
        "Terminal-driven professional portfolio with a practical infrastructure background, operational maturity and a security-oriented mindset.",
      aboutHeading: "Profile Module",
      aboutBody:
        "Based in São Paulo, Brasil, João combines field-level technical experience with modern systems curiosity. His path includes infrastructure routines, structured cabling, fiber optics operations, installation and maintenance, technical support, Linux familiarity, and a clear direction toward security engineering and robust digital environments.",
      skillsHeading: "Capabilities Matrix",
      expHeading: "Trajectory Log",
      exp1Title: "Field & Infrastructure Foundation",
      exp1Body:
        "Practical work connected to infrastructure execution, physical network environment, and dependable technical operation.",
      exp2Title: "Support & Operational Maturity",
      exp2Body:
        "User-facing technical support, troubleshooting discipline, and service continuity focus under real routine constraints.",
      exp3Title: "Security Engineering Direction",
      exp3Body:
        "Ongoing growth in secure-by-default thinking, systems hardening mindset, and modern technology evolution with disciplined foundations.",
      projHeading: "Project Console",
      projBody:
        "This module intentionally prioritizes quality over volume. Current focus is strengthening fundamentals, shipping reliable solutions, and building security-conscious systems.",
      projCardTitle: "Command Portfolio System",
      projCardBody:
        "A bilingual, theme-aware, terminal-inspired interface designed as a professional command center for identity, trajectory, and technical positioning.",
      contactHeading: "Secure Contact Channel",
      locationLabel: "Location",
      footer: "System signature: practical roots · security ambition · modern direction."
    }
  };

  const state = {
    lang: "en",
    theme: document.documentElement.getAttribute("data-theme") || "dark"
  };

  const langToggle = document.getElementById("langToggle");
  const themeToggle = document.getElementById("themeToggle");
  const bootMessage = document.getElementById("bootMessage");

  const applyLanguage = () => {
    const selected = dict[state.lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (Object.hasOwn(selected, key)) {
        el.textContent = selected[key];
      }
    });
    bootMessage.textContent = selected.boot;
    langToggle.textContent = state.lang === "en" ? "PT-BR" : "EN";
    document.documentElement.lang = state.lang === "en" ? "en" : "pt-BR";
    flashPanel("home");
>>>>>>> main
  };

  const applyTheme = () => {
    document.documentElement.setAttribute("data-theme", state.theme);
    themeToggle.textContent = state.theme === "dark" ? "☾" : "☼";
  };

<<<<<<< HEAD
  const bootSequence = async () => {
    for (let i = 0; i < t[state.lang].bootStages.length; i += 1) {
      bootLine.textContent = t[state.lang].bootStages[i];
      bootProgress.style.width = `${(i + 1) * 25}%`;
      await new Promise((resolve) => setTimeout(resolve, 420));
    }
    boot.classList.add("hidden");
    setTimeout(() => boot.remove(), 450);
  };

  promptForm.addEventListener("submit", (e) => {
    e.preventDefault();
    runCommand(cmdInput.value);
    cmdInput.value = "";
  });

  document.querySelectorAll(".module-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      runCommand(btn.dataset.cmd || "help");
    });
  });

  langToggle.addEventListener("click", () => {
    state.lang = state.lang === "pt-BR" ? "en" : "pt-BR";
=======
  const flashPanel = (id) => {
    const panel = document.getElementById(id);
    if (!panel) return;
    panel.classList.remove("flash");
    requestAnimationFrame(() => panel.classList.add("flash"));
  };

  langToggle.addEventListener("click", () => {
    state.lang = state.lang === "en" ? "pt-BR" : "en";
>>>>>>> main
    applyLanguage();
  });

  themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme();
<<<<<<< HEAD
    line(`[sys] theme switched to ${state.theme}.`, "sys");
  });

  applyTheme();
  applyLanguage();
  bootSequence();
=======
    flashPanel("home");
  });

  document.querySelectorAll(".cmd-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.target;
      const section = document.getElementById(id);
      if (!section) return;
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      flashPanel(id);
    });
  });

  applyLanguage();
  applyTheme();
>>>>>>> main
})();
