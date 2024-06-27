<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl" %>

<h1>
    <span class="hdr">Log in to DocSpace account</span>
</h1>
<p class="dscr">Logs in to the DocSpace account using the specified email and password hash.</p>
<img class="screenshot" alt="OpenEditors" src="<%= Url.Content("~/content/img/docspace/gifs/js-sdk-authorization-sample.gif") %>" />

<h2>Before you start</h2>

<p>Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.
You need to <a href="<%= Url.Action("jssdk/")%>#docspace-url">add the URL</a> of your server's root directory to the <b>Developer Tools</b> section of DocSpace.</p>

<h2>Building a sample</h2>

<h3>Step 1. Set HTML structure</h3>
<p>Create an HTML file. Add two text fields and a button. The HTML file must include a <em>div</em> tag where we specify the DocSpace connection parameters:</p>

<div style="width: 100%;">
    <div class="jsSdkHeader">
        <div class="preContentType">
            <span style="font-family: monospace">HTML</span>
        </div>
            <div class="tooltip" >
                <div class="copyJsSdk">
                    <img  id="htmlStructure" alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg") %>" />
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
        &lt;label&gt;Login&lt;label&gt;&lt;br /&gt;
        &lt;input type="text" id="login"&gt;&lt;br /&gt;
        &lt;label&gt;Password&lt;/label&gt;&lt;br /&gt;
        &lt;input type="text" id="password" style="-webkit-text-security: circle"&gt; &lt;br /&gt;
        &lt;button id="startButton" onclick="onButtonClick()" style="margin-top: 20px;"&gt;Login&lt;/button&gt;
        &lt;div id="ds-frame"&gt;&lt;/div&gt;
        ...
    &lt;/body&gt;
&lt;/html&gt;</pre>
</div>

<p>The API JavaScript file can normally be found in the following DocSpace folder:</p>
<p><b>{PORTAL_SRC}/static/scripts/sdk/1.0.0/api.js</b></p>
<p>where <b>{PORTAL_SRC}</b> is the name of the server with the ONLYOFFICE DocSpace installed.</p>

<h3>Step 2. Initialize the System mode</h3>

<p>Add a script to initialize the <a href="<%= Url.Action("jssdk/initmodes/system") %>">System</a> mode.</p>
<ol>
    <li>
        <p>Add an event handler for <a href="<%= Url.Action("jssdk/events") %>#onAppReady">onAppReady</a>, which fires when initialization is successful:</p>
            <div style="width: 100%;">
                <div class="jsSdkHeader">
                    <div class="preContentType">
                        <span style="font-family: monospace">JS</span>
                    </div>
                        <div class="tooltip" >
                            <div class="copyJsSdk">
                                <img  id="onApp" alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg") %>" />
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
        <p>Create a configuration for the <b>System</b> mode:</p>
            <div style="width: 100%;">
                <div class="jsSdkHeader">
                    <div class="preContentType">
                        <span style="font-family: monospace">JS</span>
                    </div>
                        <div class="tooltip" >
                            <div class="copyJsSdk">
                                <img  id="jsConfig" alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg") %>" />
                                <span id="config-hover" style="display: inline;" class="tooltiptext-hover">When you copy, you get code for the whole example.</span>
                                <span id="config-click" style="display: none;" class="tooltiptext-click">Code copied.</span>
                            </div>
                        </div>
                </div>
<pre class="jsSdkPreNoScroll" id="jsConfigPre">
const config = {
    "events": {
        "onAppReady": onAppReady
    }
}</pre>
</div> 
    </li>
    <li>
        <p>Initialize the <b>System</b> mode with the <a href="<%= Url.Action("jssdk/methods")%>#initSystem">initSystem</a> method:</p>
            <div style="width: 100%; margin:0;">
                <div class="jsSdkHeader">
                    <div class="preContentType">
                        <span style="font-family: monospace">JS</span>
                    </div>
                        <div class="tooltip" >
                            <div class="copyJsSdk">
                                <img  id="init" alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg") %>" />
                                <span id="init-hover" style="display: inline;" class="tooltiptext-hover">When you copy, you get code for the whole example.</span>
                                <span id="init-click" style="display: none;" class="tooltiptext-click">Code copied.</span>
                            </div>
                        </div>
                </div>
<pre class="jsSdkPreNoScroll" id="initPre" >
var docSpace = DocSpace.SDK.initSystem(config);</pre>
</div> 
    </li>
</ol>

<h3>Step 3. Add a method to log in</h3>
<p>Add the <b>onButtonClick()</b> event handler for the button. Using the <a href="<%= Url.Action("jssdk/methods") %>#getHashSettings">getHashSettings</a> method, return the password hash settings
and generate the password hash using the <a href="<%= Url.Action("jssdk/methods") %>#createHash">createHash</a> method. After this, authorize the user using the <a href="<%= Url.Action("jssdk/methods") %>#login">login</a> method:</p>

<div style="width: 100%;">
    <div class="jsSdkHeader">
        <div class="preContentType">
            <span style="font-family: monospace">JS</span>
        </div>
            <div class="tooltip" >
                <div class="copyJsSdk">
                    <img  id="onClick" alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg") %>" />
                    <span id="onClick-hover" style="display: inline;" class="tooltiptext-hover">When you copy, you get the HTML code for the whole example.</span>
                    <span id="onClick-click" style="display: none;" class="tooltiptext-click">HTML copied.</span>
                </div>
            </div>
    </div>
<pre class="jsSdkPreNoScroll" id="onClickPre">
var onButtonClick = async function () {
    var frame = DocSpace.SDK.frames["ds-frame"];
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    var hashSettings = await frame.getHashSettings();
    var passwordHash = await frame.createHash(password, hashSettings);
    frame.login(login, passwordHash);
}</pre>
</div>

<h3>Step 4. Run the sample</h3>
<p>Run our HTML file and make sure everything works.</p>
<h2>Example</h2>

<div style="width: 100%;">
    <div class="jsSdkHeader">
        <div class="preContentType">
            <span style="font-family: monospace">HTML</span>
        </div>
            <div class="tooltip" >
                <div class="copyJsSdk">
                    <img  id="example" alt="Copy" src="<%= Url.Content("~/content/img/copy-content.svg") %>" />
                    <span id="example-hover" style="display: inline;" class="tooltiptext-hover">When you copy, you get the HTML code for the whole example.</span>
                    <span id="example-click" style="display: none;" class="tooltiptext-click">HTML copied.</span>
                </div>
            </div>
    </div>
<pre class="jsSdkPreNoScroll" id="examplePre">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
    &lt;head&gt;
        &lt;meta charset="UTF-8"&gt;
        &lt;title&gt;DocSpace JavaScript SDK&lt;/title&gt;
        &lt;script src="{PORTAL_SRC}/static/scripts/sdk/1.0.0/api.js"&gt;&lt;/script&gt;
        ...
    &lt;/head&gt;
    &lt;body&gt;
        &lt;label&gt;Login&lt;label&gt;&lt;br /&gt;
        &lt;input type="text" id="login"&gt;&lt;br /&gt;
        &lt;label&gt;Password&lt;/label&gt;&lt;br /&gt;
        &lt;input type="text" id="password" style="-webkit-text-security: circle"&gt; &lt;br /&gt;
        &lt;button id="startButton" onclick="onButtonClick()" style="margin-top: 20px;"&gt;Login&lt;/button&gt;
        &lt;div id="ds-frame"&gt;&lt;/div&gt;
        ...
    &lt;/body&gt;
    &lt;script&gt;
        var onButtonClick = async function () {
            var frame = DocSpace.SDK.frames["ds-frame"];
            var login = document.getElementById("login").value;
            var password = document.getElementById("password").value;
            var hashSettings = await frame.getHashSettings();
            var passwordHash = await frame.createHash(password, hashSettings);
            frame.login(login, passwordHash);
        }
        var onAppReady = function (e) {
            var frame = DocSpace.SDK.frames["ds-frame"];
        };
        const config = {
            "events": {
                "onAppReady": onAppReady,
            }
        };
        var docSpace = DocSpace.SDK.initSystem(config);   
    &lt;/script&gt;
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
