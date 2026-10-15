# ApiDropCap

表示首字下沉的类。首字下沉是从段落中分离出来、放入单独框架段落中的大号首字母。

## 方法

下表列出了可用的方法。

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [Clear](./Methods/Clear.md) | boolean | 移除首字下沉，将首字下沉字母合并回段落文本中。 |
| [GetClassType](./Methods/GetClassType.md) | "dropCap" | 返回 ApiDropCap 类的类型。 |
| [GetDistanceFromText](./Methods/GetDistanceFromText.md) | [twips](../Enumeration/twips.md) | 返回首字下沉与段落文本之间的距离，以二十分之一磅（1/1440 英寸）为单位。 |
| [GetLinesToDrop](./Methods/GetLinesToDrop.md) | number | 返回首字下沉所占的行数。 |
| [GetParent](./Methods/GetParent.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | 返回请求此首字下沉的段落：可以是带框架的首字下沉段落本身，也可以是延续其文本的段落。 |
| [GetPosition](./Methods/GetPosition.md) | "none" \| "drop" \| "margin" | 返回首字下沉类型。 |
| [SetDistanceFromText](./Methods/SetDistanceFromText.md) | [ApiDropCap](../ApiDropCap/ApiDropCap.md) | 设置首字下沉与段落文本之间的距离，以二十分之一磅（1/1440 英寸）为单位。 |
| [SetFontFamily](./Methods/SetFontFamily.md) | [ApiDropCap](../ApiDropCap/ApiDropCap.md) | 设置首字下沉字母的字体系列。 |
| [SetLinesToDrop](./Methods/SetLinesToDrop.md) | [ApiDropCap](../ApiDropCap/ApiDropCap.md) | 设置首字下沉所占的行数。首字下沉字母会相应调整大小。 |
| [SetPosition](./Methods/SetPosition.md) | [ApiDropCap](../ApiDropCap/ApiDropCap.md) \| null \| undefined | 设置首字下沉类型。 |
