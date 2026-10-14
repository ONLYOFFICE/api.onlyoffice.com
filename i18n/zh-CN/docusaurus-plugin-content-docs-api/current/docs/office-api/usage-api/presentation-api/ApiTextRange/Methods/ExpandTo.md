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

将两个重叠或相邻的文本范围扩展为单个合并范围。

```javascript editor-pptx
// Useful for merging adjacent or overlapping selections into one range.

// Create two sub-ranges and expand them into one union range.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("Hello World");
slide.AddObject(shape);

const range = shape.GetTextRange();
const range1 = range.GetRange(0, 5);
const range2 = range.GetRange(6, 11);

const union = range1.ExpandTo(range2);
union.Select()
```
