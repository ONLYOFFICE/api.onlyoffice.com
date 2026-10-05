# GetShd

返回应用于段落内容的底纹。

继承自 [ApiParaPr.GetShd](../../ApiParaPr/Methods/GetShd.md)。

## 语法

```javascript
expression.GetShd();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Shd](../../Enumeration/Shd.md) \| undefined

## 示例

读取文档中段落所应用的背景底纹。

```javascript editor-docx
// How do I get the shading color and type from a paragraph in a document?

// Copy the shading from one paragraph and apply the same background to another paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('This is the first paragraph with a custom shading applied.');
paragraph.SetShd('clear', Api.HexColor('#FF6F3D'));

let shd = paragraph.GetShd();

let paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This is the second paragraph. The shading from the first paragraph is applied here.');
paragraph2.SetShd(shd.Type, shd.Color);
doc.Push(paragraph2);
```
