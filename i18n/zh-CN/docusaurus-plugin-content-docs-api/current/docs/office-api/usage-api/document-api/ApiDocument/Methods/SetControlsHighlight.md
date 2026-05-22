# SetControlsHighlight

为当前文档中的内容控件设置突出显示。

## 语法

```javascript
expression.SetControlsHighlight(color);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 内容控件的高亮颜色。 |

## 返回值

boolean

## 示例

为文档中的所有内容控件应用背景高亮颜色。

```javascript editor-docx
// How do I change the highlight color of content controls in a document?

// Make form controls stand out visually by setting a custom fill color across the whole document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
doc.SetControlsHighlight(Api.HexColor('#FFEFBF'));
```
