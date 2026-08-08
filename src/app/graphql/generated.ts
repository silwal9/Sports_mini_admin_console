/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
};

export type Athlete = {
  __typename?: 'Athlete';
  avatar: Scalars['String']['output'];
  bio: Scalars['String']['output'];
  earnings: Scalars['Int']['output'];
  followers: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sport: Scalars['String']['output'];
  stats: Scalars['JSON']['output'];
  status: Scalars['String']['output'];
};

export type AthleteFilter = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  avatar_gt?: InputMaybe<Scalars['String']['input']>;
  avatar_gte?: InputMaybe<Scalars['String']['input']>;
  avatar_lt?: InputMaybe<Scalars['String']['input']>;
  avatar_lte?: InputMaybe<Scalars['String']['input']>;
  avatar_neq?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  bio_gt?: InputMaybe<Scalars['String']['input']>;
  bio_gte?: InputMaybe<Scalars['String']['input']>;
  bio_lt?: InputMaybe<Scalars['String']['input']>;
  bio_lte?: InputMaybe<Scalars['String']['input']>;
  bio_neq?: InputMaybe<Scalars['String']['input']>;
  earnings?: InputMaybe<Scalars['Int']['input']>;
  earnings_gt?: InputMaybe<Scalars['Int']['input']>;
  earnings_gte?: InputMaybe<Scalars['Int']['input']>;
  earnings_lt?: InputMaybe<Scalars['Int']['input']>;
  earnings_lte?: InputMaybe<Scalars['Int']['input']>;
  earnings_neq?: InputMaybe<Scalars['Int']['input']>;
  followers?: InputMaybe<Scalars['Int']['input']>;
  followers_gt?: InputMaybe<Scalars['Int']['input']>;
  followers_gte?: InputMaybe<Scalars['Int']['input']>;
  followers_lt?: InputMaybe<Scalars['Int']['input']>;
  followers_lte?: InputMaybe<Scalars['Int']['input']>;
  followers_neq?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_neq?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
  sport_gt?: InputMaybe<Scalars['String']['input']>;
  sport_gte?: InputMaybe<Scalars['String']['input']>;
  sport_lt?: InputMaybe<Scalars['String']['input']>;
  sport_lte?: InputMaybe<Scalars['String']['input']>;
  sport_neq?: InputMaybe<Scalars['String']['input']>;
  stats?: InputMaybe<Scalars['JSON']['input']>;
  stats_neq?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  status_gt?: InputMaybe<Scalars['String']['input']>;
  status_gte?: InputMaybe<Scalars['String']['input']>;
  status_lt?: InputMaybe<Scalars['String']['input']>;
  status_lte?: InputMaybe<Scalars['String']['input']>;
  status_neq?: InputMaybe<Scalars['String']['input']>;
};

export type AthleteInput = {
  avatar: Scalars['String']['input'];
  bio: Scalars['String']['input'];
  earnings: Scalars['Int']['input'];
  followers: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  sport: Scalars['String']['input'];
  stats: Scalars['JSON']['input'];
  status: Scalars['String']['input'];
};

export type EngagementBySport = {
  __typename?: 'EngagementBySport';
  athleteCount: Scalars['Int']['output'];
  avgEngagementRate: Scalars['Float']['output'];
  followers: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  sport: Scalars['String']['output'];
};

export type EngagementBySportFilter = {
  athleteCount?: InputMaybe<Scalars['Int']['input']>;
  athleteCount_gt?: InputMaybe<Scalars['Int']['input']>;
  athleteCount_gte?: InputMaybe<Scalars['Int']['input']>;
  athleteCount_lt?: InputMaybe<Scalars['Int']['input']>;
  athleteCount_lte?: InputMaybe<Scalars['Int']['input']>;
  athleteCount_neq?: InputMaybe<Scalars['Int']['input']>;
  avgEngagementRate?: InputMaybe<Scalars['Float']['input']>;
  avgEngagementRate_gt?: InputMaybe<Scalars['Float']['input']>;
  avgEngagementRate_gte?: InputMaybe<Scalars['Float']['input']>;
  avgEngagementRate_lt?: InputMaybe<Scalars['Float']['input']>;
  avgEngagementRate_lte?: InputMaybe<Scalars['Float']['input']>;
  avgEngagementRate_neq?: InputMaybe<Scalars['Float']['input']>;
  followers?: InputMaybe<Scalars['Int']['input']>;
  followers_gt?: InputMaybe<Scalars['Int']['input']>;
  followers_gte?: InputMaybe<Scalars['Int']['input']>;
  followers_lt?: InputMaybe<Scalars['Int']['input']>;
  followers_lte?: InputMaybe<Scalars['Int']['input']>;
  followers_neq?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  q?: InputMaybe<Scalars['String']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
  sport_gt?: InputMaybe<Scalars['String']['input']>;
  sport_gte?: InputMaybe<Scalars['String']['input']>;
  sport_lt?: InputMaybe<Scalars['String']['input']>;
  sport_lte?: InputMaybe<Scalars['String']['input']>;
  sport_neq?: InputMaybe<Scalars['String']['input']>;
};

export type EngagementBySportInput = {
  athleteCount: Scalars['Int']['input'];
  avgEngagementRate: Scalars['Float']['input'];
  followers: Scalars['Int']['input'];
  sport: Scalars['String']['input'];
};

export type FanGrowth = {
  __typename?: 'FanGrowth';
  id: Scalars['ID']['output'];
  month: Scalars['String']['output'];
  newFans: Scalars['Int']['output'];
  totalFans: Scalars['Int']['output'];
};

export type FanGrowthFilter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  month?: InputMaybe<Scalars['String']['input']>;
  month_gt?: InputMaybe<Scalars['String']['input']>;
  month_gte?: InputMaybe<Scalars['String']['input']>;
  month_lt?: InputMaybe<Scalars['String']['input']>;
  month_lte?: InputMaybe<Scalars['String']['input']>;
  month_neq?: InputMaybe<Scalars['String']['input']>;
  newFans?: InputMaybe<Scalars['Int']['input']>;
  newFans_gt?: InputMaybe<Scalars['Int']['input']>;
  newFans_gte?: InputMaybe<Scalars['Int']['input']>;
  newFans_lt?: InputMaybe<Scalars['Int']['input']>;
  newFans_lte?: InputMaybe<Scalars['Int']['input']>;
  newFans_neq?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  totalFans?: InputMaybe<Scalars['Int']['input']>;
  totalFans_gt?: InputMaybe<Scalars['Int']['input']>;
  totalFans_gte?: InputMaybe<Scalars['Int']['input']>;
  totalFans_lt?: InputMaybe<Scalars['Int']['input']>;
  totalFans_lte?: InputMaybe<Scalars['Int']['input']>;
  totalFans_neq?: InputMaybe<Scalars['Int']['input']>;
};

export type FanGrowthInput = {
  month: Scalars['String']['input'];
  newFans: Scalars['Int']['input'];
  totalFans: Scalars['Int']['input'];
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAthlete?: Maybe<Athlete>;
  createEngagementBySport?: Maybe<EngagementBySport>;
  createFanGrowth?: Maybe<FanGrowth>;
  createManyAthlete?: Maybe<Array<Maybe<Athlete>>>;
  createManyEngagementBySport?: Maybe<Array<Maybe<EngagementBySport>>>;
  createManyFanGrowth?: Maybe<Array<Maybe<FanGrowth>>>;
  createManyPlatformStat?: Maybe<Array<Maybe<PlatformStat>>>;
  createPlatformStat?: Maybe<PlatformStat>;
  deleteAthlete?: Maybe<Athlete>;
  deleteEngagementBySport?: Maybe<EngagementBySport>;
  deleteFanGrowth?: Maybe<FanGrowth>;
  deletePlatformStat?: Maybe<PlatformStat>;
  removeAthlete?: Maybe<Athlete>;
  removeEngagementBySport?: Maybe<EngagementBySport>;
  removeFanGrowth?: Maybe<FanGrowth>;
  removePlatformStat?: Maybe<PlatformStat>;
  updateAthlete?: Maybe<Athlete>;
  updateEngagementBySport?: Maybe<EngagementBySport>;
  updateFanGrowth?: Maybe<FanGrowth>;
  updatePlatformStat?: Maybe<PlatformStat>;
};


export type MutationCreateAthleteArgs = {
  avatar: Scalars['String']['input'];
  bio: Scalars['String']['input'];
  earnings: Scalars['Int']['input'];
  followers: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  sport: Scalars['String']['input'];
  stats: Scalars['JSON']['input'];
  status: Scalars['String']['input'];
};


export type MutationCreateEngagementBySportArgs = {
  athleteCount: Scalars['Int']['input'];
  avgEngagementRate: Scalars['Float']['input'];
  followers: Scalars['Int']['input'];
  sport: Scalars['String']['input'];
};


export type MutationCreateFanGrowthArgs = {
  month: Scalars['String']['input'];
  newFans: Scalars['Int']['input'];
  totalFans: Scalars['Int']['input'];
};


export type MutationCreateManyAthleteArgs = {
  data?: InputMaybe<Array<InputMaybe<AthleteInput>>>;
};


export type MutationCreateManyEngagementBySportArgs = {
  data?: InputMaybe<Array<InputMaybe<EngagementBySportInput>>>;
};


export type MutationCreateManyFanGrowthArgs = {
  data?: InputMaybe<Array<InputMaybe<FanGrowthInput>>>;
};


export type MutationCreateManyPlatformStatArgs = {
  data?: InputMaybe<Array<InputMaybe<PlatformStatInput>>>;
};


export type MutationCreatePlatformStatArgs = {
  activeAthletes: Scalars['Int']['input'];
  averageEarnings: Scalars['Int']['input'];
  averageFollowers: Scalars['Int']['input'];
  inactiveAthletes: Scalars['Int']['input'];
  monthlyGrowthRate: Scalars['Float']['input'];
  topSport: Scalars['String']['input'];
  totalAthletes: Scalars['Int']['input'];
  totalEarnings: Scalars['Int']['input'];
  totalFollowers: Scalars['Int']['input'];
};


export type MutationDeleteAthleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEngagementBySportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFanGrowthArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePlatformStatArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveAthleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveEngagementBySportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveFanGrowthArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemovePlatformStatArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAthleteArgs = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  earnings?: InputMaybe<Scalars['Int']['input']>;
  followers?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  sport?: InputMaybe<Scalars['String']['input']>;
  stats?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateEngagementBySportArgs = {
  athleteCount?: InputMaybe<Scalars['Int']['input']>;
  avgEngagementRate?: InputMaybe<Scalars['Float']['input']>;
  followers?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  sport?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateFanGrowthArgs = {
  id: Scalars['ID']['input'];
  month?: InputMaybe<Scalars['String']['input']>;
  newFans?: InputMaybe<Scalars['Int']['input']>;
  totalFans?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdatePlatformStatArgs = {
  activeAthletes?: InputMaybe<Scalars['Int']['input']>;
  averageEarnings?: InputMaybe<Scalars['Int']['input']>;
  averageFollowers?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  inactiveAthletes?: InputMaybe<Scalars['Int']['input']>;
  monthlyGrowthRate?: InputMaybe<Scalars['Float']['input']>;
  topSport?: InputMaybe<Scalars['String']['input']>;
  totalAthletes?: InputMaybe<Scalars['Int']['input']>;
  totalEarnings?: InputMaybe<Scalars['Int']['input']>;
  totalFollowers?: InputMaybe<Scalars['Int']['input']>;
};

export type PlatformStat = {
  __typename?: 'PlatformStat';
  activeAthletes: Scalars['Int']['output'];
  averageEarnings: Scalars['Int']['output'];
  averageFollowers: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  inactiveAthletes: Scalars['Int']['output'];
  monthlyGrowthRate: Scalars['Float']['output'];
  topSport: Scalars['String']['output'];
  totalAthletes: Scalars['Int']['output'];
  totalEarnings: Scalars['Int']['output'];
  totalFollowers: Scalars['Int']['output'];
};

export type PlatformStatFilter = {
  activeAthletes?: InputMaybe<Scalars['Int']['input']>;
  activeAthletes_gt?: InputMaybe<Scalars['Int']['input']>;
  activeAthletes_gte?: InputMaybe<Scalars['Int']['input']>;
  activeAthletes_lt?: InputMaybe<Scalars['Int']['input']>;
  activeAthletes_lte?: InputMaybe<Scalars['Int']['input']>;
  activeAthletes_neq?: InputMaybe<Scalars['Int']['input']>;
  averageEarnings?: InputMaybe<Scalars['Int']['input']>;
  averageEarnings_gt?: InputMaybe<Scalars['Int']['input']>;
  averageEarnings_gte?: InputMaybe<Scalars['Int']['input']>;
  averageEarnings_lt?: InputMaybe<Scalars['Int']['input']>;
  averageEarnings_lte?: InputMaybe<Scalars['Int']['input']>;
  averageEarnings_neq?: InputMaybe<Scalars['Int']['input']>;
  averageFollowers?: InputMaybe<Scalars['Int']['input']>;
  averageFollowers_gt?: InputMaybe<Scalars['Int']['input']>;
  averageFollowers_gte?: InputMaybe<Scalars['Int']['input']>;
  averageFollowers_lt?: InputMaybe<Scalars['Int']['input']>;
  averageFollowers_lte?: InputMaybe<Scalars['Int']['input']>;
  averageFollowers_neq?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  inactiveAthletes?: InputMaybe<Scalars['Int']['input']>;
  inactiveAthletes_gt?: InputMaybe<Scalars['Int']['input']>;
  inactiveAthletes_gte?: InputMaybe<Scalars['Int']['input']>;
  inactiveAthletes_lt?: InputMaybe<Scalars['Int']['input']>;
  inactiveAthletes_lte?: InputMaybe<Scalars['Int']['input']>;
  inactiveAthletes_neq?: InputMaybe<Scalars['Int']['input']>;
  monthlyGrowthRate?: InputMaybe<Scalars['Float']['input']>;
  monthlyGrowthRate_gt?: InputMaybe<Scalars['Float']['input']>;
  monthlyGrowthRate_gte?: InputMaybe<Scalars['Float']['input']>;
  monthlyGrowthRate_lt?: InputMaybe<Scalars['Float']['input']>;
  monthlyGrowthRate_lte?: InputMaybe<Scalars['Float']['input']>;
  monthlyGrowthRate_neq?: InputMaybe<Scalars['Float']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  topSport?: InputMaybe<Scalars['String']['input']>;
  topSport_gt?: InputMaybe<Scalars['String']['input']>;
  topSport_gte?: InputMaybe<Scalars['String']['input']>;
  topSport_lt?: InputMaybe<Scalars['String']['input']>;
  topSport_lte?: InputMaybe<Scalars['String']['input']>;
  topSport_neq?: InputMaybe<Scalars['String']['input']>;
  totalAthletes?: InputMaybe<Scalars['Int']['input']>;
  totalAthletes_gt?: InputMaybe<Scalars['Int']['input']>;
  totalAthletes_gte?: InputMaybe<Scalars['Int']['input']>;
  totalAthletes_lt?: InputMaybe<Scalars['Int']['input']>;
  totalAthletes_lte?: InputMaybe<Scalars['Int']['input']>;
  totalAthletes_neq?: InputMaybe<Scalars['Int']['input']>;
  totalEarnings?: InputMaybe<Scalars['Int']['input']>;
  totalEarnings_gt?: InputMaybe<Scalars['Int']['input']>;
  totalEarnings_gte?: InputMaybe<Scalars['Int']['input']>;
  totalEarnings_lt?: InputMaybe<Scalars['Int']['input']>;
  totalEarnings_lte?: InputMaybe<Scalars['Int']['input']>;
  totalEarnings_neq?: InputMaybe<Scalars['Int']['input']>;
  totalFollowers?: InputMaybe<Scalars['Int']['input']>;
  totalFollowers_gt?: InputMaybe<Scalars['Int']['input']>;
  totalFollowers_gte?: InputMaybe<Scalars['Int']['input']>;
  totalFollowers_lt?: InputMaybe<Scalars['Int']['input']>;
  totalFollowers_lte?: InputMaybe<Scalars['Int']['input']>;
  totalFollowers_neq?: InputMaybe<Scalars['Int']['input']>;
};

export type PlatformStatInput = {
  activeAthletes: Scalars['Int']['input'];
  averageEarnings: Scalars['Int']['input'];
  averageFollowers: Scalars['Int']['input'];
  inactiveAthletes: Scalars['Int']['input'];
  monthlyGrowthRate: Scalars['Float']['input'];
  topSport: Scalars['String']['input'];
  totalAthletes: Scalars['Int']['input'];
  totalEarnings: Scalars['Int']['input'];
  totalFollowers: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  Athlete?: Maybe<Athlete>;
  EngagementBySport?: Maybe<EngagementBySport>;
  FanGrowth?: Maybe<FanGrowth>;
  PlatformStat?: Maybe<PlatformStat>;
  _allAthletesMeta?: Maybe<ListMetadata>;
  _allEngagementBySportsMeta?: Maybe<ListMetadata>;
  _allFanGrowthsMeta?: Maybe<ListMetadata>;
  _allPlatformStatsMeta?: Maybe<ListMetadata>;
  allAthletes?: Maybe<Array<Maybe<Athlete>>>;
  allEngagementBySports?: Maybe<Array<Maybe<EngagementBySport>>>;
  allFanGrowths?: Maybe<Array<Maybe<FanGrowth>>>;
  allPlatformStats?: Maybe<Array<Maybe<PlatformStat>>>;
};


export type QueryAthleteArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEngagementBySportArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFanGrowthArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPlatformStatArgs = {
  id: Scalars['ID']['input'];
};


export type Query_AllAthletesMetaArgs = {
  filter?: InputMaybe<AthleteFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllEngagementBySportsMetaArgs = {
  filter?: InputMaybe<EngagementBySportFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllFanGrowthsMetaArgs = {
  filter?: InputMaybe<FanGrowthFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type Query_AllPlatformStatsMetaArgs = {
  filter?: InputMaybe<PlatformStatFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllAthletesArgs = {
  filter?: InputMaybe<AthleteFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllEngagementBySportsArgs = {
  filter?: InputMaybe<EngagementBySportFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllFanGrowthsArgs = {
  filter?: InputMaybe<FanGrowthFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAllPlatformStatsArgs = {
  filter?: InputMaybe<PlatformStatFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};

export type AllPlatformStatsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPlatformStatsQuery = { allPlatformStats: Array<{ id: string, totalAthletes: number, totalFollowers: number, totalEarnings: number, activeAthletes: number, inactiveAthletes: number, averageFollowers: number, averageEarnings: number, topSport: string, monthlyGrowthRate: number } | null> | null };

export type AllFanGrowthQueryVariables = Exact<{ [key: string]: never; }>;


export type AllFanGrowthQuery = { allFanGrowths: Array<{ id: string, month: string, totalFans: number, newFans: number } | null> | null };

export type AllEngagementBySportQueryVariables = Exact<{ [key: string]: never; }>;


export type AllEngagementBySportQuery = { allEngagementBySports: Array<{ id: string, sport: string, followers: number, athleteCount: number, avgEngagementRate: number } | null> | null };

export type AllAthletesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAthletesQuery = { allAthletes: Array<{ id: string, name: string, sport: string, status: string, followers: number, earnings: number, avatar: string, bio: string, stats: unknown } | null> | null };

export type AthleteQueryVariables = Exact<{
  id: string | number;
}>;


export type AthleteQuery = { Athlete: { id: string, name: string, sport: string, status: string, followers: number, earnings: number, avatar: string, bio: string, stats: unknown } | null };

export const AllPlatformStatsDocument = gql`
    query AllPlatformStats {
  allPlatformStats {
    id
    totalAthletes
    totalFollowers
    totalEarnings
    activeAthletes
    inactiveAthletes
    averageFollowers
    averageEarnings
    topSport
    monthlyGrowthRate
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AllPlatformStatsGQL extends Apollo.Query<AllPlatformStatsQuery, AllPlatformStatsQueryVariables> {
    override document = AllPlatformStatsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AllFanGrowthDocument = gql`
    query AllFanGrowth {
  allFanGrowths {
    id
    month
    totalFans
    newFans
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AllFanGrowthGQL extends Apollo.Query<AllFanGrowthQuery, AllFanGrowthQueryVariables> {
    override document = AllFanGrowthDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AllEngagementBySportDocument = gql`
    query AllEngagementBySport {
  allEngagementBySports {
    id
    sport
    followers
    athleteCount
    avgEngagementRate
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AllEngagementBySportGQL extends Apollo.Query<AllEngagementBySportQuery, AllEngagementBySportQueryVariables> {
    override document = AllEngagementBySportDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AllAthletesDocument = gql`
    query AllAthletes {
  allAthletes {
    id
    name
    sport
    status
    followers
    earnings
    avatar
    bio
    stats
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AllAthletesGQL extends Apollo.Query<AllAthletesQuery, AllAthletesQueryVariables> {
    override document = AllAthletesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AthleteDocument = gql`
    query Athlete($id: ID!) {
  Athlete(id: $id) {
    id
    name
    sport
    status
    followers
    earnings
    avatar
    bio
    stats
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AthleteGQL extends Apollo.Query<AthleteQuery, AthleteQueryVariables> {
    override document = AthleteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }