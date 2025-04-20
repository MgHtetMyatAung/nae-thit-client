type TypeOfCategory = {
  id: string;
  name: string;
  blogCount: number;
  createdAt: string;
  updatedAt: string;
};

type TypeOfBlog = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: TypeOfCategory;
  createdAt: string;
  updatedAt: string;
};
