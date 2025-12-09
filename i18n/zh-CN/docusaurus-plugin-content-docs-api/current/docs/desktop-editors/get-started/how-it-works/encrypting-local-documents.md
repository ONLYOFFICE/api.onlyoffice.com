---
sidebar_position: -2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 加密本地文档

为了保护您的本地文档、电子表格和演示文稿，请使用简单的对称加密插件对它们进行加密。以下步骤将说明如何操作。

## 步骤 1：为编辑器创建加密插件

要构建**加密**插件，您需要创建三个文件：

- 带有界面的 HTML 文件，
- 带有代码的 JS 文件，
- 带有配置的 JSON 文件。

有关插件结构的更多信息可以在[这里](../../../plugin-and-macros/structure/configuration/configuration.md)找到。

让我们看一下配置：

```json
{
  "name": "crypto",
  "guid": "asc.{22222222-2222-2222-2222-222222222222}",

  "variations": [
    {
      "url": "index.html",

      "icons": [],

      "isViewer": true,
      "EditorsSupport": ["word", "cell", "slide"],

      "isVisual": false,
      "isModal": false,
      "isInsideMode": false,

      "initDataType": "desktop",
      "initData": "encryption",
      "cryptoMode": "2",

      "cryptoDisabledForInternalCloud": "true",
      "cryptoDisabledForExternalCloud": "true"
    }
  ]
}
```

所有配置参数都在[文档](../../../plugin-and-macros/structure/configuration/configuration.md)中有描述。

配置文件准备好后，创建带有以下内容的插件代码文件：

```ts
const globalPassword = "{my-super-long-password}"
window.Asc.plugin.init = function init(obj) {
  if (!obj) {
    return;
  }
  switch (obj.type) {
  case "generatePassword":
    this.executeMethod("OnEncryption", [{type: "generatePassword", password: globalPassword}]);
    break;
  case "getPasswordByFile":
    this.executeMethod("OnEncryption", [{type: "getPasswordByFile", password: globalPassword}]);
    break;
  case "setPasswordByFile":
    this.executeMethod("StartAction", ["Info", "Save"]);
    this.executeMethod("EndAction", ["Info", "Save"]);
    break;
  case "encryptData":
    this.executeMethod("OnEncryption", [{type: "encryptData", data: obj.data, check: true}]);
    break;
  case "decryptData":
    this.executeMethod("OnEncryption", [{type: "decryptData", data: obj.data, check: true}]);
    break;
  default:
    break;
  }
}
```

从上面的代码可以看出，所有文件都将使用一个密码加密——*\{my-super-long-password\}*。[OnEncryption](../../../plugin-and-macros/interacting-with-editors/text-document-api/Methods/OnEncryption.md)、[StartAction](../../../plugin-and-macros/interacting-with-editors/text-document-api/Methods/StartAction.md)、[EndAction](../../../plugin-and-macros/interacting-with-editors/text-document-api/Methods/EndAction.md) 方法可以在**插件和宏 API 文档**中找到。

> 请注意，*OnEncryption* 方法的 *encryptData* 和 *decryptData* 类型与本地文件无关。

## 步骤 2：为应用创建 UI 插件

**加密**插件没有界面，默认情况下无法运行。它仅在打开它的文档中工作（在应用的一个选项卡中）。要处理在 ONLYOFFICE 桌面版不同选项卡中打开或创建的所有文档，应该创建应用的**UI**插件。它有助于在必要时为整个应用使用**加密**插件。

此插件无法访问编辑功能，但具有几乎相同的配置：

```json
{
  "name": "Encryption",
  "nameLocale": { 
    "it": "Crittografia",
    "fr": "Chiffrement",
    "es": "Encriptación",
    "de": "Verschlüsselung"
  },
  "guid": "asc.{11111111-1111-1111-1111-111111111111}",

  "variations": [
    {
      "url": "index.html",

      "initDataType": "desktop-external",
      "initData": "encryption",

      "cryptoDisabledOnStart": "true"
    }
  ]
}
```

*index.html* 文件将如下所示：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Encrypt files</title>
    <script type="text/javascript" src="code.js"></script>
  </head>
  <body>
    <p>Encryption enabled: <input id="check" type="checkbox"/></p>
  </body>
</html>
```

有了它，我们将在主应用页面上获得一个名为**Encryption**的新选项卡：

![Encryption exabled](/assets/images/desktop/encryption-enabled.png)

通过勾选复选框启用加密：

```ts
window.addEventListener("load", () => {
  const ASC_DESKTOP_EDITOR_DEFAULT_MODE = 0;
  const ASC_DESKTOP_EDITOR_CRYPTO_MODE = 2;

  document.querySelector("#check").addEventListener("change", function changeListener() {
    let mode;
    if (this.checked) {
      mode = ASC_DESKTOP_EDITOR_CRYPTO_MODE;
    } else {
      mode = ASC_DESKTOP_EDITOR_DEFAULT_MODE;
    }
    AscDesktopEditor.SetCryptoMode("", mode, (retCode) => {
      switch (retCode) {
      case 0:
        console.log("OK");
        break;
      case 1:
        console.log("Please, close all open files!");
        break;
      default:
        break;
      }
    })
  })
})
```

## 步骤 3：将插件添加到桌面应用

将带有插件的文件夹复制到 *sdkjs-plugins* 目录。文件夹的路径取决于您使用的操作系统：

<Tabs>
  <TabItem value="windows" label="Windows">
      ```bash
      %ProgramFiles%\ONLYOFFICE\DesktopEditors\sdkjs-plugins\
      ```
  </TabItem>
  <TabItem value="linux" label="Linux">
      ```bash
      /opt/onlyoffice/desktopeditors/editors/sdkjs-plugins/
      ```
  </TabItem>
</Tabs>

重要的是，您要使用插件 GUID 作为文件夹名称。

详细说明可以在[这里](../../../plugin-and-macros/tutorials/installing/onlyoffice-desktop-editors.md)找到。

## 步骤 4：使用加密插件

将两个插件都添加到应用后，将显示一个新的**Encryption**选项卡。如果您在此处勾选复选框，您创建和编辑的所有文件都将用密码加密：

- 如果加密保持启用状态，打开受保护文件时不需要密码（将调用 *getPasswordByFile*）。
- 如果加密被禁用或文件在另一个应用中打开，将要求输入密码。
