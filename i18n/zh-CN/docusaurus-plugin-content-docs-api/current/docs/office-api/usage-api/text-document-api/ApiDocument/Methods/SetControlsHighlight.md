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
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 未提供描述。 |

## 返回值

boolean

## 示例

此示例为文档中的内容控件设置高亮显示。

```javascript editor-docx
// How to highlight thw controls with rose color.

// Add elements to the document and color their background.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
doc.SetControlsHighlight(Api.HexColor('#FF6F3D'));

```
