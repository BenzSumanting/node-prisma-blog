import { BaseResource } from "./base.resource";

export class UserResource extends BaseResource {
  private user: any;

  constructor(user: any) {
    super();
    this.user = user;
  }

  toJSON() {
      return {
        id: this.user.id,
        name: this.user.name,
        email: this.user.email
      }
  }
}
