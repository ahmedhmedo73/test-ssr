import { ResolveFn } from '@angular/router';

async function waitSomeTime(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

export const myResolverResolver: ResolveFn<{
  title: string;
  description: string;
  image: string;
}> = async (route, state) => {
  await waitSomeTime();
  return {
    title: 'My Awesome Angular 17 SSR App',
    description: 'A detailed description of my Angular 17 SSR app content.',
    image:
      'https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-512.png',
  };
};
