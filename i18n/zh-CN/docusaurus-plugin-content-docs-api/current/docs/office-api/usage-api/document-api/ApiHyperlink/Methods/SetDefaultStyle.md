# SetDefaultStyle

设置默认超链接样式。

## 语法

```javascript
expression.SetDefaultStyle();
```

`expression` - 表示 [ApiHyperlink](../ApiHyperlink.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在文档中为超链接应用默认内置样式。

```javascript editor-docx
// How do I reset a hyperlink to its default style in a document?

// Compare a styled hyperlink against one reset to the default appearance in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Api Document Builder");
paragraph.SetColor(Api.HexColor('#FF6F3D'));
let copyParagraph = paragraph.Copy();
doc.Push(copyParagraph);
let hyperlink = paragraph.AddHyperlink("http://api.teamlab.info/docbuilder/basic");
let copyHyperlink = copyParagraph.AddHyperlink("http://api.teamlab.info/docbuilder/basic");
copyHyperlink.SetDefaultStyle();
```
