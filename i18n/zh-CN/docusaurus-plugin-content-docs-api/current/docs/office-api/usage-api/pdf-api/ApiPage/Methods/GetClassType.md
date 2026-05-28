# GetClassType

返回 ApiPage 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiPage](../ApiPage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"page"

## 示例

识别 PDF 中页面的对象类型。

```javascript editor-pdf
// How do I determine what kind of object this is in a PDF?

// Retrieve the classification name for this element in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
let textField = Api.CreateTextField([10, 10, 160, 32]);
page.AddObject(textField);
textField.SetValue(page.GetClassType());
```
