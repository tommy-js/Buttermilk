export type Story = {
  title: string;
  subtitle: string;
  stars: number;
  timestamp: number;
};

export type Guide = {
  title: string;
  subtitle: string;
  stars: number;
  timestamp: number;
};

export type Spot = {
  title: string;
  location: string;
  stars: number;
  timestamp: number;
};

export type Follower = {
  username: string;
  userId: string;
  timestamp: number;
};

export type Following = {
  username: string;
  userId: string;
  timestamp: number;
};

export type Starred = {
  title: string;
  id: string;
  timestamp: number;
};
