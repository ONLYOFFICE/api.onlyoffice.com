---
sidebar_position: -7
---

# Overview

You can integrate **ONLYOFFICE Document Builder** into your Python, C++, COM, Java, or .Net application to generate documents dynamically. Scripts and data are passed at runtime using methods like [Run](CDocBuilder/Run.md), [RunText](CDocBuilder/RunText.md), or [ExecuteCommand](CDocBuilder/ExecuteCommand.md), making it ideal for generating documents on demand — such as invoices, reports, or personalized content based on user input.

## Classes

| Class | Description |
| ----- | ----------- |
| [CDocBuilder](CDocBuilder/CDocBuilder.md) | Base class used by ONLYOFFICE Document Builder for the document file (text document, spreadsheet, presentation, form document, PDF) to be generated. |
| [CDocBuilderContext](CDocBuilderContext/CDocBuilderContext.md) | Class used by ONLYOFFICE Document Builder for getting JS context for working. |
| [CDocBuilderContextScope](CDocBuilderContextScope/CDocBuilderContextScope.md) | Stack-allocated class which sets the execution context for all operations executed within a local scope. |
| [CDocBuilderValue](CDocBuilderValue/CDocBuilderValue.md) | Class used by ONLYOFFICE Document Builder for getting the results of called JS commands. It represents a wrapper for a JS object. |
