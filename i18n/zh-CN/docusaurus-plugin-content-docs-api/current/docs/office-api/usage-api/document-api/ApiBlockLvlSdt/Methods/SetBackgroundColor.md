# SetBackgroundColor

设置当前内容控件的背景颜色。

## 语法

```javascript
expression.SetBackgroundColor(color);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 可选 | [ApiColor](../../ApiColor/ApiColor.md) |  | 背景颜色。 |

## 返回值

boolean

## 示例

在文档中为内容控件设置背景颜色。

```javascript editor-docx
// How do I change the background color of a content control in a document?

// Highlight a content control with a colored background to make it stand out in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetBackgroundColor(Api.RGBA(0, 0, 255, 40));
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with a blue transparent background.");
doc.AddElement(0, blockLvlSdt);
```
