export interface BidInfo {
  title: string;
  price: string | number;
  badge?: string;
}

export interface ProjectType {
  id: string;
  deadline: string;
  title: string;
  description: string;
  bidInfo?: BidInfo;
  priceRange?: string;
  files?: string;
  status?: string;
  request?: string;
  revision?: number;
}
