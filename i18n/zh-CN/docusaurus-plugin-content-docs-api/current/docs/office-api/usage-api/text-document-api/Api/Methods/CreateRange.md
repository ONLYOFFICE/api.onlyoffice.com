# CreateRange

创建元素范围。
如果不指定起始和结束位置，将从整个元素获取范围。

## 语法

```javascript
expression.CreateRange(element, start, end);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| element | 必需 |  |  | 将从中获取范围的元素。 |
| start | 必需 |  |  | 范围起始位置。 |
| end | 必需 |  |  | 范围结束位置。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

此示例创建一个范围并将前 10 个字符设置为粗体。

```javascript editor-docx
// Creates the ApiRange object from the ApiParagraph class and sets the range to bold.

// How to create a range from the paragraph and set a bold property to it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
Api.CreateRange(paragraph, 0, 11).SetBold(true);
```
