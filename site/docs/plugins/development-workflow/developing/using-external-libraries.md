---
sidebar_position: 4
---

# Using external libraries

ONLYOFFICE plugins run in a standard browser environment, so any JavaScript library that works in a browser can be used. This guide covers the three main integration approaches and best practices for each.

## Approach 1: CDN loading

Load libraries directly from a CDN in your `index.html`. Best for popular, well-maintained libraries:

```html
<!-- jQuery -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
        integrity="sha512-..." crossorigin="anonymous"></script>

<!-- Lodash -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
        integrity="sha512-..." crossorigin="anonymous"></script>

<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
```

Add a fallback for offline scenarios:

```javascript
if (typeof $ === 'undefined') {
  const script = document.createElement('script');
  script.src = './vendor/jquery.min.js';
  document.head.appendChild(script);
}
```

## Approach 2: Local files

Bundle the library inside your plugin folder. Required for offline use or when external CDNs are blocked:

```
my-plugin/
├── config.json
├── index.html
└── vendor/
    ├── jquery.min.js
    ├── lodash.min.js
    └── chart.min.js
```

```html
<script src="./vendor/jquery.min.js"></script>
<script src="./vendor/lodash.min.js"></script>
```

## Approach 3: Dynamic loading

Load libraries only when needed to reduce initial plugin load time:

```javascript
function loadLibrary(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve(); // Already loaded
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load: ${src}`));
    document.head.appendChild(script);
  });
}

// Usage
async function initChart() {
  await loadLibrary('https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js');
  // Chart.js is now available
  const ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, { /* config */ });
}
```

## Recommended libraries

| Category | Library | CDN URL |
|----------|---------|---------|
| UI framework | Bootstrap 5 | `https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css` |
| Utility | Lodash | `https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js` |
| Dates | Day.js | `https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.11.10/dayjs.min.js` |
| Charts | Chart.js | `https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js` |
| HTTP | Axios | `https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.0/axios.min.js` |
| Markdown | Marked.js | `https://cdn.jsdelivr.net/npm/marked@9.0.0/marked.min.js` |
| Validation | Validator.js | `https://cdnjs.cloudflare.com/ajax/libs/validator/13.11.0/validator.min.js` |

## Best practices

### Lock versions

Always specify an exact version — never use `@latest`:

```html
<!-- Wrong -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/latest/lodash.min.js"></script>

<!-- Correct -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>
```

### Avoid namespace conflicts

If two libraries use the same global name, use `noConflict()`:

```javascript
const $plugin = jQuery.noConflict(true); // Restore global $ and jQuery
```

### Use SRI hashes for security

Subresource Integrity (SRI) prevents loading tampered scripts from CDNs:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
        integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
        crossorigin="anonymous"></script>
```

### Tree shaking

For large libraries, import only what you need to keep bundle size small:

```javascript
// Instead of importing all of lodash:
import _ from 'lodash';

// Import only the functions you use:
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
```

## Additional resources

- [config.json reference](../../fundamentals/configuration/config-json.md)
- [For web editors](./for-web-editors.md)
- [Plugin examples](https://github.com/ONLYOFFICE/sdkjs-plugins)
