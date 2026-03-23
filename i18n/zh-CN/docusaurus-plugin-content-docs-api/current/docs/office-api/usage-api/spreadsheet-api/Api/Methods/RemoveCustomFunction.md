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

此示例清除当前自定义函数。

```javascript editor-xlsx
// How to delete custom created function from the library.

// Remove custom function library.

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
