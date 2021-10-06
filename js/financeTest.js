google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Stocks", "원"],
    ["VOO etf", 29328295],
    ["신한지주", 3850900],
    ["PI첨단소재", 9576000],
    ["펄어비스", 4265000],
    ["삼성전자", 9808800],
  ]);

  var options = {
    title: "My Stock Composition",
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}