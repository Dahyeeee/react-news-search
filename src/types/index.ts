export interface Article {
  readonly _id: number;
  readonly headline: {
    main: string;
  };
  readonly pub_date: string;
  web_url: string;
  clipped?: boolean;
}
