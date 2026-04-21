# ClearCustomFunctions

Clears all custom functions.

## Syntax

```javascript
expression.ClearCustomFunctions();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Clear all added custom functions in a spreadsheet.

```javascript editor-xlsx
// How to delete custom function library in a spreadsheet.

// Remove unused custom function library in a spreadsheet.

Api.AddCustomFunctionLibrary("LibraryName", function(){
    /**
     * Function that returns the argument
     * @customfunction
     * @param {any} first First argument.
     * @returns {any} second Second argument.
     */
    Api.AddCustomFunction(function ADD(first, second) {
        return first + second;
    });
});

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("=ADD(1, 2)");
Api.ClearCustomFunctions();
worksheet.GetRange("A3").SetValue("All the custom functions were removed.");
```
