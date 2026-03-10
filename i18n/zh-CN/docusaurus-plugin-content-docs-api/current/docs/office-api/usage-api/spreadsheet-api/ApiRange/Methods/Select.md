# Select

选择当前范围。

## 语法

```javascript
expression.Select();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

此示例选择当前范围。

```javascript editor-xlsx
// How to select a range.

// Select a range and get a selection from the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C1");
range.SetValue("1");
range.Select();
Api.GetSelection().SetValue("selected");
```
