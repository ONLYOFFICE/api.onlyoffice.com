---
sidebar_position: 1
---

# Introduction

To change any ONLYOFFICE Docs server settings, configure the corresponding parameter in the **ONLYOFFICE Docs** configuration file, which can be found at the following path:

- For Linux: `/etc/onlyoffice/documentserver/default.json`
- For Windows: `%ProgramFiles%\ONLYOFFICE\DocumentServer\config\default.json`

If you want to change it, you can use the `local.json` file, where all the edited parameters should be stored. This file is located in the same directory as the `default.json` file, and the whole object structure for the necessary parameter must be retained.

:::warning
Please do not edit the contents of the `default.json` file directly. The default values will be restored each time you restart Docker container or upgrade **ONLYOFFICE Docs** to a new version, and all your changes will be lost.
:::
