function showNumWithAnimation(randomPosition, randomNum) {
    let numCell = $('#num-cell-' + randomPosition["x"] + '-' + randomPosition["y"])
    numCell.text(randomNum)
    numCell.css('background-color', getBgColor(randomNum))
    numCell.css("color", getNumberColor(randomNum))

    numCell.animate({
        winth: '100px',
        height: '100px',
        top: getPosition(randomPosition["x"], randomPosition["y"].top),
        left: getPosition(randomPosition["x"], randomPosition["y"].left)
    }, 500)
}