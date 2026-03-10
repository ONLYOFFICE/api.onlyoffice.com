# SetUnderline

指定此段落的内容显示时在字符正下方有一条线
（小于行中字符上下的所有间距）。

## 语法

```javascript
expression.SetUnderline(isUnderline);
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isUnderline | 必需 | boolean |  | 指定当前段落的内容显示为带下划线。 |

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

此示例指定此段落的内容显示时在字符正下方有一条线。

```javascript editor-docx
// How to create a new text and underline it.

// Create a new text run and underline it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text underlined with a single line.");
paragraph.SetUnderline(true);
```
