import { Button, Swiper, Toast } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate = useNavigate();
  const clickHandle = () => {
    navigate('/detail')
  }
  const gotoCart = () => {
    navigate('/shoppingCart')
  }
  const imgList = ['http://bjtestimg.jianke.com/hospital/doctorImage/doctorLiveImage/202202/473776_1646014724_38.jpg', 'http://bjtestimg.jianke.com/hospital/doctorImage/doctorLiveImage/202203/339782_1647345242_38.jpg', 'http://bjtestimg.jianke.com/hospital/doctorImage/doctorLiveImage/202203/473776_1647412804_38.jpg', 'https://img.jianke.com/hospital/live/poster/202206/8a8087e980f60af901816b45b53674a2.png']
  const swiperItem = imgList.map((item, index) => {
    return (
      <Swiper.Item key={index}>
        <div style={{
          width: '100%',
          height: '200px'
        }}>
          <img
            style={{
              width: '100%',
              height: '100%'
            }}
            src={item}
            alt=""
            onClick={() => {
              Toast.show(`你点击了图片 ${index + 1}`)
              gotoCart()
            }}
          />
        </div>
      </Swiper.Item>
    )
  })
  return (
    <div>
      <Swiper autoplay loop>{swiperItem}</Swiper>
      首页
      <div>
        <Button color='primary' fill='solid' onClick={clickHandle}>
          跳转
        </Button>
      </div>
    </div>
  );
}

export default Home;
