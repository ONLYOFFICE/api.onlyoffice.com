# RemoveCustomFunction

删除自定义函数。

## 语法

```javascript
expression.RemoveCustomFunction(sName);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | 自定义函数的名称。 |

## 返回值

boolean

## 示例

取消注册自定义公式，使其在电子表格中不再可用。

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
