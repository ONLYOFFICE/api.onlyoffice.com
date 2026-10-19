# SetShd

指定应用于当前文本块内容的底纹。

## 语法

```javascript
expression.SetShd(shd);
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shd | 必需 | [ApiShd](../../ApiShd/ApiShd.md) |  | 使用 Api.CreateShd 方法创建的底纹。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在文档中为文本背后应用底纹颜色。

```javascript editor-docx
// How do I fill the background of a word or phrase with a color in a document?

// Highlight content by coloring the area directly behind the characters in a document.

let doc = Api.GetDocument();
let textPr = doc.GetDefaultTextPr();
textPr.SetShd(Api.CreateShd('clear', Api.HexColor('#ff6f3d')));
let paragraph = doc.GetElement(0);
paragraph.AddText("A sample text with the shading set to orange.");
```
