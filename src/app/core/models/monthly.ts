export class Monthly {
  designation?: string;
  amount?: string;
  description?: string;
  paid?: boolean;
  outflow?: boolean;

  constructor(monthly: Monthly) {
    Object.assign(this, monthly);
  }

}
