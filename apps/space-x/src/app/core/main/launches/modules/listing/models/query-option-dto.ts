export interface QueryOptionDto {
  query: Record<string, unknown>;
  options: {
    limit: number;
    page: number;
    sort: Record<string, string>;
  };
}
