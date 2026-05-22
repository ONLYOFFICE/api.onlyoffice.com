# CreateCheckBoxContentControl

创建复选框内容控件。

## 语法

```javascript
expression.CreateCheckBoxContentControl(checkBoxPr);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| checkBoxPr | 必需 | [ContentControlCheckBoxPr](../../Enumeration/ContentControlCheckBoxPr.md) |  | 包含复选框属性的配置对象。 |

## 返回值

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## 示例

在文档中插入已选中的复选框。

```javascript editor-docx
// How do I add a checkbox that is already checked to a document?

// Place a pre-checked checkbox control on a new line in a document.

let doc = Api.GetDocument();
let cc = Api.CreateCheckBoxContentControl({checked: true});
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);
```
