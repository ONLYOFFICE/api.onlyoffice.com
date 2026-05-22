# ToHtmlOptions

将文档内容转换为 HTML 字符串的选项。

## 类型

Object

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| Base64img | boolean | 定义图像是否以 base64 格式创建。 |
| DemoteHeadings | boolean | 定义是否将所有标题级别降级以符合以下标准：单个 H1 作为标题，H2 作为正文中的顶级标题。 |
| HtmlHeadings | boolean | 定义当目标平台的 Markdown 渲染器不处理 Markdown 样式 ID 时，是否生成 HTML 标题和 ID。 |
| RenderHTMLTags | boolean | 定义是否保留 HTML 标签。默认情况下，左尖括号将被替换为特殊字符。 |
