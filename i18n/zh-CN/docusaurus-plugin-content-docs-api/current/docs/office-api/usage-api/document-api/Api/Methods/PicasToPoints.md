# PicasToPoints

将派卡转换为磅。

## 语法

```javascript
expression.PicasToPoints(pc);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pc | 必需 | number |  | 要转换为磅的派卡数。 |

## 返回值

number

## 示例

将派卡测量值转换为排版磅并在文档中显示结果。

```javascript editor-docx
// How do I find the point equivalent of a value given in picas in a document?

// Write out how many points correspond to a specific number of picas in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const picas = 100;
const points = Api.PicasToPoints(picas);
paragraph.AddText(picas + ' picas are equal to ' + points + ' points.');
doc.Push(paragraph);
```
