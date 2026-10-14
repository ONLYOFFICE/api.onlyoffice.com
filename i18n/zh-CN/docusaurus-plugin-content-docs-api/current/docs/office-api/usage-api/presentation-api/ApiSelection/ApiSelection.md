# ApiSelection

表示演示文稿中所选内容的类。

## 方法

下表列出了可用的方法。

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [GetShapes](./Methods/GetShapes.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md)[] | 返回选中的形状。 |
| [GetSlides](./Methods/GetSlides.md) | [ApiSlide](../ApiSlide/ApiSlide.md)[] | 返回选中的幻灯片。 |
| [GetTextRange](./Methods/GetTextRange.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | 以文本范围形式返回所选文本。如果光标位于文本中且未选择任何内容，则范围为空并从光标处开始。 |
| [GetType](./Methods/GetType.md) | [SelectionType](../Enumeration/SelectionType.md) | 返回当前选择的类型。 |
| [IsEmpty](./Methods/IsEmpty.md) | boolean | 指定当前选择是否为空。 |
