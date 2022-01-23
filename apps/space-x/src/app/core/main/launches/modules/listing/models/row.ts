import { Launch } from './launch';

export interface Row {
  docs: Launch[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
  page: number;
  totalDocs: number;
  totalPages: number;
}
