---
sidebar_position: -1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Callback handler

The **document editing service** informs the **document storage service** about the status of the document editing using the [callbackUrl](./config/editor/editor.md#callbackurl) from [JavaScript API](../get-started/basic-concepts.md). The **document editing service** uses the POST request with the information in body.

## Parameters

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| Parameter          | Type            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|--------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| actions            | array of object | Defines the array of object received when the user takes an action with the document. The `type` field value can have the following values:<br /><br />**0** - the user disconnects from the document co-editing;<br /><br />**1** - the new user connects to the document co-editing;<br /><br />**2** - the user clicks the [forcesave button](./config/editor/customization/customization-standard-branding.md#forcesave).<br /><br />The `userid` field value is the user identifier.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| changeshistory     | array of object | Defines the array of objects with the document changes history. The object is present when the `status` value is equal to **2** or **3** only. Must be sent as a property `changes` of the object sent as the argument to the [refreshHistory](./methods.md#refreshhistory) method. Removed since version 4.2, please use [history](#history) instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| changesurl         | string          | Defines the link to the file with the document editing data used to track and display the document changes history. The link is present when the `status` value is equal to **2**, **3**, **6**, or **7**. The file must be saved and its address must be sent as `changesUrl` parameter using the [setHistoryData](./methods.md#sethistorydata) method to show the changes corresponding to the specific document version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| filetype           | string          | Defines an extension of the document that is downloaded from the link specified with the [url](#url) parameter. The file type is OOXML by default but if the [assemblyFormatAsOrigin](../get-started/how-it-works/saving-file.md#servicescoauthoringserverassemblyformatasorigin) server setting is enabled, the file will be saved in its original format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| forcesavetype      | integer         | Defines the type of initiator when the [force saving](../get-started/how-it-works/saving-file.md#force-saving) request is performed. Can have the following values:<br /><br />**0** - the force saving request is performed to the [command service](../additional-api/command-service/forcesave.md);<br /><br />**1** - the force saving request is performed each time the saving is done (e.g. the **Save** button is clicked), which is only available when the [forcesave](./config/editor/customization/customization-standard-branding.md#forcesave) option is set to `true`;<br /><br />**2** - the force saving request is performed by timer with the settings from the server config;<br /><br />**3** - the force saving request is performed each time the form is submitted (e.g. the [Complete & Submit](./config/editor/customization/customization-standard-branding.md#submitform) button is clicked).<br /><br />The type is present when the `status` value is equal to **6** or **7** only. |
| formsdataurl       | string          | Defines the link to the JSON file with the submitted form data. The JSON file contains an array of objects, where each object has the structure described [here](../../office-api/usage-api/text-document-api/Enumeration/FormData.md). The parameter is present when the `status` value is equal to **6** and the `forcesavetype` value is equal to **3**.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| history            | object          | Defines the object with the document changes history. The object is present when the `status` value is equal to **2** or **3** only. It contains the object `changes` and `serverVersion`, which must be sent as properties `changes` and `serverVersion` of the object sent as the argument to the [refreshHistory](./methods.md#refreshhistory) method.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| key*               | string          | Defines the edited document identifier.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| status*            | integer         | Defines the status of the document. Can have the following values:<br /><br />**1** - document is being edited;<br /> <br />**2** - document is ready for saving;<br /><br />**3** - document saving error has occurred;<br /><br />**4** - document is closed with no changes;<br /><br />**6** - document is being edited, but the current document state is saved;<br /><br />**7** - error has occurred while force saving the document.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| url                | string          | Defines the link to the edited document to be saved with the document storage service. The link is present when the `status` value is equal to **2**, **3**, **6** or **7** only.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| userdata           | string          | Defines the custom information sent to the command service for the [forcesave](../additional-api/command-service/forcesave.md) and [info](../additional-api/command-service/info.md) commands in case it was present in the request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| users              | array of string | Defines the list of the identifiers of the users who opened the document for editing; when the document has been changed the **users** will return the identifier of the user who was the last to edit the document (for `status` **2** and `status` **6** replies).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

```mdx-code-block
</APITable>
```

\* *- required parameter*

The server stores all `callbackUrls` and chooses which one to use depending on the user who performed the action.

:::info
Since version 5.5, [callbackUrl](./config/editor/editor.md#callbackurl) is selected depending on the `status` of the request. Starting from version 4.4 to version 5.5, `callbackUrl` is used from the last user who joined the co-editing. Prior to version 4.4, when co-editing, `callbackUrl` is used from the user who first opened the file for editing.
:::

:::info
Since version 7.0, `callbackUrl` is used from the last tab of the same user. Prior to version 7.0, `callbackUrl` from the first user tab was used.
:::

## Possible document statuses and their description

### Status 1

It is received every user connection to or disconnection from document co-editing. Their `callbackUrl` is used.

:::note
The `status` **1** can be also received when the user is returned to the document with no changes after the Internet problems. This situation can be described as follows:

- When the user opens a document, the `status` **1** is sent.
- If the Internet connection is lost and the user has not made any changes to the document, the `status` **4** is sent. An error is displayed on the screen and the document is opened in the viewer.
- Within 100 seconds, the Internet connection is restored, the user is reconnected to the document and the `status` **1** is sent again.
- Now the user can continue to edit the document. The `status` **2** or **4** will be received depending on whether the user made any changes to the document or not.
:::

### Status 2 (3)

It is received [10 seconds](../get-started/how-it-works/saving-file.md#save-delay) after the document is closed for editing with the identifier of the user who was the last to send the changes to the document editing service. The `callbackUrl` from the user who made the last changes to the file is used.

### Status 4

It is received after the document is closed for editing with no changes by the last user. Their `callbackUrl` is used.

### Status 6 (7)

It is received when the force saving request is performed. The `callbackUrl` depends on `forcesavetype` parameter:

- If `forcesavetype` parameter is set to **1**, the `callbackUrl` from the user who clicked the **Save** button is used.
- If `forcesavetype` parameter is set to **0** or **2**, the `callbackUrl` from the user who made the last changes to the file is used.
- If `forcesavetype` parameter is set to **3**, the `callbackUrl` from the user who clicked the **Submit** button is used. Starting from version 5.5 to version 6.1, the `callbackUrl` from the user who made the last changes to the file is always used.

## Examples of requests

### Status 1: co-editing

Sample of JSON object sent to the `callbackUrl` address by document editing service when two users are co-editing the document:

``` json
{
  "actions": [
    {
      "type": 1,
      "userid": "78e1e841"
    }
  ],
  "key": "Khirz6zTPdfd7",
  "status": 1,
  "users": ["6d5a81d0", "78e1e841"]
}
```

### Status 2: saving after changes

Sample of JSON object sent to the `callbackUrl` address by document editing service when the user changed the document and closed it for editing:

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
    "changes": {},
    "serverVersion": 1
  },
  "filetype": "docx",
  "key": "Khirz6zTPdfd7",
  "status": 2,
  "url": "https://documentserver/url-to-edited-document.docx",
  "users": ["6d5a81d0"]
}
```

:::note
The `history` object is only present when `status` is **2** or **3**. See the [refreshHistory](./methods.md#refreshhistory) method for usage details.
:::

### Status 4: closed without changes

Sample of JSON object sent to the `callbackUrl` address by document editing service when the last user closed the document for editing without changes:

``` json
{
  "key": "Khirz6zTPdfd7",
  "status": 4
}
```

### Status 6: force saving

Sample of JSON object sent to the `callbackUrl` address by document editing service after the [forcesave](../additional-api/command-service/forcesave.md) command had been received:

``` json
{
  "changesurl": "https://documentserver/url-to-changes.zip",
  "forcesavetype": 0,
  "filetype": "docx",
  "key": "Khirz6zTPdfd7",
  "status": 6,
  "url": "https://documentserver/url-to-edited-document.docx",
  "users": ["6d5a81d0"],
  "userdata": "sample userdata"
}
```

## Response from the document storage service

:::warning
The **document storage service** must return the following response, otherwise the **document editor** will display an error message:

``` json
{
  "error": 0
}
```
:::

:::info
The **document manager** and **document storage service** are either included to ONLYOFFICE Workspace or must be implemented by the software integrators who use ONLYOFFICE Docs on their own server.
:::

## Document save examples

<Tabs>
  <TabItem value="nodejs" label="Node.js">
      ``` ts
      import fs from "node:fs";
      import {pipeline} from "node:stream/promises";

      // express.json() is registered globally

      app.post("/track", async (req, res) => {
        try {
          if (req.body?.status === 2) {
            const resp = await fetch(req.body.url);
            if (!resp.ok) throw new Error(`Download failed: ${resp.status}`);
            await pipeline(resp.body, fs.createWriteStream(pathForSave));
          }
          res.json({error: 0});
        } catch (err) {
          res.status(500).json({error: 1});
        }
      });
      ```

      :::note
      `pathForSave` is the absolute path to your computer folder where the file will be saved including the file name.
      :::

      On the [NodeJS example](../samples/language-specific-examples/nodejs-example.md) page, you will learn how to integrate ONLYOFFICE Docs into your web application written on Node.js.
  </TabItem>
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

      :::note
      `PATH_FOR_SAVE` is the absolute path to your computer folder where the file will be saved including the file name.
      :::

      On the [.Net example](../samples/language-specific-examples/net-example.md) page, you will learn how to integrate ONLYOFFICE Docs into your web application written on .Net (C#) or .Net (C# MVC).
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

      :::note
      `pathForSave` is the absolute path to your computer folder where the file will be saved including the file name.
      :::

      On the [Java example](../samples/language-specific-examples/java-example.md) and [Java integration SDK](../samples/language-specific-examples/java-integration-sdk.md) pages, you will learn how to integrate ONLYOFFICE Docs into your web application written on Java.
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

      :::note
      `$path_for_save` is the absolute path to your computer folder where the file will be saved including the file name.
      :::

      On the [PHP example](../samples/language-specific-examples/php-example.md) page, you will learn how to integrate ONLYOFFICE Docs into your web application written on PHP.
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

      :::note
      `path_for_save` is the absolute path to your computer folder where the file will be saved including the file name.
      :::

      On the [Ruby example](../samples/language-specific-examples/ruby-example.md) page, you will learn how to integrate ONLYOFFICE Docs into your web application written on Ruby.
  </TabItem>
</Tabs>
