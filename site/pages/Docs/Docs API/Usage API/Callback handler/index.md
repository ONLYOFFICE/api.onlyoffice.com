The **document editing service** informs the **document storage service** about the status of the document editing using the *callbackUrl* from [JavaScript API](/editors/basic). The **document editing service** use the POST request with the information in body.

## Parameters and their description:

| Parameter      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Type            | Presence |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | -------- |
| actions        | Defines the object received when the user takes an action with the document. The *type* field value can have the following values:- **0** - the user disconnects from the document co-editing,
- **1** - the new user connects to the document co-editing,
- **2** - the user clicks the [forcesave button](/editors/config/editor/customization#forcesave).The *userid* field value is the user identifier.                                                                                                                                                                                                                                                                                                                                                                                                                                         | array of object | optional |
| changeshistory | Defines the array of objects with the document changes history. The object is present when the *status* value is equal to **2** or **3** only. Must be sent as a property *changes* of the object sent as the argument to the [refreshHistory](/editors/methods#refreshHistory) method. Removed since version 4.2, please use [history](#history) instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | array of object | optional |
| changesurl     | Defines the link to the file with the document editing data used to track and display the document changes history. The link is present when the *status* value is equal to **2** or **3** only. The file must be saved and its address must be sent as *changesUrl* parameter using the [setHistoryData](/editors/methods#setHistoryData) method to show the changes corresponding to the specific document version.                                                                                                                                                                                                                                                                                                                                                                                                                                | string          | optional |
| filetype       | Defines an extension of the document that is downloaded from the link specified with the [url](#url) parameter. The file type is OOXML by default but if the [assemblyFormatAsOrigin](/editors/save#assemblyFormatAsOrigin) server setting is enabled, the file will be saved in its original format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | string          | optional |
| forcesavetype  | Defines the type of initiator when the [force saving](/editors/save#forcesave) request is performed. Can have the following values:- **0** - the force saving request is performed to the [command service](/editors/command/forcesave),
- **1** - the force saving request is performed each time the saving is done (e.g. the **Save** button is clicked), which is only available when the [forcesave](/editors/config/editor/customization#forcesave) option is set to *true*.
- **2** - the force saving request is performed by timer with the settings from the server config.
- **3** - the force saving request is performed each time the form is submitted (e.g. the [Complete & Submit](/editors/config/editor/customization#submitForm) button is clicked).The type is present when the *status* value is equal to **6** or **7** only. | integer         | optional |
| formsdataurl   | Defines the URL to the JSON file with the submitted form data. The array structure with the form data is described [here](/docbuilder/global#FormData). This file contains the following parameters:- **key** - the form key. If the current form is a radio button, then this field contains the form group key, **type**: string, **example**: "Text1";
- **tag** - the form tag, **type**: string, **example**: "";
- **value** - the current form value, **type**: string, **example**: "inner text";
- **type** - the form type (**text**, **checkBox**, **picture**, **comboBox**, **dropDownList**, **dateTime**, **radio**), **type**: string, **example**: "text".The object is present when the *status* value is equal to *6* and the *forcesavetype* value is equal to *3*.                                                              | object          | optional |
| history        | Defines the object with the document changes history. The object is present when the *status* value is equal to **2** or **3** only. It contains the object *changes* and *serverVersion*, which must be sent as properties *changes* and *serverVersion* of the object sent as the argument to the [refreshHistory](/editors/methods#refreshHistory) method.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | object          | optional |
| key            | Defines the edited document identifier.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | string          | required |
| status         | Defines the status of the document. Can have the following values:- **1** - document is being edited,
- **2** - document is ready for saving,
- **3** - document saving error has occurred,
- **4** - document is closed with no changes,
- **6** - document is being edited, but the current document state is saved,
- **7** - error has occurred while force saving the document.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | integer         | required |
| url            | Defines the link to the edited document to be saved with the document storage service. The link is present when the *status* value is equal to **2**, **3**, **6** or **7** only.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | string          | optional |
| userdata       | Defines the custom information sent to the command service for the [forcesave](/editors/command/forcesave) and [info](/editors/command/info) commands in case it was present in the request.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | string          | optional |
| users          | Defines the list of the identifiers of the users who opened the document for editing; when the document has been changed the **users** will return the identifier of the user who was the last to edit the document (for *status* **2** and *status* **6** replies).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | array of string | optional |

The server stores all *callbackUrls* and chooses which one to use depending on the user who performed the action.

Since version 5.5, [callbackUrl](/editors/config/editor#callbackUrl) is selected depending on the *status* of the request. Starting from version 4.4 to version 5.5, *callbackUrl* is used from the last user who joined the co-editing. Prior to version 4.4, when co-editing, *callbackUrl* is used from the user who first opened the file for editing.

Since version 7.0, *callbackUrl* is used from the last tab of the same user. Prior to version 7.0, *callbackUrl* from the first user tab was used.

Possible document statuses and their description

| Status                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *Status* **1**         | It is received every user connection to or disconnection from document co-editing. Their *callbackUrl* is used.Please note that the *status* **1** can be also received when the user is returned to the document with no changes after the Internet problems. This situation can be described as follows:- When the user opens a document, the *status* **1** is sent.
- If the Internet connection is lost and the user has not made any changes to the document, the *status* **4** is sent. An error is displayed on the screen and the document is opened in the viewer.
- Within 100 seconds, the Internet connection is restored, the user is reconnected to the document and the *status* **1** is sent again.
- Now the user can continue to edit the document. The *status* **2** or **4** will be received depending on whether the user made any changes to the document or not. |
| *Status* **2** (**3**) | It is received [10 seconds](/editors/save#savedelay) after the document is closed for editing with the identifier of the user who was the last to send the changes to the document editing service. The *callbackUrl* from the user who made the last changes to the file is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| *Status* **4**         | It is received after the document is closed for editing with no changes by the last user. Their *callbackUrl* is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| *Status* **6** (**7**) | It is received when the force saving request is performed.The *callbackUrl* depends on *forcesavetype* parameter:- If *forcesavetype* parameter is set to **1**, the *callbackUrl* from the user who clicked the **Save** button is used.
- If *forcesavetype* parameter is set to **0** or **2**, the *callbackUrl* from the user who made the last changes to the file is used.
- If *forcesavetype* parameter is set to **3**, the *callbackUrl* from the user who clicked the **Submit** button is used.Starting from version 5.5 to version 6.1, the *callbackUrl* from the user who made the last changes to the file is always used.                                                                                                                                                                                                                                                  |

Sample of JSON object sent to the "callbackUrl" address by document editing service when two users are co-editing the document

```
{
    "actions": [{"type": 1, "userid": "78e1e841"}],
    "key": "Khirz6zTPdfd7",
    "status": 1,
    "users": ["6d5a81d0", "78e1e841"]
}
```

Sample of JSON object sent to the "callbackUrl" address by document editing service when the user changed the document and closed it for editing

```
{
    "actions": [{"type": 0, "userid": "78e1e841"}],
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

Sample of JSON object sent to the "callbackUrl" address by document editing service when the last user closed the document for editing without changes

```
{
    "key": "Khirz6zTPdfd7",
    "status": 4
}
```

Sample of JSON object sent to the "callbackUrl" address by document editing service after the [forcesave](/editors/command/forcesave) command had been received

```
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

Response from the document storage service

The **document storage service** must return the following response, otherwise the **document editor** will display an error message:

```
{
    "error": 0
}
```

The **document manager** and **document storage service** are either included to ONLYOFFICE Workspace or must be implemented by the software integrators who use ONLYOFFICE Docs on their own server.

.Net (C#) document save example

```
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

*PATH\_FOR\_SAVE* is the absolute path to your computer folder where the file will be saved including the file name.

Java document save example

```
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

*pathForSave* is the absolute path to your computer folder where the file will be saved including the file name.

Node.js document save example

```
var fs = require("fs");
var syncRequest = require("sync-request");

app.post("/track", function (req, res) {

    var updateFile = function (response, body, path) {
        if (body.status == 2)
        {
            var file = syncRequest("GET", body.url);
            fs.writeFileSync(path, file.getBody());
        }

        response.write("{\"error\":0}");
        response.end();
    }

    var readbody = function (request, response, path) {
        var content = "";
        request.on("data", function (data) {
            content += data;
        });
        request.on("end", function () {
            var body = JSON.parse(content);
            updateFile(response, body, path);
        });
    }

    if (req.body.hasOwnProperty("status")) {
        updateFile(res, req.body, pathForSave);
    } else {
        readbody(req, res, pathForSave)
    }
});
```

*pathForSave* is the absolute path to your computer folder where the file will be saved including the file name.

PHP document save example

```
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

*$path\_for\_save* is the absolute path to your computer folder where the file will be saved including the file name.

Ruby document save example

```
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

*path\_for\_save* is the absolute path to your computer folder where the file will be saved including the file name.