export interface Filter {
  name: string;
  label: string;
  isOpen: boolean;
  options: Array<FilterOption>;
}

interface FilterOption {
  id: number;
  label: string;
  value: string;
}
