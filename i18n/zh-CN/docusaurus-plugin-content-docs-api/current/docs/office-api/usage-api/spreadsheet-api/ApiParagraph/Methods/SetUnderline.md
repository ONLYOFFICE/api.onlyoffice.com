# SetUnderline

指定此段落的内容显示时在字符正下方有一条线
（小于行中字符上下的所有间距）。

## 语法

```javascript
expression.SetUnderline(isUnderline);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isUnderline | 必需 | boolean |  | 指定当前段落的内容显示为带下划线。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

This example shows how to apply underline formatting to all text in a paragraph inside a shape.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(100, 140, 140));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text is underlined.');
paragraph.SetUnderline(true);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text is not underlined.');
content.Push(paragraph2);

```
