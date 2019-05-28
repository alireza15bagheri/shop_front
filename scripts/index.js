var dataset = [10, 20, 30, 40, 50]

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);

var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d){
        return svgHeight - d

    })
    .attr("height", function(d){
        return d;
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function(d, i){
        var translate = [barWidth * 1, 0];
        return "translate("+ translate + ")";
    });

var text = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d){
        return d;
    })
    .attr("y", function(d, i){
        return svgHeight - d - 2;
    })
    .attr("x", function(d, i){
        return barWidth * i;
    })
    .attr("fill", "#A64C38")