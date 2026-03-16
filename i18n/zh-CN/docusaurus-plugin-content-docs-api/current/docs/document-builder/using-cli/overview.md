---
sidebar_position: -1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 概述

您可以使用 **ONLYOFFICE Document Builder** 通过命令行（CLI）从 **.js** 脚本文件生成文档。要启动它，请运行：

<Tabs groupId="os">
    <TabItem value="windows" label="Windows">
        ```sh
        docbuilder.exe mydocument.js
        ```
    </TabItem>
    <TabItem value="linux" label="Linux">
        ```sh
        documentbuilder mydocument.js
        ```
    </TabItem>
    <TabItem value="macos" label="macOS">
        ```sh
        documentbuilder mydocument.js
        ```
    </TabItem>
</Tabs>

如果从其他文件夹运行，请使用可执行文件的完整路径。将 **mydocument.js** 替换为脚本文件的路径。

有关文件结构和语法规则的更多信息，请访问[脚本文件](./script-file.md)章节。

## builder 与 builderJS 的区别

有两个对象可用于处理文档。两者都可以访问 [CDocBuilder](../builder-framework/CDocBuilder/CDocBuilder.md) 方法，但它们处理 JavaScript 变量的方式不同。

| 对象 | 描述 | JS 变量 |
| ------ | ----------- | ------------ |
| **builder** | 逐行解析器。最适合具有静态值的简单脚本。 | 用 `jsValue` 包装：`"jsValue(myVar)"` |
| **builderJS** | 原生 JavaScript 包装器。最适合动态值和复杂逻辑。 | 直接使用：`myVar` |

### 示例

```js
const outputPath = "result.docx";

// builder - 需要 jsValue 包装
builder.CreateFile("docx");
builder.SaveFile("docx", "jsValue(outputPath)");
builder.CloseFile();

// builderJS - 直接使用变量
builderJS.CreateFile("docx");
builderJS.SaveFile("docx", outputPath);
builderJS.CloseFile();
```

:::danger 错误示范

```js
const outputPath = "result.docx";
builder.SaveFile("docx", outputPath);              // 无法工作！
builderJS.SaveFile("docx", "jsValue(outputPath)"); // 无法工作！
```
:::

## 处理多个文件

Document Builder 一次只能处理一个文件。要在脚本中处理多个文件，请在打开另一个文件之前关闭当前文件：

```js
builderJS.CreateFile("docx");
// ... 处理第一个文档
builderJS.SaveFile("docx", "first.docx");
builderJS.CloseFile();

builderJS.CreateFile("xlsx");
// ... 处理第二个文档
builderJS.SaveFile("xlsx", "second.xlsx");
builderJS.CloseFile();
```

## OpenTmpFile

**builderJS** 对象在 [CDocBuilder](../builder-framework/CDocBuilder/CDocBuilder.md) 之外还提供了一个额外的 **OpenTmpFile** 方法。要打开另一个文件进行操作（文档比较、邮件合并等）而不影响主文档：

```js
const tmpFile = builderJS.OpenTmpFile("document.docx");
```

返回的对象具有以下方法：

| 名称 | 描述 |
| ---- | ----------- |
| IsValid | 如果临时文件有效，则返回 **true**。 |
| GetBinary | 返回包含 *doct/pptt/xlst* 二进制内容的 Uint8Array。 |
| GetFolder | 返回包含文件内容的临时文件夹路径。 |
| Close | 关闭文件并删除临时文件夹内容。 |
| GetImageMap | 返回包含 *imageId -> imagePath* 键值对的字典，用于插入文档。 |

## 传递参数

您可以使用 `--argument` 标志从命令行向脚本传递参数。参数以 JSON 对象形式传递，并通过全局 `Argument` 对象访问。

有关详细信息和示例，请参阅[使用命令行参数](./command-line-arguments.md)。

## GlobalVariable

使用全局 `GlobalVariable` 对象在文档之间共享数据。变量在关闭文件后仍然存在，可以在随后打开的文件中访问。

有关详细信息和示例，请参阅[在文件之间共享数据](./sharing-data-between-files.md)。
