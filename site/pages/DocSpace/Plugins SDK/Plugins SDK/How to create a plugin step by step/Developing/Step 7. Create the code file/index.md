Create a file in the *src* folder with the main plugin code. This file is required.

Refer to the documentation of a third-party service to write this code.

Let's see how the [AssemblyAI.ts](https://github.com/ONLYOFFICE/docspace-plugins/blob/master/speech-to-text/src/AssemblyAI.ts) file is organized in detail:

1. Define the *AssemblyAI* class with all the necessary variables and methods:

   ## Variables and their description:

   * **apiURL** - defines the API URL.

     ```
     apiURL = "";
     ```

   * **currentFileId** - defines the current file ID.

     ```
     currentFileId: null | number = null;
     ```

   * **apiToken** - defines the API token.

     ```
     apiToken = "";
     ```

   ## Methods and their description:

   * **createAPIUrl** - creates the API URL.

     ```
     createAPIUrl = () => {
         const api = plugin.getAPI();

         this.apiURL = api.origin.replace(/\/+$/, "");

         const params = [api.proxy, api.prefix];

         if (this.apiURL) {
             params.forEach((part) => {
                 if (!part) return;
                 const newPart = part.trim().replace(/^\/+/, "");
                 this.apiURL += newPart
                     ? this.apiURL.length > 0 &&
                         this.apiURL[this.apiURL.length - 1] === "/"
                         ? newPart
                         : `/${newPart}`
                     : "";
             });
         }
     }
     ```

   * **setAPIUrl** - sets the API URL.

     ```
     setAPIUrl = (url: string) => {
         this.apiURL = url;
     };
     ```

   * **getAPIUrl** - retuns the API URL.

     ```
     getAPIUrl = () => {
         return this.apiURL;
     };
     ```

   * **setAPIToken** - sets the API token.

     ```
     setAPIToken = (apiToken: string) => {
         this.apiToken = apiToken;
     };
     ```

   * **getAPIToken** - returns the API token.

     ```
     getAPIToken = () => {
         return this.apiToken;
     };
     ```

   * **fetchAPIToken** - fetches the API token.

     ```
     fetchAPIToken = async () => {
         const apiToken = localStorage.getItem("speech-to-text-api-token");

         if (!apiToken) return;

         this.setAPIToken(apiToken);
         plugin.updateStatus(PluginStatus.active);
     };
     ```

   * **saveAPIToken** - saves the API token.

     ```
     saveAPIToken = (apiToken: string) => {
         localStorage.setItem("speech-to-text-api-token", apiToken);

         plugin.updateStatus(!!apiToken ? PluginStatus.active : PluginStatus.hide);
     };
     ```

   * **setCurrentFileId** - sets the ID to the current file.

     ```
     setCurrentFileId = (id: number | null) => {
         this.currentFileId = id;
     };
     ```

   * **uploadFile** - uploads a file which will be transcribed.

     ```
     uploadFile = async (api_token: string, path: string, data: Blob) => {
         console.log(`Uploading file: ${path}`);

         const url = "https://api.assemblyai.com/v2/upload";

         try {
             const response = await fetch(url, {
                 method: "POST",
                 body: data,
                 headers: {
                     "Content-Type": "application/octet-stream",
                     Authorization: api_token,
                 },
             });

             if (response.status === 200) {
                 const responseData = await response.json();
                 return responseData["upload_url"];
             } else {
                 console.error(`Error: ${response.status} - ${response.statusText}`);
                 return null;
             }
         } catch (error) {
             console.error(`Error: ${error}`);
             return null;
         }
     };
     ```

   * **transcribeAudio** - transcribes the audio file.

     ```
     transcribeAudio = async (api_token: string, audio_url: string) => {
         console.log("Transcribing audio... This might take a moment.");

         const headers = {
             authorization: api_token,
             "content-type": "application/json",
         };

         const response = await fetch("https://api.assemblyai.com/v2/transcript", {
             method: "POST",
             body: JSON.stringify({ audio_url }),
             headers,
         });

         const responseData = await response.json();
         const transcriptId = responseData.id;

         const pollingEndpoint = `https://api.assemblyai.com/v2/transcript/${transcriptId}`;

         while (true) {
             const pollingResponse = await fetch(pollingEndpoint, { headers });
             const transcriptionResult = await pollingResponse.json();

             if (transcriptionResult.status === "completed") {
                 return transcriptionResult;
             }
             else if (transcriptionResult.status === "error") {
                 throw new Error(`Transcription failed: ${transcriptionResult.error}`);
             }
             else {
                 await new Promise((resolve) => setTimeout(resolve, 3000));
             }
         }
     };
     ```

   * **speechToText** - implements the plugin work.

     ```
     speechToText = async (id: number) => {
         if (!this.apiToken) return;

         this.setCurrentFileId(null);

         if (!this.apiURL) this.createAPIUrl();

         const { viewUrl, title, folderId, fileExst } = (
             await (await fetch(`${this.apiURL}/files/file/${id}`)).json()
         ).response;

         const file = await fetch(viewUrl);

         const fileBlob = await file.blob();

         const upload_url = await this.uploadFile(this.apiToken, viewUrl, fileBlob);

         const transcript = await this.transcribeAudio(this.apiToken, upload_url);

         const blob = new Blob([transcript.text], {
             type: "text/plain;charset=UTF-8",
         });

         const newFile = new File([blob], `blob`, {
             type: "",
             lastModified: new Date().getTime(),
         });

         const formData = new FormData();
         formData.append("file", newFile);

         const newTitle = `${title.replaceAll(fileExst, "")} text`;

         try {
             const sessionRes = await fetch(
                 `${this.apiURL}/files/${folderId}/upload/create_session`,
                 {
                     method: "POST",
                     headers: {
                         "Content-Type": "application/json;charset=utf-8",
                     },
                     body: JSON.stringify({
                         createOn: new Date(),
                         fileName: `${newTitle}.txt`,
                         fileSize: newFile.size,
                         relativePath: "",
                     }),
                 }
             );

             const sessionData = (await sessionRes.json()).response.data;

             const data = await fetch(`${sessionData.location}`, {
                 method: "POST",
                 body: formData,
             });

             const { id: fileId } = (await data.json()).data;

             return fileId;
         } catch (e) {
             console.log(e);
         }

         return {
             actions: [Actions.showToast],
             toastProps: [{ type: ToastType.success, title: "" }],
         } as IMessage;
     };
     ```

2. Declare the *AssemblyAI* class instance:

   ```
   const assemblyAI = new AssemblyAI();
   ```

3. Export the created plugin instance:

   ```
   export default assemblyAI;
   ```
