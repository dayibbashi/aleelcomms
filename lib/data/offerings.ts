import { getSpecializedOfferings } from './content'

export const offerings = getSpecializedOfferings().map((offering, index) => ({
  id: index + 1,
  title: offering.title,
  description: offering.description,
}))
