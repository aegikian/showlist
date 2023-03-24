import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { fetchShowrooms } from '../store/reducers/ActionCreatorsShowroom'
import ShowroomItem from './ShowroomItem'
import './css/showroomList.css'

const ShowroomList = () => {
    const dispatch = useAppDispatch()
    const { showroom, isLoading, error }
        =
        useAppSelector(state => state.showroomReducer)
    
    useEffect(() => {
        dispatch(fetchShowrooms());
    }, [dispatch])


  return (
      <div className='showroom_list_all_container'>
          {isLoading && <h1>Загрузка...</h1>}
          {error && <h1>{error}</h1>}
          <div className='showroom_list_item_container'>
          {showroom.map((sr, i) => (
              <ShowroomItem
                  key={sr.id}
                  sr={sr}
              />
          ))}
              </div>
    </div>
  )
}

export default ShowroomList;