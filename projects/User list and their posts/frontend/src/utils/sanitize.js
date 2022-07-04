export default function sanitize(source, keyMap) {
  let result = {};

  for (let i = 0, len = keyMap.length; i < len; i++) {
    assign(result, keyMap[i].split('.'), source);
  }

  result.image = `https://avatars.dicebear.com/v2/avataaars/${result.username}.svg`;

  return result;
}

function assign(obj, keyPath, source) {
  let lastKeyIndex = keyPath.length-1;
  for (let i = 0; i < lastKeyIndex; ++ i) {
    let key = keyPath[i];
    if (!(key in obj)){
      obj[key] = {}
    }
    obj = obj[key];
    source = source[key];
  }
  obj[keyPath[lastKeyIndex]] = source[keyPath[lastKeyIndex]];
}


// export default function sanitize(obj, keysToKeep) {
//   const newObj = Object.assign(
//     {},
//     ...keysToKeep.map((prop) => ({ [prop]: obj[prop] }))
//   );

//   // should not be doing this but need to improvise for time's sake
//   newObj.address = {};
//   newObj.address.street = obj.address.street;
//   newObj.address.suite = obj.address.suite;
//   newObj.address.city = obj.address.city;
  

//   return newObj;
// }