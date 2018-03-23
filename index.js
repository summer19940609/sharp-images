const sharp = require('sharp')



const image = sharp('input.jpg');
image
  .metadata()
  .then(function(metadata) {
    return image
      .resize(Math.round(metadata.width / 2))
      .toFile('output.jpg')
  })
  .then(function(data) {
    console.log(data)
  });