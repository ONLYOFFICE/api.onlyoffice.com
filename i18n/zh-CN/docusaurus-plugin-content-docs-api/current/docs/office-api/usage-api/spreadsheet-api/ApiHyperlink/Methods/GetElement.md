# GetElement

使用指定的位置返回超链接元素。

## 语法

```javascript
expression.GetElement(nPos);
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 要获取其内容的元素必须位于的位置。 |

## 返回值

[ParagraphContent](../../Enumeration/ParagraphContent.md)

## 示例

This example shows how to get an element from a hyperlink inside a shape.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.RGB(160, 100, 130));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(20),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const run = Api.CreateRun();
run.AddText('Visit ONLYOFFICE for developers');
paragraph.AddElement(run, 0);

const hyperlink = run.AddHyperlink('https://api.onlyoffice.com', 'ONLYOFFICE for developers');
const element = hyperlink.GetElement(0);
const classType = element ? element.GetClassType() : 'null';
worksheet.GetRange('A1').SetValue('Element class type: ' + classType);

```
