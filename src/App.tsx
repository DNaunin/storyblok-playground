// @ts-ignore
import { useStoryblok, StoryblokComponent } from "@storyblok/react";
import React from 'react';

import logo from './logo.svg';
import './App.css';


function App() {
  let slug =
  window.location.pathname === "/"
    ? "home"
    : window.location.pathname.replace("/", "");


const story = useStoryblok(slug, { version: "draft" });
if (!story || !story.content) {
  return <div>Loading...</div>;
}

return <StoryblokComponent blok={story.content} />;

}

export default App;
