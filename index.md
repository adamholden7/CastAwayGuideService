---
layout: default
title: Home
description: Guided fly fishing trips on Wisconsin's Brule River – half-day and full-day adventures with a local guide.
---

<section id="hero" class="hero">
  <div class="hero-overlay"></div>
  <div class="container hero-content">
    <p class="eyebrow">
      {{ site.data.client.tagline | default: "Guided fly fishing trips on Wisconsin's Brule River." }}
    </p>
    <h1>{{ site.data.client.hero_headline | default: "Your Brule River Adventure Starts Here" }}</h1>
    <p class="hero-text">
      {{ site.data.client.hero_subtext | default: "Custom half-day and full-day fly fishing trips with a local guide who knows every bend of the Brule." }}
    </p>
    <div class="hero-actions">
      <a href="#contact" class="btn btn-primary">Book a Trip</a>
      {% if site.data.client.show_trips != false %}
      <a href="#trips" class="btn btn-ghost">View Trips &amp; Rates</a>
      {% endif %}
    </div>
    <div class="hero-meta">
      <span>‣ Walk-and-wade</span>
      <span>‣ All skill levels welcome</span>
      <span>‣ Gear available if needed</span>
    </div>
  </div>
</section>

<section id="about" class="section section-about">
  <div class="container about-grid">
    <!-- Image side -->
    <div class="about-image-wrap">
      <div class="about-image-frame">
        <img
          src="{{ '/assets/images/guide-portrait.jpg' | relative_url }}"
          alt="Brock Haugrud on the Brule River"
        />
      </div>

      <!-- Accent card -->
      <div class="about-accent-card">
        <p class="about-accent-title">Licensed &amp; Insured</p>
        <p class="about-accent-text">Professional guide services since 2018</p>
      </div>
    </div>

    <!-- Content side -->
    <div class="about-copy">
      <p class="eyebrow eyebrow-accent">Meet Your Guide</p>
      <h2 class="about-heading">Brock Haugrud</h2>

      <div class="about-body">
        <p>
          Growing up fishing the Brule, I’ve spent years learning its
          secrets in every season. What started as weekend trips with friends
          turned into a full-time obsession with this river—its moods, its
          hatches, and how it fishes on any given day.
        </p>
        <p>
          My goal on every trip is simple: a relaxed, dialed-in day where you
          learn something new, laugh a lot, and remember both the fish and the
          moments. Whether you’re picking up a fly rod for the first time or
          chasing a personal-best steelhead, I’ll build the day around you.
        </p>
        <p>
          The Brule is more than just water to me—it’s home. I’d love to share
          my favorite stretches, stories, and seasons with you.
        </p>
      </div>

      <!-- Stats -->
      <div class="about-stats">
        <div class="about-stat">
          <div class="about-stat-icon">🎣</div>
          <p class="about-stat-value">7+</p>
          <p class="about-stat-label">Years Guiding</p>
        </div>
        <div class="about-stat">
          <div class="about-stat-icon">🙂</div>
          <p class="about-stat-value">200+</p>
          <p class="about-stat-label">Happy Anglers</p>
        </div>
        <div class="about-stat">
          <div class="about-stat-icon">🗺️</div>
          <p class="about-stat-value">50+</p>
          <p class="about-stat-label">River Miles</p>
        </div>
        <div class="about-stat">
          <div class="about-stat-icon">✔️</div>
          <p class="about-stat-value">Fully</p>
          <p class="about-stat-label">Licensed &amp; Insured</p>
        </div>
      </div>
    </div>
  </div>
</section>



{% if site.data.client.show_trips != false and site.data.client.business_type == "guide" %}
<section id="trips" class="section section-trips">
  <div class="container">
    <header class="section-header">
      <p class="section-eyebrow">Guided Experiences</p>
      <h2>Trips &amp; Rates</h2>
      <p class="section-subtitle">
        Choose the experience that fits your schedule. All trips include quality
        Sage and Orvis equipment, hand-tied flies, and expert instruction.
      </p>
    </header>

    <div class="trips-grid">
      <!-- Trip 1 -->
      <article class="trip-card">
        <div class="trip-image-wrap">
          <img
            src="{{ '/assets/images/trip-halfday.jpg' | relative_url }}"
            alt="Angler wading the Brule River"
            class="trip-image"
          />
          <div class="trip-image-gradient"></div>
        </div>

        <div class="trip-body">
          <h3 class="trip-title">Half Day Wade Trip</h3>

          <div class="trip-meta">
            <span class="trip-meta-item">
              <span class="trip-meta-icon">⏱</span> 4 Hours
            </span>
            <span class="trip-meta-item">
              <span class="trip-meta-icon">👥</span> 1–2 Anglers
            </span>
          </div>

          <ul class="trip-features">
            <li><span class="trip-check">✓</span> All equipment provided</li>
            <li><span class="trip-check">✓</span> Flies included</li>
            <li><span class="trip-check">✓</span> Instruction available</li>
            <li><span class="trip-check">✓</span> Shore lunch</li>
          </ul>

          <div class="trip-footer">
            <div>
              <p class="trip-price-label">Starting at</p>
              <p class="trip-price">$325</p>
            </div>
            <a href="#contact" class="btn btn-primary trip-btn">Book Now</a>
          </div>
        </div>
      </article>

      <!-- Trip 2 (Most Popular) -->
      <article class="trip-card trip-card-popular">
        <div class="trip-image-wrap">
          <img
            src="{{ '/assets/images/trip-fullday.jpg' | relative_url }}"
            alt="Guide rowing a drift boat on the Brule"
            class="trip-image"
          />
          <div class="trip-image-gradient"></div>
          <div class="trip-badge">Most Popular</div>
        </div>

        <div class="trip-body">
          <h3 class="trip-title">Full Day Float Trip</h3>

          <div class="trip-meta">
            <span class="trip-meta-item">
              <span class="trip-meta-icon">⏱</span> 8 Hours
            </span>
            <span class="trip-meta-item">
              <span class="trip-meta-icon">👥</span> 1–2 Anglers
            </span>
          </div>

          <ul class="trip-features">
            <li><span class="trip-check">✓</span> Drift boat included</li>
            <li><span class="trip-check">✓</span> All equipment provided</li>
            <li><span class="trip-check">✓</span> Gourmet streamside lunch</li>
            <li><span class="trip-check">✓</span> Premium flies</li>
            <li><span class="trip-check">✓</span> Best value</li>
          </ul>

          <div class="trip-footer">
            <div>
              <p class="trip-price-label">Starting at</p>
              <p class="trip-price">$550</p>
            </div>
            <a href="#contact" class="btn btn-primary trip-btn trip-btn-popular">Book Now</a>
          </div>
        </div>
      </article>

      <!-- Trip 3 -->
      <article class="trip-card">
        <div class="trip-image-wrap">
          <img
            src="{{ '/assets/images/trip-evening.jpg' | relative_url }}"
            alt="Anglers fishing an evening hatch"
            class="trip-image"
          />
          <div class="trip-image-gradient"></div>
        </div>

        <div class="trip-body">
          <h3 class="trip-title">Evening Hatch Trip</h3>

          <div class="trip-meta">
            <span class="trip-meta-item">
              <span class="trip-meta-icon">⏱</span> 3 Hours
            </span>
            <span class="trip-meta-item">
              <span class="trip-meta-icon">👥</span> 1–2 Anglers
            </span>
          </div>

          <ul class="trip-features">
            <li><span class="trip-check">✓</span> Target evening hatches</li>
            <li><span class="trip-check">✓</span> All equipment provided</li>
            <li><span class="trip-check">✓</span> Expert instruction</li>
            <li><span class="trip-check">✓</span> Seasonal availability</li>
          </ul>

          <div class="trip-footer">
            <div>
              <p class="trip-price-label">Starting at</p>
              <p class="trip-price">$275</p>
            </div>
            <a href="#contact" class="btn btn-primary trip-btn">Book Now</a>
          </div>
        </div>
      </article>
    </div>

    <p class="trip-disclaimer">
      * Gratuity not included. Multi-day packages and group rates available upon request.
    </p>
  </div>
</section>
{% endif %}

<!-- <section id="river" class="section">
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
</section> -->

{% if site.data.client.show_testimonials != false %}
<section id="testimonials" class="section testimonials-section">
  <div class="container">
    <header class="section-header">
      <h2>What Clients Are Saying</h2>
    </header>

    <div class="card-grid testimonials">

      <article class="testimonial-card">
        <img class="testimonial-img" src="{{ '/assets/images/gallery-1.jpg' | relative_url }}" alt="Client holding a fish on the Brule">
        <div class="testimonial-body">
          <p>“Hands down the best day I’ve had on the water. Learned a ton and landed my biggest fish yet.”</p>
          <span class="testimonial-name">— Alex M.</span>
        </div>
      </article>

      <article class="testimonial-card">
        <img class="testimonial-img" src="{{ '/assets/images/gallery-2.jpg' | relative_url }}" alt="Client landing a steelhead">
        <div class="testimonial-body">
          <p>“Patient, dialed-in, and fun to be around. Perfect for my son’s first trip.”</p>
          <span class="testimonial-name">— Jamie R.</span>
        </div>
      </article>

      <article class="testimonial-card">
        <img class="testimonial-img" src="{{ '/assets/images/gallery-3.jpg' | relative_url }}" alt="Client with a fall steelhead">
        <div class="testimonial-body">
          <p>“Knows where the fish are and explains the ‘why’ behind every move. I’ll be back every season.”</p>
          <span class="testimonial-name">— Chris D.</span>
        </div>
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
