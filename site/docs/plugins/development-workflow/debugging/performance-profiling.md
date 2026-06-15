---
sidebar_position: 4
---

# Performance profiling

Poorly performing plugins affect the entire editor experience. This guide covers how to measure, identify, and fix performance issues.

## Performance budgets

Set targets and enforce them during development:

| Operation | Target |
|-----------|--------|
| Plugin initialization | < 1000 ms |
| API call round-trip | < 500 ms |
| UI render / update | < 100 ms |
| User interaction response | < 50 ms |

## Measuring with the Performance API

Use `performance.mark()` and `performance.measure()` for precise timing:

```javascript
// Mark start and end points
performance.mark('fetch-start');
const data = await fetchData();
performance.mark('fetch-end');

// Measure the gap
performance.measure('fetch-duration', 'fetch-start', 'fetch-end');

const [entry] = performance.getEntriesByName('fetch-duration');
console.log(`Fetch took ${entry.duration.toFixed(1)}ms`);

if (entry.duration > 500) {
  console.warn('Fetch exceeded 500ms budget');
}
```

Use `PerformanceObserver` to catch entries automatically:

```javascript
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.duration > 100) {
      console.warn(`Slow: ${entry.name} - ${entry.duration.toFixed(1)}ms`);
    }
  }
});
observer.observe({ entryTypes: ['measure'] });
```

## Chrome DevTools - Performance tab

1. Open DevTools (`F12` / `Ctrl+Shift+I`).
2. Go to the **Performance** tab.
3. Click the record button (●).
4. Perform the action you want to profile.
5. Click **Stop**.

**What to look for:**
- **Long tasks** (yellow blocks > 50 ms) - indicate JS blocking the main thread
- **Layout shifts** - caused by DOM changes that trigger reflow
- **Script execution time** - identify functions taking the most time
- **Memory spikes** - shown in the memory graph at the bottom

## Chrome DevTools - Memory tab

Detect memory leaks by comparing heap snapshots:

1. Open DevTools → **Memory** tab.
2. Click **Take snapshot** - this is your baseline.
3. Use the plugin for a while (open/close panels, trigger actions).
4. Click **Take snapshot** again.
5. Select the second snapshot and use **Comparison** view.

Look for objects that are growing in count between snapshots. Common leak sources:

```javascript
// Wrong: event listener never removed
window.Asc.plugin.init = function() {
  document.addEventListener('click', handleClick);
};

// Correct: clean up when plugin closes
window.Asc.plugin.init = function() {
  document.addEventListener('click', handleClick);
};
window.Asc.plugin.button = function(id) {
  document.removeEventListener('click', handleClick);
};
```

## Optimization techniques

### Batch DOM updates

```javascript
// Wrong: triggers reflow on every iteration
items.forEach(item => {
  document.getElementById('list').innerHTML += `<li>${item}</li>`;
});

// Correct: batch with DocumentFragment
const fragment = document.createDocumentFragment();
items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  fragment.appendChild(li);
});
document.getElementById('list').appendChild(fragment);
```

### Use requestAnimationFrame for visual updates

```javascript
// Wrong: setInterval may fire when tab is hidden
setInterval(updateProgress, 16);

// Correct: requestAnimationFrame pauses when hidden
function updateProgress() {
  drawFrame();
  requestAnimationFrame(updateProgress);
}
requestAnimationFrame(updateProgress);
```

### Debounce expensive operations

```javascript
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const onInput = debounce(async (text) => {
  const result = await translateText(text);
  displayResult(result);
}, 300);

document.getElementById('input').addEventListener('input', (e) => {
  onInput(e.target.value);
});
```

### Use Map for O(1) lookups

```javascript
// Wrong: O(n) array search
const item = items.find(i => i.id === targetId);

// Correct: O(1) Map lookup
const itemMap = new Map(items.map(i => [i.id, i]));
const item = itemMap.get(targetId);
```

### Virtual scrolling for large lists

For lists with 1,000+ items, render only the visible rows:

```javascript
const ITEM_HEIGHT = 32;
const VISIBLE_COUNT = Math.ceil(container.clientHeight / ITEM_HEIGHT) + 2;

function renderVisibleItems(scrollTop) {
  const startIndex = Math.floor(scrollTop / ITEM_HEIGHT);
  const visibleItems = allItems.slice(startIndex, startIndex + VISIBLE_COUNT);

  list.style.paddingTop = `${startIndex * ITEM_HEIGHT}px`;
  list.innerHTML = visibleItems.map(item => `<li>${item.name}</li>`).join('');
}

container.addEventListener('scroll', () => renderVisibleItems(container.scrollTop));
```

## Production monitoring

Send performance metrics to your backend without blocking the page:

```javascript
function reportMetric(name, value) {
  navigator.sendBeacon('/metrics', JSON.stringify({
    plugin: 'my-plugin',
    metric: name,
    value: Math.round(value),
    timestamp: Date.now(),
  }));
}

// Report initialization time
const initStart = performance.now();
window.Asc.plugin.init = function() {
  loadData().then(() => {
    reportMetric('init_ms', performance.now() - initStart);
  });
};
```

## Additional resources

- [Browser DevTools guide](./browser-devtools-guide.md)
- [Common errors and solutions](./common-errors-solutions.md)
