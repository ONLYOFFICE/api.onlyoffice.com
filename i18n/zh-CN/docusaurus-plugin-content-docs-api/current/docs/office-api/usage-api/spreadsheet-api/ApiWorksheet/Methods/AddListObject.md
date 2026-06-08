# AddListObject

向工作表添加格式化表格并返回 ApiListObject 对象。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.AddListObject(sSourceType, sSource, bLinkSource, sHasHeaders, sDestination, sTableStyleName);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sSourceType | 可选 | [XlListObjectSourceType](../../Enumeration/XlListObjectSourceType.md) | "xlSrcRange" | 表格的源类型。当前仅支持 **“xlSrcRange”**。 |
| sSource | 可选 | string |  | 将应用表格的范围，例如 **“A1:D10”**。当 *sSourceType* 为 **“xlSrcRange”** 时必需。 |
| bLinkSource | 可选 | boolean | false | 不支持。 |
| sHasHeaders | 可选 | [XlYesNoGuess](../../Enumeration/XlYesNoGuess.md) | "xlGuess" | 指定源范围是否有列标签。 |
| sDestination | 可选 | string |  | 不支持。 |
| sTableStyleName | 可选 | string | "TableStyleLight9" | 表格样式名称。 |

## 返回值

[ApiListObject](../../ApiListObject/ApiListObject.md) \| null
