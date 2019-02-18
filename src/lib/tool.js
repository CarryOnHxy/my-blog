export const formatTime = (timeStamp)=>{
    let date = new Date(Number(timeStamp))
    return {
        year:date.getFullYear(),
        month:date.getMonth()+1,//getMonth返回12月份，一月份从0开始
        day:date.getDate(),
        hours:date.getHours(),
        minutes:date.getMinutes()
    }
}