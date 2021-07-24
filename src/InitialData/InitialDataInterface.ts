export interface IFERMENTABLE {
  name: string;
  potential: number;
  yield: number;
  'coarse-fine-diff': number;
  moisture: number;
  color: number;
  'recommend-mash': boolean;
  'add-after-boil': boolean;
  'diastatic-power': number;
  'max-in-batch': number;
  protein: number;
  notes: string;
}
