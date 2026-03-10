# ClearHyperlinks

清除当前范围中的所有超链接。

## 语法

```javascript
expression.ClearHyperlinks();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

此示例清除范围中的所有超链接。

```javascript editor-xlsx
// How to clear hyperlinks for a range.

// Get a range, clear hyperlinks and show the result.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:B1").SetValue("http://example.com");
let range = worksheet.GetRange("A1");
range.ClearHyperlinks();
worksheet.GetRange("A2").SetValue("Result is hyperlinks cleared for A1 cell.");

```
