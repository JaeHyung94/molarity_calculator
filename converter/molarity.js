var metric;

metric = {
  nmol: {
    name: {
      singular: 'Nanomolar',
      plural: 'Nanomolars'
    },
    to_anchor: 1/1000000000
  },
  umol: {
    name: {
      singular: 'Micromolar',
      plural: 'Micromolars'
    },
    to_anchor: 1/1000000
  },
  mmol: {
    name: {
      singular: 'Millimolar',
      plural: 'Millimolars'
    },
    to_anchor: 1/1000
  },
  mol: {
    name: {
      singular: 'Molar',
      plural: 'Molars'
    },
    to_anchor: 1
  }
};

module.exports = {
  metric: metric,
  _anchors: {
    metric: {
      unit: 'mol',
      ratio: 1
    }
  }
};
