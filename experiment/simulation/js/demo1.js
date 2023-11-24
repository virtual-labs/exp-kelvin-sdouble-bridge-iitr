var rightconnection = false;
var datapoints1 = [];
jsPlumb.ready(function () {

    var instance,
        discs = [],

        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },

        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },

        initAnimation = function (elId) {
            var el = document.getElementById(elId);

            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }

            });
        },

        // notice there are no dragOptions specified here, which is different from the
        // draggableConnectors2 demo.  all connections on this page are therefore
        // implicitly in the default scope.
        endpoint1 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgb(255, 0, 0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare1 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint1);
        },
        endpoint2 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgb(255, 0, 0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare2 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint2);
        },
        endpoint3 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgb(255, 0, 0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare3 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint3);
        },
        endpoint4 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "rgb(255, 0, 0)" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare4 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint4);
        },
        endpoint5 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare5 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint5);
        },
        endpoint6 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "green" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare6 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint6);
        },
        endpoint7 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "orange" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare7 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint7);
        },
        endpoint8 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare8 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint8);
        },
        endpoint9 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "blue" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare9 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint9);
        },
        endpoint10 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "green" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare10 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint10);
        },
        endpoint11 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "orange" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare11 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint11);
        },
        endpoint12 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth: 4, stroke: "red" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare12 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint12);
        },

        // this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return { d: d, id: id };
        };

    // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
        Endpoint: ["Image", { url: "images/littledot.png" }],

        Connector: ["Bezier", { curviness: -50 }],
        Container: "canvas"
    });

    // suspend drawing and initialise.
    instance.batch(function () {
        var e1 = prepare1("ld1"),
            e2 = prepare2("ld2"),
            e3 = prepare3("ld3"),
            e4 = prepare4("ld4"),
            e5 = prepare5("ld5"),
            e6 = prepare6("ld6"),
            e7 = prepare7("ld7"),
            e8 = prepare8("ld8"),
            e9 = prepare9("ld9"),
            e10 = prepare10("ld10"),
            e11 = prepare11("ld11"),
            e12 = prepare12("ld12")

        clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");

        var detachLinks = jsPlumb.getSelector(".littledot .detach");
        instance.on(detachLinks, "click", function (e) {
            instance.deleteConnectionsForElement(this.getAttribute("rel"));
            jsPlumbUtil.consume(e);
        });

        instance.on(document.getElementById("clear"), "click", function (e) {
            instance.detachEveryConnection();
            showConnectionInfo("");
            jsPlumbUtil.consume(e);
        });



    });

    jsPlumb.fire("jsPlumbDemoLoaded", instance);


    document.getElementById("check-button").addEventListener("click", function () {
        var correct_connections_1_3 = [
            {
                "source": "ld1",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld1"
            }
        ];

        var correct_connections_2_4 = [
            {
                "source": "ld2",
                "target": "ld4"
            },

            {
                "source": "ld4",
                "target": "ld2"
            }
        ];
        var correct_connections_5_9 = [
            {
                "source": "ld5",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "ld5"
            }
        ];
        var correct_connections_6_10 = [
            {
                "source": "ld6",
                "target": "ld10"
            },

            {
                "source": "ld10",
                "target": "ld6"
            }


        ];
        var correct_connections_7_11 = [


            {
                "source": "ld7",
                "target": "ld11"
            },

            {
                "source": "ld11",
                "target": "ld7"
            }
        ];
        var correct_connections_8_12 = [


            {
                "source": "ld8",
                "target": "ld12"
            },

            {
                "source": "ld12",
                "target": "ld8"
            }
        ];



        var allowed_connections = [
            {
                "source": "ld1",
                "target": "ld3"
            },

            {
                "source": "ld3",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld4"
            },

            {
                "source": "ld4",
                "target": "ld2"
            },
            {
                "source": "ld5",
                "target": "ld9"
            },

            {
                "source": "ld9",
                "target": "ld5"
            },
            {
                "source": "ld6",
                "target": "ld10"
            },
            {
                "source": "ld10",
                "target": "ld6"
            },

            {
                "source": "ld7",
                "target": "ld11"
            },
            {
                "source": "ld11",
                "target": "ld7"
            },
            {
                "source": "ld8",
                "target": "ld12"
            },
            {
                "source": "ld12",
                "target": "ld8"
            }


        ];
        var actual_connections = instance.getAllConnections();

        var is_connected_1_3 = false;
        var is_connected_2_4 = false;
        var is_connected_5_9 = false;
        var is_connected_6_10 = false;
        var is_connected_7_11 = false;
        var is_connected_8_12 = false;


        var unallowed_connection_present = false;

        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_1_3) {
                is_connected_1_3 = correct_connections_1_3.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_2_4) {
                is_connected_2_4 = correct_connections_2_4.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_5_9) {
                is_connected_5_9 = correct_connections_5_9.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_6_10) {
                is_connected_6_10 = correct_connections_6_10.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_7_11) {
                is_connected_7_11 = correct_connections_7_11.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };

            if (!is_connected_8_12) {
                is_connected_8_12 = correct_connections_8_12.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                });
            }

            if (!unallowed_connection_present) {
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }

        });


        if (is_connected_1_3 && is_connected_2_4 && is_connected_5_9 && is_connected_6_10 && is_connected_7_11 && is_connected_8_12 && !unallowed_connection_present) {
            alert("Correct Connections");
            rightconnection = true;

            const elements = document.querySelectorAll('.jtk-endpoint');

            elements.forEach(ele => {
                ele.style.pointerEvents = 'none';
            });

            document.getElementById("mcbb").disabled = false;
            document.getElementById("mcbb").classList.remove("disabled");

            document.getElementById("dis1").style.pointerEvents = "none";
            document.getElementById("dis2").style.pointerEvents = "none";
            document.getElementById("dis3").style.pointerEvents = "none";
            document.getElementById("dis4").style.pointerEvents = "none";
            document.getElementById("dis5").style.pointerEvents = "none";
            document.getElementById("dis6").style.pointerEvents = "none";
            document.getElementById("dis7").style.pointerEvents = "none";
            document.getElementById("dis8").style.pointerEvents = "none";
            document.getElementById("dis9").style.pointerEvents = "none";
            document.getElementById("dis10").style.pointerEvents = "none";
            document.getElementById("dis11").style.pointerEvents = "none";
            document.getElementById("dis12").style.pointerEvents = "none";

            return;
        }
        if (!unallowed_connection_present) {
            alert("Please Complete the connection");
        }
        else {
            alert("Wrong Connection");
            return;
        }
    });
});


//Scripting of mcb begins

var mcboffstate = true;
var were = 240;
function mcbonoff() {

    if (rightconnection == false) {
        alert("Alert ! Please Complete the connection first.");
    }
    else {
        if (mcboffstate == true) {
            var text = document.getElementById("text_1");
            mcboffstate = false;

            document.getElementById('select_1').disabled = false;
            document.getElementById('select_2').disabled = false;
            document.getElementById('select_3').disabled = false;
            document.getElementById("push").disabled = false;
            document.getElementById('mcbb').src = "images/mcb2.png";
            document.getElementById("add").disabled = false;

        }
    }
}

//Scripting of mcb ends
var op1 = document.getElementById("select_1");

var op2 = document.getElementById("select_2");
var op3 = document.getElementById("select_3");



var attcounter = 1;
var readings = true;
var current_readings = 0;
function addtotable() {

    if (current_readings != this.value) {
        current_readings = this.value;
        readings = true;
    }
    if (readings) {
        if (attcounter < 3) {
            if (op1.value == 1 && op2.value == 7 && op3.value == 12) {

                var currentVal1 = attcounter++;
                var currentVal2 = 1;
                var currentVal3 = 0.0001;
                var currentVal4 = 0.08;


                var tr = document.createElement('tr');
                var td1 = tr.appendChild(document.createElement('td'));
                var td2 = tr.appendChild(document.createElement('td'));
                var td3 = tr.appendChild(document.createElement('td'));
                var td4 = tr.appendChild(document.createElement('td'));

                td1.innerHTML = currentVal1;
                td2.innerHTML = currentVal2;
                td3.innerHTML = currentVal3;
                td4.innerHTML = currentVal4;

                document.getElementById("tb1").appendChild(tr);
                alert("Right Combination");
                readings = false;

            }
            else if (op1.value == 2 && op2.value == 3 && op3.value == 9) {

                var currentVal1 = attcounter++;
                var currentVal2 = 10;
                var currentVal3 = 0.0004;
                var currentVal4 = 0.10;

                var tr = document.createElement('tr');
                var td1 = tr.appendChild(document.createElement('td'));
                var td2 = tr.appendChild(document.createElement('td'));
                var td3 = tr.appendChild(document.createElement('td'));
                var td4 = tr.appendChild(document.createElement('td'));

                td1.innerHTML = currentVal1;
                td2.innerHTML = currentVal2;
                td3.innerHTML = currentVal3;
                td4.innerHTML = currentVal4;

                document.getElementById("tb1").appendChild(tr);
                alert("Right Combination");
                readings = false;
            }

            else {
                alert("Wrong Combination")

                btn.onclick = function button() {

                    if (drop.style.display !== "block") {
                        drop.style.display = "block";
                    }

                    else {
                        drop.style.display = "none";
                    }

                    document.getElementById("drop").style.backgroundColor = "lightgrey";
                    document.getElementById("drop").innerHTML = "<pre> M = 1    S = 8   KDB Dial = 5 \n\n M = 10   S = 1   KDB Dial = 2</pre>";
                }
            }
        }
        else {
            alert("You can add maximum two readings in the table.")
        }
    }
    // if (attcounter == 2) {
    //     readings = true;
    // }

}


function push() {

    if (op1.value == 1 && op2.value == 3 && op3.value == 8) {
        var text = document.getElementById("text_1");

        rangeChange138()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 3 && op3.value == 9) {

        var text = document.getElementById("text_1");
        rangeChange139();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 3 && op3.value == 10) {

        var text = document.getElementById("text_1");
        rangeChange1310();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 3 && op3.value == 11) {

        var text = document.getElementById("text_1");
        rangeChange1311();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 3 && op3.value == 12) {

        var text = document.getElementById("text_1");
        rangeChange1312();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 4 && op3.value == 8) {

        var text = document.getElementById("text_1");
        rangeChange148();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 4 && op3.value == 9) {

        var text = document.getElementById("text_1");
        rangeChange149();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 4 && op3.value == 10) {

        var text = document.getElementById("text_1");
        rangeChange1410();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 4 && op3.value == 11) {

        var text = document.getElementById("text_1");
        rangeChange1411();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 4 && op3.value == 12) {

        var text = document.getElementById("text_1");
        rangeChange1412();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 5 && op3.value == 8) {

        var text = document.getElementById("text_1");
        rangeChange158();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 5 && op3.value == 9) {

        var text = document.getElementById("text_1");
        rangeChange159();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 5 && op3.value == 10) {

        var text = document.getElementById("text_1");
        rangeChange1510();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 5 && op3.value == 11) {

        var text = document.getElementById("text_1");
        rangeChange1511();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 5 && op3.value == 12) {

        var text = document.getElementById("text_1");
        rangeChange1512();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 6 && op3.value == 8) {

        var text = document.getElementById("text_1");
        rangeChange168();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 6 && op3.value == 9) {

        var text = document.getElementById("text_1");
        rangeChange169();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 6 && op3.value == 10) {

        var text = document.getElementById("text_1");
        rangeChange1610();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 6 && op3.value == 11) {

        var text = document.getElementById("text_1");
        rangeChange1611();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 6 && op3.value == 12) {

        var text = document.getElementById("text_1");
        rangeChange1612();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 7 && op3.value == 8) {

        var text = document.getElementById("text_1");
        rangeChange178();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 7 && op3.value == 9) {

        var text = document.getElementById("text_1");
        rangeChange179();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 7 && op3.value == 10) {

        var text = document.getElementById("text_1");
        rangeChange1710();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 7 && op3.value == 11) {

        var text = document.getElementById("text_1");
        rangeChange1711();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 7 && op3.value == 12) {

        var text = document.getElementById("text_1");
        rangeChange1712();
        alert("BALANCED CONDITION");
        document.getElementById('push').src = "images/push2.png";
        text.value = "BALANCED";
    }





    //Second Reading Case
    else if (op1.value == 2 && op2.value == 3 && op3.value == 8) {
        var text = document.getElementById("text_1");

        rangeChange1711()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 3 && op3.value == 9) {

        var text = document.getElementById("text_1");
        rangeChange1712();
        alert("BALANCED CONDITION");
        document.getElementById('push').src = "images/push2.png";
        text.value = "BALANCED";
    }
    else if (op1.value == 2 && op2.value == 3 && op3.value == 10) {

        var text = document.getElementById("text_1");
        rangeChange1710();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 3 && op3.value == 11) {

        var text = document.getElementById("text_1");
        rangeChange178();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 3 && op3.value == 12) {

        var text = document.getElementById("text_1");
        rangeChange1611();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 4 && op3.value == 8) {
        var text = document.getElementById("text_1");

        rangeChange178()
        alert("UNBALANCED CONDITION")
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 4 && op3.value == 9) {

        var text = document.getElementById("text_1");
        rangeChange1612();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 4 && op3.value == 10) {

        var text = document.getElementById("text_1");
        rangeChange1611();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 4 && op3.value == 11) {

        var text = document.getElementById("text_1");
        rangeChange1610();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 4 && op3.value == 12) {

        var text = document.getElementById("text_1");
        rangeChange169();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 5 && op3.value == 8) {
        var text = document.getElementById("text_1");

        rangeChange168()
        alert("UNBALANCED CONDITION")
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 5 && op3.value == 9) {

        var text = document.getElementById("text_1");
        rangeChange1512();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 5 && op3.value == 10) {

        var text = document.getElementById("text_1");
        rangeChange1511();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 5 && op3.value == 11) {

        var text = document.getElementById("text_1");
        rangeChange1510();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 5 && op3.value == 12) {

        var text = document.getElementById("text_1");
        rangeChange159();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 6 && op3.value == 8) {
        var text = document.getElementById("text_1");

        rangeChange158()
        alert("UNBALANCED CONDITION")
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 6 && op3.value == 9) {

        var text = document.getElementById("text_1");
        rangeChange269();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 6 && op3.value == 10) {

        var text = document.getElementById("text_1");
        rangeChange139();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 6 && op3.value == 11) {

        var text = document.getElementById("text_1");
        rangeChange2611();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 6 && op3.value == 12) {

        var text = document.getElementById("text_1");
        rangeChange2612();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 7 && op3.value == 8) {
        var text = document.getElementById("text_1");

        rangeChange149()
        alert("UNBALANCED CONDITION")
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 7 && op3.value == 9) {

        var text = document.getElementById("text_1");
        rangeChange1311();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 7 && op3.value == 10) {

        var text = document.getElementById("text_1");
        rangeChange1312();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 7 && op3.value == 11) {

        var text = document.getElementById("text_1");
        rangeChange1411();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 7 && op3.value == 12) {

        var text = document.getElementById("text_1");
        rangeChange1412();
        alert("UNBALANCED CONDITION");
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }




    //Two Knobs Combination

    else if (op1.value == 1 && op2.value == 3) {
        var text = document.getElementById("text_1");

        rangeChange1610()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 4) {
        var text = document.getElementById("text_1");

        rangeChange168()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 5) {
        var text = document.getElementById("text_1");

        rangeChange1511()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 6) {
        var text = document.getElementById("text_1");

        rangeChange1510()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 1 && op2.value == 7) {
        var text = document.getElementById("text_1");

        rangeChange159()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 3) {
        var text = document.getElementById("text_1");

        rangeChange148()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 4) {
        var text = document.getElementById("text_1");

        rangeChange1311()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 5) {
        var text = document.getElementById("text_1");

        rangeChange1410()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 6) {
        var text = document.getElementById("text_1");

        rangeChange1411()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2 && op2.value == 7) {
        var text = document.getElementById("text_1");

        rangeChange1412()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }

    else if (op1.value == 1) {
        var text = document.getElementById("text_1");

        rangeChange148()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op1.value == 2) {
        var text = document.getElementById("text_1");

        rangeChange1410()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op2.value == 3) {
        var text = document.getElementById("text_1");

        rangeChange1512()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op2.value == 4) {
        var text = document.getElementById("text_1");

        rangeChange1511()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op2.value == 5) {
        var text = document.getElementById("text_1");

        rangeChange1510()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op2.value == 6) {
        var text = document.getElementById("text_1");

        rangeChange159()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op2.value == 7) {
        var text = document.getElementById("text_1");

        rangeChange158()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op3.value == 8) {
        var text = document.getElementById("text_1");

        rangeChange169()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op3.value == 9) {
        var text = document.getElementById("text_1");

        rangeChange1610()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op3.value == 10) {
        var text = document.getElementById("text_1");

        rangeChange1612()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op3.value == 11) {
        var text = document.getElementById("text_1");

        rangeChange178()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    else if (op3.value == 12) {
        var text = document.getElementById("text_1");

        rangeChange179()

        alert("UNBALANCED CONDITION");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }


    else {
        var text = document.getElementById("text_1");

        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
        return;

    }


}

var e = document.getElementById("select_1");
var strUser = e.options[e.selectedIndex].value;
var value = 0;
e.onchange = function () {
    value = this.value;

    if (this.value == 1) {
        var text = document.getElementById("text_1");

        range901();
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    if (this.value == 2) {
        var text = document.getElementById("text_1");
        range902();
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }


};
var i = document.getElementById("select_2");
var strUser = i.options[i.selectedIndex].value;
var value = 0;
i.onchange = function () {
    value = this.value;

    if (this.value == 3) {

        var text = document.getElementById("text_1");
        range903();
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    if (this.value == 4) {
        var text = document.getElementById("text_1");
        range904();
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    if (this.value == 5) {

        var text = document.getElementById("text_1");
        range905();
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";

    }
    if (this.value == 6) {

        var text = document.getElementById("text_1");
        range906();
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    if (this.value == 7) {
        var text = document.getElementById("text_1");

        range907();
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }

};
var j = document.getElementById("select_3");
var strUser = j.options[j.selectedIndex].value;
var value = 0;
j.onchange = function () {
    value = this.value;

    if (this.value == 8) {

        var text = document.getElementById("text_1");
        range908();
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    if (this.value == 9) {
        var text = document.getElementById("text_1");
        range909();
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    if (this.value == 10) {

        var text = document.getElementById("text_1");
        range910();
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";

    }
    if (this.value == 11) {
        var text = document.getElementById("text_1");

        range911();
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }
    if (this.value == 12) {
        var text = document.getElementById("text_1");

        range912();
        document.getElementById('push').src = "images/push1.png";
        text.value = "UNBALANCED";
    }

};


//Scryting of variation of bulbs begins


//Scripting of needle range begins
/*var rangeClock1 =  document.querySelector('#needle1');
 
function rangeChange138() {
    rangeClock1.style.transform = 'rotate(-44deg)';
   
}
function rangeChange139() {
  rangeClock1.style.transform = 'rotate(-47deg)';
      
}
function rangeChange1310() {
rangeClock1.style.transform = 'rotate(-50deg)';
 
}
function rangeChange1311() {
rangeClock1.style.transform = 'rotate(-52deg)';
 
}
function rangeChange1312() {
rangeClock1.style.transform = 'rotate(-55deg)';
 
}
function rangeChange148() {
rangeClock1.style.transform = 'rotate(-49deg)';
 
}
function rangeChange149() {
rangeClock1.style.transform = 'rotate(-51deg)';
 
}
function rangeChange1410() {
rangeClock1.style.transform = 'rotate(-54deg)';
 
}
function rangeChange1411() {
rangeClock1.style.transform = 'rotate(-56deg)';
 
}
function rangeChange1412() {
rangeClock1.style.transform = 'rotate(-58deg)';
 
}
 
 
//Scripting of needle range ends

var range90 =  document.querySelector('#knob1');
var range91 =  document.querySelector('#knob2');
var range92 =  document.querySelector('#knob3');

function range901() {
    range90.style.transform = 'rotate(180deg)';
 
}
function range902() {
  range90.style.transform = 'rotate(245deg)'; 
  
}
 
 function range903() {
    
    range91.style.transform = 'rotate(87deg)';
    
} function range904() {

    range91.style.transform = 'rotate(116deg)';
 
} function range905() {
    
    range91.style.transform = 'rotate(180deg)';
    
}
 function range906() {
    range91.style.transform = 'rotate(242deg)';
    
}
 function range907() {
    
    range91.style.transform = 'rotate(300deg)';
    
}
 function range908() {
 
    range92.style.transform = 'rotate(87deg)';
}
 function range909() {
    
    range92.style.transform = 'rotate(116deg)';
}
 function range910() {
 
    range92.style.transform = 'rotate(148deg)';
}
 function range911() {
    
    range92.style.transform = 'rotate(180deg)';
}
 function range912() {
 
    range92.style.transform = 'rotate(210deg)';
}*/
