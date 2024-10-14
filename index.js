function displaytime()
{
    const date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let session="AM"

    if(hours>=12)
    {
        session="PM";
        hours=hours-12;
    }
    hours=hours > 10 ?hours: "0"+hours;
    minutes=minutes> 10?minutes:"0"+minutes;
    seconds=seconds> 10?seconds:"0"+seconds;

    document.getElementById('hours').innerHTML=hours;
    document.getElementById('minutes').innerHTML=minutes;
    document.getElementById('seconds').innerHTML=seconds;



}
setInterval(displaytime,1000);