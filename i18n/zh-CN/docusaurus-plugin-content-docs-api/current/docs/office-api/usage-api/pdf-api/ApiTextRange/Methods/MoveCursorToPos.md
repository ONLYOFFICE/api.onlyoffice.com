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

在 PDF 页面的形状中将光标移动到范围所包含的文本内。

```javascript editor-pdf
// Places the cursor precisely before further editing.

// Move the cursor between the two words.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Hello World");

const range = shape.GetTextRange();

range.MoveCursorToPos(6);
```
