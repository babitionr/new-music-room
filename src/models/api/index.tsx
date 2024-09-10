export class Responses<T> {
  constructor(
    public statusCode?: 200 | 201 | 500 | 404,
    public message?: string,
    public data?: {},
    public count?: number
  ) {}
}

export class CommonEntity {
  constructor(
    public id?: string,
    public created_at?: string,
    public updated_at?: string,
    public isDeleted?: string,
    public isDisabled?: string
  ) {}
}

export class PaginationQuery<T = object> {
  constructor(public sorts?: string | T, public extend?: string | T) {}
}
