function getParameterDefinitions() {
  return [
    { name: 'f_height', type: 'float', initial: 5, min: 1, max: 100, step: 0.1, caption: 'Fの高さ' },
    { name: 'f_width', type: 'float', initial: 3, min: 1, max: 100, step: 0.1, caption: 'Fの太さ' },
    { name: 'ring_height', type: 'float', initial: 5, min: 1, max: 100, step: 0.1, caption: '指輪の高さ' },
    { name: 'ring_radius', type: 'float', initial: 12, min: 1, max: 100, step: 0.1, caption: '指輪の半径' },
    { name: 'ringhole_radius', type: 'float', initial: 8, min: 1, max: 100, step: 0.1, caption: '指輪の穴の半径' },
    { name: 'sc', type: 'float', initial: 1, min: 1, max: 100, step: 0.1, caption: 'スケール' },
    ];
}

function main(p) {
   var o = [];

   var l = vector_text(0,0,"F");

   l.forEach(function(s) {
        o.push(translate([-4, p.ring_radius-2, 0],rectangular_extrude(s, { w:p.f_width, h:p.f_height,center: true })));
   });

    o.push(
        difference(
            cylinder({r:p.ring_radius, h:p.ring_height}),
            cylinder({r:p.ringhole_radius, h:p.ring_height})
        )
    );

   return union(o).scale(p.sc);
}
