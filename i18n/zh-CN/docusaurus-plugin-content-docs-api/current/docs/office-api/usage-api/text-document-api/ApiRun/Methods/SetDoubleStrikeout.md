# SetDoubleStrikeout

指定当前运行的内容显示为每个字符都有两条水平线穿过。

## 语法

```javascript
expression.SetDoubleStrikeout(isDoubleStrikeout);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isDoubleStrikeout | 必需 | boolean |  | 指定当前运行的内容显示为双删除线。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例指定当前运行的内容显示为每个字符都有两条水平线穿过。

```javascript editor-docx
// How to strike out a text with two lines.

// Create a new text run and set double strikeout to it.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetDoubleStrikeout(true);
run.AddText("This is a text run with the text struck out with two lines.");
paragraph.AddElement(run);
```
