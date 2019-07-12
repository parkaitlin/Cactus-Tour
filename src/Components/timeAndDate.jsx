  export const handleTime = (start)=>{
    const time = start;
    const timeArray = time.split(':');
    const hour = parseInt(timeArray[0]);
    
    if(hour === 0){
      return `12:${timeArray[1]} AM`
    } else if(hour === 12){
      return `${time} PM`
    } else if(hour > 12){
      return `${hour - 12}:${timeArray[1]} PM`
    } else {
      return `${hour}:${timeArray[1]} AM`
    }
  }
  export const handleMonth = (date)=>{
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const monthNum = new Date(date).getMonth()
    return months[monthNum]
  }
  
  export const handleDate = (date)=>{
    const dateNum = new Date(date).getDate()
    return dateNum + 1
  }
