# RemoveCustomFunction

Removes a custom function.

## Syntax

```javascript
expression.RemoveCustomFunction(sName);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The name of a custom function. |

## Returns

boolean

## Example

Unregister a custom formula so it is no longer available for use in a spreadsheet.

```javascript editor-xlsx
// How do I delete a previously added custom formula from the available functions in a spreadsheet?

// Clean up unused custom formulas to keep the function list tidy in a spreadsheet.

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
Api.RemoveCustomFunction("add");
worksheet.GetRange("A3").SetValue("The ADD custom function was removed.");
```
