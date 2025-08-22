# AddCustomFunction

Creates a new custom function.\
The description of the function parameters and result is specified using JSDoc. The *@customfunction* tag is required in JSDoc.\
Parameters and results can be specified as the *number / string / boolean / any / number[][] / string[][] / boolean[][] / any[][]* types.\
Parameters can be required or optional. A user can also set a default value.\
The passed function can be asynchronous (async function or function returning a Promise).\
Inside the passed function, you can access the current cell address where the calculation is performed using *this.address*.\
You can also access the addresses of function arguments using *this.args[0].address*, *this.args[1].address*, etc.

## Syntax

```javascript
expression.AddCustomFunction(fCustom);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fCustom | Required | function |  | A new function for calculating. Can be synchronous or asynchronous. |

## Returns

This method doesn't return any data.

## Example

This example calculates custom function result.

```javascript editor-xlsx
// How to add custom function.

// How to use custom function.

// How to add cell values using custom function.

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

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('A1').SetValue('=ADD(1,2)');
```
