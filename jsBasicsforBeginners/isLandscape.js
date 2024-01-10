function isLandscape(width, height) {
  // if (width > height) return ('Landscape!!');
  // return ('Portrait!!');

  // return (width > height) ? 'Landscape!!' : 'Portrait!!';

  return width > height;
}
console.log(isLandscape(1920, 1080));
console.log(isLandscape(1080, 1920));
console.log(isLandscape(980, 1440));
