---
layout: home
title: Home
---

<div class="hero">
  <h1>Welcome to My Technical Blog</h1>
  <p class="hero-description">
    Exploring technology, programming, and software development through articles, tutorials, and insights.
  </p>
</div>

<div class="featured-section">
  <h2>Latest Posts</h2>
  <div class="posts-list">
    {% for post in site.posts limit: 3 %}
    <article class="post-preview">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p class="post-meta">
        <time datetime="{{ post.date | date: '%Y-%m-%d' }}">
          {{ post.date | date: "%B %d, %Y" }}
        </time>
        {% if post.categories.size > 0 %}
          in {{ post.categories | join: ', ' }}
        {% endif %}
      </p>
      <p class="post-excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
      <a href="{{ post.url }}" class="read-more">Read more →</a>
    </article>
    {% endfor %}
  </div>

  <div class="all-posts-link">
    <a href="/blog" class="btn">View All Posts</a>
  </div>
</div>

<div class="about-section">
  <h2>About This Blog</h2>
  <p>
    This is where I share my thoughts, experiences, and learnings in the world of technology.
    From programming tutorials to industry insights, I aim to create content that's both
    informative and accessible to developers at all levels.
  </p>

  <div class="topics">
    <h3>Topics I Write About:</h3>
    <ul class="topic-list">
      <li>Web Development</li>
      <li>Python Programming</li>
      <li>DevOps & CI/CD</li>
      <li>Software Architecture</li>
      <li>Technology Trends</li>
      <li>Career Advice</li>
    </ul>
  </div>
</div>

<div class="newsletter-section">
  <h2>Stay Updated</h2>
  <p>
    Subscribe to get notified when I publish new articles and tutorials.
  </p>
  <!-- Add your newsletter signup form here -->
</div>