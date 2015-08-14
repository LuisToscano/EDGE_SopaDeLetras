/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>'        },
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
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'TIMER_CONTAINER',
                            symbolName: 'testBtn',
                            type: 'rect',
                            rect: ['801px', '511px', '228', '56', 'auto', 'auto']
                        },
                        {
                            id: 'SOPA',
                            symbolName: 'SOPA',
                            type: 'rect',
                            rect: ['1037px', '47px', '740', '520', 'auto', 'auto'],
                            userClass: ""
                        },
                        {
                            id: 'Text2Copy2',
                            type: 'text',
                            rect: ['85px', '154px', '915px', '75px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 34px;\">​Identifique las palabras que se encuentran en la lista para ubicarlas en la sopa de letras.</p><p style=\"margin: 0px; line-height: 34px;\"><span style=\"font-size: 30px;\">&nbsp;</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2Copy',
                            type: 'text',
                            rect: ['85px', '235px', '915px', '30px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Para seleccionar cada palabra en la sopa de letras, haga clic en la primera letra y sin soltarla, arrastre hasta la última letra. Estas se encuentran de izquierda a derecha y de arriba hacia abajo. Tiene dos intentos para esta actividad.</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none", "italic", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['85px', '65px', '915px', '63px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; line-height: 34px;\">​<span style=\"font-size: 30px;\">En el proceso de aprendizaje de una lengua, es importante identificar las letras y sus nombres al deletrear palabras.</span></p><p style=\"margin: 0px;\"><span style=\"font-size: 30px;\">​</span></p><p style=\"margin: 0px; line-height: 34px;\"><span style=\"font-size: 30px;\"></span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [28, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "34px", "", "none"]
                        },
                        {
                            id: 'vineta_lila',
                            type: 'image',
                            rect: ['34px', '130px', '57px', '85px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"vineta_lila.png",'0px','0px'],
                            transform: [[],[],[],['0.25','0.25']]
                        },
                        {
                            id: 'Texto_1',
                            type: 'text',
                            rect: ['350px', '390px', '366px', '56px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Brazo</p><p style=\"margin: 0px;\">​</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [40, "px"], "rgba(0,0,0,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Texto_2',
                            type: 'text',
                            rect: ['350px', '441px', '366px', '56px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Silla</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [40, "px"], "rgba(0,0,0,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Texto_3',
                            type: 'text',
                            rect: ['350px', '492px', '366px', '56px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Caballo</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [40, "px"], "rgba(0,0,0,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Texto_4',
                            type: 'text',
                            rect: ['350px', '542px', '366px', '56px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Paisaje</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [40, "px"], "rgba(0,0,0,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Texto_5',
                            type: 'text',
                            rect: ['350px', '593px', '366px', '56px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​​Cama</p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [40, "px"], "rgba(0,0,0,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Skills2',
                            symbolName: 'Skills',
                            type: 'rect',
                            rect: ['4px', '618', '283', '157', 'auto', 'auto']
                        },
                        {
                            id: 'inicio_sopa',
                            symbolName: 'inicio_sopa',
                            type: 'rect',
                            rect: ['0', '-7', '1834', '794', 'auto', 'auto']
                        },
                        {
                            id: 'btnTimer',
                            symbolName: 'btnTimer',
                            type: 'rect',
                            rect: ['805px', '620px', '225', '56', 'auto', 'auto'],
                            cursor: 'pointer'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1830px', '780px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid38",
                            "left",
                            0,
                            0,
                            "linear",
                            "${TIMER_CONTAINER}",
                            '801px',
                            '801px'
                        ],
                        [
                            "eid147",
                            "left",
                            0,
                            0,
                            "linear",
                            "${btnTimer}",
                            '805px',
                            '805px'
                        ],
                        [
                            "eid114",
                            "top",
                            0,
                            0,
                            "linear",
                            "${btnTimer}",
                            '620px',
                            '620px'
                        ],
                        [
                            "eid47",
                            "top",
                            0,
                            0,
                            "linear",
                            "${TIMER_CONTAINER}",
                            '511px',
                            '511px'
                        ]
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
                            rect: ['57px', '-28px', '113px', '113px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [3, 'rgba(88,20,130,1.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(196,170,220,1.00)']
                        },
                        {
                            rect: ['111px', '21px', '13px', '13px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,0.86)']
                        },
                        {
                            transform: [[], ['360'], [0, 0, 0], [1, 1, 1]],
                            rect: ['115px', '10px', '5px', '44px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.56)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px; text-align: center;\"><span style=\"font-weight: 700;\">TIMER</span></p>',
                            type: 'text',
                            rect: ['18px', '17px', '200px', '42px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '228px', '56px']
                        }
                    }
                },
                timeline: {
                    duration: 511,
                    autoPlay: true,
                    labels: {
                        "normal": 0,
                        "0": 511
                    },
                    data: [
                        [
                            "eid118",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${Rectangle2}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid22",
                            "color",
                            0,
                            250,
                            "linear",
                            "${Text}",
                            'rgba(0,0,0,1)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid23",
                            "color",
                            250,
                            250,
                            "linear",
                            "${Text}",
                            'rgba(0,0,0,1.00)',
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
                            rect: ['0px', '3px', '225px', '50px', 'auto', 'auto'],
                            borderRadius: ['25px', '25px', '25px', '25px 25px'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(214,219,65,1.00)', [270, [['rgba(111,67,158,1.00)', 50], ['rgba(84,53,118,1.00)', 50]]]]
                        },
                        {
                            rect: ['14px', '11px', '200px', '36px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-weight: 700; font-size: 28px;\">Iniciar</span></p>',
                            id: 'Text',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
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
                            rect: [null, null, '740px', '520px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "inicio_sopa": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            rect: ['917px', '0px', '916px', '794px', 'auto', 'auto'],
                            id: 'sopadeletras-10',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sopadeletras-10.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'sopadeletras-10Copy',
                            opacity: '1',
                            rect: ['3px', '0px', '916px', '794px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sopadeletras-10.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'sopadeletras-09',
                            opacity: '1',
                            rect: ['-11px', '201px', '393px', '393px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sopadeletras-09.png', '0px', '0px']
                        },
                        {
                            rect: ['788px', '370px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [41, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            opacity: '1',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Sopa de letras</p>',
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1834px', '794px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid103",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${sopadeletras-09}",
                            '721px',
                            '-11px'
                        ],
                        [
                            "eid94",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${sopadeletras-10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid96",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${sopadeletras-10Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid95",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${sopadeletras-10Copy}",
                            '3px',
                            '-730px'
                        ],
                        [
                            "eid106",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${Text}",
                            '788px',
                            '58px'
                        ],
                        [
                            "eid97",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${sopadeletras-10}",
                            '917px',
                            '1698px'
                        ],
                        [
                            "eid109",
                            "opacity",
                            1200,
                            800,
                            "linear",
                            "${sopadeletras-09}",
                            '1',
                            '0'
                        ],
                        [
                            "eid129",
                            "opacity",
                            1200,
                            800,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "margen_inferior": {
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
                            stroke: [7, 'rgba(79,45,110,0.00)', 'solid'],
                            rect: ['0px', '25px', '13px', '79px', 'auto', 'auto'],
                            fill: ['rgba(180,180,180,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [7, 'rgba(79, 45, 110, 0)', 'solid'],
                            rect: ['27px', '0px', '1735px', '11px', 'auto', 'auto'],
                            fill: ['rgba(180,180,180,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [7, 'rgba(79, 45, 110, 0)', 'solid'],
                            rect: ['27px', '118px', '1735px', '7px', 'auto', 'auto'],
                            fill: ['rgba(180,180,180,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle4',
                            stroke: [7, 'rgba(79, 45, 110, 0)', 'solid'],
                            rect: ['1776px', '25px', '13px', '79px', 'auto', 'auto'],
                            fill: ['rgba(180,180,180,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1803px', '139px']
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
            "margen_superior": {
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
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['1775px', '0px', '55px', '70px', 'auto', 'auto'],
                            fill: ['rgba(111,160,217,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '55px', '70px', 'auto', 'auto'],
                            fill: ['rgba(111,160,217,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['86px', '0px', '1689px', '70px', 'auto', 'auto'],
                            fill: ['rgba(181,199,220,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1830px', '70px']
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
            "espacios_texto": {
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
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '30px', '30px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '92px', '30px', '30px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle2Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '142px', '30px', '30px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '35px', '177px']
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
            "oral": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'V_HABLA',
                            rect: ['-24px', '16px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            fill: ['rgba(0,0,0,0)', 'images/V_HABLA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_oral',
                            opacity: '0',
                            rect: ['0px', '-4px', '102px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['41px', '42px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['8px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '23px', '', ''],
                                id: 'TextCopy2',
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​oral</p>',
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '102px', '109px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid29",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Tool_oral}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Tool_oral}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "auditiva": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'V_ESCUCHA',
                            rect: ['-12px', '12px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.45', '0.45']],
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCUCHA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_auditiva',
                            opacity: '0',
                            rect: ['0px', '-9px', '117px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['48px', '42px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['7px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '23px', '', ''],
                                id: 'TextCopy',
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​auditiva</p>',
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '117px', '104px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid32",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Tool_auditiva}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Tool_auditiva}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Skills": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-122px', '-30px', '530px', '250px', 'auto', 'auto'],
                            id: 'Skills',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Skills.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            rect: ['44px', '33px', '141px', '141px', 'auto', 'auto'],
                            display: 'block',
                            id: 'B_ESCRITURA',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCRITURA.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.45', '0.45']],
                            rect: ['100px', '14px', '141px', '141px', 'auto', 'auto'],
                            display: 'block',
                            id: 'B_ESCUCHA',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/B_ESCUCHA.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.45', '0.45']],
                            rect: ['157px', '35px', '141px', '141px', 'auto', 'auto'],
                            display: 'block',
                            id: 'B_HABLA',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/B_HABLA.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.5', '0.5']],
                            rect: ['-12px', '14px', '141px', '141px', 'auto', 'auto'],
                            display: 'block',
                            id: 'B_LECTURA',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/B_LECTURA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'escrita',
                            symbolName: 'escrita',
                            display: 'none',
                            rect: ['62px', '16px', '102', '108', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'oral',
                            symbolName: 'oral',
                            display: 'none',
                            rect: ['181px', '19px', '102', '109', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'lectora',
                            symbolName: 'lectora',
                            display: 'none',
                            rect: ['0px', '0px', '117', '113', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'auditiva',
                            symbolName: 'auditiva',
                            display: 'block',
                            rect: ['112px', '2px', '117', '104', 'auto', 'auto']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['23px', '50px', '70px', '70px', 'auto', 'auto'],
                            id: 'Tool_lectora',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'default',
                            fill: ['rgba(45,110,51,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['80px', '71px', '70px', '70px', 'auto', 'auto'],
                            id: 'Tool_escrita',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'default',
                            fill: ['rgba(45,110,51,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['136px', '49px', '70px', '70px', 'auto', 'auto'],
                            id: 'Tool_auditiva',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'default',
                            fill: ['rgba(45,110,51,0.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: ['192px', '72px', '70px', '70px', 'auto', 'auto'],
                            id: 'Tool_oral',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'default',
                            fill: ['rgba(45,110,51,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '283px', '157px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid50",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_HABLA}",
                            'block',
                            'block'
                        ],
                        [
                            "eid47",
                            "display",
                            0,
                            0,
                            "linear",
                            "${oral}",
                            'none',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_LECTURA}",
                            'block',
                            'block'
                        ],
                        [
                            "eid150",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${B_LECTURA}",
                            'block',
                            'none'
                        ],
                        [
                            "eid48",
                            "display",
                            0,
                            0,
                            "linear",
                            "${escrita}",
                            'none',
                            'none'
                        ],
                        [
                            "eid148",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${escrita}",
                            'none',
                            'block'
                        ],
                        [
                            "eid45",
                            "display",
                            0,
                            0,
                            "linear",
                            "${auditiva}",
                            'block',
                            'block'
                        ],
                        [
                            "eid152",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${auditiva}",
                            'block',
                            'none'
                        ],
                        [
                            "eid52",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ESCRITURA}",
                            'block',
                            'block'
                        ],
                        [
                            "eid149",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${B_ESCRITURA}",
                            'block',
                            'none'
                        ],
                        [
                            "eid46",
                            "display",
                            0,
                            0,
                            "linear",
                            "${lectora}",
                            'none',
                            'none'
                        ],
                        [
                            "eid151",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${lectora}",
                            'none',
                            'block'
                        ],
                        [
                            "eid51",
                            "display",
                            0,
                            0,
                            "linear",
                            "${B_ESCUCHA}",
                            'block',
                            'block'
                        ]
                    ]
                }
            },
            "lectora": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'V_LECTURA',
                            rect: ['-12px', '15px', '140px', '140px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/V_LECTURA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_lectora',
                            opacity: '0',
                            rect: ['0px', '-13px', '117px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['48px', '42px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['7px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '23px', '', ''],
                                id: 'Text',
                                text: '<p style=\"margin: 0px;\">​Comprensión</p><p style=\"margin: 0px;\">​lectora</p>',
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '117px', '113px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid30",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Tool_lectora}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Tool_lectora}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "escrita": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'V_ESCRITURA',
                            rect: ['-18px', '17px', '141px', '141px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            fill: ['rgba(0,0,0,0)', 'images/V_ESCRITURA.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'Tool_escrita',
                            opacity: '0',
                            rect: ['0px', '-4px', '102px', '60px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            boxShadow: ['', 3, 3, 6, 0, 'rgba(0,0,0,0.00)'],
                            fill: ['rgba(79,45,110,1.00)'],
                            c: [
                            {
                                rect: ['41px', '42px', '20px', '20px', 'auto', 'auto'],
                                transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                                id: 'RectangleCopy3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(79,45,110,1)']
                            },
                            {
                                type: 'text',
                                rect: ['8px', '6px', 'auto', 'auto', 'auto', 'auto'],
                                textStyle: ['', '', '23px', '', ''],
                                id: 'TextCopy3',
                                text: '<p style=\"margin: 0px;\">​Producción</p><p style=\"margin: 0px;\">​escrita</p>',
                                align: 'center',
                                font: ['source-sans-pro, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', '', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '102px', '108px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid31",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Tool_escrita}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Tool_escrita}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("EDGE_SopaDeLetras_edgeActions.js");
})("EDGE-11599876");
