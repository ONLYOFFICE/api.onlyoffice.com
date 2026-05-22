# MillimetersToPixels

将毫米转换为像素。

## 语法

```javascript
expression.MillimetersToPixels(mm);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| mm | 必需 | number |  | 要转换为像素的毫米数。 |

## 返回值

number

## 示例

将毫米测量值转换为像素并在文档中显示结果。

```javascript editor-docx
// How do I find the pixel equivalent of a measurement given in millimeters in a document?

// Show how many pixels correspond to a specific number of millimeters in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const millimeters = 100;
const pixels = Api.MillimetersToPixels(millimeters);
paragraph.AddText(millimeters + ' millimeters are equal to ' + pixels + ' pixels.');
doc.Push(paragraph);
```
