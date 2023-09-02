interface IBaseRepository<T> {
  create(item: T): Promise<T | null>;
  update(id: string, item: T): Promise<T | null>;
  delete(id: string): Promise<boolean>;
  find(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
}

export { IBaseRepository };
