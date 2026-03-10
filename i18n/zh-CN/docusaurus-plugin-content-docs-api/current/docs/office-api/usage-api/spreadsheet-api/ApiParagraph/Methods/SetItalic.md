# SetItalic

为文本字符设置斜体属性。

## 语法

```javascript
expression.SetItalic(isItalic);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isItalic | 必需 | boolean |  | 指定当前段落的内容显示为斜体。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

This example shows how to set italic formatting for all text in a paragraph inside a shape.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(170, 110, 130));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text is italic.');
paragraph.SetItalic(true);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text is not italic.');
content.Push(paragraph2);

```
