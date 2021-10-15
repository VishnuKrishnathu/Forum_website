export interface IUserData {
  id :number | undefined;
  username :string;
  email :string;
}

export interface ISignupModel {
  username :string;
  email :string;
  password :string;
}

export interface ILoginModel {
  username :string;
  password :string;
}

export interface ILoginData{
  user : {
    id :number;
    username :string;
    password :string;
  },
  token :string;
}