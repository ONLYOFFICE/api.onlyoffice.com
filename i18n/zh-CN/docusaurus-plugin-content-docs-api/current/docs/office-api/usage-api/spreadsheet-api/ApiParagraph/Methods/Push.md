# Push

向当前段落添加元素。

## 语法

```javascript
expression.Push(oElement);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oElement | 必需 | [ParagraphContent](../../Enumeration/ParagraphContent.md) |  | 将在当前位置添加的文档元素。如果段落不支持 oElement 类型，则返回 false。 |

## 返回值

boolean

## 示例

此示例展示如何向形状内的段落添加文本运行元素。

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(130, 100, 160));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(20),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
const firstRun = paragraph.GetElement(0);
firstRun.AddText('Existing text. ');

const run = Api.CreateRun();
run.AddText('Pushed text.');
paragraph.Push(run);

worksheet.GetRange('A1').SetValue('Elements in paragraph: ' + paragraph.GetElementsCount());

```
