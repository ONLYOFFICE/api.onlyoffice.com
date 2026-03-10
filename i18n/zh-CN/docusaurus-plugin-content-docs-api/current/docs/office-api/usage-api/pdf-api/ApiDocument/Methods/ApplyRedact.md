# ApplyRedact

应用已添加的涂黑。

## 语法

```javascript
expression.ApplyRedact();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

This example adds a redact annot to first page and applies redact.

```javascript editor-pdf
let doc = Api.GetDocument();
let redactAnnot = Api.CreateRedactAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(redactAnnot);
doc.ApplyRedact();
console.log('We added a redact annot to first page and applied it');
```
