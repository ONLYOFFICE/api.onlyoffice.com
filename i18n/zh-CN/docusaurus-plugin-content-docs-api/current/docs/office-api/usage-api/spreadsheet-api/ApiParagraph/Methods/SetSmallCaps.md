# SetSmallCaps

指定此段落中的所有小写字母仅格式化显示为比指定字体大小
小两磅的大写字母。

## 语法

```javascript
expression.SetSmallCaps(isSmallCaps);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isSmallCaps | 必需 | boolean |  | 指定当前段落的内容是否显示为小两磅的大写字母。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

此示例展示如何为形状内段落中的所有文本设置小型大写字母格式。

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
const fill = Api.CreateSolidFill(Api.RGB(110, 120, 160));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(30),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This text is displayed in small caps.');
paragraph.SetSmallCaps(true);

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This text has normal capitalization.');
content.Push(paragraph2);

```
