# Build PPTX presentation

This example creates a new PPTX file and generates a 3‑slide deck using the [executeInEditor](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#executeineditor) method.

Complete source code on GitHub: [JavaScript](https://github.com/ONLYOFFICE/docspace-samples/blob/master/js-sdk/advanced-samples/pptx-build-presentation.html)

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

    <meta name="example-title" content="Build PPTX Presentation" />
    <meta
      name="example-description"
      content="Create a new PPTX file and programmatically build a 3-slide deck using executeInEditor."
    />
    <meta name="example-group" content="advanced" />

    <title>Build PPTX Presentation</title>
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.1.0/api.js"></script>

    <script>
      (function () {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = new URL("../assets/css/style.css", window.location.href).toString();
        document.head.appendChild(link);
      })();
    </script>
  </head>

  <body class="ex-batch-fill-from-template-pdf">
    <div class="panel" style="margin-bottom: 12px;">
      <details open>
        <summary><b>How to use</b></summary>
        <ol class="muted" style="margin: 10px 0 0 18px; line-height: 1.5;">
          <li>Select a destination folder in the picker.</li>
          <li>Click <b>Use selected folder</b>.</li>
          <li>Set a file name ending with <code>.pptx</code>.</li>
          <li>Click <b>Create deck</b>.</li>
        </ol>
      </details>
    </div>

    <div class="wrap">
      <iframe id="ds-destination-picker" class="frame" title="Destination picker"></iframe>
    </div>

    <iframe id="ds-manager-frame" class="hidden-frame" title="Manager frame"></iframe>
    <iframe id="ds-editor-frame" class="hidden-frame" title="Editor frame"></iframe>

    <div class="panel">
      <div class="row">
        <div class="kv">
          <div class="k">Destination folderId</div>
          <div class="v" id="destFolderId">None</div>
        </div>
        <div class="kv">
          <div class="k">Manager</div>
          <div class="v" id="managerState">Loading...</div>
        </div>
      </div>

      <div class="grid">
        <div>
          <label for="fileName">Deck file name</label>
          <input id="fileName" type="text" value="New_Deck.pptx" autocomplete="off" />
          <div class="muted">Must end with <code>.pptx</code>.</div>
        </div>
        <div>
          <label>Actions</label>
          <div class="actions-row" style="margin-top: 6px;">
            <button id="useDest" type="button" class="btn-secondary">Use selected folder</button>
            <button id="create" type="button" disabled>Create deck</button>
            <button id="toggleEditor" type="button" class="btn-secondary">Show editor</button>
          </div>
          <div class="hint" id="hint" style="margin-top: 10px;">Select a folder</div>
        </div>
      </div>

      <div class="cols" style="margin-top: 14px;">
        <div class="box">
          <h3>Log</h3>
          <textarea id="log" readonly placeholder="Progress log..."></textarea>
        </div>
      </div>
    </div>

    <script>
      const destFolderIdEl = document.getElementById("destFolderId");
      const managerStateEl = document.getElementById("managerState");
      const fileNameEl = document.getElementById("fileName");
      const useDestBtn = document.getElementById("useDest");
      const createBtn = document.getElementById("create");
      const toggleEditorBtn = document.getElementById("toggleEditor");
      const hintEl = document.getElementById("hint");
      const logEl = document.getElementById("log");
      const editorFrame = document.getElementById("ds-editor-frame");

      let manager = null;
      let picker = null;
      let editorInstance = null;
      let managerReady = false;
      let destFolderId = "";
      let editorVisible = false;

      function setHint(v) {
        hintEl.textContent = String(v ?? "");
      }

      function logLine(v) {
        const line = String(v ?? "");
        logEl.value = (logEl.value ? logEl.value + "\n" : "") + line;
        logEl.scrollTop = logEl.scrollHeight;
      }

      function destroyEditor() {
        if (editorInstance && typeof editorInstance.destroyFrame === "function") {
          try {
            editorInstance.destroyFrame();
          } catch {}
        }
        editorInstance = null;
      }

      function toggleEditorVisibility() {
        editorVisible = !editorVisible;
        if (editorVisible) {
          editorFrame.classList.remove("hidden-frame");
          editorFrame.classList.add("visible-hidden-frame");
          toggleEditorBtn.textContent = "Hide editor";
        } else {
          editorFrame.classList.remove("visible-hidden-frame");
          editorFrame.classList.add("hidden-frame");
          toggleEditorBtn.textContent = "Show editor";
        }
      }

      function updateUi() {
        destFolderIdEl.textContent = destFolderId || "None";
        const nameOk = String(fileNameEl.value || "").trim().toLowerCase().endsWith(".pptx");
        createBtn.disabled = !managerReady || !destFolderId || !nameOk;
      }

      function getCreatedFileId(res) {
        const id = res?.id ?? res?.fileId ?? res?.entryId ?? res?.documentId ?? "";
        return id ? String(id).trim() : "";
      }

      function buildDeckCommand() {
        return new Function(
          "editorInstance",
          `
            try {
              const connector = editorInstance?.createConnector?.();
              if (!connector?.callCommand) return;

              connector.callCommand(function () {
                try {
                  const presentation = Api.GetPresentation();
                  if (!presentation) return;

                  function addSlideWithTitle(title, bg) {
                    let slide = null;
                    if (typeof Api.CreateSlide === "function" && typeof presentation.AddSlide === "function") {
                      slide = Api.CreateSlide();
                      presentation.AddSlide(slide);
                    } else if (typeof presentation.GetSlideByIndex === "function") {
                      slide = presentation.GetSlideByIndex(0);
                    }
                    if (!slide) return;

                    if (typeof slide.RemoveAllObjects === "function") slide.RemoveAllObjects();
                    if (typeof slide.SetBackground === "function") {
                      const fill = Api.CreateSolidFill(Api.CreateRGBColor(bg[0], bg[1], bg[2]));
                      slide.SetBackground(fill);
                    }

                    const shape = Api.CreateShape(
                      "rect",
                      7000000,
                      1200000,
                      Api.CreateNoFill(),
                      Api.CreateStroke(0, Api.CreateNoFill())
                    );
                    shape.SetPosition(900000, 900000);
                    const content = shape.GetDocContent();
                    content.RemoveAllElements();

                    const paragraph = Api.CreateParagraph();
                    paragraph.SetSpacingBefore(0);
                    paragraph.SetSpacingAfter(0);
                    paragraph.SetJc("left");
                    content.Push(paragraph);

                    const run = paragraph.AddText(title);
                    run.SetFill(Api.CreateSolidFill(Api.CreateRGBColor(0xff, 0xff, 0xff)));
                    run.SetFontSize(64);
                    run.SetFontFamily("Georgia");
                    run.SetBold(true);

                    slide.AddObject(shape);
                  }

                  addSlideWithTitle("Project Overview", [36, 54, 74]);
                  addSlideWithTitle("Milestones", [48, 70, 86]);
                  addSlideWithTitle("Next Steps", [60, 86, 102]);

                  Api.Save();
                } catch {}
              });
            } catch {}
          `
        );
      }

      async function buildDeck(fileId) {
        destroyEditor();
        return new Promise((resolve, reject) => {
          let done = false;
          const finish = (err) => {
            if (done) return;
            done = true;
            try {
              destroyEditor();
            } catch {}
            if (err) reject(err);
            else resolve();
          };

          const t = setTimeout(() => finish(new Error("Editor timeout")), 30000);

          editorInstance = DocSpace.SDK.initEditor({
            frameId: "ds-editor-frame",
            id: String(fileId),
            width: editorVisible ? "900px" : "1px",
            height: editorVisible ? "520px" : "1px",
            theme: "base",
            events: {
              onAppReady: () => {
                logLine("Editor ready");
                const frame = DocSpace?.SDK?.frames?.["ds-editor-frame"];
                if (!frame || typeof frame.executeInEditor !== "function") {
                  clearTimeout(t);
                  finish(new Error("executeInEditor not available"));
                  return;
                }
                try {
                  frame.executeInEditor(buildDeckCommand());
                } catch (e) {
                  clearTimeout(t);
                  finish(e);
                  return;
                }
                setTimeout(() => {
                  clearTimeout(t);
                  finish();
                }, 6500);
              },
              onAppError: (e) => {
                clearTimeout(t);
                finish(e || new Error("Editor error"));
              }
            }
          });
        });
      }

      function initHiddenManager() {
        managerReady = false;
        managerStateEl.textContent = "Loading...";

        manager = DocSpace.SDK.initManager({
          frameId: "ds-manager-frame",
          width: "0",
          height: "0",
          theme: "base",
          events: {
            onAppReady: () => {
              managerReady = true;
              managerStateEl.textContent = "Ready";
              updateUi();
            },
            onAppError: () => {
              managerReady = false;
              managerStateEl.textContent = "Error";
              setHint("Manager error");
              updateUi();
            }
          }
        });
      }

      function initDestinationPicker() {
        picker = DocSpace.SDK.initManager({
          frameId: "ds-destination-picker",
          width: "900px",
          height: "520px",
          theme: "base",
          selectorType: "folder"
        });
      }

      useDestBtn.onclick = async () => {
        if (!picker || typeof picker.getSelection !== "function") return;
        try {
          const sel = await picker.getSelection();
          const item = Array.isArray(sel) ? sel[0] : sel;
          const id = item?.folderId ?? item?.id ?? null;
          if (!id) throw new Error("No folder selected");
          destFolderId = String(id);
          setHint("Destination selected");
          updateUi();
        } catch {
          setHint("Select a folder in the picker");
        }
      };

      fileNameEl.addEventListener("input", updateUi);

      createBtn.onclick = async () => {
        logLine("---");
        logLine("Run: " + new Date().toISOString());

        const fileName = String(fileNameEl.value || "").trim();
        if (!fileName.toLowerCase().endsWith(".pptx")) {
          setHint("File name must end with .pptx");
          return;
        }
        if (!destFolderId) {
          setHint("Select destination folder");
          return;
        }

        setHint("Creating .pptx...");
        createBtn.disabled = true;
        try {
          const res = await manager.createFile(String(destFolderId), fileName);
          const createdId = getCreatedFileId(res);
          if (!createdId) throw new Error("Created file id not found in response");
          logLine("Created: " + fileName + " (" + createdId + ")");

          setHint("Building slides...");
          await buildDeck(createdId);
          logLine("OK");
          setHint("Done");
        } catch (e) {
          logLine("ERROR: " + String(e?.message || e));
          setHint("Error");
        } finally {
          updateUi();
        }
      };

      toggleEditorBtn.onclick = toggleEditorVisibility;

      initHiddenManager();
      initDestinationPicker();
      updateUi();
    </script>
  </body>
</html>
```

</details>

## Script execution steps

### 1. Set HTML structure

Create an HTML file. It must include:

- a folder selector iframe;
- a hidden manager iframe (for creating the file);
- a hidden editor iframe (for building slides).

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.1.0/api.js"></script>
  </head>
  <body>
    <iframe id="ds-destination-picker"></iframe>
    <iframe id="ds-manager-frame"></iframe>
    <iframe id="ds-editor-frame"></iframe>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/2.1.0/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

### 2. Initialize Manager and folder picker

Add a script to initialize the [Manager](/docspace/javascript-sdk/usage-sdk/classes/SDK.md#initmanager) and the folder picker using **Manager** with `selectorType: "folder"`.

1. Initialize the hidden **Manager** (for file creation):

    ``` ts
    manager = DocSpace.SDK.initManager({
      frameId: "ds-manager-frame",
      width: "0",
      height: "0",
      events: {
        onAppReady: () => {
          managerReady = true
        },
      },
    })
    ```

2. Initialize the destination picker:

    ``` ts
    picker = DocSpace.SDK.initManager({
      frameId: "ds-destination-picker",
      width: "900px",
      height: "520px",
      selectorType: "folder",
    })
    ```

### 3. Create a PPTX file

Create a new PPTX file in the selected folder using [createFile](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#createfile):

``` ts
const res = await manager.createFile(destFolderId, fileName)
const createdId = res?.id ?? res?.fileId
```

### 4. Build slides with executeInEditor

Open the created file in the editor and build slides using [executeInEditor](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#executeineditor):

``` ts
await buildDeck(createdId)
```

### 5. Run the sample

Run the HTML file and make sure everything works.

