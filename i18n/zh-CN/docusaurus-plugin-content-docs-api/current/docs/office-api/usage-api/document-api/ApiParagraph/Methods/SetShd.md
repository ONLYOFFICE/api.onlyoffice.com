# SetShd

指定应用于段落内容的底纹。

继承自 [ApiParaPr.SetShd](../../ApiParaPr/Methods/SetShd.md)。

## 语法

```javascript
expression.SetShd(type, color);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [ShdType](../../Enumeration/ShdType.md) |  | 将应用于当前段落内容的底纹类型。 |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 用于填充底纹的颜色或图案。 |

## 返回值

boolean

## 示例

在文档中为段落应用背景底纹颜色。

```javascript editor-docx
// How do I fill the background of a paragraph with a specific color in a document?

// Highlight paragraph content by setting its background shade in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is an example of setting a shade to a paragraph. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.SetShd("clear", Api.HexColor('#FF6F3D'));
```
