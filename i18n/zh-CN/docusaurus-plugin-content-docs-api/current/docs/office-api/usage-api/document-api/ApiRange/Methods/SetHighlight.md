# SetHighlight

指定作为背景应用于当前范围内容的突出显示颜色。

## 语法

```javascript
expression.SetHighlight(sColor);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sColor | 必需 | [highlightColor](../../Enumeration/highlightColor.md) |  | 可用的突出显示颜色。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

此示例指定作为背景应用于范围内容的突出显示颜色。

```javascript editor-docx
// How to color a range background.

// Create a range and add color to its background.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 26);
range.SetHighlight("lightGray");
```
