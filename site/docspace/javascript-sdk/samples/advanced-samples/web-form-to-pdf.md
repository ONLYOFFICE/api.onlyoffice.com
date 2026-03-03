# Web form to PDF

This example fills a website questionnaire and generates a filled PDF from a DocSpace PDF template using the [executeInEditor](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#executeineditor) method.

Complete source code on GitHub: [JavaScript](https://github.com/ONLYOFFICE/docspace-samples/blob/master/js-sdk/advanced-samples/web-form-to-pdf.html)

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

    <meta name="example-title" content="Web form to PDF" />
    <meta
      name="example-description"
      content="Fill a website questionnaire and generate a filled PDF from a DocSpace PDF template."
    />
    <meta name="example-group" content="advanced" />

    <title>Web form to PDF</title>
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

  <body class="ex-web-form-to-pdf">
    <div class="wf-page">
      <div class="wf-header">
        <div>
          <div class="wf-title">Web form to PDF</div>
          <div class="wf-subtitle">
            Fill the questionnaire -> generate a filled PDF from a DocSpace template.
          </div>
        </div>
        <div class="wf-header-actions">
          <button id="reset" type="button" class="btn-secondary">Reset</button>
        </div>
      </div>

      <div class="wf-grid">
        <div class="wf-card">
          <div class="wf-card-title">1) Questionnaire</div>
          <div class="wf-muted">Each input <code>name</code> must match the PDF field <b>FormKey</b>.</div>

          <form id="webForm" class="wf-form" autocomplete="off">
            <div class="wf-field">
              <label for="FirstName">First name</label>
              <input id="FirstName" name="FirstName" type="text" placeholder="Alice" />
              <div class="wf-help">FormKey: <code>FirstName</code></div>
            </div>

            <div class="wf-field">
              <label for="LastName">Last name</label>
              <input id="LastName" name="LastName" type="text" placeholder="Smith" />
              <div class="wf-help">FormKey: <code>LastName</code></div>
            </div>

            <div class="wf-field">
              <label for="BirthDate">Birth date</label>
              <input id="BirthDate" name="BirthDate" type="date" />
              <div class="wf-help">FormKey: <code>BirthDate</code></div>
            </div>

            <div class="wf-field">
              <label for="Agree">Agree?</label>
              <select id="Agree" name="Agree">
                <option value="">(empty)</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
              <div class="wf-help">FormKey: <code>Agree</code></div>
            </div>

            <div class="wf-field wf-full">
              <label for="Notes">Notes</label>
              <textarea id="Notes" name="Notes" rows="3" placeholder="Some notes..."></textarea>
              <div class="wf-help">FormKey: <code>Notes</code></div>
            </div>
          </form>

          <details class="wf-details">
            <summary>Preview fill map (debug)</summary>
            <textarea id="mapOut" readonly placeholder="Map will appear here..."></textarea>
          </details>
        </div>

        <div class="wf-card">
          <div class="wf-card-title">2) Template & destination</div>
          <div class="wf-muted">DocSpace connection: <b id="managerState">Not started</b></div>

          <div class="wf-step">
            <div class="wf-step-label">Template</div>
            <div class="wf-step-value" id="templateTitle">Not selected</div>
            <div class="wf-actions">
              <button id="chooseTemplate" type="button" class="btn-secondary">Choose template PDF</button>
            </div>
          </div>

          <div class="wf-step">
            <div class="wf-step-label">Destination</div>
            <div class="wf-step-value" id="destFolderLabel">Same folder as template</div>
            <div class="wf-actions">
              <button id="chooseDest" type="button" class="btn-secondary">Choose folder</button>
              <button id="clearDest" type="button" class="btn-secondary" disabled>Use template folder</button>
            </div>
          </div>

          <details class="wf-details">
            <summary>Advanced</summary>
            <div class="wf-advanced">
              <div class="wf-field wf-full">
                <label for="folderIdInput">Destination folderId override</label>
                <input id="folderIdInput" type="text" placeholder="(optional)" autocomplete="off" />
                <div class="wf-help">If empty, the template folder is used.</div>
              </div>

              <div class="wf-field wf-full">
                <label for="namePattern">Output name pattern</label>
                <input id="namePattern" type="text" value="{LastName}_{FirstName}.pdf" autocomplete="off" />
                <div class="wf-help">Placeholders come from the questionnaire values.</div>
              </div>
            </div>
          </details>

          <div class="wf-divider"></div>

          <div class="wf-run">
            <button id="generate" type="button" disabled>Generate PDF</button>
            <button id="toggleEditor" type="button" class="btn-secondary">Show editor</button>
            <div class="wf-hint" id="hint">Choose a template PDF</div>
          </div>

          <div class="wf-result">
            <div class="wf-muted">Created fileId</div>
            <div class="wf-result-id" id="createdId">-</div>
          </div>

          <details class="wf-details">
            <summary>Log</summary>
            <textarea id="log" readonly placeholder="Progress log..."></textarea>
          </details>
        </div>
      </div>
    </div>

    <!-- Modal: template picker -->
    <div class="wf-modal" id="templateModal" aria-hidden="true">
      <div class="wf-modal-backdrop" data-close="1"></div>
      <div class="wf-modal-body" role="dialog" aria-modal="true">
        <div class="wf-modal-head">
          <div class="wf-modal-title">Choose template PDF</div>
          <button id="closeTemplateModal" type="button" class="btn-secondary">Close</button>
        </div>
        <iframe id="ds-template-selector" class="wf-modal-frame" title="Template selector"></iframe>
      </div>
    </div>

    <!-- Modal: destination picker -->
    <div class="wf-modal" id="destModal" aria-hidden="true">
      <div class="wf-modal-backdrop" data-close="1"></div>
      <div class="wf-modal-body" role="dialog" aria-modal="true">
        <div class="wf-modal-head">
          <div class="wf-modal-title">Choose destination folder</div>
          <div class="wf-modal-actions">
            <button id="useDest" type="button">Use selected</button>
            <button id="closeDestModal" type="button" class="btn-secondary">Close</button>
          </div>
        </div>
        <iframe id="ds-destination-picker" class="wf-modal-frame" title="Destination picker"></iframe>
      </div>
    </div>

    <!-- Background frames -->
    <iframe id="ds-manager-frame" class="wf-offscreen" title="Manager frame"></iframe>
    <iframe id="ds-editor-frame" class="wf-offscreen" title="Editor frame"></iframe>

    <script>
      const hintEl = document.getElementById("hint");
      const logEl = document.getElementById("log");
      const createdIdEl = document.getElementById("createdId");
      const managerStateEl = document.getElementById("managerState");
      const templateTitleEl = document.getElementById("templateTitle");
      const destFolderLabelEl = document.getElementById("destFolderLabel");
      const mapOutEl = document.getElementById("mapOut");

      const resetBtn = document.getElementById("reset");
      const generateBtn = document.getElementById("generate");
      const toggleEditorBtn = document.getElementById("toggleEditor");

      const chooseTemplateBtn = document.getElementById("chooseTemplate");
      const chooseDestBtn = document.getElementById("chooseDest");
      const clearDestBtn = document.getElementById("clearDest");

      const namePatternEl = document.getElementById("namePattern");
      const folderIdInputEl = document.getElementById("folderIdInput");
      const webFormEl = document.getElementById("webForm");

      const templateModal = document.getElementById("templateModal");
      const destModal = document.getElementById("destModal");
      const closeTemplateModalBtn = document.getElementById("closeTemplateModal");
      const closeDestModalBtn = document.getElementById("closeDestModal");
      const useDestBtn = document.getElementById("useDest");

      const editorFrame = document.getElementById("ds-editor-frame");

      const ALLOWED_EXTS = new Set([".pdf"]);

      let selector = null;
      let manager = null;
      let editorInstance = null;
      let destinationPicker = null;

      let managerReady = false;
      let editorVisible = false;

      let template = null; // { id, title, ext, folderId, raw }
      let destOverride = { folderId: "", title: "" }; // picked destination (optional)
      let templateSelectorInitialized = false;

      function setHint(v) {
        hintEl.textContent = String(v ?? "");
      }

      function logLine(v) {
        const line = String(v ?? "");
        logEl.value = (logEl.value ? logEl.value + "\n" : "") + line;
        logEl.scrollTop = logEl.scrollHeight;
      }

      function openModal(el) {
        el.classList.add("wf-modal-open");
        el.setAttribute("aria-hidden", "false");
      }

      function closeModal(el) {
        el.classList.remove("wf-modal-open");
        el.setAttribute("aria-hidden", "true");
      }

      function hasSdk() {
        return !!(window.DocSpace && DocSpace.SDK && typeof DocSpace.SDK.initManager === "function");
      }

      function isAxiosLikeErrorObject(res) {
        if (!res || typeof res !== "object") return false;
        if (res.isAxiosError === true) return true;
        if (res.name === "AxiosError") return true;
        if (typeof res.message === "string" && res.message.includes("status code")) return true;
        return false;
      }

      function afterVisible(cb) {
        // Two rAFs reliably run after layout/paint for display changes.
        requestAnimationFrame(() => requestAnimationFrame(cb));
      }

      function destroyTemplateSelector() {
        templateSelectorInitialized = false;
        if (selector && typeof selector.destroyFrame === "function") {
          try {
            selector.destroyFrame();
          } catch {}
        }
        selector = null;
      }

      function openTemplateModal() {
        if (!hasSdk()) {
          setHint("SDK not loaded. Open this example via the samples index (/index.html) and set PORTAL_SRC.");
          return;
        }
        openModal(templateModal);
        // SDK frames can render blank when initialized inside display:none containers.
        // Initialize on the next tick, after the modal becomes visible.
        afterVisible(() => {
          destroyTemplateSelector();
          initTemplateSelector();
          templateSelectorInitialized = true;
        });
      }

      templateModal.addEventListener("click", (e) => {
        if (e?.target?.dataset?.close) closeModal(templateModal);
      });
      destModal.addEventListener("click", (e) => {
        if (e?.target?.dataset?.close) closeModal(destModal);
      });

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

      function getCreatedFileId(res) {
        const id = res?.id ?? res?.fileId ?? res?.entryId ?? res?.documentId ?? "";
        return id ? String(id).trim() : "";
      }

      function destroyEditor() {
        if (editorInstance && typeof editorInstance.destroyFrame === "function") {
          try {
            editorInstance.destroyFrame();
          } catch {}
        }
        editorInstance = null;
      }

      function buildPdfFillCommand(map) {
        const payload = JSON.stringify(map || {});
        return new Function(
          "editorInstance",
          `
            try {
              const map = ${payload};
              const connector = editorInstance?.createConnector?.();
              if (!connector?.callCommand) {
                console.error("connector.callCommand is not available", connector);
                return;
              }

              Asc.scope.map = map;

              function toBool(v) {
                if (typeof v === "boolean") return v;
                const s = String(v ?? "").trim().toLowerCase();
                return s === "true" || s === "1" || s === "yes" || s === "y" || s === "on";
              }

              connector.callCommand(function () {
                try {
                  const doc = Api.GetDocument && Api.GetDocument();
                  if (!doc) return;
                  if (typeof doc.GetAllForms !== "function") {
                    console.error("doc.GetAllForms is not available (not a PDF forms editor).");
                    return;
                  }

                  const forms = doc.GetAllForms() || [];
                  const map = Asc.scope.map || {};

                  const keys = Object.keys(map);
                  for (let i = 0; i < keys.length; i += 1) {
                    const key = String(keys[i]);
                    const value = map[key];
                    let found = false;

                    for (let j = 0; j < forms.length; j += 1) {
                      const form = forms[j];
                      if (!form || typeof form.GetFormKey !== "function") continue;
                      if (String(form.GetFormKey()) !== key) continue;
                      found = true;

                      try {
                        const type = String((typeof form.GetFormType === "function" && form.GetFormType()) || "");
                        if (type === "textForm" && typeof form.SetText === "function") {
                          form.SetText(value === null || value === undefined ? "" : String(value));
                        } else if (type === "checkBoxForm" && typeof form.SetChecked === "function") {
                          form.SetChecked(toBool(value));
                        } else if (
                          (type === "comboBoxForm" || type === "dropDownListForm") &&
                          typeof form.SetText === "function"
                        ) {
                          form.SetText(value === null || value === undefined ? "" : String(value));
                        } else if (type === "dateForm" && typeof form.SetDate === "function") {
                          form.SetDate(value === null || value === undefined ? "" : String(value));
                        } else if (type === "pictureForm" && typeof form.SetImage === "function") {
                          form.SetImage(value === null || value === undefined ? "" : String(value));
                        } else if (typeof form.SetText === "function") {
                          form.SetText(value === null || value === undefined ? "" : String(value));
                        }
                      } catch (err) {
                        console.error("Failed to fill PDF form", key, err);
                      }
                    }

                    if (!found) console.warn("PDF form key not found:", key);
                  }

                  Api.Save();
                } catch (err) {
                  console.error("PDF fill failed", err);
                }
              });
            } catch (e) {
              console.error("Failed to build PDF fill command", e);
            }
          `
        );
      }

      async function fillFile(fileId, map, delayMs) {
        return new Promise((resolve, reject) => {
          destroyEditor();

          editorInstance = DocSpace.SDK.initEditor({
            id: String(fileId),
            frameId: "ds-editor-frame",
            width: "1px",
            height: "1px",
            theme: "base",
            events: {
              onAppReady: () => {
                const frame = DocSpace?.SDK?.frames?.["ds-editor-frame"];
                if (!frame || typeof frame.executeInEditor !== "function") {
                  reject(new Error("executeInEditor not available"));
                  destroyEditor();
                  return;
                }

                try {
                  frame.executeInEditor(buildPdfFillCommand(map));
                } catch (e) {
                  reject(e);
                  destroyEditor();
                  return;
                }

                setTimeout(() => {
                  destroyEditor();
                  resolve();
                }, Math.max(1000, Number.isFinite(delayMs) ? delayMs : 6500));
              },
              onAppError: (e) => {
                destroyEditor();
                reject(e || new Error("Editor error"));
              }
            }
          });
        });
      }

      function getDestinationFolderId() {
        const manual = String(folderIdInputEl.value || "").trim();
        if (manual) return manual;
        if (destOverride.folderId) return destOverride.folderId;
        const auto = String(template?.folderId || "").trim();
        return auto || "";
      }

      function readWebFormMap() {
        const fd = new FormData(webFormEl);
        const map = {};
        for (const [k, v] of fd.entries()) {
          const key = String(k || "").trim();
          if (!key) continue;
          const value = typeof v === "string" ? v : String(v);
          if (value === "") continue;
          map[key] = value;
        }
        return map;
      }

      function toggleEditorVisibility() {
        editorVisible = !editorVisible;
        if (editorVisible) {
          editorFrame.classList.remove("wf-offscreen");
          editorFrame.classList.add("wf-preview");
          toggleEditorBtn.textContent = "Hide editor";
        } else {
          editorFrame.classList.remove("wf-preview");
          editorFrame.classList.add("wf-offscreen");
          toggleEditorBtn.textContent = "Show editor";
        }
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
              template = { id: String(id), title, ext, folderId, raw: item };

              templateTitleEl.textContent = title;

              if (!ALLOWED_EXTS.has(ext)) setHint("Pick a .pdf template");
              else setHint("Ready");

              closeModal(templateModal);
              render();
            },
            onAppError: (err) => {
              console.error("Selector error", err);
              setHint("Selector error");
            }
          }
        });
      }

      function initManager() {
        if (!hasSdk()) {
          managerReady = false;
          if (managerStateEl) managerStateEl.textContent = "SDK missing";
          setHint("SDK not loaded. Open this example via the samples index (/index.html) and set PORTAL_SRC.");
          return;
        }

        managerReady = false;
        if (managerStateEl) managerStateEl.textContent = "Loading...";

        manager = DocSpace.SDK.initManager({
          frameId: "ds-manager-frame",
          width: "0",
          height: "0",
          theme: "base",
          events: {
            onAppReady: () => {
              managerReady = true;
              if (managerStateEl) managerStateEl.textContent = "Ready";
              render();
            },
            onAppError: (e) => {
              console.error("Manager error", e);
              managerReady = false;
              if (managerStateEl) managerStateEl.textContent = "Error";
              setHint("Manager error");
              render();
            }
          }
        });
      }

      function initDestinationPicker() {
        if (destinationPicker && typeof destinationPicker.destroyFrame === "function") {
          try {
            destinationPicker.destroyFrame();
          } catch {}
        }

        destinationPicker = DocSpace.SDK.initManager({
          frameId: "ds-destination-picker",
          width: "900px",
          height: "520px",
          theme: "base",
          selectorType: "folder"
        });
      }

      async function applySelectedDestination() {
        if (!destinationPicker || typeof destinationPicker.getSelection !== "function") return;
        try {
          const sel = await destinationPicker.getSelection();
          const item = Array.isArray(sel) ? sel[0] : sel;
          const folderId = item?.folderId ?? item?.id ?? null;
          if (!folderId) throw new Error("No folder selected");
          const title = String(item?.title || item?.name || "Folder").trim();

          destOverride = { folderId: String(folderId), title };
          destFolderLabelEl.textContent = title;
          clearDestBtn.disabled = false;
          closeModal(destModal);
          render();
        } catch {
          setHint("Select a folder");
        }
      }

      function formatAxiosLikeError(e) {
        const status = e?.status || e?.response?.status || "";
        const url = e?.config?.url ? String(e.config.url) : "";
        const data = e?.config?.data ? String(e.config.data) : "";
        const respData = e?.response?.data;
        let body = "";
        if (typeof respData === "string") body = respData;
        else if (respData && typeof respData === "object") {
          const msg = respData.message || respData.error || respData.errors || respData.statusText || "";
          if (msg) body = typeof msg === "string" ? msg : "";
          if (!body) {
            try {
              body = JSON.stringify(respData);
            } catch {
              body = "";
            }
          }
        }

        const parts = [];
        if (status) parts.push("HTTP " + status);
        if (url) parts.push(url);
        if (body) parts.push("body=" + body);
        if (data) parts.push("data=" + data);
        return parts.length ? parts.join(" | ") : String(e?.message || "Request failed");
      }

      async function createFromTemplatePdf(destFolderId, outputFileName) {
        const titleWithExt = String(outputFileName || "").trim();
        const res = await manager.createFile(String(destFolderId), titleWithExt, Number(template.id));

        if (isAxiosLikeErrorObject(res)) {
          throw new Error(formatAxiosLikeError(res));
        }

        const createdId = getCreatedFileId(res);
        if (createdId) return createdId;

        try {
          logLine("createFile result: " + JSON.stringify(res));
        } catch {
          logLine("createFile result: " + String(res));
        }

        throw new Error("created file id not found in response");
      }

      async function generateOnce() {
        logLine("---");
        logLine("Run: " + new Date().toISOString());
        createdIdEl.textContent = "-";

        if (!managerReady || !manager) {
          setHint("Manager not ready");
          return;
        }
        if (!template?.id || template.ext !== ".pdf") {
          setHint("Choose a PDF template");
          return;
        }

        const destFolderId = getDestinationFolderId();
        if (!destFolderId) {
          setHint("Destination folder required");
          return;
        }

        const map = readWebFormMap();
        mapOutEl.value = JSON.stringify(map, null, 2);

        const pattern = String(namePatternEl.value || "").trim() || "{LastName}_{FirstName}.pdf";
        const baseName = resolvePattern(pattern, map).trim() || "filled.pdf";
        const fileName = ensurePdfExtension(baseName);

        setHint("Creating...");
        logLine("Template: " + template.title + " (" + template.id + ")");
        logLine("Destination folderId: " + destFolderId);
        logLine("Create: " + fileName);

        let createdId = "";
        try {
          createdId = await createFromTemplatePdf(destFolderId, fileName);
        } catch (e) {
          logLine("ERROR create: " + formatAxiosLikeError(e));
          setHint("Create error");
          return;
        }

        createdIdEl.textContent = String(createdId);
        logLine("Fill: " + createdId);
        setHint("Filling...");

        try {
          await fillFile(createdId, map, 6500);
          logLine("OK");
          setHint("Done");
        } catch (e) {
          logLine("ERROR fill: " + String(e?.message || e));
          setHint("Fill error");
        }
      }

      function render() {
        const dest = getDestinationFolderId();
        const ok = managerReady && !!dest && template?.id && template?.ext === ".pdf";
        generateBtn.disabled = !ok;

        if (!template?.id) {
          setHint("Choose a template PDF");
          return;
        }
        if (template.ext !== ".pdf") {
          setHint("Template must be .pdf");
          return;
        }
        setHint(ok ? "Ready" : "Fill the questionnaire");
      }

      // UI wiring
      resetBtn.onclick = () => window.location.reload();
      generateBtn.onclick = generateOnce;
      toggleEditorBtn.onclick = toggleEditorVisibility;

      chooseTemplateBtn.onclick = () => openTemplateModal();
      closeTemplateModalBtn.onclick = () => closeModal(templateModal);

      chooseDestBtn.onclick = () => {
        if (!hasSdk()) {
          setHint("SDK not loaded. Open this example via the samples index (/index.html) and set PORTAL_SRC.");
          return;
        }
        openModal(destModal);
        afterVisible(() => initDestinationPicker());
      };
      useDestBtn.onclick = applySelectedDestination;
      closeDestModalBtn.onclick = () => closeModal(destModal);

      clearDestBtn.onclick = () => {
        destOverride = { folderId: "", title: "" };
        destFolderLabelEl.textContent = "Same folder as template";
        clearDestBtn.disabled = true;
        render();
      };

      folderIdInputEl.addEventListener("input", render);
      namePatternEl.addEventListener("input", render);
      webFormEl.addEventListener("input", render);

      // Default form values
      webFormEl.elements["FirstName"].value = "Alice";
      webFormEl.elements["LastName"].value = "Smith";
      webFormEl.elements["Agree"].value = "true";
      try {
        const d = new Date();
        const iso = new Date(Date.UTC(d.getFullYear() - 20, d.getMonth(), d.getDate())).toISOString().slice(0, 10);
        webFormEl.elements["BirthDate"].value = iso;
      } catch {}
      webFormEl.elements["Notes"].value = "Generated from website form UI.";

      initManager();
      closeModal(templateModal);
      closeModal(destModal);
      render();
    </script>
  </body>
</html>
```

</details>

## Script execution steps

### 1. Set HTML structure

Create an HTML file. It must include the web form, two modal pickers, and background SDK frames:

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.1.0/api.js"></script>
  </head>
  <body>
    <form id="webForm"></form>
    <div id="templateModal"></div>
    <div id="destModal"></div>
    <iframe id="ds-manager-frame"></iframe>
    <iframe id="ds-editor-frame"></iframe>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/2.1.0/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

### 2. Initialize Manager and selectors

Add a script to initialize the [Manager](/docspace/javascript-sdk/usage-sdk/classes/SDK.md#initmanager), the template selector, and the destination picker.

1. Initialize the hidden **Manager**:

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

2. Initialize the template selector in a modal:

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

### 3. Create a PDF from template

Create a new PDF from the template in the destination folder using [createFile](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#createfile):

``` ts
const res = await manager.createFile(destFolderId, fileName, Number(template.id))
const createdId = res?.id ?? res?.fileId
```

### 4. Fill fields via executeInEditor

Open the created PDF in the editor and fill fields by **FormKey**:

``` ts
await fillFile(createdId, map, 6500)
```

### 5. Run the sample

Run the HTML file and make sure everything works.
