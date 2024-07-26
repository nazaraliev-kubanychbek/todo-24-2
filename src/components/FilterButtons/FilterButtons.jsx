

const FilterButtons = ({setStatus, status}) => {
  return (
    <div>
      <button onClick={()=>{
        setStatus('all')
      }}>all</button>
      <button onClick={()=>{
        setStatus('active')
      }}>active</button>
      <button onClick={()=>{
        setStatus('completed')
      }}>completed</button>
      <button onClick={()=>{
        setStatus('important')
      }}>important</button>
      <button onClick={()=>{
        setStatus('deleted')
      }}>deleted</button>
    </div>
  );
};

export default FilterButtons;
