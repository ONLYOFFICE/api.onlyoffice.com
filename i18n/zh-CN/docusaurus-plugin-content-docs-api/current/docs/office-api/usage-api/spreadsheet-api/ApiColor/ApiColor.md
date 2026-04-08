# ApiColor

表示 ApiColor 类。


## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [FromJSON](./Methods/FromJSON.md) | [ApiColor](../ApiColor/ApiColor.md) \| null | 将 JSON 对象转换为 ApiColor 对象。 |
| [GetClassType](./Methods/GetClassType.md) | "color" | 返回 ApiColor 类的类型。 |
| [GetHex](./Methods/GetHex.md) | string | 获取颜色的十六进制字符串表示。 |
| [GetRGB](./Methods/GetRGB.md) | number | 返回 RGB 格式的颜色值。 |
| [GetRGBA](./Methods/GetRGBA.md) | Object | 获取颜色的 RGBA 分量。 |
| [GetThemeName](./Methods/GetThemeName.md) | [SchemeColorId](../Enumeration/SchemeColorId.md) \| null | 如果颜色是主题颜色，则获取主题颜色名称。 |
| [IsThemeColor](./Methods/IsThemeColor.md) | boolean | 如果颜色是主题颜色则返回 true。 |
| [ToJSON](./Methods/ToJSON.md) | string | 将 ApiColor 对象转换为 JSON 对象。 |
