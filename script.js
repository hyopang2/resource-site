/* ======================================================
   RESOURCE GUIDE
   script.js (1/2)
====================================================== */

const resourceGrid = document.getElementById("resourceGrid");
const homePage = document.getElementById("homePage");
const detailPage = document.getElementById("detailPage");

const detailIcon = document.getElementById("detailIcon");
const detailTitle = document.getElementById("detailTitle");
const detailIntro = document.getElementById("detailIntro");

const timeline = document.getElementById("timeline");
const resultCard = document.getElementById("resultCard");

const backButton = document.getElementById("backButton");
const fullscreenBtn = document.getElementById("fullscreenBtn");

/* ======================================================
   임시 아이콘
   (나중에 SVG로 교체 예정)
====================================================== */

const iconMap = {

    toy: "assets/icons/toy.svg",

    umbrella: "assets/icons/umbrella.svg",

    fan: "assets/icons/fan.svg",

    clothes: "assets/icons/clothes.svg",

    bottle: "assets/icons/bottle.svg",

    vinyl: "assets/icons/vinyl.svg"

};


/* ======================================================
   카드 생성
====================================================== */

function createCards() {

    resourceGrid.innerHTML = "";

    resources.forEach(resource => {

        const card = document.createElement("button");

        card.className = "resourceCard fadeIn";

        card.innerHTML = `

    <div class="cardIcon">

        <img
            src="${iconMap[resource.icon]}"
            alt="${resource.title} 아이콘">

    </div>

    <h3>

        ${resource.title}

    </h3>

    <p>

        터치하여 활용 과정을 확인하세요.

    </p>

`;

        card.addEventListener("click", () => {

            showDetail(resource.id);

        });

        resourceGrid.appendChild(card);

    });

}


/* ======================================================
   상세 페이지
====================================================== */

function showDetail(id){

    const resource = resources.find(item => item.id === id);

    if(!resource){

        return;

    }

   detailIcon.innerHTML = `

    <img
        src="${iconMap[resource.icon]}"
        alt="${resource.title} 아이콘">

`;

    detailTitle.textContent = resource.title;

    detailIntro.textContent = resource.intro;

    timeline.innerHTML = "";

    resultCard.innerHTML = "";

    createTimeline(resource);

    createResult(resource);

    homePage.classList.add("hidden");

    detailPage.classList.remove("hidden");

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}


/* ======================================================
   뒤로가기
====================================================== */

backButton.addEventListener("click",()=>{

    detailPage.classList.add("hidden");

    homePage.classList.remove("hidden");

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ======================================================
   전체화면
====================================================== */

fullscreenBtn.addEventListener("click", toggleFullscreen);

function toggleFullscreen() {

    if (!document.fullscreenElement) {

        document.documentElement.requestFullscreen();

    } else {

        document.exitFullscreen();

    }

}

document.addEventListener("fullscreenchange", () => {

    if (document.fullscreenElement) {

        fullscreenBtn.textContent = "✕";

    } else {

        fullscreenBtn.textContent = "⛶";

    }

});

/* ======================================================
   타임라인 생성
====================================================== */

function createTimeline(resource){

    resource.timeline.forEach((item,index)=>{

        // 일반 단계
        if(item.type==="step"){

            const step=document.createElement("div");

            step.className="timelineStep fadeIn";

            step.innerHTML=`

                <div class="stepCircle">

                    ${index+1}

                </div>

                <div class="stepContent">

                    <h3>${item.title}</h3>

                    <p>${item.text}</p>

                </div>

            `;

            timeline.appendChild(step);

        }

        // 분기(장난감)
        else if(item.type==="branch"){

            const wrapper=document.createElement("div");

            wrapper.className="branchWrap fadeIn";

            wrapper.innerHTML=`

                <div class="branchCard">

                    <h3>${item.left.title}</h3>

                    <ul>

                        ${item.left.steps.map(step=>`<li>${step}</li>`).join("")}

                    </ul>

                </div>

                <div class="branchCard">

                    <h3>${item.right.title}</h3>

                    <ul>

                        ${item.right.steps.map(step=>`<li>${step}</li>`).join("")}

                    </ul>

                </div>

            `;

            timeline.appendChild(wrapper);

        }

    });

}


/* ======================================================
   결과 카드
====================================================== */

function createResult(resource){

    resultCard.className="resultCard fadeIn";

    resultCard.innerHTML=`

        <h3>

            ${resource.result.title}

        </h3>

        <p>

            ${resource.result.text}

        </p>

    `;

}


/* ======================================================
   초기 실행
====================================================== */

createCards();
