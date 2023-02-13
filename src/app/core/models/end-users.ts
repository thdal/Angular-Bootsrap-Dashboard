export interface EndUser {
  firstname: string;
  lastname: string;
  email: string;
  locked: boolean;
  accounts: [
    {
      companyTrzId: number,
      userTrzId: number,
      walletTrzIds: number
    }
  ],
}
