export interface IQuestionsData {
    question :string;
    users_id :number;
    likes :number;
    comments :number;
    username :string;
    questions_id :number;
    likes_id : null | number;
}

export interface IQuestions {
    data : Array<IQuestionsData>
}

export interface IComments {
    current_page :number,
    data : Array<ICommentsData>
}

export interface ICommentsData {
    comment :string;
    username :string;
    users_id :string;
}