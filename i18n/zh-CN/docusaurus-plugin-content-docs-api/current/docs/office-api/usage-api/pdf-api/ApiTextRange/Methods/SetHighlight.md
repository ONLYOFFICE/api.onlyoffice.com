# SetHighlight

指定作为背景应用于当前范围内容的突出显示颜色。

## 语法

```javascript
expression.SetHighlight(colorName);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| colorName | 必需 | [highlightColor](../../Enumeration/highlightColor.md) |  | 未提供描述。 |

## 返回值

[ApiTextRange](../../ApiTextRange/ApiTextRange.md) \| null

## 示例

在 PDF 页面的形状中使用命名颜色高亮范围内的文本。

```javascript editor-pdf
// The highlight applies to the covered fragment only.

// Highlight the first word in yellow.

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

range.GetRange(0, 5).SetHighlight("yellow");
```
