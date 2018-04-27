const burstT = new mojs.Burst({
  radius:         {0:200},
  count:          15,
    children: {
      fill:         '#1de9b6',
      stroke:       '#1de9b6',
      strokeWidth:  {3:0},
      shape:        'polygon',
      radius:       {0:50},
      angle:        {0:720},
      duration:     2000
    }
});

const burstC = new mojs.Burst({
  radius:         {0:300},
  count:          20,
    children: {
      fill:         '#1de9b6',
      stroke:       'magenta',
      strokeWidth:  {3:0},
      shape:        'cross',
      radius:       {0:30},
      angle:        {0:-720},
      duration:     2000,
      delay:        250

    }
});

const burstCir = new mojs.Burst({
  radius:         { 0: 350 },
  count:          7,
    children: {
      fill:         {'yellow' : 'purple'},
      strokeWidth:  {3:0},
      shape:        'circle',
      radius:       {0:30},
      angle:        {0:-720},
      duration:     2000,
      delay:        500
    }
});

const square = new mojs.Shape({
  shape:          'rect',
  fill:           'none',
  stroke:         '#1de9b6',
  radius:         10,
  strokeWidth:    20,
  angle:          { 0 : -180 },
  duration:       1000
  }).then({
  angle:          360,
  scale:          2,
  strokeWidth:    { 50 : 0 },
  stroke:         { 'magenta' : 'yellow'  }
});

const circleC1 = new mojs.Shape({
  fill:           'none',
  radius:         25,
  strokeWidth:    { 50 : 0 },
  scale:          { 0: 1 },
  angle:          { 'rand(-35, -70)': 0 },
  duration:       500,
  left: 0,        top: 0,
  stroke:         '#1de9b6',
});

const circleC2 = new mojs.Shape({
  fill:           'none',
  radius:         25,
  strokeWidth:    { 50 : 0 },
  scale:          { 0: 1 },
  angle:          { 'rand(-35, -70)': 0 },
  duration:       500,
  left: 0,        top: 0,
  radius:         { 0 : 15 },
  strokeWidth:    { 30: 0 },
  stroke:         'magenta',
  delay:          'rand(75, 150)'
});

document.addEventListener( 'click', function (e) {
   circleC1
    .tune({ x: e.pageX, y: e.pageY  })
    .replay();

    circleC2
     .tune({ x: e.pageX, y: e.pageY  })
     .replay();
});

const timeline = new mojs.Timeline({
  repeat : 999
})
  .add(burstT, burstC, burstCir, square)
  .play();
