# RemoveListItem

从组合框列表或下拉列表中删除项目。

## 语法

```javascript
expression.RemoveListItem(value);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| value | 必需 | string |  | 要从列表中删除的项目值。 |

## 返回值

boolean

## 示例

从文档中的组合框内容控件删除列表项。

```javascript editor-docx
// How do I remove an entry from a dropdown or combo box control in a document?

// Trim the available choices in a combo box by removing an item that is no longer needed in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddComboBoxContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.AddListItem('one', '1');
contentControl.AddListItem('two', '2');
contentControl.SelectListItem('2');
contentControl.RemoveListItem('1');
```
