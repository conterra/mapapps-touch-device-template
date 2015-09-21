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
define(
        /*
         * COPYRIGHT 2010-2011 con terra GmbH Germany
         */
                ({
                    apptitle: "map.apps",
                    custominfo: {
                        imprint: {
                            title: "Impressum",
                            tooltip: "Zeige Impressum",
                            content: "Verantwortlich für diese Seite ist:<br><b>con terra</b> - Gesellschaft für Angewandte Informationstechnologie mbH<br><br>Martin-Luther-King-Weg 24<br>48155 Münster<br>Deutschland<br><br>Ansprechpartner: Reinhard Abke<br><br>Telefon +49 89 207 005 2200<br>Telefax +49 251 596 880 91<br>info@conterra.de<br>http://www.conterra.de<br><br>Vertretungsberechtigte Geschäftsführer der con terra:<br>Karl Wiesmann, Uwe König<br><br>UstId-Nr.: DE 162264061<br>Handelsregister: HRB 4149, Amtsgericht Münster"
                        }
                    },
                    bookmarks: {
                        ui: {
                            toolTitle: "R\u00E4umliche Lesezeichen",
                            clearButton: "Alle Lesezeichen l\u00F6schen",
                            deleteMessage: "Wollen Sie wirklich alle Lesezeichen l\u00F6schen?",
                            deleteTitle: "Sind Sie sicher?",
                            deleteWarning: "Diese Aktion kann nicht r\u00FCckg\u00E4ngig gemacht werden!"
                        },
                        predefined: {
                            europe: "Europa",
                            germany: "Deutschland"
                        }
                    },
                    contentviewer: {
                        regions: {
                            search: "Suche nach weiteren Informationen!"
                        }
                    },
                    map: {
                        glasspane: {
                            settlements: {
                                tel: "Telefon",
                                link: "Homepage aufrufen"
                            }
                        },
                        base: {
                            topo: {
                                title: "Topographische Karte",
                                description: "Eine topographische Weltkarte"
                            },
                            aerial: {
                                title: "Luftbild",
                                description: "Luftbildaufnahmen der gesamten Welt"
                            },
                            streets: {
                                title: "Stra\u00DFen",
                                description: "Eine detaillierte Stra\u00DFenkarte"
                            }
                        },
                        operational: {
                            streets: {
                                title: "Stra\u00DFen"
                            },
                            bathingwater: {
                                title: "Badegew\u00E4sser"
                            },
                            regions: {
                                title: "Biogeographische Regionen"
                            },
                            natura2000: {
                                title: "Natura 2000 Schutzgebiete"
                            },
                            brachflaechen: {
                                title: "Brachfl\u00E4che"
                            }
                        }
                    },
                    parametermanager: {
                        ui: {
                            encoderBtn: "Aktuelle Karte teilen",
                            encoderBtnTooltip: "Link Werkzeug",
                            sendMail: "E-Mail",
                            linkBoxTitle: "Link URL",
                            codeBoxTitle: "Code zum Einbinden in HTML",
                            mailBody: "${url}",
                            mailSubject: "Schau dir mal diese Karte an!",
                            size: "Gr\u00F6\u00DFe (Pixel)"
                        }
                    },
                    resultcenter: {
                        fields: {
                            title: "Titel"
                        }
                    },
                    selection: {
                        infoservice: "Social-Media-Abfrage",
                        rectangle: "L\u00e4nderauswahl (Rechteck)",
                        point: "L\u00e4nderauswahl (Punkt)",
                        circle: "L\u00e4nderauswahl (Kreis)",
                        freehand: "L\u00e4nderauswahl (Freihand Polygon)",
                        bathingwater_1: {
                            extent: "L\u00e4nder ausw\u00e4hlen um Daten zur Badegew\u00e4sser-Qualit\u00e4t anzuzeigen (Rechteck)",
                            point: "L\u00e4nder ausw\u00e4hlen um Daten zur Badegew\u00e4sser-Qualit\u00e4t anzuzeigen (Punkt)",
                            circle: "L\u00e4nder ausw\u00e4hlen um Daten zur Badegew\u00e4sser-Qualit\u00e4t anzuzeigen (Kreis)",
                            freehand: "L\u00e4nder ausw\u00e4hlen um Daten zur Badegew\u00e4sser-Qualit\u00e4t anzuzeigen (Freihand-Polygon)"
                        },
                        bathingwater_4: {
                            extent: "Standorte ausw\u00e4hlen um Daten zur Badegew\u00e4sser-Qualit\u00e4t anzuzeigen (Rechteck)",
                            point: "Standorte ausw\u00e4hlen um Daten zur Badegew\u00e4sser-Qualit\u00e4t anzuzeigen (Punkt)",
                            circle: "Standorte ausw\u00e4hlen um Daten zur Badegew\u00e4sser-Qualit\u00e4t anzuzeigen (Kreis)",
                            freehand: "Standorte ausw\u00e4hlen um Daten zur Badegew\u00e4sser-Qualit\u00e4t anzuzeigen (Freihand-Polygon)"
                        },
                        regions_0: {
                            extent: "Regionen ausw\u00e4hlen (Rechteck)",
                            point: "Regionen ausw\u00e4hlen (Punkt)",
                            circle: "Regionen ausw\u00e4hlen (Kreis)",
                            freehand: "Regionen ausw\u00e4hlen (Freihand-Polygon)"
                        },
                        composite_natura2000_2_6: {
                            extent: "Schutzgebiete ausw\u00e4hlen (Rechteck)",
                            point: "Schutzgebiete ausw\u00e4hlen (Punkt)",
                            circle: "Schutzgebiete ausw\u00e4hlen (Kreis)",
                            freehand: "Schutzgebiete ausw\u00e4hlen (Freihand-Polygon)"
                        }
                    },
                    templates: {
                        templates: {
                            seasons: {
                                mapflow: {
                                    title: "Karteninhalt"
                                },
                                agolmapFinder: {
                                    title: "ArcGIS Online Suche"
                                }
                            }
                        }
                    },
                    toolsets: {
                        whatdoyouwant: "Was m\u00f6chten Sie tun?",
                        redliningTools: "Zeichnen",
                        selectionTools: "Informationen aus der Karte abfragen",
                        navigationTools: "Navigationswerkzeuge",
                        mapviewTools: "Kartenwerkzeuge",
                        editingTools: "Editierwerkzeuge"
                    },
                    fields: {
                        id: "ID",
                        title: "Titel",
                        adapter: "Dienst",
                        type: "Typ"
                    }
                })

                );