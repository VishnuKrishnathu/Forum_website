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