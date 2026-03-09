(() => {
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
  };

  const applyTheme = () => {
    document.documentElement.setAttribute("data-theme", state.theme);
    themeToggle.textContent = state.theme === "dark" ? "☾" : "☼";
  };

  const flashPanel = (id) => {
    const panel = document.getElementById(id);
    if (!panel) return;
    panel.classList.remove("flash");
    requestAnimationFrame(() => panel.classList.add("flash"));
  };

  langToggle.addEventListener("click", () => {
    state.lang = state.lang === "en" ? "pt-BR" : "en";
    applyLanguage();
  });

  themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme();
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
})();
