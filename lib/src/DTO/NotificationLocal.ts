export class NotificationLocal {
  identifier?: string;
  payload?: any;

  constructor(payload: object) {
    this.payload = payload;
    this.identifier = this.payload.identifier;
  }

  title?: string;
  body?: string;
  sound?: string;
  badge?: string;
  type?: string;
  thread?: string;

  category?: string;
  link?: string;
  data?: any;
  extra?: any;
  fireDate?: string;
}
