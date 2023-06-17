import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: 'PRV_ID',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-06-16',


})
const builder = imageBuilder(client);

export const urlFor = source=> builder.image(source);

export default client;