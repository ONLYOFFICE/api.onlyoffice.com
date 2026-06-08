# GetClassType

返回 ApiCaretAnnotation 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiCaretAnnotation](../ApiCaretAnnotation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"caretAnnot"

## 示例

获取 PDF 文档中插入符号注释的类类型。

```javascript editor-pdf
// Retrieve the class type from an annotation object.

// Display the annotation class type in the console.

let doc = Api.GetDocument();
let caretAnnot = Api.CreateCaretAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(caretAnnot);
console.log(`Annot class type is: ${caretAnnot.GetClassType()}`);
```
