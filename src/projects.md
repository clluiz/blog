---
layout: default.liquid
title: Projetos
---

# Projetos pessoais

{% for project in projects %}
  
  <h2>{{ project.title }}</h2>

  {{ project.description }}

  ### Tecnologias:
  {% for tech in project.tech_stack %}
  - {{ tech }}
  {% endfor %}

  [Código fonte]({{ project.github_url }}){% if project.project_url %} | [Acesse]({{ project.project_url }}){% endif %}
{% endfor %}

