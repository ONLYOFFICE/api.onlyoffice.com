# MoveCursorToPos

将光标移动到当前范围内的指定位置。

## 语法

```javascript
expression.MoveCursorToPos(pos);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pos | 可选 | number | 0 | 所需的光标位置。 |

## 返回值

boolean

## 示例

将编辑器光标移动到文本范围内的特定位置。

```javascript editor-pptx
// Useful for placing the cursor precisely before further editing.

// Move the cursor to position 6 inside the shape text.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");
slide.AddObject(shape);

const range = shape.GetTextRange();
range.MoveCursorToPos(6);
```
