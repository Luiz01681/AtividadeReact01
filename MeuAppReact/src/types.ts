export type Movie = {
  id: string;
  title: string;
  description: string;
  watched: boolean;
};

export type RootStackParamList = {
  Home: { newMovie?: Movie } | undefined;
  Add: undefined;
  Details: { movie: Movie };
  About: undefined;
};