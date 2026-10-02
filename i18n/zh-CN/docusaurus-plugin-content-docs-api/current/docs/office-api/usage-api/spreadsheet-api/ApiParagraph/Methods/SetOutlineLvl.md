# SetOutlineLvl

设置指定属性的大纲级别。

继承自 [ApiParaPr.SetOutlineLvl](../../ApiParaPr/Methods/SetOutlineLvl.md)。

## 语法

```javascript
expression.SetOutlineLvl(lvl);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| lvl | 可选 | Number \| null \| undefined |  | 大纲级别。可能的值：1-9。要取消大纲级别，请不带参数使用此方法。 |

## 返回值

boolean

## 示例

在电子表格中为形状内的每个段落分配大纲级别。

```javascript editor-xlsx
// How do I mark paragraphs at different heading depths in a spreadsheet?

// Structure text by giving each paragraph a numbered depth in the outline hierarchy in a spreadsheet.

const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);

const content = shape.GetContent();
const firstParagraph = content.GetElement(0);
firstParagraph.AddText('Outline level of this paragraph is ' + firstParagraph.GetOutlineLvl() + '.');

for (let levelIndex = 0; levelIndex < 9; levelIndex++) {
	const paragraph = Api.CreateParagraph();
	paragraph.SetOutlineLvl(levelIndex);
	const level = paragraph.GetOutlineLvl() + 1;
	paragraph.AddText('This is a paragraph with outline level ' + level + '.');
	content.Push(paragraph);
}
```
