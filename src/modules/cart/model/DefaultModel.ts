import { v4 } from "uuid";

class DefaultModel {
  id?: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}

export { DefaultModel };