export interface IAPIResult {
  content: any[];
  empty: boolean;
  first: boolean
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: IAPIResultPageable;
  size: number;
  sort: IAPIResultSort;
  totalElements: number;
  totalPages: number;
}

export interface IAPIResultSort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface IAPIResultPageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  sort: IAPIResultSort;
  unpaged: boolean;
}