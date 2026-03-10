# ToJSON

将 ApiParagraph 对象转换为 JSON 对象。

## 语法

```javascript
expression.ToJSON(bWriteNumberings, bWriteStyles);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bWriteNumberings | 必需 | boolean |  | 指定使用的编号是否将写入 JSON 对象。 |
| bWriteStyles | 必需 | boolean |  | 指定使用的样式是否将写入 JSON 对象。 |

## 返回值

JSON

## 示例

This example shows how to serialize a paragraph to JSON format.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();

const fill = Api.CreateSolidFill(Api.RGB(120, 110, 150));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = worksheet.AddShape(
	'roundRect',
	Api.MillimetersToEmus(70), Api.MillimetersToEmus(20),
	fill, stroke,
	0, 0, 2, 0
);

const content = shape.GetContent();
const paragraph = content.GetElement(0);
paragraph.AddText('This paragraph will be converted to JSON.');

const json = paragraph.ToJSON(true, true);
worksheet.GetRange('A1').SetValue('JSON length: ' + json.length);

```
