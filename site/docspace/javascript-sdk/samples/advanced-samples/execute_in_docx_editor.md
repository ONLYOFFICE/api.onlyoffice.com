# Execute in DOCX editor

This example opens a **.docx** file in an editor frame, runs an automation command using the [executeInEditor](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#executeineditor) method, and then saves and closes the editor.

Complete source code on GitHub: [JavaScript](https://github.com/ONLYOFFICE/docspace-samples/blob/master/js-sdk/advanced-samples/execute-in-docx-editor.html)

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

    <meta name="example-title" content="Execute in DOCX Editor" />
    <meta
      name="example-description"
      content="Pick a .docx file, open it in an editor frame, run executeInEditor to insert text, and save."
    />
    <meta name="example-group" content="advanced" />

    <title>Execute in DOCX Editor</title>
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

      .row {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
      }

      .kv {
        flex: 1 1 260px;
        padding: 10px 12px;
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 12px;
      }

      .k {
        font-size: 12px;
        color: #6b7280;
        margin-bottom: 4px;
      }

      .v {
        font-size: 14px;
      }

      .grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
        margin-top: 10px;
      }

      label {
        display: block;
        font-size: 13px;
        color: #6b7280;
        margin: 10px 0 6px;
      }

      input,
      textarea,
      select {
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

  <body class="ex-execute-in-docx-editor">
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
        <div>
          <label for="mode">Mode</label>
          <select id="mode">
            <option value="append">Append paragraphs</option>
            <option value="replace">Replace document (best effort)</option>
          </select>
        </div>
      </div>

      <label for="text">Text (each line becomes a paragraph)</label>
      <textarea id="text" placeholder="Hello from executeInEditor!"></textarea>

      <div class="muted" style="margin-top: 8px;">
        Note: the automation below targets the text document API. For best results, pick a <code>.docx</code> file.
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

      const modeEl = document.getElementById("mode");
      const textEl = document.getElementById("text");

      const editorFrame = document.getElementById("ds-editor");

      let selectorInstance = null;
      let editorInstance = null;
      let selected = null; // { id, title, raw }
      let editorVisible = false;
      const AUTO_CLOSE_DELAY_MS = 8000;

      function setHint(v) {
        hint.textContent = v;
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

      function buildDocxCommand(text, mode) {
        const payloadText = JSON.stringify(String(text || ""));
        const payloadMode = JSON.stringify(String(mode || "append"));

        return new Function(
          "editorInstance",
          `
            try {
              const text = ${payloadText};
              const mode = ${payloadMode};
              const connector = editorInstance?.createConnector?.();
              if (!connector?.callCommand) {
                console.error("connector.callCommand is not available", connector);
                return;
              }

              Asc.scope.text = text;
              Asc.scope.mode = mode;

              connector.callCommand(function () {
                try {
                  const doc = Api.GetDocument && Api.GetDocument();
                  if (!doc) {
                    console.error("Api.GetDocument is not available (not a text document editor).");
                    return;
                  }

                  const mode = String(Asc.scope.mode || "append").toLowerCase();
                  const raw = String(Asc.scope.text || "");
                  const normalized = raw.replace(/\\r\\n/g, "\\n");
                  const lines = normalized.split("\\n");

                  function pushParagraph(line) {
                    const p = Api.CreateParagraph();
                    p.AddText(line);
                    if (typeof doc.Push === "function") {
                      doc.Push(p);
                    } else if (typeof doc.InsertContent === "function") {
                      doc.InsertContent([p], true);
                    }
                  }

                  if (mode === "replace") {
                    if (typeof doc.RemoveAllElements === "function") {
                      doc.RemoveAllElements();
                    } else if (typeof doc.GetElement === "function") {
                      const first = doc.GetElement(0);
                      if (first && typeof first.RemoveAllElements === "function") first.RemoveAllElements();
                    }
                  }

                  const hasAny = lines.some((l) => String(l).trim() !== "");
                  if (!hasAny) {
                    pushParagraph("No text");
                    Api.Save();
                    return;
                  }

                  for (let i = 0; i < lines.length; i += 1) {
                    pushParagraph(String(lines[i] ?? ""));
                  }
                  Api.Save();
                } catch (err) {
                  console.error("DOCX command failed", err);
                }
              });
            } catch (e) {
              console.error("Failed to build DOCX command", e);
            }
          `
        );
      }

      async function runWriteAndSave() {
        if (!selected?.id) return;

        const text = String(textEl.value || "");
        const mode = String(modeEl.value || "append");

        destroyEditor();
        setHint("Opening editor...");

        editorInstance = DocSpace.SDK.initEditor({
          id: selected.id,
          frameId: "ds-editor",
          width: "1px",
          height: "1px",
          theme: "base",
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
                frame.executeInEditor(buildDocxCommand(text, mode));
                setHint("Command sent. Saving...");
              } catch (e) {
                console.error(e);
                setHint("Execute failed");
              }

              setTimeout(() => {
                destroyEditor();
                setHint("Done (editor closed).");
              }, AUTO_CLOSE_DELAY_MS);
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
        modeEl.value = "append";
        textEl.value = "Hello from executeInEditor!\nThis paragraph was added by automation.";
        setHint("Select a file");
        updateUi();
      }

      pick.onclick = openSelector;
      run.onclick = runWriteAndSave;
      toggleEditor.onclick = toggleEditorVisibility;
      reset.onclick = doReset;

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
<iframe id="ds-selector"></iframe>
<iframe id="ds-editor"></iframe>
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
    
    const selectorInstance = DocSpace.SDK.initFileSelector(config)
    ```

### 3. Initialize an editor

Initialize the editor using the [initEditor](/docspace/javascript-sdk/usage-sdk/classes/SDK.md#initeditor) method and render it into the editor iframe (using `frameId`).
Initialize the editor only after you have the selected file ID (for example, after the user picks a file in the selector and clicks **Write & Save**).

1. Add an event handler for [onAppReady](/docspace/javascript-sdk/usage-sdk/type-aliases/TFrameEvents.md#onappready).
2. Add an event handler for [onAppError](/docspace/javascript-sdk/usage-sdk/type-aliases/TFrameEvents.md#onapperror).

``` ts
function onAppReady() {
  // executeInEditor will be called here
}

function onAppError(e) {
  console.error(e)
}

let editorInstance = null

function openEditor() {
  if (!selected?.id) return

  const editorConfig = {
    id: selected.id,
    frameId: "ds-editor",
    width: "1px",
    height: "1px",
    events: {
      onAppReady,
      onAppError,
    },
  }

  editorInstance = DocSpace.SDK.initEditor(editorConfig)
  return editorInstance
}
```

### 4. Execute a command in the DOCX editor

When the editor is ready, execute your automation using the [executeInEditor](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#executeineditor) method.

In this example, we:

- split input text by lines;
- insert each line as a separate paragraph;
- call **Save**.

``` ts
function onAppReady() {
  const frame = DocSpace?.SDK?.frames?.["ds-editor"]
  if (!frame || typeof frame.executeInEditor !== "function") return

  const text = "Hello from executeInEditor!\nSecond paragraph"
  const mode = "append"

  frame.executeInEditor((editorInstance, data) => {
    try {
      const connector = editorInstance?.createConnector?.()
      if (!connector?.callCommand) return

      Asc.scope.text = String(data?.text || "")
      Asc.scope.mode = String(data?.mode || "append")

      connector.callCommand(function () {
        const doc = Api.GetDocument && Api.GetDocument()
        if (!doc) return

        const raw = String(Asc.scope.text || "")
        const normalized = raw.replace(/\\r\\n/g, "\\n")
        const lines = normalized.split("\\n")

        for (let i = 0; i < lines.length; i += 1) {
          const p = Api.CreateParagraph()
          p.AddText(String(lines[i] ?? ""))
          if (typeof doc.Push === "function") doc.Push(p)
        }

        Api.Save()
      })
    } catch (e) {
      console.error(e)
    }
  }, { text, mode })
}
```

### 5. Close the editor

After the command is sent, close the editor using the [destroyFrame](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#destroyframe) method.
As the command execution and saving are asynchronous, close the iframe with a small delay:

``` ts
const closeDelayMs = 8000
setTimeout(() => {
  editorInstance?.destroyFrame?.()
}, closeDelayMs)
```

### 6. Run the sample

Run the HTML file and make sure everything works.

:::note
This sample uses the text document editor API. For best results, pick a **.docx** file.
:::
