# Batch fill from PDF template

This example fills a PDF template for a list of people and creates one PDF per person in the same folder using the [executeInEditor](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#executeineditor) method.

Complete source code on GitHub: [JavaScript](https://github.com/ONLYOFFICE/docspace-samples/blob/master/js-sdk/advanced-samples/batch-fill-from-template-pdf.html)

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

    <meta name="example-title" content="Batch Fill From PDF Template" />
    <meta
      name="example-description"
      content="Pick a PDF template + JSON array of people, then create a filled PDF per person in the same folder."
    />
    <meta name="example-group" content="advanced" />

    <title>Batch Fill From PDF Template</title>
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
          <li>Select a <b>fillable PDF</b> in the selector.</li>
          <li>Paste people as a <b>JSON array</b> (keys = PDF field <b>FormKey</b>).</li>
          <li>Click <b>Create &amp; Fill All</b>.</li>
        </ol>
        <div class="muted" style="margin-top: 8px;">
          Optional: add <code>_fileName</code> per person to override the output file name.
        </div>
      </details>
    </div>

    <div class="wrap">
      <iframe id="ds-template-selector" class="frame" title="Template selector"></iframe>
    </div>

    <iframe id="ds-manager-frame" class="hidden-frame" title="Manager frame"></iframe>
    <iframe id="ds-editor-frame" class="hidden-frame" title="Editor frame"></iframe>

    <div class="panel">
      <div class="row">
        <div class="kv">
          <div class="k">Template</div>
          <div class="v" id="templateTitle">None</div>
        </div>
        <div class="kv">
          <div class="k">Template ID</div>
          <div class="v" id="templateId">-</div>
        </div>
      </div>

      <div class="row">
        <div class="kv">
          <div class="k">Destination folderId</div>
          <div class="v" id="destFolderId">-</div>
        </div>
        <div class="kv">
          <div class="k">Manager</div>
          <div class="v" id="managerState">Loading...</div>
        </div>
      </div>

      <div class="grid">
        <div>
          <label for="folderIdInput">Destination folderId (optional)</label>
          <input id="folderIdInput" type="text" placeholder="(empty = template folder)" autocomplete="off" />
          <div class="muted">If empty, files are created in the template folder.</div>
        </div>
        <div>
          <label for="namePattern">Output name pattern</label>
          <input id="namePattern" type="text" value="{LastName}_{FirstName}.pdf" autocomplete="off" />
          <div class="muted">Placeholders use keys from each person object.</div>
        </div>
        <div>
          <label>Actions</label>
          <div class="actions-row" style="margin-top: 6px;">
            <button id="run" type="button" disabled>Create &amp; Fill All</button>
            <button id="stop" type="button" class="btn-secondary" disabled>Stop</button>
            <button id="toggleEditor" type="button" class="btn-secondary">Show editor</button>
          </div>
          <div class="hint" id="hint" style="margin-top: 10px;">Pick template PDF</div>
        </div>
      </div>

      <label for="people">People (JSON array; keys = PDF FormKey)</label>
      <textarea id="people" placeholder='[{"FirstName":"Alice","LastName":"Smith"}]'></textarea>

      <div class="cols" style="margin-top: 14px;">
        <div class="box">
          <h3>Log</h3>
          <textarea id="log" readonly placeholder="Progress log..."></textarea>
        </div>
      </div>
    </div>

    <script>
      const templateTitleEl = document.getElementById("templateTitle");
      const templateIdEl = document.getElementById("templateId");
      const destFolderIdEl = document.getElementById("destFolderId");
      const managerStateEl = document.getElementById("managerState");

      const folderIdInputEl = document.getElementById("folderIdInput");
      const namePatternEl = document.getElementById("namePattern");
      const peopleEl = document.getElementById("people");

      const runBtn = document.getElementById("run");
      const stopBtn = document.getElementById("stop");
      const toggleEditorBtn = document.getElementById("toggleEditor");
      const hintEl = document.getElementById("hint");
      const logEl = document.getElementById("log");

      const editorFrame = document.getElementById("ds-editor-frame");

      const ALLOWED_EXTS = new Set([".pdf"]);

      let selector = null;
      let manager = null;
      let editorInstance = null;

      let template = null; // { id, title, ext, folderId }
      let managerReady = false;

      let running = false;
      let abortRequested = false;
      let editorVisible = false;

      function setHint(v) {
        hintEl.textContent = String(v ?? "");
      }

      function logLine(v) {
        const line = String(v ?? "");
        logEl.value = (logEl.value ? logEl.value + "\n" : "") + line;
        logEl.scrollTop = logEl.scrollHeight;
      }

      function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

      function destroyEditor() {
        if (editorInstance && typeof editorInstance.destroyFrame === "function") {
          try {
            editorInstance.destroyFrame();
          } catch {}
        }
        editorInstance = null;
      }

      function getTitle(item) {
        return String(item?.title || item?.name || "File").trim();
      }

      function getExt(item) {
        const ext = String(item?.fileExst || item?.extension || item?.ext || "").trim();
        return ext ? ext.toLowerCase() : "";
      }

      function ensurePdfExtension(name) {
        const n = String(name || "").trim();
        if (!n) return "file.pdf";
        return n.toLowerCase().endsWith(".pdf") ? n : n + ".pdf";
      }

      function resolvePattern(pattern, values) {
        const p = String(pattern || "").trim();
        if (!p) return "file.pdf";

        let out = "";
        for (let i = 0; i < p.length; i += 1) {
          const ch = p[i];
          if (ch !== "{") {
            out += ch;
            continue;
          }
          const j = p.indexOf("}", i + 1);
          if (j === -1) {
            out += ch;
            continue;
          }
          const key = p.slice(i + 1, j).trim();
          const has = values && Object.prototype.hasOwnProperty.call(values, key);
          const v = has ? values[key] : "";
          if (v !== null && v !== undefined) out += String(v);
          i = j;
        }
        return out;
      }

      function parsePeople() {
        const raw = String(peopleEl.value || "").trim();
        if (!raw) return [];
        const v = JSON.parse(raw);
        if (!Array.isArray(v)) throw new Error("People must be a JSON array");
        return v;
      }

      function getCreatedFileId(res) {
        const id = res?.id ?? res?.fileId ?? res?.entryId ?? res?.documentId ?? "";
        return id ? String(id).trim() : "";
      }

      function toFillMap(person) {
        const map = {};
        if (!person || typeof person !== "object") return map;
        for (const k of Object.keys(person)) {
          if (k.startsWith("_")) continue;
          const v = person[k];
          if (v === "" || v === null || v === undefined) continue;
          map[String(k)] = v;
        }
        return map;
      }

      function buildPdfFillCommand(map) {
        const payload = JSON.stringify(map || {});
        return new Function(
          "editorInstance",
          `
            try {
              const map = ${payload};
              const connector = editorInstance?.createConnector?.();
              if (!connector?.callCommand) return;

              function toBool(v) {
                if (typeof v === "boolean") return v;
                const s = String(v ?? "").trim().toLowerCase();
                return s === "true" || s === "1" || s === "yes" || s === "y" || s === "on";
              }

              Asc.scope.map = map;

              connector.callCommand(function () {
                try {
                  const doc = Api.GetDocument && Api.GetDocument();
                  if (!doc || typeof doc.GetAllForms !== "function") return;

                  const forms = doc.GetAllForms() || [];
                  const map = Asc.scope.map || {};
                  const keys = Object.keys(map);

                  for (let i = 0; i < keys.length; i += 1) {
                    const key = String(keys[i]);
                    const value = map[key];

                    for (let j = 0; j < forms.length; j += 1) {
                      const form = forms[j];
                      if (!form || typeof form.GetFormKey !== "function") continue;
                      if (String(form.GetFormKey()) !== key) continue;

                      const type = String((typeof form.GetFormType === "function" && form.GetFormType()) || "");
                      if (type === "checkBoxForm" && typeof form.SetChecked === "function") {
                        form.SetChecked(toBool(value));
                      } else if (type === "dateForm" && typeof form.SetDate === "function") {
                        form.SetDate(value === null || value === undefined ? "" : String(value));
                      } else if (type === "pictureForm" && typeof form.SetImage === "function") {
                        form.SetImage(value === null || value === undefined ? "" : String(value));
                      } else if (typeof form.SetText === "function") {
                        form.SetText(value === null || value === undefined ? "" : String(value));
                      }
                    }
                  }

                  Api.Save();
                } catch {}
              });
            } catch {}
          `
        );
      }

      async function fillFile(fileId, map, delayMs) {
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

          const timeoutMs = Math.max(20000, Number.isFinite(delayMs) ? delayMs + 15000 : 30000);
          const t = setTimeout(() => finish(new Error("Fill timed out")), timeoutMs);

          editorInstance = DocSpace.SDK.initEditor({
            frameId: "ds-editor-frame",
            width: editorVisible ? "900px" : "0",
            height: editorVisible ? "520px" : "0",
            theme: "base",
            fileId: String(fileId),
            events: {
              onAppReady: () => {
                const frame = DocSpace?.SDK?.frames?.["ds-editor-frame"];
                if (!frame || typeof frame.executeInEditor !== "function") {
                  clearTimeout(t);
                  finish(new Error("executeInEditor not available"));
                  return;
                }
                try {
                  frame.executeInEditor(buildPdfFillCommand(map));
                } catch (e) {
                  clearTimeout(t);
                  finish(e);
                  return;
                }
                setTimeout(() => {
                  clearTimeout(t);
                  finish();
                }, Math.max(1000, Number.isFinite(delayMs) ? delayMs : 6500));
              },
              onAppError: (e) => {
                clearTimeout(t);
                finish(e || new Error("Editor error"));
              }
            }
          });
        });
      }

      async function createFromTemplatePdf(destFolderId, outputFileName) {
        const res = await manager.createFile(String(destFolderId), String(outputFileName), Number(template.id));
        const createdId = getCreatedFileId(res);
        if (createdId) return createdId;
        throw new Error("Created file id not found in response");
      }

      function setRunning(v) {
        running = !!v;
        stopBtn.disabled = !running;
        runBtn.disabled = running || !managerReady || !template?.id || template?.ext !== ".pdf";
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

      function render() {
        runBtn.disabled = running || !managerReady || !template?.id || template?.ext !== ".pdf";
      }

      function initTemplateSelector() {
        selector = DocSpace.SDK.initFileSelector({
          frameId: "ds-template-selector",
          width: "900px",
          height: "520px",
          theme: "base",
          events: {
            onSelectCallback: (e) => {
              const item = Array.isArray(e) ? e[0] : e;
              if (!item) return;

              const id = item?.id ?? item?.fileId ?? null;
              if (!id) return;

              const title = getTitle(item);
              const ext = getExt(item);
              const folderId = String(item?.folderId || item?.parentId || item?.parent_id || item?.folder_id || "").trim();

              template = { id: String(id), title, ext, folderId };
              templateTitleEl.textContent = title;
              templateIdEl.textContent = String(id);
              destFolderIdEl.textContent = folderId || "-";

              setHint(ALLOWED_EXTS.has(ext) ? "Ready" : "Pick a .pdf template");
              render();
            },
            onAppError: () => setHint("Selector error")
          }
        });
      }

      function initManager() {
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
              render();
            },
            onAppError: () => {
              managerReady = false;
              managerStateEl.textContent = "Error";
              setHint("Manager error");
              render();
            }
          }
        });
      }

      async function runAll() {
        logLine("---");
        logLine("Run: " + new Date().toISOString());

        if (!managerReady || !manager) {
          setHint("Manager not ready");
          return;
        }
        if (!template?.id || template.ext !== ".pdf") {
          setHint("Pick a PDF template");
          return;
        }
        const override = String(folderIdInputEl?.value || "").trim();
        const destFolderId = override || template.folderId || "";
        if (!destFolderId) {
          setHint("Destination folderId required");
          return;
        }

        let people = [];
        try {
          people = parsePeople();
        } catch (e) {
          setHint("Invalid JSON");
          logLine("ERROR: " + String(e?.message || e));
          return;
        }
        if (!people.length) {
          setHint("Add at least 1 person");
          return;
        }

        const pattern = String(namePatternEl.value || "").trim() || "{LastName}_{FirstName}.pdf";
        setRunning(true);
        abortRequested = false;

        for (let i = 0; i < people.length; i += 1) {
          if (abortRequested) break;
          const person = people[i] || {};

          const nameRaw = String(person._fileName || resolvePattern(pattern, person)).trim() || "filled.pdf";
          const fileName = ensurePdfExtension(nameRaw);
          const map = toFillMap(person);

          logLine("[" + (i + 1) + "/" + people.length + "] Create: " + fileName);

          let createdId = "";
          try {
            createdId = await createFromTemplatePdf(destFolderId, fileName);
          } catch (e) {
            logLine("  ERROR create: " + String(e?.message || e));
            continue;
          }

          logLine("  Fill: " + createdId);
          try {
            await delay(250);
            await fillFile(createdId, map, 6500);
            logLine("  OK");
          } catch (e) {
            logLine("  ERROR fill: " + String(e?.message || e));
          }

          // Give the SDK a moment to tear down editor frame between files.
          await delay(400);
        }

        setRunning(false);
        setHint(abortRequested ? "Stopped" : "Done");
      }

      runBtn.onclick = runAll;
      stopBtn.onclick = () => {
        abortRequested = true;
        setHint("Stopping...");
      };
      toggleEditorBtn.onclick = toggleEditorVisibility;
      peopleEl.addEventListener("input", render);
      namePatternEl.addEventListener("input", render);
      folderIdInputEl.addEventListener("input", render);

      peopleEl.value = JSON.stringify(
        [
          { FirstName: "Alice", LastName: "Smith" },
          { FirstName: "Bob", LastName: "Brown" }
        ],
        null,
        2
      );

      initManager();
      initTemplateSelector();
      render();
    </script>
  </body>
</html>
```

</details>

## Script execution steps

### 1. Set HTML structure

Create an HTML file. It must include a selector iframe, a hidden manager iframe, and a hidden editor iframe:

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.1.0/api.js"></script>
  </head>
  <body>
    <iframe id="ds-template-selector"></iframe>
    <iframe id="ds-manager-frame"></iframe>
    <iframe id="ds-editor-frame"></iframe>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/2.1.0/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

### 2. Initialize Manager and template selector

Add a script to initialize the [Manager](/docspace/javascript-sdk/usage-sdk/classes/SDK.md#initmanager) and the [file selector](/docspace/javascript-sdk/usage-sdk/classes/SDK.md#initfileselector).

1. Initialize the **Manager** to create new files:

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

2. Initialize the **file selector** and save the template file ID and its folder:

    ``` ts
    selector = DocSpace.SDK.initFileSelector({
      frameId: "ds-template-selector",
      width: "900px",
      height: "520px",
      events: {
        onSelectCallback: (e) => {
          const item = Array.isArray(e) ? e[0] : e
          template = {
            id: String(item?.id ?? item?.fileId ?? ""),
            ext: String(item?.extension || item?.ext || ""),
            folderId: String(item?.folderId || item?.parentId || ""),
          }
        },
      },
    })
    ```

### 3. Create output files

For each person object, create a new PDF from the template in the destination folder using the [createFile](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#createfile) method:

``` ts
const res = await manager.createFile(destFolderId, fileName, Number(template.id))
const createdId = res?.id ?? res?.fileId
```

### 4. Fill the PDF via executeInEditor

Open each created file in the editor and fill PDF fields by **FormKey**:

``` ts
await fillFile(createdId, toFillMap(person), 6500)
```

### 5. Run the sample

Run the HTML file and make sure everything works.
