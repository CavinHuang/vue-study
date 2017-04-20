/**
 * 根据某一个key排序
 * @Author   Rukic
 * @DateTime 2017-04-16T15:44:23+0800
 * @param    {[type]}                 arr [description]
 * @param    {[type]}                 key [description]
 * @return   {[type]}                     [description]
 */
export function sortArray(arr, key) {
    console.log(arr)
    return arr.sort(function (a, c) {
      return (c[key] < a[key]) ? 1 : -1;
    })

}
