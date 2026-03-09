(() => {
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

  const hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);

  const init = () => {
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

    if (!stream || !promptForm || !cmdInput || !cardTitle || !cardBody || !langToggle || !themeToggle) {
      return;
    }

    const clearNode = (node) => {
      node.textContent = "";
    };

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
      clearNode(cardBody);

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
        clearNode(stream);
        t[state.lang].welcome.forEach((msg, i) => line(msg, i === 0 ? "ok" : "sys"));
        return;
      }

      if (cmd.startsWith("open ")) {
        const moduleKey = cmd.replace("open ", "").trim();
        if (hasOwn(t[state.lang].modules, moduleKey)) {
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
        if (hasOwn(t[state.lang], key)) {
          el.textContent = t[state.lang][key];
        }
      });
      document.documentElement.lang = state.lang === "pt-BR" ? "pt-BR" : "en";
      langToggle.textContent = state.lang === "pt-BR" ? "EN" : "PT-BR";

      clearNode(stream);
      t[state.lang].welcome.forEach((msg, i) => line(msg, i === 0 ? "ok" : "sys"));
      renderCard(state.activeModule);
    };

    const applyTheme = () => {
      document.documentElement.setAttribute("data-theme", state.theme);
      themeToggle.textContent = state.theme === "dark" ? "☾" : "☼";
    };

    const hideBoot = () => {
      if (!boot) return;
      boot.classList.add("hidden");
      setTimeout(() => {
        if (boot && boot.parentNode) boot.remove();
      }, 500);
    };

    const bootSequence = async () => {
      if (!boot || !bootLine || !bootProgress) return;

      for (let i = 0; i < t[state.lang].bootStages.length; i += 1) {
        bootLine.textContent = t[state.lang].bootStages[i];
        bootProgress.style.width = `${(i + 1) * 25}%`;
        await new Promise((resolve) => setTimeout(resolve, 380));
      }

      hideBoot();
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
      applyLanguage();
    });

    themeToggle.addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      applyTheme();
      line(`[sys] theme switched to ${state.theme}.`, "sys");
    });

    applyTheme();
    applyLanguage();

    setTimeout(hideBoot, 4500);
    bootSequence();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
