const superbowlWin = (array) => {

    let foundWin = array.find(array => array.result === 'W')
    if(foundWin) return foundWin['year'];
    else return undefined;
    } 
