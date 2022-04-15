import { CompositeNavigationProp, ParamListBase, RouteProp} from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export interface CollectionNavigationProps<
  RouteName extends keyof CollectionStackRoutes
> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<CollectionStackRoutes, RouteName>,
    StackNavigationProp<TrainingStackRoutes, 'Training'>
  >;
  route: RouteProp<CollectionStackRoutes, RouteName>
}

export type AppRoutes = {
  Home: undefined;
  Workout: undefined;
  Statistics: undefined;
  Profile: undefined;
}

export type WorkoutTabRoutes = {
  Collections: undefined;
  SkillBook: undefined;
  MyWorkouts: undefined;
}

export type CollectionStackRoutes = {
  CollectionList: undefined;
  CollectionItem: {
    picture: string,
    cardName: string,
    level: string,
    about: string,
    exercises: Array<Exercise>
  };
}

export type SkillBookStackRoutes = {
  SkillBookList: undefined;
  SkillBookItem: {
    poster: number,
    title1: string,
    title2: string
  };
}

export type TrainingStackRoutes = {
  Training: {
    exercises: Array<Exercise>
  };
  EndTraining: {
    passedTime: number
  }
}

export type StatisticsStackRoutes = {
  StatisticsScreen: undefined;
}

export type ProfileStackRoutes = {
  ProfileMain: undefined;
  Favourites: undefined;
  Settings: undefined;
  Subscription: undefined;
  EditProfile: undefined;
}

export type AuthStackRoutes = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
}

type Exercise = {
  id: number,
  name: string,
  info: string,
  time: number,
  video: any
}