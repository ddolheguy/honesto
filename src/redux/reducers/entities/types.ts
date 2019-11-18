export type Entity<T> =
  | {
      state: 'NONE';
    }
  | {
      state: 'PENDING';
    }
  | {
      state: 'FAILURE';
      error: Error;
    }
  | { state: 'SUCCESS'; data: T };
