---
layout: default
title: Tags
---

{% for tag in collections.tagList %}

<span>
    <a class="no-underline" href="/tags/{{ tag }}"><button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-6 mb-4">
        {{ tag }}
    </button>
    </a>
</span>
{% endfor %}
