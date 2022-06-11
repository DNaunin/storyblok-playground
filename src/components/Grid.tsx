// @ts-ignore
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
 
const Grid = ({ blok }: any) => {
  return (
    <div style={{display: "flex", justifyContent: "space-around"}} 
      {...storyblokEditable(blok)} className="grid">
      {blok.columns.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};
 
export default Grid;