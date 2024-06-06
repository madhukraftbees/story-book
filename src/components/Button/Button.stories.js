import React from "react";
import Button from "./Button";
import Center from "../Center/Center";

export default {
  title: "References/Buttons",
  component: Button,
};

export const Primary = () => (
  <Center>
    <Button variant="primary"> Primary</Button>
  </Center>
);
export const Secondary = () => (
  <Center>
    <Button variant="secondary"> Seconday</Button>
  </Center>
);
export const Success = () => (
  <Center>
    <Button variant="success"> Success</Button>
  </Center>
);
export const Danger = () => (
  <Center>
    <Button variant="danger"> Danger</Button>
  </Center>
);
export const Outlined = () => (
  <>
    <Button variant="outlined"> Outlined</Button>
  </>
);
export const MyReferenceButtons = () => (
  <>
    <Button variant="outlined"> Outlined</Button>
    <Button variant="Primary_A"> Primary-A</Button>
    <Button variant="Primary_shadow"> Primary-shadow</Button>
    <Button variant="outlined_hover"> Outlined Hover</Button>
    <Button variant="outlined_blue"> Outlined Blue</Button>
    <Button variant="orange_border"> Orange border css</Button>
  </>
);
