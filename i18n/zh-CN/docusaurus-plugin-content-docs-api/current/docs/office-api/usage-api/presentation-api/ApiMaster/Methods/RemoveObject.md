# RemoveObject

从当前幻灯片母版中删除对象（图像、形状或图表）。

## 语法

```javascript
expression.RemoveObject(nPos, nCount);
```

`expression` - 表示 [ApiMaster](../ApiMaster.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 将删除对象的位置。 |
| nCount | 可选 | number | 1 | 要删除的对象数量。 |

## 返回值

boolean

## 示例

此示例从当前幻灯片母版中删除对象（图像、形状或图表）。

```javascript editor-pptx
// How to delete an object from a master.

// Delete an object from a slide master indicating its podition index.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
drawing.SetPosition(30 * 36000, 1267200);
drawing.SetSize(150 * 36000, 130 * 36000);

const copyDrawing = drawing.Copy();
copyDrawing.SetPosition(170 * 36000, 1267200);
copyDrawing.SetSize(150 * 36000, 130 * 36000);

master.AddObject(drawing);
master.AddObject(copyDrawing);
master.RemoveObject(1, 1);

const docContent = drawing.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("The second cube was removed from this master.");

```
