# ClearCustomFunctions

清除所有自定义函数。

## 语法

```javascript
expression.ClearCustomFunctions();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

一次性删除电子表格中所有已注册的自定义函数。

```javascript editor-xlsx
// How do I unregister every custom function that was added in a spreadsheet?

// Clean up previously defined calculation functions to reset the formula environment in a spreadsheet.

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
