// Função para exibir a mensagem e obter a escolha do usuário
    function obterEscolha(mensagem) {
        return prompt(mensagem);
    }

    // Função para exibir a mensagem e obter as tecnologias desejadas pelo usuário
    function obterTecnologias() {
        const tecnologias = [];
        let maisTecnologias = true;

        while (maisTecnologias) {
            const tecnologia = prompt("Digite o nome da tecnologia que você gostaria de aprender:");
            tecnologias.push(tecnologia);
            maisTecnologias = confirm("Tem mais alguma tecnologia que você gostaria de aprender?");
        }

        return tecnologias;
    }

    // Início do jogo
    alert("Bem-vindo(a) ao jogo de escolhas - Front-End ou Back-End!");

    const area = obterEscolha("Digite 1 para ir para a área de Front-End ou 2 para ir para a área de Back-End:");

    if (area === "1") {
        const frontEnd = obterEscolha("Você está na área de Front-End! Deseja aprender React ou Vue? Digite 1 para React ou 2 para Vue:");

        if (frontEnd === "1") {
            alert("Ótima escolha! React é uma biblioteca JavaScript muito popular para construção de interfaces de usuário interativas.");
        } else if (frontEnd === "2") {
            alert("Ótima escolha! Vue é um framework JavaScript progressivo para a construção de interfaces de usuário.");
        } else {
            alert("Opção inválida. Vamos considerar que você escolheu aprender React.");
        }

    } else if (area === "2") {
        const backEnd = obterEscolha("Você está na área de Back-End! Deseja aprender C# ou Java? Digite 1 para C# ou 2 para Java:");

        if (backEnd === "1") {
            alert("Ótima escolha! C# é uma linguagem de programação robusta e amplamente utilizada no desenvolvimento de aplicações Windows e jogos Unity.");
        } else if (backEnd === "2") {
            alert("Ótima escolha! Java é uma linguagem de programação versátil e muito usada no desenvolvimento de aplicações empresariais.");
        } else {
            alert("Opção inválida. Vamos considerar que você escolheu aprender C#.");
        }

    } else {
        alert("Opção inválida. Vamos considerar que você escolheu ir para a área de Front-End.");
    }

    const especializacao = obterEscolha("Agora você pode escolher entre se especializar na área escolhida ou se desenvolver como Fullstack. Digite 1 para se especializar ou 2 para se tornar Fullstack:");

    if (especializacao === "1") {
        alert("Parabéns! Você escolheu se especializar na área escolhida. Continue aprendendo e se aprimorando!");
    } else if (especializacao === "2") {
        alert("Excelente escolha! Ser Fullstack permitirá que você trabalhe em diversas áreas e tenha um conhecimento abrangente.");
    } else {
        alert("Opção inválida. Vamos considerar que você escolheu se especializar na área escolhida.");
    }

    // Obtendo as tecnologias desejadas pelo usuário
    const tecnologiasDesejadas = obterTecnologias();
    alert("Ótimo! Agora você deseja aprender as seguintes tecnologias: " + tecnologiasDesejadas.join(", "));
    alert("Continue praticando e estudando para se tornar um(a) desenvolvedor(a) de sucesso!");