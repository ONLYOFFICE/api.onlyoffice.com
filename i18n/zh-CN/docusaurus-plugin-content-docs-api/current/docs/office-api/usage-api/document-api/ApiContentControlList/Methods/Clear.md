# Clear

清除组合框/下拉列表内容控件的值列表。

## 语法

```javascript
expression.Clear();
```

`expression` - 表示 [ApiContentControlList](../ApiContentControlList.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从文档中的组合框下拉列表移除所有条目。

```javascript editor-docx
// How do I clear every option from a dropdown list content control in a document?

// Reset a combo box to an empty state by wiping its list of selectable values in a document.

let doc = Api.GetDocument();
let cc = Api.CreateComboBoxContentControl([{display: "Mercury", value: "planet1"}, {display: "Venus", value: "planet2"}, {display: "Earth", value: "planet3"}, {display: "Mars", value: "planet4"}], 2);
let paragraph = doc.GetElement(0);
paragraph.Push(cc);
let contentControlList = cc.GetDropdownList();
contentControlList.Clear();
```
