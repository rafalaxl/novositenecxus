const WHATSAPP_NUMBER = "5515997047914";

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('quizContainer');
  const bar = document.getElementById('progressBar');
  const state = { step: 1, ans: { name: '', company: '', email: '', obj: '', tech: '', budget: '', time: '' } };

  const steps = [
    { t: "Qual é o principal objetivo do seu novo site?", f: "obj", p: "30%", o: [
      "Apresentar um serviço ou produto específico de forma clara e direta",
      "Ter um espaço oficial para minha marca que passe confiança e profissionalismo",
      "Melhorar um site que já tenho e que hoje me dá mais dor de cabeça do que ajuda",
      "Outro Projeto Personalizado"
    ]},
    { t: "Qual é a sua maior dificuldade com o digital hoje?", f: "tech", p: "50%", o: [
      "A tecnologia me confunde e eu acabo perdendo tempo tentando entender",
      "Dependo de outras pessoas para fazer mudanças simples e isso atrasa meu trabalho",
      "Sinto que minha empresa não passa a imagem profissional que tem no mundo real",
      "Não tenho presença digital e não sei por onde começar"
    ]},
    { t: "Qual o nível de investimento planejado para esse passo digital?", f: "budget", p: "70%", o: [
      "R$ 3.000 a R$ 5.000 (Ideal para uma página objetiva e clara)",
      "R$ 5.000 a R$ 10.000 (Ideal para um site completo e estruturado)",
      "Acima de R$ 10.000 (Ideal para integração de sistemas e projetos complexos)",
      "Estou apenas pesquisando preços no momento"
    ]},
    { t: "Em quanto tempo você precisa deste site no ar?", f: "time", p: "90%", o: [
      "Urgente (Em menos de 15 dias)",
      "Médio Prazo (Entre 15 e 30 dias)",
      "Planejado (Mais de 30 dias)"
    ]}
  ];

  const showErr = (msg) => {
    const el = container.querySelector('.error-msg');
    el.textContent = msg;
    el.style.display = 'block';
  };

  const start = document.getElementById('btnStart');
  if (start) start.addEventListener('click', () => { state.step = 2; render(); });

  function render() {
    if (state.step >= 2 && state.step <= 5) {
      const s = steps[state.step - 2];
      bar.style.width = s.p;
      container.innerHTML = `
        <div class="quiz-step">
          <h2 class="text-xl font-heading" style="margin-bottom: var(--necxus-space-4); color: var(--necxus-color-text-primary);">${s.t}</h2>
          <p class="error-msg" style="color:#ff4a4a; font-size:var(--necxus-font-size-sm); margin-bottom:var(--necxus-space-4); display:none;"></p>
          <div class="quiz-options">${s.o.map(o => `<button class="option-btn ${state.ans[s.f] === o ? 'selected' : ''}" data-val="${o}">${o}</button>`).join('')}</div>
          <button class="btn btn-cyan" style="width:100%;" id="btnNext">Avançar</button>
        </div>`;

      container.querySelectorAll('.option-btn').forEach(b => b.addEventListener('click', () => {
        container.querySelectorAll('.option-btn').forEach(x => x.classList.remove('selected'));
        b.classList.add('selected');
        state.ans[s.f] = b.dataset.val;
      }));

      document.getElementById('btnNext').addEventListener('click', () => {
        if (!state.ans[s.f]) return showErr("Selecione uma das opções acima antes de avançar para a próxima etapa.");
        state.step++;
        render();
      });
    } else if (state.step === 6) {
      bar.style.width = "100%";
      container.innerHTML = `
        <div class="quiz-step">
          <h2 class="text-xl font-heading" style="margin-bottom: var(--necxus-space-4); color: var(--necxus-color-text-primary);">Quase lá. Como podemos te chamar e onde enviamos a análise?</h2>
          <p class="error-msg" style="color:#ff4a4a; font-size:var(--necxus-font-size-sm); margin-bottom:var(--necxus-space-4); display:none;"></p>
          <div class="form-group"><label class="form-label">Seu nome completo (Ex: Rafael Silva)</label><input type="text" class="input-field" id="iName" value="${state.ans.name}"></div>
          <div class="form-group"><label class="form-label">Nome da sua empresa (Ex: Vello Capital)</label><input type="text" class="input-field" id="iComp" value="${state.ans.company}"></div>
          <div class="form-group"><label class="form-label">E-mail corporativo (Ex: nome@empresa.com)</label><input type="email" class="input-field" id="iMail" value="${state.ans.email}"></div>
          <button class="btn btn-cyan" style="width:100%;" id="btnSubmit">Concluir Triagem e Ver Resultado</button>
        </div>`;

      document.getElementById('btnSubmit').addEventListener('click', () => {
        const n = document.getElementById('iName').value.trim(), c = document.getElementById('iComp').value.trim(), e = document.getElementById('iMail').value.trim();
        if (!n) return showErr("Insira seu nome completo para prosseguir.");
        if (!c) return showErr("Por favor, info nome da sua empresa.");
        if (!e || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) return showErr("Por favor, digite um endereço de e-mail corporativo válido (Ex: nome@empresa.com).");
        Object.assign(state.ans, { name: n, company: c, email: e });
        runLoading();
      });
    }
  }

  function runLoading() {
    const msgs = ["Processando suas respostas...", "Pensando na melhor estrutura para facilitar o seu dia a dia...", "Verificando o diagnóstico da sua marca...", "Montando um resumo com a melhor solução..."];
    let idx = 0;
    container.innerHTML = `
      <div style="text-align:center; padding:var(--necxus-space-8);">
        <div class="loading-spinner" style="border:4px solid rgba(255,255,255,0.1); border-top:4px solid var(--necxus-color-accent-cyan,#06b6d4); border-radius:50%; width:40px; height:40px; animation:spin 1s linear infinite; margin:0 auto var(--necxus-space-6);"></div>
        <p id="lText" style="color:var(--necxus-color-text-secondary); font-size:var(--necxus-font-size-base); transition:opacity 0.3s;"></p>
      </div>`;
    
    if (!document.getElementById('lStyle')) {
      const s = document.createElement('style'); s.id = 'lStyle'; s.textContent = `@keyframes spin {0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}`;
      document.head.appendChild(s);
    }
    const txt = document.getElementById('lText');
    const stepLoading = () => {
      if (idx < msgs.length) {
        txt.style.opacity = 0;
        setTimeout(() => {
          txt.textContent = msgs[idx++];
          txt.style.opacity = 1;
          setTimeout(stepLoading, 1200);
        }, 200);
      } else showResult();
    };
    stepLoading();
  }

  function showResult() {
    const msg = `Olá Rafael, acabei de realizar a triagem no site da Necxus. Aqui estão os detalhes do meu projeto:\n\n` +
      `- Nome: ${state.ans.name}\n` +
      `- Empresa: ${state.ans.company}\n` +
      `- E-mail: ${state.ans.email}\n` +
      `- Objetivo do site: ${state.ans.obj}\n` +
      `- Maior dificuldade: ${state.ans.tech}\n` +
      `- Investimento planejado: ${state.ans.budget}\n` +
      `- Prazo de entrega: ${state.ans.time}\n\n` +
      `Gostaria de agendar um bate-papo para entendermos juntos como o digital pode ser um verdadeiro aliado para a minha marca.`;

    container.innerHTML = `
      <div class="quiz-step">
        <h2 class="text-xl font-heading" style="margin-bottom: var(--necxus-space-4); color: var(--necxus-color-text-primary);">Tudo pronto!</h2>
        <p class="text-secondary" style="margin-bottom: var(--necxus-space-8); line-height: 1.6;">
          Analisamos as suas respostas e temos um ótimo caminho para te ajudar com o seu ambiente digital. O Rafael irá te atender pessoalmente agora.<br><br>
          Clique no botão abaixo para conversar no WhatsApp. Um resumo das suas respostas já estará preenchido para facilitar nosso contato.
        </p>
        <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener noreferrer" class="btn btn-cyan" style="width: 100%; text-decoration: none; display: flex; align-items: center; justify-content: center;">
          Falar com o Rafael pelo WhatsApp
        </a>
      </div>`;
  }
});
