/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2020-04-05 21:31:24
 * @version $Id$
 */
export const formatFloat = function( num ) {
  return Math.round(num*100)/100;
}
export const formatTime = function (val) {
	const d = new Date(val)
	const resDate = d.getFullYear() + '-' + addZero((d.getMonth() + 1)) + '-' + addZero(d.getDate());
    const resTime = addZero(d.getHours()) + ':' + addZero(d.getMinutes()) + ':' + addZero(d.getSeconds());
    return resDate+" "+ resTime
}
export const addZero = function(val){
	return val < 10?"0"+val:val
}