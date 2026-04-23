# GetRange

返回表示指定内容控件中包含的文档部分的 Range 对象。

## 语法

```javascript
expression.GetRange(Start, End);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Start | 必需 | Number |  | 当前元素中的起始位置索引。 |
| End | 必需 | Number |  | 当前元素中的结束位置索引。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

此示例展示如何获取表示指定内容控件中包含的文档部分的 Range 对象。

```javascript editor-docx
// How to get range of the inline text control.

// Get the range where the inline content control is located.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let range = inlineLvlSdt.GetRange(11, 16);
range.SetBold(true);
```
