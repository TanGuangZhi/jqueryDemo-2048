
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
    let pos = Math.floor(Math.random(0, count))
    randomPosition["x"] = Math.floor(temp[pos] / 4)
    randomPosition["y"] = temp[pos] % 4


    // 随机生成一个数字
    let randomNum = Math.random()<0.5?2:4
}

let nums = []
generateOneRandomNum()