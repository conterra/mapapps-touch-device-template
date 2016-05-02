/*
 * Copyright (C) 2015 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define(["dojo/_base/declare", "dijit/_WidgetBase", "ct/util/css", "dijit/_TemplatedMixin", "dojo/dom-construct", "dojo/query"],
        function(declare, _WidgetBase, css, _TemplatedMixin, domConstruct, query) {
            return declare([_WidgetBase, _TemplatedMixin], {
                baseClass: "ctActiveToolWriter",
                i18n: {
                    titleSingle: "Active tool:",
                    titleMulti: "Active tools:"
                },
                templateString: "<div class='dijitDisplayNone'><span data-dojo-attach-point='_titleNode'  class='titleNode'></span><ul data-dojo-attach-point='_toolsNode' class='toolListNode'></span>",
                constructor: function() {
                    this._setToolCount(0);
                },
                _getToolCount: function() {
                    return this._toolCount || 0;
                },
                startup: function() {
                    this.inherited(arguments);
                    this._writeTitle();
                },
                _writeTitle: function() {
                    var i18n = this.i18n;
                    var toolCount = this._getToolCount();
                    var title = (toolCount > 1) ? i18n.titleMulti : i18n.titleSingle;
                    this._titleNode.innerHTML = title;
                },
                _setToolCount: function(toolCount) {
                    var domNode = this.domNode;
                    toolCount = (toolCount < 0) ? 0 : toolCount;
                    this._toolCount = toolCount;
                    css.switchHidden(domNode, toolCount === 0);
                    if (this._started) {
                        this._writeTitle();
                    }
                },
                _increaseToolCount: function() {
                    var toolCount = this._getToolCount();
                    toolCount++;
                    this._setToolCount(toolCount);
                },
                _decreaseToolCount: function() {
                    var toolCount = this._getToolCount();
                    toolCount--;
                    this._setToolCount(toolCount);
                },
                _onHandleToolActivate: function(event) {
                    var tool = event.getProperty("tool");
                    if (!tool) {
                        return;
                    }
                    var domNode = this.domNode;
                    this._increaseToolCount();
                    var tool = event.getProperty("tool");
                    var id = tool.get("id");
                    var title = tool.get("title") || id;
                    var iconClass = tool.get("iconClass");
                    var liNode = domConstruct.create("li", {'class': id + ' color-highlight'}, this._toolsNode);
                    domConstruct.create("span", {"class": iconClass}, liNode);
                    domConstruct.create("span", {innerHTML: title}, liNode);
                },
                _onHandleToolDeactivate: function(event) {
                    var tool = event.getProperty("tool");
                    if (!tool) {
                        return;
                    }
                    this._decreaseToolCount();
                    var id = tool.get("id");
                    // query by id
                    var queryClass = "." + id;
                    query(queryClass, this._toolsNode).forEach(function(node) {
                        domConstruct.destroy(node);
                    });
                }
            });
        });