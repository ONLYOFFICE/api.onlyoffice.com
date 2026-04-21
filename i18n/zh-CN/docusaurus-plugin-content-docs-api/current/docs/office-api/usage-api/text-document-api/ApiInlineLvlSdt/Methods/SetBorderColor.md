# SetBorderColor

设置当前内容控件的边框颜色。

## 语法

```javascript
expression.SetBorderColor(color);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 可选 | [ApiColor](../../ApiColor/ApiColor.md) |  | 边框颜色。 |

## 返回值

boolean

## 示例

设置文档中容器的边框颜色。

```javascript editor-docx
// How to set border color for an inline content control in a document?

// Set border color and display the result in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with blue border.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetBorderColor(Api.HexColor('#0000FF'));
paragraph.AddInlineLvlSdt(inlineLvlSdt);
```
