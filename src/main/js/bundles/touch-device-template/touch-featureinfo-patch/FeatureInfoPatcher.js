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
define(["dojo/_base/declare", "featureinfo/FeatureInfoWidget", "dojo/aspect", "ct/util/css", "ct/ui/desktop/util"],
        function(declare, FeatureInfoWidget, d_aspect, css, util) {
            return declare([], {
                activate: function() {
                    var i18n = this._i18n.get();
                    d_aspect.after(FeatureInfoWidget.prototype, "_adaptFeatureInfoWindowSizeToContent", function() {
                        var selectHeaderWidget = this.selectHeader;
                        if (!selectHeaderWidget) {
                            return;
                        }
                        if (css.isHidden(selectHeaderWidget.domNode)) {
                            var window = util.findEnclosingWindow(this);
                            window.close();
                        } else {
                            var msg = i18n.choose;
                            this.featureContentPane.set("content", msg);
                        }
                    }, true);
                }
            });
        });