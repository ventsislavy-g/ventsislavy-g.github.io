// Simple search functionality for Jekyll blog
class BlogSearch {
  constructor() {
    this.searchInput = document.getElementById('search-input');
    this.searchResults = document.getElementById('search-results');
    this.posts = [];

    this.init();
  }

  init() {
    if (!this.searchInput) return;

    // Load posts data (in a real implementation, this would come from a JSON file or API)
    this.loadPosts();

    // Set up event listeners
    this.searchInput.addEventListener('input', this.debounce(this.handleSearch.bind(this), 300));
    this.searchInput.addEventListener('focus', () => this.showResults());
    document.addEventListener('click', (e) => this.handleClickOutside(e));
  }

  loadPosts() {
    // In a real Jekyll site, you might generate a search.json file with all posts
    // For now, we'll use a simple array - this would be replaced with actual post data
    this.posts = [
      {
        title: 'Welcome to My Technical Blog',
        url: '/2024/01/15/welcome-to-my-technical-blog.html',
        date: '2024-01-15',
        excerpt: 'Welcome to my technical blog where I share insights about software development, AI, and technology.',
        tags: ['introduction', 'blog']
      }
      // Add more posts here as they are created
    ];
  }

  handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();

    if (query.length < 2) {
      this.hideResults();
      return;
    }

    const results = this.posts.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    );

    this.displayResults(results, query);
  }

  displayResults(results, query) {
    if (!this.searchResults) return;

    if (results.length === 0) {
      this.searchResults.innerHTML = '<div class="search-no-results">No posts found matching your search.</div>';
      this.showResults();
      return;
    }

    const resultsHtml = results.map(post => `
      <div class="search-result-item">
        <h4><a href="${post.url}">${this.highlightMatch(post.title, query)}</a></h4>
        <div class="search-result-meta">${post.date}</div>
        <p>${this.highlightMatch(post.excerpt, query)}</p>
      </div>
    `).join('');

    this.searchResults.innerHTML = resultsHtml;
    this.showResults();
  }

  highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  showResults() {
    if (this.searchResults) {
      this.searchResults.style.display = 'block';
    }
  }

  hideResults() {
    if (this.searchResults) {
      this.searchResults.style.display = 'none';
    }
  }

  handleClickOutside(e) {
    if (!this.searchInput.contains(e.target) && !this.searchResults.contains(e.target)) {
      this.hideResults();
    }
  }

  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new BlogSearch();
});

// Simple theme toggle (optional enhancement)
class ThemeToggle {
  constructor() {
    this.toggleButton = document.getElementById('theme-toggle');
    this.currentTheme = localStorage.getItem('theme') || 'light';

    this.init();
  }

  init() {
    if (!this.toggleButton) return;

    this.setTheme(this.currentTheme);
    this.toggleButton.addEventListener('click', () => this.toggleTheme());
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.currentTheme = theme;

    if (this.toggleButton) {
      this.toggleButton.textContent = theme === 'light' ? '🌙' : '☀️';
    }
  }

  toggleTheme() {
    this.setTheme(this.currentTheme === 'light' ? 'dark' : 'light');
  }
}

// Initialize theme toggle
document.addEventListener('DOMContentLoaded', () => {
  new ThemeToggle();
});