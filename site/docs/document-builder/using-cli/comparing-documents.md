---
sidebar_position: 3
---

# Comparing documents

You can use **Document Builder** to compare two documents and generate a result file with tracked changes.

Create a `compare.js` script file with the following code:

```js
builderJS.OpenFile("file1.docx");
const file = builderJS.OpenTmpFile("file2.docx");
Api.CompareDocuments(file);
file.Close();
builderJS.SaveFile("docx", "Result.docx");
builderJS.CloseFile();
```

:::tip
The script uses `builderJS` because the [OpenTmpFile](./overview.md#opentmpfile) method is only available on the **builderJS** object. See [builder vs builderJS](./overview.md#builder-vs-builderjs) for more details.
:::

## Result

Open the resulting document to review all the differences. You can accept or reject changes using the corresponding buttons on the top toolbar.

![Compare documents](/assets/images/docbuilder/compare-documents.png)
