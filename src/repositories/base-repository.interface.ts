interface IBaseRepository<T> {
  create(item: T): T | null;
  update(item: T): T | null;
  delete(id: string): Promise<boolean>;
  find(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
}

export { IBaseRepository };
