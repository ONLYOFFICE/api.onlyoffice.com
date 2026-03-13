---
sidebar_position: -7
---

import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

# Overview

When you integrate **ONLYOFFICE Document Builder** into your Python, C++, COM, Java, or .Net application, you can embed the code for **ONLYOFFICE Document Builder** together with the script code for the document files to be created in your application. In this case, you will need to recompile your application each time anything is to be changed in the output document files. This option is good when you need a faster native application and you are sure that the resulting document files will always stay the same or will only be changed when you recompile your application anyway.

## Classes

| Class | Description |
| ----- | ----------- |
| [CDocBuilder](CDocBuilder/CDocBuilder.md) | Base class used by ONLYOFFICE Document Builder for the document file (text document, spreadsheet, presentation, form document, PDF) to be generated. |
| [CDocBuilderContext](CDocBuilderContext/CDocBuilderContext.md) | Class used by ONLYOFFICE Document Builder for getting JS context for working. |
| [CDocBuilderContextScope](CDocBuilderContextScope/CDocBuilderContextScope.md) | Stack-allocated class which sets the execution context for all operations executed within a local scope. |
| [CDocBuilderValue](CDocBuilderValue/CDocBuilderValue.md) | Class used by ONLYOFFICE Document Builder for getting the results of called JS commands. It represents a wrapper for a JS object. |
