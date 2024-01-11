export default async (request) => {
  return new Response(
    `<svg width="300" height="278" xmlns="http://www.w3.org/2000/svg">

 <g>
   <rect id="svg_4" height="300" width="278" y="0" x="0" stroke="#fff" fill="#000"/>
  <text xml:space="preserve" text-anchor="start" font-size="16" id="svg_1" y="85" x="20" stroke-width="0" stroke="#fff" fill="#fff">NOT A SQUIRREL!!!!!!</text>
  <text xml:space="preserve" text-anchor="start"  font-size="16" id="svg_2" y="162" x="50" stroke-width="0" stroke="#fff" fill="#fff">THIS IS RESPONSE</text>
  <text style="cursor: move;" xml:space="preserve" text-anchor="start" font-size="16" id="svg_3" y="198" x="46" stroke-width="0" stroke="#fff" fill="#fff">FROM A FUNCTION</text>
 </g>
</svg>`,
    {
      headers: {
        "content-type": "image/svg+xml;charset=UTF-8",
      },
    }
  );
};

export const config = {
  path: "/*",
  preferStatic: true,
};
