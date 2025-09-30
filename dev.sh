#!/bin/bash

# Jekyll Blog Development Script
# This script helps with common Jekyll development tasks

set -e

JEKYLL_ENV="${JEKYLL_ENV:-development}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Ruby and Bundler are installed
check_dependencies() {
    print_status "Checking dependencies..."

    if ! command -v ruby &> /dev/null; then
        print_error "Ruby is not installed. Please install Ruby 2.5.0 or higher."
        exit 1
    fi

    if ! command -v bundle &> /dev/null; then
        print_error "Bundler is not installed. Please install Bundler with 'gem install bundler'."
        exit 1
    fi

    print_success "Dependencies check passed."
}

# Install dependencies
install_deps() {
    print_status "Installing Ruby dependencies..."
    bundle install
    print_success "Dependencies installed."
}

# Serve the site locally
serve() {
    print_status "Starting Jekyll development server..."
    print_status "Site will be available at http://localhost:4000"
    print_warning "Press Ctrl+C to stop the server"

    bundle exec jekyll serve --watch --livereload --host 0.0.0.0
}

# Build the site
build() {
    print_status "Building site for production..."
    JEKYLL_ENV=production bundle exec jekyll build
    print_success "Site built successfully. Output in _site/ directory."
}

# Clean build artifacts
clean() {
    print_status "Cleaning build artifacts..."
    rm -rf _site/
    rm -rf .sass-cache/
    rm -rf .jekyll-cache/
    rm -rf .jekyll-metadata/
    print_success "Build artifacts cleaned."
}

# Run tests (if any)
test() {
    print_status "Running tests..."
    # Add your test commands here
    print_success "Tests completed."
}

# Show help
show_help() {
    echo "Jekyll Blog Development Script"
    echo ""
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  install    Install Ruby dependencies"
    echo "  serve      Start development server with live reload"
    echo "  build      Build site for production"
    echo "  clean      Clean build artifacts"
    echo "  test       Run tests"
    echo "  setup      Full setup (install deps and serve)"
    echo "  help       Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 setup    # Full setup and start development"
    echo "  $0 serve    # Start development server"
    echo "  $0 build    # Build for production"
}

# Full setup
setup() {
    check_dependencies
    install_deps
    print_success "Setup complete!"
    echo ""
    print_status "You can now run '$0 serve' to start the development server."
}

# Main script logic
case "${1:-help}" in
    "install")
        check_dependencies
        install_deps
        ;;
    "serve")
        check_dependencies
        serve
        ;;
    "build")
        check_dependencies
        build
        ;;
    "clean")
        clean
        ;;
    "test")
        test
        ;;
    "setup")
        setup
        ;;
    "help"|*)
        show_help
        ;;
esac