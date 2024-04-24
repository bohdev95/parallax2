export type profileType = {
    name: string;
    birthdate: string;
    place_of_birth: string;
    photo_url: string;
    basic_info: string;
    favorite_drink: string;
    family: {
        spouse: string;
        children: Array<string>;
    };
    addresses: {
        home: string;
        work: string;
    };
    transactions: Array<{
      date: string;
      amount: string;
      description: string;
    }>;
    health_record: {
        height: string;
        weight: string;
        conditions: Array<string>
    }
}