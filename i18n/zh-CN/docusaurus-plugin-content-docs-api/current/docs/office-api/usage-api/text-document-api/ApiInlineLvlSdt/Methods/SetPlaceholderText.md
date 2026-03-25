# SetPlaceholderText

设置当前内联内容控件的占位符文本。
*无法设置为复选框或单选按钮*

## 语法

```javascript
expression.SetPlaceholderText(sText);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | 必需 | string |  | 将设置到当前内联内容控件的文本。 |

## 返回值

boolean

## 示例

此示例设置内联内容控件的占位符文本。

```javascript editor-docx
// How to set placeholder text for the inline content control.

// Display the placeholder set for inline text element.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
paragraph.AddInlineLvlSdt(inlineLvlSdt);
inlineLvlSdt.SetPlaceholderText("Custom placeholder");

```
