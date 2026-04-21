# SetBorderColor

设置当前内容控件的边框颜色。

## 语法

```javascript
expression.SetBorderColor(color);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 可选 | [ApiColor](../../ApiColor/ApiColor.md) |  | 边框颜色。 |

## 返回值

boolean

## 示例

设置文档中块级容器的边框颜色。

```javascript editor-docx
// How can I set border color using a block-level content control in a document?

// Set border color for a block-level content control in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetBorderColor(Api.HexColor('#0000FF'));
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with blue border.");
doc.AddElement(0, blockLvlSdt);
```
