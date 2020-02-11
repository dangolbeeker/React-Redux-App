import { generateMedia } from 'styled-media-query'

export const devices = generateMedia({
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '900px',
  laptopL: '1440px',
  desktop: '2560px'
})