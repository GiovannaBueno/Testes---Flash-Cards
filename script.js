// Função para embaralhar as alternativas
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Perguntas e Respostas
const questions = [
    {
        question: "Qual é a principal função da camada de aplicação no modelo OSI?",
        options: ["Fornecer serviços de rede para aplicativos", "Gerenciar o fluxo de dados entre sistemas", "Verificar erros de comunicação", "Estabelecer a conexão física entre dispositivos"],
        answer: 0
    },
    {
        question: "O que é um protocolo de rede?",
        options: ["Uma regra que define como os dispositivos se comunicam", "Um dispositivo de rede", "Um endereço IP", "Uma tecnologia de rede sem fio"],
        answer: 0
    },
    {
        question: "Qual dispositivo é responsável por encaminhar pacotes entre redes diferentes?",
        options: ["Switch", "Hub", "Roteador", "Repetidor"],
        answer: 2
    },
    {
        question: "O que é um endereço IP?",
        options: ["Uma etiqueta numérica usada para identificar dispositivos em uma rede", "Um protocolo de segurança de rede", "Um tipo de roteador", "Um software de firewall"],
        answer: 0
    },
    {
        question: "Qual é a função da camada de transporte no modelo OSI?",
        options: ["Dividir dados em segmentos e garantir a entrega confiável", "Definir a codificação de dados", "Gerenciar endereços físicos", "Estabelecer a conexão física entre os dispositivos"],
        answer: 0
    },
    {
        question: "Qual das opções abaixo é um exemplo de protocolo da camada de transporte?",
        options: ["TCP", "HTTP", "Ethernet", "IP"],
        answer: 0
    },
    {
        question: "Qual é a função da camada de rede no modelo OSI?",
        options: ["Fornecer endereçamento lógico e roteamento de pacotes", "Estabelecer a conexão física", "Gerenciar as sessões de comunicação", "Definir a estrutura de dados"],
        answer: 0
    },
    {
        question: "O que é uma topologia de rede?",
        options: ["A disposição física ou lógica dos dispositivos na rede", "Um tipo de endereço IP", "Um protocolo de segurança", "Um dispositivo de rede"],
        answer: 0
    },
    {
        question: "Qual protocolo é responsável pela resolução de endereços IP para endereços MAC?",
        options: ["ARP", "DNS", "HTTP", "TCP"],
        answer: 0
    },
    {
        question: "O que significa a sigla 'LAN'?",
        options: ["Local Area Network", "Large Area Network", "Logical Area Network", "Limited Access Network"],
        answer: 0
    },
    {
        question: "O que é a camada de enlace de dados no modelo OSI?",
        options: ["A camada que gerencia os endereços físicos e detecta erros na camada física", "A camada que controla a comunicação de sessão", "A camada que fornece serviços de rede", "A camada que gerencia o roteamento de pacotes"],
        answer: 0
    },
    {
        question: "Qual é a principal diferença entre um hub e um switch?",
        options: ["Um switch envia dados apenas ao dispositivo correto, enquanto um hub transmite para todos os dispositivos na rede", "Um hub é mais rápido que um switch", "Um hub é um dispositivo sem fio, enquanto o switch usa cabos", "Não há diferença"],
        answer: 0
    },
    {
        question: "Qual protocolo é usado para atribuir dinamicamente endereços IP a dispositivos em uma rede?",
        options: ["DHCP", "DNS", "HTTP", "FTP"],
        answer: 0
    },
    {
        question: "O que significa a sigla 'WAN'?",
        options: ["Wide Area Network", "Wireless Area Network", "Wired Access Network", "Wide Application Network"],
        answer: 0
    },
    {
        question: "Qual é a função da camada de apresentação no modelo OSI?",
        options: ["Traduzir, criptografar e comprimir dados", "Estabelecer a conexão física entre dispositivos", "Definir o endereçamento de rede", "Fornecer transporte confiável de dados"],
        answer: 0
    },
    {
        question: "O que significa a sigla 'DNS'?",
        options: ["Domain Name System", "Data Network Service", "Digital Network Service", "Domain Network Security"],
        answer: 0
    },
    {
        question: "Qual dispositivo é usado para ampliar o sinal de uma rede sem fio?",
        options: ["Repetidor", "Switch", "Hub", "Roteador"],
        answer: 0
    },
    {
        question: "Qual camada do modelo OSI é responsável pelo controle de erros e fluxo de dados?",
        options: ["Transporte", "Rede", "Enlace de Dados", "Sessão"],
        answer: 0
    },
    {
        question: "O que é um endereço MAC?",
        options: ["Um identificador físico exclusivo atribuído a interfaces de rede", "Um endereço IP de um servidor", "Um protocolo de roteamento", "Uma tecnologia de firewall"],
        answer: 0
    },
    {
        question: "Qual é o principal propósito do protocolo HTTP?",
        options: ["Transferir páginas web entre cliente e servidor", "Fornecer criptografia de dados", "Proteger contra ataques de rede", "Gerenciar endereços IP"],
        answer: 0
    },
    {
        question: "O que significa a sigla 'FTP'?",
        options: ["File Transfer Protocol", "Fast Transfer Protocol", "Fixed Transfer Protocol", "File Transmission Protocol"],
        answer: 0
    },
    {
        question: "Qual protocolo é utilizado para enviar e-mails?",
        options: ["SMTP", "FTP", "HTTP", "DHCP"],
        answer: 0
    },
    {
        question: "O que significa a sigla 'TCP'?",
        options: ["Transmission Control Protocol", "Transfer Control Protocol", "Transport Communication Protocol", "Transmission Communication Protocol"],
        answer: 0
    },
    {
        question: "Qual é a função de um firewall em uma rede?",
        options: ["Proteger a rede controlando o tráfego de entrada e saída", "Aumentar a velocidade da conexão", "Armazenar dados", "Gerenciar endereços IP"],
        answer: 0
    },
    {
        question: "O que é uma VPN?",
        options: ["Rede Privada Virtual", "Rede Pública Virtual", "Rede Privada Local", "Rede Virtual Acessível"],
        answer: 0
    },
    {
        question: "Qual é a função do protocolo ICMP?",
        options: ["Monitorar e controlar erros na transmissão de dados", "Transferir dados entre servidores", "Gerenciar endereços IP", "Enviar e-mails"],
        answer: 0
    },
    {
        question: "Qual é a principal diferença entre TCP e IP?",
        options: ["TCP é um protocolo de transporte, enquanto IP é um protocolo de rede", "TCP é um protocolo de rede, enquanto IP é um protocolo de transporte", "Ambos são protocolos de transporte", "Ambos são protocolos de rede"],
        answer: 0
    },
    {
        question: "Qual é a função de um modem em uma rede?",
        options: ["Converter sinais digitais em analógicos e vice-versa", "Proteger a rede", "Aumentar a largura de banda", "Armazenar dados"],
        answer: 0
    },
    {
        question: "O que significa 'QoS' em redes?",
        options: ["Quality of Service", "Quantity of Service", "Quick Operating System", "Quality Operating System"],
        answer: 0
    },
    {
        question: "Qual é a função de um 'access point'?",
        options: ["Fornecer conectividade sem fio a dispositivos", "Aumentar a segurança da rede", "Armazenar arquivos", "Gerenciar endereços IP"],
        answer: 0
    },
    {
        question: "Qual é a diferença entre um 'hub' e um 'switch'?",
        options: ["Um switch pode enviar dados apenas para o dispositivo correto, enquanto um hub envia para todos", "Um hub é mais inteligente que um switch", "Um hub é usado para redes sem fio, enquanto um switch é usado para redes com fio", "Não há diferença"],
        answer: 0
    },
    {
        question: "O que significa a sigla 'VoIP'?",
        options: ["Voice over Internet Protocol", "Video over Internet Protocol", "Voice on Internet Protocol", "Voice over Integrated Protocol"],
        answer: 0
    },
    {
        question: "Qual é o propósito de um 'load balancer'?",
        options: ["Distribuir a carga de trabalho entre vários servidores", "Aumentar a segurança da rede", "Armazenar dados em cache", "Aumentar a velocidade da conexão"],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextBtn = document.getElementById("nextBtn");
    const feedbackElement = document.getElementById("feedback");

    const currentQuestion = questions[currentQuestionIndex];
    const shuffledOptions = [...currentQuestion.options];  // Copiar as opções antes de embaralhar
    shuffleArray(shuffledOptions);  // Embaralha as opções

    // Exibir a pergunta
    questionElement.textContent = currentQuestion.question;

    // Exibir as opções embaralhadas
    optionsElement.innerHTML = '';
    shuffledOptions.forEach(option => {
        const optionElement = document.createElement("div");
        optionElement.textContent = option;
        optionElement.className = "option";
        optionElement.onclick = () => selectOption(option, currentQuestion);
        optionsElement.appendChild(optionElement);
    });

    nextBtn.classList.add("hidden");
    feedbackElement.textContent = '';
}

function selectOption(selectedOption, currentQuestion) {
    const feedbackElement = document.getElementById("feedback");
    const nextBtn = document.getElementById("nextBtn");
    
    const correctAnswer = currentQuestion.options[currentQuestion.answer];
    
    if (selectedOption === correctAnswer) {
        feedbackElement.textContent = "Correto!";
        feedbackElement.className = "feedback correct";
        score++;
    } else {
        feedbackElement.textContent = `Incorreto! A resposta correta era: ${correctAnswer}`;
        feedbackElement.className = "feedback incorrect";
    }

    const optionsElements = document.querySelectorAll(".option");
    optionsElements.forEach(optionElement => {
        if (optionElement.textContent === correctAnswer) {
            optionElement.classList.add("correct");
        } else if (optionElement.textContent === selectedOption) {
            optionElement.classList.add("incorrect");
        }
    });

    nextBtn.classList.remove("hidden");
}

function showResults() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");
    const nextBtn = document.getElementById("nextBtn");

    questionElement.textContent = `Você terminou! Sua pontuação é: ${score}/${questions.length}`;
    optionsElement.innerHTML = '';
    feedbackElement.textContent = '';
    nextBtn.classList.add("hidden");
}

document.getElementById("nextBtn").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
});

// Adicionar evento de escuta para a tecla "Enter"
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const nextBtn = document.getElementById("nextBtn");
        if (!nextBtn.classList.contains("hidden")) {
            nextBtn.click();  // Simula o clique no botão "Próximo"
        }
    }
});

// Iniciar o quiz
showQuestion();
