import FormContent from './FormContent'

export const formParagraphs = [
    {
        header: ' 청소 종류',
        paragraph: '둘 중에 하나를 선택해 주세요.',
        content: (currentPageNum, list, updateList) => <FormContent currentPageNum={currentPageNum} updateList={updateList} list={list} />
    },
    {
        header: '거주지 종류',
        paragraph: '셋 중에 하나를 선택해 주세요.',
        content: (currentPageNum, list, updateList) => <FormContent currentPageNum={currentPageNum} updateList={updateList} list={list} />
    },
    {
        header: '거주지 크기',
        paragraph: '방/화장실 개수와 면적을 입력 해주세요.',
        content: (currentPageNum, list, updateList) => <FormContent currentPageNum={currentPageNum} updateList={updateList} list={list} />
    },
    {
        header: '카펫 청소',
        paragraph: '스팀 카펫 청소를 원하시면 체크하시고 카펫이 깔린 방 개수를 입력해주세요.',
        content: (currentPageNum, list, updateList) => <FormContent currentPageNum={currentPageNum} updateList={updateList} list={list} />
    },
]

export const formContentData = [
    {
        page: 0,
        id: 'cleaningType',
        type: 'radio',
        items: ['거주용 청소', '상업용 청소'],
        label: '',
        currentValue: '',
        optional: false,
    },
    {
        page: 1,
        id: 'dwellingType',
        type: 'radio',
        items: ['콘도', '일반 하우스', '타운 하우스'],
        label: '',
        currentValue: '',
        optional: false,
    },
    {
        page: 2,
        id: 'roomNum',
        type: 'counter',
        items: '방 개수',
        label: 0,
        currentValue: 0,
        optional: false,
    },
    {
        page: 2,
        id: 'bathNum',
        type: 'counter',
        items: '화장실 개수',
        label: 0,
        currentValue: 0,
        optional: false,
    },
    {
        page: 2,
        id: 'sqftSize',
        type: 'inputField',
        items: '면적',
        label: 0,
        currentValue: 0,
        optional: true,
    },
    {
        page: 3,
        id: 'carpetType',
        type: 'radio',
        items: ['일반 카펫 청소', '스팀 카펫 청소'],
        label: '',
        currentValue: '',
        optional: false,
    },
    {
        page: 3,
        id: 'carpetRoomNum',
        type: 'counter',
        items: '카펫 방 개수',
        label: 0,
        currentValue: 0,
        optional: true,
    },
]
