
export const ShowComponent = ({ q, heroes }) => {

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  return (
    <>
        {
            showSearch ? (
                <div className="alert alert-primary animate__animated animate__fadeIn"> 
                    Busca un heroe 
                </div>
            )
            : showError && (
                <div className="alert alert-danger animate__animated animate__fadeIn"> 
                    No hay algún heroe con <b>{q}</b> 
                </div>
            )
        }
    </>
  );
};
