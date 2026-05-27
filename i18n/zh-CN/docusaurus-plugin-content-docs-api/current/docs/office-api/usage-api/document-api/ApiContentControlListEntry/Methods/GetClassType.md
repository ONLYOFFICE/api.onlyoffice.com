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

读取文档中下拉列表条目的类类型。

```javascript editor-docx
// How do I find out the class type of a content control list entry in a document?

// Confirm the object kind of an individual list option by checking its type identifier in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let listItem = contentControlList.GetItem(0);
let paragraph = Api.CreateParagraph();
let classType = listItem.GetClassType();
paragraph.AddText("Class type of the content control list entry:" + classType);
doc.AddElement(0, paragraph);
```
