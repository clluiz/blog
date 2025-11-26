---
title: Entendendo e tratando memory leaks no Node.js
date: 2025-06-27
description: "Um pequeno guia sobre memory leaks em Node.js: entenda o que são, como evitar, detectar e quais ferramentas utilizar."
post_excerpt: "Um pequeno guia sobre memory leaks em Node.js: entenda o que são, como evitar, detectar e quais ferramentas utilizar."
tags:
- nodejs
- memory leak
- javascript
- memória
type: post
meta:
  site:
    name: Site
    title:
    description: Site description
    url: https://cleitonluizdev.com.br
    logo:
      src: https://cleitonluizdev.com.br/images/logo.png
      width: 1200
      height: 630
    language: en-US
  url: https://cleitonluizdev.com.br/posts/2025/06/memory-leak-no-nodejs/
  title: "Entendendo e tratando memory leaks no Node.js"
  description: "Um pequeno guia sobre memory leaks em Node.js: entenda o que são, como evitar, detectar e quais ferramentas utilizar."
  image:
    src: https://cleitonluizdev.com.br/images/page.png
  author:
    url: https://cleitonluizdev.com.br/sobre/
    name: Cleiton Teodoro    
  published: 2020-07-03T06:43:21.123Z
  modified: 2020-07-03T08:35:46.289Z
  section: Blog
  tags:
    - nodejs
    - memory leak
    - javascript
    - memória
---
Um pequeno guia sobre memory leaks em Node.js: entenda o que são, como evitar, detectar e quais ferramentas utilizar.
<!-- excerpt -->

## O que é memory leak?

O correto gerenciamento da memória deve ser uma preocupação de todos os programadores, independentemente da linguagem utilizada.

Algumas linguagens não oferecem nenhum mecanismo de gerenciamento automático de memória, como o C, por exemplo. Nesta linguagem, o gerenciamento da memória está 100% a cargo do programador.

Outras linguagens, como o JavaScript, oferecem um *garbage collector* para facilitar um pouco a nossa vida. Mas mesmo tendo o garbage collector à nossa disposição, precisamos ter atenção para evitar um problema conhecido como *memory leak*.

Um *memory leak* ocorre quando um trecho da memória que não está mais sendo usado pelo programa não consegue ser liberado pelo garbage collector.

## Problemas causados por memory leak

A existência de memory leaks pode gerar diversas consequências negativas, tais como:

Degradação de performance: A aplicação se torna gradualmente mais lenta, pois o consumo excessivo de memória força o Garbage Collector a trabalhar mais, aumentando o uso da CPU e o tempo de resposta para as tarefas.

Problemas de segurança: Podem ser explorados para causar ataques de negação de serviço (DoS) ou, de forma mais crítica, podem vazar informações sensíveis (como senhas e chaves privadas) que estejam nos blocos de memória retidos indevidamente, como no famoso caso da falha [Heartbleed](https://www.heartbleed.com/).

Queda abrupta da aplicação: É o resultado final do vazamento, quando a aplicação consome toda a memória disponível para seu processo. O sistema operacional a encerra à força para se proteger, causando um crash e indisponibilidade total do serviço.

## Tipos mais comuns de memory leak no Node.js

Vazamentos de memória em aplicações Node.js geralmente não surgem de problemas complexos, mas de padrões de código comuns que, por descuido, impedem o *garbage collector* de fazer seu trabalho. O problema central quase sempre se resume a uma coisa: manter referências "vivas" a objetos que não são mais necessários para a aplicação. Quando o garbage collector encontra uma referência ativa, ele assume que o objeto ainda está em uso e não libera a memória. Conhecer as fontes mais comuns desses vazamentos é o primeiro passo fundamental para construir um código mais robusto e eficiente. A seguir, listo as causas mais comuns de *memory leaks* no Node.js:

* *Events listeners* que não foram corretamente removidos: cada *event listener* criado com .on() é uma referência que o objeto emissor guarda. Se esses listeners não forem removidos quando não são mais necessários, o objeto emissor continuará a manter uma referência para eles, impedindo que tanto a função do listener quanto o seu escopo sejam liberados pelo *garbage collector*.

* Não fechar conexões a bancos de dados, arquivos ou rede: cada uma dessas conexões ocupa memória e recursos do sistema operacional (como file descriptors). Se o seu código não garante o fechamento explícito dessas conexões após o uso, elas se acumulam, levando ao esgotamento de memória e de recursos do sistema.

* Não limpar timers: funções como setInterval executam um código indefinidamente. Se um setInterval for criado e não for liberado com clearInterval(), a sua função de callback e todas as variáveis que ela referencia em seu closure permanecerão ativas na memória durante todo o ciclo de vida da aplicação.

* Variáveis globais: variáveis globais são acessíveis de qualquer lugar e existem durante toda a execução da aplicação. O *garbage collector* sempre as considera "em uso". Portanto, usar variáveis globais para armazenar dados que crescem continuamente (como um cache sem política de remoção) é uma receita garantida para um memory leak.

* Closures que mantém referências para objetos: uma *closure* é a capacidade de uma função interna de acessar variáveis da função externa. Se essa função interna for mantida viva por um longo tempo (por exemplo, como um callback de um evento), ela também manterá "vivas" todas as variáveis da função externa de que ela precisa. Isso pode reter os objetos na memória por muito tempo depois de eles não serem mais necessários.

## Como evitar

### Gerenciamento de Eventos e Timers

1. Remova Listeners que não serão mais usados: para cada emitter.on(...), deve haver um emitter.off(...) correspondente quando o listener não for mais necessário. Se você precisa que um evento seja ouvido apenas uma vez, use emitter.once(...) por padrão.

```javascript
function handleRequest(req, res) {
    // ...lógica
    res.on('finish', () => {
        // Este listener é específico para esta requisição.
        // O Node.js geralmente remove listeners de 'req' e 'res' automaticamente,
        // mas para emissores de longa duração, a remoção manual é crucial.
        console.log('Requisição finalizada.');
    });
}
```

2. Sempre limpe os timers: Se você iniciar um setInterval, guarde sua referência e garanta que clearInterval seja chamado quando ele não for mais necessário.

```javascript
const intervalId = setInterval(() => {
    console.log('Verificando status...');
}, 5000);

// Quando a tarefa terminar ou o objeto for destruído:
clearInterval(intervalId);
```

### Cuidado com Escopo e Referências

1. Evite variáveis globais: minimize o uso de variáveis globais. Elas nunca são limpas pelo *garbage collector*. Prefira passar variáveis como parâmetros de funções ou encapsulá-las em módulos com escopo local

2. Quebre referências intencionalmente: se você tem uma variável que aponta para um objeto e sabe que não precisará mais dele, defina a variável como null. Isso remove a referência e torna o objeto elegível para a coleta de lixo, especialmente útil dentro de closures.

3. Atenção com closures: ao criar funções que serão executadas mais tarde (callbacks), esteja ciente de quais variáveis do escopo pai elas estão "capturando". Evite que callbacks de longa duração mantenham referências a objetos que só eram necessários durante a fase de inicialização.

### Gestão de Conexões e Recursos Externos

1. Use o bloco try...finally para garantir a liberação: seja uma conexão com banco de dados, um stream de arquivo ou um socket de rede, use blocos try...catch...finally para garantir que o recurso seja fechado ou liberado no bloco finally, mesmo que ocorra um erro.

```javascript
let connection;
try {
    connection = await pool.getConnection();
    // ... faz operações no banco
} catch (error) {
    console.error(error);
} finally {
    if (connection) {
        connection.release(); // Libera a conexão de volta para o pool
    }
}
```

## Ferramentas usadas no Node.js

O Node.js já oferece algumas ferramentas para investigar e diagnosticar *memory leaks*. Aqui estão algumas das principais abordagens:

* Uso da flag --inspect: esta é a forma mais comum de iniciar uma sessão de *debug*. Ao executar sua aplicação com node --inspect, você permite que as ferramentas de desenvolvedor do Chrome se conectem ao processo. Dentro delas, a aba "Memory" é crucial para tirar *snapshots* da memória, compará-los e identificar quais objetos não estão sendo liberados corretamente.

* Bibliotecas de Análise: pacotes como heapdump podem ser adicionados ao seu projeto. Eles permitem que você gere arquivos de snapshot da memória programaticamente (ou seja, através de uma chamada de função no seu código), o que é útil para capturar o estado da memória em momentos específicos, como após uma carga de trabalho intensa.

* Monitoramento do *garbage collector*: para entender como o *garbage collector* está se comportando, você pode usar a flag --trace-gc. Ela fará com que o Node.js imprima no console toda vez que o GC for executado, mostrando quanta memória foi limpa e quanto tempo levou. Um GC rodando com frequência excessiva pode ser um sintoma de problemas na memória.

* Snapshots Programáticos com o Módulo v8: O próprio Node.js oferece uma maneira de gerar snapshots da memória sem bibliotecas externas. Usando o método v8.writeHeapSnapshot(), você pode salvar um arquivo .heapsnapshot diretamente do seu código. Esse arquivo pode ser carregado posteriormente nas ferramentas de desenvolvedor do Chrome para uma análise mais detalhada.

## Conclusão

Embora o *garbage collector* do Javascript seja uma ferramenta muito útil, ele não isenta o desenvolvedor da responsabilidade de gerenciar a memória de forma consciente. A prevenção de memory leaks raramente exige soluções complexas; em vez disso, ela nasce de boas práticas de tais como remover listeners, limpar timers e fechar conexões.

A regra fundamental é simples: todo recurso que é aberto ou iniciado deve ser explicitamente fechado ou finalizado. Ao adotar essas boas práticas e utilizar as ferramentas de diagnóstico disponíveis, você não apenas corrige problemas, mas eleva a qualidade de suas aplicações, tornando-as mais estáveis, seguras e eficientes.

## Referências

1. [https://nodejs.org/pt/learn/diagnostics/memory](https://nodejs.org/pt/learn/diagnostics/memory)
2. [https://nodejs.org/pt/learn/diagnostics/memory/understanding-and-tuning-memory](https://nodejs.org/pt/learn/diagnostics/memory/understanding-and-tuning-memory)
3. [https://betterstack.com/community/guides/scaling-nodejs/high-performance-nodejs/nodejs-memory-leaks/](https://betterstack.com/community/guides/scaling-nodejs/high-performance-nodejs/nodejs-memory-leaks/)
