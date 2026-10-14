# ApiShd

表示文本、段落、表格或表格单元格底纹的类。

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Color | [ApiColor](../ApiColor/ApiColor.md) | 底纹颜色。 |
| Type | [ShdType](../Enumeration/ShdType.md) | 底纹类型：**“nil”** - 无底纹，**“clear”** - 纯色填充。 |

## 方法

下表列出了可用的方法。

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [GetClassType](./Methods/GetClassType.md) | "shd" | 返回 ApiShd 类的类型。 |
| [GetColor](./Methods/GetColor.md) | [ApiColor](../ApiColor/ApiColor.md) \| null \| undefined | 返回底纹颜色。 |
| [GetType](./Methods/GetType.md) | [ShdType](../Enumeration/ShdType.md) | 返回底纹类型。 |
