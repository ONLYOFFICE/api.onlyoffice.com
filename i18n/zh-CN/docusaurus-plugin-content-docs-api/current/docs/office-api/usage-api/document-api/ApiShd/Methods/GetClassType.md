# GetClassType

返回 ApiShd 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiShd](../ApiShd.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"shd"

## 示例

检索文档中段落底纹的类类型。

```javascript editor-docx
// Confirm that the object returned by GetShd is an ApiShd object in a document.

// Shade a paragraph and write the class type of its shading into the paragraph.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.SetShd(Api.CreateShd('clear', Api.Color('#DDEBF7')));
paragraph.AddText('Class type of the paragraph shading: ' + paragraph.GetShd().GetClassType());
```
