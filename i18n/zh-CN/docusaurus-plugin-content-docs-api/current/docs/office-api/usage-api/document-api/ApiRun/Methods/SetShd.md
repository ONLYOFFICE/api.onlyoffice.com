# SetShd

指定应用于当前文本块内容的底纹。

继承自 [ApiTextPr.SetShd](../../ApiTextPr/Methods/SetShd.md)。

## 语法

```javascript
expression.SetShd(shd);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shd | 必需 | [ApiShd](../../ApiShd/ApiShd.md) |  | 使用 Api.CreateShd 方法创建的底纹。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在文档中为文本运行应用背景底纹颜色。

```javascript editor-docx
// How do I shade the background behind a run of text in a document?

// Color the area behind words to make them stand out in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetShd(Api.CreateShd("clear", Api.HexColor('#FF6F3D')));
run.AddText("This is a text run with the text shading set to orange.");
paragraph.AddElement(run);
```
