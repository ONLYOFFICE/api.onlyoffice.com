# AddCustomFunctionLibrary

Registers a new custom functions library (see the -**SetCustomFunctions** plugin method).
The description of the function parameters and result is specified using JSDoc. The *@customfunction* tag is required in JSDoc.
Parameters and results can be specified as the *number / string / boolean / any / number[][] / string[][] / boolean[][] / any[][]* types.
Parameters can be required or optional. A user can also set a default value.

## Syntax

```javascript
expression.AddCustomFunctionLibrary(sName, Func);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The library name. |
| Func | Required | function |  | The custom functions library code. |

## Returns

This method doesn't return any data.

## Example

This example calculates custom function result.

```javascript editor-xlsx playground
// How to add custom function library.

// How to use custom function.

// How to add cell values using custom function library.

Api.AddCustomFunctionLibrary("LibraryName", function(){
	/**
	 * Function that returns the argument
	 * @customfunction
	 * @param {number} first First argument.
	 * @param {number} second Second argument.
	 * @returns {number} The sum of the numbers.
	 */
	Api.AddCustomFunction(function ADD(first, second) {
		return first + second;
	});
});

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('=ADD(1,2)');
```
