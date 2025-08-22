---
sidebar_position: -2
---

# 如何调用命令

要调用命令并将数据发送回编辑器，需要定义**调用命令**方法。该方法允许插件发送结构化数据，这些数据可以插入到最终的文档中（如格式化段落、表格、文本片段或单词等）。

callback 是命令返回的结果，为可选参数。如果未传入该参数，则会使用 window.Asc.plugin.onCommandCallback 函数来返回命令执行结果。

:::注意
**Office JavaScript API** 命令仅可用于创建内容并将其插入文档编辑器中（通过 Api.GetDocument().InsertContent(...) 实现）。由于在线编辑器支持协同编辑，因此存在此限制。如果需要为桌面编辑器开发插件以处理本地文件，则不受此限制。
:::

## 调用命令 {#callcommand}

### 参数

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| 名称     | 类型     | 描述                                                                                                                                                                                                                                                                                                                                                                      |
|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| func     | function | 用 JavaScript 编写的命令，其作用是构造可插入至最终文档文件中的结构化数据（如格式化段落、表格、文本片段或单词等），随后将该数据发送给编辑器。该命令必须符合 [Office JavaScript API](../../../office-api/get-started/overview.md) 的语法。             |
| isClose  | boolean  | 指定在执行完 func 参数中的代码后是否关闭插件窗口。值为 true 时将在执行后关闭插件窗口；值为 false 时将在执行后保持窗口开启，以便继续接收其他命令或操作。默认值为 false。 |
| isCalc   | boolean  | 指定在执行 func 参数中的代码后是否重新计算文档内容。值为 true 时将在执行后重新计算文档；值为 false 时不重新计算（仅当您确认所做修改不影响文档计算时使用）。默认值为 true。                                              |
| callback | function | 方法返回的结果。仅支持 JavaScript 标准类型（如传入对象将被替换为 undefined）。                                                                                                                                                                                                                                                    |

```mdx-code-block
</APITable>
```

### 返回值

此方法不返回任何值。

### 示例：

``` ts
Asc.plugin.callCommand(() => {
  const oDocument = Api.GetDocument()
  const oParagraph = Api.CreateParagraph()
  oParagraph.AddText("Hello world")
  oDocument.InsertContent([oParagraph])
}, true, true, (returnValue) => {})
```

## Asc.scope 对象 {#ascscope-object}

该方法在其独立上下文中执行，与其他 JavaScript 数据相互隔离。如果需要向该方法传递某些参数或其他附加数据（如对象、参数、变量等），可以使用 **Asc.scope** 对象。

> 不能通过 Asc.scope 对象将函数传递给调用命令方法

### 示例：

``` ts
Asc.scope.text = text
Asc.plugin.callCommand(() => {
  const oDocument = Api.GetDocument()
  const oParagraph = Api.CreateParagraph()
  oParagraph.AddText(Asc.scope.text)
  oDocument.InsertContent([oParagraph])
}, true, true, (returnValue) => {})
```

## info 对象

该对象用于修改对象数据，并在执行**调用命令**方法时传递附加参数。**info** 是一个辅助对象，在插件运行时可用。它存储所有与当前使用插件的编辑器相关的信息（所使用的[编辑器类型](#editortype)：文本文档、电子表格、演示文稿、PDF 等），以及 OLE 对象的附加设置（如宽度、高度、OLE 对象矢量绘图的毫米与像素比等参数）。

例如，如果文档内容发生变更并需要重新计算，则必须将 [recalculate](#recalculate) 参数设置为 true。此操作是必要的，因为重新计算过程是异步的。此外，还可能需要上传其他数据（例如字体等）。

请参阅下方 window.Asc.plugin.info 对象中可用的参数，了解更多信息。

### 参数

```mdx-code-block
<APITable>
```

| 名称        | 类型    | 示例                 | 描述                                                                                              |
|-------------|---------|-------------------------|----------------------------------------------------------------------------------------------------------|
| data        | string  | `{data}`                | 需要发送到 window.Asc.plugin.info 对象并由插件使用的 OLE 对象数据。 |
| editorType  | string  | "word"                  | 当前插件运行所在的编辑器类型。                                                   |
| guid        | string  | `asc.{UUID}`            | 当前文档中 OLE 对象的全局唯一标识符（GUID）。                                                             |
| height      | number  | 70                      | OLE 对象的高度，单位为毫米。                                                           |
| imgSrc      | string  | "./resources/image.png" | OLE 对象中存储的图像（可视表示）的链接，供插件使用。        |
| mmToPx      | number  | 3                       | OLE 对象矢量绘图的毫米与像素转换比率。                                     |
| objectId    | string  | "1"                     | 当前文档中 OLE 对象的标识符。                                                       |
| recalculate | boolean | true                    | 强制文档重新计算其内容数据。                                                      |
| resize      | boolean | true                    | 检查 OLE 对象的尺寸是否已被更改。                                                          |
| width       | number  | 70                      | OLE 对象的宽度，单位为毫米。                                                            |

```mdx-code-block
</APITable>
```

### 关于 data、height、imgSrc、mmToPx、objectId 和 width 参数的示例

``` ts
window.Asc.plugin.button = (id) => {
  const info = window.Asc.plugin.info

  if (info.objectId === undefined) {
    const method = "asc_addOleObject"
  } else {
    const method = "asc_editOleObject"
  }

  if (info.width) {
    continue
  } else {
    info.width = 70
  }

  if (info.height) {
    continue
  } else {
    info.height = 70
  }

  if (info.height) {
    continue
  } else {
    info.height = 70
  }

  info.widthPix = Math.trunc(info.mmToPx * info.width)
  info.heightPix = Math.trunc(info.mmToPx * info.height)
  info.imgSrc = window.g_board.getResult(info.widthPix, info.heightPix).image
  info.data = window.g_board.getData()
  const code = `Api.${method}(${JSON.stringify(info)});`
  this.callCommand("close", code)
}
```

### 编辑器类型参数示例

``` ts
function createScriptFromArray(aSelected) {
  if (aSelected.length !== 0) {
    switch (window.Asc.plugin.info.editorType) {
    case "word": {
      let sScript = "var oDocument = Api.GetDocument();"
      sScript = `${sScript}\noDocument.CreateNewHistoryPoint();`
      sScript = `${sScript}\nvar oParagraph, oRun, arrInsertResult = [], oImage;`
      sScript = `${sScript}\noDocument.InsertContent(arrInsertResult);`
      break
    }
    }
  }
  return sScript
}
```

### 全局唯一标识符示例

``` ts
window.Asc.plugin.init = () => {
  const plugin_uuid = window.Asc.plugin.info.guid
}
```

### 重新计算参数的示例

``` ts
window.Asc.plugin.init = () => {
  let sScript = "var oDocument = Api.GetDocument();"
  sScript = `${sScript}\noDocument.CreateNewHistoryPoint();`
  sScript = `${sScript}\noParagraph = Api.CreateParagraph();`
  sScript = `${sScript}\noParagraph.AddText('Hello word!');`
  sScript = `${sScript}\noDocument.InsertContent([oParagraph]);`
  window.Asc.plugin.info.recalculate = true
  this.callCommand("close", sScript)
}
```

### 调整大小参数的示例

``` ts
if (window.Asc.plugin.info.resize === true) {
  window.Asc.plugin.button(0)
}
```
