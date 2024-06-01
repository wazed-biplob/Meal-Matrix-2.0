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

export interface IVolunteer {
  _id?: string;
  name: string;
  presentAddress: string;
  imgURL: string;
  email: string;
}

export interface IProduct {
  _id: string;
  title: string;
  imageURL: string;
  category: string;
  description: string;
  quantity: number;
  review: number;
  rating: number;
  donorName: string;
  donorImageURL: string;
  supply: number;
  sold: number;
  price: number;
}
