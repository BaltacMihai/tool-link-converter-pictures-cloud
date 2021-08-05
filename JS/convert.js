function convert(url) {
  //Because we want the id of the url we search for it
  let id = url.match(/d\/([A-Za-z0-9_\-]+)/);
  //I observe that id is an array, only the 2nd position is important for us,
  //the rest is rendundant data
  let newUrl = "https://drive.google.com/uc?export=view&id=" + id[1];
  return newUrl;
}
