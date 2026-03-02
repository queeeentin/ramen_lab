
export interface Course {
  id: string;
  title: string;
  duration: string;
  description: string;
  price: string;
  image: string;
  category: 'Professional' | 'Intensive' | 'Workshop';
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  experience: string;
  bio: string;
  image: string;
  language: string;
}

export interface StudentStory {
  id: string;
  name: string;
  businessName: string;
  quote: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
