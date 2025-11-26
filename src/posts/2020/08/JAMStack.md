---
title: Apresentando o JAMstack e Seus Impactos para os Negócios
date: 2020-08-26
description: "Descubra o que é JAMstack e como essa arquitetura moderna está transformando a criação de sites e aplicações web."
post_excerpt: "Descubra o que é JAMstack e como essa arquitetura moderna está transformando a criação de sites e aplicações web."
tags:
- jamstack
- web development
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
  url: https://cleitonluizdev.com.br/posts/2020/08/JAMStack/
  title: "Apresentando o JAMstack e Seus Impactos para os Negócios"
  description: "Descubra o que é JAMstack e como essa arquitetura moderna está transformando a criação de sites e aplicações web."
  image:
    src: https://cleitonluizdev.com.br/images/page.png
  author:
    url: https://cleitonluizdev.com.br/about/
    name: Cleiton Teodoro
  published: 2020-07-03T06:43:21.123Z
  modified: 2020-07-03T08:35:46.289Z
  section: Blog
  tags:
    - jamstack
    - web development
schema:
  type: BlogPosting
  url: "https://cleitonluizdev.com.br/posts/2020/08/JAMStack/"
  name: "Apresentando o JAMstack e Seus Impactos para os Negócios"
  description: "Descubra o que é JAMstack e como essa arquitetura moderna está transformando a criação de sites e aplicações web."
  author:
    name: "Cleiton Luiz"
    url: "https://cleitonluizdev.com.br/about/"
---
Descubra o que é JAMstack e como essa arquitetura moderna está transformando a criação de sites e aplicações web. Neste artigo, explicamos os princípios do JAMstack — Javascript, APIs e Markup — e mostramos como ele oferece mais segurança, desempenho, escalabilidade e redução de custos para negócios digitais. Uma leitura essencial para desenvolvedores e empreendedores que querem entender o futuro da web.
<!-- excerpt -->


## Introdução

Neste artigo, abordarei uma arquitetura que está sendo utilizada para desenvolver sites, aplicações web, lojas virtuais e blogs, aliando redução de custos e complexidade a maior segurança e escalabilidade. Ao ter contato com uma nova tecnologia, é importante saber por que ela foi criada. A seguinte pergunta deve ser respondida: **qual problema essa tecnologia resolve e como ela o resolve?**

Para ajudar a responder essa pergunta, voltaremos ao início dos anos 90. Nessa época, lançar um site era uma atividade relativamente simples, já que as páginas possuíam pouca ou nenhuma interatividade com o usuário. Era a época da Web 1.0. Por esse motivo, os sites eram considerados estáticos. As páginas que faziam parte do site eram colocadas em servidores e disponibilizadas através do protocolo HTTP. Para esses sites, não havia gerenciadores de conteúdo e qualquer modificação em seu conteúdo era feita através da edição dos arquivos `.html`.

Com o passar do tempo e a evolução das tecnologias, as formas de se acessar e interagir com uma página da internet foram aumentando consideravelmente. Era possível fazer compras, criar blogs, assistir a vídeos e acessar redes sociais. Desenvolver aplicações que acompanhassem o ritmo de novos modelos de negócio de forma rápida, segura e escalável se tornou um desafio muito grande para desenvolvedores e empreendedores.

Hoje, a complexidade para a criação de sites, e-commerce, blogs e outros tipos de plataformas é muito grande, porque os desenvolvedores devem lidar com um fluxo complexo que abrange a codificação, os testes em dispositivos com vários tamanhos de tela e velocidades de conexão à internet, até a configuração de servidores (on-premise ou na nuvem), provisionamento de bancos de dados e considerações sobre segurança da informação. Todo esse processo, além de complexo, não é barato e apresenta vários desafios de escalabilidade e também na forma de oferecer uma excelente experiência para o usuário.

---

## O que é JAMstack?

Mas o que significa **JAMstack**? Esse termo foi criado por Mathias Biilmann e significa **Javascript**, **APIs** e **Markup**.

JAMstack não é um novo framework. É apenas um conjunto de boas práticas que foram desenvolvidas ao longo do tempo pelo acúmulo de experiências de vários desenvolvedores.

- **Javascript**: qualquer linguagem que possa ser utilizada no navegador do cliente. Javascript é a linguagem mais "nativa" para adicionar interatividade aos sites, porém, devido a projetos como WebAssembly, outras linguagens podem ser utilizadas.
- **APIs**: toda a lógica da aplicação deve ser feita utilizando-se de chamadas para várias APIs separadas, o que vai de encontro à evolução das arquiteturas baseadas em microsserviços.
- **Markup**: o HTML é construído durante o deploy da aplicação.

---

## Características de uma Aplicação Feita Usando JAMstack

Um site estático é desenvolvido usando apenas HTML, CSS e talvez um pouco de Javascript. Todos esses arquivos são colocados em um servidor e qualquer alteração do conteúdo é feita diretamente nesses arquivos.

Uma **single page application (SPA)** é feita utilizando uma única página e as interações são controladas usando Javascript, que pode eventualmente acessar uma API que, por sua vez, pode acessar um banco de dados. Essas características fornecem às SPAs uma alta interatividade com o usuário.

Já uma aplicação feita usando **JAMstack** se situa entre um site estático e uma SPA. Um site feito usando o JAMstack possui um passo extra no deploy, que é a geração de um conteúdo pré-compilado. Todo esse conteúdo é hospedado em **CDNs (Content Delivery Networks)**.

---

## Diferença entre a Arquitetura Tradicional e JAMstack

A imagem que ilustra a diferença entre as arquiteturas tradicionais e o JAMstack foi extraída de:  
_[Inclua aqui o link ou referência completa da imagem, se disponível]_

---

## Vantagens de se Utilizar JAMstack

- **Maior segurança**: ao construir sua lógica usando APIs de qualidade, a equipe de desenvolvimento fica livre da carga de identificar e resolver todas as possíveis vulnerabilidades, já que esse trabalho ficará a cargo dos mantenedores da API.
- **Desempenho**: por ter seu conteúdo hospedado em CDNs, a velocidade de acesso é reduzida e a disponibilidade aumenta. Além disso, devido a boa parte da aplicação ser renderizada durante o deploy, a forma de acesso é praticamente igual à de um site estático.
- **Custo**: não será necessário gastar com servidores locais ou pagamento de valores para provedores de serviços de cloud computing.
- **Escala**: não é necessário se preocupar com picos de acesso, já que toda essa carga é tratada pela CDN.

Tudo isso causa um impacto positivo nos negócios, já que um site mais rápido pode afetar consideravelmente a experiência do usuário e a taxa de conversão disso em **$$**. Com uma estrutura de código mais simples, as alterações e correções de problemas se tornam mais rápidas e ágeis.

---

## Conclusão

Quando eu tomei conhecimento sobre JAMstack, achei que se tratava apenas de mais uma *buzzword*, tão comum em nossa indústria, e que sites feitos utilizando essa metodologia eram apenas sites estáticos "gourmetizados". Mas, ao estudar mais e me inteirar sobre o assunto, percebi que se trata de algo que realmente irá mudar radicalmente a forma como novas aplicações web serão desenvolvidas. Além disso, JAMstack se alinha muito bem às mudanças que surgiram com o advento das arquiteturas de microsserviços.

---

## Leituras Recomendadas

Neste artigo, eu apenas introduzi o JAMstack. Caso você tenha se interessado, segue uma pequena lista com leituras recomendadas, com mais detalhes, vantagens e também desvantagens do uso do JAMstack:

- [https://www.netlify.com/jamstack/](https://www.netlify.com/jamstack/)
- [https://bejamas.io/blog/jamstack/](https://bejamas.io/blog/jamstack/)
- [https://hackernoon.com/forget-docker-the-future-is-jamstack-aae5bcaf4616](https://hackernoon.com/forget-docker-the-future-is-jamstack-aae5bcaf4616)
- [https://snipcart.com/blog/jamstack](https://snipcart.com/blog/jamstack)
