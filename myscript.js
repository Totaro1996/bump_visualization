var colors = Highcharts.getOptions().colors;
Highcharts.chart('container', {

  chart: {
    type: 'streamgraph',
    marginBottom: 30,
    zoomType: 'x'
  },

  // Make sure connected countries have similar colors
  colors: [
    colors[0],
    colors[1],
    colors[2],
    colors[3],
    colors[4],
    // East Germany, West Germany and Germany
    Highcharts.color(colors[5]).brighten(0.2).get(),
    Highcharts.color(colors[5]).brighten(0.1).get(),

    colors[5],
    colors[6],
    colors[7],
    colors[8],
    colors[9],
    colors[0],
    colors[1],
    colors[3],
    // Soviet Union, Russia
    Highcharts.color(colors[2]).brighten(-0.1).get(),
    Highcharts.color(colors[2]).brighten(-0.2).get(),
    Highcharts.color(colors[2]).brighten(-0.3).get()
  ],

  title: {
    floating: true,
    align: 'left',
    text: 'Winter Olympic Medal Wins'
  },
  subtitle: {
    floating: true,
    align: 'left',
    y: 30,
    text: 'Source: <a href="https://www.sports-reference.com/olympics/winter/1924/">sports-reference.com</a>'
  },

  xAxis: {
    maxPadding: 0,
    type: 'category',
    crosshair: true,
    categories: [
      '',
      'A Silvia',
      'Canto Notturno',
      'Il Sabato del Villaggio',
      'La quiete dopo la Tempesta',
      'Le Ricordanze',

    ],
    labels: {
      align: 'left',
      reserveSpace: false,
      rotation: 270
    },
    lineWidth: 0,
    margin: 20,
    tickWidth: 0
  },

  yAxis: {
    visible: false,
    startOnTick: false,
    endOnTick: false
  },

  legend: {
    enabled: false
  },

  annotations: [{
    labels: [{
      point: {
        x: 5.5,
        xAxis: 0,
        y: 30,
        yAxis: 0
      },
      text: 'Cancelled<br>during<br>World War II'
    }, {
      point: {
        x: 18,
        xAxis: 0,
        y: 90,
        yAxis: 0
      },
      text: 'Soviet Union fell,<br>Germany united'
    }],
    labelOptions: {
      backgroundColor: 'rgba(255,255,255,0.5)',
      borderColor: 'silver'
    }
  }],

  plotOptions: {
    series: {
      label: {
        minFontSize: 5,
        maxFontSize: 15,
        style: {
          color: 'rgba(255,255,255,0.75)'
        }
      }
    }
  },

  // Data parsed with olympic-medals.node.js
  series: [{
    name: "IC 1",
    data: [
      2, 16, 13, 6, 12
    ]
  }, {
    name: "INS.",
    data: [
      0, 1, 1, 0, 0
    ]
  }, {
    name: "LC 1",
    data: [
      9, 9, 1, 4, 17
    ]
  }, {
    name: "LC 2",
    data: [
      0, 8, 4, 5, 4
    ]
  }, {
    name: "LC 3",
    data: [
      0, 5, 2, 0, 4
    ]
  }, {
    name: "LC 4",
    data: [
      0, 1, 1, 0, 0
    ]
  }, {
    name: "LC 5",
    data: [
      0, 0, 0, 0, 0, 0
    ]
  },

  exporting: {
    sourceWidth: 800,
    sourceHeight: 600
  }

});
