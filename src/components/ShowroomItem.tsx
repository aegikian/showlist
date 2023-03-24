import { FC } from 'react'
import { useNavigate } from 'react-router';
import { IShowroom } from '../interfaces/IShowroom'
import './css/showroomItem.css'

interface ShowroomItemProps {
    sr: IShowroom;
}

const ShowroomItem: FC<ShowroomItemProps> = ({ sr }) => {
    const history = useNavigate()
  return (
      <div className='showroom_item_container' onClick={() => history('/showroom/'+ sr.id)}>
          <img src={require(`../image/${sr.image}.jpeg`)} alt={sr.name} className='img_showroom_item' />
          <h3 className='name_showroom_item'>
              {sr.name}
          </h3>    
          <h5>{ sr.address }</h5>
    </div>
  )
}

export default ShowroomItem;