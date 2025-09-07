// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "preline"

// Initialize Preline components after Turbo page loads
document.addEventListener('turbo:load', () => {
  if (window.HSStaticMethods) {
    window.HSStaticMethods.autoInit();
  }
});

// Also initialize on DOMContentLoaded for initial page load
document.addEventListener('DOMContentLoaded', () => {
  if (window.HSStaticMethods) {
    window.HSStaticMethods.autoInit();
  }
});
