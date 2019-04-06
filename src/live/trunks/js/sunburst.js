// Populate dropdown with json files.
$.ajaxSetup({
    async: false // very hacky
});
var listofFileNames = ["json/demo.json", "json/babylon.json", "json/egypt.json", "json/genghis.json", "json/greek.json", "json/norse.json", ];
for (var i = 0; i < listofFileNames.length; i++) {
    var div = document.createElement('div');
    $.getJSON(listofFileNames[i], function (json) {
        div.innerHTML = json["name"];
    });
    div.className = 'item';
    div.setAttribute("onclick", "updateDrawing('" + listofFileNames[i] + "')");
    document.getElementById("dropdown-inner").appendChild(div);
}

// Sizing of circle
var width = window.innerWidth
height = window.innerHeight
radius = window.innerHeight - 600;

var partition = d3.layout.partition() // Using partition-style data analysis
    .size([2 * Math.PI, radius])
    .value(function (d) {
        return 1;
    }); // Sets the size of each element/node

// Color inspired by Color Brewer's 3-class YlOrRd colorbrewer2.org/#type=sequential&scheme=YlOrRd&n=3 for best legibility.
var colors = [
    d3.rgb("#f1753a"), // Dark Orange
    d3.rgb("#f7a13e"), // Orange
    d3.rgb("#f7c84a") //Yellow
]

var colorDictionary = {};

function getColor(d) {
    var parent = getRootmostAncestorByRecursion(d);

    return colorDictionary[parent.name];
}

function getRootmostAncestorByRecursion(node) {
    return node.depth > 1 ? getRootmostAncestorByRecursion(node.parent) : node;
}

var arc = d3.svg.arc()
    .startAngle(function (d) {
        return d.x;
    })
    .endAngle(function (d) {
        return d.x + d.dx;
    })
    .innerRadius(function (d) {
        return d.y;
    })
    .outerRadius(function (d) {
        return d.y + d.dy
    });


var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


//Making it responsive
var svg = d3.select("div#container")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", (-width / 2) + ' ' + (-height / 2) + ' ' + width + ' ' + height)
    .classed("svg-content", true);


// Distort the specified node to 80% of its parent. 
function magnify(node) {
    if (parent = node.parent) {
        var parent,
            x = parent.x,
            k = 0.8;
        parent.children.forEach(function (sibling) {
            x += reposition(sibling, x, sibling === node ?
                parent.dx * k / node.value :
                parent.dx * (1 - k) / (parent.value - node.value));
        });
    } else {
        reposition(node, 0, node.dx / node.value);
    }

    path.transition()
        .duration(750);
    // .attrTween("d", arcTween); // Enable for hilarity.
}

// Recursively reposition the node at position x with scale k.
function reposition(node, x, k) {
    node.x = x;
    if (node.children && (n = node.children.length)) {
        var i = -1,
            n;
        while (++i < n) x += reposition(node.children[i], x, k);
    }
    return node.dx = node.value * k;
}

// Stash the old values for transition.
function stash(d) {
    d.x0 = d.x;
    d.dx0 = d.dx;
}

// Interpolate the arcs in data space.
function arcTween(a) {
    var i = d3.interpolate({
        x: a.x0,
        dx: a.dx0
    }, a);
    return function (t) {
        var b = i(t);
        a.x0 = b.x;
        a.dx0 = b.dx;
        return arc(b);
    };
}

function updateDrawing(fileName) {

    // First, remove existing drawing
    d3.selectAll("svg > *").remove();

    // Outline Circle
    svg.append("g")
        .attr("width", 500)
        .attr("height", 500)
        .selectAll("circle")
        .data([{
            x: 0,
            y: 0,
            r: radius + 7,
            error: true
        }])
        .enter().append("circle")
        .attr("transform", d => "translate(" + d.x + "," + d.y + ")")
        .attr("r", d => d.r)
        .style("fill", "white")
        .style("stroke", d => d.error ? "#f7c84a" : "transparent")
        .style("stroke-width", 3);

    // Color Dictionary that determines consecutive color
    d3.json(fileName, function (error, root) {
        var colorCount = 0;
        var colorForward = true;

        for (var i = 0; i < root.children.length; i++) {
            colorDictionary[root.children[i].name] = colors[colorCount];

            // Cycle through colors.
            if (colorCount == 2) {
                colorForward = false;
            } else if (colorCount == 0) {
                colorForward = true;
            }

            if (colorForward == true) {
                colorCount++
            } else {
                colorCount--
            }
        }
    })

    // Tooltip
    // Tooltip learned from bl.ocks.org/kaz-a/5c26993b5ee7096c8613e0a77bdd972b
    var tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    // Draws the chart
    d3.json(fileName, function (error, root) {
        if (error) throw error;

        path = svg.data([root]).selectAll("path")
            .data(partition.nodes)
            .enter().append("path")

            // Hide wrapper ring.
            .attr("display", function (d) {
                return d.depth ? null : "none";
            })

            .attr("d", arc)
            .style("fill", getColor)
            .on("click", magnify)
            .each(stash)

            .on("mouseover", function (d, i) {
                d3.select(this).style("cursor", "pointer");
                d3.select(this).attr("opacity", 0.3);
                tooltip.text(d.name)
                    .style("opacity", 0.8)
                    .style("left", (d3.event.pageX) + 0 + "px")
                    .style("top", (d3.event.pageY) - 0 + "px");
            })
            .on("mouseout", function (d) {
                d3.select(this).style("cursor", "default")
                d3.select(this).attr("opacity", 1);
                tooltip.style("opacity", 0);
            })

            .on("click", function (d, i) {
                window.open("https://en.wikipedia.org/w/index.php?search=" + d.name + "&title=Special%3ASearch&fulltext=1.org")
            });
    });

}



// Show this chart by default
updateDrawing('json/demo.json');
