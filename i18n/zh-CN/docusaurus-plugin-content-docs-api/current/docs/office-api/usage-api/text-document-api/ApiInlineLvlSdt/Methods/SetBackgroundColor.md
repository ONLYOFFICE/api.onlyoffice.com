# SetBackgroundColor

设置当前内容控件的背景颜色。

## 语法

```javascript
expression.SetBackgroundColor(color);
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | 可选 | [ApiColor](../../ApiColor/ApiColor.md) |  | 未提供描述。 |

## 返回值

boolean

## 示例

此示例展示如何设置容器的背景颜色。

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with a transparent blue background.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetBackgroundColor(Api.RGBA(0, 0, 255, 40));
paragraph.AddInlineLvlSdt(inlineLvlSdt);

```
