# IntersectWith

返回此范围与给定范围交集的新范围。当前范围不会更改。

## 语法

```javascript
expression.IntersectWith(range);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| range | 必需 | [ApiTextRange](../../ApiTextRange/ApiTextRange.md) |  | 未提供描述。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

在工作表的形状中获取两个文本范围的公共部分。

```javascript editor-xlsx
// The result is null when the two ranges do not overlap.

// Underline the fragment that belongs to both ranges.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("rect", 200 * 36000, 80 * 36000, fill, stroke, 3, 0, 1, 0);

let docContent = shape.GetContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

let range = shape.GetTextRange();

let first = range.GetRange(0, 8);
let second = range.GetRange(4, 11);
let common = first.IntersectWith(second);
common.SetUnderline(true);

worksheet.GetRange("A1").SetValue("IntersectWith: " + common.GetText());
```
