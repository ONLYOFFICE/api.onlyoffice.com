---
sidebar_position: -1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 添加DMS提供商

ONLYOFFICE桌面编辑器允许用户从云端访问文档并与团队成员协作编辑。这种情况下，需要互联网连接。目前，用户可以将应用程序连接到ONLYOFFICE Workspace（SaaS或本地部署）、Nextcloud、ownCloud或Seafile，但您可以通过添加自己的文档管理系统（DMS）来扩展此列表。

按照以下步骤将您自己的文档管理系统（DMS）添加到连接列表中：

## 步骤1

在*providers*目录中使用DMS提供商的名称创建一个文件夹（例如*onlyoffice*）。文件夹的路径取决于您使用的操作系统：

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

## 步骤2

创建一个*config.json*文件来指定集成参数。

### 参数

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| 参数                  | 类型                   | 示例                                                                                                      | 描述                                                                                                                                                                                  |
|-----------------------|------------------------|-----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| provider              | string                 | `"onlyoffice"`                                                                                             | 定义在JavaScript命令中用于引用桌面应用的提供商ID。                                                                                                                                     |
| name                  | string                 | `"ONLYOFFICE"`                                                                                             | 定义在添加云端时提供商选择部分显示的名称。                                                                                                                                              |
| check                 | object                 | `{ "url": "status", "headers": { "X-CUSTOM-HEADER": true } }`                                              | 定义用于检查门户可用性的参数。会发送一个`GET`请求，之后期望返回`HTTP_STATUS_CODE = 200`。响应必须以JSON格式返回。                                                                        |
| check.url             | string                 | `"status"`                                                                                                 | 请求中使用的URL。                                                                                                                                                                     |
| check.headers         | object                 | `{ "OCS-APIREQUEST": true }`                                                                               | 添加到ajax请求的头部。                                                                                                                                                                |
| entryPage             | string                 | `https://url-to-connect-provider.com`                                                                      | 定义用于连接提供商的URL。它代替提供商地址使用，并允许桌面应用不发送检查请求。                                                                                                          |
| extraLogout           | string / array[string] | `https://url-for-logout.com`                                                                               | 定义从云端登出的URL。它代替提供商地址使用。                                                                                                                                            |
| editorPage            | string                 | `"/apps/onlyoffice/"` 或 `"regex:\/lib\/(?:[\w-]{32,})\/file\/"`                                           | 定义指示正在打开的文件类型为文档的相对URL。您可以为此参数使用正则表达式。                                                                                                              |
| startPage             | string                 | `"/"`                                                                                                      | 定义在创建新连接时添加到输入的IP或域名后的相对URL。                                                                                                                                  |
| icons                 | object                 | `{ "themeLight": { "connectionsList": "./assets/listicon.svg", "buttonLogo": "./assets/buttonlogo.svg" } }` | 定义门户的图标。您可以通过指定带有相应图标的`themeLight`和`themeDark`对象，为每种UI主题类型（亮色和暗色）添加图标。                                                                     |
| icons.connectionsList | string                 | `"./assets/listicon.svg"`                                                                                  | 连接列表图标的路径。                                                                                                                                                                 |
| icons.buttonLogo      | string                 | `"./assets/buttonlogo.svg"`                                                                                 | 当门户列表为空时，连接页面上提供商按钮的图标路径。                                                                                                                                     |

```mdx-code-block
</APITable>
```

### 示例

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

## 步骤3

创建两个应用程序页面的图标，并将其放入*config.json*文件中指定的文件夹：

1. 连接列表的图标。所需图标尺寸为36x36：

   ![连接列表](/assets/images/desktop/connection_list.png)

2. 当**已连接的云端**列表为空时，连接页面上提供商按钮的图标。所需图标尺寸为148x38：

   ![提供商按钮](/assets/images/desktop/provider_button.png)

支持的图像格式为 *.png*、*.jpeg*、*.svg*。我们建议使用 *.svg*文件，以便在系统中200%缩放的HiDPI显示器上正确显示。

您也可以为每种UI主题类型（亮色和暗色）添加图标。在这种情况下，创建四个图标（每种主题两个）并将它们全部添加到*config.json*文件中。

## 步骤4

启动ONLYOFFICE桌面编辑器，如果需要的话重启它，然后切换到**已连接的云端**部分，检查连接是否正常工作。
