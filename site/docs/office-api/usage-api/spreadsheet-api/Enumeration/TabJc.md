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

This example set tab positions at 50, 75 and 150 points with the text aligned center, left and right at each tab stop accordingly.

```javascript editor-xlsx
// How to set tabs and indicate justifications of text at each tab stop.

// Add tabs at points with text alignment.

paraPr.SetTabs([1000, 1500, 3000], ["center", "left", "right"]);
```
