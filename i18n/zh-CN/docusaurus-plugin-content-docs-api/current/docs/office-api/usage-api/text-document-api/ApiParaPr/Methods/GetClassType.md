# GetClassType

返回 ApiParaPr 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"paraPr"

## 示例

检查文档中段落属性返回的类类型。

```javascript editor-docx
// How do I check what type a paragraph properties object is in a document?

// Retrieve and output the class type string for a paragraph properties in a document.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetLeftBorder("single", 24, 0, 255, 111, 61);
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is the first paragraph. ");
paragraph.AddText("The paragraph properties styled above set a border at its left side.");
let classType = paraPr.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
