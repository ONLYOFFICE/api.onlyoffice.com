# SEARCH

返回从左到右读取时首次找到特定字符或文本字符串的字符位置（不区分大小写）。

## 语法

```javascript
expression.SEARCH(arg1, arg2, arg3);
```

`expression` - 表示 [ApiWorksheetFunction](../ApiWorksheetFunction.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 要查找的文本。可以使用 ? 和 * 通配符。使用 ~? 和 ~* 查找 ? 和 * 字符。 |
| arg2 | 必需 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | 要在其中搜索指定文本的文本。 |
| arg3 | 可选 | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | 搜索文本中从左边开始计数的开始搜索的字符编号。如果省略，则使用 1。 |

## 返回值

number

## 示例

此示例演示如何返回从左到右读取时首次找到特定字符或文本字符串的字符位置（不区分大小写）。

```javascript editor-xlsx
// How to get number of characters counting from first occurance of search text.

// Use a function to count characters starting from the index at which the search text appears.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SEARCH("line", "Online Office"));
```
