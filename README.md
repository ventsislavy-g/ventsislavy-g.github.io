# Technical Blog with Jekyll

A modern, responsive technical blog built with Jekyll for GitHub Pages deployment.

## Features

- 🎨 Clean, modern design with responsive layout
- 🔍 Built-in search functionality
- 📱 Mobile-friendly responsive design
- 🌙 Dark mode support
- ⚡ Fast loading with optimized assets
- 📝 Markdown-based content creation
- 🏷️ Tag and category support
- 📊 SEO optimized with meta tags
- 🔗 Social media integration ready

## Quick Start

### Prerequisites

- Ruby (version 2.5.0 or higher)
- Bundler gem
- Git

### Local Development

1. **Clone or copy the blog files to your local machine**

2. **Install dependencies:**
   ```bash
   bundle install
   ```

3. **Serve locally:**
   ```bash
   bundle exec jekyll serve
   ```

4. **Open your browser to** `http://localhost:4000`

### Deployment to GitHub Pages

1. **Create a new repository on GitHub named** `[your-username].github.io`

2. **Push your blog files to the repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages in repository settings:**
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save

4. **Your blog will be available at** `https://your-username.github.io`

## Customization

### Site Configuration

Edit `_config.yml` to customize:
- Site title and description
- Author information
- Social media links
- Plugins and build settings

### Styling

Modify `assets/css/main.css` to change:
- Color scheme (update CSS custom properties)
- Typography
- Layout and spacing
- Responsive breakpoints

### Adding Content

#### Blog Posts

Create new posts in `_posts/` directory with format: `YYYY-MM-DD-title.md`

Example frontmatter:
```yaml
---
layout: post
title: "Your Post Title"
date: 2024-01-15
categories: [category1, category2]
tags: [tag1, tag2]
excerpt: "Brief description of your post"
---
```

#### Pages

Create new pages in the root directory or `pages/` folder.

Example frontmatter for a page:
```yaml
---
layout: page
title: "About"
permalink: /about/
---
```

### Navigation

Update the navigation in `_includes/header.html`:
```html
<nav class="site-nav">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about/">About</a></li>
    <li><a href="/blog/">Blog</a></li>
    <!-- Add more navigation items -->
  </ul>
</nav>
```

## Directory Structure

```
jekyll-blog/
├── _config.yml          # Site configuration
├── Gemfile             # Ruby dependencies
├── index.md            # Homepage
├── _posts/             # Blog posts
│   └── 2024-01-15-welcome-to-my-technical-blog.md
├── _layouts/           # Page layouts
│   ├── default.html
│   ├── post.html
│   └── home.html
├── _includes/          # Reusable components
│   ├── header.html
│   ├── footer.html
│   └── search.html
├── assets/             # Static assets
│   ├── css/
│   │   └── main.css
│   └── js/
│       └── main.js
└── README.md           # This file
```

## Plugins

The blog includes several useful Jekyll plugins (configured in `_config.yml` and `Gemfile`):

- **jekyll-feed**: Generates RSS feed
- **jekyll-sitemap**: Creates XML sitemap
- **jekyll-seo-tag**: Adds SEO meta tags
- **jekyll-paginate**: Adds pagination for posts

## Development Tips

### Testing Locally

Always test your changes locally before deploying:

```bash
bundle exec jekyll serve --watch --livereload
```

### Building for Production

```bash
bundle exec jekyll build
```

This creates the `_site/` directory with your built site.

### Troubleshooting

**Common issues:**

1. **Ruby version conflicts**: Use a Ruby version manager like rbenv or rvm
2. **Bundle install fails**: Update RubyGems with `gem update --system`
3. **GitHub Pages build fails**: Check the repository settings and ensure all files are committed

**Debugging:**
- Check GitHub Pages build status in repository settings
- View Jekyll build logs for detailed error messages
- Validate YAML frontmatter syntax

## Contributing

Feel free to fork this repository and customize it for your needs. If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Happy blogging! 🚀