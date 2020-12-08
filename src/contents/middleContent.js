import AvatarContent from '../components/AvatarContent'
import Slider from '../components/Slider'
import Review from '../components/Review'

const images = [
    {
        image: 'https://wallpaperaccess.com/full/340434.png',
    },
    {
        image: 'https://wallpaperaccess.com/full/340434.png',
    },
    {
        image: 'https://wallpaperaccess.com/full/340434.png',
    },
    {
        image: 'https://wallpaperaccess.com/full/340434.png',
    },
    {
        image: 'https://wallpaperaccess.com/full/340434.png',
    },
    {
        image: 'https://wallpaperaccess.com/full/340434.png',
    },
]

export const headerContent = [
    {
        heading: '깨끗한 청소가 필요할 땐? 청소의 달인에게 맡겨보세요!'
    }
]

export const middleContent = [
    {
        heading: '첫째, 청소의 달인은 꼼꼼합니다.',
        paragraph: '주방 위에 달린 환기구 필터, 냉장고, 혹은 화장실 뒤쪽까지 확인 해 보셨나요? 청소의 달인은 다른 업체가 소홀히 할 수도 있는 곳 까지 하나하나 깔끔하게 청소합니다.',
        component: <Slider size={{
            mobileHeight: 300,
            desktopHeight: 600,
        }} images={images} />,
        action: null,
    },
    {
        heading: '둘째, 청소의 달인은 성실합니다.',
        paragraph: '고객님들의 소중한 보금자리인 집! 아무에게나 맡기지 마세요. 청소의 달인은 항상 고객님이 만족을 우선으로 생각합니다.',
        component: <AvatarContent />,
        action: null,
    },
    {
        heading: '셋째, 청소의 달인은 정직합니다.',
        paragraph: '청소는 해야겠는데 견적이 고민이신가요? 청소의 달인은 꼭 필요한 청소만으로 최대의 효과를 보실 수 있게 도와드립니다. 고객님의 기쁨이 저희의 보람입니다.',
        component: <Review />,
        action: null,

    }
]

export const reviews = [{
    index: 0,
    date: 'Nov 20, 2020',
    content: 'Great company with very professional and thorough workers. It was very easy to schedule a time online. Rumyana arrived on time and left my place spotless. Highly recommend and will use their service again ! Thank you !',
    location: 'Burnaby, BC',
    name: 'Henry G',
},
{
    index: 1,
    date: 'Nov 11, 2020',
    content: 'We’ve have Cleany for home cleaning service dozens of times and they are simply excellent.',
    location: 'New Westminster, BC',
    name: 'Oliver',
},
{
    index: 2,
    date: 'Nov 15, 2020',
    content: 'test 3',
    location: 'New Westminster, BC',
    name: 'Oliver',
},

]