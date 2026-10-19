# InsertPresentationFromUrl

将通过 URL 引用的外部演示文稿中的幻灯片插入到当前演示文稿中。

:::note
此功能在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.InsertPresentationFromUrl(url, options, token);
```

`expression` - 表示 [Api](../presentation-api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| url | 必需 | string |  | 源演示文稿（pptx）的 URL。 |
| options | 可选 | object |  | 插入选项。 |
| options.index | 可选 | number |  | 插入新幻灯片的位置（从 0 开始）。默认为演示文稿的末尾。 |
| options.slideStart | 可选 | number | 0 | 要从源文件插入的第一张幻灯片的索引（从 0 开始）。 |
| options.slideEnd | 可选 | number | -1 | 要从源文件插入的最后一张幻灯片的索引（从 0 开始）。-1 表示最后一张幻灯片。 |
| options.keepSourceFormatting | 可选 | boolean | false | 是否保留插入幻灯片的源格式。 |
| token | 可选 | string |  | 使用文档服务器 inbox 密钥签名的 JWT，用于授权 URL 下载。在启用浏览器端 JWT 的部署中为必需项。 |

## 返回值

number
