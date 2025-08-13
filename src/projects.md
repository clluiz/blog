---
layout: default.liquid
title: Projetos pessoais
description: "Lista de projetos pessoais desenvolvidos por Cleiton Luiz."
type: WebPage
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
  url: https://cleitonluizdev.com.br/projects
  title: "Projetos pessoais"
  description: "Projetos pessoais"
  image:
    src: https://cleitonluizdev.com.br/images/page.png
  author:
    url: https://cleitonluizdev.com.br/projects/
    name: Cleiton Teodoro
---

{% for project in projects %}
  
  <h2>{{ project.title }}</h2>

  {{ project.description }}

  ### Tecnologias:
  {% for tech in project.tech_stack %}
  - {{ tech }}
  {% endfor %}

  [Código fonte]({{ project.github_url }}){% if project.project_url %} | [Acesse]({{ project.project_url }}){% endif %}
{% endfor %}

