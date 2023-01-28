import globeImage from '../../assets/images/favicon.png'
import Styled from './style'

export default function Error() {
  return (
    <Styled.DivError>
      <img src={globeImage} alt="Globe Image" />
      <h1>Sorry, no results found!</h1>
    </Styled.DivError>
  )
}
