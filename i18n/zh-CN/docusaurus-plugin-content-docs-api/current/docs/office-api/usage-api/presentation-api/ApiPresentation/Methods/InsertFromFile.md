# InsertFromFile

将指定文件中的幻灯片插入到当前演示文稿中。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.InsertFromFile(file, index, slideStart, slideEnd, keepSourceFormatting);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| file | 必需 | object |  | 包含要从中插入幻灯片的演示文稿信息的对象。 |
| index | 可选 | number | ApiPresentation.GetSlidesCount() | 插入新幻灯片的位置（从 0 开始）。 |
| slideStart | 可选 | number | 0 | 要从源文件插入的第一张幻灯片的索引（从 0 开始）。 |
| slideEnd | 可选 | number | -1 | 要从源文件插入的最后一张幻灯片的索引（从 0 开始）。 |
| keepSourceFormatting | 可选 | boolean | false | 指定是否保留所插入幻灯片的源格式。 |

## 返回值

number
