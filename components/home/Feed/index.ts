export function sortByRecent(array: any) {
  let arr = [...array];
  arr.sort(function (a, b) {
    return a.timestamp - b.timestamp;
  });
  return arr;
}

export function sortByStars(array: any) {
  let arr = [...array];
  arr.sort(function (a, b) {
    return b.stars - a.stars;
  });
  return arr;
}

export function updateSearchQuery(array: any, searchQuery: string) {
  let original = [...array];
  let updated = [];
  let queryLowercased = searchQuery.toLowerCase();
  for (let i = 0; i < original.length; i++) {
    let lowerCasedTitle = original[i].title.toLowerCase();
    let lowerCasedUsername = original[i].username.toLowerCase();
    if (lowerCasedTitle.includes(queryLowercased)) {
      updated.push(original[i]);
    } else if (lowerCasedUsername.includes(queryLowercased)) {
      updated.push(original[i]);
    }
  }
  return updated;
}

export function loadMoreSet(array: any, original: any) {
  let modArr = [...array];
  let orig = [...original];
  let len = modArr.length + 15;
  if (len <= orig.length) {
    let arr = orig.splice(0, len);
    return arr;
  } else if (len > orig.length) {
    modArr = orig;
    return modArr;
  }
}
