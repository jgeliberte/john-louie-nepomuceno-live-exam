function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X Value');
    data.addColumn('number', 'Y Value');

    function NormalDensityZx(x, Mean, StdDev) {
        var a = x - Mean;
        return Math.exp(-(a * a) / (2 * StdDev * StdDev)) / (Math.sqrt(2 * Math.PI) * StdDev);
    }
    var chartData = new Array([]);
    var index = 0;
    for (var i = 0; i < 100; i += 0.1) {
        chartData[index] = new Array(2);
        chartData[index][0] = i;
        chartData[index][1] = NormalDensityZx(i, 70, 4);
        index++;
    }
    data.addRows(chartData);
    options = {
        height: 500,
        width: 800,
        legend: 'none'
    };
    options.hAxis = {};
    options.hAxis.minorGridlines = {};
    options.hAxis.minorGridlines.count = 12;
    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
google.load('visualization', '1', {
    packages: ['corechart'],
    callback: drawChart
});