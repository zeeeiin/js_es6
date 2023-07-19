

let result = 0;

function add(x) {
    result += x;
}


function minus(x) {
    result -= x;
}


//default방식으로 객체 내보내기
//key 방식 or 향상된 리터럴
export default { a : add, b : minus}
//두 개를 내보내는 방법도 있다. -> 객체로 묶어서 내보내기