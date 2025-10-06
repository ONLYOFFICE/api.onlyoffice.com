---
sidebar_position: -1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Adding a DMS provider

ONLYOFFICE Desktop Editors allows users to access the documents from the cloud and collaborate on them with their teammates. In this case, an Internet connection is required. Currently, users can connect the application to ONLYOFFICE Workspace (SaaS or on-premises), Nextcloud, ownCloud or Seafile, but you can extend this list adding your own DMS.

Follow the steps below to add your own document management system (DMS) to the connection list:

## Step 1

Create a folder using the DMS provider as a name (e.g. *onlyoffice*) in the *providers* directory. The path to the folder depends on the operating system you use:

<Tabs>
  <TabItem value="win" label="Windows">
    ``` bash
    %ProgramFiles%\ONLYOFFICE\DesktopEditors\providers\
    ```
  </TabItem>
  <TabItem value="mac" label="macOS">
    ``` bash
    /Applications/ONLYOFFICE.app/Contents/Resources/providers/
    ```
  </TabItem>
  <TabItem value="lin" label="Linux">
    ``` bash
    /opt/onlyoffice/desktopeditors/providers/
    ```
  </TabItem>
</Tabs>

## Step 2

Create a *config.json* file to specify the integration parameters.

### Parameters

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Parameter             | Type                   | Description                                                                                                                                                                       | Example                                                                                                     |
|-----------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| provider              | string                 | Defines the provider id used to refer to the desktop app in the JavaScript commands.                                                                                              | `"onlyoffice"`                                                                                              |
| name                  | string                 | Defines the name displayed in the provider choice section when adding a cloud.                                                                                                    | `"ONLYOFFICE"`                                                                                              |
| check                 | object                 | Defines parameters for checking portal availability. A `GET` request is sent, after which `HTTP_STATUS_CODE = 200` is expected. The response must be returned in the JSON format. | `{ "url": "status", "headers": { "X-CUSTOM-HEADER": true } }`                                               |
| check.url             | string                 | The URL used in the request.                                                                                                                                                      | `"status"`                                                                                                  |
| check.headers         | object                 | The headers added to the ajax request.                                                                                                                                            | `{ "OCS-APIREQUEST": true }`                                                                                |
| entryPage             | string                 | Defines the URL to connect the provider. It is used instead of the provider address and allows the desktop app not to send the check request.                                     | `https://url-to-connect-provider.com`                                                                       |
| extraLogout           | string / array[string] | Defines the URL to log out from the cloud. It is used instead of the provider address.                                                                                            | `https://url-for-logout.com`                                                                                |
| editorPage            | string                 | Defines the relative URL that indicates that the type of the opening file is a document. You can use regular expressions for this parameter.                                      | `"/apps/onlyoffice/"` or `"regex:\/lib\/(?:[\w-]{32,})\/file\/"`                                            |
| startPage             | string                 | Defines the relative URL added to the entered IP or domain when creating a new connection.                                                                                        | `"/"`                                                                                                       |
| icons                 | object                 | Defines the icons for portals. You can add icons for each UI theme type (light and dark) by specifying the `themeLight` and `themeDark` objects with the corresponding icons.     | `{ "themeLight": { "connectionsList": "./assets/listicon.svg", "buttonLogo": "./assets/buttonlogo.svg" } }` |
| icons.connectionsList | string                 | The path to the icon for the connection list.                                                                                                                                     | `"./assets/listicon.svg"`                                                                                   |
| icons.buttonLogo      | string                 | The path to the icon for the provider button on the connection page when the portal list is empty.                                                                                | `"./assets/buttonlogo.svg"`                                                                                 |

```mdx-code-block
</APITable>
```

### Example

``` json
{
  "provider": "onlyoffice",
  "name": "ONLYOFFICE",
  "check": {
    "url": "status",
    "headers": {
      "X-CUSTOM-HEADER": true
    }
  },
  "entryPage": "https://url-to-connect-provider.com",
  "extraLogout": "https://url-for-logout.com",
  "editorPage": "/apps/onlyoffice/",
  "startPage": "/",
  "icons": {
    "themeLight": {
      "connectionsList": "./assets/listicon.svg",
      "buttonLogo": "./assets/buttonlogo.svg"
    },
    "themeDark": {
      "connectionsList": "./assets/listicon_dark.svg",
      "buttonLogo": "./assets/buttonlogo_dark.svg"
    }
  }
}
```

## Step 3

Create two icons for the application page and put to the folder specified in the *config.json* file:

1. The icon for the connection list. The required icon size is 36x36:

   ![Connection list](/assets/images/desktop/connection_list.png)

2. The icon for the provider button on the connection page when the **Connected clouds** list is empty. The required icon size is 148x38:

   ![Provider button](/assets/images/desktop/provider_button.png)

Supported image formats are *.png*, *.jpeg*, *.svg*. We recommend using a *.svg* file for correct display on HiDPI monitors with a 200% scale in the system.

You can also add icons for each UI theme type (light and dark). In this case, create four icons (two for each theme) and add all of the to the *config.json* file.

## Step 4

Launch ONLYOFFICE Desktop Editors or restart it if needed and switch to the **Connected clouds** section to check if the connection works correctly.
