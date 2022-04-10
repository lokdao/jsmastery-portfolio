import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: '7ahlng2c',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skkEQRtfIqGtJQOj2dPMxngCjKX2AG5lYVPv7WFW6OtaYjT6IYhCgX1m6CXN2klt6GeFqgs0x8o4iZ5p6uZKpjUgLm8D44wgWQXzxOYwsDNvmwa1X1oKuKm4ioz27YmieqBDgYM5OBvcrmxxGoCkEvBYZW9ZOgGrJGHOcAWlDiUJhVzd3JZx'
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)