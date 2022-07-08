import { useNavigate } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
function Detail() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1)
  }
  return (
    <div>
      <NavBar onBack={goBack}>标题</NavBar>
      详情
    </div>
  );
}

export default Detail;
