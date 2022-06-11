// @ts-ignore
import { storyblokEditable } from "@storyblok/react";
 
const Feature = ({ blok }: any) => (
  <div {...storyblokEditable(blok)} className="column feature" >
    {blok.name}
  </div>
);
 
export default Feature; 