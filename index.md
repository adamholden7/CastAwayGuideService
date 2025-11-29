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
      </article>

      <!-- Trip 2 (Most Popular) -->
      <article class="trip-card trip-card-popular">
        <div class="trip-badge">Most Popular</div>

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
      </article>

      <!-- Trip 3 -->
      <article class="trip-card">
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
<section id="testimonials" class="section section-testimonials">
  <div class="container">
    <header class="section-header section-header-tight">
      <p class="section-eyebrow">Happy Anglers</p>
      <h2>What Clients Say</h2>
      <p class="section-subtitle">
        A few words from anglers who’ve spent a day on the Brule.
      </p>
    </header>

    <div class="testimonials-grid">
      <!-- Testimonial 1 -->
      <article class="testimonial-card">
        <div class="testimonial-top">
          <div class="testimonial-stars">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <div class="testimonial-quote-icon">❝</div>
        </div>

        <p class="testimonial-text">
          "Hands down the best day I've had on the water. Learned a ton and landed
          my biggest fish yet."
        </p>

        <div class="testimonial-footer">
          <div class="testimonial-avatar">
            <img src="{{ '/assets/images/testimonial-1.jpg' | relative_url }}" alt="Alex M.">
          </div>
          <div class="testimonial-meta">
            <p class="testimonial-name">Alex M.</p>
            <p class="testimonial-location">Minneapolis, MN</p>
            <p class="testimonial-trip">Full Day Float Trip</p>
          </div>
        </div>
      </article>

      <!-- Testimonial 2 -->
      <article class="testimonial-card">
        <div class="testimonial-top">
          <div class="testimonial-stars">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <div class="testimonial-quote-icon">❝</div>
        </div>

        <p class="testimonial-text">
          "Patient, dialed-in, and fun to be around. Perfect for my son's first trip."
        </p>

        <div class="testimonial-footer">
          <div class="testimonial-avatar">
            <img src="{{ '/assets/images/testimonial-2.jpg' | relative_url }}" alt="Jamie R.">
          </div>
          <div class="testimonial-meta">
            <p class="testimonial-name">Jamie R.</p>
            <p class="testimonial-location">Duluth, MN</p>
            <p class="testimonial-trip">Half Day Wade Trip</p>
          </div>
        </div>
      </article>

      <!-- Testimonial 3 -->
      <article class="testimonial-card">
        <div class="testimonial-top">
          <div class="testimonial-stars">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <div class="testimonial-quote-icon">❝</div>
        </div>

        <p class="testimonial-text">
          "Knows where the fish are and explains the 'why' behind every move. I'll be back every season."
        </p>

        <div class="testimonial-footer">
          <div class="testimonial-avatar">
            <img src="{{ '/assets/images/testimonial-3.jpg' | relative_url }}" alt="Chris D.">
          </div>
          <div class="testimonial-meta">
            <p class="testimonial-name">Chris D.</p>
            <p class="testimonial-location">Madison, WI</p>
            <p class="testimonial-trip">Evening Hatch Trip</p>
          </div>
        </div>
      </article>
    </div>

    <div class="testimonial-trust-row">
      <div class="trust-item">
        <span class="trust-label">Orvis</span>
        <span class="trust-subtext">Endorsed Guide</span>
      </div>
      <div class="trust-item">
        <span class="trust-label">4.9★</span>
        <span class="trust-subtext">Google Reviews</span>
      </div>
      <div class="trust-item">
        <span class="trust-label">TripAdvisor</span>
        <span class="trust-subtext">Excellence Award</span>
      </div>
    </div>
  </div>
</section>
{% endif %}

{% if site.data.client.show_booking_form != false %}
<section id="booking" class="section section-booking">
  <div class="container">
    <header class="section-header section-header-tight">
      <p class="section-eyebrow">Ready to fish?</p>
      <h2 class="about-heading">Book Your Adventure</h2>
      <p class="section-subtitle">
        Select an available date and fill out the form below. I’ll get back to you within
        24 hours to confirm your trip.
      </p>
    </header>

    <div class="booking-grid">
      <!-- Calendar side -->
      <div class="booking-card">
        <h3 class="booking-card-title">Check Availability</h3>

        <div class="booking-calendar-header">
          <button type="button" class="calendar-nav" aria-label="Previous month">‹</button>
          <span class="calendar-month">November 2025</span>
          <button type="button" class="calendar-nav" aria-label="Next month">›</button>
        </div>

        <div class="booking-calendar">
          <div class="calendar-row calendar-weekdays">
            <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span>
            <span>Thu</span><span>Fri</span><span>Sat</span>
          </div>

          <!-- This is just a static mock. You can adjust days as you like. -->
          <div class="calendar-row">
            <span class="calendar-day is-muted"></span>
            <span class="calendar-day is-muted"></span>
            <span class="calendar-day is-muted"></span>
            <span class="calendar-day is-muted"></span>
            <span class="calendar-day is-muted"></span>
            <span class="calendar-day">1</span>
            <span class="calendar-day">2</span>
          </div>

          <div class="calendar-row">
            <span class="calendar-day">3</span><span class="calendar-day">4</span>
            <span class="calendar-day">5</span><span class="calendar-day">6</span>
            <span class="calendar-day">7</span><span class="calendar-day">8</span>
            <span class="calendar-day is-unavailable">9</span>
          </div>

          <div class="calendar-row">
            <span class="calendar-day is-unavailable">10</span>
            <span class="calendar-day">11</span><span class="calendar-day">12</span>
            <span class="calendar-day">13</span><span class="calendar-day">14</span>
            <span class="calendar-day">15</span><span class="calendar-day">16</span>
          </div>

          <div class="calendar-row">
            <span class="calendar-day">17</span><span class="calendar-day">18</span>
            <span class="calendar-day">19</span><span class="calendar-day">20</span>
            <span class="calendar-day">21</span><span class="calendar-day">22</span>
            <span class="calendar-day">23</span>
          </div>

          <div class="calendar-row">
            <span class="calendar-day">24</span><span class="calendar-day">25</span>
            <span class="calendar-day">26</span><span class="calendar-day">27</span>
            <span class="calendar-day">28</span>
            <span class="calendar-day is-available is-selected">29</span>
            <span class="calendar-day is-unavailable">30</span>
          </div>
        </div>

        <div class="calendar-legend">
          <span><span class="legend-dot is-available"></span>Available</span>
          <span><span class="legend-dot is-unavailable"></span>Unavailable</span>
        </div>
      </div>

      <!-- Form side -->
      <div class="booking-card">
        <h3 class="booking-card-title">Request a Trip</h3>

        <form class="booking-form">
          <div class="form-row-inline">
            <div class="form-row">
              <label for="name">Full Name *</label>
              <input id="name" name="name" required />
            </div>
            <div class="form-row">
              <label for="email">Email *</label>
              <input id="email" name="email" type="email" required />
            </div>
          </div>

          <div class="form-row-inline">
            <div class="form-row">
              <label for="phone">Phone</label>
              <input id="phone" name="phone" type="tel" />
            </div>
            <div class="form-row">
              <label for="group-size">Number of Anglers *</label>
              <select id="group-size" name="group-size" required>
                <option value="">Select</option>
                <option value="1">1 angler</option>
                <option value="2">2 anglers</option>
              </select>
            </div>
          </div>

          <div class="form-row-inline">
            <div class="form-row">
              <label for="trip-type">Trip Type *</label>
              <select id="trip-type" name="trip-type" required>
                <option value="">Select trip</option>
                <option value="half-day">Half Day Wade Trip</option>
                <option value="full-day">Full Day Float Trip</option>
                <option value="evening">Evening Hatch Trip</option>
              </select>
            </div>
            <div class="form-row">
              <label for="experience">Experience Level</label>
              <select id="experience" name="experience">
                <option value="">Select level</option>
                <option value="first-time">First time</option>
                <option value="some">Some experience</option>
                <option value="experienced">Experienced</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <label for="date">Preferred Date</label>
            <input id="date" name="date" type="date" />
          </div>

          <div class="form-row">
            <label for="message">Message / Special Requests</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell me about your goals for the trip, any special occasions, or questions you have..."
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary booking-submit">
            <span>Send Request</span>
          </button>

          <p class="booking-note">
            I typically respond within 24 hours. A 50% deposit is required to confirm
            your date; remaining balance is due on the day of your trip.
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
{% endif %}

