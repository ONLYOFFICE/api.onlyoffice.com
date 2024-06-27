<%@ Control Language="C#" Inherits="System.Web.Mvc.ViewUserControl"%>

<h1>
    <span class="hdr">DocSpace JS SDK samples</span>
</h1>

<ul class="sample-block">
    <li class="sample-example" data-types="text-editor,spreadsheet,presentation,visual,non-system,ole-object">
        <a href="<%= Url.Action("jssdk/samples/sampleopenfile")%>">
            <div class="example-sample-img sample-open-file"></div>
        </a>
        <div class="sample-info">
            <p class="name-example-sample"><a href="<%= Url.Action("jssdk/samples/sampleopenfile")%>">Open file in ONLYOFFICE editors</a></p>
            <p>Opens a file in ONLYOFFICE editors using the file selector.</p>
        </div>
        <p class="block_more-sample"><a href="<%= Url.Action("jssdk/samples/sampleopenfile")%>">More</a></p>
    </li>
    <li class="sample-example" data-types="text-editor,spreadsheet,presentation,visual,non-system,ole-object">
        <a href="<%= Url.Action("jssdk/samples/authorization")%>">
            <div class="example-sample-img authorization"></div>
        </a>
        <div class="sample-info">
            <p class="name-example-sample"><a href="<%= Url.Action("jssdk/samples/authorization")%>">Log in to DocSpace account</a></p>
            <p>Logs in to the DocSpace account using the specified email and password hash.</p>
        </div>
        <p class="block_more-sample"><a href="<%= Url.Action("jssdk/samples/authorization")%>">More</a></p>
    </li>
    <li class="sample-example" data-types="text-editor,spreadsheet,presentation,visual,non-system,ole-object">
        <a href="<%= Url.Action("jssdk/samples/createfileinselectedfolder")%>">
            <div class="example-sample-img create-file-in-selected-folder"></div>
        </a>
        <div class="sample-info">
            <p class="name-example-sample"><a href="<%= Url.Action("jssdk/samples/createfileinselectedfolder")%>">Create file in selected folder</a></p>
            <p>Creates a file in the selected folder and opens it in the editors.</p>
        </div>
        <p class="block_more-sample"><a href="<%= Url.Action("jssdk/samples/createfileinselectedfolder")%>">More</a></p>
    </li>
    <li class="sample-example" data-types="text-editor,spreadsheet,presentation,visual,non-system,ole-object">
        <a href="<%= Url.Action("jssdk/samples/customizationofeditors")%>">
            <div class="example-sample-img customization-of-editors"></div>
        </a>
        <div class="sample-info">
            <p class="name-example-sample"><a href="<%= Url.Action("jssdk/samples/customizationofeditors")%>">Customize editors</a></p>
            <p>Customizes the editor interface so that it looks like your other products.</p>
        </div>
        <p class="block_more-sample"><a href="<%= Url.Action("jssdk/samples/customizationofeditors")%>">More</a></p>
    </li>
    <li class="sample-example" data-types="text-editor,spreadsheet,presentation,visual,non-system,ole-object">
        <a href="<%= Url.Action("jssdk/samples/attachfiles")%>">
            <div class="example-sample-img attach-files"></div>
        </a>
        <div class="sample-info">
            <p class="name-example-sample"><a href="<%= Url.Action("jssdk/samples/attachfiles")%>">Attach files</a></p>
            <p>Attaches files to a website using the file selector.</p>
        </div>
        <p class="block_more-sample"><a href="<%= Url.Action("jssdk/samples/attachfiles")%>">More</a></p>
    </li>
</ul>