---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Using command line arguments

You can pass arguments to your script using the `--argument` flag. Arguments are passed as a JSON object and accessed via the global `Argument` object.

:::note
This is the same as using the [SetProperty](../builder-framework/CDocBuilder/SetProperty.md) method.
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

Access these arguments in your script using the global `Argument` object:

```js
const sCompany = Argument["company"];
const sProduct = Argument["product"];
```

## Example

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

**sample_with_arguments.js:**

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
