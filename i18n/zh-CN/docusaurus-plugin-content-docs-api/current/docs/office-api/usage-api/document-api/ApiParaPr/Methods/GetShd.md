# GetShd

返回应用于段落内容的底纹。

## 语法

```javascript
expression.GetShd();
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Shd](../../Enumeration/Shd.md) \| undefined

## 示例

读取段落的底纹设置并将其复制到文档中的另一个段落。

```javascript editor-docx
// How do I get the shading type and color of a paragraph in a document?

// Reuse a paragraph's background shading by applying the retrieved values to a second paragraph in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText('This is the first paragraph with a custom shading applied.');

let paraPr = paragraph.GetParaPr();
paraPr.SetShd('clear', Api.HexColor('#ff6f3d'));

let shd = paraPr.GetShd();

let paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This is the second paragraph. The shading from the first paragraph is applied here.');
let paraPr2 = paragraph2.GetParaPr();
paraPr2.SetShd(shd.Type, shd.Color);
doc.Push(paragraph2);
```
