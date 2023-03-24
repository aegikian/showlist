import { useEffect } from 'react'
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { fetchShowroom } from "../store/reducers/ActionCreatorsShowroom";
import './css/showroomPage.css'
import Maps from './Map';


export const ShowroomPage = () => {

  const dispatch = useAppDispatch()
  const params = useParams()
  const { showroom, isLoading, error } = useAppSelector(state => state.showroomPageReducer)
  
  useEffect(() => {
    dispatch(fetchShowroom(params.id))
  }, [params.id, dispatch])

  let coord = [45.055193, 39.032096]

  return (
    <div className='showroom_page_all_container'>
      {error && <h1>{error}</h1>}
      {isLoading && <h1>Загрузка...</h1>}
      { showroom && <div>
      <img className='img_showroom_page' src={require(`../image/${showroom?.image}.jpeg`)} alt={showroom?.name} />
      <div className='showroom_page_description_container'>
     <h3 className='name_showroom_page'>
        { showroom?.name }
      </h3>
          <h4>
        { showroom?.description }
      </h4>
      <h4>{showroom?.name}</h4>
          <h5>{showroom?.telNumber}</h5>
          <h5>Адресс: { showroom.address }</h5>
      <div className='map_showroom_page'>
        <Maps coordinates={coord} />
      </div>
        </div>
     </div>
      }
      </div>
  )
}
