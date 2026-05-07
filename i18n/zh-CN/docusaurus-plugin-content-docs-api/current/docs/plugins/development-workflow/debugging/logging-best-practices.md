---
sidebar_position: 3
---

# Logging best practices

Effective logging helps you understand what your plugin is doing, trace bugs quickly, and monitor production behavior without exposing sensitive data.

## Log levels

Use the appropriate level for each message:

| Level | Method | When to use |
|-------|--------|-------------|
| ERROR | `console.error()` | Unrecoverable failures, caught exceptions |
| WARN | `console.warn()` | Unexpected but handled conditions |
| INFO | `console.log()` | Key lifecycle events (init, user actions) |
| DEBUG | `console.log()` | Detailed state during development |
| TRACE | `console.log()` | Fine-grained step-by-step tracing |

## What to log

**Log these events:**
- Plugin initialization and teardown
- API calls and their outcomes
- User actions (button clicks, selections)
- Errors and exceptions
- State transitions
- Performance metrics for slow operations

**Do not log:**
- Passwords, tokens, or API keys
- Credit card numbers or personal data
- Every iteration of a tight loop
- Complete large objects (use targeted property access)

## Structured logging

Group related messages and include context:

```javascript
function ContextLogger(context) {
  const prefix = `[${context}]`;
  return {
    log: (msg, data) => console.log(`${prefix} ${msg}`, data || ''),
    warn: (msg, data) => console.warn(`${prefix} ${msg}`, data || ''),
    error: (msg, data) => console.error(`${prefix} ${msg}`, data || ''),
  };
}

const log = ContextLogger('TranslatorPlugin v1.2.0');

window.Asc.plugin.init = function() {
  log.log('Initialized');
};

window.Asc.plugin.button = function(id) {
  log.log('Button clicked', { id });
};
```

Use `console.group()` to structure related messages:

```javascript
console.group('Fetching translation');
console.log('Source language:', sourceLang);
console.log('Target language:', targetLang);
console.log('Text length:', text.length);
// ... perform fetch ...
console.groupEnd();
```

## Environment-aware logging

Log verbosely in development, minimally in production:

```javascript
const IS_DEV = window.location.hostname === 'localhost';

const logger = {
  log: (...args) => { if (IS_DEV) console.log(...args); },
  warn: (...args) => { if (IS_DEV) console.warn(...args); },
  error: (...args) => console.error(...args), // Always log errors
};
```

## Performance logging

Flag slow operations automatically:

```javascript
function timedOperation(name, fn) {
  const start = performance.now();
  const result = fn();
  const duration = performance.now() - start;
  if (duration > 100) {
    console.warn(`Slow operation: ${name} took ${duration.toFixed(1)}ms`);
  }
  return result;
}

// Usage
const data = timedOperation('processDocument', () => processDocument());
```

## Global error capture

Catch uncaught errors and unhandled promise rejections:

```javascript
window.addEventListener('error', (event) => {
  console.error('Uncaught error:', {
    message: event.message,
    filename: event.filename,
    line: event.lineno,
  });
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});
```

## Rate limiting

Prevent log spam in high-frequency events:

```javascript
const logThrottled = (() => {
  const lastLog = {};
  return (key, msg, intervalMs = 1000) => {
    const now = Date.now();
    if (!lastLog[key] || now - lastLog[key] > intervalMs) {
      console.log(msg);
      lastLog[key] = now;
    }
  };
})();

// Logs at most once per second
document.addEventListener('mousemove', () => {
  logThrottled('mousemove', 'Mouse moving...');
});
```

## Security checklist

- **Never** log authentication tokens, passwords, or session IDs
- **Never** log full API responses that may contain user PII
- Remove or disable verbose debug logging before releasing
- Audit your log statements before marketplace submission

## Additional resources

- [Browser DevTools guide](./browser-devtools-guide.md)
- [Common errors and solutions](./common-errors-solutions.md)
- [Preparing for release](../publishing/preparing-for-release.md)
