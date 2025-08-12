// Estado do progresso do usuário
let progressoUsuario = {
    aulasCompletas: [],
    quizCompleto: false,
    simuladorCompleto: false,
    pontuacaoQuiz: 0
};

// Dados das aulas
const aulas = {
    1: {
        titulo: "Golpe do Parente - Como Identificar",
        conteudo: `
            <h2>🚨 Golpe do Parente</h2>
            
            <div class="aula-content">
                <div class="aula-section">
                    <h3>O Golpe:</h3>
                    <p><strong>Alguém liga fingindo ser seu filho/neto pedindo dinheiro urgente.</strong></p>
                </div>

                <div class="aula-section">
                    <h3>🔴 Sinais de Perigo:</h3>
                    <div class="exemplo-golpe">
                        <ul>
                            <li><strong>Pressa:</strong> "É urgente, não posso explicar"</li>
                            <li><strong>Emergência:</strong> "Estou no hospital/delegacia"</li>
                            <li><strong>PIX:</strong> "Manda PIX para este número"</li>
                            <li><strong>Segredo:</strong> "Não conta para ninguém"</li>
                        </ul>
                    </div>
                </div>

                <div class="aula-section">
                    <h3>✅ Regra de Ouro:</h3>
                    <div class="lista-protecao">
                        <p><strong>SEMPRE DESLIGUE E LIGUE PARA O NÚMERO QUE VOCÊ TEM SALVO</strong></p>
                        <p>Se for emergência real, seu parente vai atender.</p>
                    </div>
                </div>

                <div class="aula-quiz">
                    <h3>📝 Teste Rápido:</h3>
                    <p><strong>Alguém liga dizendo ser seu neto pedindo PIX urgente. O que fazer?</strong></p>
                    <div class="mini-opcoes">
                        <button onclick="respostaMiniTeste(1, 'errado')">Fazer o PIX</button>
                        <button onclick="respostaMiniTeste(1, 'certo')">Desligar e ligar para meu neto</button>
                        <button onclick="respostaMiniTeste(1, 'errado')">Pedir mais detalhes</button>
                    </div>
                    <div id="resultado-mini-1"></div>
                </div>

                <div class="aula-footer">
                    <button class="btn-concluir" onclick="concluirAula(1)">✅ Entendi! Próxima Aula</button>
                </div>
            </div>
        `
    },
    2: {
        titulo: "E-mails e SMS Falsos",
        conteudo: `
            <h2>📧 E-mails e SMS Falsos</h2>
            
            <div class="aula-content">
                <div class="aula-section">
                    <h3>O Golpe:</h3>
                    <p><strong>Criminosos enviam e-mails/SMS fingindo ser seu banco.</strong></p>
                </div>

                <div class="aula-section">
                    <h3>🔴 Sinais de Perigo:</h3>
                    <div class="exemplo-golpe">
                        <ul>
                            <li><strong>E-mail estranho:</strong> banco123@gmail.com</li>
                            <li><strong>Urgência:</strong> "Conta será bloqueada hoje"</li>
                            <li><strong>Link suspeito:</strong> www.banco-falso.com</li>
                            <li><strong>Pede dados:</strong> senha, CPF, cartão</li>
                        </ul>
                    </div>
                </div>

                <div class="aula-section">
                    <h3>✅ Regra de Ouro:</h3>
                    <div class="lista-protecao">
                        <p><strong>NUNCA CLIQUE EM LINKS DE E-MAIL OU SMS</strong></p>
                        <p>Sempre vá direto ao app oficial do seu banco.</p>
                    </div>
                </div>

                <div class="aula-quiz">
                    <h3>📝 Teste Rápido:</h3>
                    <p><strong>SMS: "Seu PIX foi bloqueado! Clique aqui". O que fazer?</strong></p>
                    <div class="mini-opcoes">
                        <button onclick="respostaMiniTeste(2, 'errado')">Clicar no link</button>
                        <button onclick="respostaMiniTeste(2, 'certo')">Ignorar e abrir app do banco</button>
                        <button onclick="respostaMiniTeste(2, 'errado')">Responder o SMS</button>
                    </div>
                    <div id="resultado-mini-2"></div>
                </div>

                <div class="aula-footer">
                    <button class="btn-concluir" onclick="concluirAula(2)">✅ Entendi! Próxima Aula</button>
                </div>
            </div>
        `
    },
    3: {
        titulo: "Dupla Proteção (2FA)",
        conteudo: `
            <h2>🔐 Dupla Proteção</h2>
            
            <div class="aula-content">
                <div class="aula-section">
                    <h3>O que é:</h3>
                    <p><strong>É usar DUAS proteções para entrar na sua conta do banco.</strong></p>
                </div>

                <div class="aula-section">
                    <h3>🔒 Como Funciona:</h3>
                    <div class="exemplo-golpe">
                        <p><strong>1º)</strong> Você digita sua senha</p>
                        <p><strong>2º)</strong> Banco envia código no seu celular</p>
                        <p><strong>Só assim você consegue entrar!</strong></p>
                    </div>
                </div>

                <div class="aula-section">
                    <h3>✅ Por que é Importante:</h3>
                    <div class="lista-protecao">
                        <p><strong>MESMO SE ALGUÉM DESCOBRIR SUA SENHA, NÃO CONSEGUE ENTRAR</strong></p>
                        <p>Porque não tem acesso ao seu celular!</p>
                    </div>
                </div>

                <div class="aula-section">
                    <h3>📱 Como Ativar:</h3>
                    <div class="exemplo-golpe">
                        <p>1. Abra o app do seu banco</p>
                        <p>2. Procure "Segurança" ou "Configurações"</p>
                        <p>3. Ative "Autenticação em dois fatores"</p>
                        <p>4. Escolha receber código por SMS</p>
                    </div>
                </div>

                <div class="aula-quiz">
                    <h3>📝 Teste Rápido:</h3>
                    <p><strong>Com dupla proteção ativada, se alguém souber sua senha consegue entrar?</strong></p>
                    <div class="mini-opcoes">
                        <button onclick="respostaMiniTeste(3, 'errado')">Sim, consegue</button>
                        <button onclick="respostaMiniTeste(3, 'certo')">Não, ainda precisa do código do celular</button>
                        <button onclick="respostaMiniTeste(3, 'errado')">Depende do banco</button>
                    </div>
                    <div id="resultado-mini-3"></div>
                </div>

                <div class="aula-footer">
                    <button class="btn-concluir" onclick="concluirAula(3)">✅ Entendi! Fazer Quiz</button>
                </div>
            </div>
        `
    }
};

// Quiz Simplificado
const perguntasQuiz = [
    {
        pergunta: "Alguém liga fingindo ser seu neto pedindo PIX urgente. O que fazer?",
        opcoes: [
            "Fazer o PIX rapidamente",
            "Desligar e ligar para meu neto",
            "Pedir mais informações",
            "Perguntar o valor"
        ],
        correta: 1,
        explicacao: "SEMPRE confirme ligando para o número que você tem salvo."
    },
    {
        pergunta: "Qual e-mail é suspeito?",
        opcoes: [
            "contato@bancodobrasil.com.br",
            "banco123@gmail.com",
            "atendimento@bradesco.com.br",
            "suporte@caixa.gov.br"
        ],
        correta: 1,
        explicacao: "Bancos verdadeiros não usam Gmail. Sempre desconfie!"
    },
    {
        pergunta: "SMS: 'Seu cartão foi clonado! Clique aqui'. O que fazer?",
        opcoes: [
            "Clicar no link",
            "Ignorar e abrir app do banco",
            "Responder o SMS",
            "Encaminhar para família"
        ],
        correta: 1,
        explicacao: "NUNCA clique em links de SMS. Vá direto ao app oficial."
    },
    {
        pergunta: "Com dupla proteção, se descobrirem minha senha conseguem entrar?",
        opcoes: [
            "Sim, conseguem",
            "Não, ainda precisam do código do celular",
            "Só de madrugada",
            "Depende do banco"
        ],
        correta: 1,
        explicacao: "A dupla proteção impede entrada mesmo com senha vazada!"
    },
    {
        pergunta: "Principais sinais de golpe:",
        opcoes: [
            "Pressa + pedir dinheiro + não deixar pensar",
            "Ligação de manhã + voz baixa + música",
            "Número conhecido + conversa longa + detalhes",
            "Sotaque + barulho + qualidade ruim"
        ],
        correta: 0,
        explicacao: "Golpistas sempre têm pressa, pedem dinheiro e não deixam você pensar!"
    }
];

// Cenários do Simulador
const cenariosSimulador = [
    {
        id: 1,
        tipo: "whatsapp",
        titulo: "Mensagem no WhatsApp",
        cenario: `
            <div class="simulador-phone">
                <div class="phone-header">WhatsApp - Seu Filho</div>
                <div class="phone-messages">
                    <div class="message received">Mãe/Pai, preciso urgente de R$ 500</div>
                    <div class="message received">Tive um acidente, estou no hospital</div>
                    <div class="message received">Meu celular quebrou, pega esse número emprestado</div>
                    <div class="message received">PIX: 11987654321 - Maria Silva</div>
                    <div class="message received">Por favor não demora! 😰</div>
                </div>
            </div>
        `,
        pergunta: "O que você faria nesta situação?",
        opcoes: [
            "Fazer o PIX imediatamente",
            "Ligar para o número salvo do meu filho",
            "Pedir mais informações pelo WhatsApp",
            "Fazer o PIX mas com valor menor"
        ],
        respostaCorreta: 1,
        sinaisGolpe: [
            "Urgência excessiva",
            "Número diferente do conhecido",
            "Pedido de PIX para terceiros",
            "Pressão emocional"
        ],
        explicacao: "Este é o clássico golpe do parente. Sempre confirme ligando para o número que você tem salvo!"
    },
    {
        id: 2,
        tipo: "email",
        titulo: "E-mail do Banco",
        cenario: `
            <div class="email-interface">
                <div class="email-header">
                    <strong>De:</strong> seguranca@banco-brasil123.com<br>
                    <strong>Para:</strong> você<br>
                    <strong>Assunto:</strong> ⚠️ URGENTE: Conta será bloqueada
                </div>
                <div class="email-body">
                    <p>Prezado(a) cliente,</p>
                    <p>Detectamos atividade suspeita em sua conta. Para evitar o bloqueamento, 
                    clique no link abaixo e confirme seus dados em até 2 horas:</p>
                    <a href="#" class="fake-link">www.banco-brasil-seguro.net.br</a>
                    <p>Caso não atualize, sua conta será <strong>BLOQUEADA</strong> hoje!</p>
                    <p>Atenciosamente,<br>Equipe de Segurança</p>
                </div>
            </div>
        `,
        pergunta: "Como você reagiria a este e-mail?",
        opcoes: [
            "Clicar no link rapidamente",
            "Ignorar e acessar o site oficial do banco",
            "Responder o e-mail com meus dados",
            "Encaminhar para familiares"
        ],
        respostaCorreta: 1,
        sinaisGolpe: [
            "Domínio suspeito (banco-brasil123.com)",
            "Urgência artificial",
            "Link diferente do site oficial",
            "Ameaça de bloqueio"
        ],
        explicacao: "E-mail de phishing típico! Bancos nunca pedem dados por e-mail. Sempre acesse o site oficial digitando o endereço."
    },
    {
        id: 3,
        tipo: "ligacao",
        titulo: "Ligação do 'Banco'",
        cenario: `
            <div class="phone-call">
                <div class="call-header">📞 Ligação recebida</div>
                <div class="caller-info">
                    <div class="caller-name">Banco do Brasil</div>
                    <div class="caller-number">11 99999-9999</div>
                </div>
                <div class="call-transcript">
                    <p><strong>Pessoa:</strong> "Olá, aqui é João do Banco do Brasil, setor de segurança."</p>
                    <p><strong>Pessoa:</strong> "Detectamos movimentações suspeitas em sua conta."</p>
                    <p><strong>Pessoa:</strong> "Para confirmar que é você, preciso que me informe os últimos 4 dígitos do seu cartão e o código de segurança."</p>
                    <p><strong>Pessoa:</strong> "É só para validar sua identidade, é protocolo de segurança."</p>
                </div>
            </div>
        `,
        pergunta: "O que você deveria fazer?",
        opcoes: [
            "Fornecer os dados solicitados",
            "Desligar e ligar para o banco pelo número oficial",
            "Dar apenas os últimos 4 dígitos",
            "Pedir para ligar mais tarde"
        ],
        respostaCorreta: 1,
        sinaisGolpe: [
            "Pedido de dados por telefone",
            "Número não oficial",
            "Pressão por 'protocolo'",
            "Ligação não solicitada"
        ],
        explicacao: "Bancos NUNCA pedem dados por telefone! Sempre desligue e ligue você para o número oficial do banco."
    }
];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    carregarProgresso();
    atualizarInterface();
});

// Funções de Aulas
function iniciarAula(numeroAula) {
    const modal = document.getElementById('aulaModal');
    const content = document.getElementById('aulaContent');
    
    content.innerHTML = aulas[numeroAula].conteudo;
    modal.style.display = 'block';
    
    // Marcar aula como em progresso
    const card = document.querySelector(`[data-aula="${numeroAula}"]`);
    card.classList.add('active');
    atualizarStatusAula(numeroAula, 'em-progresso', '⏳ Em progresso');
}

function respostaMiniTeste(aula, resultado) {
    const resultadoDiv = document.getElementById(`resultado-mini-${aula}`);
    if (resultado === 'certo') {
        resultadoDiv.innerHTML = '<div class="resultado acerto">✅ Correto! Você está aprendendo bem!</div>';
    } else {
        resultadoDiv.innerHTML = '<div class="resultado erro">❌ Ops! Releia o conteúdo e tente novamente.</div>';
    }
}

function concluirAula(numeroAula) {
    progressoUsuario.aulasCompletas.push(numeroAula);
    salvarProgresso();
    
    // Atualizar interface
    const card = document.querySelector(`[data-aula="${numeroAula}"]`);
    card.classList.remove('active');
    card.classList.add('completed');
    atualizarStatusAula(numeroAula, 'concluida', '✅ Concluída');
    
    // Desbloquear próxima aula
    const proximaAula = numeroAula + 1;
    if (proximaAula <= 3) {
        desbloquearAula(proximaAula);
    }
    
    // Verificar se pode desbloquear quiz
    if (progressoUsuario.aulasCompletas.length === 3) {
        desbloquearQuiz();
    }
    
    atualizarProgressoGeral();
    fecharModal();
    
    // Mostrar mensagem de parabéns
    alert(`🎉 Parabéns! Aula ${numeroAula} concluída com sucesso!`);
}

function desbloquearAula(numeroAula) {
    const btn = document.querySelector(`[data-aula="${numeroAula}"] .btn-aula`);
    btn.disabled = false;
    btn.textContent = 'Iniciar Aula';
    atualizarStatusAula(numeroAula, 'nao-iniciada', '🔓 Disponível');
}

function atualizarStatusAula(numeroAula, classe, texto) {
    const status = document.getElementById(`status-aula-${numeroAula}`);
    status.className = `aula-status ${classe}`;
    status.textContent = texto;
}

// Funções do Quiz
function desbloquearQuiz() {
    const btn = document.getElementById('btnIniciarQuiz');
    btn.disabled = false;
    btn.textContent = '🧠 Iniciar Quiz';
    btn.classList.remove('btn-quiz');
    btn.classList.add('btn-quiz-ativo');
}

let perguntaAtual = 0;
let respostasQuiz = {};

function iniciarQuiz() {
    const modal = document.getElementById('quizModal');
    const content = document.getElementById('quizContent');
    
    perguntaAtual = 0;
    respostasQuiz = {};
    
    let quizHTML = `
        <h2>🧠 Quiz: Teste seus Conhecimentos</h2>
        <div class="quiz-progresso">
            <p><strong>Pergunta <span id="numeroAtual">1</span> de ${perguntasQuiz.length}</strong></p>
            <div class="barra-progresso-quiz">
                <div class="progresso-quiz" id="progressoQuiz"></div>
            </div>
        </div>
        <div id="perguntaContainer"></div>
    `;
    
    content.innerHTML = quizHTML;
    modal.style.display = 'block';
    
    mostrarPergunta(0);
}

function mostrarPergunta(index) {
    if (index >= perguntasQuiz.length) {
        finalizarQuiz();
        return;
    }
    
    const pergunta = perguntasQuiz[index];
    const container = document.getElementById('perguntaContainer');
    
    const perguntaHTML = `
        <div class="quiz-question">
            <p><strong>${pergunta.pergunta}</strong></p>
            <div class="quiz-options">
                ${pergunta.opcoes.map((opcao, i) => `
                    <div class="quiz-option" onclick="selecionarRespostaQuiz(${i})">
                        ${opcao}
                    </div>
                `).join('')}
            </div>
            <div class="quiz-navegacao">
                <button class="btn-quiz-proximo" onclick="proximaPergunta()" id="btnProximo" disabled>
                    ${index === perguntasQuiz.length - 1 ? 'Finalizar Quiz' : 'Próxima Pergunta'}
                </button>
            </div>
        </div>
    `;
    
    container.innerHTML = perguntaHTML;
    
    // Atualizar progresso
    document.getElementById('numeroAtual').textContent = index + 1;
    const progresso = ((index + 1) / perguntasQuiz.length) * 100;
    document.getElementById('progressoQuiz').style.width = progresso + '%';
}

function selecionarRespostaQuiz(opcaoIndex) {
    // Remove seleção anterior
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Adiciona nova seleção
    const opcaoSelecionada = document.querySelectorAll('.quiz-option')[opcaoIndex];
    opcaoSelecionada.classList.add('selected');
    
    respostasQuiz[perguntaAtual] = opcaoIndex;
    
    // Habilita botão próximo
    document.getElementById('btnProximo').disabled = false;
}

function proximaPergunta() {
    perguntaAtual++;
    
    if (perguntaAtual >= perguntasQuiz.length) {
        finalizarQuiz();
    } else {
        mostrarPergunta(perguntaAtual);
    }
}

function finalizarQuiz() {
    let pontuacao = 0;
    
    // Calcular pontuação
    perguntasQuiz.forEach((pergunta, index) => {
        if (respostasQuiz[index] === pergunta.correta) {
            pontuacao++;
        }
    });
    
    // Mostrar resultado final
    const container = document.getElementById('perguntaContainer');
    
    let resultadoHTML = `
        <div class="quiz-resultado">
            <h3>🏆 Quiz Finalizado!</h3>
            <div class="pontuacao-final ${pontuacao >= 3 ? 'aprovado' : 'reprovado'}">
                <p><strong>Sua pontuação: ${pontuacao} de ${perguntasQuiz.length}</strong></p>
                ${pontuacao >= 3 ? 
                    '<p>🎉 Parabéns! Você está preparado para se proteger!</p>' :
                    '<p>📚 Continue estudando as aulas para melhorar sua proteção.</p>'
                }
            </div>
            
            <div class="revisao-respostas">
                <h4>📝 Revisão das Respostas:</h4>
    `;
    
    perguntasQuiz.forEach((pergunta, index) => {
        const acertou = respostasQuiz[index] === pergunta.correta;
        resultadoHTML += `
            <div class="resposta-revisao ${acertou ? 'acerto' : 'erro'}">
                <p><strong>Pergunta ${index + 1}:</strong> ${pergunta.pergunta}</p>
                <p><strong>Sua resposta:</strong> ${pergunta.opcoes[respostasQuiz[index]]}</p>
                <p><strong>Resposta correta:</strong> ${pergunta.opcoes[pergunta.correta]}</p>
                <p><strong>Explicação:</strong> ${pergunta.explicacao}</p>
            </div>
        `;
    });
    
    resultadoHTML += `
            </div>
            <button class="btn-quiz-finalizar" onclick="fecharQuizModal()">Continuar</button>
        </div>
    `;
    
    container.innerHTML = resultadoHTML;
    
    // Atualizar progresso
    progressoUsuario.quizCompleto = true;
    progressoUsuario.pontuacaoQuiz = pontuacao;
    salvarProgresso();
    
    if (pontuacao >= 3) {
        desbloquearSimulador();
    }
    
    atualizarProgressoGeral();
}

// Funções do Simulador
function desbloquearSimulador() {
    const btn = document.getElementById('btnIniciarSimulador');
    btn.disabled = false;
    btn.textContent = '🎭 Iniciar Simulador';
}

function iniciarSimulador() {
    const modal = document.getElementById('simuladorModal');
    const content = document.getElementById('simuladorContent');
    
    let simuladorHTML = '<h2>🎭 Simulador Interativo de Golpes</h2>';
    simuladorHTML += '<p>Vamos simular situações reais! Analise cada cenário e decida se é seguro ou suspeito:</p>';
    
    content.innerHTML = simuladorHTML;
    modal.style.display = 'block';
    
    mostrarProximoCenario(0);
}

let cenarioAtual = 0;
let resultadosSimulador = [];

function mostrarProximoCenario(index) {
    if (index >= cenariosSimulador.length) {
        finalizarSimulador();
        return;
    }
    
    const cenario = cenariosSimulador[index];
    const content = document.getElementById('simuladorContent');
    
    const cenarioHTML = `
        <div class="simulador-scenario" id="cenario-${index}">
            <div class="scenario-header">
                <span class="scenario-icon">📱</span>
                <span class="scenario-title">${cenario.titulo}</span>
            </div>
            
            ${cenario.cenario}
            
            <p><strong>${cenario.pergunta}</strong></p>
            
            <div class="scenario-actions">
                ${cenario.opcoes.map((opcao, i) => `
                    <button class="btn-scenario ${i === cenario.respostaCorreta ? 'btn-desconfiar' : 'btn-confiar'}" 
                            onclick="responderCenario(${index}, ${i})">
                        ${opcao}
                    </button>
                `).join('')}
            </div>
            
            <div class="scenario-result" id="resultado-cenario-${index}"></div>
        </div>
    `;
    
    content.innerHTML = content.innerHTML + cenarioHTML;
}

function responderCenario(cenarioIndex, respostaIndex) {
    const cenario = cenariosSimulador[cenarioIndex];
    const resultadoDiv = document.getElementById(`resultado-cenario-${cenarioIndex}`);
    const acertou = respostaIndex === cenario.respostaCorreta;
    
    resultadosSimulador.push({
        cenario: cenarioIndex,
        acertou: acertou
    });
    
    let resultadoHTML = '';
    
    if (acertou) {
        resultadoHTML = `
            <div class="resultado acerto">
                <h4>✅ Excelente! Você identificou corretamente!</h4>
                <p><strong>Sinais de golpe identificados:</strong></p>
                <ul>
                    ${cenario.sinaisGolpe.map(sinal => `<li>${sinal}</li>`).join('')}
                </ul>
                <p><strong>Explicação:</strong> ${cenario.explicacao}</p>
            </div>
        `;
    } else {
        resultadoHTML = `
            <div class="resultado erro">
                <h4>❌ Atenção! Esta situação era suspeita!</h4>
                <p><strong>Sinais que você deveria ter notado:</strong></p>
                <ul>
                    ${cenario.sinaisGolpe.map(sinal => `<li>${sinal}</li>`).join('')}
                </ul>
                <p><strong>Explicação:</strong> ${cenario.explicacao}</p>
            </div>
        `;
    }
    
    resultadoDiv.innerHTML = resultadoHTML;
    
    // Desabilitar botões
    const botoes = document.querySelectorAll(`#cenario-${cenarioIndex} .btn-scenario`);
    botoes.forEach(btn => btn.disabled = true);
    
    // Mostrar próximo cenário após 3 segundos
    setTimeout(() => {
        mostrarProximoCenario(cenarioIndex + 1);
    }, 3000);
}

function finalizarSimulador() {
    const acertos = resultadosSimulador.filter(r => r.acertou).length;
    const total = resultadosSimulador.length;
    
    progressoUsuario.simuladorCompleto = true;
    salvarProgresso();
    
    const content = document.getElementById('simuladorContent');
    content.innerHTML += `
        <div class="simulador-final">
            <h2>🏆 Simulador Concluído!</h2>
            <div class="resultado-final ${acertos >= 2 ? 'acerto' : 'erro'}">
                <h3>Sua pontuação: ${acertos}/${total}</h3>
                ${acertos >= 2 ? 
                    '<p>🎉 Parabéns! Você está bem preparado para identificar golpes!</p>' :
                    '<p>📚 Continue estudando! Revise as aulas para melhorar sua proteção.</p>'
                }
            </div>
            <button class="btn-simulador" onclick="fecharSimuladorModal()">Finalizar</button>
        </div>
    `;
    
    atualizarProgressoGeral();
}

// Funções de Modal
function fecharModal() {
    document.getElementById('aulaModal').style.display = 'none';
}

function fecharQuizModal() {
    document.getElementById('quizModal').style.display = 'none';
}

function fecharSimuladorModal() {
    document.getElementById('simuladorModal').style.display = 'none';
}

// Funções de Progresso
function atualizarProgressoGeral() {
    const totalItens = 6; // 3 aulas + 1 quiz + 1 simulador + 1 extra
    let itensCompletos = progressoUsuario.aulasCompletas.length;
    
    if (progressoUsuario.quizCompleto) itensCompletos++;
    if (progressoUsuario.simuladorCompleto) itensCompletos++;
    
    const porcentagem = Math.round((itensCompletos / totalItens) * 100);
    
    document.getElementById('progressFill').style.width = porcentagem + '%';
    document.getElementById('progressText').textContent = porcentagem + '% Completo';
}

function atualizarInterface() {
    // Atualizar status das aulas
    progressoUsuario.aulasCompletas.forEach(aula => {
        const card = document.querySelector(`[data-aula="${aula}"]`);
        card.classList.add('completed');
        atualizarStatusAula(aula, 'concluida', '✅ Concluída');
    });
    
    // Desbloquear próxima aula disponível
    const proximaAula = progressoUsuario.aulasCompletas.length + 1;
    if (proximaAula <= 3) {
        desbloquearAula(proximaAula);
    }
    
    // Verificar se pode desbloquear quiz
    if (progressoUsuario.aulasCompletas.length === 3) {
        desbloquearQuiz();
    }
    
    // Verificar se pode desbloquear simulador
    if (progressoUsuario.quizCompleto && progressoUsuario.pontuacaoQuiz >= 3) {
        desbloquearSimulador();
    }
    
    atualizarProgressoGeral();
}

// Funções de Persistência
function salvarProgresso() {
    localStorage.setItem('progressoSimulados', JSON.stringify(progressoUsuario));
}

function carregarProgresso() {
    const progressoSalvo = localStorage.getItem('progressoSimulados');
    if (progressoSalvo) {
        progressoUsuario = JSON.parse(progressoSalvo);
    }
}

// Event Listeners para fechar modais clicando fora
window.onclick = function(event) {
    const modals = ['aulaModal', 'quizModal', 'simuladorModal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}