# AddListItem

向组合框列表或下拉列表添加项目。

## 语法

```javascript
expression.AddListItem(name, value, pos);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 要添加到列表的项目名称。 |
| value | 必需 | string |  | 要添加到列表的项目值。 |
| pos | 可选 | number |  | 在列表中插入新项目的可选位置。 |

## 返回值

boolean

## 示例

此示例展示如何向组合框添加列表项。

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let contentControl = doc.AddComboBoxContentControl();
let paragraph1 = Api.CreateParagraph();
contentControl.AddListItem('one', '1');
contentControl.AddListItem('two', '2');
contentControl.SelectListItem('2');
```
