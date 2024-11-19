const storyData = {
    inicio: {
      title: "A Jornada Começa",
      text: `Em meio à vastidão de Idris, onde o sol nunca brilha completamente e a brisa parece sussurrar segredos do passado, Clary Fairchild se depara com algo extraordinário. No fundo de uma antiga biblioteca, entre as pilhas de livros envelhecidos e páginas amareladas, ela encontra um manuscrito enigmático. Seus olhos brilham com curiosidade ao perceber que os símbolos rúnicos que adornam o papel parecem vivos, pulsando com uma energia desconhecida. O título, quase ilegível devido ao desgaste do tempo, fala sobre um lugar chamado "Reino dos Silis", uma dimensão etérea onde as emoções humanas se tornam tangíveis.
  
        A história fala de criaturas feitas de pura luz e energia, os Silis, seres que guardam as emoções mais profundas da humanidade: o amor, a esperança, o medo e o ódio. Mas algo está errado nesse reino; uma ameaça está à espreita, alguém está caçando essas criaturas para usá-las como armas.
  
        Clary sente o peso dessa descoberta. Ela pode <a href="?step=preparativos">reunir seus amigos e partir em uma missão</a> para salvar o Reino dos Silis, enfrentando desafios desconhecidos. Ou, talvez, prefira <a href="?step=ignorando-manuscrito">ignorar o manuscrito</a>, mantendo-se afastada dessa perigosa aventura.`,
    },
    preparativos: {
      title: "Os Preparativos",
      text: `Com o manuscrito em mãos, Clary corre até a casa de Jace, onde os dois, juntamente com Isabelle, Alec e Magnus Bane, se reúnem para discutir o que fazer a seguir. Magnus, sempre cauteloso, observa o pergaminho com cuidado, seus olhos piscando com uma preocupação sutil. Ele avisa que abrir um portal para o Reino dos Silis não será uma tarefa fácil. "Este portal só responderá a corações puros, e mesmo assim, os riscos são altos", diz Magnus, suas palavras pesando no ar.
  
        A decisão parece difícil, mas Clary sabe que se não agir, o Reino dos Silis e as emoções humanas estarão em perigo. Decidindo prosseguir, eles podem <a href="?step=entrar-no-portal">tentar atravessar o portal</a>, enfrentando os riscos, ou, em um momento de hesitação, <a href="?step=desistir">desistir da missão</a>.`,
    },
    "entrar-no-portal": {
      title: "Atravessando o Portal",
      text: `O portal se abre diante de seus olhos, uma fenda dourada no espaço que parece se expandir e se fechar ao mesmo tempo. Ao atravessá-lo, uma luz intensa envolve o grupo, fazendo com que seus corações batam mais rápido. De repente, eles se encontram em um mundo diferente — um lugar onde as cores do céu parecem refletir suas próprias emoções. Os cristais flutuam ao redor, pulsando em harmonia com seus sentimentos. Cada passo em solo etéreo é seguido por um som suave e melódico, como se o próprio ambiente estivesse vivo e reagindo à sua presença.
  
        No entanto, a beleza do lugar é rapidamente obscurecida pela presença de criaturas sombrias. Nuvens negras se formam no ar, e figuras nebulosas emergem da névoa, os Espectros das Dúvidas. Eles atacam, não com lâminas ou magia, mas com palavras — sussurros venenosos que penetram em suas mentes e alimentam os medos e inseguranças mais profundos.
  
        Agora, o grupo pode <a href="?step=enfrentar-espectros">enfrentar os Espectros</a>, desafiando suas próprias inseguranças, ou <a href="?step=fugir">fugir para buscar uma saída</a> antes que os Espectros os dominem.`,
    },
    desistir: {
      title: "Jornada Abandonada",
      text: `O medo e a incerteza tomam conta de você e, por mais difícil que seja, você decide <a href="?step=desistir">abandonar a missão</a>. O Reino dos Silis permanecerá em perigo, mas sua segurança e paz de espírito valem mais neste momento. O silêncio no ar é profundo, e enquanto você se afasta, a sensação de impotência cresce. Talvez o destino do Reino dos Silis devesse ter ficado nas mãos de outros.
  
        <br><br><strong>Fim da história.</strong>
        <br><br><a href="?step=inicio" id="restart">Começar novamente</a>`,
    },
    "ignorando-manuscrito": {
      title: "Ignorando o Manuscrito",
      text: `Apesar da intrigante descoberta, você decide que a vida cotidiana é mais segura e escolhe <a href="?step=ignorando-manuscrito">não seguir adiante</a>. A ameaça ao Reino dos Silis continua, mas seus passos seguem em frente, sem mais preocupações com aquele mundo distante. Contudo, uma sensação estranha de que você poderia ter feito a diferença persiste. Talvez, um dia, alguém mais vá assumir esse fardo.
  
        <br><br><strong>Fim da história.</strong>
        <br><br><a href="?step=inicio" id="restart">Começar novamente</a>`,
    },
    "enfrentar-espectros": {
      title: "Enfrentando os Espectros",
      text: `As criaturas nebulosas cercam você e seus amigos. Cada um é atacado pelos Espectros das Dúvidas, que distorcem suas mentes e seus corações, confrontando-os com os medos mais profundos. Clary é invadida pela culpa, Jace é assolado pelo medo de não ser digno do amor. Alec vê imagens de um futuro solitário, e Isabelle tem suas dúvidas sobre sua própria força.
  
        Mas, contra as trevas, uma luz brilha. Eles conseguem resistir, encontrando forças dentro de si mesmos. "Esses espectros alimentam-se de nossas inseguranças. Precisamos enfrentá-las", grita Isabelle, com a voz firme. Com coragem renovada, eles seguem em frente, até chegar ao templo onde Jonathan Morgenstern aguarda.
  
        Eles podem <a href="?step=confronto-final">ir ao templo</a> para enfrentar Jonathan ou <a href="?step=desistir">abandonar a missão</a>, incapazes de lidar com os desafios.`,
    },
    "confronto-final": {
      title: "O Confronto Final",
      text: `O templo cristalino brilha intensamente, iluminado pela energia das emoções dos Silis. Jonathan Morgenstern está no centro, com a aura do Silis do Amor brilhando em um tom púrpura perturbador. Ele sorri maliciosamente ao ver os Caçadores de Sombras, seus olhos refletindo uma mistura de ódio e triunfo.
  
        "Vocês não compreendem o que estou tentando fazer", diz Jonathan, com uma voz carregada de desdém. "Com os Silis sob meu controle, posso manipular as emoções do mundo inteiro. O amor será uma arma, e o medo será meu escudo."
  
        Uma batalha feroz se segue, não apenas física, mas emocional. Jonathan usa os Silis para manipular os sentimentos de seus inimigos, semeando dúvidas, medos e inseguranças. No entanto, Clary, com a força da esperança, consegue libertar o Silis do Amor, quebrando o controle de Jonathan.
  
        Agora, os Silis são livres, e Jonathan perde o controle. Magnus conjura um feitiço poderoso, selando Jonathan em um fragmento cristalino que só poderá ser destruído pela união de todos os Silis.
  
        <br><br><strong>Você completou a história. Parabéns!</strong>
        <br><br><a href="?step=inicio" id="restart">Começar novamente</a>`,
    },
  };
  // Função para salvar o progresso no localStorage
  const saveLastStep = (step) => {
    localStorage.setItem("lastStep", step);
  };
  
  // Função para carregar o último passo salvo no localStorage
  const loadLastStep = () => {
    return localStorage.getItem("lastStep") || "inicio";
  };
  
  // Função para renderizar o passo atual no DOM
  const renderStep = (step) => {
    const container = document.getElementById("story-container");
    const data = storyData[step] || storyData["inicio"];
    saveLastStep(step);
  
    // Atualiza o conteúdo do container no DOM
    container.innerHTML = `
        <h1>${data.title}</h1>
        <p>${data.text}</p>
    `;
  };
  
  // Detectar cliques no botão de reinício e limpar o progresso
  document.addEventListener("click", (event) => {
    if (event.target.id === "restart") {
      localStorage.removeItem("lastStep");
    }
  });
  
  // Detectar o passo pela URL
  const urlParams = new URLSearchParams(window.location.search);
  const currentStep = urlParams.get("step") || loadLastStep();
  
  // Renderizar o passo inicial
  renderStep(currentStep);
  