# GetRange

返回表示当前范围子范围的新 ApiTextRange。

## 语法

```javascript
expression.GetRange(start, rangeEnd);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| start | 可选 | number | 0 | 相对于此范围开头的起始偏移量（从 0 开始）。 |
| rangeEnd | 可选 | number | -1 | 相对于此范围开头的结束偏移量。-1 表示此范围的末尾。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

使用相对偏移量从现有文本范围创建子范围。

```javascript editor-pptx
// Useful for narrowing a range down to a smaller portion of text.

// Get the sub-range "World" from "Hello World" and select it.

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
const sub = range.GetRange(6, 11);
sub.SetBold(true);
```
