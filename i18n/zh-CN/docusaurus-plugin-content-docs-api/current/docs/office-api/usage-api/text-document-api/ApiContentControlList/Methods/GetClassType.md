# GetClassType

返回 ApiContentControlList 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiContentControlList](../ApiContentControlList.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"contentControlList"

## 示例

检查文档中内容控件列表返回的类类型。

```javascript editor-docx
// How do I check what type a content control list object is in a document?

// Retrieve and output the class type string for a content control list in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let dropDownList = cc.GetDropdownList();
let classType = dropDownList.GetClassType();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Class type of the content control list: " + classType);
doc.Push(paragraph);
```
