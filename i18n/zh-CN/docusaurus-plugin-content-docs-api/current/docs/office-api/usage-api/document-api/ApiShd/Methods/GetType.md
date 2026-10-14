# GetType

返回底纹类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiShd](../ApiShd.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ShdType](../../Enumeration/ShdType.md)

## 示例

检索文档中段落底纹的类型。

```javascript editor-docx
// Compare a shaded paragraph with a paragraph whose shading is removed in a document.

// Write the shading type of each paragraph into its text.

const doc = Api.GetDocument();
const shaded = doc.GetElement(0);
shaded.SetShd(Api.CreateShd('clear', Api.Color('#E2EFDA')));
shaded.AddText('Shading type of this paragraph: ' + shaded.GetShd().GetType());
const plain = Api.CreateParagraph();
plain.SetShd(Api.CreateShd('nil'));
plain.AddText('Shading type of this paragraph: ' + plain.GetShd().GetType());
doc.Push(plain);
```
