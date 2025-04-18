# Room Creation with Folder Structure and Templates
This example demonstrates how to use the DocSpace JavaScript SDK to create a structured workspace for each new client. When a user adds a client, the system:
- Creates a shared room with the client"s name
- Automatically generates a set of predefined folders inside that room
- Inserts specific document templates (DOCX, XLSX, PDF) into the corresponding folders
This allows for quick onboarding of clients into a standardized workspace environment.

## Before you start
Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.  
You need to [add the URL](../../../get-started/basic-concepts.md#step-1-specifying-the-docspace-url) of your server"s root directory to the **Developer Tools** section of DocSpace.

## Full Example

```html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Client Manager</title>

    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.1/api.js"></script>

    <style>
      /* Full CSS omitted for brevity */
    </style>
  </head>

  <body>
    <!-- Step 2: Client input form -->
    <div class="container">
      <input type="text" id="clientInput" placeholder="Enter client name">
      <button id="add" disabled onclick="addClient()">Add Client</button>
    </div>

    <!-- Step 3: Client list display -->
    <ul id="clientList"></ul>

    <!-- Step 4: SDK iframe (hidden) -->
    <iframe id="ds-frame" style="display: none;"></iframe>

    <!-- Step 5: JavaScript SDK Logic -->
        <script>
      let docSpace;

      // Step 5: Template file IDs (replace with real ones)
      const templates = {
        instructions: "{PUBLIC_DOCX_ID}",
        priceList: "{PUBLIC_XLSX_ID}",
        contract: "{PUBLIC_PDF_ID}"
      };

      // Step 6: Enable Add Client button when SDK is ready
      function onAppReady() {
        document.getElementById("add").removeAttribute("disabled");
        document.getElementById("ds-frame").style.display = "none";
      }

      // Step 7: Init DocSpace SDK
      docSpace = DocSpace.SDK.initManager({
        frameId: "ds-frame",
        events: { onAppReady }
      });

      // Step 8: Add client and create room with folder structure
      async function addClient() {
        const input = document.getElementById("clientInput");
        const clientName = input.value.trim();

        if (!clientName) return;

        const list = document.getElementById("clientList");
        const li = document.createElement("li");
        li.textContent = clientName;
        list.appendChild(li);

        const room = await docSpace.createRoom(clientName, 2);
        if (room.status && room.status != 200) {
          alert(`Failed to create room: ${room.status}`);
          return;
        }

        input.value = "";
        const id = room.id;

        const instructionsFolder = await docSpace.createFolder(id, "Instructions");
        docSpace.createFile(instructionsFolder.id, "Instructions.docx", templates.instructions);

        const priceListFolder = await docSpace.createFolder(id, "Price List");
        docSpace.createFile(priceListFolder.id, "Price List.xlsx", templates.priceList);

        const contractsFolder = await docSpace.createFolder(id, "Contracts");
        docSpace.createFile(contractsFolder.id, "Contract template.pdf", templates.contract);

        docSpace.createFolder(id, "Invoices for payment");
      }

      // Step 9: Submit on Enter
      document.getElementById("clientInput").addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          addClient();
        }
      });
    </script>
  </body>
</html>
```

---

## Script Execution Steps

### 1. Define templates and initialize the SDK

```js
const templates = {
  instructions: "{PUBLIC_DOCX_ID}",
  priceList: "{PUBLIC_XLSX_ID}",
  contract: "{PUBLIC_PDF_ID}"
};

function onAppReady() {
  document.getElementById("add").removeAttribute("disabled");
  document.getElementById("ds-frame").style.display = "none";
}

docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  events: { onAppReady }
});
```

- Template IDs point to public DocSpace documents used as base templates
- The SDK is initialized and hidden (`iframe`) and activates the UI once ready

---

### 2. Add client and create room with folder structure

```js
async function addClient() {
  const input = document.getElementById("clientInput");
  const clientName = input.value.trim();

  if (!clientName) return;

  const list = document.getElementById("clientList");
  const li = document.createElement("li");
  li.textContent = clientName;
  list.appendChild(li);

  const room = await docSpace.createRoom(clientName, 2);
  if (room.status && room.status != 200) {
    alert(`Failed to create room: ${room.status}`);
    return;
  }

  input.value = "";
  const id = room.id;

  const instructionsFolder = await docSpace.createFolder(id, "Instructions");
  docSpace.createFile(instructionsFolder.id, "Instructions.docx", templates.instructions);

  const priceListFolder = await docSpace.createFolder(id, "Price List");
  docSpace.createFile(priceListFolder.id, "Price List.xlsx", templates.priceList);

  const contractsFolder = await docSpace.createFolder(id, "Contracts");
  docSpace.createFile(contractsFolder.id, "Contract template.pdf", templates.contract);

  docSpace.createFolder(id, "Invoices for payment");
}
```

- Creates a shared room for the client
- Adds four folders
- Updates the client list in the interface

---

### 3. Handle Enter key submission

```js
document.getElementById("clientInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addClient();
  }
});
```

- Allows users to press Enter to trigger room and folder creation
