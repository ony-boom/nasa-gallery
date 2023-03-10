export type FormValue = {
  query: string;
};

export interface Collections {
  collection: Collection;
}

export interface Collection {
  version: string;
  href: string;
  items: Item[];
  metadata: Metadata;
  links: CollectionLink[];
}

export interface Item {
  href: string;
  data: Datum[];
  links: ItemLink[];
}

export interface Datum {
  center: Center;
  title: string;
  nasa_id: string;
  date_created: Date;
  keywords: string[];
  media_type: MediaType;
  description_508?: string;
  secondary_creator?: string;
  description: string;
  album?: string[];
  photographer?: string;
  location?: string;
}

export enum Center {
  Arc = "ARC",
  Gsfc = "GSFC",
  Hq = "HQ",
  Jpl = "JPL",
}

export enum MediaType {
  Image = "image",
  Video = "video",

  Audio = "audio",
}

export interface ItemLink {
  href: string;
  rel: Rel;
  render?: MediaType;
}

export enum Rel {
  Captions = "captions",
  Preview = "preview",
}

export interface CollectionLink {
  rel: string;
  prompt: string;
  href: string;
}

export interface Metadata {
  total_hits: number;
}

export type Gallery = Datum & {
  collectionLink: string;
  previewImage: string;
  isVideo: boolean;
};
