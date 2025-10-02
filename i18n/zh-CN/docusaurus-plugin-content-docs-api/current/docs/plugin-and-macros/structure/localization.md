---
sidebar_position: -2
---

# 本地化

所有插件默认使用英文创建。如果你希望插件支持你的语言，可以为其添加翻译。

## 翻译 config.json 部分

首先，你可以翻译 [config.json](./configuration/configuration.md) 文件。打开该文件，找到其中的所有英文字符串。通常它们位于配置对象的 [name](./configuration/configuration.md#name)、[variations.description](./configuration/configuration.md#variationsdescription) 和 [variations.buttons.text](./configuration/configuration.md#variationsbuttons) 节点中。

为这些键添加新的以 Locale 结尾的节点，值为一个以语言区域码为键、翻译内容为值的对象。例如，对于 name 键，其本地化对象如下所示：

``` json
{
  "name": "Highlight code",
  "nameLocale": {
    "de": "Code hervorheben",
    "es": "Resaltar el código",
    "fr": "Code en surbrillance"
  }
}
```

[highlighting 插件代码](https://github.com/ONLYOFFICE/onlyoffice.github.io/tree/master/sdkjs-plugins/content/highlightcode)的完整 [config.json](./configuration/configuration.md) 翻译如下：

``` json
{
  "name": "Highlight code",
  "nameLocale": {
    "de": "Code hervorheben",
    "es": "Resaltar el código",
    "fr": "Code en surbrillance"
  },
  "variations": [
    {
      "description": "Highlight code",
      "descriptionLocale": {
        "de": "Code hervorheben",
        "es": "Resaltar el código",
        "fr": "Code en surbrillance"
      },
      "buttons": [
        {
          "text": "Cancel",
          "textLocale": {
            "de": "Abbrechen",
            "es": "Cancelar",
            "fr": "Annuler"
          }
        }
      ]
    }
  ]
}
```

## 本地化 index.html 和插件代码文件

从 [index.html](./entry-point.md) 和 [pluginCode.js](../interacting-with-editors/overview/overview.md) 文件中找出你希望本地化的所有字符串并创建一个列表。然后在插件目录中创建 translations 文件夹，使目录结构如下： 

``` ini
highlightcode/
├── translations/
├── scripts/
    ├── pluginCode.js
├── config.json
├── index.html
```

为每种语言创建对应的 .json 文件，文件名使用语言的四位语言区域码（如 de-DE.json）。这些文件包含一个对象，键为原始英文单词或短语，值为对应语言的翻译。例如，德语翻译文件如下：

``` json
{
  "Language": "Sprache",
  "Highlight": "Hervorheben",
  "Style": "Stil"
}
```

从 7.2 版本开始，你可以在翻译文件夹中添加 langs.json 文件。该文件以数组形式列出包含翻译内容的语言文件名：

``` ini
[
  "cs-CZ",
  "de-DE",
  "es-ES",
  "fr-FR"
]
```

系统首先会请求 langs.json 文件，并尝试完整匹配语言码和文件名。如果没有找到完全匹配项，则会检查 "-" 前的前两个字符。如果 langs.json 中不包含所需文件名，插件将使用英文。若未提供 langs.json 或其解析出错，将使用旧的翻译机制。

添加完所有本地化文件后，插件文件结构如下：

``` ini
highlightcode/
├── translations/
    ├── de-DE.json
    ├── es-ES.json
    ├── fr-FR.json
    ├── langs.json
├── scripts/
    ├── pluginCode.js
├── config.json
├── index.html
```

你现在可以将文件中的字符串替换为对应的翻译结果。

## 应用翻译到插件 {#applying-translations-to-plugin}

为了应用翻译，你需要为每个包含待翻译字符串的元素添加唯一 ID。例如，若想本地化以下代码中的 New 按钮：

``` html
<button>New</button>
```

则需要添加 id 属性，修改为：

``` html
<button id="button_new">New</button>
```

然后在 [pluginCode.js](../interacting-with-editors/overview/overview.md) 文件中添加 window.Asc.plugin.onTranslate 函数：

``` ts
window.Asc.plugin.onTranslate = () => {
  const label = document.querySelector("button_new")
  if (label) {
    label.innerHTML = window.Asc.plugin.tr("New")
  }
}
```

window.Asc.plugin.onTranslate 函数将在插件启动后立即调用，也会在更改插件语言时再次调用。

如果你需要本地化多个词语/短语，window.Asc.plugin.onTranslate 函数可写为如下形式：

``` ts
window.Asc.plugin.onTranslate = () => {
  document.querySelector("button_delete").innerHTML = window.Asc.plugin.tr("Delete")
  document.querySelector("button_new").innerHTML = window.Asc.plugin.tr("New")
  document.querySelector("button_rename").innerHTML = window.Asc.plugin.tr("Rename")
  document.querySelector("button_run").innerHTML = window.Asc.plugin.tr("Run")
}
```

每一行对应一个待本地化的元素，通过相应的 ID 进行定位。

> 请注意，翻译使用的是 .innerHTML 方法，因此翻译内容不仅可以是文字，还可以包含一些 HTML 元素（标签、链接等）。请不要忘记在翻译内容中转义引号（就像处理所有的 .json 文件一样），以确保其正确解析。

现在，当编辑器启动后，将根据当前界面语言判断插件是否具有相应语言的翻译内容。如果匹配，插件语言将自动切换为编辑器界面语言，并应用相应翻译。
