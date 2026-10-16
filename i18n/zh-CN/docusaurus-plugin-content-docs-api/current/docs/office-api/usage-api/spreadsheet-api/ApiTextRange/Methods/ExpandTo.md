# ExpandTo

返回一个同时涵盖此范围和给定范围的新范围。当前范围不会更改。

## 语法

```javascript
expression.ExpandTo(range);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| range | 必需 | [ApiTextRange](../../ApiTextRange/ApiTextRange.md) |  | 未提供描述。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

在工作表的形状中将两个文本范围合并为一个。

```javascript editor-xlsx
// The union covers everything from the first start to the last end, including the text between them.

// Join the first and the last word and make the whole fragment italic.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello brave World");

let range = shape.GetTextRange();

let first = range.GetRange(0, 5);
let second = range.GetRange(12, 17);
let united = first.ExpandTo(second);
united.SetItalic(true);

worksheet.GetRange("A1").SetValue("ExpandTo: " + united.GetText());
```
