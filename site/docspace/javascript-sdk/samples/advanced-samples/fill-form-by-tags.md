# Fill PDF form by key

This example fills PDF form fields by their **FormKey** values using the [executeInEditor](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#executeineditor) method, then saves the result.

Complete source code on GitHub: [JavaScript](https://github.com/ONLYOFFICE/docspace-samples/blob/master/js-sdk/advanced-samples/fill-form-by-tags.html)

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

    <meta name="example-title" content="Fill PDF Form by Key (executeInEditor)" />
    <meta
      name="example-description"
      content="Pick a fillable .pdf form and fill fields by FormKey in a hidden editor using executeInEditor."
    />
    <meta name="example-group" content="advanced" />

    <title>Fill PDF Form by Key (executeInEditor)</title>
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.1.0/api.js"></script>

    <!-- App styles -->
    <script>
      (function () {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = new URL("../assets/css/style.css", window.location.href).toString();
        document.head.appendChild(link);
      })();
    </script>
  </head>

  <body class="ex-fill-form-by-tags">
    <div class="wrap">
      <iframe id="ds-selector" class="frame"></iframe>
    </div>

    <iframe id="ds-hidden-editor" class="hidden-frame" title="Hidden editor"></iframe>

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
          <input id="shareLink" type="text" placeholder="https://portal/s/... (or ?share=...)" autocomplete="off" />
          <div class="muted">If provided, this sample extracts a share token and uses it as <code>requestToken</code>.</div>
        </div>
        <div>
          <label for="requestToken">requestToken (optional)</label>
          <input id="requestToken" type="text" placeholder="share token (from public link)" autocomplete="off" />
        </div>
      </div>

      <label for="map">Fill map (JSON object: tag/key -> value)</label>
      <textarea
        id="map"
        placeholder='{"FirstName":"Alice","Agree":true,"BirthDate":"1998-03-01","Department":"Sales","Avatar":"https://.../avatar.png"}'
      ></textarea>
      <div class="muted" style="margin-top: 8px;">
        Use the <b>FormKey</b> of the PDF form field (see console warnings for missing keys).
      </div>
    </div>

    <div class="bar">
      <button id="pick" type="button">Pick document</button>
      <button id="fill" type="button" disabled>Fill &amp; Save (hidden)</button>
      <button id="clear" type="button" class="btn-secondary" disabled>Clear all fields (hidden)</button>
      <button id="toggleHidden" type="button" class="btn-secondary">Show hidden editor</button>
      <button id="reset" type="button" class="btn-secondary">Reset</button>
      <div class="hint" id="hint">Select a fillable .pdf</div>
    </div>

    <script>
      const hint = document.getElementById("hint");
      const pick = document.getElementById("pick");
      const fill = document.getElementById("fill");
      const clear = document.getElementById("clear");
      const toggleHidden = document.getElementById("toggleHidden");
      const reset = document.getElementById("reset");

      const selectedTitle = document.getElementById("selectedTitle");
      const selectedId = document.getElementById("selectedId");

      const shareLinkEl = document.getElementById("shareLink");
      const requestTokenEl = document.getElementById("requestToken");
      const mapEl = document.getElementById("map");

      const hiddenFrame = document.getElementById("ds-hidden-editor");

      let selectorInstance = null;
      let editorInstance = null;
      let selected = null; // { id, title, ext, raw }
      let hiddenVisible = false;
      const ALLOWED_EXTS = new Set([".pdf"]);

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

      function parseMap() {
        const raw = String(mapEl.value || "").trim();
        if (!raw) return {};
        const v = JSON.parse(raw);
        if (!v || typeof v !== "object" || Array.isArray(v)) throw new Error("Fill map must be a JSON object");
        return v;
      }

      function updateUi() {
        selectedTitle.textContent = selected?.title || "None";
        selectedId.textContent = selected?.id ? String(selected.id) : "-";
        const ext = String(selected?.ext || "").toLowerCase();
        const ok = !!selected?.id && (!ext || ALLOWED_EXTS.has(ext));
        fill.disabled = !ok;
        clear.disabled = !ok;

        if (selected?.id && ext && !ALLOWED_EXTS.has(ext)) {
          setHint(`Pick a fillable .pdf. Selected: ${ext}`);
        }
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
        setHint("Select a fillable .pdf...");

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
              const ext = item?.fileExst || item?.extension || item?.ext || "";
              selected = { id: id ? String(id) : "", title: String(title), ext: String(ext), raw: item };

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

      function buildFillByTagsCommand(map, opts) {
        const payload = JSON.stringify(map || {});
        const options = JSON.stringify(opts || {});

        return new Function(
          "editorInstance",
          `
            try {
              const map = ${payload};
              const opts = ${options};

              const connector = editorInstance?.createConnector?.();
              if (!connector?.callCommand) {
                console.error("connector.callCommand is not available", connector);
                return;
              }

              Asc.scope.map = map;
              Asc.scope.opts = opts;

              function toBool(v) {
                if (typeof v === "boolean") return v;
                const s = String(v ?? "").trim().toLowerCase();
                return s === "true" || s === "1" || s === "yes" || s === "y" || s === "on";
              }

              connector.callCommand(function () {
                try {
                  const doc = Api.GetDocument && Api.GetDocument();
                  if (!doc) return;

                  const map = Asc.scope.map || {};
                  const opts = Asc.scope.opts || {};
                  const target = String(opts.target || "").trim().toLowerCase();

                  if (target === "pdf") {
                    if (typeof doc.GetAllForms !== "function") {
                      console.error("doc.GetAllForms is not available (not a PDF forms editor).");
                      return;
                    }

                    const forms = doc.GetAllForms() || [];
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
                          if (typeof form.SetValue === "function") {
                            form.SetValue(value);
                            continue;
                          }

                          const type = String((typeof form.GetFormType === "function" && form.GetFormType()) || "");
                          if (type === "textForm" && typeof form.SetText === "function") form.SetText(String(value ?? ""));
                          else if (type === "checkBoxForm" && typeof form.SetChecked === "function") form.SetChecked(toBool(value));
                          else if ((type === "comboBoxForm" || type === "dropDownListForm") && typeof form.SetText === "function") {
                            form.SetText(String(value ?? ""));
                          } else if (type === "dateForm" && typeof form.SetDate === "function") {
                            form.SetDate(String(value ?? ""));
                          } else if (type === "pictureForm" && typeof form.SetImage === "function") {
                            form.SetImage(String(value ?? ""));
                          } else if (typeof form.SetText === "function") {
                            form.SetText(String(value ?? ""));
                          }
                        } catch (err) {
                          console.error("Failed to fill PDF form", key, err);
                        }
                      }

                      if (!found) console.warn("No PDF form found for key:", key);
                    }
                  }

                  Api.Save();
                } catch (err) {
                  console.error("Fill command failed", err);
                }
              });
            } catch (e) {
              console.error("Failed to build fill command", e);
            }
          `
        );
      }

      function buildClearAllFieldsCommand(target) {
        const payloadTarget = JSON.stringify(String(target || "").trim().toLowerCase());
        return new Function(
          "editorInstance",
          `
            try {
              const target = ${payloadTarget};
              const connector = editorInstance?.createConnector?.();
              if (!connector?.callCommand) {
                console.error("connector.callCommand is not available", connector);
                return;
              }
              connector.callCommand(function () {
                try {
                  const doc = Api.GetDocument && Api.GetDocument();
                  if (!doc) return;

                  if (target === "pdf" && typeof doc.GetAllForms === "function") {
                    const forms = doc.GetAllForms() || [];
                    for (let i = 0; i < forms.length; i += 1) {
                      const form = forms[i];
                      if (!form) continue;
                      try {
                        if (typeof form.Clear === "function") {
                          form.Clear();
                          continue;
                        }
                        const type = String((typeof form.GetFormType === "function" && form.GetFormType()) || "");
                        if (type === "textForm" && typeof form.SetText === "function") form.SetText("");
                        else if (type === "checkBoxForm" && typeof form.SetChecked === "function") form.SetChecked(false);
                        else if ((type === "comboBoxForm" || type === "dropDownListForm") && typeof form.SetText === "function") {
                          form.SetText("");
                        } else if (type === "dateForm" && typeof form.SetDate === "function") {
                          form.SetDate("");
                        }
                      } catch (e) {
                        console.error("Failed to clear PDF form", e);
                      }
                    }
                  } else if (typeof doc.ClearAllFields === "function") {
                    doc.ClearAllFields();
                  }
                  Api.Save();
                } catch (err) {
                  console.error("ClearAllFields failed", err);
                }
              });
            } catch (e) {
              console.error("Failed to build clear command", e);
            }
          `
        );
      }

      async function withHiddenEditor(taskName, onReady) {
        if (!selected?.id) return;

        const tokenFromLink = extractShareToken(shareLinkEl.value);
        if (tokenFromLink && !requestTokenEl.value.trim()) {
          requestTokenEl.value = tokenFromLink;
        }

        destroyEditor();
        setHint(taskName + " (opening hidden editor...)");

        const requestToken = String(requestTokenEl.value || "").trim() || undefined;

        editorInstance = DocSpace.SDK.initEditor({
          id: selected.id,
          frameId: "ds-hidden-editor",
          width: "1px",
          height: "1px",
          theme: "base",
          requestToken,
          events: {
            onAppReady: () => {
              const frame = DocSpace?.SDK?.frames?.["ds-hidden-editor"];
              if (!frame || typeof frame.executeInEditor !== "function") {
                console.error("SDK frame.executeInEditor is not available", frame);
                setHint("executeInEditor not available");
                destroyEditor();
                return;
              }

              try {
                onReady(frame);
              } catch (e) {
                console.error(e);
                setHint("Failed");
                destroyEditor();
                return;
              }

              setTimeout(() => {
                destroyEditor();
                setHint("Done (editor closed).");
              }, 8000);
            },
            onAppError: (e) => {
              console.error("Editor error", e);
              setHint("Editor error");
              setTimeout(() => destroyEditor(), 1500);
            }
          }
        });
      }

      async function runFill() {
        let map;
        try {
          map = parseMap();
        } catch (e) {
          setHint(e?.message ? String(e.message) : "Invalid JSON");
          return;
        }

        await withHiddenEditor("Filling & saving", (frame) => {
          frame.executeInEditor(buildFillByTagsCommand(map, { target: "pdf" }));
        });
      }

      async function runClear() {
        await withHiddenEditor("Clearing & saving", (frame) => {
          frame.executeInEditor(buildClearAllFieldsCommand("pdf"));
        });
      }

      function toggleHiddenEditorVisibility() {
        hiddenVisible = !hiddenVisible;
        if (hiddenVisible) {
          hiddenFrame.classList.remove("hidden-frame");
          hiddenFrame.classList.add("visible-hidden-frame");
          toggleHidden.textContent = "Hide hidden editor";
        } else {
          hiddenFrame.classList.remove("visible-hidden-frame");
          hiddenFrame.classList.add("hidden-frame");
          toggleHidden.textContent = "Show hidden editor";
        }
      }

      function doReset() {
        destroyEditor();
        selected = null;
        shareLinkEl.value = "";
        requestTokenEl.value = "";
        mapEl.value = JSON.stringify(
          {
            FirstName: "Alice",
            LastName: "Smith",
            Agree: true,
            BirthDate: "1998-03-01",
            Department: "Sales"
          },
          null,
          2
        );
        setHint("Select a fillable .pdf");
        updateUi();
      }

      pick.onclick = openSelector;
      fill.onclick = runFill;
      clear.onclick = runClear;
      toggleHidden.onclick = toggleHiddenEditorVisibility;
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

Create an HTML file. Add a file selector iframe, a hidden editor iframe, and a textarea for the fill map:

``` html
<iframe id="ds-selector"></iframe>
<iframe id="ds-hidden-editor"></iframe>

<textarea id="map"></textarea>
<button id="fill">Fill</button>
<button id="clear">Clear</button>
```

### 2. Initialize the file selector

Add a script to initialize the [file selector](/docspace/javascript-sdk/usage-sdk/classes/SDK.md#initfileselector).

1. Add an event handler for [onSelectCallback](/docspace/javascript-sdk/usage-sdk/type-aliases/TFrameEvents.md#onselectcallback) and save the selected file ID and extension.
2. Disable **Fill** / **Clear** actions unless a **.pdf** file is selected.

### 3. Prepare the fill map

The fill map must be a JSON object where the key is the PDF field **FormKey** and the value is the value to set:

``` json
{
  "FirstName": "Alice",
  "Agree": true
}
```

### 4. Fill and save using executeInEditor

Open the selected PDF in the editor using [initEditor](/docspace/javascript-sdk/usage-sdk/classes/SDK.md#initeditor) and fill fields using [executeInEditor](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#executeineditor):

``` ts
await withHiddenEditor("Filling & saving", (frame) => {
  frame.executeInEditor(buildFillByTagsCommand(map, { target: "pdf" }))
})
```

### 5. Run the sample

Run the HTML file and make sure everything works.
