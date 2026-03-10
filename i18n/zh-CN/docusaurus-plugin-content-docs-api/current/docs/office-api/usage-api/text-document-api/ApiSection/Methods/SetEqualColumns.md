# SetEqualColumns

指定当前节中的所有文本列宽度相等。

## 语法

```javascript
expression.SetEqualColumns(nCount, nSpace);
```

`expression` - 表示 [ApiSection](../ApiSection.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | 必需 | number |  | 列数。 |
| nSpace | 必需 | [twips](../../Enumeration/twips.md) |  | 列之间的距离，以点的二十分之一为单位（1/1440 英寸）。 |

## 返回值

boolean

## 示例

此示例指定当前节中的所有文本列宽度相等。

```javascript editor-docx
// How to split the text into 3 equal columns.

// Get the final section and set its columns.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
section.SetEqualColumns(3, 720);
paragraph.AddText("This is a text split into 3 equal columns. ");
paragraph.AddText("The columns are separated by the distance of half an inch.");
paragraph.AddColumnBreak();
paragraph.AddText("This text starts from column #2. ");
paragraph.AddText("This sentence is used to add lines for demonstrative purposes.");
paragraph.AddColumnBreak();
paragraph.AddText("This text starts from column #3. ");
paragraph.AddText("This sentence is used to add lines for demonstrative purposes.");
```
