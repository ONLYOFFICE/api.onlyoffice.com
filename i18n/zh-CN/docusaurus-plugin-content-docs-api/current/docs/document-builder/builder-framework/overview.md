---
sidebar_position: -7
---

# 概述

您可以将 **ONLYOFFICE Document Builder** 集成到您的 Python、C++、COM、Java 或 .Net 应用程序中，以动态生成文档。脚本和数据在运行时通过 [Run](CDocBuilder/Run.md)、[RunText](CDocBuilder/RunText.md) 或 [ExecuteCommand](CDocBuilder/ExecuteCommand.md) 等方法传递，非常适合按需生成文档，例如发票、报告或基于用户输入的个性化内容。

## 类

| 类 | 描述 |
| ----- | ----------- |
| [CDocBuilder](CDocBuilder/CDocBuilder.md) | ONLYOFFICE Document Builder 用于生成文档文件（文本文档、电子表格、演示文稿、表单文档、PDF）的基类。 |
| [CDocBuilderContext](CDocBuilderContext/CDocBuilderContext.md) | ONLYOFFICE Document Builder 用于获取 JS 上下文的类。 |
| [CDocBuilderContextScope](CDocBuilderContextScope/CDocBuilderContextScope.md) | 栈分配类，用于为本地作用域内执行的所有操作设置执行上下文。 |
| [CDocBuilderValue](CDocBuilderValue/CDocBuilderValue.md) | ONLYOFFICE Document Builder 用于获取所调用 JS 命令结果的类。它表示 JS 对象的包装器。 |
