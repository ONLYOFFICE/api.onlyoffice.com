# SetFontFamily

设置首字下沉字母的字体系列。

## 语法

```javascript
expression.SetFontFamily(fontFamily);
```

`expression` - 表示 [ApiDropCap](../ApiDropCap.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fontFamily | 可选 | string \| null |  | 用于首字下沉字母的字体系列名称。传递 *null* 或省略此参数可移除字体系列。 |

## 返回值

[ApiDropCap](../../ApiDropCap/ApiDropCap.md)

## 示例

设置文档中首字下沉字母的字体系列。

```javascript editor-docx
// Use a different font for the drop cap letter of a paragraph in a document.

// Apply a specific font family to the decorative initial letter of a paragraph in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.SetFontFamily('Times New Roman');
```
