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

在文档中将派卡转换为磅。

```javascript editor-docx
// How do I convert picas to points in a document?

// Convert picas to points and display the result in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const picas = 100;
const points = Api.PicasToPoints(picas);
paragraph.AddText(picas + ' picas are equal to ' + points + ' points.');
doc.Push(paragraph);
```
