---
sidebar_position: -3
description: 了解如何为 ONLYOFFICE 插件添加和配置图标。
---

# 图标

在为编辑器构建插件时，添加图标可以显著提高可用性，使您的界面更加直观。

## 文件夹结构

您的插件应包含一个 */resources* 目录来存储所有图像、图标和其他静态资源。当插件加载时，编辑器会自动访问此文件夹。

以下是推荐的目录结构：

```text
my-plugin/
|-- config.json
|-- index.html
|-- plugin.js
`-- resources/
    |-- dark/
    |   |-- icon.png
    |   |-- icon@1.25x.png
    |   |-- icon@1.5x.png
    |   |-- icon@1.75x.png
    |   `-- icon@2x.png
    |
    |-- light/
    |   |-- icon.png
    |   |-- icon@1.25x.png
    |   |-- icon@1.5x.png
    |   |-- icon@1.75x.png
    |   `-- icon@2x.png
    |
    `-- store/
        |-- icons/
        |   |-- icon.png
        |   |-- icon.svg
        |   |-- icon@1.25x.png
        |   |-- icon@1.5x.png
        |   |-- icon@1.75x.png
        |   `-- icon@2x.png
        `-- screenshots/
            |-- screen_1.png
            |-- screen_2.png
            |-- screen_3.png
            |-- screen_4.png
            |-- screen_5.png
            `-- screen_6.png
```

此层次结构允许编辑器根据主题、状态和缩放比例自动选择正确的图标。

## 在 config.json 中定义图标

在您的 [config.json](../structure/configuration/configuration.md) 中，使用智能 URL 模式定义图标，该模式可适应主题和缩放：

```json
{
  "name": "My Plugin",
  "guid": "asc.{UUID}",
  "version": "1.0.0",
  "description": "Example plugin with adaptive icons",
  "icons": [
    "resources/%theme-name%(classic|dark)/%theme-type%(light|dark)/icon%state%(normal|hover)%scale%(default|*).%extension%(png|svg)"
  ],
  "isVisual": true,
  "initDataType": "none",
  "initOnSelectionChanged": false
}
```

这一行代码动态告诉编辑器根据以下条件查找图标：

- 主题名称（classic 或 dark）
- 主题类型（light 或 dark）
- 状态（normal、hover）
- 缩放比例（100%、125%、150% 等）
- 扩展名（png 或 svg）

## 工作原理

当插件加载时，编辑器会：

1. 检测当前活动的编辑器主题（浅色/深色）。
2. 检查屏幕缩放比例（例如 125%）。
3. 加载相应的图标变体。
4. 如果找不到完全匹配的图标，则选择最接近的可用尺寸。

例如，当编辑器设置为深色主题且缩放级别为 150% 时，将自动应用以下调整：

```text
resources/dark/icon@1.5x.png
```

## 可选：为内容控件添加图标

您还可以在 9.0 版本引入的内容控件按钮中使用图标：

```ts
let button = new Asc.ButtonContentControl();
button.icons = "/resources/check%scale%(default).png";
button.attachOnClick(function(contentControlId){
  Asc.plugin.executeMethod("RemoveContentControl", [contentControlId]);
});
```

这允许您直接在文档内容中添加交互式按钮。

## 参数

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| 参数       | 类型   | 示例        | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|------------|--------|-------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| theme-name | string | `"classic"` | 主题名称（*classic*、*dark* 等）                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| theme-type | string | `"light"`   | 插件图标的主题类型。可以为 *light* 或 *dark* 值。                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| state      | string | `"normal"`  | 图标状态。可用的值包括：*normal*、*hover*、*active*。当该参数为 *normal* 时，最终生成的 URL 中会被替换为空字符串。*hover* 和 *active* 值将分别替换为 *_hover* 和 *_active*。                                                                                                                                                                                                                                                                                                               |
| scale      | string | `"default"` | 插件图标支持的所有缩放类型。默认值等同于 *100\|125\|150\|175\|200*。*\** 表示所有其他缩放值。<br /><br />文档编辑器选择图标的方式如下：<br /><br />1. 获取当前缩放比例的信息，并查找相应的图标；<br /><br />2. 如果 *config* 中没有该缩放比例的图标，则选择最接近所需尺寸并向上取整的图标（例如使用 150% 替代 140%）。                                                                                                                                                                       |
| extension  | string | `"svg"`     | 图标的扩展名。如果选项中包含 *svg* 扩展名，它将被用于所有未指定缩放值的情况以及 *\** 情况。对于指定的扩展名，将使用列出的所有"非 svg"扩展名中的最后一个。如果选项中没有其他扩展名，则同样使用 *svg* 扩展名。                                                                                                                                                                                                                                                                                |

```mdx-code-block
</APITable>
```

## 已弃用的图标格式

:::danger[已弃用]
以下图标格式仍可使用，但已被弃用。请使用上述新的图标字符串格式。
:::

该字符串会生成旧图标格式的对象（即 [icon2](../structure/configuration/configuration.md#variationsicons2) 参数）：

```ts
[
  {
    "theme": "classic",
    "style": "light",
    "100%": {normal: "resources/classic/light/icon.png", hover: "resources/classic/light/icon_hover.png"},
    "125%": {normal: "resources/classic/light/icon@1.25x.png", hover: "resources/classic/light/icon_hover@1.25x.png"},
    "150%": {normal: "resources/classic/light/icon@1.5x.png", hover: "resources/classic/light/icon_hover@1.5x.png"},
    "175%": {normal: "resources/classic/light/icon@1.75x.png", hover: "resources/classic/light/icon_hover@1.75x.png"},
    "200%": {normal: "resources/classic/light/icon@2x.png", hover: "resources/classic/light/icon_hover@2x.png"},
    "*": {normal: "resources/classic/light/icon.svg", hover: "resources/classic/light/icon_hover.svg"},
  },
  {
    "theme": "classic",
    "style": "dark",
    "100%": {normal: "resources/classic/dark/icon.png", hover: "resources/classic/dark/icon_hover.png"},
    "125%": {normal: "resources/classic/dark/icon@1.25x.png", hover: "resources/classic/dark/icon_hover@1.25x.png"},
    "150%": {normal: "resources/classic/dark/icon@1.5x.png", hover: "resources/classic/dark/icon_hover@1.5x.png"},
    "175%": {normal: "resources/classic/dark/icon@1.75x.png", hover: "resources/classic/dark/icon_hover@1.75x.png"},
    "200%": {normal: "resources/classic/dark/icon@2x.png", hover: "resources/classic/dark/icon_hover@2x.png"},
    "*": {normal: "resources/classic/dark/icon.svg", hover: "resources/classic/dark/icon_hover.svg"},
  },
  {
    "theme": "dark",
    "style": "light",
    "100%": {normal: "resources/dark/light/icon.png", hover: "resources/dark/light/icon_hover.png"},
    "125%": {normal: "resources/dark/light/icon@1.25x.png", hover: "resources/dark/light/icon_hover@1.25x.png"},
    "150%": {normal: "resources/dark/light/icon@1.5x.png", hover: "resources/dark/light/icon_hover@1.5x.png"},
    "175%": {normal: "resources/dark/light/icon@1.75x.png", hover: "resources/dark/light/icon_hover@1.75x.png"},
    "200%": {normal: "resources/dark/light/icon@2x.png", hover: "resources/dark/light/icon_hover@2x.png"},
    "*": {normal: "resources/dark/light/icon.svg", hover: "resources/dark/light/icon_hover.svg"},
  },
  {
    "theme": "dark",
    "style": "dark",
    "100%": {normal: "resources/dark/dark/icon.png", hover: "resources/dark/dark/icon_hover.png"},
    "125%": {normal: "resources/dark/dark/icon@1.25x.png", hover: "resources/dark/dark/icon_hover@1.25x.png"},
    "150%": {normal: "resources/dark/dark/icon@1.5x.png", hover: "resources/dark/dark/icon_hover@1.5x.png"},
    "175%": {normal: "resources/dark/dark/icon@1.75x.png", hover: "resources/dark/dark/icon_hover@1.75x.png"},
    "200%": {normal: "resources/dark/dark/icon@2x.png", hover: "resources/dark/dark/icon_hover@2x.png"},
    "*": {normal: "resources/dark/dark/icon.svg", hover: "resources/dark/dark/icon_hover.svg"},
  },
]
```

## 示例

```ts
const config = {
  name: "My Plugin",
  guid: "asc.{0616AE85-5DBE-4B6B-A0A9-455C4F1503AD}",
  version: "1.0.0",
  description: "Example plugin with adaptive icons",
  icons: [
    "resources/%theme-name%(classic|dark)/%theme-type%(light|dark)/icon%state%(normal|hover)%scale%(default|*).%extension%(png|svg)"
  ],
  isVisual: true,
  initDataType: "none",
  initOnSelectionChanged: false,
  variations: [
    {
      description: "Example plugin",
      url: "index.html",
      icons: [
        "resources/%theme-name%(classic|dark)/%theme-type%(light|dark)/icon%state%(normal|hover)%scale%(default|*).%extension%(png|svg)"
      ],
      isViewer: false,
      EditorsSupport: ["word", "cell", "slide"],
    }
  ]
};
```
