---
sidebar_position: -1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 回调处理程序

 **文档编辑服务**用 [JavaScript API](../get-started/basic-concepts.md) 的 *callbackUrl* 通知**文档存储服务**有关文档编辑的状态。**文档编辑服务**使用POST 请求，请求信息在正文中。

## 操作

 定义当用户对文档执行操作时接收到的对象。*type* 字段值可以具有以下值：

- **0** - 用户断开与文档共同编辑的连接，
- **1** - 新用户连接到文档共同编辑，
- **2** - 用户单击[强制保存按钮](./config/editor/customization/customization-standard-branding.md#forcesave)。

 *userid* 字段值是用户标识符。

类型: object数组

## changeshistory

定义具有文档更改历史的对象数组。仅当 *status* 值等于 **2** 或 **3** 时，对象才存在。必须作为对象的属性 *changes* 以参数形式发送给 [refreshHistory](./methods.md#refreshhistory) 方法。自 4.2 版起已删除，请改用 [history](#history)。

类型: object数组

## changesurl

使用文档编辑数据定义文件的链接，用于跟踪和显示文档更改历史记录。仅当 *status* 等于 **2**, **3**, **6** 或 **7** 时，链接才存在。必须保存文件，并且必须使用 [setHistoryData](./methods.md#sethistorydata) 方法将其地址作为 <i>changesUrl</i> 参数发送，以显示与特定文档版本对应的更改。

类型: string

## filetype

定义从 [url](#url) 参数指定的链接下载文档的扩展名。文件类型默认为 OOXML，但如果启用了 [assemblyFormatAsOrigin](../get-started/how-it-works/saving-file.md#saving-in-original-format) 服务器设置，则文件将以原始格式保存。

类型: string

## forcesavetype

 定义执行[强制保存](../get-started/how-it-works/saving-file.md#force-saving)请求时的启动器类型。可以有以下值：

- **0** - 为[命令服务](../additional-api/command-service/forcesave.md)执行强制保存请求，
- **1** - 每次保存完成时都会执行强制保存请求（例如单击 **保存** 按钮），这仅在 [forcesave](./config/editor/customization/customization-standard-branding.md#forcesave) 选项设置为 *true*时可用，
- **2** - 强制保存请求由计时器按服务器配置中的设置执行，
- **3** - 每次提交表单时都会执行强制保存请求 [Complete & Submit](./config/editor/customization/customization-standard-branding.md#submitform) 按钮被点击 )。

 该类型仅在 *status* 值等于 **6** 或 **7** 时出现。

类型: integer

## formsdataurl

用提交的表单数据,定义 JSON 文件的 URL。[此处](../../office-api/usage-api/text-document-api/Enumeration/FormData.md)描述了包含表单数据的数组结构。此文件包含以下参数：

| 参数 | 类型   | 例子      | 描述                                                                                                   |
| --------- | ------ | ------------ | ------------------------------------------------------------------------------------------------------------- |
| key       | string | "Text1"      | 表单键。 如果当前表单是单选按钮，则该字段包含表单组键。            |
| tag       | string | ""           | 表单标签。                                                                                                 |
| value     | string | "inner text" | 当前表单值。                                                                                     |
| type      | string | "text"       | 表单类型 (**text**, **checkBox**, **picture**, **comboBox**, **dropDownList**, **dateTime**, **radio**)。 |

 当 *status* 值等于 *6* 并且 *forcesavetype* 值等于 *3* 时,该对象才存在。

类型: 对象

## 历史记录

定义有文档更改历史的对象。仅当 *status* 值等于 **2** 或 **3** 时，对象才存在。它包含对象 *changes* 和 *serverVersion*，它们必须作为对象的属性 *changes* 和 *serverVersion* 以参数形式发送给 [refreshHistory](./methods.md#refreshhistory) 方法。

类型: 对象

## key*

定义编辑的文档标识符。

类型: string

## 状态*

  定义文档的状态。可以有以下值：

- **1** - 正在编辑文档，
- **2** - 文档已准备好保存，
- **3** - 发生文档保存错误，
- **4** - 文档已关闭，没有任何更改，
- **6** - 正在编辑文档，但保存了当前文档状态，
- **7** - 强制保存文档时发生错误。

类型: integer

## url

定义已编辑的要由文档存储服务保存的文档的链接。仅当 *status* 值等于 **2**, **3**, **6** 或 **7** 时，链接才存在。

类型: string

## userdata

定义发送到 [forcesave](../additional-api/command-service/forcesave.md) 和 [info](../additional-api/command-service/info.md) 命令的命令服务的自定义信息（如果它在请求中存在）。

类型: string

## 用户

定义打开文档进行编辑的用户的标识符列表；当文档被更改时，用户将返回最后编辑文档的用户的标识符（对于 *status* **2** 和 *status* **6** 的应答）。

类型: string数组

\* *- 必需参数*

服务器存储所有*callbackUrl*，并根据执行操作的用户选择使用哪一个。

从 5.5 版本开始，根据请求的 *status* 选择 [callbackUrl](./config/editor/editor.md#callbackurl)。从 4.4 到 5.5 版本，*callbackUrl* 来自最后一个加入共同编辑的用户。在 4.4 之前的版本中，在共同编辑时，*callbackUrl* 来自第一次打开文件进行编辑的用户。

从 7.0 版开始，*callbackUrl* 来自同一用户的最后一个标签。在 7.0 版之前，*callbackUrl* 来自第一个用户标签。

## 可能的文档状态及其描述

### 状态 1

每次用户连接或断开文档共同编辑时都会收到它。他们的 *callbackUrl* 被使用。

请注意，当用户在遭遇Internet 故障后返回到没有更改的文档时也可以收到 *status* **1**。这种情况可以描述如下：

- 当用户打开文档时，会发送 *status* **1**。
- 如果 Internet 连接丢失并且用户没有对文档进行任何更改，则会发送 *status* **4**。屏幕上显示错误并在查看器中打开文档。
- 在 100 秒内，互联网连接恢复，用户重新连接到文档并再次发送 *status* **1**。
- 现在用户可以继续编辑文档。将收到 *status* **2** 或 **4**，具体取决于用户是否对文档进行了任何更改。

### 状态 2 (3)

它在编辑文档关闭后 [10 秒](../get-started/how-it-works/saving-file.md#save-delay)收到，该用户的标识符是最后一个将更改发送到文档编辑服务的用户。对文件进行最后更改的用户的 *callbackUrl* 被使用。

### Status 4

它是在最后一个用户关闭所编辑的没有更改的文档情况下收到的。他们的 *callbackUrl* 被使用。

### 状态 6 (7)

在执行强制保存请求时接收到。*callbackUrl* 依赖于 *forcesavetype* 参数：

- 如果 *forcesavetype* 参数设置为 **1**，则使用点击 **保存** 按钮的用户的 *callbackUrl*。
- 如果 *forcesavetype* 参数设置为 **0** 或 **2**，则使用对文件进行最后更改的用户的 *callbackUrl*。
- 如果 *forcesavetype* 参数设置为**3**，则使用点击 **提交** 按钮的用户的 *callbackUrl*。从版本 5.5 到版本 6.1，始终使用对文件进行最后更改的用户的 *callbackUrl*。

## 请求示例

### 当两个用户共同编辑文档时，文档编辑服务发送到"callbackUrl"地址的 JSON 对象示例

``` json
{
  "actions": [
    {"type": 1,
      "userid": "78e1e841"}
  ],
  "key": "Khirz6zTPdfd7",
  "status": 1,
  "users": ["6d5a81d0", "78e1e841"]
}
```

### 当用户更改文档并关闭编辑的文档时，文档编辑服务发送到"callbackUrl"地址的 JSON 对象示例

<!-- 'changes'和'serverVersion'字段应保持不变，因为这些属性的类型信息尚不清楚。 -->

<!-- eslint-skip -->

``` json
{
  "actions": [
    {
      "type": 0,
      "userid": "78e1e841"
    }
  ],
  "changesurl": "https://documentserver/url-to-changes.zip",
  "history": {
    "changes": changes,
    "serverVersion": serverVersion
  },
  "filetype": "docx",
  "key": "Khirz6zTPdfd7",
  "status": 2,
  "url": "https://documentserver/url-to-edited-document.docx",
  "users": ["6d5a81d0"]
}
```

### 当最后一个用户关闭编辑的无更改的文档时，文档编辑服务发送到 "callbackUrl" 地址的 JSON 对象示例

``` json
{
  "key": "Khirz6zTPdfd7",
  "status": 4
}
```

### 接收到 [forcesave](../additional-api/command-service/forcesave.md) 命令后文档编辑服务发送到 "callbackUrl" 地址的JSON对象示例

<!-- 'changes'和'serverVersion'字段应保持不变，因为这些属性的类型信息尚不清楚。 -->

<!-- eslint-skip -->

``` json
{
  "changesurl": "https://documentserver/url-to-changes.zip",
  "forcesavetype": 0,
  "history": {
    "changes": changes,
    "serverVersion": serverVersion
  },
  "filetype": "docx",
  "key": "Khirz6zTPdfd7",
  "status": 6,
  "url": "https://documentserver/url-to-edited-document.docx",
  "users": ["6d5a81d0"],
  "userdata": "sample userdata"
}
```

## 来自文档存储服务的响应

**文档存储服务**必须返回以下响应，否则**文档编辑器**将显示错误消息：

``` json
{
  "error": 0
}
```

**文档管理器**和**文档存储服务**要么包含在社区版服务器中，要么必须由在自己的服务器上使用 ONLYOFFICE 文档的软件集成商实施。

## 文档保存示例

<Tabs>
  <TabItem value="csharp" label=".Net (C#)">
      ``` cs
      public class WebEditor : IHttpHandler
      {
          public void ProcessRequest(HttpContext context)
          {
              string body;
              using (var reader = new StreamReader(context.Request.InputStream))
                  body = reader.ReadToEnd();

              var fileData = new JavaScriptSerializer().Deserialize<Dictionary<string, object>>(body);
              if ((int) fileData["status"] == 2)
              {
                  var req = WebRequest.Create((string) fileData["url"]);

                  using (var stream = req.GetResponse().GetResponseStream())
                  using (var fs = File.Open(PATH_FOR_SAVE, FileMode.Create))
                  {
                      var buffer = new byte[4096];
                      int readed;
                      while ((readed = stream.Read(buffer, 0, 4096)) != 0)
                          fs.Write(buffer, 0, readed);
                  }
              }
              context.Response.Write("{\"error\":0}");
          }
      }
      ```

     > *PATH\_FOR\_SAVE* 是保存文件的计算机文件夹的绝对路径，包括文件名。

      在 [.Net example](../get-started/language-specific-examples/net-example.md) 页面上，您将了解如何将 ONLYOFFICE 文档集成到使用 .Net (C#) 或 .Net (C# MVC) 编写的 Web 应用程序中。
 </TabItem>
  <TabItem value="java" label="Java">
      ``` java
      public class IndexServlet extends HttpServlet {
          @Override
          protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
              PrintWriter writer = response.getWriter();

              Scanner scanner = new Scanner(request.getInputStream()).useDelimiter("\\A");
              String body = scanner.hasNext() ? scanner.next() : "";

              JSONObject jsonObj = (JSONObject) new JSONParser().parse(body);

              if((long) jsonObj.get("status") == 2)
              {
                  String downloadUri = (String) jsonObj.get("url");

                  URL url = new URL(downloadUri);
                  java.net.HttpURLConnection connection = (java.net.HttpURLConnection) url.openConnection();
                  InputStream stream = connection.getInputStream();

                  File savedFile = new File(pathForSave);
                  try (FileOutputStream out = new FileOutputStream(savedFile)) {
                      int read;
                      final byte[] bytes = new byte[1024];
                      while ((read = stream.read(bytes)) != -1) {
                          out.write(bytes, 0, read);
                      }

                      out.flush();
                  }

                  connection.disconnect();
              }
              writer.write("{\"error\":0}");
          }
      }
      ```

      > *pathForSave* 是保存文件的计算机文件夹的绝对路径，包括文件名。

      在 [Java example](../get-started/language-specific-examples/java-example.md) 和 [Java integration SDK](../get-started/language-specific-examples/java-integration-sdk.md) 页面上，您将了解如何将 ONLYOFFICE 文档集成到使用 Java 编写的 Web 应用程序中。
</TabItem>
  <TabItem value="nodejs" label="Node.js">
      ``` ts
      import {fs} from "node:fs"
      import {syncRequest} from "sync-request"

      app.post("/track", (req, res) => {
        function updateFile(response, body, path) {
          if (body.status === 2) {
            const file = syncRequest("GET", body.url)
            fs.writeFileSync(path, file.getBody())
          }

          response.write("{\"error\":0}")
          response.end()
        }

        function readbody(request, response, path) {
          let content = ""
          request.on("data", (data) => {
            content += data
          })
          request.on("end", () => {
            const body = JSON.parse(content)
            updateFile(response, body, path)
          })
        }

        if (req.body.hasOwn("status")) {
          updateFile(res, req.body, pathForSave)
        } else {
          readbody(req, res, pathForSave)
        }
      })
      ```

      > *pathForSave* 是保存文件的计算机文件夹的绝对路径，包括文件名。

      在 [NodeJS example](../get-started/language-specific-examples/nodejs-example.md) 页面上，您将了解如何将 ONLYOFFICE 文档集成到使用 Node.js 编写的 Web 应用程序中。
  </TabItem>
  <TabItem value="php" label="PHP">
      ``` php
      <?php

      if (($body_stream = file_get_contents("php://input"))===FALSE){
          echo "Bad Request";
      }

      $data = json_decode($body_stream, TRUE);

      if ($data["status"] == 2){
          $downloadUri = $data["url"];
              
          if (($new_data = file_get_contents($downloadUri))===FALSE){
              echo "Bad Response";
          } else {
              file_put_contents($path_for_save, $new_data, LOCK_EX);
          }
      }
      echo "{\"error\":0}";

      ?>
      ```

      > *$path\_for\_save* 是保存文件的计算机文件夹的绝对路径，包括文件名。

      在 [PHP example](../get-started/language-specific-examples/php-example.md) 页面上，您将了解如何将 ONLYOFFICE 文档集成到您用 PHP 编写的 Web 应用程序中。
  </TabItem>
  <TabItem value="ruby" label="Ruby">
      ``` rb
      class ApplicationController < ActionController::Base
          def index
              body = request.body.read

              file_data = JSON.parse(body)
              status = file_data["status"].to_i

              if status == 2
                  download_uri = file_data["url"]
                  uri = URI.parse(download_uri)
                  http = Net::HTTP.new(uri.host, uri.port)

                  if download_uri.start_with?("https")
                      http.use_ssl = true
                      http.verify_mode = OpenSSL::SSL::VERIFY_NONE
                  end

                  req = Net::HTTP::Get.new(uri.request_uri)
                  res = http.request(req)
                  data = res.body

                  File.open(path_for_save, "wb") do |file|
                      file.write(data)
                  end
              end
              render :text => "{\"error\":0}"
          end
      end
      ```

      > *path\_for\_save* 是保存文件的计算机文件夹的绝对路径，包括文件名。

      在 [Ruby example](../get-started/language-specific-examples/ruby-example.md) 页面上，您将了解如何将 ONLYOFFICE 文档集成到您用 Ruby 编写的 Web 应用程序中。
  </TabItem>
</Tabs>
