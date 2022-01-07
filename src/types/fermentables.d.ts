declare type FermentablesTypes =
  | 'Grain'
  | 'Sugar'
  | 'Extract'
  | 'Dry Extract'
  | 'Adjunct';

declare type TFermentables = {
  name: string;
  type: FermentablesTypes;
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
};

declare interface FermentablesQuery extends IPaginateQuery {
  name: string;
  type: FermentablesTypes;
  potential?: string;
}
