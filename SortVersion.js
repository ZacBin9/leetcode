var compareVersion = function (version1, version2) {
  let version1Arr = version1.split('.')
  let version2Arr = version2.split('.')
  let version1Len = version1Arr.length
  let version2Len = version2Arr.length
  let maxLen = Math.max(version1Len, version2Len)
  if (version1Len > version2Len) {
    version2Arr.length = maxLen
    version2Arr.fill('0', version2Len)
  }
  if (version2Len > version1Len) {
    version1Arr.length = maxLen
    version1Arr.fill('0', version1Len)
  }
  for (let i = 0; i < maxLen; i++) {
    if (Number(version1Arr[i]) !== Number(version2Arr[i])) {
      return Number(version1Arr[i]) < Number(version2Arr[i]) ? -1 : 1
    }
  }
  return 0
}
var sortVersion = function (list) {
  list.sort((a, b) => compareVersion(a, b))
  return list
}
console.log(sortVersion(['1.0.0', '2.12.1', '1.2.3.4.5.6.7', '0.18.1']))
