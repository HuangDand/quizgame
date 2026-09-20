const quizData = [
    {
        question: "1. 万有引力定律的发现者是？",
        options: ["伽利略", "牛顿", "爱因斯坦", "开普勒"],
        answer: "牛顿"
    },
    {
        question: "2. 细胞有氧呼吸的主要场所是？",
        options: ["细胞核", "叶绿体", "线粒体", "高尔基体"],
        answer: "线粒体"
    },
    {
        question: "3. 二进制数 101 转换成十进制是？",
        options: ["3", "5", "6", "101"],
        answer: "5"
    },
    {
        question: "4. 《资本论》的作者是？",
        options: ["恩格斯", "马克思", "列宁", "黑格尔"],
        answer: "马克思"
    },
    {
        question: "5. 理想气体状态方程 PV=nRT 里，R 的名称是？",
        options: ["重力加速度", "普适气体常量", "阿伏伽德罗常数", "玻尔兹曼常量"],
        answer: "普适气体常量"
    }
];

let currentQuestion = 0;
let score = 0;
const quizBox = document.getElementById('quiz-box');
const resultDiv = document.getElementById('result');

function renderQuestion(){
    quizBox.innerHTML = "";
    const item = quizData[currentQuestion];
    const div = document.createElement('div');
    div.className = "question";
    div.innerHTML = `<h3>${item.question}</h3>`;
    
    item.options.forEach(opt=>{
        const optDiv = document.createElement('div');
        optDiv.className = "option";
        optDiv.innerText = opt;
        optDiv.onclick = function(){
            if(opt === item.answer){
                score++;
            }
            currentQuestion++;
            if(currentQuestion < quizData.length){
                renderQuestion();
            }else{
                showResult();
            }
        }
        div.appendChild(optDiv);
    })
    quizBox.appendChild(div);
}

function showResult(){
    quizBox.innerHTML = "";
    let output = `<h3>答题结束！你的得分：${score}/${quizData.length}</h3>`;
    output += "<p>答题详情：</p>";
    quizData.forEach((item, idx)=>{
        output += `<p>第${idx+1}题：正确答案「${item.answer}」</p>`;
    })
    resultDiv.innerHTML = output;
}

document.addEventListener('DOMContentLoaded', renderQuestion);
