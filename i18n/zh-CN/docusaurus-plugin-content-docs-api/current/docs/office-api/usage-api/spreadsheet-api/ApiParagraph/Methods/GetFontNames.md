# GetFontNames

返回当前段落中所有元素的所有字体名称。

## 语法

```javascript
expression.GetFontNames();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string[]

## 示例

此示例展示如何获取形状内段落中使用的所有字体名称。

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(140, 120, 160));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(20),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('Sample text.');
paragraph.SetFontFamily('Consolas');

const fontNames = paragraph.GetFontNames();
worksheet.GetRange('A1').SetValue('Fonts used: ' + fontNames.join(', '));

```
