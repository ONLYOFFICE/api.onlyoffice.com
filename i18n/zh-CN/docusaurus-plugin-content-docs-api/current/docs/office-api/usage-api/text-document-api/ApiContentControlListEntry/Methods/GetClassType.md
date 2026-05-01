# GetClassType

返回 ApiContentControlListEntry 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiContentControlListEntry](../ApiContentControlListEntry.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"contentControlList"

## 示例

检查文档中内容控件列表条目返回的类类型。

```javascript editor-docx
// How do I check what type a content control list entry object is in a document?

// Retrieve and output the class type string for a content control list entry in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(0);
let paragraph = Api.CreateParagraph();
let classType = listItem.GetClassType();
paragraph.AddText("Class type of the content control list entry:" + classType);
doc.AddElement(0, paragraph);
```
