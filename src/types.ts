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

export interface FormItem {
  id?: String;
  name?: String;
  title?: String;
  placeholder?: String;
  inputType?: String;
}
