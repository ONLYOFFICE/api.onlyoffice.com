# GetParent

返回组合框/下拉列表内容控件的父级。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiContentControlList](../ApiContentControlList.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md) \| [ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md)

## 示例

获取文档中的父内容控件。

```javascript editor-docx
// How can I get the parent using a content control list in a document?

// Get the parent for a content control list in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let contentControlList = cc.GetDropdownList();
let parentControl = contentControlList.GetParent();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Parent class type is: " + parentControl.GetClassType());
doc.AddElement(0, paragraph);
```
