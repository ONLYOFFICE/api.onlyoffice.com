# GetRange

返回表示指定内容控件中包含的文档部分的 Range 对象。

## 语法

```javascript
expression.GetRange(start, end);
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| start | 必需 | Number |  | 当前元素中的起始位置索引。 |
| end | 必需 | Number |  | 当前元素中的结束位置索引。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

此示例展示如何获取表示指定内容控件中包含的文档部分的 Range 对象。

```javascript editor-docx
// Creates a block content control, adds a text to it, and returns a range between positions 10 and 16 of the element.

// How to get the ApiRange object from the ApiBlockLvlSdt object.

// Returns the range object from the container and sets a bold property to it.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control.");
doc.AddElement(0, blockLvlSdt);
let range = blockLvlSdt.GetRange(10, 16);
range.SetBold(true);
```
