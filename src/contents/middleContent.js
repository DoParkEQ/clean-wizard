import AvatarContent from '../components/AvatarContent'
import Slider from '../components/Slider'
import Review from '../components/Review'
import sliderImage1 from '../assets/slider1.jpg'
import sliderImage2 from '../assets/slider2.jpg'
import sliderImage3 from '../assets/slider3.jpg'
import sliderImage4 from '../assets/slider4.jpg'
import sliderImage5 from '../assets/slider5.jpg'
import sliderImage6 from '../assets/slider6.jpg'
import sliderImage7 from '../assets/slider7.jpg'

const images = [
    {
        image: sliderImage1,
    },
    {
        image: sliderImage2,
    },
    {
        image: sliderImage3,
    },
    {
        image: sliderImage4,
    },
    {
        image: sliderImage5,
    },
    {
        image: sliderImage6,
    },
    {
        image: sliderImage7,
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
    content: '여러 업체에 청소를 해봤는데 청소의 달인 처럼 만족도가 높은 업체는 없었습니다. 친환경으로 구석, 구석 먼지를 불고 청소기로 흡입하시더군요. 샷시 유리창도 너무 깨끗하게 새것처럼 해 주셨어요. 수납장 주방도 정말 반짝반짝하게 해 주셔서 너무 감사합니다 ^^',
    location: 'Burnaby, BC',
    name: '김*숙 님',
},
{
    index: 1,
    date: 'Aug 09, 2020',
    content: '대표님이 직접오셔서 견적을 보셨고 오셨는데 복장이며, 스타일이 다른 업체보다 믿음이 가더라구요. 청소 당일날 구석구석 샷시, 유리벽, 화장실, 주방을 너무 깨끗하게 청소 해주셨어요. 무더운 여름 날씨에 땀을 흠뻑 흘리시면서 열심히 해 주신 청소의 달인 대표님 이하 전문가 분들께 다시한번 감사의 말씀을 드립니다.',
    location: 'Coquitlam, BC',
    name: '고*영 님',
},
{
    index: 2,
    date: 'Jun 15, 2020',
    content: '타운 하우스 이사 입주 청소 주방,냉장고 식기 세척기 등 많이 지저분하고 기름때가 많았는데 청소의달인에서 정말 새것마냥 깨끗하게 해주셨어요. 그날 정말 고생 많이 하셨습니다. 앞으로도 사업 번창하세요!',
    location: 'Vancouver, BC',
    name: '박*경 님',
},
{
    index: 3,
    date: 'Apr 03, 2020',
    content: '이사를 일주일 앞두고 여러 입주 청소업체를 상담하고 찾다가 청소의 달인을 선택하게 되었습니다. 대표님이 정말 친절하고 자세하게 청소견적을 내주셔서 대만족 했습니다. 집이 깔끔한건 둘째치고 청소 후 집안의 공기가 달라졌어요. 저도 매번 이사다니면서 여러번 맡겨봤는데 이만큼 만족한 적은 청소의 달인이 처음인 것 같습니다.',
    location: 'Vancouver, BC',
    name: '최*우 님',
},

]