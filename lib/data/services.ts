import { getServices } from './content'

export const services = getServices().map((service, index) => ({
  id: index + 1,
  title: service.title,
  description: service.description,
  icon:
    ['Megaphone', 'Building', 'Globe', 'Palette', 'Calendar'][index] ||
    'Megaphone',
}))
