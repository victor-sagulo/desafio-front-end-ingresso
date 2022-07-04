import React from "react";

export interface MoviesProviderProps {
  children: React.ReactNode;
}

export interface PremiereDate {
  localDate: Date;
  isToday: boolean;
  dayOfWeek: string;
  dayAndMonth: string;
  hour: string;
  year: string;
}

export interface Image {
  url: string;
  type: string;
}

export interface Trailer {
  type: string;
  url: string;
  embeddedUrl: string;
}

export interface RottenTomatoe {
  id: string;
  criticsRating: string;
  criticsScore: string;
  audienceRating: string;
  audienceScore: string;
  originalUrl: string;
}

export interface Event {
  name: string;
  events: EventList[];
}

export interface EventList {
  id: string;
  title: string;
  originalTitle: string;
  movieIdUrl: string;
  ancineId: string;
  countryOrigin: string;
  priority: number;
  contentRating: string;
  duration: string;
  rating: number;
  synopsis: string;
  cast: string;
  director: string;
  distributor: string;
  inPreSale: boolean;
  isReexhibition: boolean;
  urlKey: string;
  isPlaying: boolean;
  countIsPlaying: number;
  premiereDate: PremiereDate;
  creationDate: Date;
  city: string;
  siteURL: string;
  nationalSiteURL: string;
  images: Image[];
  genres: string[];
  ratingDescriptors: any[];
  completeTags: any[];
  tags: any[];
  trailers: Trailer[];
  boxOfficeId?: any;
  partnershipType?: any;
  rottenTomatoe: RottenTomatoe;
}

export interface MovieProviderData {
  moviesList: EventList[];
  stateId: number;
  setMoviesList: React.Dispatch<React.SetStateAction<EventList[]>>;
  setStateId: React.Dispatch<React.SetStateAction<number>>;
  ListAllMovies: () => void;
}
