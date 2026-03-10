# ApiPage

表示 ApiPage 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddObject](./Methods/AddObject.md) | [FloatObject](../Enumeration/FloatObject.md) | 向页面添加可用对象。 |
| [GetAllAnnots](./Methods/GetAllAnnots.md) | [ApiBaseAnnotation](../ApiBaseAnnotation/ApiBaseAnnotation.md) | 获取页面上的所有批注 |
| [GetAllDrawings](./Methods/GetAllDrawings.md) | [Drawing](../Enumeration/Drawing.md)[] | 获取页面上的所有绘图对象。 |
| [GetAllWidgets](./Methods/GetAllWidgets.md) | number | 获取页面控件 |
| [GetClassType](./Methods/GetClassType.md) | "page" | 返回 ApiPage 类的类型。 |
| [GetIndex](./Methods/GetIndex.md) | number | 获取页面索引 |
| [GetRotation](./Methods/GetRotation.md) | number | 获取页面旋转角度 |
| [GetSelectedText](./Methods/GetSelectedText.md) | string | 获取页面上的选定文本 |
| [GetSelectionQuads](./Methods/GetSelectionQuads.md) | [Quad](../Enumeration/Quad.md)[] | 获取页面选择四边形 |
| [RecognizeContent](./Methods/RecognizeContent.md) | [Drawing](../Enumeration/Drawing.md)[] | 识别页面上的内容并返回已识别对象的数组。 |
| [Search](./Methods/Search.md) | Quads[] | 搜索词语并返回其四边形。 |
| [SetRotation](./Methods/SetRotation.md) | boolean | 设置页面旋转角度 |
| [SetSelection](./Methods/SetSelection.md) | boolean | 设置页面选择。 |
