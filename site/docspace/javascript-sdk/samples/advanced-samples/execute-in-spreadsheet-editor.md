# Execute in spreadsheet editor

This example opens a spreadsheet file in an editor frame, runs an automation command using the [executeInEditor](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#executeineditor) method, and then saves and closes the editor.

Complete source code on GitHub: [JavaScript](https://github.com/ONLYOFFICE/docspace-samples/blob/master/js-sdk/advanced-samples/execute-in-spreadsheet-editor.html)

## Before you start

Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.
You need to [add the URL](/docspace/javascript-sdk/get-started/get-started.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

<details>
  <summary>Full example</summary>

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <base href="{PORTAL_SRC}/" />
    <meta charset="UTF-8" />

    <meta name="example-title" content="Execute in Spreadsheet Editor" />
    <meta
      name="example-description"
      content="Pick a spreadsheet file, open it in an editor frame, run executeInEditor to write data, and save."
    />
    <meta name="example-group" content="advanced" />

    <title>Execute in Spreadsheet Editor</title>
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.1.0/api.js"></script>

    <style>
      body {
        margin: 0;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        color: #111;
      }

      .wrap {
        display: flex;
        justify-content: center;
        padding: 16px;
      }

      .frame {
        width: 900px;
        max-width: 100%;
        height: 520px;
        border: none;
        border-radius: 12px;
        box-shadow: 0 10px 18px rgba(0, 0, 0, 0.08);
      }

      .offscreen {
        position: fixed;
        left: -10000px;
        top: 0;
        width: 1px;
        height: 1px;
        border: none;
      }

      .preview {
        position: fixed;
        right: 16px;
        bottom: 74px;
        width: 520px;
        height: 320px;
        border: none;
        border-radius: 12px;
        box-shadow: 0 10px 18px rgba(0, 0, 0, 0.18);
        z-index: 10;
      }

      .panel {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 16px 16px;
      }

      label {
        display: block;
        font-size: 13px;
        color: #6b7280;
        margin: 10px 0 6px;
      }

      input,
      textarea {
        width: 100%;
        border-radius: 10px;
        border: 1px solid #d1d5db;
        padding: 10px 12px;
        font-size: 14px;
        outline: none;
        box-sizing: border-box;
      }

      textarea {
        min-height: 110px;
        resize: vertical;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
          "Courier New", monospace;
        font-size: 12px;
      }

      .muted {
        font-size: 12px;
        color: #6b7280;
      }

      .bar {
        position: sticky;
        bottom: 0;
        display: flex;
        gap: 10px;
        padding: 12px 16px;
        backdrop-filter: blur(6px);
        border-top: 1px solid rgba(0, 0, 0, 0.06);
        align-items: center;
      }

      .bar button {
        height: 36px;
        padding: 0 14px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        color: #fff;
        font-size: 14px;
      }

      .bar button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      .btn-secondary {
        color: #1f3a8a;
        border: 1px solid rgba(31, 58, 138, 0.15);
      }

      .hint {
        font-size: 13px;
        color: #6b7280;
        margin-left: auto;
      }
    </style>
  </head>

  <body class="ex-execute-in-spreadsheet-editor">
    <div class="wrap">
      <iframe id="ds-selector" class="frame"></iframe>
    </div>

    <iframe id="ds-editor" class="offscreen" title="Editor"></iframe>

    <div class="panel">
      <div class="row">
        <div class="kv">
          <div class="k">Selected</div>
          <div class="v" id="selectedTitle">None</div>
        </div>
        <div class="kv">
          <div class="k">File ID</div>
          <div class="v" id="selectedId">-</div>
        </div>
      </div>

      <div class="grid">
        <div style="grid-column: 1 / -1;">
          <label for="shareLink">Public share link (optional)</label>
          <input id="shareLink" type="text" placeholder="https://portal/s/.... (or ?share=...)" autocomplete="off" />
          <div class="muted">If provided, this sample extracts a share token and passes it as <code>requestToken</code>.</div>
        </div>
        <div>
          <label for="requestToken">requestToken (optional)</label>
          <input id="requestToken" type="text" placeholder="share token (from public link)" autocomplete="off" />
        </div>
        <div>
          <label for="autosaveDelay">Auto close delay (ms)</label>
          <input id="autosaveDelay" type="text" value="8000" autocomplete="off" />
        </div>
      </div>

      <label for="rows">Rows (JSON array of objects)</label>
      <textarea id="rows" placeholder='[{"Name":"Alice","Score":10},{"Name":"Bob","Score":20}]'></textarea>

      <div class="muted" style="margin-top: 8px;">
        Note: the editor automation below targets spreadsheet API. For best results, pick an <code>.xlsx</code> file.
      </div>
    </div>

    <div class="bar">
      <button id="pick" type="button">Pick file</button>
      <button id="run" type="button" disabled>Write &amp; Save</button>
      <button id="toggleEditor" type="button" class="btn-secondary">Show editor</button>
      <button id="reset" type="button" class="btn-secondary">Reset</button>
      <div class="hint" id="hint">Select a file</div>
    </div>

    <script>
      const hint = document.getElementById("hint");
      const pick = document.getElementById("pick");
      const run = document.getElementById("run");
      const toggleEditor = document.getElementById("toggleEditor");
      const reset = document.getElementById("reset");

      const selectedTitle = document.getElementById("selectedTitle");
      const selectedId = document.getElementById("selectedId");

      const shareLinkEl = document.getElementById("shareLink");
      const requestTokenEl = document.getElementById("requestToken");
      const autosaveDelayEl = document.getElementById("autosaveDelay");
      const rowsEl = document.getElementById("rows");

      const editorFrame = document.getElementById("ds-editor");

      let selectorInstance = null;
      let editorInstance = null;
      let selected = null; // { id, title, raw }
      let editorVisible = false;

      function setHint(v) {
        hint.textContent = v;
      }

      function extractShareToken(shareLink) {
        const raw = String(shareLink || "").trim();
        if (!raw) return "";
        try {
          const url = new URL(raw);
          const param = url.searchParams.get("share");
          if (param) return param;
          const parts = url.pathname.split("/").filter(Boolean);
          const sIndex = parts.indexOf("s");
          return sIndex >= 0 && parts[sIndex + 1] ? parts[sIndex + 1] : "";
        } catch {
          return "";
        }
      }

      function parseRows() {
        const raw = String(rowsEl.value || "").trim();
        if (!raw) return [];
        const v = JSON.parse(raw);
        if (!Array.isArray(v)) throw new Error("Rows must be a JSON array");
        return v;
      }

      function updateUi() {
        selectedTitle.textContent = selected?.title || "None";
        selectedId.textContent = selected?.id ? String(selected.id) : "-";
        run.disabled = !selected?.id;
      }

      function destroyEditor() {
        if (editorInstance && typeof editorInstance.destroyFrame === "function") {
          try {
            editorInstance.destroyFrame();
          } catch {}
        }
        editorInstance = null;
      }

      function destroySelector() {
        if (selectorInstance && typeof selectorInstance.destroyFrame === "function") {
          try {
            selectorInstance.destroyFrame();
          } catch {}
        }
        selectorInstance = null;
      }

      function openSelector() {
        destroySelector();
        setHint("Select a file...");

        selectorInstance = DocSpace.SDK.initFileSelector({
          frameId: "ds-selector",
          width: "900px",
          height: "520px",
          theme: "base",
          events: {
            onSelectCallback: (e) => {
              const item = Array.isArray(e) ? e[0] : e;
              if (!item) return;

              const id = item?.id ?? item?.fileId ?? null;
              const title = item?.title || item?.name || (id ? `File ${id}` : "File");
              selected = { id: id ? String(id) : "", title: String(title), raw: item };

              setHint("Ready");
              updateUi();
              console.log("[selector] selected:", item);
            },
            onAppError: (err) => {
              console.error("Selector error", err);
              setHint("Error");
            }
          }
        });
      }

      function buildSpreadsheetCommand(rows) {
        const payload = JSON.stringify(rows || []);
        return new Function(
          "editorInstance",
          `
            try {
              const rows = ${payload};
              const connector = editorInstance?.createConnector?.();
              if (!connector?.callCommand) {
                console.error("connector.callCommand is not available", connector);
                return;
              }

              Asc.scope.rows = rows;
              connector.callCommand(function () {
                try {
                  const data = Asc.scope.rows || [];
                  const sheet = Api.GetActiveSheet();
                  if (!sheet) return;

                  if (!data.length) {
                    sheet.GetRange("A1").SetValue("No data");
                    Api.Save();
                    return;
                  }

                  const headers = Object.keys(data[0] || {});
                  const table = [headers];
                  for (let i = 0; i < data.length; i += 1) {
                    const row = data[i] || {};
                    table.push(headers.map((h) => row[h] ?? ""));
                  }

                  const height = table.length;
                  const width = headers.length;
                  const lastColCode = "A".charCodeAt(0) + Math.max(0, width - 1);
                  const lastCol = String.fromCharCode(lastColCode);
                  const rangeRef = "A1:" + lastCol + String(height);

                  sheet.GetRange(rangeRef).SetValue(table);
                  Api.Save();
                } catch (err) {
                  console.error("Spreadsheet command failed", err);
                }
              });
            } catch (e) {
              console.error("Failed to build spreadsheet command", e);
            }
          `
        );
      }

      async function runWriteAndSave() {
        if (!selected?.id) return;

        const tokenFromLink = extractShareToken(shareLinkEl.value);
        if (tokenFromLink && !requestTokenEl.value.trim()) {
          requestTokenEl.value = tokenFromLink;
        }

        let rows;
        try {
          rows = parseRows();
        } catch (e) {
          setHint(e?.message ? String(e.message) : "Invalid JSON");
          return;
        }

        destroyEditor();
        setHint("Opening editor...");

        const requestToken = String(requestTokenEl.value || "").trim() || undefined;
        const delayMs = Number(String(autosaveDelayEl.value || "").trim() || "8000");

        editorInstance = DocSpace.SDK.initEditor({
          id: selected.id,
          frameId: "ds-editor",
          width: "1px",
          height: "1px",
          theme: "base",
          requestToken,
          events: {
            onAppReady: () => {
              setHint("Executing...");

              const frame = DocSpace?.SDK?.frames?.["ds-editor"];
              if (!frame || typeof frame.executeInEditor !== "function") {
                console.error("SDK frame.executeInEditor is not available", frame);
                setHint("executeInEditor not available");
                destroyEditor();
                return;
              }

              try {
                frame.executeInEditor(buildSpreadsheetCommand(rows));
                setHint("Command sent. Saving...");
              } catch (e) {
                console.error(e);
                setHint("Execute failed");
              }

              setTimeout(() => {
                destroyEditor();
                setHint("Done (editor closed).");
              }, Number.isFinite(delayMs) ? Math.max(500, delayMs) : 8000);
            },
            onAppError: (e) => {
              console.error("Editor error", e);
              setHint("Editor error");
              setTimeout(() => destroyEditor(), 1500);
            }
          }
        });
      }

      function toggleEditorVisibility() {
        editorVisible = !editorVisible;
        if (editorVisible) {
          editorFrame.classList.remove("offscreen");
          editorFrame.classList.add("preview");
          toggleEditor.textContent = "Hide editor";
        } else {
          editorFrame.classList.remove("preview");
          editorFrame.classList.add("offscreen");
          toggleEditor.textContent = "Show editor";
        }
      }

      function doReset() {
        destroyEditor();
        selected = null;
        shareLinkEl.value = "";
        requestTokenEl.value = "";
        rowsEl.value = '[{\"Name\":\"Alice\",\"Score\":10},{\"Name\":\"Bob\",\"Score\":20}]';
        setHint("Select a file");
        updateUi();
      }

      pick.onclick = openSelector;
      run.onclick = runWriteAndSave;
      toggleEditor.onclick = toggleEditorVisibility;
      reset.onclick = doReset;

      shareLinkEl.addEventListener("input", () => {
        const token = extractShareToken(shareLinkEl.value);
        if (token) requestTokenEl.value = token;
      });

      doReset();
      openSelector();
    </script>
  </body>
</html>
```

</details>

## Script execution steps

### 1. Set HTML structure

Create an HTML file. It must include two iframes:

- one iframe for the [file selector](/docspace/javascript-sdk/usage-sdk/classes/SDK.md#initfileselector);
- one iframe for the editor where the automation command will be executed.

``` html
<div class="wrap">
  <iframe id="ds-selector" class="frame"></iframe>
</div>

<iframe id="ds-editor" class="offscreen" title="Editor"></iframe>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/2.1.0/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

### 2. Initialize the file selector

Add a script to initialize the [file selector](/docspace/javascript-sdk/usage-sdk/classes/SDK.md#initfileselector).

1. Add an event handler for [onSelectCallback](/docspace/javascript-sdk/usage-sdk/type-aliases/TFrameEvents.md#onselectcallback). When the user selects a file, save its ID:

    ``` ts
    let selected = null

    function onSelectCallback(e) {
      const item = Array.isArray(e) ? e[0] : e
      if (!item) return
      selected = { id: String(item?.id ?? item?.fileId ?? "") }
    }
    ```

2. Create a configuration for the file selector:

    ``` ts
    const config = {
      frameId: "ds-selector",
      width: "900px",
      height: "520px",
      theme: "base",
      events: {
        onSelectCallback,
      },
    }
    ```

3. Initialize the file selector with the [initFileSelector](/docspace/javascript-sdk/usage-sdk/classes/SDK.md#initfileselector) method:

``` ts
const selectorInstance = DocSpace.SDK.initFileSelector(config)
```

### 3. Initialize an editor

Initialize the editor using the [initEditor](/docspace/javascript-sdk/usage-sdk/classes/SDK.md#initeditor) method and render it into the editor iframe (using `frameId`).
Initialize the editor only after you have the selected file ID (for example, after the user picks a file in the selector and clicks **Write & Save**).

1. (Optional) Pass a public share token using the [requestToken](/docspace/javascript-sdk/usage-sdk/type-aliases/TFrameConfig.md#requesttoken) field.
2. Add an event handler for [onAppReady](/docspace/javascript-sdk/usage-sdk/type-aliases/TFrameEvents.md#onappready), which fires when the editor is initialized.

``` ts
function onAppError(e) {
  console.error(e)
}

function openEditor(requestToken) {
  if (!selected?.id) return

  const editorConfig = {
    id: selected.id,
    frameId: "ds-editor",
    width: "1px",
    height: "1px",
    requestToken, // optional (share token)
    events: {
      onAppReady,
      onAppError,
    },
  }

  const editorInstance = DocSpace.SDK.initEditor(editorConfig)
  return editorInstance
}
```

### 4. Execute an editor command and save the result

When the editor is ready, execute your automation using the [executeInEditor](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#executeineditor) method.

In this example, we pass the input rows and write them to the active spreadsheet sheet using the editor API, then call **Save**:

``` ts
function onAppReady() {
  const frame = DocSpace?.SDK?.frames?.["ds-editor"]
  if (!frame || typeof frame.executeInEditor !== "function") return

  if (!selected?.id) return
  const rows = [{ Name: "Alice", Score: 10 }, { Name: "Bob", Score: 20 }]
  if (!Array.isArray(rows)) return

  frame.executeInEditor((editorInstance, data) => {
    try {
      const connector = editorInstance?.createConnector?.()
      if (!connector?.callCommand) return

      Asc.scope.rows = Array.isArray(data?.rows) ? data.rows : []

      connector.callCommand(function () {
        const sheet = Api.GetActiveSheet()
        if (!sheet) return

        sheet.GetRange("A1").SetValue("Updated by executeInEditor")
        Api.Save()
      })
    } catch (e) {
      console.error(e)
    }
  }, { rows })
}
```

### 5. Close the editor

After the command is sent, close the editor using the [destroyFrame](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#destroyframe) method.
As the command execution and saving are asynchronous, close the iframe with a small delay:

``` ts
setTimeout(() => editorInstance?.destroyFrame?.(), 8000)
```

### 6. Run the sample

Run the HTML file and make sure everything works.
