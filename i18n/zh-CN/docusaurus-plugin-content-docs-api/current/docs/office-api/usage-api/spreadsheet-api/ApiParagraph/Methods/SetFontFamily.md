# SetFontFamily

使用指定的字体系列设置所有 4 个字体槽。

## 语法

```javascript
expression.SetFontFamily(sFontFamily);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFontFamily | 必需 | string |  | 用于当前段落的字体系列。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

更改电子表格中形状内段落所有文本的字体。

```javascript editor-xlsx
// How do I choose a specific font for an entire paragraph in a spreadsheet?

// Give a paragraph a consistent look by assigning it a named font family in a spreadsheet.

const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(100, 150, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text uses the Georgia font family.');
paragraph.SetFontFamily('Georgia');

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text uses the default font family.');
content.Push(paragraph2);
```
