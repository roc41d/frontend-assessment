export interface Book {
    id: string;
    type: string;
    links: {
      self: string;
    };
    attributes: {
      urn: string;
      created_at: string;
      updated_at: string;
      content: string;
      properties: any;
      display_properties: {
        type: string;
        image: string;
      };
    };
    relationships: {
      authors: {
        links: {
          self: string;
          related: string;
        };
      };
      publishers: {
        links: {
          self: string;
          related: string;
        };
      };
    };
}