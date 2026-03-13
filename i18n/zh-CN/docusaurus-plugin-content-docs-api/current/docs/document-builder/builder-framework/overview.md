---
sidebar_position: -7
---

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# 概述

当您将 **ONLYOFFICE Document Builder** 集成到您的 Python、C++、COM、Java 或 .Net 应用程序时，您可以在应用程序中嵌入 **ONLYOFFICE Document Builder** 代码和用于创建文档文件的脚本代码。在这种情况下，每当输出文档文件需要更改时，您都需要重新编译应用程序。当您需要更快的原生应用程序，并且确定生成的文档文件始终保持不变或仅在重新编译应用程序时才会更改时，此选项非常有用。

## 类

| 类 | 描述 |
| ----- | ----------- |
| [CDocBuilder](CDocBuilder/CDocBuilder.md) | ONLYOFFICE Document Builder 用于生成文档文件（文本文档、电子表格、演示文稿、表单文档、PDF）的基类。 |
| [CDocBuilderContext](CDocBuilderContext/CDocBuilderContext.md) | ONLYOFFICE Document Builder 用于获取 JS 上下文的类。 |
| [CDocBuilderContextScope](CDocBuilderContextScope/CDocBuilderContextScope.md) | 栈分配类，用于为本地作用域内执行的所有操作设置执行上下文。 |
| [CDocBuilderValue](CDocBuilderValue/CDocBuilderValue.md) | ONLYOFFICE Document Builder 用于获取所调用 JS 命令结果的类。它表示 JS 对象的包装器。 |
