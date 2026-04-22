# Rumbho: seu o micro gis que roda no seu navegador!

Para quem trabalha com análise espacial, o cenário é comum: você só precisa validar uma geometria rápido, converter um Shapefile para GeoJSON ou ajustar alguns atributos (properties) em uma camada vetorial, mas acaba perdendo 15 minutos esperando um software de desktop pesado carregar ou configurando um banco de dados espacial complexo.

É para resolver esse overhead que nasce o Rumbho.

# O que é o Rumbho?

O Rumbho não tenta substituir o QGIS ou o ArcGIS. Ele é um Micro-GIS focado em Zero-Config e Instant-Load. Ele vive no seu navegador, aproveitando a aceleração de hardware via GPU (WebGL/MapLibre GL JS) para entregar uma experiência fluida, mesmo lidando com milhares de coordenadas e topologias complexas.

Destaques para Profissionais de Geotecnologia:

* Editor GeoJSON Full-Sync: Chega de "importar e exportar". No Rumbho, o mapa e o código (via Monaco Editor) são uma coisa só. Alterou um vértice no editor? A renderização no mapa atualiza em tempo real. Editou a geometria via mouse? O código reflete a mudança instantaneamente.

* Gestão de Camadas Sem Bloat: Importe seus Shapefiles e visualize-os imediatamente. O Rumbho lida com o parse de arquivos .shp e .dbf nativamente no cliente, permitindo que você altere estilos de preenchimento e contorno sem precisar de um servidor de mapas.

* Geoprocessamento On-the-Fly: Integrado com a biblioteca Turf.js, o Rumbho permite medições precisas (régua de mapa) e manipulação de objetos espaciais com precisão topológica.

* Geocoding Integrado: Pesquise endereços e localize coordenadas através de ferramentas de Forward Geocoding de baixa latência, facilitando a criação de Feature Collections a partir de dados tabulares ou buscas diretas.

* Data-Driven Properties: Adicione e gerencie metadados diretamente em cada feature. Perfeito para preparar dados que serão consumidos por APIs ou dashboards de BI.
Por que "Micro"?
Porque acreditamos que a complexidade é o inimigo da produtividade. O Rumbho é construído sobre uma stack moderna — React, Zustand e Tanstack Query — garantindo que o estado da sua aplicação seja previsível e extremamente rápido. É uma ferramenta pensada para o desenvolvedor que consome dados espaciais e para o analista que precisa de respostas rápidas.

# O que vem por aí?

Estou na versão beta. Estou trabalhando no suporte nativo a GeoPackage, importação de CSV com mapeamento de colunas lat/long e ferramentas para exportação de camadas.

Cansado de ferramentas caras e pesadas? o Rumbho é para você

Acesse agora e comece a testar: rumbho.com
