---
sidebar_position: -7
---

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# 概述

当您将**ONLYOFFICE 文档生成器**集成到 C++、COM、.Net、Java 或 Python 应用程序中时，您可以将**ONLYOFFICE 文档生成器**的代码与要创建的文档文件的脚本代码一起嵌入到您的应用程序中。在这种情况下，每当需要更改输出文档文件时，您都需要重新编译应用程序。当您需要一个更快的原生应用程序，并且确定生成的文档文件将始终保持不变，或者只有在重新编译应用程序时才会更改时，此选项非常适用。

<DocCardList items={[...[...useCurrentSidebarCategory().items.slice(1)]]} />
