 $(document).ready(function () {
      var plot;  // defined below

      var plotButton = document.getElementById("plot");
      plot = function() {
        var eq = function(x) { return [Math.sqrt(1-Math.pow(Math.abs(x)-1,2)), Math.acos(1-Math.abs(x))-Math.PI]; };
        eval("fn = " + eq);

        var graph = document.getElementById("graph_div2");
        var width = parseInt(graph.style.width, 10);
        var x1 = parseFloat(-10);
        var x2 = parseFloat(10);
        var xs = 1.0 * (x2 - x1) / width;

        var data = [];
        for (var i = 0; i < width; i++) {
          var x = x1 + i * xs;
          var y = fn(x);
          var row = [x];
          if (y.length > 0) {
            for (var j = 0; j < y.length; j++) {
              row.push(y[j]);
            }
          } else {
            row.push(y);
          }
          data.push(row);
        }

        new Dygraph(graph, data);
      };
      plotButton.onclick = plot;
      plot();
    }
);