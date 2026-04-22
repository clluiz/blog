---
title: Rumbho, seu o micro gis que roda no seu navegador!
date: 2026-04-22
description: "Descubra o Rumbho, um Micro-GIS inovador que roda diretamente no seu navegador. Focado em Zero-Config e Instant-Load, ele oferece edição GeoJSON em tempo real, gestão de camadas, geoprocessamento com Turf.js e geocoding integrado, ideal para profissionais de geotecnologia que buscam agilidade e eficiência."
post_excerpt: "Descubra o Rumbho, um Micro-GIS inovador que roda diretamente no seu navegador. Focado em Zero-Config e Instant-Load, ele oferece edição GeoJSON em tempo real, gestão de camadas, geoprocessamento com Turf.js e geocoding integrado, ideal para profissionais de geotecnologia que buscam agilidade e eficiência."
tags:
- gis
- micro-gis
- geoprocessamento
- webgl
- geojson
- maplibre
- turfjs
- react
- desenvolvimento web
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
    language: pt-BR
  url: https://cleitonluizdev.com.br/posts/2026/04/micro-gis-rumbho/
  title: "Rumbho: seu o micro gis que roda no seu navegador!"
  description: "Descubra o Rumbho, um Micro-GIS inovador que roda diretamente no seu navegador. Focado em Zero-Config e Instant-Load, ele oferece edição GeoJSON em tempo real, gestão de camadas, geoprocessamento com Turf.js e geocoding integrado, ideal para profissionais de geotecnologia que buscam agilidade e eficiência."
  image:
    src: https://cleitonluizdev.com.br/images/page.png
  author:
    url: https://cleitonluizdev.com.br/sobre/
    name: Cleiton Teodoro
  published: 2026-04-22T18:18:56.000Z
  modified: 2026-04-22T18:18:56.000Z
  section: Blog
  tags:
    - gis
    - micro-gis
    - geoprocessamento
    - webgl
    - geojson
    - maplibre
    - turfjs
    - react
    - desenvolvimento web
schema:
  '@context': https://schema.org
  '@type': BlogPosting
  mainEntityOfPage:
    '@type': WebPage
    '@id': "https://cleitonluizdev.com.br/posts/2026/04/micro-gis-rumbho/"
  headline: "Rumbho: seu o micro gis que roda no seu navegador!"
  description: "Descubra o Rumbho, um Micro-GIS inovador que roda diretamente no seu navegador. Focado em Zero-Config e Instant-Load, ele oferece edição GeoJSON em tempo real, gestão de camadas, geoprocessamento com Turf.js e geocoding integrado, ideal para profissionais de geotecnologia que buscam agilidade e eficiência."
  image: "https://cleitonluizdev.com.br/images/page.png"
  author:
    '@type': Person
    name: "Cleiton Teodoro"
    url: "https://cleitonluizdev.com.br/sobre/"
  publisher:
    '@type': Organization
    name: "Site"
    logo:
      '@type': ImageObject
      url: "https://cleitonluizdev.com.br/images/logo.png"
  datePublished: "2026-04-22"
  dateModified: "2026-04-22"
---
## Introdução

Para quem trabalha com análise espacial, o cenário é comum: você só precisa validar uma geometria rápido, converter um Shapefile para GeoJSON ou ajustar alguns atributos (properties) em uma camada vetorial, mas acaba perdendo 15 minutos esperando um software de desktop pesado carregar ou configurando um banco de dados espacial complexo.

É para resolver esse overhead que nasce o Rumbho.

## O que é o Rumbho?

O Rumbho não tenta substituir o QGIS ou o ArcGIS. Ele é um Micro-GIS focado em Zero-Config e Instant-Load. Ele vive no seu navegador, aproveitando a aceleração de hardware via GPU (WebGL/MapLibre GL JS) para entregar uma experiência fluida, mesmo lidando com milhares de coordenadas e topologias complexas.

Destaques para Profissionais de Geotecnologia:

* Editor GeoJSON Full-Sync: Chega de "importar e exportar". No Rumbho, o mapa e o código (via Monaco Editor) são uma coisa só. Alterou um vértice no editor? A renderização no mapa atualiza em tempo real. Editou a geometria via mouse? O código reflete a mudança instantaneamente.

* Gestão de Camadas Sem Bloat: Importe seus Shapefiles e visualize-os imediatamente. O Rumbho lida com o parse de arquivos .shp e .dbf nativamente no cliente, permitindo que você altere estilos de preenchimento e contorno sem precisar de um servidor de mapas.

* Geoprocessamento On-the-Fly: Integrado com a biblioteca Turf.js, o Rumbho permite medições precisas (régua de mapa) e manipulação de objetos espaciais com precisão topológica.

* Geocoding Integrado: Pesquise endereços e localize coordenadas através de ferramentas de Forward Geocoding de baixa latência, facilitando a criação de Feature Collections a partir de dados tabulares ou buscas diretas.

* Data-Driven Properties: Adicione e gerencie metadados diretamente em cada feature. Perfeito para preparar dados que serão consumidos por APIs ou dashboards de BI.
Por que "Micro"?
Porque acreditamos que a complexidade é o inimigo da produtividade. O Rumbho é construído sobre uma stack moderna — React, Zustand e Tanstack Query — garantindo que o estado da sua aplicação seja previsível e extremamente rápido. É uma ferramenta pensada para o desenvolvedor que consome dados espaciais e para o analista que precisa de respostas rápidas.

## O que vem por aí?

Estou na versão beta. Estou trabalhando no suporte nativo a GeoPackage, importação de CSV com mapeamento de colunas lat/long e ferramentas para exportação de camadas.

Cansado de ferramentas caras e pesadas? o Rumbho é para você

Acesse agora e comece a testar: rumbho.com
