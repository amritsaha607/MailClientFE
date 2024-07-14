export interface User {
  name: String;
  email: String;
}

export interface Mail {
  subject: String;
  sender: User;
  content?: String;
  time: Date;
}
