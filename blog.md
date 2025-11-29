---
layout: default
title: River Reports & Tips
description: Brule River conditions, hatches, and fly fishing tips from a local guide.
---

<section class="section">
  <div class="container">
    <header class="section-header">
      <h1>River Reports &amp; Tips</h1>
      <p>Fresh updates on conditions, seasonal highlights, and what’s working on the Brule.</p>
    </header>

    <div class="card-grid blog-grid">
      {% for post in site.posts %}
      <article class="card blog-card">
        {% if post.thumbnail %}
        <img src="{{ site.baseurl }}{{ post.thumbnail }}" alt="" class="blog-thumb" />
        {% endif %}
        <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
        <p class="card-text">
          {{ post.excerpt | strip_html | truncate: 140 }}
        </p>
        <a href="{{ site.baseurl }}{{ post.url }}" class="blog-link">Read More →</a>
      </article>
      {% endfor %}
    </div>
  </div>
</section>
