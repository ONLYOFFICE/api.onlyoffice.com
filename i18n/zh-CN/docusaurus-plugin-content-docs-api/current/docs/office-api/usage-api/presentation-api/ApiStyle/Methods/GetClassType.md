# GetClassType

返回 ApiStyle 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiStyle](../ApiStyle.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"style"

## 示例

在演示文稿中获取 ApiStyle 对象的类类型。

```javascript editor-pptx
// Helps when checking the class type of a table style.

// Get a table style from the presentation and display its class type.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Dark Style 1 - Accent 2");
table.SetStyle(style);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + style.GetClassType());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
