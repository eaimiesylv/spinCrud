<template>
  <section id="core_setting">
    <h4><i class="fas fa-flag"></i>Core Setting</h4>
    <div id="coresetting_wrapper">
      <div class="coresetting-input-container">
        <div>
          <label for="language">Language</label>
          <select id="language">
            <option value="en">&#127468;&#127463; English</option>
          </select>
       </div>
      <div>
        <label for="tone">Tone of Voice</label>
        <select id="tone">
          <option>Friendly</option>
        </select>
      </div>
      <div>
        <label for="pointOfView">Point of View</label>
        <select id="pointOfView">
          <option>None</option>
        </select>
      </div>
      <div>
        <label for="targetCountry">Target Country</label>
        <select id="targetCountry">
          <option>None</option>
        </select>
      </div>
    </div>

      <div class="coresetting-input-container">
        <div id="coresetting_article">
            <label for="articleSize">Article Size</label>
            <div>
            <select id="articleSize">
              <option value="x-small">&#127482;&#127469; X-Small</option>
            </select>
            <p>2400 - 3600 words, 9-12 H2 headings</p>
          </div>
          
        </div>

        

        <p id="coresetting_description">The X-small article offers articles or news, ideal for quick updates and capturing immediate interest, 
          ensuring your content remains fresh and timely in the eyes of your audience.</p>

        <div id="coresetting_details">
          <span class="details">Details to include &#9432;</span>
          <span><a href="#">Sample 1</a></span>
          <span class="pipe">|</span>
          <span><a href="#">Sample 2</a></span>
          <span class="pipe">|</span>
          <span><a href="#">Sample 3</a></span>
        </div>

        <div id="coresetting_checkbox">
          <input type="checkbox" id="intenseMode">
          <label for="intenseMode">Intense mode: to each section, beyond just the entire article</label>
        </div>

        <div id="coresetting_comment">
          <textarea rows="4" placeholder="Your comments..."></textarea>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
 
</style>
