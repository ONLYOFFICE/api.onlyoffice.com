# SetShd

指定应用于当前文本运行内容的底纹。

## 语法

```javascript
expression.SetShd(type, color);
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [ShdType](../../Enumeration/ShdType.md) |  | 应用于当前文本运行内容的底纹类型。 |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 用于填充底纹的颜色或图案。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例指定应用于当前文本运行内容的底纹。

```javascript editor-docx
// How to set a shading for a text.

// Create a text run object, specify its shading options.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetShd('clear', Api.HexColor('#ff6f3d'));
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the shading set to orange.");

```
