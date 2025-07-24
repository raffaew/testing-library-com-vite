import { render, screen } from "../../../test-utils/testing-library-utils";

import Options from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  //find images
  //use findAllByRole when you expect the element to appear asynchronously
  //else use getAllByRole when you expect it to be there immediately
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image for each topping option from server", async () => {
  render(<Options optionType="toppings" />);

  //find images, expect 3 images based on what msw returns
  const images = await screen.findAllByRole("img", { name: /topping$/i });
  expect(images).toHaveLength(3);

  // confirm alt text of images
  const imagesTitles = images.map((img) => img.alt);
  expect(imagesTitles).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
