# GetRange

返回表示指定范围中包含的文档部分的 Range 对象。

## 语法

```javascript
expression.GetRange(Start, End);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Start | 可选 | Number | 0 | 当前范围中的起始位置索引。 |
| End | 可选 | Number | -1 | 当前范围中的结束位置索引（如果 &lt;= 0，则范围取到末尾）。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

此示例展示如何获取表示指定范围中包含的文档部分的 Range 对象。

```javascript editor-docx
// Get the range from the range indicating its start and end positions.

// Retrieve a range and make them italic.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range1 = doc.GetRange(0, 24);
range1.SetBold(true);
let range2 = range1.GetRange(0, 9);
range2.SetItalic(true);
```
