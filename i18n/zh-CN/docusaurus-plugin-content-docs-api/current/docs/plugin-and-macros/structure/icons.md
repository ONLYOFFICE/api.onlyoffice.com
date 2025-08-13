---
sidebar_position: -3
---

# 图标

插件图标图像文件在 [config.json](./configuration/configuration.md#variationsicons) 文件中通过 URL 指定。该 URL 允许你按照以下格式设置主题（名称、类型）、状态（normal、hover、active）和缩放规则：

``` ini
%parameter_name%(option1|options2|...)
```

例如:

``` ini
"resources/%theme-name%(classic|dark)/%theme-type%(light|dark)/icon%state%(normal|hover)%scale%(default|*).%extension%(png|svg)"
```

可用的参数如下：

## 主题名称

主题名称（系统、深色主题等）

类型：string

示例：“系统主题”

## 主题类型

插件图标的主题类型。可以为浅色或深色。

类型：string

示例：“浅色主题”

## 图标状态

图标状态。可用的值包括：默认状态、悬停状态、激活状态。  
当该参数为默认状态时，最终生成的 URL 中会被替换为空字符串。悬停状态和激活状态值将分别替换为 `_hover` 和 `_active`。

类型：string

示例："normal"

## 缩放值

插件图标支持的所有缩放类型。默认值等同于 100|125|150|175|200。*\** 表示所有其他缩放值。

文档编辑器选择图标的方式如下：

1. 获取当前缩放比例的信息，并查找相应的图标；
2. 如果 config 中没有该缩放比例的图标，则选择最接近所需尺寸并向上取整的图标（例如使用 150% 替代 140%）。

类型：string

示例："default"

## 扩展名

图标的扩展名。如果选项中包含 svg 扩展名，它将被用于所有未指定缩放值的情况以及 *\** 情况。对于指定的扩展名，将使用列出的所有“非 svg”扩展名中的最后一个。如果选项中没有其他扩展名，则同样使用 svg 扩展名。

类型：string

示例："svg"

> 请注意，所有参数均为可选。你也可以仅使用图标路径，例如："resources/icon.svg"。

该字符串会生成旧图标格式的对象（即 [icon2](./configuration/configuration.md#variationsicons2) 参数）：

``` ts
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

此格式仍可使用，但已被弃用。
