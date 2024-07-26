<%@ Import Namespace="ASC.Api.Web.Help.DocumentGenerator" %>
<%@ 
    Control
    Language="C#"
    Inherits="System.Web.Mvc.ViewUserControl<IEnumerable<MsDocEntryPoint>>"
%>

<% var entryPoints = Model as List<MsDocEntryPoint>; %>

<div class="nav-list">
    <ul class="side-nav root">
        <%
            var currentViewName = "";
            if (Html.GetCurrentViewName() != null)
            {
                currentViewName = Html.GetCurrentViewName().ToString();
            }
            switch(currentViewName)
            {
                case "jssdk":
                    %>
                    <div class="treeheader">Get Started</div>
                    <li>
                        <a href="<%= Url.Action("jssdk/") %>">Basic concepts</a>
                    </li>
                    <div class="treeheader">JavaScript SDK</div>
                    <ul class="side-nav root">
                        <li>
                           <a href="<%= Url.Action("jssdk/initmodes") %>">Initialization modes</a>
                           <ul>
                                <li>
                                    <a href="<%= Url.Action("jssdk/initmodes/manager") %>">Manager</a>
                                </li>
                                <li>
                                    <a href="<%= Url.Action("jssdk/initmodes/roomselector") %>">Room-selector</a>
                                </li>
                                <li>
                                    <a href="<%= Url.Action("jssdk/initmodes/fileselector") %>">File-selector</a>
                                </li>
                                <li>
                                    <a href="<%= Url.Action("jssdk/initmodes/editor") %>">Editor</a>
                                </li>
                                <li>
                                    <a href="<%= Url.Action("jssdk/initmodes/viewer") %>">Viewer</a>
                                </li>
                                <li>
                                    <a href="<%= Url.Action("jssdk/initmodes/system") %>">System</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                           <a href="<%= Url.Action("jssdk/config") %>">Config</a>
                        </li>
                        <li>
                           <a href="<%= Url.Action("jssdk/methods") %>">Methods</a>
                        </li>
                        <li>
                           <a href="<%= Url.Action("jssdk/events") %>">Events</a>
                        </li>
                    </ul>
                <%
                    break;
                case "pluginssdk":
                    %>
                    <div class="treeheader">Get Started</div>
                    <ul class="side-nav root">
                        <li>
                            <a href="<%= Url.Action("pluginssdk/") %>">Basic concepts</a>
                        </li>
                        <li>
                            <a href="<%= Url.Action("pluginssdk/gettingstarted") %>">Getting started</a>
                        </li>
                    </ul>
                    <div class="treeheader">Plugins SDK</div>
                    <ul class="side-nav root">
                        <li>
                            <a href="<%= Url.Action("pluginssdk/creatingtemplate") %>">Creating plugin template</a>
                        </li>
                        <li>
                            <a href="<%= Url.Action("pluginssdk/structure") %>">Plugin structure</a>
                        </li>
                        <li>
                            <a href="<%= Url.Action("pluginssdk/codingplugin") %>">Coding plugin</a>
                            <ul>
                                <li>
                                    <a href="<%= Url.Action("pluginssdk/codingplugin/plugintypes") %>">Plugin types</a>
                                    <ul>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugintypes/plugin") %>">Plugin</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugintypes/settingsplugin") %>">SettingsPlugin</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugintypes/apiplugin") %>">APIPlugin</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugintypes/contextmenuplugin") %>">ContextMenuPlugin</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugintypes/infopanelplugin") %>">InfoPanelPlugin</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugintypes/mainbuttonplugin") %>">MainButtonPlugin</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugintypes/profilemenuplugin") %>">ProfileMenuPlugin</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugintypes/eventlistenerplugin") %>">EventListenerPlugin</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugintypes/fileplugin") %>">FilePlugin</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="<%= Url.Action("pluginssdk/codingplugin/pluginitems") %>">Plugin items</a>
                                    <ul>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/pluginitems/contextmenuitem") %>">ContextMenuItem</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/pluginitems/infopanelitem") %>">InfoPanelItem</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/pluginitems/mainbuttonitem") %>">MainButtonItem</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/pluginitems/profilemenuitem") %>">ProfileMenuItem</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/pluginitems/fileitem") %>">FileItem</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/pluginitems/eventlisteneritem") %>">EventListenerItem</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="<%= Url.Action("pluginssdk/codingplugin/pluginmessage") %>">Plugin message</a>
                                </li>
                                <li>
                                    <a href="<%= Url.Action("pluginssdk/codingplugin/events") %>">Events</a>
                                </li>
                                <li>
                                    <a href="<%= Url.Action("pluginssdk/codingplugin/plugincomponents") %>">Plugin components</a>
                                    <ul>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugincomponents/box") %>">Box</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugincomponents/button") %>">Button</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugincomponents/checkbox") %>">Checkbox</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugincomponents/combobox") %>">ComboBox</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugincomponents/component") %>">Component</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugincomponents/createdialog") %>">CreateDialog</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugincomponents/iframe") %>">IFrame</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugincomponents/img") %>">img</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugincomponents/input") %>">Input</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugincomponents/label") %>">Label</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugincomponents/modaldialog") %>">ModalDialog</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugincomponents/skeleton") %>">Skeleton</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugincomponents/text") %>">Text</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugincomponents/textarea") %>">TextArea</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugincomponents/toast") %>">Toast</a>
                                        </li>
                                        <li>
                                            <a href="<%= Url.Action("pluginssdk/codingplugin/plugincomponents/togglebutton") %>">ToggleButton</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="<%= Url.Action("pluginssdk/buildingplugin") %>">Building plugin</a>
                        </li>
                        <li>
                            <a href="<%= Url.Action("pluginssdk/config") %>">Config</a>
                        </li>
                        <li>
                            <a href="<%= Url.Action("pluginssdk/addingplugin") %>">Adding plugin</a>
                        </li>
                        <li>
                            <a href="/docspace-storybook" target="_blank">Storybook</a>
                        </li>
            <li>
                <a title="How to create plugin step by step" href="<%= Url.Action("pluginssdk/plugintutorial") %>">How to create plugin step by step</a>
                <ul>
                    <li>
                        <a href="<%= Url.Action("pluginssdk/plugintutorial/planning") %>">Planning</a>
                    </li>
                    <li>
                        <a href="<%= Url.Action("pluginssdk/plugintutorial/developing") %>">Developing</a>
                        <ul>
                            <li>
                                <a title="Step 1. Create a plugin template" href="<%= Url.Action("pluginssdk/plugintutorial/developing/creatingtemplate") %>">Step 1. Create a plugin template</a>
                            </li>
                            <li>
                                <a title="Step 2. Configure the plugin entry point" href="<%= Url.Action("pluginssdk/plugintutorial/developing/configuringentrypoint") %>">Step 2. Configure the plugin entry point</a>
                            </li>
                            <li>
                                <a title="Step 3. Add plugin icons" href="<%= Url.Action("pluginssdk/plugintutorial/developing/addingicons") %>">Step 3. Add plugin icons</a>
                            </li>
                            <li>
                                <a title="Step 4. Configure the plugin's interface elements" href="<%= Url.Action("pluginssdk/plugintutorial/developing/configuringinterfaceelements") %>">Step 4. Configure the plugin's interface elements</a>
                            </li>
                            <li>
                                <a title="Step 5. Create plugin types" href="<%= Url.Action("pluginssdk/plugintutorial/developing/creatingplugintypes") %>">Step 5. Create plugin types</a>
                            </li>
                            <li>
                                <a title="Step 6. Create the settings plugin type" href="<%= Url.Action("pluginssdk/plugintutorial/developing/creatingsettingstype") %>">Step 6. Create the settings plugin type</a>
                            </li>
                            <li>
                                <a title="Step 7. Create the main plugin code file" href="<%= Url.Action("pluginssdk/plugintutorial/developing/creatingcodefile") %>">Step 7. Create the main plugin code file</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="<%= Url.Action("pluginssdk/plugintutorial/testing") %>">Testing</a>
                    </li>
                    <li>
                        <a href="<%= Url.Action("pluginssdk/plugintutorial/using") %>">Using</a>
                    </li>
                </ul>
            </li>
        </ul>

        <div class="treeheader">More information</div>
                    <ul class="side-nav root">
                        <li>
                            <a href="<%= Url.Action("pluginssdk/changelog") %>">Changelog</a>
                        </li>
                    </ul>
                <%
                    break;
                case "backend":
                    %>
                    <div class="treeheader">Get Started</div>
                    <ul class="side-nav root">
                        <li>
                            <a href="<%= Url.Action("backend/") %>">Basic concepts</a>
                        </li>
                        <li>
                            <a href="<%= Url.Action("backend/getdocspace") %>">Get ONLYOFFICE DocSpace</a>
                        </li>
                        <li>
                            <a href="<%= Url.Action("backend/howitworks") %>">How it works</a>
                            <ul>
			                    <li>
			                        <a href="<%= Url.Action("backend/howitworks/auth") %>">Passing authentication</a>
			                    </li>
			                    <li>
			                        <a href="<%= Url.Action("backend/howitworks/longrunningoperations") %>">Long-running operations</a>
			                    </li>
			                    <li>
			                        <a href="<%= Url.Action("backend/howitworks/uploadinglargefiles") %>">Uploading large files</a>
			                    </li>
			                    <li>
			                        <a href="<%= Url.Action("backend/howitworks/webhooks") %>">Webhooks</a>
			                    </li>
                			</ul>
						</li>
					</ul>
					<div class="treeheader">API Backend</div>
                    <ul class="side-nav root">
                        <% if (entryPoints != null && entryPoints.Any())
                        { %>
                        <% foreach (var entryPoint in entryPoints.OrderBy(x => x.Name).ToList())
                        { %>
                        <li>
                            <a href="<%= Url.DocUrl(entryPoint, null, "docspace") %>"><%= entryPoint.Name %></a>
                            <% var categories = entryPoint.Methods.Where(x => !string.IsNullOrEmpty(x.Category)).GroupBy(x => x.Category).OrderBy(x => x.Key).ToList(); %>
                            <% var rootMethods = entryPoint.Methods.Where(x => string.IsNullOrEmpty(x.Category)).OrderBy(x => x.FunctionName).ToList(); %>
                            <% if (categories.Any() || rootMethods.Any()) { %>
                            <ul>
                                <% if (categories.Any()) { %>
                                    <% foreach (var category in categories)
                                    { %>
                                        <li>
                                            <a href="<%= Url.DocUrl(entryPoint.Name, category.Key, null, null, "docspace") %>"><%= category.Key %></a>
                                            <% var methods = category.OrderBy(x => x.FunctionName).ToList(); %>
                                            <% if (methods.Any()) { %>
                                                <ul>
                                                    <% foreach (var method in methods) { %>
                                                        <li>
                                                            <a title="<%= method.FunctionName %>" href="<%= Url.DocUrl(entryPoint, method, "docspace") %>"><%= method.FunctionName %></a>
                                                        </li>
                                                    <% } %>
                                                </ul>
                                            <% } %>
                                        </li>
                                    <% } %>
                                <% } %>
                                <% if (rootMethods.Any()) { %>
                                    <% foreach (var method in rootMethods)
                                    { %>
                                        <li>
                                            <a title="<%= method.FunctionName %>" href="<%= Url.DocUrl(entryPoint, method, "docspace") %>"><%= method.FunctionName %></a>
                                        </li>
                                    <% } %>
                                <% } %>
                            </ul>
                            <% } %>
                        </li>
                        <% } %>
                        <% } %>
                    </ul>
                    <div class="treeheader">More information</div>
                    <ul class="side-nav root">
                        <li>
                            <a href="<%= Url.Action("backend/faq") %>">FAQ</a>
                        </li>
                        <li>
                            <a href="<%= Url.Action("backend/filters") %>">Filtering</a>
                        </li>
                    </ul>
                <%
                    break;
                case "apisystem":
                    %>
                    <div class="treeheader">Get Started</div>
                    <ul class="side-nav root">
                        <li>
                            <a href="<%= Url.Action("apisystem/") %>">Basic concepts</a>
                        </li>
                        <li>
                            <a href="<%= Url.Action("apisystem/authentication") %>">Authentication</a>
                        </li>
                    </ul>
                    <div class="treeheader">For hosting providers</div>
                    <ul class="side-nav root">
                        <li>
                            <a href="<%= Url.Action("apisystem/portalsection") %>">Portals</a>
                            <ul>
                                <li>
                                    <a href="<%= Url.Action("apisystem/portalsection/portalget") %>">Get portals</a>
                                </li>
                                <li>
                                    <a href="<%= Url.Action("apisystem/portalsection/portalregister") %>">Register portal</a>
                                </li>
                                <li>
                                    <a href="<%= Url.Action("apisystem/portalsection/portalremove") %>">Portal deletion</a>
                                </li>
                                <li>
                                    <a href="<%= Url.Action("apisystem/portalsection/portalstatus") %>">Portal status</a>
                                </li>
                                <li>
                                    <a href="<%= Url.Action("apisystem/portalsection/validateportalname") %>">Validate portal name</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="<%= Url.Action("apisystem/tariffsection") %>">Billing</a>
                            <ul>
                                <li>
                                    <a href="<%= Url.Action("apisystem/tariffsection/tariffget") %>">Get tariff</a>
                                </li>
                                <li>
                                    <a href="<%= Url.Action("apisystem/tariffsection/tariffset") %>">Set tariff</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div class="treeheader">More information</div>
                    <ul class="side-nav root">
                        <li>
                            <a href="<%= Url.Action("apisystem/faq") %>">FAQ</a>
                        </li>
                        <li>
                            <a href="<%= Url.Action("apisystem/filters") %>">Filtering</a>
                        </li>
                    </ul>
                <%
                    break;
            }
            %>
    </ul>
</div>
