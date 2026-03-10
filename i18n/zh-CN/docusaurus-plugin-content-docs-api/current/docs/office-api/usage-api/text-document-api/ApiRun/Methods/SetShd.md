# SetShd

指定应用于当前文本运行内容的底纹。

## 语法

```javascript
expression.SetShd(type, color);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [ShdType](../../Enumeration/ShdType.md) |  | 应用于当前文本运行内容的底纹类型。 |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 未提供描述。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例指定应用于当前文本运行内容的底纹。

```javascript editor-docx
// How to add shading to the text.

// Create a new text run and apply shading to it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetShd("clear", Api.HexColor('#FF6F3D'));
run.AddText("This is a text run with the text shading set to orange.");
paragraph.AddElement(run);

```
