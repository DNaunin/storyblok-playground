// @ts-ignore
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
 
const Page = ({ blok }: any) => (
  <main {...storyblokEditable(blok)}>
    {blok.body
      ? blok.body.map((blok: any) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </main>
);
 
export default Page;