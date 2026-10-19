# TabJc

Types of custom tab.

## Type

Enumeration

## Values

- "clear"
- "left"
- "right"
- "center"

## Example

Set tab positions at 50, 75 and 150 points with the text aligned center, left and right at each tab stop accordingly.

```javascript editor-xlsx
// How do I set tab stops and the text justification at each of them?

// Add tabs at points with text alignment.

paraPr.SetTabs([1000, 1500, 3000], ["center", "left", "right"]);
```
