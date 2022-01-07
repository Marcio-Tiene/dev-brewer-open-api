const defaultThings = {
  type: 'Dry Extract',
  'recommend-mash': false,
  'add-after-boil': false,
  'max-in-batch': 1.0,
  yield: 0.95,
  'coarse-fine-diff': 0,
  moisture: 0.4,
  'diastatic-power': 0,
  protein: 0,
};

// (defn ^:private build-extract
//   [extract-key extract-data]
//   {extract-key (merge extract-data extract-defaults)})
const dryExtracts: TFermentables[] = [
  {
    name: 'Amber Dry Extract',
    color: 13,
    potential: 1.044,
    notes: 'Amber colored dry malt extract for general purpose use.',
    type: 'Dry Extract',
    'recommend-mash': false,
    'add-after-boil': false,
    'max-in-batch': 1.0,
    yield: 0.95,
    'coarse-fine-diff': 0,
    moisture: 0.4,
    'diastatic-power': 0,
    protein: 0,
  },

  {
    name: 'Dark Dry Extract',
    color: 18,
    potential: 1.044,
    notes: 'For general-purpose use in darker beers.',
    type: 'Dry Extract',
    'recommend-mash': false,
    'add-after-boil': false,
    'max-in-batch': 1.0,
    yield: 0.95,
    'coarse-fine-diff': 0,
    moisture: 0.4,
    'diastatic-power': 0,
    protein: 0,
  },

  {
    name: 'Extra Light Dry Extract',
    color: 3,
    potential: 1.036,
    notes: 'For general-purpose use in light and very light beers.',
    type: 'Dry Extract',
    'recommend-mash': false,
    'add-after-boil': false,
    'max-in-batch': 1.0,
    yield: 0.95,
    'coarse-fine-diff': 0,
    moisture: 0.4,
    'diastatic-power': 0,
    protein: 0,
  },

  {
    name: 'Light Dry Extract',
    color: 8,
    potential: 1.044,
    notes: 'For general-purpose use in light beers.',
    type: 'Dry Extract',
    'recommend-mash': false,
    'add-after-boil': false,
    'max-in-batch': 1.0,
    yield: 0.95,
    'coarse-fine-diff': 0,
    moisture: 0.4,
    'diastatic-power': 0,
    protein: 0,
  },

  {
    name: 'Wheat Dry Extract',
    color: 8,
    potential: 1.044,
    notes: 'Wheat extract for general-purpose use in wheat beers.',
    type: 'Dry Extract',
    'recommend-mash': false,
    'add-after-boil': false,
    'max-in-batch': 1.0,
    yield: 0.95,
    'coarse-fine-diff': 0,
    moisture: 0.4,
    'diastatic-power': 0,
    protein: 0,
  },
];

export default dryExtracts;
