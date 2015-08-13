/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.10.2.js",
            js+"sopaUtilities.js",
            js+"interactionUtilities.js",
            js+"timerUtilities.js",
            js+"utility.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'SOPA',
                            symbolName: 'SOPA',
                            type: 'rect',
                            rect: ['578px', '258px', '357', '233', 'auto', 'auto'],
                            transform: [[],[],[],['4.05322','3.02146']]
                        },
                        {
                            id: 'TIMER_CONTAINER',
                            symbolName: 'testBtn',
                            type: 'rect',
                            rect: ['1547px', '34px', '228', '56', 'auto', 'auto']
                        },
                        {
                            id: 'btnTimer',
                            symbolName: 'btnTimer',
                            type: 'rect',
                            rect: ['1548px', '120px', '225', '56', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1830px', '780px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid31",
                            "top",
                            0,
                            0,
                            "linear",
                            "${SOPA}",
                            '258px',
                            '258px'
                        ],
                        [
                            "eid30",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${SOPA}",
                            '3.02146',
                            '3.02146'
                        ],
                        [
                            "eid26",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btnTimer}",
                            '1548px',
                            '1548px'
                        ],
                        [
                            "eid28",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${SOPA}",
                            '4.05322',
                            '4.05322'
                        ],
                        [
                            "eid24",
                            "left",
                            0,
                            0,
                            "linear",
                            "${TIMER_CONTAINER}",
                            '1547px',
                            '1547px'
                        ],
                        [
                            "eid27",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btnTimer}",
                            '120px',
                            '120px'
                        ],
                        [
                            "eid25",
                            "top",
                            0,
                            0,
                            "linear",
                            "${TIMER_CONTAINER}",
                            '34px',
                            '34px'
                        ],
                        [
                            "eid29",
                            "left",
                            0,
                            0,
                            "linear",
                            "${SOPA}",
                            '578px',
                            '578px'
                        ]
                    ]
                }
            },
            "SOPA": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '357px', '233px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "testBtn": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '225px', '56px', 'auto', 'auto'],
                            fill: ['rgba(171,171,171,1)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px; text-align: center;\"><span style=\"font-weight: 700;\">TIMER</span></p>',
                            type: 'text',
                            rect: ['9px', '16px', '200px', '42px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '228px', '56px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "10": 250
                    },
                    data: [
                        [
                            "eid17",
                            "background-color",
                            0,
                            250,
                            "linear",
                            "${Rectangle}",
                            'rgba(171,171,171,1)',
                            'rgba(255,0,0,1.00)'
                        ],
                        [
                            "eid18",
                            "background-color",
                            250,
                            250,
                            "linear",
                            "${Rectangle}",
                            'rgba(255,0,0,1.00)',
                            'rgba(171,171,171,1)'
                        ],
                        [
                            "eid22",
                            "color",
                            0,
                            250,
                            "linear",
                            "${Text}",
                            'rgba(0,0,0,1)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid23",
                            "color",
                            250,
                            250,
                            "linear",
                            "${Text}",
                            'rgba(255,255,255,1.00)',
                            'rgba(0,0,0,1)'
                        ]
                    ]
                }
            },
            "btnTimer": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '225px', '56px', 'auto', 'auto'],
                            fill: ['rgba(214,219,65,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(0, 0, 0); font-weight: 700;\">Soy el botón</span></p>',
                            rect: ['14px', '14px', '200px', '36px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '225px', '56px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("EDGE_SopaDeLetras_edgeActions.js");
})("EDGE-11599876");
