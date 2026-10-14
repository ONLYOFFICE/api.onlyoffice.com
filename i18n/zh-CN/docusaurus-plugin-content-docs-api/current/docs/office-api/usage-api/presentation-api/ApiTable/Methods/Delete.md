# Delete

从父对象中删除指定的绘图对象。

继承自 [ApiDrawing.Delete](../../ApiDrawing/Methods/Delete.md)。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在演示文稿中从幻灯片删除表格。

```javascript editor-pptx
// Useful for removing a table from the presentation slide.

// Create a table and then delete it from the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
slide.RemoveAllObjects();
slide.AddObject(table);
table.Delete();
```
