# SetPaddings

设置当前形状的文本内边距。

## 语法

```javascript
expression.SetPaddings(nLeft, nTop, nRight, nBottom);
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nLeft | 必需 | [EMU](../../Enumeration/EMU.md) \| null \| undefined |  | 左内边距。 |
| nTop | 必需 | [EMU](../../Enumeration/EMU.md) \| null \| undefined |  | 上内边距。 |
| nRight | 必需 | [EMU](../../Enumeration/EMU.md) \| null \| undefined |  | 右内边距。 |
| nBottom | 必需 | [EMU](../../Enumeration/EMU.md) \| null \| undefined |  | 下内边距。 |

## 返回值

boolean

## 示例

在 PDF 表单的页面上设置形状内文本内容的内部间距。

```javascript editor-pdf
// Add text to a shape, then apply asymmetric left, top, right, and bottom paddings.

// Control where the text sits inside the shape by setting each inset in English measure units.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Text with paddings: Left 2cm, Top 0.5cm, Right 0.5cm, Bottom 0.3cm");
shape.SetPaddings(20 * 36000, 5 * 36000, 5 * 36000, 3 * 36000);
```
