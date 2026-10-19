# AddText

在指定位置添加文本。当前范围会扩展以包含添加的文本。

## 语法

```javascript
expression.AddText(text, position);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | 必需 | String |  | 将要添加的文本。 |
| position | 可选 | "after" \| "before" | "after" | 将添加文本的位置（在指定范围“之前”或“之后”）。 |

## 返回值

boolean

## 示例

在演示文稿形状中的文本范围末尾插入文本。

```javascript editor-pptx
// Useful for appending text to a shape without replacing the existing content.

// Append " World" after the existing text in the shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.GetElement(0).AddText("Hello");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.AddText(" World");
```
