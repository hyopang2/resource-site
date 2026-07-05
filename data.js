const resources = [

    {
        id: "toy",
        title: "플라스틱 장난감",
        icon: "toy",

        intro: "기부된 장난감은 상태를 확인한 뒤 두 가지 방식으로 활용됩니다.",

        timeline: [

            {
                type: "step",
                title: "기부",
                text: "기부된 플라스틱 장난감을 접수합니다."
            },

            {
                type: "step",
                title: "상태 확인",
                text: "사용 가능한지 확인합니다."
            },

            {
                type: "branch",

                left: {

                    title: "고장·노후",

                    steps: [

                        "분해",

                        "소재별 분류",

                        "플라스틱은 판재 제작 및 소재화 연구",

                        "기타 소재는 분리배출 또는 정크아트 활용"

                    ]

                },

                right: {

                    title: "사용 가능",

                    steps: [

                        "세척",

                        "필요한 곳에 나눔"

                    ]

                }

            }

        ],

        result: {

            title: "새로운 자원이 됩니다",

            text: "작은 장난감도 버려지지 않고 새로운 자원이 될 수 있습니다."

        }

    },





    {

        id: "umbrella",

        title: "접이식 우산",

        icon: "umbrella",

        intro: "우산은 수리에 필요한 부품으로 다시 활용됩니다.",

        timeline: [

            {
                type: "step",
                title: "기부",
                text: "기부된 우산을 접수합니다."
            },

            {
                type: "step",
                title: "분해",
                text: "우산을 분해합니다."
            },

            {
                type: "step",
                title: "부품 선별",
                text: "사용 가능한 부품을 분리합니다."
            }

        ],

        result: {

            title: "다른 우산을 살립니다",

            text: "분리한 부품은 다른 우산의 수리에 사용됩니다."

        }

    },





    {

        id: "fan",

        title: "손선풍기",

        icon: "fan",

        intro: "손선풍기는 수리 교육에 활용됩니다.",

        timeline: [

            {
                type: "step",
                title: "기부",
                text: "기부된 손선풍기를 접수합니다."
            },

            {
                type: "step",
                title: "점검",
                text: "제품 상태를 확인합니다."
            },

            {
                type: "step",
                title: "수리 실습",
                text: "수리 교육 및 실습 재료로 활용합니다."
            }

        ],

        result: {

            title: "수리 문화를 만듭니다",

            text: "버려질 제품이 새로운 배움의 재료가 됩니다."

        }

    },





    {

        id: "clothes",

        title: "의류",

        icon: "clothes",

        intro: "기부된 의류는 공유옷장에서 새로운 주인을 기다립니다.",

        timeline: [

            {
                type: "step",
                title: "기부",
                text: "의류를 접수합니다."
            },

            {
                type: "step",
                title: "상태 확인",
                text: "판매 가능한 상태인지 확인합니다."
            },

            {
                type: "step",
                title: "공유옷장 입고",
                text: "판매를 위해 진열합니다."
            }

        ],

        result: {

            title: "새로운 주인을 만납니다",

            text: "아직 입을 수 있는 옷은 다시 사용됩니다."

        }

    },





    {

        id: "bottle",

        title: "화장품 공병",

        icon: "bottle",

        intro: "깨끗하게 세척하여 다시 용기로 사용합니다.",

        timeline: [

            {
                type: "step",
                title: "기부",
                text: "공병을 접수합니다."
            },

            {
                type: "step",
                title: "세척",
                text: "깨끗하게 세척합니다."
            },

            {
                type: "step",
                title: "재사용",
                text: "세제와 샴푸 등을 담는 용기로 사용합니다."
            }

        ],

        result: {

            title: "다시 쓰는 용기",

            text: "한 번 쓰고 버리지 않고 반복해서 사용합니다."

        }

    },





    {

        id: "vinyl",

        title: "비닐",

        icon: "vinyl",

        intro: "비닐은 새활용 제품으로 다시 태어납니다.",

        timeline: [

            {
                type: "step",
                title: "기부",
                text: "쇼핑봉투, 과자봉투, 택배봉투 등을 접수합니다."
            },

            {
                type: "step",
                title: "압착 공정",
                text: "입주기업 리어플라스틱에서 소재를 가공합니다."
            },

            {
                type: "step",
                title: "새활용",
                text: "바인딩북 표지로 제작합니다."
            }

        ],

        result: {

            title: "새 제품으로 탄생",

            text: "버려지는 비닐이 새로운 제품으로 다시 태어납니다."

        }

    }

];
