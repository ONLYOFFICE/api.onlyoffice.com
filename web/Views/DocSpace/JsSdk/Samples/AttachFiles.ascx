<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
    <span class="hdr">Attach files</span>
</h1>
<p class="dscr">Attaches files to a website using <a href="<%= Url.Action("JsSdk/InitModes/FileSelector")%>">File-selector</a>.</p>
<img class="screenshot" alt="OpenEditors" src="<%= Url.Content("~/content/img/docspace/gifs/js-sdk-attach-files.gif") %>" />

<h2>Before you start</h2>

<p>Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.
You need to <a href="<%= Url.Action("jssdk/")%>#docspace-url">add the URL</a> of your server's root directory to the <b>Developer Tools</b> section of DocSpace.</p>

<h2>Building a sample</h2>

<h3>Step 1. Set HTML structure</h3>


<ol>
    <li>
        <p>Create an HTML file. It must include a <em>div</em> tag where we specify the DocSpace connection parameters:</p>
        <div style="width: 100%;">
            <div class="jsSdkHeader">
                <div class="preContentType">
                    <span style="font-family: monospace">HTML</span>
                </div>
                    <div class="tooltip" >
                        <div class="copyJsSdk">
                            <img  id="htmlStructure" alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg")%>" />
                            <span id="htmlStructure-hover" style="display: inline;" class="tooltiptext-hover">When you copy, you get the HTML code for the whole example.</span>
                            <span id="htmlStructure-click" style="display: none;" class="tooltiptext-click">HTML copied.</span>
                        </div>
                    </div>
            </div>
<pre class="jsSdkPreNoScroll" id="htmlStructurePre">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8"&gt;
        &lt;title&gt;DocSpace JavaScript SDK&lt;/title&gt;
        &lt;script src="{PORTAL_SRC}/static/scripts/sdk/1.0.0/api.js"&gt;&lt;/script&gt;
        ...
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div id="ds-frame"&gt;&lt;/div&gt;
        ...
    &lt;/body&gt;
&lt;/html&gt;</pre>
</div>
        <p>The API JavaScript file can normally be found in the following DocSpace folder:</p>
        <p><b>{PORTAL_SRC}/static/scripts/sdk/1.0.0/api.js</b></p>
        <p>where <b>{PORTAL_SRC}</b> is the name of the server with the ONLYOFFICE DocSpace installed.</p>
    </li>
    <li>
        <p>Add the <em>style</em> section to the page:</p>

        <div style="width: 100%;">
            <div class="jsSdkHeader">
                <div class="preContentType">
                    <span style="font-family: monospace">HTML</span>
                </div>
                    <div class="tooltip" >
                        <div class="copyJsSdk">
                            <img  id="style" alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg")%>" />
                            <span id="style-hover" style="display: inline;" class="tooltiptext-hover">When you copy, you get the HTML code for the whole example.</span>
                            <span id="style-click" style="display: none;" class="tooltiptext-click">HTML copied.</span>
                        </div>
                    </div>
            </div>
<pre class="jsSdkPre" id="stylePre" style="height: 211px;">
&lt;style&gt;
    body {
        font-family: Arial, sans-serif;
        margin: 20px;
        display: flex;
    }
    h1 {
        color: #333;
    }
    button {
        padding: 8px 12px;
        background-color: #007bff;
        color: #fff;
        border: none;
        cursor: pointer;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }
    th,td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #f2f2f2;
    }
    a {
        text-decoration: none;
        color: #007bff;
    }
    a:hover {
        text-decoration: underline;
        color: #0056b3;
    }
    .task-row.selected {
        background-color: #d3e2ff;
    }
    #taskContainer {
        width: 70%;
        margin-right: 20px;
    }
    #attachmentsPanel {
        width: 30%;
        border: 1px solid #ccc;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    #attachmentsPanel h2 {
        margin-top: 0;
    }
    #attachmentsPanel button {
        margin-top: 10px;
        align-self: flex-start;
    }
    #attachmentsList {
        list-style-type: none;
        padding: 0;
    }
    .attachment-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0;
    }
    .attachment-item a {
        flex-grow: 1;
    }
    .delete-button {
        background-color: #dc3545;
        color: white;
        border: none;
        cursor: pointer;
        padding: 5px 10px;
        margin-left: 10px;
    }
    .delete-button:hover {
        background-color: #c82333;
    }
&lt;/style&gt;</pre>
</div>
    </li>
    <li>
        <p>Add a table with tasks to the page:</p>

        <div style="width: 100%;">
            <div class="jsSdkHeader">
                <div class="preContentType">
                    <span style="font-family: monospace">HTML</span>
                </div>
                    <div class="tooltip" >
                        <div class="copyJsSdk">
                            <img  id="taskContainer" alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg")%>" />
                            <span id="taskContainer-hover" style="display: inline;" class="tooltiptext-hover">When you copy, you get the HTML code for the whole example.</span>
                            <span id="taskContainer-click" style="display: none;" class="tooltiptext-click">HTML copied.</span>
                        </div>
                    </div>
            </div>
<pre class="jsSdkPreNoScroll" id="taskContainerPre">
&lt;div id="taskContainer"&gt;
    &lt;table id="taskTable"&gt;
        &lt;thead&gt;
            &lt;tr&gt;
                &lt;th&gt;Task&lt;/th&gt;
                &lt;th&gt;Description&lt;/th&gt;
                &lt;th&gt;Priority&lt;/th&gt;
            &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody id="taskList"&gt;
            &lt;tr class="task-row"&gt;
                &lt;td&gt;Prepare a sales analysis&lt;/td&gt;
                &lt;td&gt;Analyze sales data for the last six months and prepare a detailed report&lt;/td&gt;
                &lt;td&gt;Low&lt;/td&gt;
            &lt;/tr&gt;
            &lt;tr class="task-row"&gt;
                &lt;td&gt;Conclude an agreement with partners&lt;/td&gt;
                &lt;td&gt;Sign contracts with new partners to expand the business and increase sales&lt;/td&gt;
                &lt;td&gt;High&lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;
&lt;/div&gt;</pre>
</div>
    </li>
    <li>
        <p>Add a sidebar where the attachments of the selected task will be displayed, as well as the <b>Attach file</b> button:</p>

        <div style="width: 100%;">
            <div class="jsSdkHeader">
                <div class="preContentType">
                    <span style="font-family: monospace">HTML</span>
                </div>
                    <div class="tooltip" >
                        <div class="copyJsSdk">
                            <img  id="attachmentsPanel" alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg")%>" />
                            <span id="attachmentsPanel-hover" style="display: inline;" class="tooltiptext-hover">When you copy, you get the HTML code for the whole example.</span>
                            <span id="attachmentsPanel-click" style="display: none;" class="tooltiptext-click">HTML copied.</span>
                        </div>
                    </div>
            </div>
<pre class="jsSdkPreNoScroll" id="attachmentsPanelPre">
&lt;div id="attachmentsPanel"&gt;
    &lt;div&gt;
        &lt;h2&gt;Attachments&lt;/h2&gt;
        &lt;ul id="attachmentsList"&gt;&lt;/ul&gt;
    &lt;/div&gt;
    &lt;button id="attachButton"&gt;Attach file&lt;/button&gt;
&lt;/div&gt;</pre>
</div>
    </li>
    <li>
        <p>Add a dialog to the page, which will display the <b>file selector</b>:</p>

        <div style="width: 100%;">
            <div class="jsSdkHeader">
                <div class="preContentType">
                    <span style="font-family: monospace">HTML</span>
                </div>
                    <div class="tooltip" >
                        <div class="copyJsSdk">
                            <img  id="dialog" alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg")%>" />
                            <span id="dialog-hover" style="display: inline;" class="tooltiptext-hover">When you copy, you get the HTML code for the whole example.</span>
                            <span id="dialog-click" style="display: none;" class="tooltiptext-click">HTML copied.</span>
                        </div>
                    </div>
            </div>
<pre class="jsSdkPreNoScroll" id="dialogPre">
&lt;dialog id="modal" style="width: 600px; height: 700px;"&gt;
    &lt;div id="ds-frame"&gt;&lt;/div&gt;
&lt;/dialog&gt;</pre>
</div>
    </li>
</ol>

<h3>Step 2. Add functionality for selecting tasks</h3>


<ol>
    <li>
        <p>Add two variables to get a list of tasks and store the selected task, as well as the function to upload attachments for the selected task:</p>
        <div style="width: 100%;">
            <div class="jsSdkHeader">
                <div class="preContentType">
                    <span style="font-family: monospace">HTML</span>
                </div>
                    <div class="tooltip" >
                        <div class="copyJsSdk">
                            <img  id="selectedTask" alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg")%>" />
                            <span id="selectedTask-hover" style="display: inline;" class="tooltiptext-hover">When you copy, you get the HTML code for the whole example.</span>
                            <span id="selectedTask-click" style="display: none;" class="tooltiptext-click">HTML copied.</span>
                        </div>
                    </div>
            </div>
<pre class="jsSdkPreNoScroll" id="selectedTaskPre">
const taskRows = document.querySelectorAll(".task-row");
let selectedTask = null;
const loadAttachments = (taskRow) => {
    const attachmentsList = document.getElementById("attachmentsList");
    attachmentsList.innerHTML = "";
    if (taskRow.attachments && taskRow.attachments.length > 0) {
        taskRow.attachments.forEach(item => {
            attachmentsList.appendChild(item);
        });
    }
};</pre>
</div>
    </li>
    <li>
        <p>Add the <b>click</b> event handler for each task:</p>
        <div style="width: 100%;">
            <div class="jsSdkHeader">
                <div class="preContentType">
                    <span style="font-family: monospace">HTML</span>
                </div>
                    <div class="tooltip" >
                        <div class="copyJsSdk">
                            <img  id="clickTask" alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg")%>" />
                            <span id="clickTask-hover" style="display: inline;" class="tooltiptext-hover">When you copy, you get the HTML code for the whole example.</span>
                            <span id="clickTask-click" style="display: none;" class="tooltiptext-click">HTML copied.</span>
                        </div>
                    </div>
            </div>
<pre class="jsSdkPreNoScroll" id="clickTaskPre">
taskRows.forEach(row => {
    row.addEventListener("click", () => {
        if (selectedTask) {
            selectedTask.classList.remove("selected");
        }
        selectedTask = row;
        row.classList.add("selected");
        loadAttachments(row);
    });
});</pre>
</div>
    </li>
</ol>

<h3>Step 3. Implement functionality for adding attachments</h3>

<ol>
    <li>
        <p>Add variables to get a modal window and the <b>Attach file</b> button, as well as the <em>click</em> handler that opens the modal window when the task is selected:</p>
        <div style="width: 100%;">
            <div class="jsSdkHeader">
                <div class="preContentType">
                    <span style="font-family: monospace">HTML</span>
                </div>
                    <div class="tooltip" >
                        <div class="copyJsSdk">
                            <img  id="attachButton" alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg")%>" />
                            <span id="attachButton-hover" style="display: inline;" class="tooltiptext-hover">When you copy, you get the HTML code for the whole example.</span>
                            <span id="attachButton-click" style="display: none;" class="tooltiptext-click">HTML copied.</span>
                        </div>
                    </div>
            </div>
<pre class="jsSdkPreNoScroll" id="attachButtonPre">
const modalElement = document.getElementById("modal");
const attachButton = document.getElementById("attachButton");
attachButton.addEventListener("click", () => {
    if (selectedTask) {
        modalElement.showModal();
    }
});</pre>
</div>
    </li>
    <li>
        <p>Add the <a href="<%= Url.Action("jssdk/events")%>#onSelectCallback">onSelectCallback</a> event handler that closes the modal window and sends the ID and name of the selected file in JSON format:</p>
        <div style="width: 100%;">
            <div class="jsSdkHeader">
                <div class="preContentType">
                    <span style="font-family: monospace">HTML</span>
                </div>
                    <div class="tooltip" >
                        <div class="copyJsSdk">
                            <img  id="onSelectCallback" alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg")%>" />
                            <span id="onSelectCallback-hover" style="display: inline;" class="tooltiptext-hover">When you copy, you get the HTML code for the whole example.</span>
                            <span id="onSelectCallback-click" style="display: none;" class="tooltiptext-click">HTML copied.</span>
                        </div>
                    </div>
            </div>
<pre class="jsSdkPreNoScroll" id="onSelectCallbackPre">
const onSelectCallback = async (e) => {
    modalElement.close(JSON.stringify({ "id": e.id, "title": e.title }));
};</pre>
</div>
    </li>
    <li>
        <p>Add a variable for the base URL and an event handler for closing the modal window. When the task is selected and the modal window is closed,
        this function creates a list item with an attachment that includes a link and the <b>Delete</b> button, and then adds this item to the list of task attachments:</p>
        <div style="width: 100%;">
            <div class="jsSdkHeader">
                <div class="preContentType">
                    <span style="font-family: monospace">HTML</span>
                </div>
                    <div class="tooltip" >
                        <div class="copyJsSdk">
                            <img  id="dialogClose" alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg")%>" />
                            <span id="dialogClose-hover" style="display: inline;" class="tooltiptext-hover">When you copy, you get the HTML code for the whole example.</span>
                            <span id="dialogClose-click" style="display: none;" class="tooltiptext-click">HTML copied.</span>
                        </div>
                    </div>
            </div>
<pre class="jsSdkPreNoScroll" id="dialogClosePre">
const dsURL = "{PORTAL_SRC}/doceditor?fileId=";
modalElement.addEventListener("close", () => {
    const result = modalElement.returnValue;
    if (result && selectedTask) {
        const { id, title } = JSON.parse(result);
        const noAttachmentsMessage = document.querySelector("#attachmentsList .no-attachments");
        if (noAttachmentsMessage) {
            noAttachmentsMessage.remove();
        }
        const listItem = document.createElement("li");
        listItem.className = "attachment-item";
        const link = document.createElement("a");
        link.href = dsURL + id;
        link.target = "_blank";
        link.textContent = title;
        listItem.appendChild(link);
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            selectedTask.attachments = selectedTask.attachments.filter(item => item !== listItem);
            listItem.remove();
            if (selectedTask.attachments.length === 0) {
                showNoAttachmentsMessage();
            }
        });
        listItem.appendChild(deleteButton);
        selectedTask.attachments = selectedTask.attachments || [];
        selectedTask.attachments.push(listItem);
        document.getElementById("attachmentsList").appendChild(listItem);
    }
});</pre>
</div>
    </li>
</ol>

<h3>Step 4. Add the file selector</h3>

<p>Add a script to initialize the <b>file selector</b>.</p>
<ol>
    <li>
        <p>Add an event handler for <a href="<%= Url.Action("jssdk/events")%>#onAppReady">onAppReady</a>, which fires when initialization is successful:</p>
            <div style="width: 100%;">
                <div class="jsSdkHeader">
                    <div class="preContentType">
                        <span style="font-family: monospace">JS</span>
                    </div>
                        <div class="tooltip" >
                            <div class="copyJsSdk">
                                <img  id="onApp" alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg")%>" />
                                <span id="onApp-hover" style="display: inline;" class="tooltiptext-hover">When you copy, you get code for the whole example.</span>
                                <span id="onApp-click" style="display: none;" class="tooltiptext-click">Code copied.</span>
                            </div>
                        </div>
                </div>
<pre class="jsSdkPreNoScroll" id="onAppPre">
var onAppReady = function (e) {
    var frame = DocSpace.SDK.frames["ds-frame"];
}</pre>
</div>
    </li>
        
    <li>
        <p>Create a configuration for the <b>file selector</b>:</p>
            <div style="width: 100%;">
                <div class="jsSdkHeader">
                    <div class="preContentType">
                        <span style="font-family: monospace">JS</span>
                    </div>
                        <div class="tooltip" >
                            <div class="copyJsSdk">
                                <img  id="jsConfig" alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg")%>" />
                                <span id="config-hover" style="display: inline;" class="tooltiptext-hover">When you copy, you get code for the whole example.</span>
                                <span id="config-click" style="display: none;" class="tooltiptext-click">Code copied.</span>
                            </div>
                        </div>
                </div>
<pre class="jsSdkPreNoScroll" id="jsConfigPre">
const config = {
    "events": {
        "onSelectCallback": onSelectCallback,
        "onAppReady": onAppReady
    },
    "height": "700px",
    "width": "100%"
}</pre>
</div> 
    </li>
    <li>
        <p>Initialize the <b>file selector</b> with the <a href="<%= Url.Action("jssdk/methods")%>#initFileSelector">initFileSelector</a> method:</p>
            <div style="width: 100%; margin:0;">
                <div class="jsSdkHeader">
                    <div class="preContentType">
                        <span style="font-family: monospace">JS</span>
                    </div>
                        <div class="tooltip" >
                            <div class="copyJsSdk">
                                <img  id="init" alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg")%>" />
                                <span id="init-hover" style="display: inline;" class="tooltiptext-hover">When you copy, you get code for the whole example.</span>
                                <span id="init-click" style="display: none;" class="tooltiptext-click">Code copied.</span>
                            </div>
                        </div>
                </div>
<pre class="jsSdkPreNoScroll" id="initPre" >
var docSpace = DocSpace.SDK.initFileSelector(config);</pre>
</div> 
    </li>
</ol>

<h3>Step 5. Run the sample</h3>
<p>Run our HTML file and make sure everything works.</p>
<h2>Example</h2>

<div style="width: 100%;">
    <div class="jsSdkHeader">
        <div class="preContentType">
            <span style="font-family: monospace">HTML</span>
        </div>
            <div class="tooltip" >
                <div class="copyJsSdk">
                    <img  id="example" alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg")%>" />
                    <span id="example-hover" style="display: inline;" class="tooltiptext-hover">When you copy, you get the HTML code for the whole example.</span>
                    <span id="example-click" style="display: none;" class="tooltiptext-click">HTML copied.</span>
                </div>
            </div>
    </div>
<pre class="jsSdkPre" id="examplePre" style="height: 700px;">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8"&gt;
        &lt;script src="{PORTAL_SRC}/static/scripts/sdk/1.0.0/api.js"&gt;&lt;/script&gt;
        &lt;title&gt;An example of using file manager&lt;/title&gt;
        &lt;style&gt;
            body {
                font-family: Arial, sans-serif;
                margin: 20px;
                display: flex;
            }
            h1 {
                color: #333;
            }
            button {
                padding: 8px 12px;
                background-color: #007bff;
                color: #fff;
                border: none;
                cursor: pointer;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
            }
            th,td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }
            th {
                background-color: #f2f2f2;
            }
            a {
                text-decoration: none;
                color: #007bff;
            }
            a:hover {
                text-decoration: underline;
                color: #0056b3;
            }
            .task-row.selected {
                background-color: #d3e2ff;
            }
            #taskContainer {
                width: 70%;
                margin-right: 20px;
            }
            #attachmentsPanel {
                width: 30%;
                border: 1px solid #ccc;
                padding: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            #attachmentsPanel h2 {
                margin-top: 0;
            }
            #attachmentsPanel button {
                margin-top: 10px;
                align-self: flex-start;
            }
            #attachmentsList {
                list-style-type: none;
                padding: 0;
            }
            .attachment-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 5px 0;
            }
            .attachment-item a {
                flex-grow: 1;
            }
            .delete-button {
                background-color: #dc3545;
                color: white;
                border: none;
                cursor: pointer;
                padding: 5px 10px;
                margin-left: 10px;
            }
            .delete-button:hover {
                background-color: #c82333;
            }
        &lt;/style&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div id="taskContainer"&gt;
            &lt;table id="taskTable"&gt;
                &lt;thead&gt;
                    &lt;tr&gt;
                        &lt;th&gt;Task&lt;/th&gt;
                        &lt;th&gt;Description&lt;/th&gt;
                        &lt;th&gt;Priority&lt;/th&gt;
                    &lt;/tr&gt;
                &lt;/thead&gt;
                &lt;tbody id="taskList"&gt;
                    &lt;tr class="task-row"&gt;
                        &lt;td&gt;Prepare a sales analysis&lt;/td&gt;
                        &lt;td&gt;Analyze sales data for the last six months and prepare a detailed report&lt;/td&gt;
                        &lt;td&gt;Low&lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr class="task-row"&gt;
                        &lt;td&gt;Conclude an agreement with partners&lt;/td&gt;
                        &lt;td&gt;Sign contracts with new partners to expand the business and increase sales&lt;/td&gt;
                        &lt;td&gt;High&lt;/td&gt;
                    &lt;/tr&gt;
                &lt;/tbody&gt;
            &lt;/table&gt;
        &lt;/div&gt;
        &lt;div id="attachmentsPanel"&gt;
            &lt;div&gt;
                &lt;h2&gt;Attachments&lt;/h2&gt;
                &lt;ul id="attachmentsList"&gt;&lt;/ul&gt;
            &lt;/div&gt;
            &lt;button id="attachButton"&gt;Attach file&lt;/button&gt;
        &lt;/div&gt;
        &lt;dialog id="modal" style="width: 600px; height: 700px;"&gt;
            &lt;div id="ds-frame"&gt;&lt;/div&gt;
        &lt;/dialog&gt;
        &lt;script&gt;
            const taskRows = document.querySelectorAll(".task-row");
            let selectedTask = null;
            const modalElement = document.getElementById("modal");
            const attachButton = document.getElementById("attachButton");
            const dsURL = "{PORTAL_SRC}/doceditor?fileId=";
            const loadAttachments = (taskRow) => {
                const attachmentsList = document.getElementById("attachmentsList");
                attachmentsList.innerHTML = "";
                if (taskRow.attachments && taskRow.attachments.length > 0) {
                    taskRow.attachments.forEach(item => {
                        attachmentsList.appendChild(item);
                    });
                }
            };
            taskRows.forEach(row => {
                row.addEventListener("click", () => {
                    if (selectedTask) {
                        selectedTask.classList.remove("selected");
                    }
                    selectedTask = row;
                    row.classList.add("selected");
                    loadAttachments(row);
                });
            });
            attachButton.addEventListener("click", () => {
                if (selectedTask) {
                    modalElement.showModal();
                }
            });
            const onSelectCallback = async (e) => {
                modalElement.close(JSON.stringify({ id: e.id, title: e.title }));
            };
            modalElement.addEventListener("close", () => {
                const result = modalElement.returnValue;
                if (result && selectedTask) {
                    const { id, title } = JSON.parse(result);
                    const noAttachmentsMessage = document.querySelector("#attachmentsList .no-attachments");
                    if (noAttachmentsMessage) {
                        noAttachmentsMessage.remove();
                    }
                    const listItem = document.createElement("li");
                    listItem.className = "attachment-item";
                    const link = document.createElement("a");
                    link.href = dsURL + id;
                    link.target = "_blank";
                    link.textContent = title;
                    listItem.appendChild(link);
                    const deleteButton = document.createElement("button");
                    deleteButton.className = "delete-button";
                    deleteButton.textContent = "Delete";
                    deleteButton.addEventListener("click", () => {
                        selectedTask.attachments = selectedTask.attachments.filter(item => item !== listItem);
                        listItem.remove();
                        if (selectedTask.attachments.length === 0) {
                            showNoAttachmentsMessage();
                        }
                    });
                    listItem.appendChild(deleteButton);
                    selectedTask.attachments = selectedTask.attachments || [];
                    selectedTask.attachments.push(listItem);
                    document.getElementById("attachmentsList").appendChild(listItem);
                }
            });
            const onAppReady = () => {
                DocSpace.SDK.frames["ds-frame"];
            };
            const config = {
                events: {
                    onAppReady: onAppReady,
                    onSelectCallback: onSelectCallback,
                },
                downloadToEvent: true,
                height: "700px"
            };
            DocSpace.SDK.initFileSelector(config);
        &lt;/script&gt;
    &lt;/body&gt;
&lt;/html&gt;</pre>
</div>  

<h2>Getting help</h2>
<p>To get help, please create issues on <a href="https://github.com/ONLYOFFICE/DocSpace/issues" target="_blank">GitHub</a>.</p>


<script>
    $(".copyJsSdk").click(function (e) {
        var currentId = e.target.id;
        var hoverElementId = $(this).find('.tooltiptext-hover').attr('id');
        var clickElementId = $(this).find('.tooltiptext-click').attr('id');
        var html = createJsSdkHTML(currentId);
        copyJsSdkToClipboard(html,hoverElementId,clickElementId);
    })

    $(".tooltip").mouseleave(function() {
    var hoverElementId = $(this).find('.tooltiptext-hover').attr('id');
    var clickElementId = $(this).find('.tooltiptext-click').attr('id');
    copyJsSdkMouseLeave(hoverElementId, clickElementId);
});
</script>