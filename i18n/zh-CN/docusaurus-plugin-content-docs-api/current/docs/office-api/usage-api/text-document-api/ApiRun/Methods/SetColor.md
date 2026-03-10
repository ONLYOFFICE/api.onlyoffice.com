# SetColor

设置当前文本运行的文本颜色。

## 语法

```javascript
expression.SetColor(color);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 未提供描述。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

This example sets the text color for the current text run.

```javascript editor-docx
// How to change text color.

// Create a new text run and change its font color.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const firstRun = Api.CreateRun();
firstRun.AddText('This is a text run with the font color set to orange.');
firstRun.SetColor(Api.HexColor('#FF6F3D'));
paragraph.AddElement(firstRun);

const secondRun = Api.CreateRun();
secondRun.AddText('The text uses a bluish color created with HexColor method.');
const hexColor = Api.HexColor('#219ebc');
secondRun.SetColor(hexColor);
paragraph.AddElement(secondRun);

```
