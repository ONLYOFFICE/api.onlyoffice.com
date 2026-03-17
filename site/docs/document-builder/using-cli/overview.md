---
sidebar_position: -1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Overview

You can use **ONLYOFFICE Document Builder** to generate documents from **.js** script files via the command line (CLI). To launch it, run:

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

Use the full path to the executable if running from a different folder. Replace **mydocument.js** with the path to your script file.

Visit the [Script file](./script-file.md) section for more information about file structure and syntax rules.

:::info Server integration
For examples of using Document Builder CLI on servers with different programming languages (C#, Node.js, PHP, Ruby), see the [document-builder-integration](https://github.com/ONLYOFFICE/document-builder-integration) repository.
:::

## builder vs builderJS

There are two objects available for working with documents. Both provide access to [CDocBuilder](../builder-framework/CDocBuilder/CDocBuilder.md) methods, but they differ in how they handle JavaScript variables.

| Object | Description | JS variables |
| ------ | ----------- | ------------ |
| **builder** | Line-by-line parser. Best for simple scripts with static values. | Wrap with `jsValue`: `"jsValue(myVar)"` |
| **builderJS** | Native JavaScript wrapper. Best for dynamic values and complex logic. | Use directly: `myVar` |

### Example

```js
const outputPath = "result.docx";

// builder - requires jsValue wrapper
builder.CreateFile("docx");
builder.SaveFile("docx", "jsValue(outputPath)");
builder.CloseFile();

// builderJS - use variables directly
builderJS.CreateFile("docx");
builderJS.SaveFile("docx", outputPath);
builderJS.CloseFile();
```

:::danger Incorrect

```js
const outputPath = "result.docx";
builder.SaveFile("docx", outputPath);              // Will not work!
builderJS.SaveFile("docx", "jsValue(outputPath)"); // Will not work!
```
:::

## Working with multiple files

Document Builder works with one file at a time. To work with multiple files in a script, close the current file before opening another:

```js
builderJS.CreateFile("docx");
// ... work with first document
builderJS.SaveFile("docx", "first.docx");
builderJS.CloseFile();

builderJS.CreateFile("xlsx");
// ... work with second document
builderJS.SaveFile("xlsx", "second.xlsx");
builderJS.CloseFile();
```

## OpenTmpFile

The **builderJS** object provides an additional **OpenTmpFile** method beyond [CDocBuilder](../builder-framework/CDocBuilder/CDocBuilder.md). To open another file for manipulation (document comparison, mail merge, etc.) without affecting the main document:

```js
const tmpFile = builderJS.OpenTmpFile("document.docx");
```

The returned object has the following methods:

| Name | Description |
| ---- | ----------- |
| IsValid | Returns **true** if the temporary file is valid. |
| GetBinary | Returns Uint8Array with the *doct/pptt/xlst* binary content. |
| GetFolder | Returns the path to the temporary folder with the file contents. |
| Close | Closes the file and removes the temporary folder contents. |
| GetImageMap | Returns a dictionary with *imageId -> imagePath* pairs for inserting into the document. |

## Passing arguments

You can pass arguments from the command line to your script using the `--argument` flag. Arguments are passed as a JSON object and accessed via the global `Argument` object.

See [Using command line arguments](./command-line-arguments.md) for details and examples.

## GlobalVariable

Use the global `GlobalVariable` object to share data between documents. Variables persist after closing a file and can be accessed in subsequently opened files.

See [Sharing data between files](./sharing-data-between-files.md) for details and examples.
