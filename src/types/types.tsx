export interface IDonorDetails {
  _id: string;
  username: string;
  donationAmount: number;
  imageURL: string;
  companyName: string;
  donorStatement: string;
}

export interface IComment {
  _id?: string;
  username: string;
  comment: string;
  commentDate: string;
  imgURL: string;
  likeCount: number;
  email: string;
}
