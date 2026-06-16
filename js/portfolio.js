const projects = [
  {
    title: "Sandra Domingues",
    category: "Estética Corporal e Saúde Avançada",
    challenge: "Transmitir autoridade de mercado e expertise clínica em tratamentos de diástase e pós-operatório de forma sóbria e elegante, atraindo agendamentos locais qualificados de ticket elevado em Itapeva - SP.",
    solution: "Site institucional multipágina com tempo de resposta ágil, galeria interativa de antes/depois (\"before-after slider\" com controle deslizante), barra de busca e filtragem dinâmica sem recarregamento para os 24 serviços da clínica.",
    result: "Consolidação do posicionamento da marca regionalmente, redução drástica no tempo de suporte inicial por meio de filtragem ativa de serviços no próprio site e captação qualificada via WhatsApp.",
    stack: "HTML5 • CSS Moderno • Vanilla JS • Slider Interativo",
    image: "assets/sandradomingues.webp",
    link: "https://sandradomingues.com.br",
    cta: "Conhecer Tratamentos e Agendar Consulta"
  },
  {
    title: "Hara Palace Hotel",
    category: "Hotelaria e Turismo",
    challenge: "Alta dependência de plataformas de reservas terceirizadas (OTAs como Booking e Decolar) que cobram comissões abusivas, reduzindo a rentabilidade direta das reservas do hotel em Curitiba - PR.",
    solution: "Landing page de alta performance construída em Next.js focada em conversão direta, implementando um fluxo interativo de cotação de reservas (check-in, check-out, hóspedes e quartos) conectado ao canal direto de vendas no WhatsApp.",
    result: "Redução expressiva de custos transacionais em comissões, acentuação do fluxo interno de reservas diretas e apresentação mais clara dos diferenciais do hotel.",
    stack: "Next.js • React • CSS Moderno • Integração WhatsApp",
    image: "assets/mobile_first.webp",
    link: "https://hotelhara.vercel.app/",
    cta: "Realizar Cotação de Reserva Direta"
  },
  {
    title: "Almeida & Associados",
    category: "Advocacia Corporativa Boutique",
    challenge: "Construir credibilidade visual e autoridade técnica para sócios e diretores de empresas de médio e grande porte em São Paulo - SP, respeitando as estritas diretrizes éticas da OAB.",
    solution: "Site institucional estático desenvolvido em Astro, com tipografia geométrica refinada, seções claras de especialidades jurídicas (societário, holding e contencioso complexo) e chamadas discretas para consultas presença ou remotas.",
    result: "Carregamento ultra-rápido de páginas (nota máxima no Lighthouse), fortalecimento da marca em canais de tráfego corporativo B2B e qualificação prévia de leads jurídicos.",
    stack: "Astro • HTML5 • Tailwind CSS • SEO Otimizado",
    image: "assets/desenvolvimento.webp",
    link: "https://almeida-associados-advocacia.vercel.app/",
    cta: "Agendar Consulta Jurídica Técnica"
  },
  {
    title: "Bento Express Premium",
    category: "Gastronomia Contemporânea e Culinária Japonesa",
    challenge: "Dependência extrema de taxas de comissão e falta de controle da identidade visual em aplicativos de delivery como o iFood na região da Av. Paulista.",
    solution: "Landing page responsiva ultra-leve com design focado em mobile, otimização de imagens em formatos de última geração com lazy loading, cardápio digital condensado e chamadas diretas de \"Peça pelo WhatsApp\".",
    result: "Aumento de margens de lucro operacionais em pedidos diretos e rapidez na atualização diária dos pratos em destaque.",
    stack: "HTML5 • CSS Puro • Vanilla JS • Otimização de Imagens",
    image: "assets/bento-restaurant.webp",
    link: "https://bento-restaurant.vercel.app/",
    cta: "Visualizar Cardápio e Fazer Pedido"
  },
  {
    title: "FitLife Studio",
    category: "Personal Trainer e Academia Boutique",
    challenge: "Quebrar o receio e a desconfiança de pessoas sedentárias em relação a academias barulhentas convencionais, incentivando o agendamento de uma sessão experimental gratuita.",
    solution: "Landing page interativa com quiz de diagnóstico físico rápido de 1 minuto (perguntas sobre rotina, objetivos e histórico de lesões), gerando um incentivo personalizado de conversão no WhatsApp.",
    result: "Coleta prévia dos objetivos do aluno para preparação do treino experimental, diminuindo a resistência inicial e aumentando a taxa de conversão em matrículas presenciais.",
    stack: "HTML5 • Vanilla CSS • JavaScript Interativo (Quiz)",
    image: "assets/triagem_virtual.webp",
    link: "https://rafalaxl.github.io/SportsActivity/",
    cta: "Realizar Diagnóstico Físico Gratuito"
  },
  {
    title: "O Sonhador",
    category: "Web Game e Storytelling Interativo",
    challenge: "Demonstrar capacidade técnica front-end extrema criando uma rica narrativa interativa controlada a 60 quadros por segundo no navegador de qualquer dispositivo, sem depender de motores de jogos pesados.",
    solution: "Desenvolvimento de aplicação Canvas HTML5 de alta fidelidade e física de partículas atmosféricas, controlada inteiramente por código nativo e Vanilla JS.",
    result: "Showcase de criatividade técnica, tempo de carregamento imediato por não utilizar frameworks e alta taxa de retenção e exploração do usuário.",
    stack: "Canvas HTML5 • Vanilla JS • Física de Partículas",
    image: "assets/animacao_.webp",
    link: "https://rafalaxl.github.io/story/",
    cta: "Iniciar Jornada Interativa"
  },
  {
    title: "Dr. Marcos",
    category: "Medicina Estética e Transplante Capilar",
    challenge: "Estabelecer um posicionamento exclusivo de autoridade médica premium para calvície em São Paulo, distanciando-se de clínicas populares de baixo valor e cirurgias em massa.",
    solution: "Landing page de alta sofisticação em tons escuros e dourado, com explicações animadas do Protocolo Precision-Graft e triagem digital integrada de pacientes para avaliações seletivas.",
    result: "Qualificação prévia de pacientes potenciais por orçamento e gravidade de alopecia, fortalecendo a percepção de exclusividade e otimizando a agenda do médico.",
    stack: "Vite • HTML5 • CSS Moderno • Formulário de Triagem",
    image: "assets/clinica-esteticas_marcos.webp",
    link: "https://rafalaxl.github.io/clinica-esteticas/",
    cta: "Verificar Elegibilidade de Transplante"
  },
  {
    title: "Iron Vault Academy",
    category: "Musculação de Alta Performance",
    challenge: "Atrair atletas dedicados e praticantes sérios de musculação que buscam treinar com foco real em maquinários importados, sem revezamentos frequentes ou superlotação.",
    solution: "Landing page de design agressivo em tons Obsidian e tipografia Space Grotesk, com tabela comparativa de planos (mensal, semestral e anual) e imagens em alta definição que detalham os equipamentos e ambiente.",
    result: "Aumento de matrículas em planos de longo prazo (anual) e atração direcionada do perfil de aluno ideal para o espaço físico da academia.",
    stack: "HTML5 • CSS Custom Properties • Tailwind CSS • Space Grotesk Font",
    image: "assets/iron-valt.webp",
    link: "https://rafalaxl.github.io/iron-valt-landing/",
    cta: "Agendar Treino Experimental na Academia"
  },
  {
    title: "Eclipse Tattoo Studio",
    category: "Estúdio de Tatuagem Boutique",
    challenge: "Eliminar contatos desqualificados que apenas buscavam preços baixos e agilizar o processo de orçamento com coleta prévia de referências visuais e ideias de arte.",
    solution: "Landing page em Tailwind CSS estruturada em tons escuros e dourados elegantes, exibindo portfólio categorizado por estilo dos artistas e formulário avançado de briefing com envio de referências.",
    result: "Aumento do valor médio cobrado por tatuagem, eliminação de tempo gasto com propostas incompletas e facilidade de triagem dos projetos artísticos.",
    stack: "Tailwind CSS • HTML5 • JavaScript • Upload Briefing System",
    image: "assets/rafalaxl.github.io_eclipse-tattoo-studio_.webp",
    link: "https://rafalaxl.github.io/eclipse-tattoo-studio/",
    cta: "Solicitar Orçamento de Tatuagem Exclusiva"
  },
  {
    title: "Blue Server Academy",
    category: "Educação de Elite em Engenharia e IA",
    challenge: "Demonstrar profunda autoridade técnica para convencer gerentes de engenharia, tech leads e desenvolvedores seniores a se inscreverem em uma mentoria avançada de automação e agentes autônomos.",
    solution: "Landing page de alta fidelidade técnica desenvolvida com biblioteca GSAP e ScrollTrigger para animações, cursor interativo que interage com os elementos da tela e layout ultra-moderno inspirado na estética de grandes empresas de tecnologia de IA.",
    result: "Alta conversão de profissionais seniores qualificados nas turmas e fortalecimento do posicionamento educacional premium da academia no ecossistema tech.",
    stack: "HTML5 • CSS Puro • GSAP • ScrollTrigger • Vanilla JS",
    image: "assets/blue-server.webp",
    link: "https://rafalaxl.github.io/blue-server/dist/",
    cta: "Conhecer Grade da Mentoria de Elite"
  }
];

const grid = document.getElementById('portfolioGrid');
if (grid) {
  grid.innerHTML = projects.map(p => `
    <div class="glass-panel card tilt-card glow-border" style="display:flex; flex-direction:column; justify-content:space-between; overflow:hidden;">
      <div style="position:relative; width:100%; height:180px; overflow:hidden; border-radius:var(--necxus-radius-xl) var(--necxus-radius-xl) 0 0; margin-bottom:var(--necxus-space-4);">
        <img src="${p.image}" alt="${p.title}" style="width:100%; height:100%; object-fit:cover;" loading="lazy" width="360" height="180">
      </div>
      <div style="flex-grow:1; display:flex; flex-direction:column; justify-content:space-between;">
        <div>
          <span class="text-xs text-muted font-heading" style="text-transform: uppercase; letter-spacing: 0.1em; display:block; margin-bottom: var(--necxus-space-2);">${p.category}</span>
          <h3 class="card-title" style="margin-bottom:var(--necxus-space-3);">${p.title}</h3>
          <p class="text-muted text-sm" style="margin-bottom: var(--necxus-space-3);"><strong>Desafio:</strong> ${p.challenge}</p>
          <p class="text-muted text-sm" style="margin-bottom: var(--necxus-space-3);"><strong>Solução:</strong> ${p.solution}</p>
          <p class="text-primary text-sm" style="margin-bottom: var(--necxus-space-4);"><strong>Resultado:</strong> ${p.result}</p>
        </div>
        <div>
          <div class="text-xs font-heading text-muted" style="margin-bottom: var(--necxus-space-4); min-height:32px;">${p.stack}</div>
          <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="width:100%; height:42px;">${p.cta}</a>
        </div>
      </div>
    </div>
  `).join('');
}
