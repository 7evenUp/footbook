export type Exercise = {
  id: number,
  name: string,
  info: string,
  time: number,
  video: any
}

export type CollectionItemType = {
  picture: string,
  cardName: string,
  level: string,
  about: string,
  exercises: Array<Exercise>
}

export type CollectionType = {
  collectionName: string,
  collectionData: CollectionItemType[]
}