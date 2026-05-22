# SelectListItem

设置组合框列表或下拉列表的选中项。

## 语法

```javascript
expression.SelectListItem(name);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 要在列表中选中的项目名称。 |

## 返回值

boolean

## 示例

在文档中的组合框内容控件中选择活动列表项。

```javascript editor-docx
// How do I set the selected value of a combo box or dropdown control in a document?

// Pick a specific entry by value to pre-fill a combo box for the user in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddComboBoxContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.AddListItem('one', '1');
contentControl.AddListItem('two', '2');
contentControl.SelectListItem('2');
```
