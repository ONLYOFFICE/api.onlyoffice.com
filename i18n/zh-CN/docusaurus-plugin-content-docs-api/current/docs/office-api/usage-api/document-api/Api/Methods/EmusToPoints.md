# EmusToPoints

将 EMU（英制度量单位）转换为磅。

## 语法

```javascript
expression.EmusToPoints(emu);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| emu | 必需 | number |  | 要转换为磅的 EMU 数。 |

## 返回值

number

## 示例

此示例展示如何将 EMU（英制度量单位）转换为磅。

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const emus = 100;
const points = Api.EmusToPoints(emus);
paragraph.AddText(emus + ' emus are equal to ' + points + ' points.');
doc.Push(paragraph);

```
