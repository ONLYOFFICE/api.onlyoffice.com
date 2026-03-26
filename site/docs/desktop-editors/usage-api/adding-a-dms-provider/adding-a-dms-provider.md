---
sidebar_position: -1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Adding a DMS provider

ONLYOFFICE Desktop Editors allows users to access the documents from the cloud and collaborate on them with their teammates. In this case, an Internet connection is required. Currently, users can connect the application to ONLYOFFICE DocSpaace (SaaS or on-premises), Nextcloud, ownCloud, Moodle, Liferay, kDrive, or Seafile, but you can extend this list adding your own DMS.

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

| Parameter             | Type                   | Example                                                                                                     | Description                                                                                                                                                                       |
|-----------------------|------------------------|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| provider              | string                 | `"onlyoffice"`                                                                                              | Defines the provider id used to refer to the desktop app in the JavaScript commands.                                                                                              |
| name                  | string                 | `"ONLYOFFICE"`                                                                                              | Defines the name displayed in the provider choice section when adding a cloud.                                                                                                    |
| check                 | object                 | `{ "url": "status", "headers": { "X-CUSTOM-HEADER": true } }`                                               | Defines parameters for checking portal availability. A `GET` request is sent, after which `HTTP_STATUS_CODE = 200` is expected. The response must be returned in the JSON format. |
| check.url             | string                 | `"status"`                                                                                                  | The URL used in the request.                                                                                                                                                      |
| check.headers         | object                 | `{ "OCS-APIREQUEST": true }`                                                                                | The headers added to the ajax request.                                                                                                                                            |
| entryPage             | string                 | `https://url-to-connect-provider.com`                                                                       | Defines the URL to connect the provider. It is used instead of the provider address and allows the desktop app not to send the check request.                                     |
| extraLogout           | string / array[string] | `https://url-for-logout.com`                                                                                | Defines the URL to log out from the cloud. It is used instead of the provider address.                                                                                            |
| editorPage            | string                 | `"/apps/onlyoffice/"` or `"regex:\/lib\/(?:[\w-]{32,})\/file\/"`                                            | Defines the relative URL that indicates that the type of the opening file is a document. You can use regular expressions for this parameter.                                      |
| startPage             | string                 | `"/"`                                                                                                       | Defines the relative URL added to the entered IP or domain when creating a new connection.                                                                                        |
| icons                 | object                 | `{ "themeLight": { "connectionsList": "./assets/listicon.svg", "buttonLogo": "./assets/buttonlogo.svg" } }` | Defines the icons for portals. You can add icons for each UI theme type (light and dark) by specifying the `themeLight` and `themeDark` objects with the corresponding icons.     |
| icons.connectionsList | string                 | `"./assets/listicon.svg"`                                                                                   | The path to the icon for the connection list.                                                                                                                                     |
| icons.buttonLogo      | string                 | `"./assets/buttonlogo.svg"`                                                                                 | The path to the icon for the provider button on the connection page when the portal list is empty. This parameter is used for versions below 9.0.                                 |

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

Create icons for the application page and put to the folder specified in the *config.json* file:

1. The light and dark icons for the connection list. The required icon size is 36x36:

   ![Connection list](/assets/images/desktop/connection-list.png#gh-light-mode-only)![Connection list](/assets/images/desktop/connection-list.dark.png#gh-dark-mode-only)

2. The light and dark icons for the provider button on the connection page when the **Connected clouds** list is empty. The required icon size is 148x38. These icons are used in versions below 9.0:

   ![Provider button](/assets/images/desktop/provider-button.png#gh-light-mode-only)![Provider button](/assets/images/desktop/provider-button.dark.png#gh-dark-mode-only)

Supported image formats are *.png*, *.jpeg*, *.svg*. We recommend using a *.svg* file for correct display on HiDPI monitors with a 200% scale in the system.

You can also add icons for each UI theme type (light and dark). In this case, create four icons (two for each theme) and add all of the to the *config.json* file.

## Step 4

1. Launch ONLYOFFICE Desktop Editors or restart it if needed.
2. Click ![Plus icon](/assets/images/desktop/plus.svg#gh-light-mode-only)![Plus icon](/assets/images/desktop/plus.dark.svg#gh-dark-mode-only) next to **Clouds**.
3. In the **Connect to cloud office** window, open the list of available clouds to check if the connection works correctly.
