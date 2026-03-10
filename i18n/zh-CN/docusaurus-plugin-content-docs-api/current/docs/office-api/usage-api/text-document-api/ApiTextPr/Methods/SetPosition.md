# SetPosition

指定此运行的文本相对于周围非定位文本的默认
基线升高或降低的量。

## 语法

```javascript
expression.SetPosition(nPosition);
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPosition | 必需 | [hps](../../Enumeration/hps.md) |  | 以半磅（1/144 英寸）为单位指定正值（升高文本）或负值（降低文本）。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例指定此运行的文本相对于周围非定位文本的默认基线升高或降低的量。

```javascript editor-docx
// How to set an inline position of a text.

// Create a text run object, specify its position to move down or up.

let doc = Api.GetDocument();
let myNewRunStyle1 = doc.CreateStyle("My New Run Style 1", "run");
let textPr1 = myNewRunStyle1.GetTextPr();
textPr1.SetPosition(10);
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
run.SetStyle(myNewRunStyle1);
run.AddText("This is a text run with the text raised 5 points (10 half-points). ");
paragraph.AddElement(run);
let myNewRunStyle2 = doc.CreateStyle("My New Run Style 2", "run");
let textPr2 = myNewRunStyle2.GetTextPr();
textPr2.SetPosition(-16);
run = Api.CreateRun();
run.SetStyle(myNewRunStyle2);
run.AddText("This is a text run with the text lowered 8 points (16 half-points).");
paragraph.AddElement(run);
```
