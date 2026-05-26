# SetUnderline

指定当前范围的内容显示时，字符正下方会出现一条线
（小于行上字符上下方的所有间距）。

## 语法

```javascript
expression.SetUnderline(isUnderline);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isUnderline | 必需 | boolean |  | 指定当前范围的内容是否显示下划线。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

在文档中为选定的文本部分添加下划线。

```javascript editor-docx
// How do I draw a line under specific words to emphasize them in a document?

// Highlight key phrases by placing a continuous underline below the chosen text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetUnderline(true);
```
