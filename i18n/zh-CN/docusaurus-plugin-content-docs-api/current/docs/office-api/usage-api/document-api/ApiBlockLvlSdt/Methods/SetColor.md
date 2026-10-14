# SetColor

设置内容控件的标签颜色。

## 语法

```javascript
expression.SetColor(color);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) \| null |  | 标签颜色。传递 *null* 可移除颜色。 |

## 返回值

boolean

## 示例

设置文档中内容控件的标签颜色。

```javascript editor-docx
// How do I change the tag color of a content control in a document?

// Color-code a content control tag to categorize or identify it visually in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetColor(Api.RGB(0, 0, 255));
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a blue tag color.");
doc.AddElement(0, blockLvlSdt);
```
