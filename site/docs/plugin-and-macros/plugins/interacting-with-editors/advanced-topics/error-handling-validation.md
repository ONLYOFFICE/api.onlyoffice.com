---
sidebar_position: 4
---

# Error handling and validation

Robust plugins handle editor method failures and validate inputs before sending them to the editor.

## Handling method callback errors

Most `executeMethod` callbacks receive an error parameter. Always check it:

```javascript
window.Asc.plugin.executeMethod("GetSelectedText", [], function (result, error) {
  if (error) {
    console.error("Method failed:", error);
    showUserMessage("Could not read selection. Please try again.");
    return;
  }
  processText(result);
});
```

## Input validation before calling methods

Validate user inputs before passing them to editor methods:

```javascript
function insertRows(count) {
  if (!Number.isInteger(count) || count < 1 || count > 100) {
    showError("Row count must be between 1 and 100.");
    return;
  }
  window.Asc.plugin.executeMethod("InsertTable", [{ Rows: count, Cols: 3 }]);
}
```

## Handling unsupported editor contexts

Some methods are only available in specific editor types. Check `window.Asc.plugin.info.editorType` before calling:

```javascript
const editorType = window.Asc.plugin.info?.editorType;

if (editorType === "word") {
  window.Asc.plugin.executeMethod("GetSelectedText", [], callback);
} else {
  showError("This feature is only available in text document editors.");
}
```

## Logging errors

For debugging, log errors with context before showing them to the user. See [Logging best practices](../../development-workflow/debugging/logging-best-practices.md).

## See also

- [Common errors and solutions](../../development-workflow/debugging/common-errors-solutions.md)
- [Logging best practices](../../development-workflow/debugging/logging-best-practices.md)
