export interface Column<T> {
    Header: string;
    accessor: keyof T;
    Cell?: (item: T) => JSX.Element;
    cellClass?: string;
}

export interface TableProps<T> {
    data: T[];
    columns: Column<T>[];
  
}