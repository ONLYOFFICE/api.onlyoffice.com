# SetShd

指定应用于当前文本范围内容的底纹。

## 语法

```javascript
expression.SetShd(shd);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shd | 必需 | [ApiShd](../../ApiShd/ApiShd.md) |  | 使用 Api.CreateShd 方法创建的底纹。 |

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

在文档中为选定的文本部分应用背景颜色。

```javascript editor-docx
// How do I highlight a range of words with a custom background shade in a document?

// Color the area behind specific text to make it stand out visually in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = doc.GetRange(0, 24);
range.SetShd(Api.CreateShd("clear", Api.HexColor('#FF6F3D')));
```
