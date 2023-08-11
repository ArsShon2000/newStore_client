export interface IBoilerPart {
    id: number;
    boiler_manufacturer: string;
    price: number;
    parts_manufacturer: string;
    vendor_code: string;
    name: string;
    description: string;
    compatibility: string;
    images: string;
    in_stock: number;
    bestseller: boolean;
    new: boolean;
    popularity: number;
}

export interface IBoilerParts {
    count: number;
    rows: IBoilerPart[]
}