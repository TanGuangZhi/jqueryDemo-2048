var initPosition = []

$(document).ready(function () {
    newgame()
})

function newgame() {
    $(".num-cell").remove()

    init();
    generateOneRandomNum(initPosition)
    generateOneRandomNum(initPosition)

    // 更新上层单元格视图

    update_top_view()

}

function init() {
    // 初始化下层单元格位置
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let containerCell = $("#container-cell-" + i + "-" + j)
            containerCell.css('top', getPosition(i, j)["top"])
            containerCell.css('left', getPosition(i, j)["left"])
        }

    }

    // 初始随机位置
    for (let i = 0; i < 4; i++) {
        initPosition[i] = []
        for (let j = 0; j < 4; j++) {
            initPosition[i][j] = 0
        }

    }

    // 初始化上层单元格
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            $("#main-container").append('<div class="num-cell" id="num-cell-' + i + '-' + j + '"></div>')
            // containerCell.css('top', getPosition(i, j)["top"])
            // containerCell.css('left', getPosition(i, j)["left"])
        }

    }


    // initPosition[0][1] = 4
    // initPosition[1][2] = 16
    // update_top_view()

    // 更新上层单元格视图

    // update_top_view()

}

function update_top_view() {
    // $(".num-cell").remove()

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let numCell = $("#num-cell-" + i + '-' + j)
            if (initPosition[i][j] == 0) {
                numCell.css("width", "0px")
                numCell.css("height", "0px")
                numCell.css('top', (getPosition(i, j)["top"]+50))
                numCell.css('left', (getPosition(i, j)["left"]+50))
            } else {
                numCell.css("width", "100px")
                numCell.css("height", "100px")
                numCell.css('top', getPosition(i, j)["top"])
                numCell.css('left', getPosition(i, j)["left"])
                numCell.css("background-color", getBgColor(initPosition[i][j]))
                numCell.css("color", getNumberColor(initPosition[i][j]))
                numCell.text(initPosition[i][j])
            }
        }

    }
}


/*
    在随机单元格生成一个随机数
    1. 随机产生一个2或4
    2. 在空余的空间随机找一个
*/

function generateOneRandomNum(nums) {
    // 随机找一个位置
    let temp = []
    let count = 0
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (nums[i][j] == 0) {
                temp[count] = i * 4 + j
                count++
            }
        }

    }

    let randomPosition = {}
    let pos = Math.floor(Math.random() * count)
    randomPosition["x"] = Math.floor(temp[pos] / 4)
    randomPosition["y"] = temp[pos] % 4


    // 随机生成一个数字
    let randomNum = Math.random() < 0.5 ? 2 : 4

    // 在随机位置显示随机数字
    initPosition[randomPosition["x"]][randomPosition["y"]] = randomNum
    showNumWithAnimation(randomPosition, randomNum)
}































