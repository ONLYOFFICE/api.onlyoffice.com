# SetSpacing

设置以二十分之一磅为单位测量的文本间距。

## 语法

```javascript
expression.SetSpacing(spacing);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| spacing | 必需 | [twips](../../Enumeration/twips.md) \| null |  | 文本间距值，以二十分之一磅（1/1440 英寸）为单位。传递 *null* 可移除文本间距。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

在 PDF 页面的形状中更改范围的字符间距。

```javascript editor-pdf
// The spacing is measured in twentieths of a point.

// Spread the letters of the first word apart.

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

range.GetRange(0, 5).SetSpacing(150);
```
