---
layout: default
title: Home
description: {{ site.data.client.tagline | default: "Guided fly fishing trips on Wisconsin's Brule River – half-day and full-day adventures with a local guide." }}
---

<section id="hero" class="hero">
  <div class="hero-overlay"></div>
  <div class="container hero-content">
    <p class="eyebrow">
      {{ site.data.client.tagline | default: "Guided fly fishing trips on Wisconsin's Brule River." }}
    </p>
    <h1>{{ site.data.client.hero_headline | default: "Chase Wild Trout on the Legendary Brule" }}</h1>
    <p class="hero-text">
      {{ site.data.client.hero_subtext | default: "Custom half-day and full-day fly fishing trips with a local guide who knows every bend, riffle, and run." }}
    </p>
    <div class="hero-actions">
      <a href="#contact" class="btn btn-primary">Book a Trip</a>
      {% if site.data.client.show_trips != false %}
      <a href="#trips" class="btn btn-ghost">View Trips &amp; Rates</a>
      {% endif %}
    </div>
    <div class="hero-meta">
      <span>‣ Walk-and-wade &amp; drift boat options</span>
      <span>‣ All skill levels welcome</span>
      <span>‣ Gear available if needed</span>
    </div>
  </div>
</section>

<section id="about" class="section">
  <div class="container grid-2">
    <div class="about-text">
      <h2>About {{ site.data.client.business_name | default: "Your Guide" }}</h2>
      <p>
        Hey, I’m <strong>{{ site.data.client.owner_name | default: "Your Guide" }}</strong> — based in
        {{ site.data.client.location | default: "your local area" }}. I’ve spent years learning this water in every season,
        chasing fish from the headwaters to the lower stretches.
      </p>
      <p>
        Whether it’s your first time with a fly rod or you’re a seasoned angler hunting a personal best,
        I’ll dial in a day tailored to your goals, conditions, and comfort level.
      </p>
      <ul class="feature-list">
        <li>Licensed &amp; insured Wisconsin guide</li>
        <li>Drift boat &amp; walk-and-wade trips</li>
        <li>Patient instruction &amp; river safety first</li>
      </ul>
    </div>
    <div class="about-media">
      <div class="about-card">
        <img src="{{ '/images/guide-portrait.jpg' | relative_url }}" alt="Guide on the water" />
      </div>
    </div>
  </div>
</section>

{% if site.data.client.show_trips != false and site.data.client.business_type == "guide" %}
<section id="trips" class="section section-alt">
  <div class="container">
    <header class="section-header">
      <h2>Trips &amp; Rates</h2>
      <p>Simple, upfront pricing. All trips are customized around conditions and your experience level.</p>
    </header>

    <div class="card-grid">
      <article class="card">
        <h3>Half-Day Wade Trip</h3>
        <p class="card-price">$300</p>
        <p class="card-text">
          4–5 hours focused on a productive stretch of river. Perfect for learning new water
          or dialing in your technique.
        </p>
        <ul class="card-list">
          <li>Up to 2 anglers</li>
          <li>Rods, flies, and leader included</li>
          <li>Cold drinks &amp; snacks</li>
        </ul>
      </article>

      <article class="card">
        <h3>Full-Day Drift</h3>
        <p class="card-price">$500</p>
        <p class="card-text">
          8–9 hours floating prime sections of the Brule. Cover more water and target the best
          runs based on real-time conditions.
        </p>
        <ul class="card-list">
          <li>Up to 2 anglers</li>
          <li>Boat, safety gear &amp; all tackle</li>
          <li>Riverside lunch</li>
        </ul>
      </article>

      <article class="card">
        <h3>Custom / Seasonal</h3>
        <p class="card-price">Varies</p>
        <p class="card-text">
          Steelhead missions, evening hatches, and multi-day packages available on request.
        </p>
        <ul class="card-list">
          <li>Prime seasonal windows</li>
          <li>Multi-day options</li>
          <li>Groups and corporate trips</li>
        </ul>
      </article>
    </div>
  </div>
</section>
{% endif %}

<section id="river" class="section">
  <div class="container grid-2">
    <div>
      <h2>The Water</h2>
      <p>
        The local water here is a classic fishery — cold, clean, and full of structure that fish love.
        From pocket water and riffles to deep pools, there’s always something to explore.
      </p>
      <p>
        From delicate dry-fly fishing in summer to powerful runs in the fall and spring, there’s always something
        happening out here.
      </p>
      <ul class="feature-list">
        <li>Wild and stocked trout</li>
        <li>Seasonal runs and special windows</li>
        <li>Classic Northwoods scenery</li>
      </ul>
    </div>
    <div class="river-panel">
      <h3>Seasonal Highlights</h3>
      <ul class="season-list">
        <li><span>April–May:</span> Spring fish &amp; early hatches</li>
        <li><span>June–August:</span> Dry flies, terrestrials &amp; evening trips</li>
        <li><span>September–November:</span> Fall colors &amp; big fish</li>
      </ul>
      <p class="river-note">
        For current conditions and availability, reach out and I’ll let you know what’s fishing best.
      </p>
    </div>
  </div>
</section>

{% if site.data.client.show_gallery != false %}
<section id="gallery" class="section section-alt">
  <div class="container">
    <header class="section-header">
      <h2>On the Water</h2>
      <p>A few moments from recent days out here.</p>
    </header>
    <div class="gallery-grid">
      <figure class="gallery-item">
        <img src="{{ '/images/gallery-1.jpg' | relative_url }}" alt="Angler landing a fish" />
      </figure>
      <figure class="gallery-item">
        <img src="{{ '/images/gallery-2.jpg' | relative_url }}" alt="Boat on a misty morning" />
      </figure>
      <figure class="gallery-item">
        <img src="{{ '/images/gallery-3.jpg' | relative_url }}" alt="Close-up of a fish" />
      </figure>
      <figure class="gallery-item">
        <img src="{{ '/images/gallery-4.jpg' | relative_url }}" alt="River at sunset through the trees" />
      </figure>
    </div>
  </div>
</section>
{% endif %}

{% if site.data.client.show_testimonials != false %}
<section class="section">
  <div class="container">
    <header class="section-header">
      <h2>What Clients Are Saying</h2>
    </header>
    <div class="card-grid testimonials">
      <article class="card testimonial">
        <p>“Hands down the best day I’ve had on the water. Learned a ton and landed my biggest fish yet.”</p>
        <span class="testimonial-name">— Alex M.</span>
      </article>
      <article class="card testimonial">
        <p>“Patient, dialed-in, and fun to be around. Perfect for my son’s first trip.”</p>
        <span class="testimonial-name">— Jamie R.</span>
      </article>
      <article class="card testimonial">
        <p>“Knows where the fish are and explains the ‘why’ behind every move. I’ll be back every season.”</p>
        <span class="testimonial-name">— Chris D.</span>
      </article>
    </div>
  </div>
</section>
{% endif %}

{% if site.data.client.show_booking_form != false %}
<section id="contact" class="section section-accent">
  <div class="container grid-2">
    <div>
      <h2>Book Your Day</h2>
      <p>
        Tell me what kind of trip you’re interested in, your preferred dates, and your experience level.
        I’ll get back to you with availability and details.
      </p>
      <div class="contact-details">
        <p>
          <strong>Email:</strong>
          <a href="mailto:{{ site.data.client.email }}">{{ site.data.client.email }}</a>
        </p>
        <p>
          <strong>Phone:</strong>
          <a href="tel:{{ site.data.client.phone | replace: '(', '' | replace: ')', '' | replace: ' ', '' | replace: '-', '' }}">
            {{ site.data.client.phone }}
          </a>
        </p>
      </div>
    </div>
    <form class="contact-form">
      <div class="form-row">
        <label for="name">Name</label>
        <input id="name" name="name" required />
      </div>
      <div class="form-row">
        <label for="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div class="form-row form-row-inline">
        <div>
          <label for="date">Preferred Date</label>
          <input id="date" name="date" type="date" />
        </div>
        <div>
          <label for="group-size">Group Size</label>
          <input id="group-size" name="group-size" type="number" min="1" max="4" />
        </div>
      </div>
      <div class="form-row">
        <label for="message">Trip Details</label>
        <textarea id="message" name="message" rows="4" placeholder="Tell me about your ideal day on the water..."></textarea>
      </div>
      <button type="submit" class="btn btn-primary btn-block">Send Inquiry</button>
    </form>
  </div>
</section>
{% endif %}
