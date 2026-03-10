# SetStyle

为当前范围设置样式。

## 语法

```javascript
expression.SetStyle(oStyle);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStyle | 必需 | [ApiStyle](../../ApiStyle/ApiStyle.md) |  | 必须应用于文本字符的样式。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

此示例为当前范围设置样式。

```javascript editor-docx
// How to style a text of the range.

// Get a range, apply "Heading 2" style to it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 26);
let style = doc.GetStyle("Heading 2");
range.SetStyle(style);
```
