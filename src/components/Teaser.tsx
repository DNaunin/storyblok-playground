// @ts-ignore
import { storyblokEditable } from "@storyblok/react";
 
const Teaser = ({ blok }: any) => {
  return <h2 style={{textAlign: 'center'}} 
    {...storyblokEditable(blok)} >{blok.headline}</h2>;
};
 
export default Teaser;