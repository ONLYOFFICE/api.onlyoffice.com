# SetColor

设置当前段落的文本颜色。

## 语法

```javascript
expression.SetColor(color);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 未提供描述。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

This example sets the text color to the current paragraph.

```javascript editor-docx
// Color the paragraph text with orange.

// Get the first paragraph and make its font color orange.

const doc = Api.GetDocument();
const firstParagraph = doc.GetElement(0);
firstParagraph.AddText('This is a paragraph with the font color set to orange.');
firstParagraph.SetColor(Api.HexColor('#FF6F3D'));

const color = Api.HexColor('ff6f3d');
const secondParagraph = Api.CreateParagraph();
secondParagraph.AddText('This text is in same orange color, but created using HexColor method.');
secondParagraph.SetColor(color);
doc.Push(secondParagraph);

```
