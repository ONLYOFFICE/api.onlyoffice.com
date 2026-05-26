# GetClassType

返回 ApiSection 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"section"

## 示例

读取文档中分配给节的类型标签。

```javascript editor-docx
// How do I find out what kind of object a section is in a document?

// Confirm the category of a section by checking its type identifier in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
section.SetPageMargins(720, 720, 720, 720);
section.SetPageSize(7200, 4320);
let classType = section.GetClassType();
paragraph.AddText("Class Type = " + classType);
```
