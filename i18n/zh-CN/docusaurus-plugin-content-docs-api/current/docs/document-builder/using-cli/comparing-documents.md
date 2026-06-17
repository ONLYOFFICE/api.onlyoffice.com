---
sidebar_position: 3
---

# 比较文档

您可以使用 **Document Builder** 比较两个文档并生成包含修订内容的结果文件。

创建一个 `compare.js` 脚本文件，包含以下代码：

```js
builderJS.OpenFile("file1.docx");
const file = builderJS.OpenTmpFile("file2.docx");
Api.CompareDocuments(file);
file.Close();
builderJS.SaveFile("docx", "Result.docx");
builderJS.CloseFile();
```

:::tip
该脚本使用 `builderJS`，因为 [OpenTmpFile](./overview.md#opentmpfile) 方法仅在 **builderJS** 对象上可用。有关更多详细信息，请参阅 [builder 与 builderJS 的区别](./overview.md#builder-vs-builderjs)。
:::

## 结果

打开生成的文档以查看所有差异。您可以使用顶部工具栏上的相应按钮接受或拒绝更改。

![比较文档](/assets/images/docbuilder/compare-documents.png)
