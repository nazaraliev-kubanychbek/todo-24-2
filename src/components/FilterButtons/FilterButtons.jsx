import './filterButtons.css';

const FilterButtons = ({setStatus, status}) => {
  return (
    <div className='filterButtons'>

      <button className={
        status === 'all'
        ? 'filterButtons-btn filterButtons-btn-active'
        : 'filterButtons-btn'
      } onClick={()=>{
        setStatus('all')
      }}>all</button>

      <button className={
        status === 'active'
        ? 'filterButtons-btn filterButtons-btn-active'
        : 'filterButtons-btn'
      } onClick={()=>{
        setStatus('active')
      }}>active</button>

      <button className={
        status === 'completed'
        ? 'filterButtons-btn filterButtons-btn-active'
        : 'filterButtons-btn'
      } onClick={()=>{
        setStatus('completed')
      }}>completed</button>

      <button className={
        status === 'important'
        ? 'filterButtons-btn filterButtons-btn-active'
        : 'filterButtons-btn'
      } onClick={()=>{
        setStatus('important')
      }}>important</button>

      <button className={
        status === 'deleted'
        ? 'filterButtons-btn filterButtons-btn-active'
        : 'filterButtons-btn'
      } onClick={()=>{
        setStatus('deleted')
      }}>deleted</button>
    </div>
  );
};

export default FilterButtons;
