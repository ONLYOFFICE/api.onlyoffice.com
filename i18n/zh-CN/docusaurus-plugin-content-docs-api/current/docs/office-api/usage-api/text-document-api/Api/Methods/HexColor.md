# HexColor

从十六进制字符串创建颜色。

## 语法

```javascript
expression.HexColor(hexString);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| hexString | 必需 | string |  | 未提供描述。 |

## 返回值

[ApiColor](../../ApiColor/ApiColor.md)

## 示例

此示例展示如何创建十六进制颜色并将其用作字体颜色。

```javascript editor-docx
const doc = Api.GetDocument();
const color = Api.HexColor('#DECADE');
const paragraph = doc.GetElement(0);
paragraph.AddText('This text is in hex color.');
paragraph.SetColor(color);

```
