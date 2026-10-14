# SetSpacing

设置以二十分之一磅为单位测量的文本间距。

## 语法

```javascript
expression.SetSpacing(spacing);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| spacing | 必需 | [twips](../../Enumeration/twips.md) \| null |  | 文本间距值，以二十分之一磅（1/1440 英寸）为单位。传递 *null* 可移除文本间距。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

调整文档中选定文本范围内的字符间距。

```javascript editor-docx
// How do I spread out or tighten the letters within a highlighted portion of text in a document?

// Control the gap between individual characters to improve readability or achieve a design effect in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetSpacing(2);
```
