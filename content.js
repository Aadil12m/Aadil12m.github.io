/* Things you can add without touching index.html.

   RESUME
   Put your PDF next to index.html and set its file name below.
   A "Download résumé" button then appears in the hero. Leave it '' to hide the button.

   BENCH MEDIA
   Real photos and videos of each robot. Put the files in the media/ folder and list
   them under the project. A "From the bench" strip then appears on that project's sheet.
   Projects with an empty list show nothing.

   Example:
     amr: [
       { src: 'media/amr-aisle.jpg',  alt: 'The AMR driving down a warehouse aisle' },
       { src: 'media/amr-demo.mp4',   alt: 'The AMR scanning a rack', poster: 'media/amr-demo.jpg' }
     ],

   Keep photos under about 400 KB each (1600 px wide JPG is plenty) and videos short,
   so the page stays fast. Write the alt text as what a person would see in the picture. */

window.SITE = {
  resume: '',

  media: {
    amr: [],
    piezo: [],
    vial: [],
    gripper: []
  }
};
