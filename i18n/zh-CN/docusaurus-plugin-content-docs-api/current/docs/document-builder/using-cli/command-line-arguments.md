---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 使用命令行参数

您可以使用 `--argument` 标志向脚本传递参数。参数以 JSON 对象形式传递，并通过全局 `Argument` 对象访问。

:::note
这与使用 [SetProperty](../builder-framework/CDocBuilder/SetProperty.md) 方法相同。
:::

<Tabs groupId="os">
    <TabItem value="windows" label="Windows">
        ```sh
        docbuilder.exe "--argument={\"company\":\"ONLYOFFICE\",\"product\":\"Document Builder\"}" "script.js"
        ```
    </TabItem>
    <TabItem value="linux" label="Linux">
        ```sh
        documentbuilder "--argument={\"company\":\"ONLYOFFICE\",\"product\":\"Document Builder\"}" "script.js"
        ```
    </TabItem>
    <TabItem value="macos" label="macOS">
        ```sh
        documentbuilder "--argument={\"company\":\"ONLYOFFICE\",\"product\":\"Document Builder\"}" "script.js"
        ```
    </TabItem>
</Tabs>

在脚本中使用全局 `Argument` 对象访问这些参数：

```js
const sCompany = Argument["company"];
const sProduct = Argument["product"];
```

## 示例

<Tabs groupId="os">
    <TabItem value="windows" label="Windows">
        ```sh
        docbuilder.exe "--argument={\"company\":\"ONLYOFFICE\",\"product\":\"Document Builder\",\"compatibility\":\"100%\"}" "sample_with_arguments.js"
        ```
    </TabItem>
    <TabItem value="linux" label="Linux">
        ```sh
        documentbuilder "--argument={\"company\":\"ONLYOFFICE\",\"product\":\"Document Builder\",\"compatibility\":\"100%\"}" "sample_with_arguments.js"
        ```
    </TabItem>
    <TabItem value="macos" label="macOS">
        ```sh
        documentbuilder "--argument={\"company\":\"ONLYOFFICE\",\"product\":\"Document Builder\",\"compatibility\":\"100%\"}" "sample_with_arguments.js"
        ```
    </TabItem>
</Tabs>

**sample_with_arguments.js：**

```js
builderJS.CreateFile("docx");

const sCompany = Argument["company"];
const sProduct = Argument["product"];
const sCompatibility = Argument["compatibility"];

const oDocument = Api.GetDocument();
const oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is an example of using command line arguments with ONLYOFFICE Document Builder.");
oParagraph.AddLineBreak();
oParagraph.AddLineBreak();
oParagraph.AddText("Company name: " + sCompany);
oParagraph.AddLineBreak();
oParagraph.AddText("Product: " + sProduct);
oParagraph.AddLineBreak();
oParagraph.AddText("Compatibility with OOXML standards: " + sCompatibility);

builderJS.SaveFile("docx", "ArgumentUse.docx");
builderJS.CloseFile();
```
