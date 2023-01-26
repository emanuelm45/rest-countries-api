import globeImage from '../../../public/favicon.png'
import * as Styled from './style'

export default function Error() {
  return (
    <Styled.DivError>
      <img src={globeImage} alt="Globe Image" />
      <h1>Sorry, no results found!</h1>
    </Styled.DivError>
  )
}
